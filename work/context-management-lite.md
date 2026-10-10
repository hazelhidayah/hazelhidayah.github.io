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
cover_image: /assets/img/context-management-poster.png
cover_alt: Research poster explaining Context Management Lite and its approach to reducing context rot
design_image: /assets/img/context-management-poster.png
design_alt: Context Management Lite research poster with diagrams of the memory lifecycle and multi-agent runtime
github_url: https://github.com/hazelhidayah/Context-Management-Lite
problem: In long, branching AI conversations, earlier instructions, evidence and decisions can be lost, distorted or incorrectly applied. Unrelated branches can contaminate one another, while durable project rules may be silently overwritten.
process: I took over an initial DAG-based conversational prototype and designed an explicit Store–Retrieve–Update memory lifecycle. I implemented branch-private memory isolation, a versioned global context registry, five specialised task roles and a conflict-aware merge workflow with human review.
result: The prototype keeps durable project rules explicit, preserves alternative branches and surfaces conflicts for human resolution before branches are merged.
---
