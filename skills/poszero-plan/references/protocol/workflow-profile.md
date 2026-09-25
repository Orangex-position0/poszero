# Workflow Profile

A Feature has one persisted Workflow Profile. The profile is selected once, then reused by every downstream Skill.

## Required fields

```yaml
level: lite | standard | deep
reason: <evidence-based explanation>
hard_triggers: []
soft_factors: []
user_override: null
review_mode: none | consolidated | checkpointed
validation_mode: target-tests | batch-contract-check | independent
```

## Level rules

- `lite`: local, low-risk change with no new architecture, data model, or public contract.
- `standard`: cross-file change that needs explicit requirements, design, and test boundaries.
- `deep`: architecture, migration, security, public API, multiple subsystem, or high-failure-cost change.

## Hard triggers

Any of these selects `deep`: irreversible data change or migration; authentication, authorization, payment, or sensitive data; public API, SDK, or external contract change; production deployment, infrastructure, or compatibility migration.

## Soft factors

Consider changed module count, new dependencies, cross-service boundaries, weak test coverage, rollback cost, and unclear existing seams.

## Overrides

A user may upgrade or downgrade the level. Upgrades require recording the new evidence. Downgrades require explicit confirmation and a recorded reason. Any level change requires downstream impact review.

## Defaults

| Level | Review | Validation |
| --- | --- | --- |
| lite | none unless risk appears | target-tests |
| standard | consolidated before implementation | batch-contract-check |
| deep | checkpointed decisions plus implementation review | independent |
