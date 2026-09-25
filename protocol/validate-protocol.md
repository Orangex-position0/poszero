# Validate Protocol

- Lite uses target tests and a short result check; no independent validation run.
- Standard performs one batch Contract Check from the Execution Packet and evidence.
- Deep establishes a complete baseline, then reruns incrementally unless inputs or fingerprints make the baseline stale.
- Independently run the project-level required checks and contract checks appropriate to the Profile (for example, a full test suite when required); task-local test results from Implement are inputs, not substitutes. Record commands and evidence. Required checks not run or unavailable are BLOCKED, never PASS.
- Human Review focuses on FAIL, BLOCKED, manual evidence, and risk acceptance.
