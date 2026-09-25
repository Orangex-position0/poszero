# Workflow Risk Classification

Use this procedure once when a Feature has no persisted Workflow Profile.

## 1. Check hard triggers

Recommend `deep` immediately when the request affects any of:

- irreversible data changes or migrations;
- authentication, authorization, payments, or sensitive data;
- public APIs, SDKs, or external contracts;
- production deployment, infrastructure, or compatibility migration.

A hard trigger cannot be downgraded without explicit user confirmation and a recorded risk acceptance.

## 2. Assess soft factors

Record each applicable factor:

- number of modules or services changed;
- new dependency or runtime boundary;
- cross-service or cross-team contract;
- weak or missing test seam;
- high rollback or failure cost;
- unclear existing architecture or ownership.

## 3. Recommend a level

- `lite`: local, low-risk change; no hard trigger; no new architecture, data model, or public contract.
- `standard`: one or more soft factors, cross-file behavior, or a requirement that needs explicit design and test boundaries.
- `deep`: any hard trigger, multiple subsystem boundaries, or high failure cost.

## 4. Persist the decision

Write the level, evidence, hard triggers, soft factors, review mode, and validation mode to the Feature Workflow Profile. Ask for confirmation when a hard trigger is present or when the user requests a downgrade.
