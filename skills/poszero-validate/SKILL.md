---
name: poszero-validate
description: "Independently validate a feature against its approved contract."
disable-model-invocation: true
---

# PosZero Validate

Validate the approved Contract independently. Product code is read-only during this skill.

## Contract

- Preconditions: Approved Constitution and validation Contract; implementation result is readable.
- Inputs: Workflow Profile, Constitution, Spec, Plan, Tasks, implementation state, available Evidence.
- Branches: Lite Result Check, Standard Contract Check, Deep First Run, Deep Incremental Rerun, Correction Run, Manual Evidence Blocked, Stale Contract.
- Allowed mutations: selected feature `validation.md` and explicitly agreed raw logs; Standard may record a batch Contract Check in the feature document; product code stays read-only.
- Handoff: Current Result, complete `RUN-*`, Human Review path/status, FAIL/BLOCKED items and return stage.

## Steps

1. Read the Workflow Profile and select the level-specific validation path using `references/protocol/core-protocol.md` and `references/protocol/validate-protocol.md`.
   Lite performs a target-test result check and does not create an independent validation run; Standard performs one batch Contract Check; Deep performs independent validation.
2. For Standard, read the Execution Packet and test evidence first; for Deep, independently read the Contracts and check freshness.
   Complete when the validation baseline is unique; only conflicts, risk markers, or stale fingerprints require full source rereads.
3. Create or update the validation set required by the selected path.
   Complete when every active `REQ-*`/`SC-*`, key `DEC-*`, Non-Goal, and required manual item is covered.
4. Independently run the selected contract checks and required project-level test suite from the project's quality gates; task-local evidence alone does not replace this run.
   Complete when every required Contract item and check has PASS, FAIL, BLOCKED, or justified N/A backed by direct Evidence; unrun required checks remain BLOCKED.
5. Select and hand off risk-based Human Review paths.
   Complete when each path, reason, steps, and expected result is clear; missing user result remains BLOCKED; no qualifying path is recorded as justified N/A.
6. For Deep, append a new `RUN-*` containing the complete required set; for Standard, record the batch result without a full `RUN-*`.
   Complete when old RUNs are unchanged and AI/Human Evidence is locatable.
7. Derive Current Result and Handoff.
   Complete when PASS/FAIL/BLOCKED aggregation is strict, issues return to the correct stage, and product code was not modified.
