---
layout: case-study
title: "Aegis LEO: Autonomous Conjunction Triage Platform"
permalink: /work/aegis-leo/
description: An AI-assisted satellite conjunction triage console for prioritising urgent collision risks.
summary: A solo AI and aerospace prototype that turns high-volume conjunction telemetry into prioritised, explainable operator action.
role: Solo builder
tools:
  - Python
  - Streamlit
  - Machine learning
  - CDM telemetry
year: 2026
cover_image: /assets/img/aegis-leo-dashboard.webp
cover_alt: Aegis LEO operations overview showing fleet KPIs, risk filters, prioritised conjunctions and an operational brief
design_image: /assets/img/aegis-leo-fleet.webp
design_alt: Aegis LEO fleet analysis interface showing orbital risk metrics and controls for a live 3D fleet view
built_image: /assets/img/aegis-leo-model.webp
built_alt: Aegis LEO model performance interface showing validation, regression and tier-classification metrics
design_caption: Live fleet analysis and orbital-risk context
built_caption: Model validation, confidence and performance auditing
comparison_title: From telemetry to operator confidence
comparison_note: The interface pairs spatial risk context with transparent model evidence, so operators can understand both what needs attention and why.
demo_url: https://aegisleo.streamlit.app/
demo_label: Open live platform
problem: Satellite operators process large volumes of Conjunction Data Messages, but conservative or temporarily inflated collision probabilities can create alarm fatigue. When every event looks urgent, genuinely dangerous conjunctions are harder to identify quickly.
process: Built solo in six hours alongside 300+ builders at Autonomous SG 2026, I created a tiered risk-evaluation workflow using machine learning trained on CDM telemetry. The platform combines a live watch feed, archive search, deduplicated alerts with plain-language explanations, 3D relative trajectories, miss-distance landscapes, fleet-wide KPIs and model-confidence auditing. The AI & Aerospace track was supported by Anthropic, AIRBUS, Five Degrees and NUS Hackers.
result: A working decision-support console that prioritises events for manual review and manoeuvre planning while keeping the operator in control. It is designed to retain high recall for serious threats, reduce noise from probable false alarms and make every recommendation easier to inspect.
---
