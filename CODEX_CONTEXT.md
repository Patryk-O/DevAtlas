# DevAtlas - Master Context for Codex

## Mission
Build a production-quality learning platform for software engineers. The project should look and feel like a commercial SaaS product while remaining fully local-first during MVP.

## Tech Stack
- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Tailwind CSS
- Framer Motion
- React Flow
- Lucide React

## Architecture
Feature-first structure:
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

## Design Principles
- SOLID
- Clean Architecture mindset
- Reusable components
- Strong typing
- Small focused files
- Composition over inheritance
- Responsive by default

## MVP Features
1. Dashboard
2. Interactive knowledge map
3. Search
4. Topic details
5. Flashcards
6. Quiz engine
7. Progress tracking
8. Dark mode

## Knowledge Model
Every topic should contain:
- id
- title
- description
- difficulty
- interview importance (1-5)
- estimated study time
- related topics
- interview questions
- code examples
- common mistakes
- references

## UI Goal
Inspired by roadmap.sh, Obsidian, VS Code and JetBrains IDEs.
Modern, animated, minimalistic and responsive.

## Development Rules
Implement features incrementally. Keep commits small. Avoid unnecessary dependencies. Prefer maintainable solutions over clever ones. Prepare every feature for future backend integration with ASP.NET Core.

## Long-term Vision
Future versions should support authentication, cloud synchronization, AI-assisted learning, spaced repetition, interview simulations and analytics.

Treat this document as the primary source of truth for implementation decisions unless future project documentation overrides specific sections.