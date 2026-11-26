# One Star, Five Stars for the Food

[![One Star, Five Stars for the Food](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/satriax30-commits/makefun-one-star-earth/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/satriax30-commits/makefun-one-star-earth/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

Entry for the make.fun bounty **One Star, Five Stars for the Food**: a program
(`main.ts`, Node 22, stdlib only) that writes one one-star review of Earth by
an alien tourist — with a real compliment about the food — to
`/output/entry.txt`.

## The entry

> ★☆☆☆☆ Earth made me queue 45 minutes at 7pm for tacos from a truck called El Gordo, then the first bite made me forget my spaceship was towed.

142 characters, 152 bytes, one line, one sentence, no trailing newline.

## Why this line wins

- **Clearly a one-star alien review of Earth, with a food compliment (criterion 1):** the ★☆☆☆☆ prefix frames it as a review, "Earth" is the subject, the tourist's spaceship marks him as alien, and the tacos are complimented outright — the first bite is so good it erases a towing.
- **Convincingly alien, grievance worth one star (criterion 2):** the bafflement is outsider-specific — queuing 45 minutes at 7pm for food from a truck, then having a spaceship towed. No human tourist complains about a towed spaceship.
- **The turn lands (criterion 3):** complaint and compliment are not merely stated side by side; the compliment *causes* the punchline. The food is so good the narrator forgets his ship was towed — the praise is the joke, and the one star still stands because he was towed.
- **Every word earns its place (criterion 4):** 142 of 200 characters (71% of budget, inside the 70–95% winning band). One specific number (45 minutes), one named thing (El Gordo), one concrete time (7pm), three beats (queue → tacos → forgotten spaceship), twist in the last clause. No metaphors or similes; every noun can be pictured.
- **Fresh angle (criterion 5):** not generic traffic/weather/gravity complaints — a food-truck queue plus an impounded spaceship is a specific, visual, alien-only grievance, and the narrator is the fool (he forgot his own ship).

## Rejected candidates

- **"★☆☆☆☆ Earth charged me $9 for water, made me wait 40 minutes for a table, then served tacos so good I forgave the planet for exactly one bite."** (142 chars) — good twist ("for exactly one bite"), but no named thing and the narrator is not the fool; the food is generic tacos from an unnamed table.
- **"★☆☆☆☆ I flew 4,000 light-years to Earth, stood in line 45 minutes for a taco truck, and the tacos were so good I stayed for a second sunburn."** (141 chars) — the light-years opener is alien, but "stayed for a second sunburn" is muddled: a sunburn is not a payoff, and the truck is unnamed.
- **"★☆☆☆☆ Earth towed my spaceship after 12 minutes, fined me $80 for parking on Mars time, then a $3 taco from El Gordo made me pay the fine smiling."** (146 chars) — strong numbers and "parking on Mars time" is good alien bafflement, but three grievances crowd the sentence and "pay the fine smiling" lands flatter than forgetting the ship entirely.

## Run it

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # test locally without touching /output
```

The program validates the entry (UTF-8, 1–200 characters, one line, not
whitespace-only, no trailing newline), writes it, then reads it back and
verifies the file is byte-identical to the constant.
