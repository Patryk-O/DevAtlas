import { StatCard } from '../../components/StatCard';
import { getTopics } from '../../services/topicService';
import { useAppStore } from '../../store/useAppStore';

export function ProgressPage() {
  const topics = getTopics();
  const { completedTopicIds, flashcardRatings, quizAttempts, practicedInterviewQuestionIds } = useAppStore();
  const correct = quizAttempts.filter((attempt) => attempt.isCorrect).length;

  return <section className="space-y-6"><div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Progress</p><h1 className="text-4xl font-bold text-white">Local learning analytics</h1></div><div className="grid gap-4 md:grid-cols-4"><StatCard label="Completed" value={`${completedTopicIds.length}/${topics.length}`} helper="topics done" /><StatCard label="Quiz score" value={`${correct}/${quizAttempts.length}`} helper="correct answers" /><StatCard label="Flashcards" value={String(Object.keys(flashcardRatings).length)} helper="rated cards" /><StatCard label="Interview" value={String(practicedInterviewQuestionIds.length)} helper="questions practiced" /></div></section>;
}
