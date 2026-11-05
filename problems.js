window.PROBLEMS = [
 {
  "id": "a01",
  "title": "Numbers, Get Em!",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>You are given a string that may contain letters, digits and other symbols. Find the <b>sum of all the digits</b> that appear in the string.</p><p>For example, in <code>Hello12345World!56789</code> the digits are 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, whose sum is <code>50</code>.</p><h4>Input</h4><p>A single line containing the string <code>s</code>.</p><h4>Output</h4><p>A single integer: the sum of all digits in <code>s</code>. If there are no digits, print <code>0</code>.</p>",
  "solution": "s = input()\nprint(sum(int(ch) for ch in s if ch.isdigit()))\n",
  "tests": [
   {
    "input": "Hello12345World!56789\n",
    "output": "50\n",
    "hidden": false
   },
   {
    "input": "1a2b3c4d5e6f7g8h9i0j!@#$\n",
    "output": "45\n",
    "hidden": false
   },
   {
    "input": "NoDigitsHere!\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "7\n",
    "hidden": true
   },
   {
    "input": "000\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "a9 b9 c9 d9!\n",
    "output": "36\n",
    "hidden": true
   },
   {
    "input": "-5 + 3 = -2\n",
    "output": "10\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a02",
  "title": "Is Subsequence",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Given two strings <code>S</code> and <code>T</code>, determine whether <code>S</code> is a <b>subsequence</b> of <code>T</code>.</p><p>A subsequence is formed by deleting zero or more characters from <code>T</code> without changing the order of the remaining characters. For example, <code>ace</code> is a subsequence of <code>abcde</code>, but <code>aec</code> is not. The empty string is a subsequence of every string.</p><h4>Input</h4><ul><li>Line 1: the string <code>S</code> (may be empty).</li><li>Line 2: the string <code>T</code>.</li></ul><h4>Output</h4><p>Print <code>True</code> if <code>S</code> is a subsequence of <code>T</code>, otherwise print <code>False</code>.</p>",
  "solution": "s = input()\nt = input()\ni = 0\nfor ch in t:\n    if i < len(s) and ch == s[i]:\n        i += 1\nprint(i == len(s))\n",
  "tests": [
   {
    "input": "abc\nahbgdc\n",
    "output": "True\n",
    "hidden": false
   },
   {
    "input": "axc\nahbgdc\n",
    "output": "False\n",
    "hidden": false
   },
   {
    "input": "\nabc\n",
    "output": "True\n",
    "hidden": true
   },
   {
    "input": "abc\nabc\n",
    "output": "True\n",
    "hidden": true
   },
   {
    "input": "abcd\nabc\n",
    "output": "False\n",
    "hidden": true
   },
   {
    "input": "aaa\nbababa\n",
    "output": "True\n",
    "hidden": true
   },
   {
    "input": "b\na\n",
    "output": "False\n",
    "hidden": true
   },
   {
    "input": "Ab\naAbB\n",
    "output": "True\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a03",
  "title": "Quadratic Equation Solver",
  "category": "Math",
  "difficulty": "Medium",
  "description": "<p>Solve the quadratic equation <code>a·x² + b·x + c = 0</code>. Compute the discriminant <code>D = b² − 4ac</code>.</p><ul><li>If <code>D &gt; 0</code>, there are two real roots. Print <code>Root 1: x1</code> on the first line and <code>Root 2: x2</code> on the second, where <code>x1 = (−b + √D) / (2a)</code> and <code>x2 = (−b − √D) / (2a)</code>.</li><li>If <code>D = 0</code>, print <code>Root: x</code> where <code>x = −b / (2a)</code>.</li><li>If <code>D &lt; 0</code>, print <code>No real roots</code>.</li></ul><p>All roots are printed with exactly <b>2 decimal places</b>.</p><h4>Input</h4><p>Three lines containing the real numbers <code>a</code>, <code>b</code> and <code>c</code>, one per line. It is guaranteed that <code>a ≠ 0</code>.</p><h4>Output</h4><p>The root(s) in the format described above, or <code>No real roots</code>.</p>",
  "solution": "import math\na = float(input())\nb = float(input())\nc = float(input())\nd = b * b - 4 * a * c\nif d > 0:\n    r1 = (-b + math.sqrt(d)) / (2 * a)\n    r2 = (-b - math.sqrt(d)) / (2 * a)\n    print(f\"Root 1: {r1 + 0.0:.2f}\")\n    print(f\"Root 2: {r2 + 0.0:.2f}\")\nelif d == 0:\n    r = -b / (2 * a)\n    print(f\"Root: {r + 0.0:.2f}\")\nelse:\n    print(\"No real roots\")\n",
  "tests": [
   {
    "input": "1\n-3\n2\n",
    "output": "Root 1: 2.00\nRoot 2: 1.00\n",
    "hidden": false
   },
   {
    "input": "1\n2\n1\n",
    "output": "Root: -1.00\n",
    "hidden": false
   },
   {
    "input": "1\n1\n1\n",
    "output": "No real roots\n",
    "hidden": true
   },
   {
    "input": "2\n0\n-8\n",
    "output": "Root 1: 2.00\nRoot 2: -2.00\n",
    "hidden": true
   },
   {
    "input": "1\n0\n0\n",
    "output": "Root: 0.00\n",
    "hidden": true
   },
   {
    "input": "-1\n2\n3\n",
    "output": "Root 1: -1.00\nRoot 2: 3.00\n",
    "hidden": true
   },
   {
    "input": "0.5\n-1.5\n1\n",
    "output": "Root 1: 2.00\nRoot 2: 1.00\n",
    "hidden": true
   },
   {
    "input": "1\n1\n-1\n",
    "output": "Root 1: 0.62\nRoot 2: -1.62\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a04",
  "title": "Shortest Character Distance",
  "category": "Strings",
  "difficulty": "Medium",
  "description": "<p>Given a string <code>s</code> and a character <code>c</code> that occurs in <code>s</code>, compute for every index <code>i</code> the distance from <code>i</code> to the <b>closest</b> occurrence of <code>c</code> in <code>s</code>. The distance between indices <code>i</code> and <code>j</code> is <code>|i − j|</code>.</p><p>For example, for <code>s = loveleetcode</code> and <code>c = e</code> the answer is <code>[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]</code>.</p><h4>Input</h4><ul><li>Line 1: the string <code>s</code>.</li><li>Line 2: a single character <code>c</code> (guaranteed to appear in <code>s</code>).</li></ul><h4>Output</h4><p>The list of distances in Python list format, e.g. <code>[1, 0, 1]</code>.</p>",
  "solution": "s = input()\nc = input()\nn = len(s)\nres = [n] * n\nprev = -n\nfor i in range(n):\n    if s[i] == c:\n        prev = i\n    res[i] = i - prev\nnxt = 2 * n\nfor i in range(n - 1, -1, -1):\n    if s[i] == c:\n        nxt = i\n    res[i] = min(res[i], nxt - i)\nprint(res)\n",
  "tests": [
   {
    "input": "loveleetcode\ne\n",
    "output": "[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]\n",
    "hidden": false
   },
   {
    "input": "aaab\nb\n",
    "output": "[3, 2, 1, 0]\n",
    "hidden": false
   },
   {
    "input": "a\na\n",
    "output": "[0]\n",
    "hidden": true
   },
   {
    "input": "baaa\nb\n",
    "output": "[0, 1, 2, 3]\n",
    "hidden": true
   },
   {
    "input": "abcba\nc\n",
    "output": "[2, 1, 0, 1, 2]\n",
    "hidden": true
   },
   {
    "input": "xxxx\nx\n",
    "output": "[0, 0, 0, 0]\n",
    "hidden": true
   },
   {
    "input": "zabcdefz\nz\n",
    "output": "[0, 1, 2, 3, 3, 2, 1, 0]\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a05",
  "title": "Balanced Parentheses",
  "category": "Stacks",
  "difficulty": "Easy",
  "description": "<p>Given a string consisting only of the characters <code>(</code>, <code>)</code>, <code>[</code>, <code>]</code>, <code>{</code> and <code>}</code>, determine whether it is <b>balanced</b>: every opening bracket is closed by the same type of bracket, and brackets are closed in the correct order.</p><h4>Input</h4><p>A single line containing the bracket string.</p><h4>Output</h4><p>Print <code>Valid</code> if the string is balanced, otherwise print <code>Invalid</code>.</p>",
  "solution": "s = input().strip()\npairs = {')': '(', ']': '[', '}': '{'}\nstack = []\nok = True\nfor ch in s:\n    if ch in '([{':\n        stack.append(ch)\n    elif not stack or stack.pop() != pairs[ch]:\n        ok = False\n        break\nprint(\"Valid\" if ok and not stack else \"Invalid\")\n",
  "tests": [
   {
    "input": "()[]{}\n",
    "output": "Valid\n",
    "hidden": false
   },
   {
    "input": "([)]\n",
    "output": "Invalid\n",
    "hidden": false
   },
   {
    "input": "{[()()]}\n",
    "output": "Valid\n",
    "hidden": true
   },
   {
    "input": "(\n",
    "output": "Invalid\n",
    "hidden": true
   },
   {
    "input": ")\n",
    "output": "Invalid\n",
    "hidden": true
   },
   {
    "input": "(((\n",
    "output": "Invalid\n",
    "hidden": true
   },
   {
    "input": "{[]}([])\n",
    "output": "Valid\n",
    "hidden": true
   },
   {
    "input": "]()[\n",
    "output": "Invalid\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a06",
  "title": "Balanced Array",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Given an array of <code>N</code> integers, determine whether it can be split at some index into a non-empty <b>left part</b> and a non-empty <b>right part</b> (both contiguous, together covering the whole array) such that the sum of the left part equals the sum of the right part.</p><p>For example, <code>1 2 3 6</code> can be split as <code>[1, 2, 3] | [6]</code> (both sums are 6), but no split of <code>1 2 3 3</code> gives equal sums.</p><h4>Input</h4><ul><li>Line 1: an integer <code>N</code> (<code>N ≥ 1</code>).</li><li>Line 2: <code>N</code> space-separated integers.</li></ul><h4>Output</h4><p>Print <code>The array can be split into two parts with equal sum.</code> if such a split exists, otherwise print <code>The array cannot be split into two parts with equal sum.</code></p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\ntotal = sum(a)\nleft = 0\nfound = False\nfor i in range(n - 1):\n    left += a[i]\n    if left * 2 == total:\n        found = True\n        break\nif found:\n    print(\"The array can be split into two parts with equal sum.\")\nelse:\n    print(\"The array cannot be split into two parts with equal sum.\")\n",
  "tests": [
   {
    "input": "4\n1 2 3 6\n",
    "output": "The array can be split into two parts with equal sum.\n",
    "hidden": false
   },
   {
    "input": "4\n1 2 3 3\n",
    "output": "The array cannot be split into two parts with equal sum.\n",
    "hidden": false
   },
   {
    "input": "1\n0\n",
    "output": "The array cannot be split into two parts with equal sum.\n",
    "hidden": true
   },
   {
    "input": "2\n5 5\n",
    "output": "The array can be split into two parts with equal sum.\n",
    "hidden": true
   },
   {
    "input": "2\n0 0\n",
    "output": "The array can be split into two parts with equal sum.\n",
    "hidden": true
   },
   {
    "input": "5\n-1 4 -2 2 1\n",
    "output": "The array cannot be split into two parts with equal sum.\n",
    "hidden": true
   },
   {
    "input": "3\n1 -1 0\n",
    "output": "The array can be split into two parts with equal sum.\n",
    "hidden": true
   },
   {
    "input": "3\n2 3 4\n",
    "output": "The array cannot be split into two parts with equal sum.\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a07",
  "title": "Find the Lesser in the Most",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Given a list of integers, find the value that occurs <b>most frequently</b>. If several values are tied for the highest frequency, print the <b>smallest</b> of them.</p><h4>Input</h4><p>A single line of space-separated integers (at least one).</p><h4>Output</h4><p>A single integer: the smallest among the most frequent values.</p>",
  "solution": "nums = list(map(int, input().split()))\nfreq = {}\nfor x in nums:\n    freq[x] = freq.get(x, 0) + 1\nbest = max(freq.values())\nprint(min(x for x in freq if freq[x] == best))\n",
  "tests": [
   {
    "input": "1 3 2 3 1 4\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "5 5 5 2 2 7\n",
    "output": "5\n",
    "hidden": false
   },
   {
    "input": "42\n",
    "output": "42\n",
    "hidden": true
   },
   {
    "input": "-3 -1 -3 -1 0\n",
    "output": "-3\n",
    "hidden": true
   },
   {
    "input": "9 8 7 6\n",
    "output": "6\n",
    "hidden": true
   },
   {
    "input": "4 4 4 4\n",
    "output": "4\n",
    "hidden": true
   },
   {
    "input": "10 -10 10 -10 3 3\n",
    "output": "-10\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a08",
  "title": "Duplicate Characters",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Given a string, find every character that appears <b>more than once</b>. Comparison is case-sensitive (<code>A</code> and <code>a</code> are different) and spaces are ignored.</p><p>Print each duplicated character together with its count, in ascending ASCII order of the characters.</p><h4>Input</h4><p>A single line containing the string.</p><h4>Output</h4><p>For each duplicated character print a line <code>c: count</code>. If no character repeats, print <code>No duplicates</code>.</p>",
  "solution": "s = input()\nfreq = {}\nfor ch in s:\n    if ch != ' ':\n        freq[ch] = freq.get(ch, 0) + 1\ndups = sorted(ch for ch in freq if freq[ch] > 1)\nif not dups:\n    print(\"No duplicates\")\nelse:\n    for ch in dups:\n        print(f\"{ch}: {freq[ch]}\")\n",
  "tests": [
   {
    "input": "programming\n",
    "output": "g: 2\nm: 2\nr: 2\n",
    "hidden": false
   },
   {
    "input": "abc\n",
    "output": "No duplicates\n",
    "hidden": false
   },
   {
    "input": "Hello World\n",
    "output": "l: 3\no: 2\n",
    "hidden": true
   },
   {
    "input": "aA bB\n",
    "output": "No duplicates\n",
    "hidden": true
   },
   {
    "input": "a a a\n",
    "output": "a: 3\n",
    "hidden": true
   },
   {
    "input": "x\n",
    "output": "No duplicates\n",
    "hidden": true
   },
   {
    "input": "112233!!\n",
    "output": "!: 2\n1: 2\n2: 2\n3: 2\n",
    "hidden": true
   },
   {
    "input": "Mississippi\n",
    "output": "i: 4\np: 2\ns: 4\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a09",
  "title": "Valid Number Checker",
  "category": "Strings",
  "difficulty": "Medium",
  "description": "<p>Determine whether a given string represents a valid <b>decimal number</b>. A valid number has:</p><ul><li>an optional sign <code>+</code> or <code>-</code>,</li><li>followed by digits with an optional decimal point (<code>12</code>, <code>12.</code>, <code>12.5</code>, <code>.5</code>) — at least one digit is required,</li><li>optionally followed by an exponent: <code>e</code> or <code>E</code>, an optional sign, and at least one digit (e.g. <code>1e10</code>, <code>2.5E-3</code>).</li></ul><p>Nothing else is allowed (no <code>inf</code>, <code>nan</code>, letters, or internal spaces). Leading and trailing spaces on the line are ignored.</p><h4>Input</h4><p>A single line containing the string.</p><h4>Output</h4><p>Print <code>Valid decimal number</code> or <code>Invalid decimal number</code>.</p>",
  "solution": "import re\ns = input().strip()\npattern = r'[+-]?(\\d+\\.?\\d*|\\.\\d+)([eE][+-]?\\d+)?'\nif re.fullmatch(pattern, s):\n    print(\"Valid decimal number\")\nelse:\n    print(\"Invalid decimal number\")\n",
  "tests": [
   {
    "input": "3.14\n",
    "output": "Valid decimal number\n",
    "hidden": false
   },
   {
    "input": "abc\n",
    "output": "Invalid decimal number\n",
    "hidden": false
   },
   {
    "input": "2.5E-3\n",
    "output": "Valid decimal number\n",
    "hidden": false
   },
   {
    "input": "-.5\n",
    "output": "Valid decimal number\n",
    "hidden": true
   },
   {
    "input": "1e\n",
    "output": "Invalid decimal number\n",
    "hidden": true
   },
   {
    "input": ".\n",
    "output": "Invalid decimal number\n",
    "hidden": true
   },
   {
    "input": "inf\n",
    "output": "Invalid decimal number\n",
    "hidden": true
   },
   {
    "input": "1.2.3\n",
    "output": "Invalid decimal number\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a10",
  "title": "12-Hour to 24-Hour Time Converter",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Convert a time given in 12-hour format <code>hh:mm AM</code> or <code>hh:mm PM</code> to 24-hour format <code>HH:MM</code>.</p><p>Remember: <code>12:xx AM</code> is <code>00:xx</code>, and <code>12:xx PM</code> is <code>12:xx</code>.</p><h4>Input</h4><p>A single line in the form <code>hh:mm AM</code> or <code>hh:mm PM</code> (<code>01 ≤ hh ≤ 12</code>, <code>00 ≤ mm ≤ 59</code>).</p><h4>Output</h4><p>The time in 24-hour format <code>HH:MM</code>, both parts with two digits.</p>",
  "solution": "t, period = input().split()\nh, m = map(int, t.split(':'))\nif period == \"AM\":\n    h = 0 if h == 12 else h\nelse:\n    h = 12 if h == 12 else h + 12\nprint(f\"{h:02d}:{m:02d}\")\n",
  "tests": [
   {
    "input": "07:05 PM\n",
    "output": "19:05\n",
    "hidden": false
   },
   {
    "input": "12:00 AM\n",
    "output": "00:00\n",
    "hidden": false
   },
   {
    "input": "12:30 PM\n",
    "output": "12:30\n",
    "hidden": true
   },
   {
    "input": "01:00 AM\n",
    "output": "01:00\n",
    "hidden": true
   },
   {
    "input": "11:59 PM\n",
    "output": "23:59\n",
    "hidden": true
   },
   {
    "input": "12:59 AM\n",
    "output": "00:59\n",
    "hidden": true
   },
   {
    "input": "09:45 AM\n",
    "output": "09:45\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a11",
  "title": "Replace Elements with Greatest Element on Right Side",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Given an array of <code>N</code> integers, replace every element with the <b>greatest element among the elements to its right</b>, and replace the last element with <code>-1</code>.</p><p>For example, <code>17 18 5 4 6 1</code> becomes <code>18 6 6 6 1 -1</code>.</p><h4>Input</h4><ul><li>Line 1: an integer <code>N</code> (<code>N ≥ 1</code>).</li><li>Line 2: <code>N</code> space-separated integers.</li></ul><h4>Output</h4><p>The modified array, space-separated, on one line.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nres = [0] * n\nmx = -1\nfirst = True\nfor i in range(n - 1, -1, -1):\n    res[i] = -1 if first else mx\n    mx = a[i] if first else max(mx, a[i])\n    first = False\nprint(*res)\n",
  "tests": [
   {
    "input": "6\n17 18 5 4 6 1\n",
    "output": "18 6 6 6 1 -1\n",
    "hidden": false
   },
   {
    "input": "1\n400\n",
    "output": "-1\n",
    "hidden": false
   },
   {
    "input": "3\n1 2 3\n",
    "output": "3 3 -1\n",
    "hidden": true
   },
   {
    "input": "4\n5 5 5 5\n",
    "output": "5 5 5 -1\n",
    "hidden": true
   },
   {
    "input": "4\n-5 -2 -9 -7\n",
    "output": "-2 -7 -7 -1\n",
    "hidden": true
   },
   {
    "input": "5\n9 7 5 3 1\n",
    "output": "7 5 3 1 -1\n",
    "hidden": true
   },
   {
    "input": "2\n0 -3\n",
    "output": "-3 -1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a12",
  "title": "Basic Calculator",
  "category": "Basics",
  "difficulty": "Easy",
  "description": "<p>Write a simple calculator. Read two numbers and an operator, then print the result of applying the operator to the two numbers (first operand on the left).</p><p>Supported operators: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>. If the operation is division and the second number is zero, print <code>Error: Division by zero</code>.</p><h4>Input</h4><ul><li>Line 1: the first number (a real number).</li><li>Line 2: the second number (a real number).</li><li>Line 3: the operator, one of <code>+ - * /</code>.</li></ul><h4>Output</h4><p>The result with exactly <b>2 decimal places</b>, or <code>Error: Division by zero</code>.</p>",
  "solution": "a = float(input())\nb = float(input())\nop = input().strip()\nif op == '/' and b == 0:\n    print(\"Error: Division by zero\")\nelse:\n    if op == '+':\n        r = a + b\n    elif op == '-':\n        r = a - b\n    elif op == '*':\n        r = a * b\n    else:\n        r = a / b\n    print(f\"{r + 0.0:.2f}\")\n",
  "tests": [
   {
    "input": "5\n3\n+\n",
    "output": "8.00\n",
    "hidden": false
   },
   {
    "input": "10\n0\n/\n",
    "output": "Error: Division by zero\n",
    "hidden": false
   },
   {
    "input": "7\n2\n/\n",
    "output": "3.50\n",
    "hidden": true
   },
   {
    "input": "2.5\n4\n*\n",
    "output": "10.00\n",
    "hidden": true
   },
   {
    "input": "3\n10\n-\n",
    "output": "-7.00\n",
    "hidden": true
   },
   {
    "input": "-6\n-1.5\n/\n",
    "output": "4.00\n",
    "hidden": true
   },
   {
    "input": "0\n5\n*\n",
    "output": "0.00\n",
    "hidden": true
   },
   {
    "input": "1.25\n0.5\n-\n",
    "output": "0.75\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a13",
  "title": "Hourglass Pattern",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print an <b>hourglass</b> of stars with <code>2n + 1</code> rows.</p><p>The top row has <code>2n + 1</code> stars. Each following row has 2 fewer stars and is shifted right by one space, until the middle row, which has a single <code>*</code>. The bottom half mirrors the top half. Each row is centered using <b>leading spaces only</b> — there must be no trailing spaces.</p><p>For <code>n = 2</code>:</p><pre>*****\n ***\n  *\n ***\n*****</pre><h4>Input</h4><p>A single integer <code>n</code> (<code>0 ≤ n ≤ 20</code>).</p><h4>Output</h4><p>The hourglass pattern, <code>2n + 1</code> lines.</p>",
  "solution": "n = int(input())\nfor i in range(n, -1, -1):\n    print(' ' * (n - i) + '*' * (2 * i + 1))\nfor i in range(1, n + 1):\n    print(' ' * (n - i) + '*' * (2 * i + 1))\n",
  "tests": [
   {
    "input": "2\n",
    "output": "*****\n ***\n  *\n ***\n*****\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "*******\n *****\n  ***\n   *\n  ***\n *****\n*******\n",
    "hidden": false
   },
   {
    "input": "0\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "1\n",
    "output": "***\n *\n***\n",
    "hidden": true
   },
   {
    "input": "4\n",
    "output": "*********\n *******\n  *****\n   ***\n    *\n   ***\n  *****\n *******\n*********\n",
    "hidden": true
   },
   {
    "input": "6\n",
    "output": "*************\n ***********\n  *********\n   *******\n    *****\n     ***\n      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a14",
  "title": "Return to Origin",
  "category": "Simulation",
  "difficulty": "Easy",
  "description": "<p>A robot starts at position <code>(0, 0)</code> on a 2D grid. It receives a sequence of moves, each being <code>R</code> (right), <code>L</code> (left), <code>U</code> (up) or <code>D</code> (down), each moving it one unit. Determine whether the robot ends up back at the origin after all moves.</p><h4>Input</h4><p>A single line containing the moves string (only characters <code>R</code>, <code>L</code>, <code>U</code>, <code>D</code>).</p><h4>Output</h4><p>Print <code>True</code> if the robot returns to <code>(0, 0)</code>, otherwise <code>False</code>.</p>",
  "solution": "s = input().strip()\nx = s.count('R') - s.count('L')\ny = s.count('U') - s.count('D')\nprint(x == 0 and y == 0)\n",
  "tests": [
   {
    "input": "UD\n",
    "output": "True\n",
    "hidden": false
   },
   {
    "input": "LL\n",
    "output": "False\n",
    "hidden": false
   },
   {
    "input": "RRDDLLUU\n",
    "output": "True\n",
    "hidden": true
   },
   {
    "input": "U\n",
    "output": "False\n",
    "hidden": true
   },
   {
    "input": "RLUDRLUD\n",
    "output": "True\n",
    "hidden": true
   },
   {
    "input": "RRRLLLU\n",
    "output": "False\n",
    "hidden": true
   },
   {
    "input": "DURDLDRRLL\n",
    "output": "False\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "a15",
  "title": "Second Largest Distinct",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Given a list of integers, find the <b>second largest distinct</b> value — the largest value that is strictly smaller than the maximum.</p><h4>Input</h4><p>A single line of space-separated integers (at least one).</p><h4>Output</h4><p>The second largest distinct value, or <code>None</code> if it does not exist (e.g. all values are equal).</p>",
  "solution": "nums = set(map(int, input().split()))\nif len(nums) < 2:\n    print(\"None\")\nelse:\n    nums.remove(max(nums))\n    print(max(nums))\n",
  "tests": [
   {
    "input": "3 1 4 1 5 9 2 6\n",
    "output": "6\n",
    "hidden": false
   },
   {
    "input": "7 7 7\n",
    "output": "None\n",
    "hidden": false
   },
   {
    "input": "10\n",
    "output": "None\n",
    "hidden": true
   },
   {
    "input": "5 5 4 4\n",
    "output": "4\n",
    "hidden": true
   },
   {
    "input": "-1 -2 -3\n",
    "output": "-2\n",
    "hidden": true
   },
   {
    "input": "0 -5 0\n",
    "output": "-5\n",
    "hidden": true
   },
   {
    "input": "100 99 100 99 98\n",
    "output": "99\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b01",
  "title": "Rotate Left by K",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Given a list of <code>N</code> integers, rotate it to the <b>left</b> by <code>K</code> positions. <code>K</code> may be larger than <code>N</code>.</p><h4>Input</h4><p>The first line contains two integers <code>N</code> and <code>K</code> (<code>1 &le; N</code>, <code>0 &le; K</code>). The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the rotated list on one line, space-separated.</p>",
  "solution": "n, k = map(int, input().split())\na = input().split()\nk %= n\nprint(' '.join(a[k:] + a[:k]))\n",
  "tests": [
   {
    "input": "5 2\n1 2 3 4 5\n",
    "output": "3 4 5 1 2\n",
    "hidden": false
   },
   {
    "input": "3 3\n10 20 30\n",
    "output": "10 20 30\n",
    "hidden": false
   },
   {
    "input": "4 5\n7 8 9 1\n",
    "output": "8 9 1 7\n",
    "hidden": false
   },
   {
    "input": "1 100\n42\n",
    "output": "42\n",
    "hidden": true
   },
   {
    "input": "6 0\n-1 -2 -3 -4 -5 -6\n",
    "output": "-1 -2 -3 -4 -5 -6\n",
    "hidden": true
   },
   {
    "input": "10 7\n-13 0 12 12 -14 -6 18 19 15 6\n",
    "output": "19 15 6 -13 0 12 12 -14 -6 18\n",
    "hidden": true
   },
   {
    "input": "4 13\n5 5 1 5\n",
    "output": "5 1 5 5\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b02",
  "title": "Zeros to the Back",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Move all zeros in the list to the end while keeping the relative order of the non-zero elements.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the modified list on one line, space-separated.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nnz = [x for x in a if x != 0]\nprint(' '.join(map(str, nz + [0] * (n - len(nz)))))\n",
  "tests": [
   {
    "input": "5\n0 1 0 3 12\n",
    "output": "1 3 12 0 0\n",
    "hidden": false
   },
   {
    "input": "6\n4 0 -2 0 0 7\n",
    "output": "4 -2 7 0 0 0\n",
    "hidden": false
   },
   {
    "input": "3\n0 0 0\n",
    "output": "0 0 0\n",
    "hidden": false
   },
   {
    "input": "1\n5\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "1\n0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "4\n1 2 3 4\n",
    "output": "1 2 3 4\n",
    "hidden": true
   },
   {
    "input": "8\n0 -5 0 -5 3 0 0 9\n",
    "output": "-5 -5 3 9 0 0 0 0\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b03",
  "title": "Unique in Order",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Remove duplicate values from the list, keeping only the <b>first</b> occurrence of each value, in their original order.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the remaining values on one line, space-separated.</p>",
  "solution": "n = int(input())\nseen = set()\nres = []\nfor x in input().split():\n    v = int(x)\n    if v not in seen:\n        seen.add(v)\n        res.append(v)\nprint(' '.join(map(str, res)))\n",
  "tests": [
   {
    "input": "6\n3 1 3 2 1 4\n",
    "output": "3 1 2 4\n",
    "hidden": false
   },
   {
    "input": "4\n7 7 7 7\n",
    "output": "7\n",
    "hidden": false
   },
   {
    "input": "3\n1 2 3\n",
    "output": "1 2 3\n",
    "hidden": false
   },
   {
    "input": "1\n-5\n",
    "output": "-5\n",
    "hidden": true
   },
   {
    "input": "7\n-1 1 -1 0 1 0 2\n",
    "output": "-1 1 0 2\n",
    "hidden": true
   },
   {
    "input": "15\n4 3 3 -1 -4 -3 -3 0 -3 3 -4 3 1 -1 2\n",
    "output": "4 3 -1 -4 -3 0 1 2\n",
    "hidden": true
   },
   {
    "input": "6\n9 8 9 8 9 8\n",
    "output": "9 8\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b04",
  "title": "The Missing Number",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>The numbers <code>1</code> to <code>N</code> were written in some order, but exactly one of them was lost. Find the missing number.</p><h4>Input</h4><p>The first line contains <code>N</code> (<code>N &ge; 1</code>). The second line contains <code>N - 1</code> distinct space-separated integers from <code>1</code> to <code>N</code> (this line is empty when <code>N = 1</code>).</p><h4>Output</h4><p>Print the missing number.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nprint(n * (n + 1) // 2 - sum(a))\n",
  "tests": [
   {
    "input": "5\n3 1 5 2\n",
    "output": "4\n",
    "hidden": false
   },
   {
    "input": "2\n2\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "7\n1 2 3 4 5 6\n",
    "output": "7\n",
    "hidden": false
   },
   {
    "input": "1\n\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "5\n2 3 4 5\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "12\n6 4 9 10 1 3 11 2 8 12 7\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "30\n21 27 19 7 12 4 29 6 18 9 25 10 8 2 26 17 14 3 15 16 23 13 1 11 20 28 24 22 30\n",
    "output": "5\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b05",
  "title": "Evens First",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Rearrange the list so that all <b>even</b> numbers come first, followed by all <b>odd</b> numbers. Within each group, keep the original relative order. Note that negative numbers can be even or odd too, and <code>0</code> is even.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the rearranged list on one line, space-separated.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nprint(' '.join(map(str, [x for x in a if x % 2 == 0] + [x for x in a if x % 2 != 0])))\n",
  "tests": [
   {
    "input": "6\n1 2 3 4 5 6\n",
    "output": "2 4 6 1 3 5\n",
    "hidden": false
   },
   {
    "input": "5\n7 -4 0 -3 8\n",
    "output": "-4 0 8 7 -3\n",
    "hidden": false
   },
   {
    "input": "3\n1 3 5\n",
    "output": "1 3 5\n",
    "hidden": false
   },
   {
    "input": "1\n2\n",
    "output": "2\n",
    "hidden": true
   },
   {
    "input": "4\n-1 -2 -3 -4\n",
    "output": "-2 -4 -1 -3\n",
    "hidden": true
   },
   {
    "input": "12\n16 -6 -12 -17 13 -14 19 7 10 -11 10 -6\n",
    "output": "16 -6 -12 -14 10 10 -6 -17 13 19 7 -11\n",
    "hidden": true
   },
   {
    "input": "5\n4 4 1 1 4\n",
    "output": "4 4 4 1 1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b06",
  "title": "Leaders of the List",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>An element is a <b>leader</b> if it is strictly greater than every element to its right. The last element is always a leader. Print all leaders in the order they appear in the list.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the leaders on one line, space-separated.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nres = []\nbest = None\nfor x in reversed(a):\n    if best is None or x > best:\n        res.append(x)\n        best = x\nprint(' '.join(map(str, reversed(res))))\n",
  "tests": [
   {
    "input": "6\n16 17 4 3 5 2\n",
    "output": "17 5 2\n",
    "hidden": false
   },
   {
    "input": "4\n1 2 3 4\n",
    "output": "4\n",
    "hidden": false
   },
   {
    "input": "4\n9 7 5 3\n",
    "output": "9 7 5 3\n",
    "hidden": false
   },
   {
    "input": "1\n-8\n",
    "output": "-8\n",
    "hidden": true
   },
   {
    "input": "3\n5 5 5\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "5\n-3 -1 -2 -5 -4\n",
    "output": "-1 -2 -4\n",
    "hidden": true
   },
   {
    "input": "12\n27 28 3 20 22 14 21 15 22 29 30 17\n",
    "output": "30 17\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b07",
  "title": "Exactly Twice",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>Count how many <b>distinct</b> values appear in the list <b>exactly two</b> times.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the count.</p>",
  "solution": "n = int(input())\na = input().split()\ncnt = {}\nfor x in a:\n    cnt[int(x)] = cnt.get(int(x), 0) + 1\nprint(sum(1 for v in cnt.values() if v == 2))\n",
  "tests": [
   {
    "input": "8\n1 2 2 3 3 3 4 4\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "2\n5 5\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "3\n1 2 3\n",
    "output": "0\n",
    "hidden": false
   },
   {
    "input": "1\n7\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "6\n-1 -1 -1 -1 2 2\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "20\n-1 3 1 5 -1 3 5 3 2 1 1 -2 -1 -1 -5 -5 -3 5 4 2\n",
    "output": "2\n",
    "hidden": true
   },
   {
    "input": "7\n0 0 -3 -3 3 3 3\n",
    "output": "2\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b08",
  "title": "Reverse in Groups",
  "category": "Arrays",
  "difficulty": "Medium",
  "description": "<p>Split the list into consecutive groups of <code>K</code> elements (the last group may be smaller) and reverse each group in place.</p><h4>Input</h4><p>The first line contains two integers <code>N</code> and <code>K</code> (<code>1 &le; K</code>). The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the resulting list on one line, space-separated.</p>",
  "solution": "n, k = map(int, input().split())\na = input().split()\nres = []\nfor i in range(0, n, k):\n    res += a[i:i + k][::-1]\nprint(' '.join(res))\n",
  "tests": [
   {
    "input": "8 3\n1 2 3 4 5 6 7 8\n",
    "output": "3 2 1 6 5 4 8 7\n",
    "hidden": false
   },
   {
    "input": "4 2\n1 2 3 4\n",
    "output": "2 1 4 3\n",
    "hidden": false
   },
   {
    "input": "3 1\n5 6 7\n",
    "output": "5 6 7\n",
    "hidden": false
   },
   {
    "input": "1 4\n9\n",
    "output": "9\n",
    "hidden": true
   },
   {
    "input": "5 10\n1 2 3 4 5\n",
    "output": "5 4 3 2 1\n",
    "hidden": true
   },
   {
    "input": "11 4\n13 11 3 -8 -4 11 9 12 11 7 15\n",
    "output": "-8 3 11 13 12 9 11 -4 15 7 11\n",
    "hidden": true
   },
   {
    "input": "6 6\n-1 -2 -3 -4 -5 -6\n",
    "output": "-6 -5 -4 -3 -2 -1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b09",
  "title": "Two Sum Indices",
  "category": "Arrays",
  "difficulty": "Medium",
  "description": "<p>Find two different positions <code>i &lt; j</code> (0-based) such that <code>a[i] + a[j] = T</code>. If several pairs exist, choose the one with the smallest <code>j</code>; among those, the smallest <code>i</code>.</p><h4>Input</h4><p>The first line contains two integers <code>N</code> and <code>T</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print <code>i j</code> separated by a space, or <code>-1</code> if no such pair exists.</p>",
  "solution": "n, t = map(int, input().split())\na = list(map(int, input().split()))\nfirst = {}\nans = '-1'\nfor j, x in enumerate(a):\n    if t - x in first:\n        ans = f\"{first[t - x]} {j}\"\n        break\n    if x not in first:\n        first[x] = j\nprint(ans)\n",
  "tests": [
   {
    "input": "4 9\n2 7 11 15\n",
    "output": "0 1\n",
    "hidden": false
   },
   {
    "input": "3 6\n3 2 4\n",
    "output": "1 2\n",
    "hidden": false
   },
   {
    "input": "3 100\n1 2 3\n",
    "output": "-1\n",
    "hidden": false
   },
   {
    "input": "1 10\n5\n",
    "output": "-1\n",
    "hidden": true
   },
   {
    "input": "4 6\n3 3 3 3\n",
    "output": "0 1\n",
    "hidden": true
   },
   {
    "input": "5 0\n-4 8 1 -1 5\n",
    "output": "2 3\n",
    "hidden": true
   },
   {
    "input": "6 6\n1 5 2 4 3 3\n",
    "output": "0 1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b10",
  "title": "Best Streak Sum",
  "category": "Arrays",
  "difficulty": "Medium",
  "description": "<p>Find the maximum possible sum of a <b>non-empty contiguous</b> sub-list.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the maximum sum.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nbest = cur = a[0]\nfor x in a[1:]:\n    cur = max(x, cur + x)\n    best = max(best, cur)\nprint(best)\n",
  "tests": [
   {
    "input": "9\n-2 1 -3 4 -1 2 1 -5 4\n",
    "output": "6\n",
    "hidden": false
   },
   {
    "input": "3\n1 2 3\n",
    "output": "6\n",
    "hidden": false
   },
   {
    "input": "3\n-3 -1 -2\n",
    "output": "-1\n",
    "hidden": false
   },
   {
    "input": "1\n-7\n",
    "output": "-7\n",
    "hidden": true
   },
   {
    "input": "3\n0 0 0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "20\n-18 -2 0 9 -14 8 12 -4 8 -9 7 10 -16 -3 11 3 -14 -8 6 -11\n",
    "output": "32\n",
    "hidden": true
   },
   {
    "input": "7\n5 -10 6 -1 2 -20 4\n",
    "output": "7\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b11",
  "title": "Merge Two Sorted Lists",
  "category": "Arrays",
  "difficulty": "Easy",
  "description": "<p>You are given two lists, each already sorted in non-decreasing order. Merge them into one sorted list.</p><h4>Input</h4><p>Four lines: <code>N</code>; <code>N</code> sorted integers; <code>M</code>; <code>M</code> sorted integers (<code>N, M &ge; 1</code>).</p><h4>Output</h4><p>Print the merged list on one line, space-separated.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\nm = int(input())\nb = list(map(int, input().split()))\ni = j = 0\nres = []\nwhile i < n and j < m:\n    if a[i] <= b[j]:\n        res.append(a[i]); i += 1\n    else:\n        res.append(b[j]); j += 1\nres += a[i:] + b[j:]\nprint(' '.join(map(str, res)))\n",
  "tests": [
   {
    "input": "3\n1 4 7\n4\n2 3 8 9\n",
    "output": "1 2 3 4 7 8 9\n",
    "hidden": false
   },
   {
    "input": "1\n5\n3\n1 2 3\n",
    "output": "1 2 3 5\n",
    "hidden": false
   },
   {
    "input": "3\n1 1 2\n3\n1 2 2\n",
    "output": "1 1 1 2 2 2\n",
    "hidden": false
   },
   {
    "input": "1\n-5\n1\n-5\n",
    "output": "-5 -5\n",
    "hidden": true
   },
   {
    "input": "3\n-10 -3 0\n2\n-7 4\n",
    "output": "-10 -7 -3 0 4\n",
    "hidden": true
   },
   {
    "input": "8\n-20 -20 -15 -15 8 8 14 17\n6\n-18 -13 -8 -5 19 19\n",
    "output": "-20 -20 -18 -15 -15 -13 -8 -5 8 8 14 17 19 19\n",
    "hidden": true
   },
   {
    "input": "3\n1 2 3\n3\n4 5 6\n",
    "output": "1 2 3 4 5 6\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b12",
  "title": "Majority Element",
  "category": "Arrays",
  "difficulty": "Medium",
  "description": "<p>A <b>majority element</b> appears <b>more than</b> <code>N / 2</code> times. Find it if it exists.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the majority element, or <code>NONE</code> if there isn't one.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\ncand, c = None, 0\nfor x in a:\n    if c == 0:\n        cand = x\n    c += 1 if x == cand else -1\nprint(cand if a.count(cand) * 2 > n else 'NONE')\n",
  "tests": [
   {
    "input": "3\n3 2 3\n",
    "output": "3\n",
    "hidden": false
   },
   {
    "input": "4\n1 2 1 2\n",
    "output": "NONE\n",
    "hidden": false
   },
   {
    "input": "7\n2 2 1 1 1 2 2\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "1\n-9\n",
    "output": "-9\n",
    "hidden": true
   },
   {
    "input": "5\n-1 -1 5 -1 5\n",
    "output": "-1\n",
    "hidden": true
   },
   {
    "input": "5\n1 2 3 4 5\n",
    "output": "NONE\n",
    "hidden": true
   },
   {
    "input": "6\n7 7 7 7 7 7\n",
    "output": "7\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b13",
  "title": "Pairs with Difference K",
  "category": "Arrays",
  "difficulty": "Medium",
  "description": "<p>Count the number of <b>distinct</b> value pairs <code>(x, y)</code> with <code>x</code> and <code>y</code> taken from different positions of the list and <code>y - x = K</code>. Each pair of values is counted once no matter how many times the values repeat.</p><h4>Input</h4><p>The first line contains two integers <code>N</code> and <code>K</code> (<code>K &ge; 0</code>). The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the number of distinct pairs.</p>",
  "solution": "n, k = map(int, input().split())\na = list(map(int, input().split()))\ncnt = {}\nfor x in a:\n    cnt[x] = cnt.get(x, 0) + 1\nif k == 0:\n    print(sum(1 for v in cnt.values() if v >= 2))\nelse:\n    print(sum(1 for x in cnt if x + k in cnt))\n",
  "tests": [
   {
    "input": "5 2\n3 1 4 1 5\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "5 1\n1 2 3 4 5\n",
    "output": "4\n",
    "hidden": false
   },
   {
    "input": "5 0\n1 3 1 5 4\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "1 0\n10\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "5 2\n-2 0 2 -4 2\n",
    "output": "3\n",
    "hidden": true
   },
   {
    "input": "15 3\n6 2 -2 4 6 4 -1 -4 -6 -1 4 3 3 6 1\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "5 1\n1 1 1 2 2\n",
    "output": "1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b14",
  "title": "Frequency Sort",
  "category": "Arrays",
  "difficulty": "Hard",
  "description": "<p>Sort the list so that values that appear <b>more often</b> come first. If two values have the same frequency, the <b>smaller</b> value comes first. Every occurrence of a value is printed (equal values stay together).</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the sorted list on one line, space-separated.</p>",
  "solution": "n = int(input())\na = list(map(int, input().split()))\ncnt = {}\nfor x in a:\n    cnt[x] = cnt.get(x, 0) + 1\na.sort(key=lambda x: (-cnt[x], x))\nprint(' '.join(map(str, a)))\n",
  "tests": [
   {
    "input": "7\n4 6 2 6 4 4 9\n",
    "output": "4 4 4 6 6 2 9\n",
    "hidden": false
   },
   {
    "input": "3\n3 1 2\n",
    "output": "1 2 3\n",
    "hidden": false
   },
   {
    "input": "5\n5 5 -1 -1 0\n",
    "output": "-1 -1 5 5 0\n",
    "hidden": false
   },
   {
    "input": "1\n8\n",
    "output": "8\n",
    "hidden": true
   },
   {
    "input": "8\n-3 2 -3 2 2 7 7 7\n",
    "output": "2 2 2 7 7 7 -3 -3\n",
    "hidden": true
   },
   {
    "input": "18\n-3 3 -2 2 4 -3 4 3 -1 -4 1 5 -3 -3 4 -1 3 1\n",
    "output": "-3 -3 -3 -3 3 3 3 4 4 4 -1 -1 1 1 -4 -2 2 5\n",
    "hidden": true
   },
   {
    "input": "4\n1 1 1 1\n",
    "output": "1 1 1 1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "b15",
  "title": "Longest Consecutive Values",
  "category": "Arrays",
  "difficulty": "Hard",
  "description": "<p>Find the length of the longest set of values from the list that form a run of consecutive integers (like <code>4, 5, 6, 7</code>). The values may appear in any order in the list, and duplicates count only once.</p><h4>Input</h4><p>The first line contains an integer <code>N</code>. The second line contains <code>N</code> space-separated integers.</p><h4>Output</h4><p>Print the length of the longest run.</p>",
  "solution": "n = int(input())\ns = set(map(int, input().split()))\nbest = 0\nfor x in s:\n    if x - 1 not in s:\n        y = x\n        while y + 1 in s:\n            y += 1\n        best = max(best, y - x + 1)\nprint(best)\n",
  "tests": [
   {
    "input": "6\n100 4 200 1 3 2\n",
    "output": "4\n",
    "hidden": false
   },
   {
    "input": "3\n10 30 20\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "6\n0 -1 1 1 2 -2\n",
    "output": "5\n",
    "hidden": false
   },
   {
    "input": "1\n5\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "3\n7 7 7\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "20\n-6 21 -21 3 21 -18 -6 -30 -24 -6 26 -26 -27 23 -8 11 -8 29 19 30\n",
    "output": "2\n",
    "hidden": true
   },
   {
    "input": "11\n9 1 4 7 3 -1 0 5 8 -1 6\n",
    "output": "7\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c01",
  "title": "Caesar Cipher",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Encrypt a message using a Caesar cipher: shift every letter forward by <code>k</code> positions in the alphabet, wrapping around from <code>z</code> to <code>a</code>. Uppercase letters stay uppercase, lowercase stay lowercase. All other characters (digits, spaces, punctuation) are unchanged.</p><h4>Input</h4><ul><li>Line 1: the message <code>s</code></li><li>Line 2: an integer <code>k</code> (0 &le; k &le; 1000)</li></ul><h4>Output</h4><p>The encrypted message.</p>",
  "solution": "s = input()\nk = int(input()) % 26\nr = []\nfor c in s:\n    if 'a' <= c <= 'z':\n        r.append(chr((ord(c) - 97 + k) % 26 + 97))\n    elif 'A' <= c <= 'Z':\n        r.append(chr((ord(c) - 65 + k) % 26 + 65))\n    else:\n        r.append(c)\nprint(''.join(r))\n",
  "tests": [
   {
    "input": "abc\n1\n",
    "output": "bcd\n",
    "hidden": false
   },
   {
    "input": "Hello, World!\n3\n",
    "output": "Khoor, Zruog!\n",
    "hidden": false
   },
   {
    "input": "xyz\n3\n",
    "output": "abc\n",
    "hidden": true
   },
   {
    "input": "Zebra\n0\n",
    "output": "Zebra\n",
    "hidden": true
   },
   {
    "input": "Python 3.12\n26\n",
    "output": "Python 3.12\n",
    "hidden": true
   },
   {
    "input": "The quick brown fox\n13\n",
    "output": "Gur dhvpx oebja sbk\n",
    "hidden": true
   },
   {
    "input": "aZ\n1000\n",
    "output": "mL\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c02",
  "title": "Palindrome Sentence",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Determine whether a sentence is a palindrome when you ignore case and every character that is not a letter or digit.</p><h4>Input</h4><p>A single line <code>s</code>.</p><h4>Output</h4><p><code>YES</code> if it is a palindrome, otherwise <code>NO</code>.</p>",
  "solution": "s = input()\nt = [c.lower() for c in s if c.isalnum()]\nprint(\"YES\" if t == t[::-1] else \"NO\")\n",
  "tests": [
   {
    "input": "A man, a plan, a canal: Panama\n",
    "output": "YES\n",
    "hidden": false
   },
   {
    "input": "race a car\n",
    "output": "NO\n",
    "hidden": false
   },
   {
    "input": "Was it a car or a cat I saw?\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "a\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "12321\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "ab\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "No 'x' in Nixon\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "!!!\n",
    "output": "YES\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c03",
  "title": "Anagram Check",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Two words are anagrams if one can be formed by rearranging the letters of the other. Comparison is case-insensitive.</p><h4>Input</h4><ul><li>Line 1: word <code>a</code></li><li>Line 2: word <code>b</code></li></ul><h4>Output</h4><p><code>YES</code> if they are anagrams, otherwise <code>NO</code>.</p>",
  "solution": "a = input().lower()\nb = input().lower()\nprint(\"YES\" if sorted(a) == sorted(b) else \"NO\")\n",
  "tests": [
   {
    "input": "listen\nsilent\n",
    "output": "YES\n",
    "hidden": false
   },
   {
    "input": "hello\nworld\n",
    "output": "NO\n",
    "hidden": false
   },
   {
    "input": "Dormitory\nDirtyRoom\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "a\na\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "abc\nabcd\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "aab\nabb\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "Triangle\nIntegral\n",
    "output": "YES\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c04",
  "title": "Vowels and Consonants",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Count the vowels (<code>a e i o u</code>, either case) and the consonants (all other English letters) in a line. Non-letter characters are ignored.</p><h4>Input</h4><p>A single line <code>s</code>.</p><h4>Output</h4><p>Two lines: <code>Vowels: V</code> and <code>Consonants: C</code>.</p>",
  "solution": "s = input()\nv = c = 0\nfor ch in s:\n    if ch.isalpha() and ch.isascii():\n        if ch.lower() in 'aeiou':\n            v += 1\n        else:\n            c += 1\nprint(\"Vowels:\", v)\nprint(\"Consonants:\", c)\n",
  "tests": [
   {
    "input": "Hello World\n",
    "output": "Vowels: 3\nConsonants: 7\n",
    "hidden": false
   },
   {
    "input": "Programming is fun!\n",
    "output": "Vowels: 5\nConsonants: 11\n",
    "hidden": false
   },
   {
    "input": "AEIOU\n",
    "output": "Vowels: 5\nConsonants: 0\n",
    "hidden": true
   },
   {
    "input": "rhythm\n",
    "output": "Vowels: 0\nConsonants: 6\n",
    "hidden": true
   },
   {
    "input": "12345\n",
    "output": "Vowels: 0\nConsonants: 0\n",
    "hidden": true
   },
   {
    "input": "a\n",
    "output": "Vowels: 1\nConsonants: 0\n",
    "hidden": true
   },
   {
    "input": "The Quick Brown Fox Jumps\n",
    "output": "Vowels: 6\nConsonants: 15\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c05",
  "title": "Reverse Each Word",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Reverse the letters of every word in a sentence while keeping the words in their original order. Words are separated by single spaces.</p><h4>Input</h4><p>A single line of words separated by single spaces.</p><h4>Output</h4><p>The sentence with each word reversed.</p>",
  "solution": "print(' '.join(w[::-1] for w in input().split(' ')))\n",
  "tests": [
   {
    "input": "hello world\n",
    "output": "olleh dlrow\n",
    "hidden": false
   },
   {
    "input": "CodeChum is fun\n",
    "output": "muhCedoC si nuf\n",
    "hidden": false
   },
   {
    "input": "a\n",
    "output": "a\n",
    "hidden": true
   },
   {
    "input": "abc\n",
    "output": "cba\n",
    "hidden": true
   },
   {
    "input": "racecar level noon\n",
    "output": "racecar level noon\n",
    "hidden": true
   },
   {
    "input": "I love Python 3\n",
    "output": "I evol nohtyP 3\n",
    "hidden": true
   },
   {
    "input": "ab cd ef gh\n",
    "output": "ba dc fe hg\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c06",
  "title": "Capitalize Each Word",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Make the first character of each word uppercase and the rest of the word lowercase. Words are separated by single spaces.</p><h4>Input</h4><p>A single line of words separated by single spaces.</p><h4>Output</h4><p>The sentence with every word capitalized.</p>",
  "solution": "print(' '.join(w[:1].upper() + w[1:].lower() for w in input().split(' ')))\n",
  "tests": [
   {
    "input": "hello world\n",
    "output": "Hello World\n",
    "hidden": false
   },
   {
    "input": "tHE qUICK bROWN fOX\n",
    "output": "The Quick Brown Fox\n",
    "hidden": false
   },
   {
    "input": "python\n",
    "output": "Python\n",
    "hidden": true
   },
   {
    "input": "a b c\n",
    "output": "A B C\n",
    "hidden": true
   },
   {
    "input": "123abc def\n",
    "output": "123abc Def\n",
    "hidden": true
   },
   {
    "input": "ALL CAPS HERE\n",
    "output": "All Caps Here\n",
    "hidden": true
   },
   {
    "input": "x\n",
    "output": "X\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c07",
  "title": "Run-Length Encoding",
  "category": "Strings",
  "difficulty": "Medium",
  "description": "<p>Compress a string using run-length encoding: each maximal run of the same character is written as the character followed by the length of the run. For example, <code>aaabb</code> becomes <code>a3b2</code>.</p><h4>Input</h4><p>A single non-empty string <code>s</code> of lowercase letters.</p><h4>Output</h4><p>The encoded string.</p>",
  "solution": "s = input()\nr = []\ni = 0\nwhile i < len(s):\n    j = i\n    while j < len(s) and s[j] == s[i]:\n        j += 1\n    r.append(s[i] + str(j - i))\n    i = j\nprint(''.join(r))\n",
  "tests": [
   {
    "input": "aaabb\n",
    "output": "a3b2\n",
    "hidden": false
   },
   {
    "input": "abc\n",
    "output": "a1b1c1\n",
    "hidden": false
   },
   {
    "input": "a\n",
    "output": "a1\n",
    "hidden": true
   },
   {
    "input": "aaaaaaaaaaaa\n",
    "output": "a12\n",
    "hidden": true
   },
   {
    "input": "aabbaa\n",
    "output": "a2b2a2\n",
    "hidden": true
   },
   {
    "input": "zzzyyyxxxw\n",
    "output": "z3y3x3w1\n",
    "hidden": true
   },
   {
    "input": "abbcccdddd\n",
    "output": "a1b2c3d4\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c08",
  "title": "Missing Letters",
  "category": "Strings",
  "difficulty": "Medium",
  "description": "<p>A pangram is a sentence that uses every letter of the alphabet at least once. Find which letters (case-insensitive) are missing from the given sentence.</p><h4>Input</h4><p>A single line <code>s</code>.</p><h4>Output</h4><p>The missing letters in lowercase, in alphabetical order, with no spaces. If none are missing, print <code>PANGRAM</code>.</p>",
  "solution": "s = set(input().lower())\nm = ''.join(c for c in 'abcdefghijklmnopqrstuvwxyz' if c not in s)\nprint(m if m else \"PANGRAM\")\n",
  "tests": [
   {
    "input": "The quick brown fox jumps over the lazy dog\n",
    "output": "PANGRAM\n",
    "hidden": false
   },
   {
    "input": "hello world\n",
    "output": "abcfgijkmnpqstuvxyz\n",
    "hidden": false
   },
   {
    "input": "abcdefghijklmnopqrstuvwxy\n",
    "output": "z\n",
    "hidden": true
   },
   {
    "input": "12345\n",
    "output": "abcdefghijklmnopqrstuvwxyz\n",
    "hidden": true
   },
   {
    "input": "Pack my box with five dozen liquor jugs\n",
    "output": "PANGRAM\n",
    "hidden": true
   },
   {
    "input": "ABCDEFGHIJKLM\n",
    "output": "nopqrstuvwxyz\n",
    "hidden": true
   },
   {
    "input": "zyxwvutsrqponmlkjihgfedcbaZ\n",
    "output": "PANGRAM\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c09",
  "title": "Most Frequent Letter",
  "category": "Strings",
  "difficulty": "Medium",
  "description": "<p>Find the letter that appears most often in the text, ignoring case and non-letter characters. If several letters tie, choose the one that comes first alphabetically. The text contains at least one letter.</p><h4>Input</h4><p>A single line <code>s</code>.</p><h4>Output</h4><p>The most frequent letter in lowercase followed by a space and its count.</p>",
  "solution": "s = input().lower()\ncnt = {}\nfor c in s:\n    if 'a' <= c <= 'z':\n        cnt[c] = cnt.get(c, 0) + 1\nbest = min(cnt, key=lambda c: (-cnt[c], c))\nprint(best, cnt[best])\n",
  "tests": [
   {
    "input": "hello world\n",
    "output": "l 3\n",
    "hidden": false
   },
   {
    "input": "Mississippi\n",
    "output": "i 4\n",
    "hidden": false
   },
   {
    "input": "abcabc\n",
    "output": "a 2\n",
    "hidden": true
   },
   {
    "input": "Z\n",
    "output": "z 1\n",
    "hidden": true
   },
   {
    "input": "zzz yyy\n",
    "output": "y 3\n",
    "hidden": true
   },
   {
    "input": "AaBbCcAa 123!\n",
    "output": "a 4\n",
    "hidden": true
   },
   {
    "input": "The quick brown fox jumps over the lazy dog\n",
    "output": "o 4\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c10",
  "title": "Toggle Case",
  "category": "Strings",
  "difficulty": "Easy",
  "description": "<p>Change every uppercase letter to lowercase and every lowercase letter to uppercase. Other characters are unchanged.</p><h4>Input</h4><p>A single line <code>s</code>.</p><h4>Output</h4><p>The toggled string.</p>",
  "solution": "s = input()\nprint(''.join(c.lower() if c.isupper() else c.upper() for c in s))\n",
  "tests": [
   {
    "input": "Hello World\n",
    "output": "hELLO wORLD\n",
    "hidden": false
   },
   {
    "input": "CodeChum\n",
    "output": "cODEcHUM\n",
    "hidden": false
   },
   {
    "input": "abc\n",
    "output": "ABC\n",
    "hidden": true
   },
   {
    "input": "XYZ\n",
    "output": "xyz\n",
    "hidden": true
   },
   {
    "input": "123 !@#\n",
    "output": "123 !@#\n",
    "hidden": true
   },
   {
    "input": "pYtHoN 3.12\n",
    "output": "PyThOn 3.12\n",
    "hidden": true
   },
   {
    "input": "a\n",
    "output": "A\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c11",
  "title": "Count Set Bits",
  "category": "Bitwise",
  "difficulty": "Easy",
  "description": "<p>Count the number of <code>1</code> bits in the binary representation of a non-negative integer <code>n</code>. Try to use bitwise operators (<code>&amp;</code>, <code>&gt;&gt;</code>).</p><h4>Input</h4><p>A single integer <code>n</code> (0 &le; n &le; 10<sup>18</sup>).</p><h4>Output</h4><p>The number of set bits.</p>",
  "solution": "n = int(input())\nc = 0\nwhile n:\n    n &= n - 1\n    c += 1\nprint(c)\n",
  "tests": [
   {
    "input": "5\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "7\n",
    "output": "3\n",
    "hidden": false
   },
   {
    "input": "0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "1024\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "255\n",
    "output": "8\n",
    "hidden": true
   },
   {
    "input": "1000000000000000000\n",
    "output": "24\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c12",
  "title": "Power of Two",
  "category": "Bitwise",
  "difficulty": "Easy",
  "description": "<p>Determine whether a given integer <code>n</code> is a power of two. Hint: a positive power of two has exactly one set bit, so <code>n &amp; (n - 1)</code> is <code>0</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (-10<sup>9</sup> &le; n &le; 10<sup>18</sup>).</p><h4>Output</h4><p><code>YES</code> if <code>n</code> is a power of two, otherwise <code>NO</code>.</p>",
  "solution": "n = int(input())\nprint(\"YES\" if n > 0 and n & (n - 1) == 0 else \"NO\")\n",
  "tests": [
   {
    "input": "16\n",
    "output": "YES\n",
    "hidden": false
   },
   {
    "input": "18\n",
    "output": "NO\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "0\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "-8\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "1073741824\n",
    "output": "YES\n",
    "hidden": true
   },
   {
    "input": "1152921504606846975\n",
    "output": "NO\n",
    "hidden": true
   },
   {
    "input": "576460752303423488\n",
    "output": "YES\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c13",
  "title": "Decimal to Binary",
  "category": "Bitwise",
  "difficulty": "Easy",
  "description": "<p>Convert a non-negative integer <code>n</code> to its binary representation <b>without</b> using <code>bin()</code> or <code>format()</code>. Use <code>&amp; 1</code> and <code>&gt;&gt;</code> instead.</p><h4>Input</h4><p>A single integer <code>n</code> (0 &le; n &le; 10<sup>18</sup>).</p><h4>Output</h4><p>The binary representation of <code>n</code> with no leading zeros (<code>0</code> for zero).</p>",
  "solution": "n = int(input())\nif n == 0:\n    print(0)\nelse:\n    d = []\n    while n:\n        d.append(str(n & 1))\n        n >>= 1\n    print(''.join(reversed(d)))\n",
  "tests": [
   {
    "input": "10\n",
    "output": "1010\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "101\n",
    "hidden": false
   },
   {
    "input": "0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "255\n",
    "output": "11111111\n",
    "hidden": true
   },
   {
    "input": "1024\n",
    "output": "10000000000\n",
    "hidden": true
   },
   {
    "input": "1000000000000000000\n",
    "output": "110111100000101101101011001110100111011001000000000000000000\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c14",
  "title": "Find the Single Number",
  "category": "Bitwise",
  "difficulty": "Medium",
  "description": "<p>Every number in the list appears exactly twice except for one number that appears once. Find that number. Hint: <code>x ^ x = 0</code> and <code>x ^ 0 = x</code>, so XOR-ing all numbers leaves only the single one.</p><h4>Input</h4><ul><li>Line 1: an odd integer <code>n</code> (1 &le; n &le; 10<sup>5</sup>)</li><li>Line 2: <code>n</code> space-separated integers</li></ul><h4>Output</h4><p>The number that appears only once.</p>",
  "solution": "n = int(input())\nr = 0\nfor x in map(int, input().split()):\n    r ^= x\nprint(r)\n",
  "tests": [
   {
    "input": "5\n4 1 2 1 2\n",
    "output": "4\n",
    "hidden": false
   },
   {
    "input": "3\n7 3 7\n",
    "output": "3\n",
    "hidden": false
   },
   {
    "input": "1\n42\n",
    "output": "42\n",
    "hidden": true
   },
   {
    "input": "7\n10 20 30 40 30 20 10\n",
    "output": "40\n",
    "hidden": true
   },
   {
    "input": "5\n0 5 5 9 9\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "9\n1000000 1 2 3 4 4 3 2 1\n",
    "output": "1000000\n",
    "hidden": true
   },
   {
    "input": "3\n-5 -5 -3\n",
    "output": "-3\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c15",
  "title": "Flip the Bits",
  "category": "Bitwise",
  "difficulty": "Medium",
  "description": "<p>Flip every bit of a positive integer <code>n</code> within its own bit-length (no leading zeros), then print the resulting number. For example, <code>5</code> is <code>101</code>; flipping gives <code>010</code> = <code>2</code>. Hint: XOR with a mask of all ones of the same length.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 10<sup>18</sup>).</p><h4>Output</h4><p>The integer obtained after flipping the bits.</p>",
  "solution": "n = int(input())\nmask = (1 << n.bit_length()) - 1\nprint(n ^ mask)\n",
  "tests": [
   {
    "input": "5\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "10\n",
    "output": "5\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "8\n",
    "output": "7\n",
    "hidden": true
   },
   {
    "input": "1000000000000000000\n",
    "output": "152921504606846975\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "c16",
  "title": "Hamming Distance",
  "category": "Bitwise",
  "difficulty": "Medium",
  "description": "<p>The Hamming distance between two integers is the number of bit positions at which their binary representations differ. Hint: count the set bits of <code>a ^ b</code>.</p><h4>Input</h4><p>Two non-negative integers <code>a</code> and <code>b</code> on one line, separated by a space (0 &le; a, b &le; 10<sup>18</sup>).</p><h4>Output</h4><p>The Hamming distance between <code>a</code> and <code>b</code>.</p>",
  "solution": "a, b = map(int, input().split())\nx = a ^ b\nc = 0\nwhile x:\n    c += x & 1\n    x >>= 1\nprint(c)\n",
  "tests": [
   {
    "input": "1 4\n",
    "output": "2\n",
    "hidden": false
   },
   {
    "input": "3 1\n",
    "output": "1\n",
    "hidden": false
   },
   {
    "input": "0 0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "7 7\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "0 255\n",
    "output": "8\n",
    "hidden": true
   },
   {
    "input": "1000000000000000000 0\n",
    "output": "24\n",
    "hidden": true
   },
   {
    "input": "12 10\n",
    "output": "2\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d01",
  "title": "Matrix Transpose",
  "category": "Matrices",
  "difficulty": "Easy",
  "description": "<p>Given an <code>R x C</code> matrix, print its transpose (a <code>C x R</code> matrix where row <code>i</code> is column <code>i</code> of the original).</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print the <code>C</code> rows of the transposed matrix, each with <code>R</code> space-separated integers.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nfor j in range(c):\n    print(\" \".join(str(a[i][j]) for i in range(r)))\n",
  "tests": [
   {
    "input": "2 3\n1 2 3\n4 5 6\n",
    "output": "1 4\n2 5\n3 6\n",
    "hidden": false
   },
   {
    "input": "2 2\n1 2\n3 4\n",
    "output": "1 3\n2 4\n",
    "hidden": false
   },
   {
    "input": "1 1\n7\n",
    "output": "7\n",
    "hidden": true
   },
   {
    "input": "1 4\n1 2 3 4\n",
    "output": "1\n2\n3\n4\n",
    "hidden": true
   },
   {
    "input": "3 1\n5\n6\n7\n",
    "output": "5 6 7\n",
    "hidden": true
   },
   {
    "input": "3 3\n-1 0 2\n3 -4 5\n6 7 -8\n",
    "output": "-1 3 6\n0 -4 7\n2 5 -8\n",
    "hidden": true
   },
   {
    "input": "4 2\n10 20\n30 40\n50 60\n70 80\n",
    "output": "10 30 50 70\n20 40 60 80\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d02",
  "title": "Rotate Matrix 90° Clockwise",
  "category": "Matrices",
  "difficulty": "Medium",
  "description": "<p>Rotate the given <code>R x C</code> matrix 90 degrees clockwise and print the result (a <code>C x R</code> matrix).</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print the <code>C</code> rows of the rotated matrix, each with <code>R</code> space-separated integers.</p><p>Example: <code>[[1,2],[3,4]]</code> becomes <code>[[3,1],[4,2]]</code>.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nfor j in range(c):\n    print(\" \".join(str(a[i][j]) for i in range(r - 1, -1, -1)))\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n4 5 6\n7 8 9\n",
    "output": "7 4 1\n8 5 2\n9 6 3\n",
    "hidden": false
   },
   {
    "input": "2 3\n1 2 3\n4 5 6\n",
    "output": "4 1\n5 2\n6 3\n",
    "hidden": false
   },
   {
    "input": "1 1\n42\n",
    "output": "42\n",
    "hidden": true
   },
   {
    "input": "1 4\n1 2 3 4\n",
    "output": "1\n2\n3\n4\n",
    "hidden": true
   },
   {
    "input": "3 1\n1\n2\n3\n",
    "output": "3 2 1\n",
    "hidden": true
   },
   {
    "input": "2 2\n-5 3\n0 -1\n",
    "output": "0 -5\n-1 3\n",
    "hidden": true
   },
   {
    "input": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n",
    "output": "13 9 5 1\n14 10 6 2\n15 11 7 3\n16 12 8 4\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d03",
  "title": "Spiral Order Traversal",
  "category": "Matrices",
  "difficulty": "Medium",
  "description": "<p>Print the elements of an <code>R x C</code> matrix in spiral order: start at the top-left corner, move right, then down, then left, then up, and continue spiraling inward clockwise.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print all elements in spiral order on a single line, separated by spaces.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nres = []\ntop, bot, left, right = 0, r - 1, 0, c - 1\nwhile top <= bot and left <= right:\n    for j in range(left, right + 1):\n        res.append(a[top][j])\n    top += 1\n    for i in range(top, bot + 1):\n        res.append(a[i][right])\n    right -= 1\n    if top <= bot:\n        for j in range(right, left - 1, -1):\n            res.append(a[bot][j])\n        bot -= 1\n    if left <= right:\n        for i in range(bot, top - 1, -1):\n            res.append(a[i][left])\n        left += 1\nprint(\" \".join(map(str, res)))\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n4 5 6\n7 8 9\n",
    "output": "1 2 3 6 9 8 7 4 5\n",
    "hidden": false
   },
   {
    "input": "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n",
    "output": "1 2 3 4 8 12 11 10 9 5 6 7\n",
    "hidden": false
   },
   {
    "input": "1 1\n5\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "1 3\n1 2 3\n",
    "output": "1 2 3\n",
    "hidden": true
   },
   {
    "input": "3 1\n1\n2\n3\n",
    "output": "1 2 3\n",
    "hidden": true
   },
   {
    "input": "4 2\n1 2\n3 4\n5 6\n7 8\n",
    "output": "1 2 4 6 8 7 5 3\n",
    "hidden": true
   },
   {
    "input": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n",
    "output": "1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10\n",
    "hidden": true
   },
   {
    "input": "2 2\n-1 -2\n-3 -4\n",
    "output": "-1 -2 -4 -3\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d04",
  "title": "Sum of Both Diagonals",
  "category": "Matrices",
  "difficulty": "Easy",
  "description": "<p>Given a square matrix, compute the sum of the elements on the main diagonal and the anti-diagonal. If the matrix has an odd size, the center element belongs to both diagonals but must be counted only <b>once</b>.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code> (always <code>R = C</code>). The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print a single integer: the diagonal sum.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nn = r\ns = 0\nfor i in range(n):\n    s += a[i][i]\n    if i != n - 1 - i:\n        s += a[i][n - 1 - i]\nprint(s)\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n4 5 6\n7 8 9\n",
    "output": "25\n",
    "hidden": false
   },
   {
    "input": "2 2\n1 2\n3 4\n",
    "output": "10\n",
    "hidden": false
   },
   {
    "input": "1 1\n7\n",
    "output": "7\n",
    "hidden": true
   },
   {
    "input": "2 2\n-1 -2\n-3 -4\n",
    "output": "-10\n",
    "hidden": true
   },
   {
    "input": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n",
    "output": "68\n",
    "hidden": true
   },
   {
    "input": "5 5\n1 0 0 0 1\n0 1 0 1 0\n0 0 5 0 0\n0 1 0 1 0\n1 0 0 0 1\n",
    "output": "13\n",
    "hidden": true
   },
   {
    "input": "2 2\n0 0\n0 0\n",
    "output": "0\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d05",
  "title": "Row With Maximum Sum",
  "category": "Matrices",
  "difficulty": "Easy",
  "description": "<p>Find the row of the matrix with the largest sum of elements. If several rows tie, choose the one that appears first.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print two integers separated by a space: the 1-based index of that row and its sum.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nbest = 0\nfor i in range(1, r):\n    if sum(a[i]) > sum(a[best]):\n        best = i\nprint(best + 1, sum(a[best]))\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n4 5 6\n1 1 1\n",
    "output": "2 15\n",
    "hidden": false
   },
   {
    "input": "3 2\n5 5\n10 0\n3 3\n",
    "output": "1 10\n",
    "hidden": false
   },
   {
    "input": "1 1\n-7\n",
    "output": "1 -7\n",
    "hidden": true
   },
   {
    "input": "3 2\n-1 -2\n-3 -4\n-1 -1\n",
    "output": "3 -2\n",
    "hidden": true
   },
   {
    "input": "1 3\n0 0 0\n",
    "output": "1 0\n",
    "hidden": true
   },
   {
    "input": "4 1\n1\n9\n9\n2\n",
    "output": "2 9\n",
    "hidden": true
   },
   {
    "input": "4 3\n3 -3 10\n100 -50 -40\n2 2 2\n7 7 -1\n",
    "output": "4 13\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d06",
  "title": "Matrix Multiplication",
  "category": "Matrices",
  "difficulty": "Medium",
  "description": "<p>Multiply matrix <code>A</code> (size <code>R1 x C1</code>) by matrix <code>B</code> (size <code>R2 x C2</code>). Multiplication is only possible when <code>C1 = R2</code>; otherwise print <code>Invalid</code>.</p><h4>Input</h4><p>First, matrix <code>A</code>: a line <code>R1 C1</code> followed by <code>R1</code> rows. Then matrix <code>B</code>: a line <code>R2 C2</code> followed by <code>R2</code> rows.</p><h4>Output</h4><p>Print the <code>R1 x C2</code> product matrix, one row per line with space-separated integers, or <code>Invalid</code>.</p>",
  "solution": "r1, c1 = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r1)]\nr2, c2 = map(int, input().split())\nb = [list(map(int, input().split())) for _ in range(r2)]\nif c1 != r2:\n    print(\"Invalid\")\nelse:\n    for i in range(r1):\n        print(\" \".join(str(sum(a[i][k] * b[k][j] for k in range(c1))) for j in range(c2)))\n",
  "tests": [
   {
    "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8\n",
    "output": "19 22\n43 50\n",
    "hidden": false
   },
   {
    "input": "1 3\n1 2 3\n3 1\n4\n5\n6\n",
    "output": "32\n",
    "hidden": false
   },
   {
    "input": "2 2\n1 2\n3 4\n1 3\n1 2 3\n",
    "output": "Invalid\n",
    "hidden": true
   },
   {
    "input": "1 1\n3\n1 1\n-4\n",
    "output": "-12\n",
    "hidden": true
   },
   {
    "input": "3 1\n1\n2\n3\n1 2\n4 5\n",
    "output": "4 5\n8 10\n12 15\n",
    "hidden": true
   },
   {
    "input": "2 2\n1 0\n0 1\n2 2\n9 -8\n7 6\n",
    "output": "9 -8\n7 6\n",
    "hidden": true
   },
   {
    "input": "2 3\n2 -1 0\n1 3 -2\n3 2\n1 2\n0 -1\n4 5\n",
    "output": "2 5\n-7 -11\n",
    "hidden": true
   },
   {
    "input": "1 3\n1 2 3\n1 3\n1 2 3\n",
    "output": "Invalid\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d07",
  "title": "Symmetric Matrix Check",
  "category": "Matrices",
  "difficulty": "Easy",
  "description": "<p>A matrix is <b>symmetric</b> if it is square and equal to its own transpose (<code>a[i][j] = a[j][i]</code> for all <code>i, j</code>). Determine whether the given matrix is symmetric. A non-square matrix is never symmetric.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print <code>Symmetric</code> or <code>Not Symmetric</code>.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nok = r == c and all(a[i][j] == a[j][i] for i in range(r) for j in range(c))\nprint(\"Symmetric\" if ok else \"Not Symmetric\")\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n2 5 6\n3 6 9\n",
    "output": "Symmetric\n",
    "hidden": false
   },
   {
    "input": "2 2\n1 2\n3 4\n",
    "output": "Not Symmetric\n",
    "hidden": false
   },
   {
    "input": "1 1\n8\n",
    "output": "Symmetric\n",
    "hidden": true
   },
   {
    "input": "2 3\n1 2 3\n2 1 2\n",
    "output": "Not Symmetric\n",
    "hidden": true
   },
   {
    "input": "2 2\n-1 4\n4 -1\n",
    "output": "Symmetric\n",
    "hidden": true
   },
   {
    "input": "3 3\n0 1 2\n1 0 3\n2 4 0\n",
    "output": "Not Symmetric\n",
    "hidden": true
   },
   {
    "input": "2 2\n0 0\n0 0\n",
    "output": "Symmetric\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d08",
  "title": "Snake Row Traversal",
  "category": "Matrices",
  "difficulty": "Easy",
  "description": "<p>Traverse the matrix in a snake (zigzag) pattern: read the 1st row left to right, the 2nd row right to left, the 3rd row left to right, and so on.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print all elements in snake order on a single line, separated by spaces.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nres = []\nfor i in range(r):\n    res.extend(a[i] if i % 2 == 0 else a[i][::-1])\nprint(\" \".join(map(str, res)))\n",
  "tests": [
   {
    "input": "3 3\n1 2 3\n4 5 6\n7 8 9\n",
    "output": "1 2 3 6 5 4 7 8 9\n",
    "hidden": false
   },
   {
    "input": "4 2\n1 2\n3 4\n5 6\n7 8\n",
    "output": "1 2 4 3 5 6 8 7\n",
    "hidden": false
   },
   {
    "input": "1 1\n4\n",
    "output": "4\n",
    "hidden": true
   },
   {
    "input": "1 5\n1 2 3 4 5\n",
    "output": "1 2 3 4 5\n",
    "hidden": true
   },
   {
    "input": "3 1\n1\n2\n3\n",
    "output": "1 2 3\n",
    "hidden": true
   },
   {
    "input": "2 3\n-1 -2 -3\n-4 -5 -6\n",
    "output": "-1 -2 -3 -6 -5 -4\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d09",
  "title": "Set Matrix Zeros",
  "category": "Matrices",
  "difficulty": "Medium",
  "description": "<p>For every element of the matrix that is <code>0</code> in the <b>original</b> matrix, set its entire row and entire column to <code>0</code>. Print the resulting matrix.</p><h4>Input</h4><p>The first line contains two integers <code>R C</code>. The next <code>R</code> lines each contain <code>C</code> space-separated integers.</p><h4>Output</h4><p>Print the resulting <code>R x C</code> matrix, one row per line with space-separated integers.</p>",
  "solution": "r, c = map(int, input().split())\na = [list(map(int, input().split())) for _ in range(r)]\nzr = {i for i in range(r) for j in range(c) if a[i][j] == 0}\nzc = {j for i in range(r) for j in range(c) if a[i][j] == 0}\nfor i in range(r):\n    print(\" \".join(\"0\" if i in zr or j in zc else str(a[i][j]) for j in range(c)))\n",
  "tests": [
   {
    "input": "3 3\n1 1 1\n1 0 1\n1 1 1\n",
    "output": "1 0 1\n0 0 0\n1 0 1\n",
    "hidden": false
   },
   {
    "input": "3 4\n0 1 2 0\n3 4 5 2\n1 3 1 5\n",
    "output": "0 0 0 0\n0 4 5 0\n0 3 1 0\n",
    "hidden": false
   },
   {
    "input": "1 1\n0\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "1 1\n5\n",
    "output": "5\n",
    "hidden": true
   },
   {
    "input": "2 2\n1 2\n3 4\n",
    "output": "1 2\n3 4\n",
    "hidden": true
   },
   {
    "input": "2 3\n-1 2 3\n4 -5 0\n",
    "output": "-1 2 0\n0 0 0\n",
    "hidden": true
   },
   {
    "input": "1 5\n1 0 3 4 5\n",
    "output": "0 0 0 0 0\n",
    "hidden": true
   },
   {
    "input": "3 1\n1\n0\n3\n",
    "output": "0\n0\n0\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d10",
  "title": "Primes in a Range",
  "category": "Math",
  "difficulty": "Easy",
  "description": "<p>Print all prime numbers between <code>A</code> and <code>B</code> inclusive. A prime is an integer greater than 1 whose only divisors are 1 and itself.</p><h4>Input</h4><p>One line with two integers <code>A B</code> (<code>A &le; B</code>, values may be negative).</p><h4>Output</h4><p>Print the primes in increasing order separated by spaces. If there are none, print <code>None</code>.</p>",
  "solution": "a, b = map(int, input().split())\ndef is_prime(n):\n    if n < 2:\n        return False\n    i = 2\n    while i * i <= n:\n        if n % i == 0:\n            return False\n        i += 1\n    return True\nps = [x for x in range(a, b + 1) if is_prime(x)]\nprint(\" \".join(map(str, ps)) if ps else \"None\")\n",
  "tests": [
   {
    "input": "1 20\n",
    "output": "2 3 5 7 11 13 17 19\n",
    "hidden": false
   },
   {
    "input": "10 30\n",
    "output": "11 13 17 19 23 29\n",
    "hidden": false
   },
   {
    "input": "24 28\n",
    "output": "None\n",
    "hidden": true
   },
   {
    "input": "2 2\n",
    "output": "2\n",
    "hidden": true
   },
   {
    "input": "-10 3\n",
    "output": "2 3\n",
    "hidden": true
   },
   {
    "input": "1 1\n",
    "output": "None\n",
    "hidden": true
   },
   {
    "input": "90 110\n",
    "output": "97 101 103 107 109\n",
    "hidden": true
   },
   {
    "input": "-5 -1\n",
    "output": "None\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d11",
  "title": "GCD and LCM",
  "category": "Math",
  "difficulty": "Easy",
  "description": "<p>Given two positive integers <code>A</code> and <code>B</code>, compute their greatest common divisor (GCD) and least common multiple (LCM).</p><h4>Input</h4><p>One line with two positive integers <code>A B</code>.</p><h4>Output</h4><p>Print two lines: <code>GCD = g</code> and <code>LCM = l</code>.</p>",
  "solution": "a, b = map(int, input().split())\nx, y = a, b\nwhile y:\n    x, y = y, x % y\nprint(\"GCD =\", x)\nprint(\"LCM =\", a * b // x)\n",
  "tests": [
   {
    "input": "12 18\n",
    "output": "GCD = 6\nLCM = 36\n",
    "hidden": false
   },
   {
    "input": "7 5\n",
    "output": "GCD = 1\nLCM = 35\n",
    "hidden": false
   },
   {
    "input": "1 1\n",
    "output": "GCD = 1\nLCM = 1\n",
    "hidden": true
   },
   {
    "input": "100 10\n",
    "output": "GCD = 10\nLCM = 100\n",
    "hidden": true
   },
   {
    "input": "17 17\n",
    "output": "GCD = 17\nLCM = 17\n",
    "hidden": true
   },
   {
    "input": "48 180\n",
    "output": "GCD = 12\nLCM = 720\n",
    "hidden": true
   },
   {
    "input": "123456 7890\n",
    "output": "GCD = 6\nLCM = 162344640\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d12",
  "title": "Armstrong Number",
  "category": "Math",
  "difficulty": "Easy",
  "description": "<p>An <b>Armstrong number</b> is a non-negative integer equal to the sum of its digits, each raised to the power of the number of digits. For example, <code>153 = 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup></code>.</p><h4>Input</h4><p>A single non-negative integer <code>N</code>.</p><h4>Output</h4><p>Print <code>Armstrong</code> if <code>N</code> is an Armstrong number, otherwise <code>Not Armstrong</code>.</p>",
  "solution": "s = input().strip()\nn = int(s)\nd = str(n)\nprint(\"Armstrong\" if sum(int(ch) ** len(d) for ch in d) == n else \"Not Armstrong\")\n",
  "tests": [
   {
    "input": "153\n",
    "output": "Armstrong\n",
    "hidden": false
   },
   {
    "input": "123\n",
    "output": "Not Armstrong\n",
    "hidden": false
   },
   {
    "input": "0\n",
    "output": "Armstrong\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "Armstrong\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "Not Armstrong\n",
    "hidden": true
   },
   {
    "input": "9474\n",
    "output": "Armstrong\n",
    "hidden": true
   },
   {
    "input": "9475\n",
    "output": "Not Armstrong\n",
    "hidden": true
   },
   {
    "input": "370\n",
    "output": "Armstrong\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d13",
  "title": "Decimal to Base B",
  "category": "Math",
  "difficulty": "Medium",
  "description": "<p>Convert a decimal integer <code>N</code> to base <code>B</code> (2 &le; B &le; 16). Use digits <code>0-9</code> and uppercase letters <code>A-F</code> for values 10-15. If <code>N</code> is negative, prefix the result with <code>-</code>.</p><h4>Input</h4><p>One line with two integers <code>N B</code>.</p><h4>Output</h4><p>Print <code>N</code> written in base <code>B</code>.</p>",
  "solution": "n, b = map(int, input().split())\ndigits = \"0123456789ABCDEF\"\nif n == 0:\n    print(0)\nelse:\n    neg = n < 0\n    n = abs(n)\n    s = \"\"\n    while n:\n        s = digits[n % b] + s\n        n //= b\n    print((\"-\" if neg else \"\") + s)\n",
  "tests": [
   {
    "input": "10 2\n",
    "output": "1010\n",
    "hidden": false
   },
   {
    "input": "255 16\n",
    "output": "FF\n",
    "hidden": false
   },
   {
    "input": "0 7\n",
    "output": "0\n",
    "hidden": true
   },
   {
    "input": "-26 3\n",
    "output": "-222\n",
    "hidden": true
   },
   {
    "input": "1 2\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "100 8\n",
    "output": "144\n",
    "hidden": true
   },
   {
    "input": "48879 16\n",
    "output": "BEEF\n",
    "hidden": true
   },
   {
    "input": "35 10\n",
    "output": "35\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d14",
  "title": "Number Right Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print a right triangle of <code>N</code> rows, where row <code>i</code> contains the numbers <code>1</code> to <code>i</code> separated by single spaces.</p><h4>Input</h4><p>A single integer <code>N</code> (N &ge; 1).</p><h4>Output</h4><p>The triangle, with no trailing spaces. Example for <code>N = 4</code>:</p><pre>1\n1 2\n1 2 3\n1 2 3 4</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \".join(str(k) for k in range(1, i + 1)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "1\n1 2\n1 2 3\n1 2 3 4\n",
    "hidden": false
   },
   {
    "input": "2\n",
    "output": "1\n1 2\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "1\n1 2\n1 2 3\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n1 2 3 4 5 6\n1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7 8 9\n1 2 3 4 5 6 7 8 9 10\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d15",
  "title": "Star Diamond",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a diamond made of <code>*</code> with <code>2N - 1</code> rows. Row <code>i</code> of the top half (<code>i = 1..N</code>) has <code>N - i</code> leading spaces followed by <code>2i - 1</code> stars; the bottom half mirrors the top (without repeating the middle row).</p><h4>Input</h4><p>A single integer <code>N</code> (N &ge; 1).</p><h4>Output</h4><p>The diamond, with no trailing spaces. Example for <code>N = 3</code>:</p><pre>  *\n ***\n*****\n ***\n  *</pre>",
  "solution": "n = int(input())\nrows = list(range(1, n + 1)) + list(range(n - 1, 0, -1))\nfor i in rows:\n    print(\" \" * (n - i) + \"*\" * (2 * i - 1))\n",
  "tests": [
   {
    "input": "3\n",
    "output": "  *\n ***\n*****\n ***\n  *\n",
    "hidden": false
   },
   {
    "input": "2\n",
    "output": " *\n***\n *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "4\n",
    "output": "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************\n ***********\n  *********\n   *******\n    *****\n     ***\n      *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "d16",
  "title": "Pascal's Triangle",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print the first <code>N</code> rows of Pascal's triangle. Each row starts and ends with <code>1</code>, and every inner number is the sum of the two numbers directly above it in the previous row. Print rows left-aligned.</p><h4>Input</h4><p>A single integer <code>N</code> (N &ge; 1).</p><h4>Output</h4><p><code>N</code> lines; numbers in each row separated by single spaces, no trailing spaces. Example for <code>N = 5</code>:</p><pre>1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1</pre>",
  "solution": "n = int(input())\nrow = [1]\nfor _ in range(n):\n    print(\" \".join(map(str, row)))\n    row = [1] + [row[k] + row[k + 1] for k in range(len(row) - 1)] + [1]\n",
  "tests": [
   {
    "input": "5\n",
    "output": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1\n1 1\n1 2 1\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1\n1 1\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n1 5 10 10 5 1\n1 6 15 20 15 6 1\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n1 5 10 10 5 1\n1 6 15 20 15 6 1\n1 7 21 35 35 21 7 1\n1 8 28 56 70 56 28 8 1\n1 9 36 84 126 126 84 36 9 1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e01",
  "title": "Solid Square",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given an integer <code>n</code>, print a solid square of asterisks (<code>*</code>) with <code>n</code> rows and <code>n</code> columns. Stars are printed side by side with no spaces between them.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines, each containing <code>n</code> asterisks.</p><p>Example for input <code>4</code>:</p><pre>****\n****\n****\n****</pre>",
  "solution": "n = int(input())\nfor _ in range(n):\n    print(\"*\" * n)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "****\n****\n****\n****\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*****\n*****\n*****\n*****\n*****\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "**\n**\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "***\n***\n***\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*******\n*******\n*******\n*******\n*******\n*******\n*******\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e02",
  "title": "Hollow Square",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given an integer <code>n</code>, print a hollow square of size <code>n x n</code>. Only the border is made of asterisks (<code>*</code>); the inside is filled with spaces.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines forming the hollow square. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>****\n*  *\n*  *\n****</pre>",
  "solution": "n = int(input())\nfor i in range(n):\n    if i == 0 or i == n - 1:\n        print(\"*\" * n)\n    else:\n        print(\"*\" + \" \" * (n - 2) + \"*\")\n",
  "tests": [
   {
    "input": "4\n",
    "output": "****\n*  *\n*  *\n****\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*****\n*   *\n*   *\n*   *\n*****\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "**\n**\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "***\n* *\n***\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*******\n*     *\n*     *\n*     *\n*     *\n*     *\n*******\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*********\n*       *\n*       *\n*       *\n*       *\n*       *\n*       *\n*       *\n*********\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e03",
  "title": "Star Right Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given an integer <code>n</code>, print a left-aligned right triangle of asterisks. Row <code>i</code> (1-based) contains exactly <code>i</code> stars, printed side by side.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines; line <code>i</code> has <code>i</code> asterisks.</p><p>Example for input <code>4</code>:</p><pre>*\n**\n***\n****</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\"*\" * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "*\n**\n***\n****\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*\n**\n***\n****\n*****\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "*\n**\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "*\n**\n***\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*\n**\n***\n****\n*****\n******\n*******\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e04",
  "title": "Inverted Right Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given an integer <code>n</code>, print a left-aligned right triangle of asterisks turned upside down: the first row has <code>n</code> stars and each following row has one star fewer.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines; line <code>i</code> (1-based) has <code>n - i + 1</code> asterisks.</p><p>Example for input <code>4</code>:</p><pre>****\n***\n**\n*</pre>",
  "solution": "n = int(input())\nfor i in range(n, 0, -1):\n    print(\"*\" * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "****\n***\n**\n*\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*****\n****\n***\n**\n*\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "**\n*\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "***\n**\n*\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*******\n******\n*****\n****\n***\n**\n*\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e05",
  "title": "Mirrored Right Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given an integer <code>n</code>, print a <b>right-aligned</b> right triangle of asterisks. Row <code>i</code> (1-based) has <code>n - i</code> leading spaces followed by <code>i</code> stars.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines forming the right-aligned triangle. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>   *\n  **\n ***\n****</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \" * (n - i) + \"*\" * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   *\n  **\n ***\n****\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "    *\n   **\n  ***\n ****\n*****\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " *\n**\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "  *\n **\n***\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      *\n     **\n    ***\n   ****\n  *****\n ******\n*******\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        *\n       **\n      ***\n     ****\n    *****\n   ******\n  *******\n ********\n*********\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e06",
  "title": "Centered Pyramid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print a centered pyramid of asterisks with <code>n</code> rows. Row <code>i</code> (1-based) has <code>n - i</code> leading spaces followed by <code>2i - 1</code> stars.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines forming the pyramid. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>   *\n  ***\n *****\n*******</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \" * (n - i) + \"*\" * (2 * i - 1))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   *\n  ***\n *****\n*******\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "    *\n   ***\n  *****\n *******\n*********\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " *\n***\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "  *\n ***\n*****\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        *\n       ***\n      *****\n     *******\n    *********\n   ***********\n  *************\n ***************\n*****************\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e07",
  "title": "Inverted Pyramid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print a centered pyramid of asterisks turned upside down. The first row has <code>2n - 1</code> stars with no leading spaces; each following row has one more leading space and two fewer stars, ending with a single star.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines forming the inverted pyramid. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>*******\n *****\n  ***\n   *</pre>",
  "solution": "n = int(input())\nfor i in range(n, 0, -1):\n    print(\" \" * (n - i) + \"*\" * (2 * i - 1))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "*******\n *****\n  ***\n   *\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*********\n *******\n  *****\n   ***\n    *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "***\n *\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "*****\n ***\n  *\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*************\n ***********\n  *********\n   *******\n    *****\n     ***\n      *\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*****************\n ***************\n  *************\n   ***********\n    *********\n     *******\n      *****\n       ***\n        *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e08",
  "title": "Hollow Pyramid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print a hollow centered pyramid with <code>n</code> rows. The pyramid has the same outline as a solid pyramid (row <code>i</code> is <code>2i - 1</code> characters wide after <code>n - i</code> leading spaces), but only its edges are stars: the first and last character of each row, plus the entire bottom row.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines forming the hollow pyramid. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>   *\n  * *\n *   *\n*******</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    pad = \" \" * (n - i)\n    if i == 1:\n        print(pad + \"*\")\n    elif i == n:\n        print(\"*\" * (2 * n - 1))\n    else:\n        print(pad + \"*\" + \" \" * (2 * i - 3) + \"*\")\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   *\n  * *\n *   *\n*******\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "    *\n   * *\n  *   *\n *     *\n*********\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " *\n***\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "  *\n * *\n*****\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      *\n     * *\n    *   *\n   *     *\n  *       *\n *         *\n*************\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        *\n       * *\n      *   *\n     *     *\n    *       *\n   *         *\n  *           *\n *             *\n*****************\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e09",
  "title": "Hollow Diamond",
  "category": "Patterns",
  "difficulty": "Hard",
  "description": "<p>Given an integer <code>n</code>, print a hollow diamond made of asterisks. The diamond has <code>2n - 1</code> rows and its widest row (the middle one) is <code>2n - 1</code> characters wide. Only the outline is drawn with stars; the inside is filled with spaces. The top half is a hollow pyramid without its base, and the bottom half mirrors the top.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines forming the hollow diamond. Do not print any trailing spaces.</p><p>Example for input <code>4</code>:</p><pre>   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *</pre>",
  "solution": "n = int(input())\nrows = list(range(1, n + 1)) + list(range(n - 1, 0, -1))\nfor k in rows:\n    pad = \" \" * (n - k)\n    if k == 1:\n        print(pad + \"*\")\n    else:\n        print(pad + \"*\" + \" \" * (2 * k - 3) + \"*\")\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " *\n* *\n *\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "  *\n * *\n*   *\n * *\n  *\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      *\n     * *\n    *   *\n   *     *\n  *       *\n *         *\n*           *\n *         *\n  *       *\n   *     *\n    *   *\n     * *\n      *\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        *\n       * *\n      *   *\n     *     *\n    *       *\n   *         *\n  *           *\n *             *\n*               *\n *             *\n  *           *\n   *         *\n    *       *\n     *     *\n      *   *\n       * *\n        *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e10",
  "title": "X Marks the Spot",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an <b>odd</b> integer <code>n</code>, print an <code>X</code> shape of asterisks inside an <code>n x n</code> grid. Position <code>(i, j)</code> (0-based) holds a star when it lies on either diagonal, i.e. <code>j == i</code> or <code>j == n - 1 - i</code>; every other position is a space.</p><h4>Input</h4><p>A single <b>odd</b> integer <code>n</code> (1 &le; n &le; 21).</p><h4>Output</h4><p>Print <code>n</code> lines forming the X. Do not print any trailing spaces.</p><p>Example for input <code>5</code>:</p><pre>*   *\n * *\n  *\n * *\n*   *</pre>",
  "solution": "n = int(input())\nfor i in range(n):\n    row = \"\".join(\"*\" if j == i or j == n - 1 - i else \" \" for j in range(n))\n    print(row.rstrip())\n",
  "tests": [
   {
    "input": "5\n",
    "output": "*   *\n * *\n  *\n * *\n*   *\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "* *\n *\n* *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*     *\n *   *\n  * *\n   *\n  * *\n *   *\n*     *\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*       *\n *     *\n  *   *\n   * *\n    *\n   * *\n  *   *\n *     *\n*       *\n",
    "hidden": true
   },
   {
    "input": "11\n",
    "output": "*         *\n *       *\n  *     *\n   *   *\n    * *\n     *\n    * *\n   *   *\n  *     *\n *       *\n*         *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e11",
  "title": "Plus Sign",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an <b>odd</b> integer <code>n</code>, print a plus sign (<code>+</code>) made of asterisks inside an <code>n x n</code> grid. The middle row is completely filled with stars, and every other row contains a single star in the middle column.</p><h4>Input</h4><p>A single <b>odd</b> integer <code>n</code> (1 &le; n &le; 21).</p><h4>Output</h4><p>Print <code>n</code> lines forming the plus sign. Do not print any trailing spaces.</p><p>Example for input <code>5</code>:</p><pre>  *\n  *\n*****\n  *\n  *</pre>",
  "solution": "n = int(input())\nm = n // 2\nfor i in range(n):\n    if i == m:\n        print(\"*\" * n)\n    else:\n        print(\" \" * m + \"*\")\n",
  "tests": [
   {
    "input": "5\n",
    "output": "  *\n  *\n*****\n  *\n  *\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": " *\n***\n *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "   *\n   *\n   *\n*******\n   *\n   *\n   *\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "    *\n    *\n    *\n    *\n*********\n    *\n    *\n    *\n    *\n",
    "hidden": true
   },
   {
    "input": "11\n",
    "output": "     *\n     *\n     *\n     *\n     *\n***********\n     *\n     *\n     *\n     *\n     *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e12",
  "title": "Right-Pointing Arrow",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print a sideways triangle that points to the right. The number of stars grows from <code>1</code> up to <code>n</code> and then shrinks back down to <code>1</code>, giving <code>2n - 1</code> rows in total. Rows are left-aligned and the stars are printed side by side.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines forming the arrow.</p><p>Example for input <code>4</code>:</p><pre>*\n**\n***\n****\n***\n**\n*</pre>",
  "solution": "n = int(input())\nfor i in list(range(1, n + 1)) + list(range(n - 1, 0, -1)):\n    print(\"*\" * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "*\n**\n***\n****\n***\n**\n*\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*\n**\n***\n****\n*****\n****\n***\n**\n*\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "*\n**\n*\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "*\n**\n***\n**\n*\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*\n**\n***\n****\n*****\n******\n*******\n******\n*****\n****\n***\n**\n*\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e13",
  "title": "Checkerboard",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Given an integer <code>n</code>, print an <code>n x n</code> checkerboard using the characters <code>#</code> and <code>.</code> (no spaces). The top-left cell is <code>#</code>, and the characters alternate both across each row and down each column: cell <code>(i, j)</code> (0-based) is <code>#</code> when <code>i + j</code> is even, otherwise <code>.</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines, each containing <code>n</code> characters.</p><p>Example for input <code>4</code>:</p><pre>#.#.\n.#.#\n#.#.\n.#.#</pre>",
  "solution": "n = int(input())\nfor i in range(n):\n    print(\"\".join(\"#\" if (i + j) % 2 == 0 else \".\" for j in range(n)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "#.#.\n.#.#\n#.#.\n.#.#\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "#.#.#\n.#.#.\n#.#.#\n.#.#.\n#.#.#\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "#\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "#.\n.#\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "#.#\n.#.\n#.#\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "#.#.#.#\n.#.#.#.\n#.#.#.#\n.#.#.#.\n#.#.#.#\n.#.#.#.\n#.#.#.#\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "#.#.#.#.#\n.#.#.#.#.\n#.#.#.#.#\n.#.#.#.#.\n#.#.#.#.#\n.#.#.#.#.\n#.#.#.#.#\n.#.#.#.#.\n#.#.#.#.#\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e14",
  "title": "Hollow Rectangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Given two integers <code>R</code> and <code>C</code>, print a hollow rectangle with <code>R</code> rows and <code>C</code> columns. The border is made of asterisks (<code>*</code>) and the inside is filled with spaces. If <code>R</code> or <code>C</code> is 1 or 2, the rectangle has no inside and is completely filled with stars.</p><h4>Input</h4><p>A single line with two space-separated integers <code>R C</code> (1 &le; R, C &le; 20).</p><h4>Output</h4><p>Print <code>R</code> lines forming the hollow rectangle. Do not print any trailing spaces.</p><p>Example for input <code>4 6</code>:</p><pre>******\n*    *\n*    *\n******</pre>",
  "solution": "r, c = map(int, input().split())\nfor i in range(r):\n    if i == 0 or i == r - 1 or c <= 2:\n        print(\"*\" * c)\n    else:\n        print(\"*\" + \" \" * (c - 2) + \"*\")\n",
  "tests": [
   {
    "input": "4 6\n",
    "output": "******\n*    *\n*    *\n******\n",
    "hidden": false
   },
   {
    "input": "3 3\n",
    "output": "***\n* *\n***\n",
    "hidden": false
   },
   {
    "input": "1 1\n",
    "output": "*\n",
    "hidden": true
   },
   {
    "input": "1 5\n",
    "output": "*****\n",
    "hidden": true
   },
   {
    "input": "5 1\n",
    "output": "*\n*\n*\n*\n*\n",
    "hidden": true
   },
   {
    "input": "2 2\n",
    "output": "**\n**\n",
    "hidden": true
   },
   {
    "input": "7 9\n",
    "output": "*********\n*       *\n*       *\n*       *\n*       *\n*       *\n*********\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "e15",
  "title": "Butterfly",
  "category": "Patterns",
  "difficulty": "Hard",
  "description": "<p>Given an integer <code>n</code>, print a butterfly pattern with <code>2n - 1</code> rows. In the top half, row <code>i</code> (1 to <code>n</code>) consists of <code>i</code> stars, then <code>2(n - i)</code> spaces, then <code>i</code> stars, so the two wings meet in row <code>n</code> as <code>2n</code> stars. The bottom half mirrors the top half (rows <code>n - 1</code> down to <code>1</code>).</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines forming the butterfly.</p><p>Example for input <code>4</code>:</p><pre>*      *\n**    **\n***  ***\n********\n***  ***\n**    **\n*      *</pre>",
  "solution": "n = int(input())\nfor i in list(range(1, n + 1)) + list(range(n - 1, 0, -1)):\n    print(\"*\" * i + \" \" * (2 * (n - i)) + \"*\" * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "*      *\n**    **\n***  ***\n********\n***  ***\n**    **\n*      *\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "*        *\n**      **\n***    ***\n****  ****\n**********\n****  ****\n***    ***\n**      **\n*        *\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "**\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "*  *\n****\n*  *\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "*    *\n**  **\n******\n**  **\n*    *\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "*            *\n**          **\n***        ***\n****      ****\n*****    *****\n******  ******\n**************\n******  ******\n*****    *****\n****      ****\n***        ***\n**          **\n*            *\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "*                *\n**              **\n***            ***\n****          ****\n*****        *****\n******      ******\n*******    *******\n********  ********\n******************\n********  ********\n*******    *******\n******      ******\n*****        *****\n****          ****\n***            ***\n**              **\n*                *\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f01",
  "title": "Floyd's Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print Floyd's triangle with <code>n</code> rows. Row <code>i</code> contains <code>i</code> consecutive integers, continuing the count from the previous row and starting at 1.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 15).</p><h4>Output</h4><p>Print <code>n</code> lines. Numbers on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>1\n2 3\n4 5 6\n7 8 9 10</pre>",
  "solution": "n = int(input())\nk = 1\nfor i in range(1, n + 1):\n    row = []\n    for _ in range(i):\n        row.append(str(k))\n        k += 1\n    print(\" \".join(row))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "1\n2 3\n4 5 6\n7 8 9 10\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1\n2 3\n4 5 6\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1\n2 3\n",
    "hidden": true
   },
   {
    "input": "6\n",
    "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15\n16 17 18 19 20 21\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15\n16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31 32 33 34 35 36\n37 38 39 40 41 42 43 44 45\n46 47 48 49 50 51 52 53 54 55\n",
    "hidden": true
   },
   {
    "input": "15\n",
    "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15\n16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31 32 33 34 35 36\n37 38 39 40 41 42 43 44 45\n46 47 48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63 64 65 66\n67 68 69 70 71 72 73 74 75 76 77 78\n79 80 81 82 83 84 85 86 87 88 89 90 91\n92 93 94 95 96 97 98 99 100 101 102 103 104 105\n106 107 108 109 110 111 112 113 114 115 116 117 118 119 120\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f02",
  "title": "Repeated Number Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print a right triangle with <code>n</code> rows where row <code>i</code> contains the number <code>i</code> repeated <code>i</code> times.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Numbers on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>1\n2 2\n3 3 3\n4 4 4 4</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \".join([str(i)] * i))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "1\n2 2\n3 3 3\n4 4 4 4\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1\n2 2\n3 3 3\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1\n2 2\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5\n6 6 6 6 6 6\n7 7 7 7 7 7 7\n8 8 8 8 8 8 8 8\n9 9 9 9 9 9 9 9 9\n",
    "hidden": true
   },
   {
    "input": "12\n",
    "output": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5\n6 6 6 6 6 6\n7 7 7 7 7 7 7\n8 8 8 8 8 8 8 8\n9 9 9 9 9 9 9 9 9\n10 10 10 10 10 10 10 10 10 10\n11 11 11 11 11 11 11 11 11 11 11\n12 12 12 12 12 12 12 12 12 12 12 12\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f03",
  "title": "Inverted Number Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print an inverted number triangle with <code>n</code> rows. The first row contains <code>1 2 ... n</code>, and each following row has one number fewer (dropping the largest), until the last row contains only <code>1</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Numbers on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>1 2 3 4\n1 2 3\n1 2\n1</pre>",
  "solution": "n = int(input())\nfor i in range(n, 0, -1):\n    print(\" \".join(str(j) for j in range(1, i + 1)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "1 2 3 4\n1 2 3\n1 2\n1\n",
    "hidden": false
   },
   {
    "input": "5\n",
    "output": "1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1 2\n1\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "1 2 3\n1 2\n1\n",
    "hidden": true
   },
   {
    "input": "8\n",
    "output": "1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7\n1 2 3 4 5 6\n1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1\n",
    "hidden": true
   },
   {
    "input": "12\n",
    "output": "1 2 3 4 5 6 7 8 9 10 11 12\n1 2 3 4 5 6 7 8 9 10 11\n1 2 3 4 5 6 7 8 9 10\n1 2 3 4 5 6 7 8 9\n1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7\n1 2 3 4 5 6\n1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f04",
  "title": "Palindrome Number Pyramid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a centered pyramid of <code>n</code> rows. Row <code>i</code> (1-based) shows the digits counting up from 1 to <code>i</code> and back down to 1, written together with no spaces (e.g. row 3 is <code>12321</code>).</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 9).</p><h4>Output</h4><p>Print <code>n</code> lines. Row <code>i</code> starts with exactly <code>n - i</code> leading spaces, followed by the digits with no spaces between them. No trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>   1\n  121\n 12321\n1234321</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    up = \"\".join(str(j) for j in range(1, i + 1))\n    print(\" \" * (n - i) + up + up[-2::-1])\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   1\n  121\n 12321\n1234321\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "  1\n 121\n12321\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " 1\n121\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "    1\n   121\n  12321\n 1234321\n123454321\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      1\n     121\n    12321\n   1234321\n  123454321\n 12345654321\n1234567654321\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        1\n       121\n      12321\n     1234321\n    123454321\n   12345654321\n  1234567654321\n 123456787654321\n12345678987654321\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f05",
  "title": "Binary Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print a right triangle of <code>n</code> rows made of alternating 1s and 0s. The value at row <code>i</code>, column <code>j</code> (both 1-based) is <code>1</code> if <code>i + j</code> is even and <code>0</code> otherwise. So every row ends in <code>1</code>, and odd rows start with <code>1</code> while even rows start with <code>0</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Values on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>5</pre><p>Output:</p><pre>1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \".join(\"1\" if (i + j) % 2 == 0 else \"0\" for j in range(1, i + 1)))\n",
  "tests": [
   {
    "input": "5\n",
    "output": "1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1\n",
    "hidden": false
   },
   {
    "input": "4\n",
    "output": "1\n0 1\n1 0 1\n0 1 0 1\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1\n0 1\n",
    "hidden": true
   },
   {
    "input": "3\n",
    "output": "1\n0 1\n1 0 1\n",
    "hidden": true
   },
   {
    "input": "8\n",
    "output": "1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1\n0 1 0 1 0 1\n1 0 1 0 1 0 1\n0 1 0 1 0 1 0 1\n",
    "hidden": true
   },
   {
    "input": "12\n",
    "output": "1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1\n0 1 0 1 0 1\n1 0 1 0 1 0 1\n0 1 0 1 0 1 0 1\n1 0 1 0 1 0 1 0 1\n0 1 0 1 0 1 0 1 0 1\n1 0 1 0 1 0 1 0 1 0 1\n0 1 0 1 0 1 0 1 0 1 0 1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f06",
  "title": "Alphabet Triangle",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print a right triangle of <code>n</code> rows using uppercase letters. Row <code>i</code> contains the first <code>i</code> letters of the alphabet: <code>A</code>, then <code>A B</code>, then <code>A B C</code>, and so on.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 26).</p><h4>Output</h4><p>Print <code>n</code> lines. Letters on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>A\nA B\nA B C\nA B C D</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(\" \".join(chr(65 + j) for j in range(i)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "A\nA B\nA B C\nA B C D\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "A\nA B\nA B C\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "A\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "A\nA B\n",
    "hidden": true
   },
   {
    "input": "6\n",
    "output": "A\nA B\nA B C\nA B C D\nA B C D E\nA B C D E F\n",
    "hidden": true
   },
   {
    "input": "13\n",
    "output": "A\nA B\nA B C\nA B C D\nA B C D E\nA B C D E F\nA B C D E F G\nA B C D E F G H\nA B C D E F G H I\nA B C D E F G H I J\nA B C D E F G H I J K\nA B C D E F G H I J K L\nA B C D E F G H I J K L M\n",
    "hidden": true
   },
   {
    "input": "26\n",
    "output": "A\nA B\nA B C\nA B C D\nA B C D E\nA B C D E F\nA B C D E F G\nA B C D E F G H\nA B C D E F G H I\nA B C D E F G H I J\nA B C D E F G H I J K\nA B C D E F G H I J K L\nA B C D E F G H I J K L M\nA B C D E F G H I J K L M N\nA B C D E F G H I J K L M N O\nA B C D E F G H I J K L M N O P\nA B C D E F G H I J K L M N O P Q\nA B C D E F G H I J K L M N O P Q R\nA B C D E F G H I J K L M N O P Q R S\nA B C D E F G H I J K L M N O P Q R S T\nA B C D E F G H I J K L M N O P Q R S T U\nA B C D E F G H I J K L M N O P Q R S T U V\nA B C D E F G H I J K L M N O P Q R S T U V W\nA B C D E F G H I J K L M N O P Q R S T U V W X\nA B C D E F G H I J K L M N O P Q R S T U V W X Y\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f07",
  "title": "Letter Pyramid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a centered pyramid of <code>n</code> rows. Row <code>i</code> (1-based) shows the letters from <code>A</code> up to the <code>i</code>-th letter and back down to <code>A</code>, written together with no spaces (e.g. row 3 is <code>ABCBA</code>).</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 26).</p><h4>Output</h4><p>Print <code>n</code> lines. Row <code>i</code> starts with exactly <code>n - i</code> leading spaces, followed by the letters with no spaces between them. No trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>   A\n  ABA\n ABCBA\nABCDCBA</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    up = \"\".join(chr(65 + j) for j in range(i))\n    print(\" \" * (n - i) + up + up[-2::-1])\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   A\n  ABA\n ABCBA\nABCDCBA\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "  A\n ABA\nABCBA\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "A\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " A\nABA\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "    A\n   ABA\n  ABCBA\n ABCDCBA\nABCDEDCBA\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "         A\n        ABA\n       ABCBA\n      ABCDCBA\n     ABCDEDCBA\n    ABCDEFEDCBA\n   ABCDEFGFEDCBA\n  ABCDEFGHGFEDCBA\n ABCDEFGHIHGFEDCBA\nABCDEFGHIJIHGFEDCBA\n",
    "hidden": true
   },
   {
    "input": "26\n",
    "output": "                         A\n                        ABA\n                       ABCBA\n                      ABCDCBA\n                     ABCDEDCBA\n                    ABCDEFEDCBA\n                   ABCDEFGFEDCBA\n                  ABCDEFGHGFEDCBA\n                 ABCDEFGHIHGFEDCBA\n                ABCDEFGHIJIHGFEDCBA\n               ABCDEFGHIJKJIHGFEDCBA\n              ABCDEFGHIJKLKJIHGFEDCBA\n             ABCDEFGHIJKLMLKJIHGFEDCBA\n            ABCDEFGHIJKLMNMLKJIHGFEDCBA\n           ABCDEFGHIJKLMNONMLKJIHGFEDCBA\n          ABCDEFGHIJKLMNOPONMLKJIHGFEDCBA\n         ABCDEFGHIJKLMNOPQPONMLKJIHGFEDCBA\n        ABCDEFGHIJKLMNOPQRQPONMLKJIHGFEDCBA\n       ABCDEFGHIJKLMNOPQRSRQPONMLKJIHGFEDCBA\n      ABCDEFGHIJKLMNOPQRSTSRQPONMLKJIHGFEDCBA\n     ABCDEFGHIJKLMNOPQRSTUTSRQPONMLKJIHGFEDCBA\n    ABCDEFGHIJKLMNOPQRSTUVUTSRQPONMLKJIHGFEDCBA\n   ABCDEFGHIJKLMNOPQRSTUVWVUTSRQPONMLKJIHGFEDCBA\n  ABCDEFGHIJKLMNOPQRSTUVWXWVUTSRQPONMLKJIHGFEDCBA\n ABCDEFGHIJKLMNOPQRSTUVWXYXWVUTSRQPONMLKJIHGFEDCBA\nABCDEFGHIJKLMNOPQRSTUVWXYZYXWVUTSRQPONMLKJIHGFEDCBA\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f08",
  "title": "Repeated Letter Rows",
  "category": "Patterns",
  "difficulty": "Easy",
  "description": "<p>Print <code>n</code> rows where row <code>i</code> (1-based) contains the <code>i</code>-th uppercase letter of the alphabet repeated <code>i</code> times: <code>A</code>, <code>BB</code>, <code>CCC</code>, and so on.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 26).</p><h4>Output</h4><p>Print <code>n</code> lines. Letters are written together with no spaces. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>A\nBB\nCCC\nDDDD</pre>",
  "solution": "n = int(input())\nfor i in range(1, n + 1):\n    print(chr(64 + i) * i)\n",
  "tests": [
   {
    "input": "4\n",
    "output": "A\nBB\nCCC\nDDDD\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "A\nBB\nCCC\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "A\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "A\nBB\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "A\nBB\nCCC\nDDDD\nEEEEE\nFFFFFF\nGGGGGGG\n",
    "hidden": true
   },
   {
    "input": "15\n",
    "output": "A\nBB\nCCC\nDDDD\nEEEEE\nFFFFFF\nGGGGGGG\nHHHHHHHH\nIIIIIIIII\nJJJJJJJJJJ\nKKKKKKKKKKK\nLLLLLLLLLLLL\nMMMMMMMMMMMMM\nNNNNNNNNNNNNNN\nOOOOOOOOOOOOOOO\n",
    "hidden": true
   },
   {
    "input": "26\n",
    "output": "A\nBB\nCCC\nDDDD\nEEEEE\nFFFFFF\nGGGGGGG\nHHHHHHHH\nIIIIIIIII\nJJJJJJJJJJ\nKKKKKKKKKKK\nLLLLLLLLLLLL\nMMMMMMMMMMMMM\nNNNNNNNNNNNNNN\nOOOOOOOOOOOOOOO\nPPPPPPPPPPPPPPPP\nQQQQQQQQQQQQQQQQQ\nRRRRRRRRRRRRRRRRRR\nSSSSSSSSSSSSSSSSSSS\nTTTTTTTTTTTTTTTTTTTT\nUUUUUUUUUUUUUUUUUUUUU\nVVVVVVVVVVVVVVVVVVVVVV\nWWWWWWWWWWWWWWWWWWWWWWW\nXXXXXXXXXXXXXXXXXXXXXXXX\nYYYYYYYYYYYYYYYYYYYYYYYYY\nZZZZZZZZZZZZZZZZZZZZZZZZZZ\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f09",
  "title": "Number Diamond",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a diamond of numbers with <code>2n - 1</code> rows. The upper half has rows with <code>1</code>, <code>1 2</code>, ..., up to <code>1 2 ... n</code> (the middle row); the lower half shrinks back down to <code>1</code>. A row containing the numbers <code>1</code> to <code>k</code> is centered by indenting it.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 9).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines. A row with numbers <code>1</code> to <code>k</code> starts with exactly <code>n - k</code> leading spaces, and its numbers are separated by exactly one space. No trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>   1\n  1 2\n 1 2 3\n1 2 3 4\n 1 2 3\n  1 2\n   1</pre>",
  "solution": "n = int(input())\nks = list(range(1, n + 1)) + list(range(n - 1, 0, -1))\nfor k in ks:\n    print(\" \" * (n - k) + \" \".join(str(j) for j in range(1, k + 1)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "   1\n  1 2\n 1 2 3\n1 2 3 4\n 1 2 3\n  1 2\n   1\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "  1\n 1 2\n1 2 3\n 1 2\n  1\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": " 1\n1 2\n 1\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5\n 1 2 3 4\n  1 2 3\n   1 2\n    1\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "      1\n     1 2\n    1 2 3\n   1 2 3 4\n  1 2 3 4 5\n 1 2 3 4 5 6\n1 2 3 4 5 6 7\n 1 2 3 4 5 6\n  1 2 3 4 5\n   1 2 3 4\n    1 2 3\n     1 2\n      1\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "        1\n       1 2\n      1 2 3\n     1 2 3 4\n    1 2 3 4 5\n   1 2 3 4 5 6\n  1 2 3 4 5 6 7\n 1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7 8\n  1 2 3 4 5 6 7\n   1 2 3 4 5 6\n    1 2 3 4 5\n     1 2 3 4\n      1 2 3\n       1 2\n        1\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f10",
  "title": "Concentric Number Square",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a <code>(2n - 1) x (2n - 1)</code> square made of concentric layers. The outermost layer is filled with <code>n</code>, the next layer inward with <code>n - 1</code>, and so on, until the single center cell contains <code>1</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 9).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines, each with <code>2n - 1</code> numbers separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>3</pre><p>Output:</p><pre>3 3 3 3 3\n3 2 2 2 3\n3 2 1 2 3\n3 2 2 2 3\n3 3 3 3 3</pre>",
  "solution": "n = int(input())\nc = n - 1\nfor i in range(2 * n - 1):\n    print(\" \".join(str(max(abs(i - c), abs(j - c)) + 1) for j in range(2 * n - 1)))\n",
  "tests": [
   {
    "input": "3\n",
    "output": "3 3 3 3 3\n3 2 2 2 3\n3 2 1 2 3\n3 2 2 2 3\n3 3 3 3 3\n",
    "hidden": false
   },
   {
    "input": "4\n",
    "output": "4 4 4 4 4 4 4\n4 3 3 3 3 3 4\n4 3 2 2 2 3 4\n4 3 2 1 2 3 4\n4 3 2 2 2 3 4\n4 3 3 3 3 3 4\n4 4 4 4 4 4 4\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "2 2 2\n2 1 2\n2 2 2\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "5 5 5 5 5 5 5 5 5\n5 4 4 4 4 4 4 4 5\n5 4 3 3 3 3 3 4 5\n5 4 3 2 2 2 3 4 5\n5 4 3 2 1 2 3 4 5\n5 4 3 2 2 2 3 4 5\n5 4 3 3 3 3 3 4 5\n5 4 4 4 4 4 4 4 5\n5 5 5 5 5 5 5 5 5\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "7 7 7 7 7 7 7 7 7 7 7 7 7\n7 6 6 6 6 6 6 6 6 6 6 6 7\n7 6 5 5 5 5 5 5 5 5 5 6 7\n7 6 5 4 4 4 4 4 4 4 5 6 7\n7 6 5 4 3 3 3 3 3 4 5 6 7\n7 6 5 4 3 2 2 2 3 4 5 6 7\n7 6 5 4 3 2 1 2 3 4 5 6 7\n7 6 5 4 3 2 2 2 3 4 5 6 7\n7 6 5 4 3 3 3 3 3 4 5 6 7\n7 6 5 4 4 4 4 4 4 4 5 6 7\n7 6 5 5 5 5 5 5 5 5 5 6 7\n7 6 6 6 6 6 6 6 6 6 6 6 7\n7 7 7 7 7 7 7 7 7 7 7 7 7\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9\n9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9\n9 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 9\n9 8 7 6 6 6 6 6 6 6 6 6 6 6 7 8 9\n9 8 7 6 5 5 5 5 5 5 5 5 5 6 7 8 9\n9 8 7 6 5 4 4 4 4 4 4 4 5 6 7 8 9\n9 8 7 6 5 4 3 3 3 3 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 2 2 2 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 2 2 2 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 3 3 3 3 4 5 6 7 8 9\n9 8 7 6 5 4 4 4 4 4 4 4 5 6 7 8 9\n9 8 7 6 5 5 5 5 5 5 5 5 5 6 7 8 9\n9 8 7 6 6 6 6 6 6 6 6 6 6 6 7 8 9\n9 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 9\n9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9\n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f11",
  "title": "Multiplication Table Grid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print the <code>n x n</code> multiplication table: the value at row <code>i</code>, column <code>j</code> (both 1-based) is <code>i * j</code>. Every value is right-aligned to the same width <code>w</code>, where <code>w</code> is the number of digits in the largest value <code>n * n</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Each value is padded on the left with spaces to width <code>w</code>, and consecutive values are separated by exactly one space. No trailing spaces (a line may begin with spaces because of the padding).</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre> 1  2  3  4\n 2  4  6  8\n 3  6  9 12\n 4  8 12 16</pre>",
  "solution": "n = int(input())\nw = len(str(n * n))\nfor i in range(1, n + 1):\n    print(\" \".join(str(i * j).rjust(w) for j in range(1, n + 1)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": " 1  2  3  4\n 2  4  6  8\n 3  6  9 12\n 4  8 12 16\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1 2 3\n2 4 6\n3 6 9\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1 2\n2 4\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": " 1  2  3  4  5\n 2  4  6  8 10\n 3  6  9 12 15\n 4  8 12 16 20\n 5 10 15 20 25\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "  1   2   3   4   5   6   7   8   9  10\n  2   4   6   8  10  12  14  16  18  20\n  3   6   9  12  15  18  21  24  27  30\n  4   8  12  16  20  24  28  32  36  40\n  5  10  15  20  25  30  35  40  45  50\n  6  12  18  24  30  36  42  48  54  60\n  7  14  21  28  35  42  49  56  63  70\n  8  16  24  32  40  48  56  64  72  80\n  9  18  27  36  45  54  63  72  81  90\n 10  20  30  40  50  60  70  80  90 100\n",
    "hidden": true
   },
   {
    "input": "12\n",
    "output": "  1   2   3   4   5   6   7   8   9  10  11  12\n  2   4   6   8  10  12  14  16  18  20  22  24\n  3   6   9  12  15  18  21  24  27  30  33  36\n  4   8  12  16  20  24  28  32  36  40  44  48\n  5  10  15  20  25  30  35  40  45  50  55  60\n  6  12  18  24  30  36  42  48  54  60  66  72\n  7  14  21  28  35  42  49  56  63  70  77  84\n  8  16  24  32  40  48  56  64  72  80  88  96\n  9  18  27  36  45  54  63  72  81  90  99 108\n 10  20  30  40  50  60  70  80  90 100 110 120\n 11  22  33  44  55  66  77  88  99 110 121 132\n 12  24  36  48  60  72  84  96 108 120 132 144\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f12",
  "title": "Spiral Number Matrix",
  "category": "Patterns",
  "difficulty": "Hard",
  "description": "<p>Fill an <code>n x n</code> grid with the numbers <code>1</code> to <code>n*n</code> in a clockwise spiral: start at the top-left corner, move right along the top row, then down the right column, then left along the bottom row, then up, and keep spiraling inward. Print the grid with every value right-aligned to width <code>w</code>, where <code>w</code> is the number of digits in <code>n * n</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 15).</p><h4>Output</h4><p>Print <code>n</code> lines. Each value is padded on the left with spaces to width <code>w</code>, and consecutive values are separated by exactly one space. No trailing spaces (a line may begin with spaces because of the padding).</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre> 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7</pre>",
  "solution": "n = int(input())\ng = [[0] * n for _ in range(n)]\ntop, bot, left, right = 0, n - 1, 0, n - 1\nk = 1\nwhile top <= bot and left <= right:\n    for j in range(left, right + 1):\n        g[top][j] = k; k += 1\n    top += 1\n    for i in range(top, bot + 1):\n        g[i][right] = k; k += 1\n    right -= 1\n    if top <= bot:\n        for j in range(right, left - 1, -1):\n            g[bot][j] = k; k += 1\n        bot -= 1\n    if left <= right:\n        for i in range(bot, top - 1, -1):\n            g[i][left] = k; k += 1\n        left += 1\nw = len(str(n * n))\nfor row in g:\n    print(\" \".join(str(v).rjust(w) for v in row))\n",
  "tests": [
   {
    "input": "4\n",
    "output": " 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1 2 3\n8 9 4\n7 6 5\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1 2\n4 3\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": " 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": " 1  2  3  4  5  6  7\n24 25 26 27 28 29  8\n23 40 41 42 43 30  9\n22 39 48 49 44 31 10\n21 38 47 46 45 32 11\n20 37 36 35 34 33 12\n19 18 17 16 15 14 13\n",
    "hidden": true
   },
   {
    "input": "10\n",
    "output": "  1   2   3   4   5   6   7   8   9  10\n 36  37  38  39  40  41  42  43  44  11\n 35  64  65  66  67  68  69  70  45  12\n 34  63  84  85  86  87  88  71  46  13\n 33  62  83  96  97  98  89  72  47  14\n 32  61  82  95 100  99  90  73  48  15\n 31  60  81  94  93  92  91  74  49  16\n 30  59  80  79  78  77  76  75  50  17\n 29  58  57  56  55  54  53  52  51  18\n 28  27  26  25  24  23  22  21  20  19\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f13",
  "title": "Snake Number Grid",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Fill an <code>n x n</code> grid with the numbers <code>1</code> to <code>n*n</code> in a zigzag (snake) order: the first row goes left to right, the second row continues right to left, the third row left to right again, and so on. Print the grid with every value right-aligned to width <code>w</code>, where <code>w</code> is the number of digits in <code>n * n</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Each value is padded on the left with spaces to width <code>w</code>, and consecutive values are separated by exactly one space. No trailing spaces (a line may begin with spaces because of the padding).</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre> 1  2  3  4\n 8  7  6  5\n 9 10 11 12\n16 15 14 13</pre>",
  "solution": "n = int(input())\nw = len(str(n * n))\nfor i in range(n):\n    row = list(range(i * n + 1, i * n + n + 1))\n    if i % 2 == 1:\n        row.reverse()\n    print(\" \".join(str(v).rjust(w) for v in row))\n",
  "tests": [
   {
    "input": "4\n",
    "output": " 1  2  3  4\n 8  7  6  5\n 9 10 11 12\n16 15 14 13\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1 2 3\n6 5 4\n7 8 9\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1 2\n4 3\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": " 1  2  3  4  5\n10  9  8  7  6\n11 12 13 14 15\n20 19 18 17 16\n21 22 23 24 25\n",
    "hidden": true
   },
   {
    "input": "8\n",
    "output": " 1  2  3  4  5  6  7  8\n16 15 14 13 12 11 10  9\n17 18 19 20 21 22 23 24\n32 31 30 29 28 27 26 25\n33 34 35 36 37 38 39 40\n48 47 46 45 44 43 42 41\n49 50 51 52 53 54 55 56\n64 63 62 61 60 59 58 57\n",
    "hidden": true
   },
   {
    "input": "11\n",
    "output": "  1   2   3   4   5   6   7   8   9  10  11\n 22  21  20  19  18  17  16  15  14  13  12\n 23  24  25  26  27  28  29  30  31  32  33\n 44  43  42  41  40  39  38  37  36  35  34\n 45  46  47  48  49  50  51  52  53  54  55\n 66  65  64  63  62  61  60  59  58  57  56\n 67  68  69  70  71  72  73  74  75  76  77\n 88  87  86  85  84  83  82  81  80  79  78\n 89  90  91  92  93  94  95  96  97  98  99\n110 109 108 107 106 105 104 103 102 101 100\n111 112 113 114 115 116 117 118 119 120 121\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f14",
  "title": "Continuous Alphabet Triangle",
  "category": "Patterns",
  "difficulty": "Medium",
  "description": "<p>Print a right triangle of <code>n</code> rows where row <code>i</code> contains <code>i</code> uppercase letters. The letters continue from row to row in alphabetical order (<code>A</code> / <code>B C</code> / <code>D E F</code> / ...). After <code>Z</code>, wrap around back to <code>A</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 20).</p><h4>Output</h4><p>Print <code>n</code> lines. Letters on a line are separated by exactly one space. No leading or trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>A\nB C\nD E F\nG H I J</pre>",
  "solution": "n = int(input())\nk = 0\nfor i in range(1, n + 1):\n    row = []\n    for _ in range(i):\n        row.append(chr(65 + k % 26))\n        k += 1\n    print(\" \".join(row))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "A\nB C\nD E F\nG H I J\n",
    "hidden": false
   },
   {
    "input": "7\n",
    "output": "A\nB C\nD E F\nG H I J\nK L M N O\nP Q R S T U\nV W X Y Z A B\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "A\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "A\nB C\n",
    "hidden": true
   },
   {
    "input": "6\n",
    "output": "A\nB C\nD E F\nG H I J\nK L M N O\nP Q R S T U\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "A\nB C\nD E F\nG H I J\nK L M N O\nP Q R S T U\nV W X Y Z A B\nC D E F G H I J\nK L M N O P Q R S\n",
    "hidden": true
   },
   {
    "input": "15\n",
    "output": "A\nB C\nD E F\nG H I J\nK L M N O\nP Q R S T U\nV W X Y Z A B\nC D E F G H I J\nK L M N O P Q R S\nT U V W X Y Z A B C\nD E F G H I J K L M N\nO P Q R S T U V W X Y Z\nA B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z A\nB C D E F G H I J K L M N O P\n",
    "hidden": true
   }
  ]
 },
 {
  "id": "f15",
  "title": "Number Hourglass",
  "category": "Patterns",
  "difficulty": "Hard",
  "description": "<p>Print an hourglass of numbers with <code>2n - 1</code> rows. The top row is <code>1 2 ... n</code>; each following row drops the largest number and is indented one more space, down to the middle row containing only <code>1</code>; then the rows grow back to <code>1 2 ... n</code>.</p><h4>Input</h4><p>A single integer <code>n</code> (1 &le; n &le; 9).</p><h4>Output</h4><p>Print <code>2n - 1</code> lines. A row with numbers <code>1</code> to <code>k</code> starts with exactly <code>n - k</code> leading spaces, and its numbers are separated by exactly one space. No trailing spaces.</p><h4>Example</h4><p>Input:</p><pre>4</pre><p>Output:</p><pre>1 2 3 4\n 1 2 3\n  1 2\n   1\n  1 2\n 1 2 3\n1 2 3 4</pre>",
  "solution": "n = int(input())\nks = list(range(n, 0, -1)) + list(range(2, n + 1))\nfor k in ks:\n    print(\" \" * (n - k) + \" \".join(str(j) for j in range(1, k + 1)))\n",
  "tests": [
   {
    "input": "4\n",
    "output": "1 2 3 4\n 1 2 3\n  1 2\n   1\n  1 2\n 1 2 3\n1 2 3 4\n",
    "hidden": false
   },
   {
    "input": "3\n",
    "output": "1 2 3\n 1 2\n  1\n 1 2\n1 2 3\n",
    "hidden": false
   },
   {
    "input": "1\n",
    "output": "1\n",
    "hidden": true
   },
   {
    "input": "2\n",
    "output": "1 2\n 1\n1 2\n",
    "hidden": true
   },
   {
    "input": "5\n",
    "output": "1 2 3 4 5\n 1 2 3 4\n  1 2 3\n   1 2\n    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5\n",
    "hidden": true
   },
   {
    "input": "7\n",
    "output": "1 2 3 4 5 6 7\n 1 2 3 4 5 6\n  1 2 3 4 5\n   1 2 3 4\n    1 2 3\n     1 2\n      1\n     1 2\n    1 2 3\n   1 2 3 4\n  1 2 3 4 5\n 1 2 3 4 5 6\n1 2 3 4 5 6 7\n",
    "hidden": true
   },
   {
    "input": "9\n",
    "output": "1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7 8\n  1 2 3 4 5 6 7\n   1 2 3 4 5 6\n    1 2 3 4 5\n     1 2 3 4\n      1 2 3\n       1 2\n        1\n       1 2\n      1 2 3\n     1 2 3 4\n    1 2 3 4 5\n   1 2 3 4 5 6\n  1 2 3 4 5 6 7\n 1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7 8 9\n",
    "hidden": true
   }
  ]
 }
];
