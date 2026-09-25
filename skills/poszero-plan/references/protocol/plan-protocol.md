# Plan Protocol

- Lite returns the `change.md` Handoff without creating `plan.md`.
- Standard records only modules, interfaces, data flow, testing seams, and implementation direction needed by Tasks.
- For relevant code-structure changes, resolve design in dependency order: affected boundaries → modules and responsibilities → key data models and functions owned by each → collaboration-critical inputs, outputs, and signatures → module calls and interactions. Confirm existing answers without re-asking; skip irrelevant details rather than enumerating every function.
- Deep records architecture boundaries, `DEC-*`, coverage, migrations, and Developer Orientation.
- Reference approved public API contracts from Spec; Plan assigns implementation ownership and internal interactions without redefining caller-visible semantics. Write a Plan Handoff for Tasks. Do not repeat the full Spec.
