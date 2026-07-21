import ReactFlow, { Background, Controls, type Edge, type Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { getTopics } from '../../services/topicService';

export function AtlasPage() {
  const topics = getTopics();
  const nodes: Node[] = topics.map((topic, index) => ({ id: topic.id, position: { x: (index % 2) * 340, y: Math.floor(index / 2) * 180 }, data: { label: `${topic.title} • ${topic.interviewImportance}/5` }, className: 'atlas-node' }));
  const edges: Edge[] = topics.flatMap((topic) => topic.relatedTopics.map((target) => ({ id: `${topic.id}-${target}`, source: topic.id, target, animated: true })));

  return (
    <section className="space-y-6">
      <div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Knowledge Atlas</p><h1 className="text-4xl font-bold text-white">Interactive topic graph</h1></div>
      <div className="h-[640px] overflow-hidden rounded-3xl border border-white/10 bg-panel">
        <ReactFlow nodes={nodes} edges={edges} fitView><Background /><Controls /></ReactFlow>
      </div>
    </section>
  );
}
