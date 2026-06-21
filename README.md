# GameDayRookie 🏀

**Turn a basketball nobody into a confident fan in 15 minutes.**

[**→ Open the app**](https://gameday-rookie.lovable.app) · [Discovery document](https://drive.google.com/file/d/1vTh1_xC6RHLfX49Ej9xczLWiHQ1sJBhJ/view?usp=sharing)

**Author:** Suruthe Jayachandran

---

## What it does

Three levels. Four cards each. One quiz. By the end Sam walks into a Knicks game knowing when to cheer, what just happened, and what to say out loud.

No sign up. No downloads. Works in a loud crowd on a phone with no headphones.

---

## Why I built it this way

I talked to real people before writing a single line of code.

What they told me killed my original idea completely.

People do not stay silent at games because they lack knowledge. They stay silent because **asking for help makes them feel more exposed than not knowing.** The product was never competing with Google. It was competing with smiling and nodding.

So I scrapped the education app and built a 15 minute confidence primer for the commute to the game. The exact window where motivation is highest and nothing useful exists.

---

## Product requirements

**Version:** 2.3 · **Status:** Shipped · **Platform:** Mobile web · **June 2026**

### Problem statement

> Sam is a city newbie who needs to understand basketball in the 15 minutes before a game, because she wants to feel included without feeling excluded. Right now nothing does this because she does not know where to search or where to begin. We will know we solved it when she completes the learn flow and returns within the hour for more.

### User persona

**Sam.** Relocated to a new city. Made friends. Going to her first Knicks game tonight with people who all know basketball. She has 15 minutes on the commute. She does not want to feel small.

| Constraint | Detail |
|---|---|
| Time | 15 minutes before tip off |
| Environment | Loud crowd, no headphones, phone only |
| Emotional state | Nervous about exclusion, not motivated by learning |
| Current solution | Smiling and nodding |

### What I shipped

| Feature | Purpose |
|---|---|
| Dark landing with court SVG | Communicates the product before a word is read |
| Level select, locked progression | Removes the paradox of choice. The product decides where Sam starts. |
| Learn cards with Watch for this callout | Bridges knowing a fact and feeling a moment in the game |
| Tell me more bottom sheet | Depth without breaking flow. One tap to open, one tap to close. |
| Quick check quiz | Confidence confirmation, not examination |
| Three progressive levels | Survive the game. Participate in it. Feel it. |

### Goals

- Get a complete beginner ready to participate socially in 15 minutes
- Work in a loud crowd on a phone with no headphones
- Create appetite for more so users return within the same session

### What I cut and why

| Cut | Reason |
|---|---|
| Live Sidekick real time feature | Sports data APIs cost hundreds per month. Pre game window solves the same need for free. |
| Multiple sports at launch | No validated content. Ship one thing that works before building the second. |
| User accounts | Friction before value kills conversion. Sam should be in the app in under 5 seconds. |
| Gamification and badges | Retention mechanics for products whose core loop is not compelling enough on its own. |
| Timer on learn cards | Creates pressure. The product should feel like a conversation not a countdown. |

### Success metrics

| Metric | Target |
|---|---|
| Completion rate | Above 70% |
| Return rate within 60 minutes | Above 30% |
| Time to complete Level 1 | Under 12 minutes median |
| Level 2 progression rate | Above 40% of Level 1 completers |

### User feedback

Collected from real users after shipping.

**What worked:** Court visual on landing. Simple language. Natural flow. Level 1 delivers just enough. One user said they felt more confident walking in.

**What needs work:** Some cards are too wordy. UI needs another pass on learn screens. One user said they did not know if they would reach for it again during the game. That last one is the next product problem to solve.

### Roadmap

| Phase | Trigger | What happens |
|---|---|---|
| Validate | Now | 20 real users, measure completion and return rate |
| Improve | Completion above 70% | Cut card word count, UI audit, halftime re engagement moment |
| Expand | Return rate above 30% | AI free text question box, American football content |
| Scale | Users asking for other sports | Spanish version, B2B channel, native app |

---

## Stack

React · Tailwind CSS · Vite · Lovable

---

[**Read the full discovery document**](https://drive.google.com/file/d/1vTh1_xC6RHLfX49Ej9xczLWiHQ1sJBhJ/view?usp=sharing) — How I started with one product, talked to real people, and ended up building something completely different.
