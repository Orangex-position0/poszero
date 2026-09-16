# PosZero Routing

Use these routes for PosZero suite work.

| User intent | Skill |
| --- | --- |
| Diagnose current `.sdd/` state or ask what to do next | `ask-poszero` |
| Initialize or repair `.sdd/` and Constitution | `poszero-init` |
| Write or revise feature requirements | `poszero-specify` |
| Design implementation from an approved Spec | `poszero-plan` |
| Break an approved Plan into executable tasks | `poszero-tasks` |
| Implement one Ready task | `poszero-implement` |
| Independently validate the approved Contract | `poszero-validate` |

All PosZero skills are user-invoked. Do not automatically invoke another PosZero skill from a PosZero skill. Recommend the next skill in the Handoff.

Stop at the current Gate, Blocked state, or required user decision. Missing upstream Contract returns to the matching upstream skill; downstream skills do not silently fill it in.
