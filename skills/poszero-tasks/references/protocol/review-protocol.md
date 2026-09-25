# Review Protocol

Review the contract, not every generated line.

## Review Packet fields

- changed decisions and requirements;
- required human review items;
- risk and likely consequence;
- unresolved questions;
- automated checks and evidence;
- deferred content that does not need line-by-line review.

## Review scope by level

- `lite`: no default review; pause only when a risk trigger appears.
- `standard`: one consolidated review before implementation.
- `deep`: review irreversible decisions during Spec / Plan, then perform a consolidated review before implementation.

Persist human decisions, risk acceptance, and exceptions in the owning document. Do not create a standalone Review Packet file.
