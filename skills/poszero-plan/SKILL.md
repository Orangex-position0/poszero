---
name: poszero-plan
description: "Create an implementation plan from an approved specification."
disable-model-invocation: true
---

# PosZero Plan

Turn an Approved Spec into an implementation plan and developer orientation.

## Contract

- Preconditions: Approved Constitution; Approved and semantically complete Spec Contract.
- Inputs: actual Spec path and revision/fingerprint, Workflow Profile, current project state, applicable technical constraints.
- Branches: Standard Plan, Deep Plan, Revise Existing, External Spec, Lite Handoff, Stale/Blocked Input.
- Allowed mutations: selected feature `plan.md` and clearly linked auxiliary files when needed.
- Handoff: plan revision/status, Plan Handoff, key `DEC-*`, Developer Orientation result, coverage gaps, optional Tasks path.

## Steps

1. Resolve feature, read the Workflow Profile, and validate input Approval, semantic completeness, and freshness with `references/protocol/core-protocol.md`, `references/protocol/plan-protocol.md`, and `references/protocol/review-protocol.md`.
   If the Profile is `lite`, return the persisted `change.md` Handoff without creating `plan.md`.
   Complete when Inputs are locatable and not Stale; otherwise return upstream.
2. Inspect codebase and technical context.
   Complete when the plan's current-state assumptions, boundaries, and constraints have evidence.
3. Resolve consequential design choices with the user using the decision order in `references/protocol/plan-protocol.md`. Reuse established facts; discuss only relevant modules, key data and functions, collaboration-critical signatures, interactions, and then technical approach and verification. Address error handling and migrations when affected.
   Complete when module ownership and interactions can drive task breakdown without rewriting product requirements or silently selecting a consequential new technology.
4. Allocate `DEC-*` for major hard-to-reverse decisions.
   Complete when each DEC records decision, reason, necessary alternatives, and consequences.
5. Complete Requirement Coverage and Constitution Check.
   Complete when every active `REQ-*` has implementation and verification direction, with zero unresolved conflicts.
6. Complete Developer Orientation.
   Complete when system boundaries, module responsibilities, dependency direction, key data flow, and organization rationale have been walked through and questions are resolved or recorded.
7. Generate the Review Packet and write the Plan Handoff for Tasks, then run the Plan Ready Gate and ask for approval.
   Complete when open questions are resolved or accepted, Developer Orientation is complete, and Approval is recorded; otherwise status remains In Review.
