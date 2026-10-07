# DOJOMIND AI — PROJECT CONTEXT & MASTER SPECIFICATION

## 1. PROJECT IDENTITY
- **Name:** DojoMind AI
- **Current Phase:** Frontend-first prototype / foundation (React + Vite).
- **Hosting:** GitHub Pages (mrsmile-build.github.io/dojomind-ai/).
- **Repository Root:** ~/dojo-mind-ai

## 2. CORE PRODUCT PHILOSOPHY
- **Architecture before AI:** The underlying data model and UI must be rock-solid before integrating complex AI backends.
- **Expert-Level Accuracy:** No generic, shallow content. Techniques must be grounded in verified, cross-checked sources.
- **No Fake Assets:** If a real reference photo is not available, we use precise, code-generated technical diagrams (e.g., BodyPositionDiagram.jsx) rather than misleading stock images.
- **Universal Design:** The lesson schema must eventually support not just Martial Arts, but Meditation, Breathing, and other skill domains.

## 3. CURRENT STATE SNAPSHOT (FACT)
**Already Implemented & Verified:**
- Home page + Martial Arts flow (style -> level -> module -> lesson).
- "Curriculum in development" fallback for non-Karate styles (no crashes).
- Karate -> Beginner -> Stances -> "Understanding Stances" (fully rendered).
- Custom SVG-based BodyPositionDiagram.jsx for precise, code-generated technique visualization.
- Lesson architecture: Objectives, diagrams, sections, principles, mistakes, practice, reflection, and knowledge checks.
- Production build pipeline configured via GitHub Actions.

**Current Major Architectural Direction:**
- Universal skill-learning engine with a specialized "Martial Arts Intelligence Layer".

## 4. DATA FLOW RULES (DECISION)
- data/curriculum/ decides what exists and in what order, using a stable id per lesson.
- data/lessons.js decides what each lesson actually contains, keyed by that same id.
- The UI only ever does lessons[id]. Missing id = UI shows "Coming next" automatically.
- Lesson ID convention: {art}-{module} for intros, {art}-{module}-{slug} for specific lessons.

## 5. DEVELOPMENT & VERIFICATION RULES
1. **Audit First:** Never overwrite existing files without verifying their current state.
2. **Path Safety:** All asset paths must respect the /dojomind-ai/ base path for GitHub Pages compatibility.
3. **Safety First:** Grappling arts require practitioner-level validation for safety.
4. **No Duplication:** Check existing components before building new ones.

## 6. HOW A NEW AI/DEVELOPER SHOULD WORK
1. Read this document and docs/ARCHITECTURE.md to understand the boundaries.
2. Check docs/ROADMAP.md for the immediate task list.
3. Make changes in small, verifiable increments.
4. Test locally via npm run dev in Termux before pushing.
5. Update this document if a core architectural decision changes.
