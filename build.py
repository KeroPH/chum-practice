"""Verify every problem's tests against its reference solution and build problems.js.

Usage:
  python build.py                 # verify all data/*.json, write problems.js
  python build.py data/set_b.json # verify only that file (no output written)

A test is either {"input": "...", "output": "..."} or, for big inputs,
{"gen": "<python program that PRINTS the input>", "output": "..."}.
Generators must be deterministic (use random.seed(<const>)); the browser runs the
same generator in Pyodide (Python 3.12) to rebuild the input.
Optional per-problem "timeLimit" (seconds, default 5) is the browser limit.
"""
import json, subprocess, sys, glob, os, time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
REQUIRED = ["id", "title", "category", "difficulty", "description", "solution", "tests"]
SLOW = 1.0  # CPython seconds; Pyodide is ~2-3x slower


def norm(s):
    return "\n".join(line.rstrip() for line in s.replace("\r\n", "\n").strip("\n").split("\n")).strip()


def run(code, stdin):
    t = time.perf_counter()
    p = subprocess.run([sys.executable, "-c", code], input=stdin, capture_output=True, text=True,
                       timeout=30, encoding="utf-8")
    dt = time.perf_counter() - t
    if p.returncode != 0:
        raise RuntimeError(p.stderr.strip().splitlines()[-1] if p.stderr.strip() else "nonzero exit")
    return p.stdout, dt


def check_test(pr, i, t):
    msgs = []
    try:
        if "gen" in t:
            stdin, _ = run(t["gen"], "")
            stdin2, _ = run(t["gen"], "")
            if stdin != stdin2:
                return [f"{pr['id']} test {i+1}: generator is not deterministic"]
        else:
            stdin = t["input"]
        got, dt = run(pr["solution"], stdin)
    except Exception as e:
        return [f"{pr['id']} test {i+1}: crashed: {e}"]
    if norm(got) != norm(t["output"]):
        msgs.append(f"{pr['id']} test {i+1}: MISMATCH\n  expected: {t['output'][:300]!r}\n  got:      {got[:300]!r}")
    if dt > SLOW * pr.get("timeLimit", 5) / 5:
        # timing is noisy when the machine is busy -> warning only, not an error
        print(f"  warning: {pr['id']} test {i+1}: slow-ish reference run {dt:.2f}s (may be machine load)")
    return msgs


def verify(path):
    with open(path, encoding="utf-8") as f:
        probs = json.load(f)
    errors = 0
    jobs = []
    with ThreadPoolExecutor(max_workers=3) as ex:
        for pr in probs:
            missing = [k for k in REQUIRED if k not in pr]
            if missing:
                print(f"[{path}] {pr.get('id')}: missing {missing}"); errors += 1; continue
            if len(pr["tests"]) < 3:
                print(f"[{path}] {pr['id']}: needs >= 3 tests"); errors += 1
            for i, t in enumerate(pr["tests"]):
                if "input" not in t and "gen" not in t:
                    print(f"[{path}] {pr['id']} test {i+1}: needs input or gen"); errors += 1; continue
                if "gen" in t and not t.get("hidden"):
                    print(f"[{path}] {pr['id']} test {i+1}: gen tests must be hidden"); errors += 1
                jobs.append(ex.submit(check_test, pr, i, t))
        for j in jobs:
            for m in j.result():
                print(f"[{os.path.basename(path)}] {m}"); errors += 1
    print(f"{path}: {len(probs)} problems, {errors} errors")
    return probs, errors


def main():
    if len(sys.argv) > 1:
        _, e = verify(sys.argv[1]); sys.exit(1 if e else 0)
    allp, total_err, ids = [], 0, set()
    for path in sorted(glob.glob(os.path.join(HERE, "data", "*.json"))):
        probs, e = verify(path); total_err += e
        for p in probs:
            if p["id"] in ids:
                print(f"duplicate id {p['id']}"); total_err += 1
            ids.add(p["id"])
        allp += probs
    with open(os.path.join(HERE, "problems.js"), "w", encoding="utf-8") as f:
        f.write("window.PROBLEMS = " + json.dumps(allp, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print(f"TOTAL: {len(allp)} problems, {total_err} errors -> problems.js")


if __name__ == "__main__":
    main()
