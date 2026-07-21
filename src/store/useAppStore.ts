import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressState, QuizAttempt, UserSettings } from '../types/domain';

interface AppStore extends ProgressState {
  settings: UserSettings;
  toggleTheme: () => void;
  markTopicComplete: (topicId: string) => void;
  rateFlashcard: (flashcardId: string, rating: 'again' | 'good' | 'easy') => void;
  recordQuizAttempt: (attempt: QuizAttempt) => void;
  practiceInterviewQuestion: (questionId: string) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      completedTopicIds: [],
      practicedInterviewQuestionIds: [],
      flashcardRatings: {},
      quizAttempts: [],
      studyMinutes: 0,
      settings: { theme: 'dark', reducedMotion: false },
      toggleTheme: () =>
        set((state) => ({
          settings: { ...state.settings, theme: state.settings.theme === 'dark' ? 'light' : 'dark' },
        })),
      markTopicComplete: (topicId) =>
        set((state) => ({
          completedTopicIds: state.completedTopicIds.includes(topicId)
            ? state.completedTopicIds
            : [...state.completedTopicIds, topicId],
          lastActivity: new Date().toISOString(),
        })),
      rateFlashcard: (flashcardId, rating) =>
        set((state) => ({
          flashcardRatings: { ...state.flashcardRatings, [flashcardId]: rating },
          lastActivity: new Date().toISOString(),
        })),
      recordQuizAttempt: (attempt) =>
        set((state) => ({ quizAttempts: [...state.quizAttempts, attempt], lastActivity: attempt.attemptedAt })),
      practiceInterviewQuestion: (questionId) =>
        set((state) => ({
          practicedInterviewQuestionIds: state.practicedInterviewQuestionIds.includes(questionId)
            ? state.practicedInterviewQuestionIds
            : [...state.practicedInterviewQuestionIds, questionId],
          lastActivity: new Date().toISOString(),
        })),
    }),
    { name: 'devatlas-store' },
  ),
);
