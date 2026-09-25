# PosZero Core Protocol

- Resolve one project root from the user path, nearest `.sdd/`, Git worktree, or current directory.
- Writing skills stop when `.sdd/` is missing, except `poszero-init`.
- Read approved Constitution and current-stage normative references before writing. Use `.sdd/README.md` Document Language and the matching project template; if a legacy project has no recorded language, route to Init to choose and persist it once, then reuse it unless the user requests a change. Changing language does not silently rewrite approved documents.
- Approval names the document and revision and must be a direct user decision; a skill cannot approve its own output.
- Downstream inputs record a revision or fingerprint. Material changes make dependent output Stale.
- Completion needs direct evidence; unknown or unrun checks are not PASS.
- User decisions, risk acceptance, and review conclusions are persisted. Derived status is computed from document facts.
