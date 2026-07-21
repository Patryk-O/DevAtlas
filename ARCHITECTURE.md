# DevAtlas Architecture

## Frontend
- React 19 + TypeScript + Vite
- Feature-first architecture
- Zustand for global state
- React Router for navigation
- Tailwind CSS for styling
- React Flow for the knowledge graph
- Framer Motion for animations

## Layers
Presentation -> Features -> Store -> Services -> Data

## Data
Initially JSON files. Future migration to ASP.NET Core API without changing UI contracts.

## Key principles
- Reusable components
- Strong typing
- No business logic inside UI components
- Lazy loading where appropriate
- Mobile-first responsive design