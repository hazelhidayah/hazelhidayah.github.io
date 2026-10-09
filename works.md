---
layout: page
title: Works
permalink: /works/
hero_kicker: Portfolio
hero_subtitle: A mix of tech experiments and visual work. Some are polished, some are in progress.
---

<section class="section" id="tech-stuff">
  <div class="section-inner">
    <div class="section-label">Tech Stuff</div>
    <h2 class="section-title">Interfaces &amp; little tools</h2>

    <div class="work-grid">
      <article class="work-card work-card--featured">
        <a
          href="{{ '/assets/img/context-management-poster.png' | relative_url }}"
          class="work-visual work-visual--poster"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Context Management Lite research poster"
        >
          <img
            src="{{ '/assets/img/context-management-poster.png' | relative_url }}"
            alt="Research poster for Context Management Lite"
            loading="lazy"
          />
        </a>
        <div class="work-card__body">
          <div class="work-meta">AI Systems · Research · 2026</div>
          <h3 class="work-title">Context Management Lite</h3>
          <p class="work-desc">
            For the CP2107 Odyssey Summer Research Project, I took over a DAG-based conversational
            prototype and architected a human-controlled memory system to reduce context rot in
            branching AI chats. The system uses an explicit Store–Retrieve–Update lifecycle,
            branch-private memory isolation and a versioned global context registry.
          </p>
          <p class="work-desc">
            I also developed a five-role multi-agent runtime and a conflict-aware merge workflow
            that requires transparent, human-in-the-loop resolution before conversational branches
            are fused. Mentored by Bai Jingwen.
          </p>
          <ul class="work-stack" aria-label="Technologies used">
            <li>React</li><li>TypeScript</li><li>Vite</li><li>Tailwind CSS</li><li>Zustand</li><li>LLMs</li>
          </ul>
          <div class="work-links">
            <a href="https://github.com/hazelhidayah/Context-Management-Lite" class="btn-ghost" target="_blank" rel="noopener noreferrer">View repository</a>
            <a href="{{ '/assets/img/context-management-poster.png' | relative_url }}" class="btn-ghost" target="_blank" rel="noopener noreferrer">View research poster</a>
          </div>
        </div>
      </article>

      <article class="work-card">
        <a
          href="https://github.com/SQ77/factSnap"
          class="work-visual work-visual--icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the FactSnap repository"
        >
          <img src="{{ '/assets/img/factsnap-icon.png' | relative_url }}" alt="FactSnap app icon" loading="lazy" />
        </a>
        <div class="work-card__body">
          <div class="work-meta">Hackathon Finalist · Team “plebs” · 2025</div>
          <h3 class="work-title">FactSnap</h3>
          <p class="work-desc">
            My first hackathon—and we made it to the final round. Built with my teammates from
            “plebs,” FactSnap is a mobile app designed to combat misinformation and promote cyber
            awareness.
          </p>
          <p class="work-desc">
            Users can upload or photograph questionable content and receive instant credibility
            feedback powered by AI and reliable fact-checking sources. Interactive quizzes,
            real-life scenarios and a leaderboard turn digital literacy into a simple, social and
            engaging learning experience.
          </p>
          <ul class="work-stack" aria-label="Technologies used">
            <li>React Native</li><li>Expo</li><li>Supabase</li><li>OpenRouter</li><li>Google Cloud Vision</li>
          </ul>
          <div class="work-links">
            <a href="https://github.com/SQ77/factSnap" class="btn-ghost" target="_blank" rel="noopener noreferrer">View repository</a>
          </div>
        </div>
      </article>

      <article class="work-card">
        <a
          href="https://xd.adobe.com/view/0da1ccb5-7e4d-4a56-9f38-09b1e9cfe299-58f2/"
          class="work-visual work-visual--landscape"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the interactive SCDF website redesign prototype"
        >
          <img
            src="{{ '/assets/img/scdf-redesign.png' | relative_url }}"
            alt="SCDF website redesign homepage featuring Singapore Civil Defence Force personnel"
            loading="lazy"
          />
        </a>
        <div class="work-meta">UI/UX · Web Platform</div>
        <h3 class="work-title">SCDF Website Redesign</h3>
        <p class="work-desc">
          Led a 3‑month redesign of SCDF’s public‑facing website as Creative Director, focusing on
          accessibility, information architecture and a calmer experience for diverse users.
          Conducted 30+ interviews, synthesised pain points and delivered high‑fidelity, interactive
          prototypes to SCDF and GovTech.
        </p>
        <div class="work-links">
          <a href="https://xd.adobe.com/view/0da1ccb5-7e4d-4a56-9f38-09b1e9cfe299-58f2/" class="btn-ghost" target="_blank" rel="noopener noreferrer"
            >View prototype</a
          >
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb tech-2"></div>
        <div class="work-meta">UI/UX · Application</div>
        <h3 class="work-title">MyResponder Redesign</h3>
        <p class="work-desc">
          Redesigned SCDF’s MyResponder app for both mobile and desktop in a three‑person team.
          Created personas and user journeys for multiple stakeholder groups, then validated flows
          with user testing to make time‑critical actions clearer and faster.
        </p>
        <div class="work-links">
          <a href="#" class="btn-ghost">Desktop &amp; mobile views</a>
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb tech-1"></div>
        <div class="work-meta">UI/UX · Web Application</div>
        <h3 class="work-title">Insidr · AI Networking Platform</h3>
        <p class="work-desc">
          Designed and prototyped Insidr, an AI‑driven networking tool for students and fresh
          grads, in a 4‑week pair project. Explored AI‑powered job search and discussion spaces,
          ran user tests and pitched the concept—earning a top‑two finish and a sponsored mentorship
          with Meraki Academy.
        </p>
        <div class="work-links">
          <a href="https://tinyurl.com/28bokqgj" class="btn-ghost" target="_blank" rel="noopener noreferrer"
            >View prototype</a
          >
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section" id="creative-work">
  <div class="section-inner">
    <div class="creative-section-header">
      <div>
        <div class="section-label">Creative Work</div>
        <h2 class="section-title">Posters, visuals &amp; experiments</h2>
      </div>
      <a
        href="https://www.canva.com/design/DAGLNfRuDuw/SxKcxfK1m9HqCtM2Q4lvSA/view?utm_content=DAGLNfRuDuw&amp;utm_campaign=designshare&amp;utm_medium=link2&amp;utm_source=uniquelinks&amp;utlId=habbf1fb70b#1"
        class="btn btn--dark"
        target="_blank"
        rel="noopener noreferrer"
      >View full creative portfolio <span aria-hidden="true">↗</span></a>
    </div>

    <div class="work-grid">
      <article class="work-card work-card--featured work-card--emberra">
        <a
          href="{{ '/assets/docs/emberra-brand-guidelines.pdf' | relative_url }}"
          class="work-visual work-visual--landscape"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Emberra brand guidelines"
        >
          <img
            src="{{ '/assets/img/emberra-preview.jpg' | relative_url }}"
            alt="Emberra brand presentation showing the app concept and flame logo"
            loading="lazy"
          />
        </a>
        <div class="work-card__body">
          <div class="work-meta">Brand Strategy · Identity Design · Product Concept</div>
          <h3 class="work-title">Emberra · Where Stories Ignite</h3>
          <p class="work-desc">
            Emberra is a conceptual digital platform that brings the warmth of fireside chats into
            a virtual space for meaningful conversation. I developed the brand from the ground up:
            its story, audience, positioning, voice, visual identity and product direction.
          </p>
          <p class="work-desc">
            The identity centres on a flame-shaped mark whose negative space suggests people in
            conversation and a hidden “E.” A warm ember palette, intimate imagery and welcoming
            onboarding screens extend the system across the app, social content, posters and
            environmental mockups.
          </p>
          <ul class="work-stack" aria-label="Project disciplines">
            <li>Brand strategy</li><li>Logo design</li><li>Visual identity</li><li>UI concept</li><li>Campaign design</li>
          </ul>
          <div class="work-links">
            <a href="{{ '/assets/docs/emberra-brand-guidelines.pdf' | relative_url }}" class="btn-ghost" target="_blank" rel="noopener noreferrer">View brand guide</a>
            <a href="https://www.canva.com/design/DAGWMCJoK2g/TFLXWhQXAwqSuzV7Ndq7UA/view?utm_content=DAGWMCJoK2g&amp;utm_campaign=designshare&amp;utm_medium=link2&amp;utm_source=uniquelinks&amp;utlId=hebe1950da4#1" class="btn-ghost" target="_blank" rel="noopener noreferrer">View on Canva</a>
          </div>
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb creative-1"></div>
        <div class="work-meta">Print Design</div>
        <h3 class="work-title">Man VS Miracle · Card Game</h3>
        <p class="work-desc">
          Illustrated and designed a full set of game cards—characters, backgrounds and actions—for
          a client brief, turning open‑ended prompts into a cohesive, story‑driven visual system.
        </p>
        <div class="work-links">
          <a href="#" class="btn-ghost">See cards</a>
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb creative-1"></div>
        <div class="work-meta">Campaigns &amp; Journalism</div>
        <h3 class="work-title">Stories, Campaigns &amp; Motion</h3>
        <p class="work-desc">
          Selected journalism pieces, video stories and social campaigns—from “I AM the Movement”
          to work for BMDP and Singapore Night Festival—where I combined research, writing and
          visual work.
        </p>
        <div class="work-links">
          <a
            href="https://www.canva.com/design/DAGLNfRuDuw/SxKcxfK1m9HqCtM2Q4lvSA/view?utm_content=DAGLNfRuDuw&amp;utm_campaign=designshare&amp;utm_medium=link2&amp;utm_source=uniquelinks&amp;utlId=habbf1fb70b#1"
            class="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            >View full creative portfolio</a
          >
        </div>
      </article>
    </div>
  </div>
</section>
