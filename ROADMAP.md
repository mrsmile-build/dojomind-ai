# DojoMind AI — Master Roadmap (single source of truth)

> Rule that governs everything here: **solid before scale.** A domain opens only
> when (1) its signature visual + practice-engine type exist and (2) Beginner
> ships complete before any higher level is scaffolded. No empty shells.

## Status legend
- ✅ complete · 🟡 partial (beginner only) · ⬜ placeholder (in development) · 🔒 capped (principle + referral only)

## 1. Live domains
| Domain | State | Notes |
|---|---|---|
| Karate | ✅ 54/54, all 4 levels | full curriculum, zero empty slots |
| Meditation | 🟡 3 built (Beginner) | Intermediate/Advanced/Expert scaffolded, empty |
| Breathing | 🟡 3 built (Beginner) | same |
| Training | 🟡 3 built (Beginner) | same |

Mind-body empty slots total: **27** (9 per domain × 3).

## 2. Martial-art placeholders (⬜, ordered by build priority)
Boxing → Taekwondo → Muay Thai → Judo → Brazilian Jiu-Jitsu → Wrestling → Kung Fu.
- **Boxing first**: closest to karate striking, reuses the whole engine, proves cross-art generalization.
- **Kung Fu** is where the animal styles (snake, cat, crane, etc.) and the broader
  hand-form family conceptually live. NOTE: elbow (empi), knee (hiza-geri),
  knife-hand (shuto/nukite) are ALREADY karate strikes — they are not kung-fu-only.

## 3. New domains to open (the "teach anything" expansion)
Each needs its OWN signature visual + practice-engine type before Beginner ships.
| Domain | Signature visual needed | Practice engine needed | Cap |
|---|---|---|---|
| Music (piano, guitar, drum, trumpet, singing…) | instrument overlay (fretboard/keys/stick-path) + red-dot = finger placement | metronome, ear-training, scale patterns | — |
| Programming (code, design, writing…) | code/REPL panel, diagram canvas | typed-exercise runner, timer | — |
| Medicine (first aid, therapy, acupuncture…) | anatomy overlay (shared with targeting) | procedure step-timer | 🔒 diagnosis/acupuncture/therapy = principle + "see a professional"; FIRST AID is the teachable exception |
| Business (investing, trading, finance…) | chart/candlestick schematic | scenario simulator | 🔒 no personalized financial advice; principle + risk literacy only |

## 4. Visual system (built — 4 signature types)
- Karate physical: **posed body diagram** (data-driven arms/legs/feet/weight) + **TechniqueAnimation** (keyframe motion)
- Breathing: **BreathCycleVisual**
- Meditation: **AttentionLoopVisual**
- Training: **MovementPostureVisual**
- Conceptual lessons (strategy/timing/distance/kata/mastery…): **timeline / range-ring / label schematic** — a body diagram of "equanimity" is nonsense; schematics are correct here.

### Coverage gaps (triaged from audit — NOT 46, that number is misleading)
- ~13 karate lessons are genuinely physical and still lack a posed body: footwork, strikes-mechanics/elbow, kicks-mechanics/balance, **self-defense ×4**, **kobudo ×3**. The self-defense + kobudo 7 are the WORST mismatch (they teach grabs/knife/bo/sai with no body shown).
- ~6 chain/scenario lessons (combinations ×3, applications ×3) → sequence/flow schematic.
- ~27 conceptual lessons → already-correct schematics (no action).
- Mind-body small gaps: meditation posture+breath (reuse seated posture + breath-cycle), breathing awareness+rhythm (breath-cycle), training mobility+conditioning (joint-map + circuit).

## 5. The missing attack-half (kyusho / targeting) — DECIDED
We built the full **defend / read / adapt** half. The **attack-targeting** half
(where force lands and why the body reacts) has no lesson or visual. Plan:
- New visual **TargetOverlay** = translucent anatomical zones (red dots) on the body silhouette. Framed as **control + escape**, with the legal/ethical ceiling stated outright (reasonable force; goal is to leave, not harm; supervised application only).
- New lesson **karate-targeting-anatomy** ("Where Force Lands") slotted into Advanced, cross-referenced from strikes / self-defense / kobudo.
- This is NOT a kill-list. Real vital-point work stays withheld; we teach principle + anatomy + ethics — what a dojo teaches before anything sharper.
- Bonus: TargetOverlay's overlay concept directly funds the **Music** domain's finger-placement visual. One build, two domains unlocked.

## 6. Ordered next steps
1. ✅ Push d2446d3 (verify above).
2. ⬜ **TargetOverlay** component + wire + attach to the new targeting lesson (safe first slice).
3. ⬜ Apply TargetOverlay + posed bodies to the 7 self-defense + kobudo lessons.
4. ⬜ Close the remaining mind-body visual gaps (seated posture, joint-map, circuit, breath-cycle rollout).
5. ⬜ Fill the 27 empty mind-body slots — each lesson BORN with its correct visual.
6. ⬜ Open **Boxing** (beginner module) as the 2nd martial art.
7. ⬜ Open **Music** (metronome + ear + instrument-overlay) as the 1st new domain.
8. ⬜ Platform polish: PWA/offline, per-page titles + OG tags, hash-routing already done.
9. ⬜ Backend: cross-device progress, then the AI companion (the stub on the hero).
10. ⬜ Then Programming, Medicine, Business, remaining martial arts — one solid domain at a time.

## 7. Governance rules (never violate)
- Solid before scale; no empty shells shipped as "coming soon" beyond honest placeholders.
- Anything that can kill/maim if misread (kyusho, diagnosis, acupuncture, leverage/trading advice) = principle + referral + explicit ceiling, NEVER app-alone instruction.
- Every new lesson carries a correct visual from birth (physical → posed body; conceptual → schematic; domain → its signature type).
- Verify in the browser before commit; never trust an `echo "...done"` line (it lies on paste failure).
