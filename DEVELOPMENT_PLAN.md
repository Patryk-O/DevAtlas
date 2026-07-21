# DevAtlas Development Plan

## Objective
Create a production-quality, local-first SaaS-style learning platform for software engineers. The MVP should help users learn technologies, explore relationships between topics, practice flashcards and quizzes, prepare for interviews, and track progress without requiring a backend.

## Guiding documents
- `CODEX_CONTEXT.md` is the primary implementation source of truth.
- `PRODUCT_SPEC.md` defines the MVP modules and topic content requirements.
- `ARCHITECTURE.md` defines the frontend stack, layering, and maintainability principles.
- `CONTRIBUTING.md` defines coding conventions and commit style.

## Product scope for MVP
1. Dashboard with learning summary, recommended topics, recent activity, and quick navigation.
2. Knowledge Atlas with an interactive graph of topics and relationships.
3. Search across topics, questions, code examples, and references.
4. Topic Viewer with explanations, diagrams, examples, questions, mistakes, related topics, estimated time, and interview importance.
5. Flashcards for reviewing key concepts.
6. Quiz engine for topic-based practice.
7. Interview Mode with curated questions and answer guidance.
8. Progress tracking for completed topics, quiz scores, flashcard review state, and study time.
9. Settings with dark mode and local preferences.

## Technical approach
- Use React 19, TypeScript, Vite, React Router, Zustand, Tailwind CSS, Framer Motion, React Flow, and Lucide React.
- Keep the application local-first during the MVP by storing source learning content in JSON files.
- Introduce service contracts between UI and data access so a future ASP.NET Core API can replace JSON data without changing UI contracts.
- Use a feature-first source layout:

```text
src/
  app/
  components/
  features/
    dashboard/
    atlas/
    flashcards/
    quiz/
    interview/
    progress/
  layouts/
  hooks/
  services/
  store/
  data/
  types/
  utils/
```

## Data model plan
Define strongly typed models before building feature UI:

- `Topic`: id, title, description, difficulty, interview importance, estimated study time, related topics, interview questions, code examples, common mistakes, references, and optional diagram metadata.
- `Flashcard`: id, topic id, front, back, difficulty, tags, and review metadata.
- `QuizQuestion`: id, topic id, prompt, answer choices, correct answer, explanation, difficulty, and tags.
- `ProgressState`: completed topic ids, quiz attempts, flashcard review state, study time, and last activity.
- `UserSettings`: theme preference, reduced motion preference, and local display preferences.

## Implementation phases

### Phase 1: Project foundation
- Initialize the React + TypeScript + Vite application.
- Configure TypeScript strict mode, linting, formatting, and basic scripts.
- Configure Tailwind CSS, global styles, theme tokens, and dark mode.
- Add React Router application shell and base layouts.
- Create the feature-first folder structure.
- Add base shared components: buttons, cards, badges, inputs, empty states, loading states, and page headers.

### Phase 2: Domain contracts and local data
- Create shared TypeScript types for topics, flashcards, quizzes, progress, and settings.
- Add initial JSON content for a small but representative topic set.
- Build service modules that read local JSON data through stable interfaces.
- Add validation-friendly data conventions so future content can be expanded safely.
- Add utility functions for difficulty labels, topic relationships, search indexing, and progress calculations.

### Phase 3: App shell and navigation
- Implement the main layout, sidebar or top navigation, responsive mobile navigation, and route structure.
- Add dashboard, atlas, topic, flashcards, quiz, interview, progress, and settings routes.
- Add persistent dark mode using Zustand and local storage.
- Add route-level lazy loading where it meaningfully reduces initial bundle size.

### Phase 4: Dashboard MVP
- Show learning progress summary, recommended next topics, important interview topics, and quick actions.
- Surface recent quiz and flashcard activity from local progress state.
- Keep dashboard cards reusable so progress and topic modules can share them.

### Phase 5: Knowledge Atlas MVP
- Use React Flow to render topic nodes and relationship edges.
- Encode topic difficulty and interview importance visually.
- Support selecting a topic, opening topic details, zooming, panning, and responsive graph controls.
- Keep graph transformation logic outside UI components.

### Phase 6: Topic Viewer MVP
- Build a topic detail route that renders all required topic sections.
- Support related topic navigation.
- Render code examples with accessible formatting.
- Add clear sections for common mistakes and interview questions.
- Ensure the topic view works well on mobile screens.

### Phase 7: Search MVP
- Implement client-side search over topic title, description, questions, code examples, mistakes, and references.
- Add keyboard-friendly search input and result navigation.
- Reuse search results in the dashboard and atlas where appropriate.

### Phase 8: Flashcards MVP
- Display flashcards by topic or mixed review mode.
- Add reveal-answer interaction and simple self-rating.
- Persist review state locally.
- Prepare the data shape for later spaced repetition logic.

### Phase 9: Quiz MVP
- Implement topic-based quiz sessions.
- Support single-answer questions, scoring, explanations, and completion summaries.
- Persist quiz attempts in progress state.
- Keep quiz engine logic separate from presentation components.

### Phase 10: Interview Mode MVP
- Present interview questions by topic and importance.
- Add answer reveal, guidance, and common mistake prompts.
- Track practiced questions locally.
- Prepare the module for future AI-assisted interview simulations.

### Phase 11: Progress and Settings MVP
- Build a progress page with completed topics, study time, quiz performance, and flashcard review summaries.
- Build settings for theme and local preferences.
- Ensure all progress and settings state is persisted safely in local storage.

### Phase 12: Quality, accessibility, and release readiness
- Add smoke tests or component tests for critical flows.
- Verify strict TypeScript compilation.
- Check responsive behavior across mobile, tablet, and desktop widths.
- Review accessibility for keyboard navigation, focus states, contrast, semantic headings, and ARIA labels where needed.
- Review bundle size and lazy loading.
- Update documentation with run commands, project structure, and contribution notes.

## Development rules
- Implement incrementally and keep commits small.
- Use functional React components only.
- Keep one component per file.
- Use PascalCase for components and camelCase for variables and functions.
- Keep UI components focused on rendering; move business logic into hooks, services, store modules, or utilities.
- Prefer composition, strong typing, reusable components, and maintainable solutions over clever abstractions.
- Avoid unnecessary dependencies.

## Suggested first build sequence
1. Scaffold the Vite React TypeScript app and install required dependencies.
2. Add Tailwind CSS and base design tokens.
3. Create the source folder structure and shared TypeScript domain models.
4. Add seed JSON data for topics, flashcards, and quizzes.
5. Implement local data services and Zustand stores.
6. Build app shell, routing, layout, and dark mode.
7. Implement Dashboard, then Topic Viewer, then Knowledge Atlas.
8. Add Search, Flashcards, Quiz, Interview Mode, Progress, and Settings.
9. Run quality checks, polish UX, and document the MVP.

## Definition of done for MVP
- All MVP routes are implemented and responsive.
- Topic content includes every required field from the product specification.
- Data access happens through services rather than direct UI imports.
- Progress, settings, quiz attempts, and flashcard review state persist locally.
- TypeScript strict mode passes.
- Core user flows are covered by tests or documented smoke checks.
- The application is ready for a future backend migration without rewriting feature UI contracts.
