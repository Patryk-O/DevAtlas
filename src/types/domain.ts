export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  language: string;
  title: string;
  code: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  explanation: string;
  difficulty: Difficulty;
  interviewImportance: 1 | 2 | 3 | 4 | 5;
  estimatedStudyTime: string;
  relatedTopics: string[];
  interviewQuestions: string[];
  codeExamples: CodeExample[];
  commonMistakes: string[];
  references: string[];
  diagram?: string;
}

export interface Flashcard {
  id: string;
  topicId: string;
  front: string;
  back: string;
  difficulty: Difficulty;
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  topicId: string;
  prompt: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty;
  tags: string[];
}

export interface QuizAttempt {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  attemptedAt: string;
}

export interface ProgressState {
  completedTopicIds: string[];
  practicedInterviewQuestionIds: string[];
  flashcardRatings: Record<string, 'again' | 'good' | 'easy'>;
  quizAttempts: QuizAttempt[];
  studyMinutes: number;
  lastActivity?: string;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  reducedMotion: boolean;
}
