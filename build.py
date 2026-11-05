"""Verify every problem's tests against its reference solution and build problems.js.

Usage:
  python build.py                 # verify all data/*.json, write problems.js
  python build.py data/set_b.json # verify only that file (no output written)
"""
import json, subprocess, sys, glob, os

HERE = os.path.dirname(os.path.abspath(__file__))
REQUIRED = ["id", "title", "category", "difficulty", "description", "solution", "tests"]


def norm(s):
    return "\n".join(line.rstrip() for line in s.replace("\r\n", "\n").strip("\n").split("\n")).strip()


def run(code, stdin):
    p = subprocess.run([sys.executable, "-c", code], input=stdin, capture_output=True, text=True, timeout=10)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.strip().splitlines()[-1] if p.stderr.strip() else "nonzero exit")
    return p.stdout


def verify(path):
    with open(path, encoding="utf-8") as f:
        probs = json.load(f)
    errors = 0
    for pr in probs:
        missing = [k for k in REQUIRED if k not in pr]
        if missing:
            print(f"[{path}] {pr.get('id')}: missing {missing}"); errors += 1; continue
        if len(pr["tests"]) < 3:
            print(f"[{path}] {pr['id']}: needs >= 3 tests"); errors += 1
        for i, t in enumerate(pr["tests"]):
            try:
                got = run(pr["solution"], t["input"])
            except Exception as e:
                print(f"[{path}] {pr['id']} test {i+1}: solution crashed: {e}"); errors += 1; continue
            if norm(got) != norm(t["output"]):
                print(f"[{path}] {pr['id']} test {i+1}: MISMATCH\n  expected: {t['output']!r}\n  got:      {got!r}"); errors += 1
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
        f.write("window.PROBLEMS = " + json.dumps(allp, ensure_ascii=False, indent=1) + ";\n")
    print(f"TOTAL: {len(allp)} problems, {total_err} errors -> problems.js")


if __name__ == "__main__":
    main()
