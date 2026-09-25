---
name: poszero-specify
description: "Create or revise an approvable feature specification."
disable-model-invocation: true
---

# PosZero Specify

Create or revise a Lite `change.md` or a Standard / Deep `spec.md` under `.sdd/<feature-slug>/`.

## Contract

- Preconditions: Approved Constitution; user provides a problem or existing requirement input.
- Inputs: Constitution constraints, user goals, existing or external requirement material.
- Branches: Lite Change, New Spec, Revise Existing, Import External Input, Blocked Upstream.
- Allowed mutations: selected feature `change.md` or `spec.md`; a new feature directory only after slug confirmation.
- Handoff: Workflow Profile, change or spec revision/status, depth, Review Packet, unresolved questions, optional Plan path.

## Steps

1. Resolve project and feature, then read applicable constraints using `references/protocol/core-protocol.md`, workflow rules using `references/protocol/workflow-profile.md`, risk rules using `references/protocol/risk-classification.md`, `references/protocol/specify-protocol.md`, and `references/protocol/review-protocol.md`, and spec structure rules using `references/spec-authoring.md`.
   Complete when root, feature, and requirement input are unique and valid.
2. Select or read the Feature Workflow Profile using the risk-classification procedure.
   Complete when hard triggers and soft factors are recorded, the level is recommended, review and validation modes are derived, and the result is persisted in `change.md` for Lite or `spec.md` for Standard / Deep; a hard-trigger downgrade has explicit user confirmation.
3. If the Profile is `lite`, check for an existing `spec.md` in the Feature directory before creating or revising the minimal `change.md`.
   Complete when any old Spec is archived or explicitly migrated after user confirmation, no conflicting active Spec remains, and Goal, Non-Goals, Scope, Acceptance Criteria, Verification, Result, and Handoff are present; skip the full Spec steps and proceed to Implement when ready.
4. For Standard / Deep, use the selected Profile level as the Spec depth; record its evidence once rather than reclassifying risk.
   Complete when depth matches the Profile and any user-requested downgrade has an explicit decision.
5. Resolve the product contract in dependency order: problem and actor → goals, in-scope boundaries, and non-goals → observable acceptance; use existing evidence without re-asking settled facts. Discuss changed business boundaries, data meaning, and externally observable contracts when relevant. Record requirements, edge cases, inherited constraints, assumptions, and unresolved decisions in the selected-language template.
   Complete when acceptance is verifiable, no missing decision is silently assumed, and implementation design is left for Plan.
6. Link requirements to acceptance and scenarios at the depth required by the Profile; leave batch boundaries, slice order, and architecture to Plan.
   Complete when the handoff identifies the contract scope without prescribing implementation work.
7. Present the Review Packet and Readiness Check for Standard / Deep, then request direct approval of this document revision.
   Complete when decision-relevant items are resolved or explicitly accepted and Approval is recorded; otherwise status remains In Review.

## Gate

- Keep the SDD lifecycle intact; do not replace it with a new workflow.
- Do not add a separate pre-implementation review stage by default; use the spec Readiness Check.
- Move implementation detail to Plan unless it is required to make the spec executable.
- Do not split one slice into one spec by default; use child slice specs only for deep work where splitting lowers coordination risk.
