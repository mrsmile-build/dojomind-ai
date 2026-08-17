# DojoMind AI — Architecture

## Vision
A structured, AI-assisted martial-arts + mind/body training platform, not an article site. Four pillars: Martial Arts, Meditation, Breathing, Physical Training. Martial Arts is being built first; the others stay placeholder until that pipeline is proven.

## Learning cycle
Every lesson follows: Understand → See → Practice → Reflect → Test → Improve → Progress.
`frontend/src/data/lessons.js` → `karate-stances` is the reference implementation of this schema. New lessons should match its shape, not simplify it.

## Data flow rule
- `data/curriculum/` decides what exists and in what order (levels → modules → lessons), using a stable `id` per lesson, separate from its display `title`.
- `data/lessons/` decides what each lesson actually contains, keyed by that same `id`.
- The UI (`MartialArts.jsx`, `Lesson.jsx`) only ever does `lessons[id]` — it never hardcodes a lesson by name. Missing id = UI shows "Coming next" automatically.

## Lesson id convention
- Module-intro lesson: `{art}-{module}` — e.g. `karate-stances`
- Every other lesson in that module: `{art}-{module}-{slug}` — e.g. `karate-stances-front`, `karate-stances-back`, `karate-stances-horse`

## Top-level folders
- `frontend/` — the React/Vite app (only thing live right now)
- `ai/` — future AI companion logic
- `app/` — future backend/API (auth, progress persistence)
- `assets/` — master media library, symlinked into `frontend/public/assets`
- `knowledge/` — curated technique/principle knowledge feeding curriculum + AI
- `research/` — raw sources backing curriculum decisions
- `docs/` — this file and future decisions
- `experiments/` — prototypes, not production

## Current status (2026-08-17)
- Frontend: home page + Martial Arts flow (style → level → module → lesson) working
- Curriculum: Karate fully outlined (Beginner/Intermediate/Advanced, 12 modules)
- Lessons: 1 of ~30+ written (`karate-stances` / "Understanding Stances")
- Lesson-id refactor (see rule above): agreed, not yet implemented — MartialArts.jsx still hardcodes the one lesson by title match
- Progress tracking, AI companion, other pillars: not started, intentionally
