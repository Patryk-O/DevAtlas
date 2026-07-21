import { motion } from 'framer-motion';
import { StatCard } from '../../components/StatCard';
import { TopicCard } from '../../components/TopicCard';
import { getTopics } from '../../services/topicService';
import { useAppStore } from '../../store/useAppStore';

export function DashboardPage() {
  const topics = getTopics();
  const { completedTopicIds, flashcardRatings, quizAttempts } = useAppStore();
  const topTopics = [...topics].sort((a, b) => b.interviewImportance - a.interviewImportance).slice(0, 3);

  return (
    <section className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-violet-500/10 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">MVP learning cockpit</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">Build interview-ready engineering knowledge with an interactive atlas.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Start with local-first content, practice questions, flashcards and progress tracking prepared for future backend sync.</p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Topics" value={`${completedTopicIds.length}/${topics.length}`} helper="completed learning nodes" />
        <StatCard label="Flashcards" value={String(Object.keys(flashcardRatings).length)} helper="reviewed locally" />
        <StatCard label="Quiz attempts" value={String(quizAttempts.length)} helper="answers recorded" />
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-white">High impact topics</h2>
        <div className="grid gap-4 lg:grid-cols-3">{topTopics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}</div>
      </div>
    </section>
  );
}
