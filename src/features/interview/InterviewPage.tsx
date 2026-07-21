import { getTopics } from '../../services/topicService';
import { useAppStore } from '../../store/useAppStore';

export function InterviewPage() {
  const topics = getTopics();
  const practiceInterviewQuestion = useAppStore((state) => state.practiceInterviewQuestion);
  const questions = topics.flatMap((topic) => topic.interviewQuestions.map((question, index) => ({ id: `${topic.id}-${index}`, topic: topic.title, importance: topic.interviewImportance, question })));

  return <section className="space-y-6"><div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Interview Mode</p><h1 className="text-4xl font-bold text-white">Curated technical questions</h1></div><div className="grid gap-4">{questions.map((item) => <article className="rounded-2xl border border-white/10 bg-panel p-5" key={item.id}><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-cyan-200">{item.topic} • importance {item.importance}/5</p><button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200" onClick={() => practiceInterviewQuestion(item.id)}>Mark practiced</button></div><h2 className="mt-3 text-xl font-semibold text-white">{item.question}</h2><p className="mt-2 text-slate-400">Answer out loud, mention trade-offs, then connect the concept to production maintainability.</p></article>)}</div></section>;
}
