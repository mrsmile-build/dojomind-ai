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

## Monetization & Integrity Architecture (locked decisions)
- App-first paid tiers: Capacitor native wrapper required for intermediate+ and certificate issuance. Android FLAG_SECURE blocks screenshots/recording at OS level; iOS detects capture and blurs content. Web remains free-beginner only.
- Traceability over prevention: forensic watermarking (visible subtle user ID + timestamp in lesson chrome; invisible steganographic ID in SVG/canvas visuals). Camera leakage is traceable, not preventable.
- Practice evidence: lesson completion requires practice-engine interactions (reps, timed holds), not click-through.
- Pacing: minimum dwell per level, max lessons/day, server-enforced "return on date" lockout.
- Batched cohort issuance: completions recorded instantly; certificates issued on scheduled monthly dates. Payment unlocks study, never accelerates issuance. This structurally prevents pay-to-overtake and clusters certificate dates.
- Certificates: Ed25519-signed records with unique ID, public verify URL, QR code, revocation list, cohort + pace-integrity metadata. Not a forgeable PDF. A certificate proves completed learning, never innocence or legal defense.
- Privacy/accessibility: device fingerprinting and watermarking disclosed in ToS/privacy policy; NDPR/GDPR compliant, data minimized. Real accessible text is kept (no image-ified text); in-app notes replace the urge to screenshot.

## Ordered queue (next first) - FUNNEL + MONETIZATION BACKBONE
1. Beginner polish across all domains (the free funnel that sells intermediate): plain-language rewrite, visual clarity, practice-engine tuning.
2. Capacitor spike: wrap existing React app, implement FLAG_SECURE (Android) + capture blur (iOS), root/jailbreak detection, device attestation stub.
3. Auth + payments: Supabase (or Node+Postgres) accounts, Paystack/Flutterwave webhooks for NGN, Stripe for global, enrollment records.
4. Pacing + cohort issuance engine: dwell rules, practice evidence, scheduled issuance cron, "return on date" UI, multi-account/device flags.
5. Certificate service: Ed25519 signing, verify.dojomind.ai endpoint, QR, revocation, optional transparency log.
6. Scaffold Roles + Law & Rights as honest containers (jurisdiction-neutral law, alias field for roles, ceilings wired before any content).
7. Deepen remaining rungs (Music instruments expert, Skills/Medicine/Business/Programming intermediate, martial arts) - now funded by the backbone.
8. Law localization and advanced polish only after qualified lawyer review per jurisdiction.

## Method (why this works)
Measure before cut (read the file/registry first). Chunk pastes. Gate with node --check + verify-through-import. Browser-test. Ship. The blank-page era ended when verification moved from echoes to imported objects and from guesses to reads. Breadth ended when every card became a real domain; depth begins now.
