# Famous Last Words at 1 Percent

[![Bounty](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Samot72/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4-entry/rank.svg)](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Samot72/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4-entry/reward.svg)](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

Entry for the make.fun competition
[Famous Last Words at 1 Percent](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
— the funniest possible last words a phone would say when its battery hits 1 percent.

## The line

> Tell my charger I loved it, delete my search history, and pretend I died doing something cooler than scrolling in bed.

**118 code points** (gate: 1–199, single line, UTF-8, non-blank).

## How it works

`main.ts` (dependency-free, Node 22) holds the line as a constant, validates the
gate — single line, non-empty, 1–199 code points — writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file back
to prove the round trip.

## Verify locally

```sh
node main.ts
cat /output/entry.txt   # or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts && cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
