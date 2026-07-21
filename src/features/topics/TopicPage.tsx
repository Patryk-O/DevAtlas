import { Link, useParams } from 'react-router-dom';
import { getRelatedTopics, getTopicById } from '../../services/topicService';
import { useAppStore } from '../../store/useAppStore';

export function TopicPage() {
  const { topicId = '' } = useParams();
  const topic = getTopicById(topicId);
  const markTopicComplete = useAppStore((state) => state.markTopicComplete);

  if (!topic) {
    return <p className="text-slate-300">Topic not found.</p>;
  }

  const relatedTopics = getRelatedTopics(topic);

  return (
    <article className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-panel p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{topic.estimatedStudyTime} • importance {topic.interviewImportance}/5</p>
        <h1 className="mt-3 text-4xl font-bold text-white">{topic.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{topic.explanation}</p>
        <button className="mt-5 rounded-xl bg-accent px-5 py-3 font-semibold text-slate-950" onClick={() => markTopicComplete(topic.id)}>Mark complete</button>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-panel p-6"><h2 className="text-xl font-semibold text-white">Interview questions</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">{topic.interviewQuestions.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="rounded-2xl border border-white/10 bg-panel p-6"><h2 className="text-xl font-semibold text-white">Common mistakes</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">{topic.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
      {topic.codeExamples.map((example) => <section key={example.title} className="rounded-2xl border border-white/10 bg-panel p-6"><h2 className="text-xl font-semibold text-white">{example.title}</h2><pre className="mt-4 overflow-auto rounded-xl bg-slate-950 p-4 text-sm text-cyan-100"><code>{example.code}</code></pre></section>)}
      <section className="rounded-2xl border border-white/10 bg-panel p-6"><h2 className="text-xl font-semibold text-white">Related topics</h2><div className="mt-3 flex flex-wrap gap-2">{relatedTopics.map((item) => <Link className="rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-100" key={item.id} to={`/topics/${item.id}`}>{item.title}</Link>)}</div></section>
    </article>
  );
}
