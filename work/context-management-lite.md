---
layout: case-study
title: Context Management Lite
permalink: /work/context-management-lite/
description: Human-controlled context management for reliable, branching AI conversations.
summary: A CP2107 Odyssey Summer Research project exploring how explicit memory controls can reduce context rot in branching AI chats.
role: Researcher and developer
tools:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Zustand
  - LLMs
year: 2026
cover_image: /assets/img/context-management-poster.webp
cover_alt: Research poster explaining Context Management Lite and its approach to reducing context rot
design_image: /assets/img/context-management-poster.webp
design_alt: Context Management Lite research poster with diagrams of the memory lifecycle and multi-agent runtime
built_image: /assets/img/context-management-workspace.webp
built_alt: Context Management Lite workspace showing a branching conversation graph beside the selected node's prompt and response
interface_images:
  - src: /assets/img/context-management-global-context.webp
    alt: Versioned Global Context Panel with project context, role, operating principles and response format controls
    caption: Versioned Global Context Panel
  - src: /assets/img/context-management-workflow.webp
    alt: Workspace guide explaining shared rules, private branches, merge review and the five specialised AI roles
    caption: Human-controlled memory and merge workflow
github_url: https://github.com/hazelhidayah/Context-Management-Lite
problem: In long, branching AI conversations, earlier instructions, evidence and decisions can be lost, distorted or incorrectly applied. Unrelated branches can contaminate one another, while durable project rules may be silently overwritten.
process: I took over an initial DAG-based conversational prototype and designed an explicit Store–Retrieve–Update memory lifecycle. I implemented branch-private memory isolation, a versioned global context registry, five specialised task roles and a conflict-aware merge workflow with human review.
result: The prototype keeps durable project rules explicit, preserves alternative branches and surfaces conflicts for human resolution before branches are merged.
---
