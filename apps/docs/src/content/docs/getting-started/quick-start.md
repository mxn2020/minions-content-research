---
title: Quick Start
description: Get up and running with Minions Content-research in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-content-research/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_content_research import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
content-research info
```
