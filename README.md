# GameDayRookie

**A basketball confidence app for complete beginners. Shipped to real users.**

[Live product](https://gameday-rookie.lovable.app) | [Discovery document](#) | [PRD](#)

---

## What this is

GameDayRookie is a mobile web app that gets a complete basketball beginner ready before a game in 15 minutes. Not ready to pass a test. Ready to participate, say something real out loud, and actually feel the moments that make everyone else in the room react.

It is built for Sam. Sam relocated to a new city, made friends, and is going to her first Knicks game tonight. She does not know basketball. She does not want to feel small in front of people whose opinion she cares about. She has 15 minutes on the way there.

The app gives her three levels of progressive content: survive the game, participate in it, then feel it. Each level has four cards, a quick check quiz, and a bottom sheet for anyone who wants to go deeper. The whole experience is designed to work in a loud crowd, on a phone, with no headphones, in under 15 minutes.

---

## Why I built this

I did not start by building this. I started by questioning whether it should exist at all.

My original idea was a sports education platform with lessons, a glossary, gamified missions and a progression system. A full product. Before writing a single line of code I ran a discovery process to validate whether that product deserved to exist.

It did not. At least not in that form.

Here is what changed my mind.

---

## The discovery process

### Where I started

I went in with five explicit assumptions written down before talking to anyone:

- Users are people new to a city, international students, or parents of young players
- Their pain is feeling left out and embarrassed
- The root cause is lack of basketball knowledge
- Current solutions fail because they are paid, slow, or require advance preparation
- The product should teach basketball through structured lessons

### What the research told me

I talked to real people and found three things nobody handed me:

**Finding one.** When someone feels confused during a game and wants to ask their friend, they do not ask. Because their friend is engrossed in the game. Asking makes them feel more exposed than staying silent. So they smile, nod, and say nothing. The product is not competing with Google or YouTube. It is competing with smiling and nodding.

**Finding two.** A friend who does not follow basketball described her entire game experience as managing the social performance of being there. Every unit of her attention went into appearing present rather than being present. She was exhausted by a sport she never watched.

**Finding three.** When two confused people find each other in the crowd, they create a private channel. They whisper to each other about how they do not understand anything. Not trying to learn. Just trying to survive together.

### What this changed

I started with: people need to learn basketball so they do not feel left out.

I ended with: people need to feel basketball so they can belong in the moment. The problem is not ignorance. It is dignity. People will not sacrifice their dignity to fix their ignorance, especially in a room full of people they care about.

That reframe changed everything about what the product needed to do.

### The insight that became the product

The sharpest moment in discovery came when I asked myself what success actually looks like for a user. Not completing a lesson. Not scoring 100 on a quiz. It is the moment Sam says something out loud about the game and it lands. "That's a 3-pointer." "The time is running out." Something small and real that makes her feel like she belongs in the room instead of sitting outside it.

That is the north star. Everything else is scaffolding.

### The assumption I killed

I almost built the live sidekick feature first. An AI that listens to the game in real time and pushes micro explanations as plays happen. I killed it for three reasons.

One, real time sports data APIs start at hundreds of dollars per month. Not a free product anymore.

Two, the retention model was broken. A product that teaches you basketball succeeds itself out of existence. Users graduate and leave. That is not a business.

Three, and most importantly, the research told me the problem is not during the game. It is the 15 minutes before the game when motivation is highest and nothing useful exists for that window.

---

## What I built

### The core loop

Landing page with dark theme and a basketball court SVG that communicates the product before a word is read. One tap to start. No sign up. No friction.

Level select where Sam picks her starting point honestly. Three levels locked in sequence so she is never overwhelmed by choice. The product decides where she starts.

Learn cards with four cards per level. Each card has a fact, a "Watch for this" callout that bridges knowing something and feeling something, and a bottom sheet for anyone who wants to go deeper without interrupting the main flow.

Quick check quiz framed as confidence confirmation not examination. Four questions. Warm feedback whether right or wrong. Progress dots not a score counter.

You are ready screen with a completion summary, a contextual message that changes per level, and a prompt to go deeper that uses time as the motivator not content volume.

### The three levels

**Level 1 — Survive.** The court, scoring, the clock, fouls. Enough to follow what is happening.

**Level 2 — Participate.** Players, possessions, timeouts, momentum runs. Enough to have an opinion.

**Level 3 — Feel it.** Clutch moments, fouling out, comebacks, your moment. Enough to be invested.

### The design decisions I made deliberately

No timer visible during the learn flow. Showing minutes remaining creates pressure. Sam is already nervous. The product should feel like a conversation not a test.

Dark landing page, white learn screens. The contrast is intentional. It feels like walking from outside into somewhere bright and ready.

One primary action per screen. No decision fatigue. The product moves Sam forward at every step.

The "Tell me more" button opens a bottom sheet not a new screen. She never loses her place. She can close it with one tap and keep moving.

No hyphens as sentence connectors in any content. The voice is a knowledgeable friend, not a textbook. Friends do not speak in em dashes.

---

## The PM decisions that did not make the cut

**Multiple sports at launch.** Cut because I had no validated content for any sport other than basketball, and no evidence that users wanted other sports before they had finished with this one. Ship one thing that works before building the second thing.

**The optional quiz.** Cut because optional means I had not decided what the quiz was for. Every element needs a job. The quiz's job is confidence confirmation. Making it optional made it purposeless.

**"Tonight" in the headline.** Changed to "coming up" because not every game is at night. Copy that excludes users by time of day is bad copy.

**XP, badges and a progression system.** Cut entirely. Gamification is a retention mechanic for products whose core loop is not compelling enough on its own. If the content is good the user comes back. If it is not good, badges will not save it.

---

## Success metrics

**North star:** She completes the learn flow and returns within the hour for more.

**Primary metric:** Completion rate above 70%. If more than 3 in 10 people drop out before finishing Level 1 the content or the flow is broken.

**Secondary metric:** Return rate within 60 minutes. If she comes back during the game it means the product worked in the real world not just in the app.

**Leading indicator:** Bottom sheet open rate. If users are tapping "Tell me more" the content is earning curiosity. If nobody taps it the content is either complete or not interesting enough to go deeper.

---

## What I would do next

**Immediate.** Put 10 real users through it. Watch where they stop. Listen to what they say afterward.

**If completion rate is low.** The content is too long or the voice is wrong. Shorten cards. Test different copy.

**If return rate is low.** The product worked but the real world did not reinforce it. Consider a halftime nudge notification: "Something confusing just happened? Come back and ask."

**If users ask for other sports.** That is the signal to add American football and baseball. Not before.

**AI integration.** The natural next feature is a free text question box at the bottom of every learn card. Sam types "why did the ref just blow the whistle" and gets an answer in plain English in under 5 seconds. This is a legitimate LLM use case because the user does not know what question to ask. They only know what they felt. An LLM understands messy emotional contextless input in a way that search never will.

---

## What I learned about building 0 to 1

The hardest part of this project was not the build. It was resisting the urge to build before I knew what to build.

I came in with a complete product vision. I left with a completely different one. Every pivot came from following an honest question to an uncomfortable answer rather than protecting the idea I started with.

The insight that became the product came not from brainstorming features but from asking "what does success actually look like in the room, for a real person, in the exact moment that matters." That question killed three feature ideas and clarified one real one.

For PM roles specifically: I did not outsource the thinking to a tool or a framework. I used research to challenge my assumptions, used logic to stress test what survived, and used the evidence to make a call. Then I built it myself so I could speak to every decision with precision.

That is the job. Everything else is execution.

---

## Stack

React, Tailwind CSS, Vite, deployed on Lovable.

No external libraries beyond React and Tailwind. No backend. No database. No authentication. Intentionally. The fastest path to a real user's hands is the right path for a zero to one product.

---

## User feedback

I put the live product in front of real users after shipping. Here is what they said, unfiltered.

### What worked

**The court visual on the landing screen.** Multiple users specifically mentioned the basketball court SVG as the moment the product clicked for them before they had read a single word. A visual that communicates the product faster than copy is a design win worth noting.

**The simplicity of the words.** Three separate users mentioned the language felt comfortable, easy and not too heavy. This validated the core voice decision: a knowledgeable friend, not a textbook. When users notice the writing it usually means it got out of the way and let them learn.

**The flow felt natural.** Users moved through the screens without friction. Nobody mentioned getting lost or confused about what to do next. For a zero to one product with no onboarding that is a strong signal the information architecture was right.

**Level 1 does its job.** One user said it points out the basics well. Another said it gave them just enough to follow the game and engage. That is the exact outcome the product was built for. Not expertise. Just enough to participate.

**Confidence was delivered.** One user said they felt a little more confident after finishing. That is the north star in human words. Not a metric. A feeling. The product promised confidence and at least one user walked away with it.

### What needs work

**Too wordy in places.** One user felt the content was longer than it needed to be. This is a direct product signal. Every card needs to be stress tested against the question: what is the one thing this card needs to leave the user with, and is every sentence earning its place toward that outcome? The answer for some cards is probably no.

**The UI can be improved.** One user flagged the interface as an area to improve while also calling it user friendly in the same session. That tension tells me the structure is right but the visual execution needs another pass. Specifically the learn card screens which carry the most content and therefore the most visual load.

### The most important piece of feedback

One user said: "I do not know if I will reach for it again during the game."

This is the retention problem I identified before launching and the first real world evidence that it is real. The product gets users ready before the game. It does not yet give them a reason to come back during it.

This single piece of feedback defines the next product decision more than anything else. The question it raises: what would make Sam open this app at halftime? The answer to that question is the roadmap.

### What I would do with this feedback as a PM

Cut word count on every learn card by 20 percent. Every sentence that does not directly serve the "Watch for this" moment at the bottom of the card is a candidate for removal.

Run a targeted UI audit on the learn card screen specifically. It carries the most content and therefore the most opportunity to feel cluttered.

Design a halftime re engagement moment. Not a push notification. Something built into the completion screen that plants the idea before the game starts: "Confused by something in the first half? Come back and ask." That one line might be the difference between a product people use once and a product people reach for again.

---

## Built by

A PM who believes the best way to learn product thinking is to ship something real, talk to real people, and be honest about what the evidence says even when it kills your favourite idea.
