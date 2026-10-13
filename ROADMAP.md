# DojoMind AI - Master Roadmap (single source of truth)
> Rule: solid before scale. A domain opens only when (1) its signature visual + practice-engine type exist and (2) Beginner ships complete before higher levels are scaffolded. No empty shells.

## Status (verified 2026-10-13)
- Karate: COMPLETE - 54 lessons, all 4 levels, 0 empty.
- Meditation: COMPLETE - 12 lessons (Beginner->Expert), 0 empty.
- Breathing: COMPLETE - 12 lessons, 0 empty.
- Training: COMPLETE - 12 lessons, 0 empty.
- TOTAL LIVE LESSONS: 91. EMPTY SLOTS ACROSS ALL 4 DOMAINS: 0.
- Homepage placeholders (honest, labeled in-development): Boxing, Taekwondo, Muay Thai, Judo, BJJ, Wrestling, Kung Fu. Coming-soon cards are acceptable by the no-empty-shells rule; they are not pretending to be complete.

## Visual system (7 types, all data-driven)
1. BodyPositionDiagram - posed body (angles/arms/legs/feet/weight). Karate stances, strikes, blocks, kicks.
2. TechniqueAnimation - keyframe motion. Karate technique-in-motion.
3. BreathCycleVisual - inhale/exhale/hold. Breathing.
4. AttentionLoopVisual - dot-on-ring loop, re-parameterizable per lesson. Meditation.
5. MovementPostureVisual - one-leg balance + CoM/plumb/base. Training balance.
6. TargetOverlay - silhouette + tappable zones + permanent ethics banner. Karate targeting, self-defense, kobudo. Lethal points intentionally omitted.
7. Generic diagram/label schematic - conceptual lessons (strategy, timing, power-curves, teaching-arcs). A body diagram of "equanimity" is nonsense; schematics are correct here.
Residual minor gap: a few EARLY beginner mind-body lessons use a generic schematic instead of their domain signature visual. Backfillable polish, not a hole.

## The attack-half (kyusho/targeting) - DONE
TargetOverlay + "Where Force Lands" shipped, framed as control+escape with a built-in legal/ethical ceiling; finer/lethal points withheld by design (they fail under adrenaline and need supervision). Cross-referenced from self-defense + kobudo.

## Governance rules (never violate)
- Solid before scale; honest placeholders only, never fake-complete.
- Anything that can kill/maim if misread (kyusho, diagnosis, acupuncture, leverage/trading) = principle + referral + explicit ceiling, never app-alone instruction.
- Every lesson carries a correct visual from birth (physical -> posed body; conceptual -> schematic; domain -> its signature type).
- Parse-and-check, never grep-and-trust: after any structural edit, assert the value is reachable THROUGH the imported object (.visuals.filter(...).length===1), not merely present in text. node --check proves parse only; duplicate/dead keys are valid syntax the runtime silently discards.
- For data files, edit the OBJECT not the bytes: import -> mutate -> re-serialize (JSON.stringify). Immune to whitespace/line-format/bracket-depth/duplicate-keys.
- On a phone, cap each paste at <=3 lessons (~16KB); never send a monolith (a 30KB paste froze Termux). Paste one block, wait for SYNTAX_OK, then the next; scripts are idempotent so a dropped block is re-pasted alone.
- Verify in the browser before commit; never trust an echo "...done" line.

## Curriculum file note
frontend/src/data/curriculum/index.js has MIXED line formats (some modules single-line, some multi-line) because earlier edits rewrote some blocks pretty and left others compact. Any structural insert must be format-agnostic (match the object + its trailing comma + the array close), then node --check. Prefer editing lessons.js (now uniform JSON) over the curriculum file.

## Ordered next steps
1. DONE: all 4 live domains deep (91 lessons, 0 empty).
2. NOW: open a 2nd martial art - BOXING beginner (cheapest cross-art proof; reuses the whole visual vocabulary as new DATA; near-zero new component code).
3. THEN: open MUSIC beginner (the real new-domain test: forces new visual = instrument overlay reusing TargetOverlay's dot-on-layout, + new engines = metronome/ear-training).
4. THEN: backfill remaining martial arts (Taekwondo, Muay Thai, Judo, BJJ, Wrestling, Kung Fu) as pure content-fill on the proven pattern - the easy part, do it whenever.
5. THEN: Programming, Medicine, Business - one solid domain at a time, each with its own signature visual + engine, each capped per governance.
6. Platform polish: PWA/offline, per-page titles + OG tags.
7. Backend: cross-device progress, then the AI companion.

## The fork (why Boxing before Music, not all-MA-now)
- Completing ALL 7 martial arts now = content-grinding a SOLVED pattern (zero new architecture), delays the unproven frontier, and the honest placeholders are fine meanwhile. Advise against doing all now.
- Boxing = lowest-risk way to convert a placeholder into a real domain AND prove cross-art generalization: boxing stances/guards/jab-cross-hook are different ANGLE/KEYFRAME DATA on the SAME components, and boxing's LEGAL target map (chin/liver/solar plexus, NOT groin/eyes) is a different zones array on the SAME TargetOverlay - the engine expressing a different art's RULES via data. Near-zero new code.
- Music = the expensive, high-information test: it forces genuinely new components (metronome, ear-trainer, instrument overlay) and new practice-engine types. This is where "teach anything" is actually proven or dies. Do it from more momentum, after banking the cheap Boxing win.
- Net: Boxing (cheap bridge) -> Music (real test) -> fill remaining MA (easy) -> other domains. If the priority is chasing the vision NOW over a safe win, Music-first is defensible and I build it incrementally, one gated component at a time.
