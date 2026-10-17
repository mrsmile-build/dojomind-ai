# DojoMind AI - Master Roadmap (single source of truth)
> Rule: solid before scale. A domain or subdomain opens only when its visual/engine type exists and Beginner ships complete. No empty shells; honest "coming next" placeholders are allowed and are not pretending.

## PHASE STATUS: BREADTH COMPLETE
> Every homepage card is a real domain; every hierarchical parent has all its exemplar subdomains live at Beginner. The next phase is DEEPEN + POLISH, not more cards.

- TOTAL LIVE LESSONS: 175. Homepage: 9 cards.
- Martial Arts (parent, own picker): Karate COMPLETE 4 levels (54). Boxing, Taekwondo, Muay Thai, Judo, BJJ, Wrestling, Kung Fu: Beginner live (3 each).
- Mind-Body (generic MindBody renderer): Meditation, Breathing, Training COMPLETE 4 levels (12 each).
- Hierarchical parents (generic Domains picker) - ALL COMPLETE at Beginner:
  - Music (5 subs): Theory, Piano, Guitar, Voice, Drums.
  - Programming (4 subs): Foundations, Python, JavaScript, Web.
  - Medicine (4 subs): Foundations, First Aid, Plant Medicine, Anatomy.
  - Business (4 subs): Foundations, Marketing, Finance, Operations.
  - Skills (4 subs): Focus, Memory, Habits, Learning-how-to-learn.

## Visual & engine system
- BodyPositionDiagram: joint registry (dots always), opt-in jointLabels, gaze tick, opt-in frontView (left/right plane) + top-down feet + weight bar. Side view cannot show frontal facts (guard tightness, knee cave) - front view is the lens for those.
- TechniqueAnimation (keyframes), BreathCycleVisual, AttentionLoopVisual (reused by Skills focus), MovementPostureVisual, TargetOverlay (martial targeting w/ ethics banner), LessonVisual (label schematics).
- Practice engines: timed-hold, interval, rep-counter. Metronome / ear-trainer / instrument overlay / runnable code / anatomy & business interactives: NOT built - polish pass, per domain.
- Per-subject disclaimers in Lesson.jsx (SUBJECT_DISCLAIMERS): martial=TRAINING REALITY, music/programming/business/skills=PRACTICE REALITY, medicine=MEDICAL DISCLAIMER. Mind subjects show none.

## Governance rules (never violate)
- Solid before scale; honest placeholders only.
- Harm ceilings wired from day one: kyusho=targeting w/ ethics banner; Medicine=referral ceiling lesson; First Aid=awareness-not-certification + call-first; Plant Medicine=identification rule + interaction/ceiling; anything lethal/medical/financial = principle + referral, never app-alone instruction.
- Parse-and-check: verify THROUGH imported objects; node --check proves parse only.
- Edit objects not bytes: import -> mutate -> re-serialize for data files.
- Patch scripts: anchor split/join that THROWS on miss; NO regex literals; NO single quotes inside node -e strings (use heredoc verify files).
- Phone paste ceiling ~10KB: chunk lessons 2 per paste (3 risks freeze); one block at a time; idempotent scripts so a dropped paste re-runs alone.
- Browser-test before commit; never trust an echo line.

## Parked / unaccepted (do not call done)
- Body-pose polish: front-view boxing guard draft UNACCEPTED by user; side-view guard wings (proportion wall: 70px forearm cannot reach chin from rib elbow); per-art pose audit pending user references. Reference images are SPEC ONLY (copyright) - redraw parametrically, never embed.
- Plain-language rewrite: boxing stance is the approved-style template (terse cues + plain paragraphs); roll across remaining physical lessons during polish.
- Translation tiers: inline local-term gloss (cheap, later); UI language toggle (medium, later); full lesson translation (human-checked only, much later).
- AI image generation: PARKED (Groq=text-only; OpenRouter/self-host not free + hallucinate joints; Pixabay=stock search). Parametric SVG is the engine.

## Ordered queue (next first) - DEEPEN + POLISH PHASE
1. Deepen Music: Intermediate -> Expert (Theory first, then instruments).
2. Deepen Skills: Intermediate -> Expert (Focus, Memory, Habits, Learning).
3. Deepen Medicine: Intermediate -> Expert (Foundations, First Aid, Plant Medicine, Anatomy).
4. Deepen Business: Intermediate -> Expert (Foundations, Marketing, Finance, Operations).
5. Deepen Programming: Intermediate -> Expert (Foundations, Python, JavaScript, Web).
6. Deepen remaining martial arts: Intermediate -> Expert (Boxing, Taekwondo, Muay Thai, Judo, BJJ, Wrestling, Kung Fu) - Karate already complete.
7. Polish passes (interleaved with deepen, per domain): body poses from user references; instrument overlays + metronome/ear-trainer; runnable snippets; anatomy & business interactives; translation gloss tier.
8. Platform: PWA/offline, per-page titles + OG tags. Backend: cross-device progress, then AI companion.

## Method (why this works)
Measure before cut (read the file/registry first). Chunk pastes. Gate with node --check + verify-through-import. Browser-test. Ship. The blank-page era ended when verification moved from echoes to imported objects and from guesses to reads. Breadth ended when every card became a real domain; depth begins now.
