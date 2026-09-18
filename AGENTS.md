# AGENTS.md

This file guides coding agents working on PosZero.

## Project Overview

PosZero is a user-invoked SDD skill suite. It stores shared workflow protocol, skill source, distribution metadata, and validation scripts in this directory.

## Source Of Truth

- `protocol/` is the maintained source for shared PosZero protocol.
- `skills/` is the maintained source for all PosZero skills.
- `skills/poszero-init/references/templates/` is the maintained source for `.sdd/` bootstrap templates.
- `rules/` stores suite-level agent rules that apply across skills.
- `packaging.allowlist` is the default-deny distribution boundary.
- `VERSION` is the suite version.
- `TEMPLATE_VERSION` is the `.sdd/templates/` contract version.

The outer `../skills/poszero-*` and `../skills/ask-poszero` directories are mirrors for the parent `ai-config` installer. Do not edit only the mirrors.


## Repository Layers

- Agent runtime install surface: `skills/`.
- Skill runtime assets stay inside the owning skill directory.
- Repository infrastructure: `protocol/`, `rules/`, `scripts/`, package metadata, release metadata, and verification config.
- Source package contents may include infrastructure files; do not treat that as permission to add root-level runtime assets.

## Editing Rules

- Change `poszero/skills/` first, then sync mirrored skill directories.
- Change `skills/poszero-init/references/templates/` first when updating bootstrap templates.
- Change `protocol/` before changing generated skill-local protocol references.
- Keep `AGENTS.md` as a maintenance guide; do not copy the full protocol into it.
- Raise `TEMPLATE_VERSION` when bootstrap template requirements change.
- Keep `package.json.files` within `packaging.allowlist`.
- Do not add empty scripts or placeholder packaging behavior.

## Verification

Run from `poszero/`:

```bash
npm run verify
```

The verifier checks required files, skill frontmatter, packaging allowlist coverage, and mirror consistency with the parent `skills/` directory.

## Skill Routing

Use `rules/poszero-routing.md` for suite-level routing. All skills are user-invoked; `ask-poszero` recommends the next skill and does not invoke another one.
