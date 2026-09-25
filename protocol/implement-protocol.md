# Implement Protocol

- Read the Workflow Profile and current Execution Packet before source documents.
- Lite records changed files, target verification, and unresolved issues.
- Standard records targeted tests, deviations, key call path, and batch status.
- Deep records full Evidence, module mapping, call path, and decision deviations.
- Use TDD at the level required by the Profile; do not create a second TDD document.
- Before marking a task Done or committing it, run its relevant tests and required local regression checks from the project quality gates. Record command, result, and any unavailable check; unrun/failed required checks cannot pass the task gate. Do not hard-code a test runner by language.
- Local commits follow the approved Version Control Policy after the task gate; a failed independent validation returns to Implement for a corrective change and commit, not a reset. Push or publish only after final validation passes and explicit authorization.
