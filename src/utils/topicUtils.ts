import type { Difficulty, Topic } from '../types/domain';

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export function getImportanceLabel(value: Topic['interviewImportance']): string {
  return `${value}/5 interview`;
}

export function searchTopics(topics: Topic[], query: string): Topic[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return topics;
  }

  return topics.filter((topic) =>
    [
      topic.title,
      topic.description,
      topic.explanation,
      ...topic.interviewQuestions,
      ...topic.commonMistakes,
      ...topic.references,
      ...topic.codeExamples.map((example) => `${example.title} ${example.code}`),
    ]
      .join(' ')
      .toLowerCase()
      .includes(normalized),
  );
}
