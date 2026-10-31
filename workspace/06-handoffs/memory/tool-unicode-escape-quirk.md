---
name: tool-unicode-escape-quirk
description: Write/Edit/Bash tool input turns a typed backslash-u hex escape into the raw character, breaking regex literals in source files
metadata:
  type: feedback
---

When writing source files through the tools, a backslash followed by `u` and four hex digits is converted to the real Unicode character before it reaches the file. Invisible characters (U+2028 line separator, zero-width, bidi) then end up raw inside regex literals and give "Unterminated regular expression" errors.

**Why:** hit twice in the Site1 template (`worker/validate.ts`); found by `grep -nP "[^\x00-\x7F]"`.

**How to apply:** build such escapes in a python snippet with `chr(92) + 'u' + hex`, or use `new RegExp(...)` strings composed that way; after writing, grep source files for non-ASCII bytes. Related: [[site1-local-business-stack]].
