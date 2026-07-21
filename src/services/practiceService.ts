import flashcards from '../data/flashcards.json';
import quizQuestions from '../data/quizQuestions.json';
import type { Flashcard, QuizQuestion } from '../types/domain';

export function getFlashcards(): Flashcard[] {
  return flashcards as Flashcard[];
}

export function getQuizQuestions(): QuizQuestion[] {
  return quizQuestions as QuizQuestion[];
}
