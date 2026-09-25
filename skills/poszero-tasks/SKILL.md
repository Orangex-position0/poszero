---
name: poszero-tasks
description: "Break an approved plan into executable tasks."
disable-model-invocation: true
---

# PosZero Tasks

Create or revise the executable task set for one feature.

## Contract

- Preconditions: Approved Constitution, Spec, and Plan; inputs are not Stale.
- Inputs: Workflow Profile, `REQ-*`, `SC-*`, `DEC-*`, Plan testing strategy, project execution constraints.
- Branches: Standard Task Set, Deep Task Set, Revise Task Set, Lite Handoff, External Plan, Coverage Blocked.
- Allowed mutations: selected feature `tasks.md`.
- Handoff: tasks document status, Execution Packet, Ready set, dependency or coverage blockers, optional Implement path.

## Steps

1. Read the Workflow Profile and validate inputs with `references/protocol/core-protocol.md`, `references/protocol/tasks-protocol.md`, and `references/protocol/review-protocol.md`.
   If the Profile is `lite`, return the `change.md` execution scope without creating `tasks.md`.
   For Standard, build a functional-batch map; for Deep, build or read the Imported Requirement Map.
   Complete when all requirements use stable local IDs and sources are locatable.
2. Split minimal vertical tasks by independently verifiable outcomes.
   Complete when every task includes Outcome, Scope, and Verification, not just file or layer work.
3. Allocate `TASK-*`, Covers, and Depends On.
   Complete when active `REQ-*`/`SC-*` are covered, the dependency graph has no cycle, and no required task is orphaned.
4. Set new tasks to Pending and run the Tasks Ready Gate.
   Complete when every task boundary, dependency, and completion Evidence is checkable.
5. Present execution scope, dependencies, and checks for review via the Review Packet and Execution Packet; then set `tasks.md` to In Review and ask for approval.
   Complete when user approval makes the document Approved; otherwise no executable Ready task is produced.

## Ready

Ready is derived, not persisted: a Pending task is Ready only when dependencies are Done or approved Cancelled, upstream Contracts are Approved and not Stale, and no blocker remains.
