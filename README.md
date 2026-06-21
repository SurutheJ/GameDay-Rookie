# GameDayRookie

**A basketball confidence app for complete beginners. Shipped to real users.**

[Live product](https://gameday-rookie.lovable.app) | [Discovery document](#) | [PRD](#)

---

PRODUCT REQUIREMENTS DOCUMENT

Status  Shipped     Version  2.3     Last updated  June 2026
Product  GameDayRookie     Platform  Mobile Web     Author  Suruthe Jayachandran

Contents
1. Executive summary
2. Problem statement
3. User persona
4. Goals and non goals
5. Success metrics
6. User journey
7. Feature specifications
8. Content specifications
9. Design principles
10. What was cut and why
11. User feedback
12. Open questions
13. Roadmap


1. Executive summary
GameDayRookie is a mobile web app that prepares a complete basketball beginner to watch a game with confidence in 15 minutes. The product is built for people who are attending a game in a social setting and want to feel included without faking it.

The app delivers three progressive levels of content: survive the game, participate in it, then feel it. Each level has four learn cards, a quick check quiz, and an optional bottom sheet for users who want to go deeper without breaking their flow.

The product is shipped and live. It was built after a full discovery process that changed the original product concept entirely. This PRD documents both what was built and the reasoning behind every decision.

LIVE PRODUCT
https://gameday-rookie.lovable.app




2. Problem statement

PROBLEM STATEMENT
Sam is a city newbie who needs to understand basketball in the 15 minutes before a game, because she wants to feel included without feeling excluded. Right now nothing does this because she does not know where to search or where to begin. We will know we solved it when she completes the learn flow and returns within the hour for more.


How we got here
The original product concept was a full sports education platform with structured lessons, a glossary, gamified missions, a progression system, and a real time play explainer powered by live sports data. Discovery research changed all of that.

What the research revealed
People in a social sports setting do not ask for help when confused. Asking makes them feel more exposed than staying silent. The product is not competing with Google or YouTube. It is competing with smiling and nodding.
The root problem is not ignorance. It is dignity. People will not sacrifice their dignity to fix their ignorance in a room full of people whose opinion they care about.
The critical moment is not during the game. It is the 15 minutes before the game when motivation is highest and no useful product exists for that window.
When two confused people find each other they create a private channel. They are not trying to learn. They are trying to survive together. The product needed to give one person what two people do for each other.

The pivot
Assumption
Reality
Original assumption
People need to learn basketball so they do not feel left out
What research showed
People need to feel basketball so they can belong in the moment
Original solution
Education app with lessons, glossary, missions, progression system
Actual solution
A confidence primer that fits the 15 minutes before a game
Original competitor
YouTube, sports apps, paid education platforms
Actual competitor
Smiling and nodding. Doing nothing.




3. User persona

PRIMARY PERSONA
Sam. Relocated to a new city for work. Made friends. Going to her first Knicks game tonight with a group who all know basketball. She does not want to feel small. She has 15 minutes on the commute.


Who Sam is
Sam's constraints
Sam's emotional job
Context
Situation
Emotional state
New to the city, building social connections
15 minutes before a game, in a crowd, on her phone, no headphones
Nervous about feeling left out. Motivated by belonging not learning.
Has no basketball knowledge baseline
Cannot watch YouTube. Too loud. No headphones.
Willing to prepare but only if it fits her window naturally
Cares about the opinion of the people she is with
Will not ask her friends during the game to avoid feeling like a burden
Wants to participate genuinely not perform belonging


Secondary personas
These personas exist and share Sam's pain. They were identified in discovery but are not the primary build target for version 1.

Persona
Context
International student
Adjusting to US sports culture. School team games are a social event. Wants to support without faking it.
Sports parent
Child just joined a youth basketball league. Wants to understand what they are watching from the bleachers.
Corporate event attendee
Company bought Knicks tickets. Does not want to be the only one in the box who has no idea what is happening.




4. Goals and non goals

Goals
Give a complete beginner enough confidence to participate in a basketball game socially within 15 minutes
Make the experience work in a loud crowd, on a phone, with no headphones, under time pressure
Create a natural appetite for more so that users return within the same game session
Build a product whose value is felt in the real world not just in the app

Non goals for version 1
Teaching basketball comprehensively. This is not an education product. It is a confidence product.
Real time play by play explanations during the game. Requires paid sports data APIs and breaks the pre game timing model.
Multiple sports. No validated content exists for other sports. Ship one thing that works before building the second.
User accounts, profiles, or saved progress. Friction before value kills the conversion.
Gamification. XP, badges and streaks are retention mechanics for products whose core loop is not compelling enough on its own.
Native mobile app. Mobile web ships faster and reaches users without an App Store download.



5. Success metrics

NORTH STAR
Sam completes the learn flow and returns within 60 minutes for more.


Metric
Target
Why it matters
Metric
Target
Why it matters
Completion rate
Above 70%
If more than 3 in 10 users drop before finishing Level 1 the content or flow is broken
Return rate within 60 min
Above 30%
Measures whether the product worked in the real world not just in the app
Time to complete Level 1
Under 12 minutes median
Gives Sam a 3 minute buffer. If median is 14 minutes she is rushing into the arena still reading.
Bottom sheet open rate
Above 20%
If users tap Tell me more the content is earning curiosity. If nobody taps it the content is either too complete or not interesting enough.
Level 2 progression rate
Above 40% of completers
Measures appetite growth. Sam finishing Level 1 and immediately wanting more is the retention signal.


What we are not measuring in version 1
Daily active users. Sam does not go to a game every day.
Session length. Longer is not better. Faster is better.
Net Promoter Score. Too early. Ship, observe, then survey.



6. User journey

The complete flow from Sam opening the app to walking into the arena ready.

Step
What happens
Sam lands on the app
Dark landing screen with a basketball court SVG. One tap to begin. No sign up. No friction. The visual communicates the product before a word is read.
Sam picks her level
Three levels shown. Level 1 is unlocked. Levels 2 and 3 are locked. She does not decide where to start. The product decides for her. This removes the paradox of choice.
Sam goes through four learn cards
Each card has a fact, a Watch for this callout that bridges knowing something and feeling it, and a Tell me more button that opens a bottom sheet for anyone who wants to go deeper without leaving the flow.
Sam takes the quick check
Four questions framed as confidence confirmation not examination. Warm feedback whether right or wrong. Progress dots not a score counter.
Sam sees the completion screen
Her stats: 4 things learned, 4 of 4 nailed. A prompt to go deeper that uses time as the motivator. She can start Level 2 immediately or close the app and walk in.
Sam comes back during the game
If something confusing happens she has a product she already trusts. She opens it again. That return is the north star metric.




7. Feature specifications

Screen 1: Landing
Element
Specification
Visual
Dark background with basketball court SVG. Court is tappable and navigates to level select.
Headline
Hey there, rookie! Got a basketball game coming up?
Subtext
We will get you ready before the first whistle blows. 15 minutes. No textbooks. Just the good stuff.
Friend callout
Let us turn you into a fan who actually knows what is going on.
Primary CTA
Get me ready. Let us go.
Bottom note
No sign up. No downloads. Just you and the game.
Design rationale
Dark to white transition when entering the app feels like walking from outside into somewhere bright and ready. Intentional contrast not inconsistency.


Screen 2: Level select
Element
Specification
Level 1
Unlocked. Orange border. Label: START HERE. Total rookie.
Level 2
Locked. Gray. Unlocks after Level 1 completion.
Level 3
Locked. Gray. Unlocks after Level 2 completion.
Rationale for locking
Unlocking everything creates the same problem as Google. Too much. No clear start. The product decides where Sam begins.


Screen 3: Learn cards
Element
Specification
Card structure
Tag, headline, body text, Watch for this callout, Tell me more button
Progress indicator
N of 4 counter top left. Progress bar below. No timer shown.
Watch for this callout
Orange left border. Bridges the gap between knowing a fact and feeling a moment in the game. This is the most important element on the card.
Tell me more button
Opens bottom sheet. Does not navigate away. Sam never loses her place.
Bottom sheet
Contained within the 390px app frame. Closes on backdrop tap or X button. Handle bar at top. Additional context that earns curiosity without creating pressure.
No timer visible
Showing minutes remaining creates pressure. Sam is already nervous. The product should feel like a conversation not a test.


Screen 4: Quick check
Element
Specification
Framing
Quick check. You have got this. Not Quiz or Test.
Question format
Multiple choice, three options per question
Correct feedback
Exactly right. Warm reinforcement plus the fact in context.
Wrong feedback
Not quite. But now you know. No penalty. Just redirection.
Progress
Dot indicators not a score counter. Progress feels forward not numerical.
Advance logic
Next question button only appears after an answer is selected.


Screen 5: You are ready
Element
Specification
Stats shown
4 things learned. 4 of 4 nailed. Time removed intentionally.
Completion message
Changes per level. Level 1: You now know more than half the people walking in. Level 2: You are not just watching anymore. You are reading the game. Level 3: You are no longer a rookie.
Go deeper card
Changes per level. Uses time as motivator. Level 2 is 8 minutes. Level 3 is 6 minutes.
Primary CTA
Take me to Level 2. Or Level 3. Or Let us go watch after Level 3.
Secondary CTA
I am good. Enjoy the game. Gray not orange. Exit is not a call to action.
No back button
Sam finished. Going back would feel like being pushed out. Only way out is home or the next level.


Navigation
Element
Specification
Top nav bar
Present on all screens except landing. GAMEDAY ROOKIE centered in orange. Back arrow left. Empty spacer right to balance.
GAMEDAY ROOKIE logo
Always navigates home. Clears the history stack.
Back arrow
Goes to previous screen in history. Never below screen 1.
Landing screen
No nav bar. Clean hero experience uninterrupted.




8. Content specifications

The three levels
Level
Goal
Content focus
Level
Goal
Content focus
Level 1: Survive
Enough to follow what is happening
The court, scoring, the clock, fouls
Level 2: Participate
Enough to have an opinion and say something out loud
Players, possessions, timeouts, momentum runs
Level 3: Feel it
Enough to be emotionally invested
Clutch moments, fouling out, comebacks, your moment


Voice rules
A knowledgeable friend. Not a textbook. Not a hype coach. The friend who says okay do not worry, let me just tell you the three things that actually matter tonight.
Plain English throughout. No jargon without immediate plain English explanation.
No hyphens as sentence connectors. Use a new sentence, a conjunction, or a softer connector instead. Hyphens in compound words and scores are fine.
Short sentences. If a sentence can be two sentences it should be two sentences.
The Watch for this callout is always present tense and experiential. Not a fact. A moment.

Card structure template
TAG
Category label in all caps. 10 to 12 characters maximum.


HEADLINE
One declarative sentence. Bold. Creates curiosity or mild surprise. Under 8 words.


BODY
Two to three sentences maximum. Plain English. The fact the user needs to know.


WATCH FOR THIS
One or two sentences. Present tense. Tells Sam exactly what moment to look for tonight and how she will know when it happens.


MORE
Bottom sheet content. Three to five sentences. The story behind the fact. Earns curiosity without creating pressure.




9. Design principles

Principles that cannot be compromised
One primary action per screen. No decision fatigue. The product moves Sam forward at every step.
No timer visible during the learn flow. Showing time remaining creates pressure. The product should feel like a conversation not a countdown.
Dark landing, white learn screens. The contrast is intentional. It feels like walking from outside into somewhere bright and ready.
The bottom sheet is contained within the 390px app frame. Not the full browser width. This is a mobile product and it should feel like one.
No shadows. No gradients except the landing page bottom fade. Flat clean design throughout.
Buttons are always reachable without scrolling. Content fits the viewport. Sam should never hunt for what to do next.

Design tokens
Token
Value
Primary
#E8593C
Background
#FFFFFF
Dark background (landing only)
#0F0F0F
Surface
#F8F7F4
Accent light
#FEF0ED
Accent dark
#993C1D
Text primary
#1A1A1A
Text secondary
#6B6B6B
Text muted
#AAAAAA
Success background
#EAF3DE
Success text
#27500A
Error background
#FCEBEB
Error text
#791F1F
Font
Inter, Google Fonts
Border radius cards
16px
Border radius buttons
14px
Max width
390px




10. What was cut and why

Every item below was considered seriously and cut deliberately. This section exists because knowing what not to build is as important as knowing what to build.

What was cut
Why
Live sidekick feature
Real time play explanations during the game. Cut because sports data APIs start at hundreds of dollars per month. The pre game window solves the same emotional need without the technical complexity or cost.
Multiple sports at launch
No validated content for any sport other than basketball. No evidence users wanted other sports before finishing with this one. Add when completion data justifies it.
Optional quiz
The original quiz was optional. Cut because optional means no decision was made about what the quiz is for. Every element needs a job. The quiz confirms confidence. Making it optional made it purposeless.
XP, badges, missions
Gamification is a retention mechanic for products whose core loop is not compelling enough on its own. If the content is good the user comes back. If it is not good badges will not save it.
User accounts
Friction before value kills conversion. Sam should be in the product in under 5 seconds. Accounts add nothing to her experience in version 1.
Tonight in the headline
Original copy said Got a basketball game tonight. Changed to coming up because not every game is at night. Copy that excludes users by time of day is bad copy.
Timer on learn cards
Original design showed minutes remaining. Cut because it creates pressure. Sam is already nervous. The product should feel like a conversation not a test.
Wait, tell me more as a button label
Original label created doubt. Wait implies she might not be ready to move on. Changed to Tell me more which is an invitation not a hesitation.




11. User feedback

Feedback collected from real users after shipping. Unfiltered. Ten data points across positive signals, content concerns, and design observations.

What worked
Feedback
What it tells us
Court visual on landing
Multiple users specifically mentioned the basketball court SVG as the moment the product clicked before they read a word. A visual that communicates faster than copy is a design win.
Simplicity of language
Three separate users mentioned the words felt comfortable, easy, and not too heavy. When users notice the writing it usually means it got out of the way and let them learn.
Flow felt natural
Users moved through screens without friction. Nobody got lost or confused about what to do next. Strong signal that the information architecture was right.
Level 1 delivers its job
One user said it points out the basics well. Another said it gave them just enough to follow the game and engage. That is exactly the outcome the product was built for.
Confidence was delivered
One user felt more confident after finishing. That is the north star in human words. The product promised confidence and at least one user walked away with it.
Interface is user friendly
Positive signal on navigation and usability.


What needs work
Feedback
What it tells us
Too wordy in places
One user felt some content ran longer than needed. Action: cut every learn card by 20 percent. Audit each sentence against the Watch for this outcome. Every sentence that does not serve that outcome is a candidate for removal.
UI can be improved
One user flagged the interface while also calling it user friendly. The structure is right but visual execution needs another pass, specifically on learn card screens which carry the most content.


The most important piece of feedback
USER QUOTE
I do not know if I will reach for it again during the game.


This is not just feedback. It is the product's next chapter. The product gets users ready before the game. It does not yet give them a reason to come back during it. This single data point defines the next product decision more than anything else.



12. Open questions

Question
Why it matters
The halftime return problem
What would make Sam open this app at halftime? The completion screen currently plants the idea. Is that enough or does the product need a more direct re engagement mechanism?
Word count on cards
One user felt content was too wordy. What is the right sentence count per card? Is it three sentences or two? Needs an A/B test on a single card before cutting everything.
UI improvement scope
Which specific screens need visual improvement? Learn cards are the highest priority based on feedback. What is the minimum change that moves the needle?
Level progression rate
What percentage of Level 1 completers go to Level 2 immediately? This number tells us whether appetite is growing or whether Sam closes the app after finishing.
Other sports timing
At what completion volume does it make sense to add American football and baseball? 100 Level 1 completions? 500? Define the trigger before building.
AI question box
A free text input where Sam types why did the ref just blow the whistle and gets a plain English answer in seconds. This is the next natural feature. When does it become the priority?




13. Roadmap

This roadmap is evidence driven not calendar driven. Each phase unlocks when the trigger condition is met, not on a predetermined date.

Phase 1: Validate (now)
Put 20 real users through the product
Measure completion rate and return rate within 60 minutes
Watch where users drop off
Collect qualitative feedback on content length and voice
Trigger for Phase 2: Completion rate above 70 percent

Phase 2: Improve (after validation)
Cut word count on cards where drop off is highest
UI audit on learn card screens based on user feedback
Design a halftime re engagement moment built into the completion screen
Trigger for Phase 3: Return rate within 60 minutes above 30 percent

Phase 3: Expand
Add AI powered free text question box on each learn card
Add American football content after basketball completion data justifies it
Add baseball content
Trigger for Phase 4: Users asking for other sports unprompted

Phase 4: Scale
Spanish language version
B2B channel: sports bars, schools, corporate event organizers who need this for groups
Native mobile app if retention data justifies the download friction




This PRD was written after shipping version 2.3. Every decision documented here was made before or during the build, not retroactively. The discovery process that shaped this product is documented separately in the project GitHub README.

GameDayRookie, June 2026. Version 2.3.
