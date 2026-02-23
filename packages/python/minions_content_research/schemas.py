"""
Minions Content-research SDK — Type Schemas
Custom MinionType schemas for Minions Content-research.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

research_source_type = MinionType(
    id="content-research-research-source",
    name="Research source",
    slug="research-source",
    description="A configured source for content ideas and trends.",
    icon="🔍",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="url", type="string", label="url"),
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastCrawledAt", type="string", label="lastCrawledAt"),
    ],
)

topic_cluster_type = MinionType(
    id="content-research-topic-cluster",
    name="Topic cluster",
    slug="topic-cluster",
    description="A group of related topics forming a content pillar.",
    icon="🗂️",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="pillar", type="string", label="pillar"),
        FieldDefinition(name="keywords", type="string", label="keywords"),
        FieldDefinition(name="competitorUrls", type="string", label="competitorUrls"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

keyword_set_type = MinionType(
    id="content-research-keyword-set",
    name="Keyword set",
    slug="keyword-set",
    description="A researched set of keywords with volume and difficulty.",
    icon="🔑",
    schema=[
        FieldDefinition(name="topicClusterId", type="string", label="topicClusterId"),
        FieldDefinition(name="keyword", type="string", label="keyword"),
        FieldDefinition(name="searchVolume", type="number", label="searchVolume"),
        FieldDefinition(name="difficulty", type="select", label="difficulty"),
        FieldDefinition(name="intent", type="select", label="intent"),
        FieldDefinition(name="priority", type="select", label="priority"),
    ],
)

content_brief_type = MinionType(
    id="content-research-content-brief",
    name="Content brief",
    slug="content-brief",
    description="A structured brief for an article to be written.",
    icon="📋",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="topicClusterId", type="string", label="topicClusterId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="targetKeyword", type="string", label="targetKeyword"),
        FieldDefinition(name="outline", type="string", label="outline"),
        FieldDefinition(name="wordCountTarget", type="number", label="wordCountTarget"),
        FieldDefinition(name="tone", type="select", label="tone"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="assignedTo", type="string", label="assignedTo"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    research_source_type,
    topic_cluster_type,
    keyword_set_type,
    content_brief_type,
]

