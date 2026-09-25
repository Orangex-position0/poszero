---
name: poszero-init
description: "Initialize or repair a project's .sdd/ foundation and Constitution."
disable-model-invocation: true
---

# PosZero Init

Initialize or repair the project's `.sdd/` contract. Work only in one resolved project root.

## Contract

- Preconditions: user allows checking the target project; before first creation, the resolved absolute project root is confirmed.
- Inputs: project rules and config, existing `.sdd/`, `references/templates/`, target template version.
- Branches: Fresh, Partial, Current, Compatible Upgrade, Major Migration.
- Allowed mutations: only project-root `.sdd/`, unless the user explicitly asks otherwise.
- Handoff: initialization result, Constitution status, template version, blockers, optional next stage.

## Steps

1. Resolve the project root using `references/common-protocol.md`, then show its absolute path. Use `references/templates/` and `references/template-authoring.md` when creating or repairing templates.
   Complete when the root is unique and first creation has user confirmation.
2. Run bounded discovery in this order: user-provided rules, root agent/project docs, manifests, CI/test config, architecture/security/deploy docs, then source entry points only when evidence is still missing.
   Complete when every proposed Constitution constraint has evidence or a user decision.
3. Check `.sdd/` completeness, template version, and document language. For a new project ask once for Chinese or English and record it in `.sdd/README.md`; for existing projects reuse the recorded choice, asking only if missing or conflicting. Select `references/templates/en/` or `references/templates/zh-CN/`.
   Complete when missing files, customizations, version differences, language, and conflicts are listed.
4. Draft the smallest Constitution and file-change proposal.
   Complete when long-lived constraints, Normative References, Effective Scope, and Version Control Policy are reviewable.
5. After approval, write only the approved changes. Copy the chosen directory's templates into the flat `.sdd/templates/` directory without changing filenames and replace `Document Language: en | zh-CN` with the selected single value in `.sdd/README.md`.
   Complete when customized files without approval are unchanged and target files satisfy their contracts.
6. Re-read the result and run the Init Gate.
   Complete when required files exist, Constitution is Approved, version records are accurate, and conflicts are reported.

## Hard Gates

- Do not create `.sdd/` before showing the resolved absolute path and receiving confirmation.
- Preserve existing customized files unless the user approves the exact replacement or merge.
- A generic best practice is not a Constitution constraint until it has project evidence or a user decision.
