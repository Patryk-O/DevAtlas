import { useMemo, useState } from 'react';
import { TopicCard } from '../../components/TopicCard';
import { getTopics } from '../../services/topicService';
import { searchTopics } from '../../utils/topicUtils';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const topics = getTopics();
  const results = useMemo(() => searchTopics(topics, query), [query, topics]);

  return (
    <section className="space-y-6">
      <div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Search</p><h1 className="text-4xl font-bold text-white">Find concepts fast</h1></div>
      <input className="w-full rounded-2xl border border-white/10 bg-panel px-5 py-4 text-white outline-none ring-accent/40 focus:ring-4" placeholder="Search topics, mistakes, interview questions..." value={query} onChange={(event) => setQuery(event.target.value)} />
      <div className="grid gap-4 lg:grid-cols-2">{results.map((topic) => <TopicCard key={topic.id} topic={topic} />)}</div>
    </section>
  );
}
