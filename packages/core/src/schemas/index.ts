/**
 * @module @minions-content-research/sdk/schemas
 * Custom MinionType schemas for Minions Content-research.
 */

import type { MinionType } from 'minions-sdk';

export const researchsourceType: MinionType = {
  id: 'content-research-research-source',
  name: 'Research source',
  slug: 'research-source',
  description: 'A configured source for content ideas and trends.',
  icon: '🔍',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastCrawledAt', type: 'string', label: 'lastCrawledAt' },
  ],
};

export const topicclusterType: MinionType = {
  id: 'content-research-topic-cluster',
  name: 'Topic cluster',
  slug: 'topic-cluster',
  description: 'A group of related topics forming a content pillar.',
  icon: '🗂️',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'pillar', type: 'string', label: 'pillar' },
    { name: 'keywords', type: 'string', label: 'keywords' },
    { name: 'competitorUrls', type: 'string', label: 'competitorUrls' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const keywordsetType: MinionType = {
  id: 'content-research-keyword-set',
  name: 'Keyword set',
  slug: 'keyword-set',
  description: 'A researched set of keywords with volume and difficulty.',
  icon: '🔑',
  schema: [
    { name: 'topicClusterId', type: 'string', label: 'topicClusterId' },
    { name: 'keyword', type: 'string', label: 'keyword' },
    { name: 'searchVolume', type: 'number', label: 'searchVolume' },
    { name: 'difficulty', type: 'select', label: 'difficulty' },
    { name: 'intent', type: 'select', label: 'intent' },
    { name: 'priority', type: 'select', label: 'priority' },
  ],
};

export const contentbriefType: MinionType = {
  id: 'content-research-content-brief',
  name: 'Content brief',
  slug: 'content-brief',
  description: 'A structured brief for an article to be written.',
  icon: '📋',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'topicClusterId', type: 'string', label: 'topicClusterId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'targetKeyword', type: 'string', label: 'targetKeyword' },
    { name: 'outline', type: 'string', label: 'outline' },
    { name: 'wordCountTarget', type: 'number', label: 'wordCountTarget' },
    { name: 'tone', type: 'select', label: 'tone' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'assignedTo', type: 'string', label: 'assignedTo' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  researchsourceType,
  topicclusterType,
  keywordsetType,
  contentbriefType,
];

