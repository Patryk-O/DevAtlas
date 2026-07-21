import { Link } from 'react-router-dom';
import type { Topic } from '../types/domain';
import { difficultyLabels, getImportanceLabel } from '../utils/topicUtils';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link className="group rounded-2xl border border-white/10 bg-panel/80 p-5 transition hover:-translate-y-1 hover:border-accent/70" to={`/topics/${topic.id}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{topic.description}</p>
        </div>
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-cyan-200">{difficultyLabels[topic.difficulty]}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        <span>{topic.estimatedStudyTime}</span>
        <span>•</span>
        <span>{getImportanceLabel(topic.interviewImportance)}</span>
      </div>
    </Link>
  );
}
