---
name: filesystem-audit
description: Use when the user asks to audit, review, or check organization of their home directory, files, folders, clutter, duplicates, stale files, naming, or disk usage on macOS
---

# Filesystem Audit

## Overview

Actively scan `~/` and key subdirectories to surface organization problems in a structured report. Each audit is **scoped to one category** — do not mix categories unless the user asks for a full audit.

## Audit Categories

Ask the user which category if not specified. Run only that one.

| Category | Trigger phrase |
|---|---|
| **clutter** | loose files, messy home, too much stuff |
| **naming** | bad names, confusing folders, inconsistent |
| **duplicates** | duplicate files, copies, " 2" files |
| **depth** | nested too deep, buried folders |
| **stale** | old files, haven't touched in years |

For a full audit, run all five and combine the reports.

## Scan Scope

Always include these locations:
- `~/` root (visible + hidden dirs via `ls -la ~/`)
- `~/Desktop`, `~/Downloads`, `~/Documents`
- `~/Library/Mobile Documents/com~apple~CloudDocs/` (iCloud Drive — skip macOS-managed symlinks like Desktop/Documents, flag everything else loose at root)
- All directories at `~/` root (not just standard macOS folders)

## Category Rules

### Clutter
- Flag: files loose at `~/` root (not hidden dotfiles, not standard macOS dirs)
- Flag: `~/Downloads/` files older than 30 days
- Flag: `~/Desktop/` files that are not shortcuts (screenshots, docs, zips)
- Flag: empty or near-empty hidden directories from AI tools/editors (e.g. a dir containing only an empty `skills/` subfolder counts as abandoned clutter)
- Flag: `node_modules/` in projects not actively developed

### Naming
- Flag: folder names that are editor/tool names but contain unrelated projects (e.g. `VSC/`, `GitHub/`)
- Flag: vague names: `stuff`, `temp`, `new`, `misc`, `test`, `old`, `untitled`
- Flag: machine-generated names (e.g. `testnumberzero`, `project1`)
- Flag: mixed conventions in the same folder (camelCase next to snake_case)
- Flag: nested folders that share the same name (`GitHub/GitHub(2)/`)

### Duplicates
- Flag: files with ` 2`, `(2)`, ` copy`, `_copy` suffix patterns
- Flag: two folders with singular/plural variants (`Resume/` and `Resumes/`)
- Flag: same filename appearing in 2+ locations under `~/Documents`
- Note: do not delete — report both paths and let the user decide

### Depth
- Flag: any path with 5+ levels of nesting below `~/`
- Flag: folders containing only a single file
- Flag: folders containing only a single subfolder (unnecessary wrapping)

### Stale
- Use `find ~/Documents -not -path "*/\.*" -atime +365` to find files not accessed in 1+ year
- Flag: project directories with no git activity and no recent file modification
- Flag: installer `.dmg` / `.pkg` files anywhere (they're always stale after install)

## Security — Always Check

Regardless of category, if you encounter any of the following during a scan, **always flag it** as a security note:
- `.csv`, `.txt`, `.pdf` files with names like `passwords`, `codes`, `backup-codes`, `recovery-key` in unencrypted locations
- `.env` files outside of project directories

## Report Format

```
## [Category] Audit — ~/
**Issues found: N**

### Critical
- `~/path/to/file` — reason

### Suggestions
- Move `X` → `~/Code/` (consolidate projects at root)
- Rename `VSC/` → `Dev/` (name reflects content)
- Delete `~/Downloads/BraveBrowserInstaller.dmg` (installer, 8 days old, 250 MB)
- Archive or delete `~/Documents/OldProject/` (not accessed in 2 years)

### Security Note (if applicable)
- `~/Documents/Example/passwords.csv` — plaintext credentials in unencrypted folder
```

## Common Mistakes

| Mistake | Fix |
|---|---|
| Running all categories at once when user asked for one | Stick to the requested scope |
| Flagging `~/Library/` internals | Skip unless user specifically asks |
| Recommending deletion of ` 2` files without checking if originals exist | Always report both and let user decide |
| Missing iCloud Drive | Always include `~/Library/Mobile Documents/` in scan |
| Flagging hidden dotfiles at `~/` root as clutter | Only flag empty or abandoned ones |
