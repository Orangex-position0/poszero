# Specify Protocol

- Use the selected project template for `spec.md` or the Lite `change-template.md`.
- Lite records Goal, Non-Goals, Scope, Acceptance Criteria, Verification, Result, and Handoff.
- Standard records product context, observable boundaries, and inherited constraints; functional batches and vertical slices belong in Plan.
- Deep adds risk-driven contract detail, stable IDs, and requirement traceability; architecture, program design, and vertical slice order belong in Plan.
- Discuss problem and actors before goals, in-scope boundaries, and non-goals, then acceptance. Reuse established facts without repeating questions; surface only unresolved decisions. Confirm the document revision directly with the user; generation is not approval.
- Discuss changed business boundaries, data semantics, and externally observable API contracts in Spec when relevant; resolve internal modules, data structures, and technical choices in Plan.
- Review the Review Packet, not every generated field.
- If a Lite Feature contains an existing `spec.md`, stop and report a contract conflict. Archive or explicitly migrate the old Spec before continuing; never leave both `spec.md` and `change.md` as active contracts.
