![CI](https://github.com/mxn2020/minions-content-research-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-content-research

**Research sources, topic clusters, keyword sets, and content briefs**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-content-research/sdk minions-sdk

# Python
pip install minions-content-research

# CLI (global)
npm install -g @minions-content-research/cli
```

---

## CLI

```bash
# Show help
content-research --help
```

---

## Python SDK

```python
from minions_content_research import create_client

client = create_client()
```

---

## Project Structure

```
minions-content-research/
  packages/
    core/           # TypeScript core library (@minions-content-research/sdk on npm)
    python/         # Python SDK (minions-content-research on PyPI)
    cli/            # CLI tool (@minions-content-research/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [content-research.minions.help](https://content-research.minions.help)
- Blog: [content-research.minions.blog](https://content-research.minions.blog)
- App: [content-research.minions.wtf](https://content-research.minions.wtf)

---

## License

[MIT](LICENSE)
