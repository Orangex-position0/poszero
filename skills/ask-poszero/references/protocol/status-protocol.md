# Status and Staleness Protocol

Derive workflow status from document facts. Persist user decisions, not duplicate derived state.

## Decision order

1. Missing `.sdd/` or Constitution → `poszero-init`.
2. Missing or unapproved Spec / Lite Change → `poszero-specify`.
3. Standard / Deep Spec approved but Plan missing or stale → `poszero-plan`.
4. Plan approved but Tasks missing or stale → `poszero-tasks`.
5. Ready task exists → `poszero-implement`.
6. All implementation work is done and validation is missing, stale, failed, or incomplete → `poszero-validate`.
7. Validation passed → Complete.

## Stale propagation

- A material Spec change invalidates only linked Plan sections, batches, Tasks, and Validation items.
- A material Plan change invalidates linked Tasks and Validation items.
- A material Task change invalidates its Evidence and linked Validation items.
- Lite uses a single change unit; any material change invalidates its Result and Verification.
- If impact cannot be determined, mark the downstream scope stale and request a full review rather than silently continuing.
