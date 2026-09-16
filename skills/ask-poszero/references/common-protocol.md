# PosZero Common Protocol

## Project Root

Resolve one root:

1. User-provided path.
2. Nearest ancestor containing `.sdd/`.
3. Current Git worktree root.
4. Current working directory.

Writing skills other than `poszero-init` stop when `.sdd/` is missing.

## Feature Slug

Use ASCII lowercase kebab-case: `[a-z0-9]+(?:-[a-z0-9]+)*`. Prefer two to six meaningful words. Confirm before creating a new feature directory. Existing same-name directories require confirmation that they are the same feature.

## Lifecycle

Documents use:

```text
Constitution
  -> Spec: Draft -> In Review -> Approved
  -> Plan: Draft -> In Review -> Approved
  -> Tasks document: Draft -> In Review -> Approved
  -> Task item: Pending -> In Progress -> Done / Blocked / Cancelled
  -> Validation: Not Run -> Incomplete / Failed / Passed
```

Approval must name the document and revision, receive a direct user approval, and write Status, Revision, Approved By, Approved At, and Approval Note. A skill cannot approve its own output.

## Inputs And Staleness

Downstream documents record input path plus revision, or SHA-256 fingerprint when revision is unavailable. Changed inputs are assessed for material impact; material changes make downstream output Stale.

## Stable IDs

`S-*`, `REQ-*`, `SC-*`, `DEC-*`, `TASK-*`, `VAL-*`, and `RUN-*` are scoped to one feature. Start at `001`, keep IDs stable, and do not reuse retired IDs.

## Constitution

Working skills read Approved Constitution and current-stage Normative References. Ordinary Markdown links are not recursive constraints. Missing, unreadable, or conflicting Normative References block the stage.

## Evidence

Gate, Evidence, Handoff, Contract, and Stale are shared vocabulary. Completion needs direct evidence; unknown or unrun checks are not PASS.
