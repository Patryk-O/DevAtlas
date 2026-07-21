import topics from '../data/topics.json';
import type { Topic } from '../types/domain';

const topicList = topics as Topic[];

export function getTopics(): Topic[] {
  return topicList;
}

export function getTopicById(id: string): Topic | undefined {
  return topicList.find((topic) => topic.id === id);
}

export function getRelatedTopics(topic: Topic): Topic[] {
  return topic.relatedTopics.map(getTopicById).filter((item): item is Topic => Boolean(item));
}
