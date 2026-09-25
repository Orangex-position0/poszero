---
name: ask-poszero
description: "Explain the PosZero workflow and recommend the next skill."
disable-model-invocation: true
---

# Ask PosZero

Explain the PosZero workflow or recommend the next user-invoked PosZero skill. Do not invoke another skill.

## Contract

- Preconditions: none; `.sdd/` may be missing or incomplete.
- Inputs: optional mode (`流程` / `状态`), user path/slug, readable `.sdd/`, installed version, and recommendation index if available.
- Branches: Overview, No Project, One Feature, Multiple Features, Blocked, Stale, Complete.
- Allowed mutations: none.
- Handoff: workflow overview, or selected scope, derived status, evidence, blockers, one primary next step, and up to two alternatives.

## Steps

1. Resolve the mode from the user's input.
   Complete when the user selected `流程` or `状态`; if no useful input is provided, explain both modes and ask the user to choose.
2. For `流程`, explain the Skill collection and recommended order without scanning `.sdd/`.
   Complete when the user can see `ask → init → specify → plan → tasks → implement → validate` and the purpose of each stage.
3. For `状态`, resolve the project root and scan candidate features using `references/protocol/core-protocol.md` and `references/protocol/status-protocol.md`.
   Complete when the target is unique; if multiple candidates exist, ask the user to choose.
4. For `状态`, check Constitution, template compatibility, and document consistency.
   Complete when missing files, conflicts, Stale inputs, and version issues have file evidence.
5. For `状态`, derive current status and Stale scope using `../../protocol/status-protocol.md`.
   Complete when every conclusion traces to document facts and uncertain impact is marked stale rather than guessed.
6. Give one primary Handoff and up to two alternatives.
   Complete when the next step is clear and no file changed.

## Decision Order

1. Missing `.sdd/` or Constitution: recommend `poszero-init`.
2. Missing or unapproved Spec: recommend `poszero-specify`.
3. Missing or unapproved Plan: recommend `poszero-plan`.
4. Missing or unapproved Tasks: recommend `poszero-tasks`.
5. Ready task exists: recommend `poszero-implement`.
6. All tasks done and validation missing, stale, failed, or incomplete: recommend `poszero-validate`.
7. Passed validation: report Complete.
