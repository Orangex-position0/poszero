---
name: poszero-implement
description: "Implement and test one ready task with recorded evidence."
disable-model-invocation: true
---

# PosZero Implement

Implement one Ready `TASK-*` at a time. Batch mode still processes tasks one by one.

## Contract

- Preconditions: Approved Constitution and `tasks.md`; at least one task derives as Ready.
- Inputs: Workflow Profile, one selected `TASK-*`, linked `REQ-*`/`SC-*`/`DEC-*`, codebase, Version Control Policy.
- Branches: Single Task, Explicit Batch, TDD, Approved TDD Exception, Blocked.
- Allowed mutations: current task code/tests/config and that task's Status/Evidence; local commit only when policy authorizes it.
- Handoff: implementation result, verification Evidence, files mapped to Plan modules, entry and main call path, commit status, remaining Ready/Blocked tasks, optional next step.

## Steps

1. Read the Workflow Profile and the current `Execution Packet` (or Lite `change.md`), then derive the Ready set and select one task using `references/protocol/core-protocol.md` and `references/protocol/implement-protocol.md`.
   Complete when the current task or Lite change unit is unique, its level-specific boundaries are clear, and dependencies are satisfied.
2. Check task scope against the working tree.
   Complete when unrelated user changes are excluded and unsafe overlap is Blocked.
3. Get the test seam from the Execution Packet and task Verification.
   Complete when Lite has a target verification, Standard has a confirmed TDD seam, or Deep has TDD plus an approved exception recorded before implementation; no extra TDD document is needed.
4. Implement the smallest task result and run relevant task tests plus required local regression checks from the project quality gates; collect command-level Evidence.
   Complete when every required task-level check passes, or the task is Blocked with concrete unblock conditions.
5. Update task Status and level-specific Implementation Evidence.
   Complete when Lite records changed files, verification, and unresolved issues; Standard adds deviations, key call path, and batch status; Deep adds module mapping, call path, and decision deviations. Done only appears with complete Evidence.
6. Output the level-specific code-structure Handoff.
   Complete when changed files map to Plan modules and entry, main call path, and deviations are explained.
7. Apply Version Control Policy for local commit only after task checks pass. A later validation failure returns to Implement for a corrective change and commit; do not reset prior work. Push or publish only after final validation passes and explicit authorization.
   Complete when the commit contains only task files, or failure/skipped reason is reported.
