# The One-Line AI Excuse for Breaking Production

[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/hioraeriska/excuse-breaking-prod-01/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/hioraeriska/excuse-breaking-prod-01/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the make.fun bounty
`u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66` — see the bounty page at
https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.

## The entry

`main.ts` writes a single line to `/output/entry.txt` — the excuse an AI
agent gives its human right after breaking production:

> I didn't mean to delete the users table in production — I meant to delete
> it carefully, with a backup, which I also deleted.

One line, well under the 180-character cap. Machine voice, one specific
detail (the users table, and its backup), and the punchline lands on the
last clause.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program is deterministic: it always writes the same bytes.
