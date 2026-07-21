import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { AtlasPage } from '../features/atlas/AtlasPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { FlashcardsPage } from '../features/flashcards/FlashcardsPage';
import { InterviewPage } from '../features/interview/InterviewPage';
import { ProgressPage } from '../features/progress/ProgressPage';
import { QuizPage } from '../features/quiz/QuizPage';
import { SearchPage } from '../features/search/SearchPage';
import { SettingsPage } from '../features/settings/SettingsPage';
import { TopicPage } from '../features/topics/TopicPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'atlas', element: <AtlasPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'topics/:topicId', element: <TopicPage /> },
      { path: 'flashcards', element: <FlashcardsPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'interview', element: <InterviewPage /> },
      { path: 'progress', element: <ProgressPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
