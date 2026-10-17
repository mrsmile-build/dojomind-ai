# DojoMind AI - Master Roadmap (single source of truth)
> Rule: solid before scale. A domain or subdomain opens only when its visual/engine type exists and Beginner ships complete. No empty shells; honest "coming next" placeholders are allowed and are not pretending.

## Status (verified after Skills/Focus ship)
- TOTAL LIVE LESSONS: 136. Homepage: 9 cards.
- Martial Arts (parent, own picker): Karate COMPLETE 4 levels (54 lessons). Boxing, Taekwondo, Muay Thai, Judo, BJJ, Wrestling, Kung Fu: Beginner live (3 lessons each).
- Mind-Body (generic MindBody renderer): Meditation, Breathing, Training COMPLETE 4 levels (12 each).
- Hierarchical parents (generic Domains picker):
  - Music: Theory live (3), Piano live (3); Guitar/Voice/Drums coming next.
  - Programming: Foundations live (3); Python/JavaScript/Web coming next.
  - Medicine: Foundations live (3), First Aid live (3); Plant Medicine/Anatomy coming next.
  - Business: Foundations live (3), Marketing live (3); Finance/Operations coming next.
  - Skills: Focus & Attention live (3); Memory/Habits/Learning coming next.

## Visual & engine system
- BodyPositionDiagram: joint registry (dots always), opt-in jointLabels, gaze tick, opt-in frontView (left/right plane) + top-down feet + weight bar. Side view cannot show frontal facts (guard tightness, knee cave) - front view is the lens for those.
- TechniqueAnimation (keyframes), BreathCycleVisual, AttentionLoopVisual (reused by Skills focus), MovementPostureVisual, TargetOverlay (martial targeting w/ ethics banner), LessonVisual (label schematics).
- Practice engines: timed-hold, interval, rep-counter. Metronome / ear-trainer / instrument overlay / runnable code / anatomy & business interactives: NOT built - polish pass, per domain.
- Per-subject disclaimers in Lesson.jsx (SUBJECT_DISCLAIMERS): martial=TRAINING REALITY, music/programming/business/skills=PRACTICE REALITY, medicine=MEDICAL DISCLAIMER. Mind subjects show none.

## Governance rules (never violate)
- Solid before scale; honest placeholders only.
- Harm ceilings wired from day one: kyusho=targeting w/ ethics banner; Medicine=referral ceiling lesson; First Aid=awareness-not-certification + call-first; anything lethal/medical/financial = principle + referral, never app-alone instruction.
- Parse-and-check: verify THROUGH imported objects; node --check proves parse only.
- Edit objects not bytes: import -> mutate -> re-serialize for data files.
- Patch scripts: anchor split/join that THROWS on miss; NO regex literals; NO single quotes inside node -e strings (use heredoc verify files).
- Phone paste ceiling ~10KB: chunk lessons 2-3 per paste; one block at a time; idempotent scripts so a dropped paste re-runs alone.
- Browser-test before commit; never trust an echo line.

## Parked / unaccepted (do not call done)
- Body-pose polish: front-view boxing guard draft UNACCEPTED by user; side-view guard wings (proportion wall: 70px forearm cannot reach chin from rib elbow); per-art pose audit pending user references. Reference images are SPEC ONLY (copyright) - redraw parametrically, never embed.
- Plain-language rewrite: boxing stance is the approved-style template (terse cues + plain paragraphs); roll across remaining physical lessons during polish.
- Translation tiers: inline local-term gloss (cheap, later); UI language toggle (medium, later); full lesson translation (human-checked only, much later).
- AI image generation: PARKED (Groq=text-only; OpenRouter/self-host not free + hallucinate joints; Pixabay=stock search). Parametric SVG is the engine.

## Ordered queue (next first)
1. Python (Programming first language sub).
2. Skills: Memory, Habits, Learning-how-to-learn.
3. Music: Guitar, Voice, Drums. Programming: JavaScript, Web.
4. Medicine: Plant Medicine, Anatomy. Business: Finance, Operations.
5. Deepen: Intermediate->Expert across parents and arts (Karate pattern), art/domain by art/domain.
6. Polish passes: body poses from user references; instrument overlays + metronome/ear-trainer; runnable snippets; anatomy & business interactives; translation gloss tier.
7. Platform: PWA/offline, per-page titles + OG tags. Backend: cross-device progress, then AI companion.

## Method (why this works)
Measure before cut (read the file/registry first). Chunk pastes. Gate with node --check + verify-through-import. Browser-test. Ship. The blank-page era ended when verification moved from echoes to imported objects and from guesses to reads.
