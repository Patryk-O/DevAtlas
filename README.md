# DevAtlas

DevAtlas is a local-first learning platform for software engineers. The MVP provides a SaaS-style dashboard, interactive knowledge atlas, topic viewer, flashcards, quiz practice, interview mode, progress tracking, search, and settings.

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Tailwind CSS
- Framer Motion
- React Flow
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

```text
src/
  app/
  components/
  features/
  layouts/
  services/
  store/
  data/
  types/
  utils/
```

The UI reads MVP learning content from local JSON files through service modules so future ASP.NET Core API integration can keep the same UI contracts.
