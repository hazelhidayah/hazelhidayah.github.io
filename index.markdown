---
layout: default
title: Home
description: "Hazel Hidayah — Computer Science student, designer, and creative technologist in Singapore."
---

<section class="home-hero" id="top">
  <div class="section-inner home-hero__grid">
    <div class="home-hero__copy reveal">
      <p class="eyebrow">Hello, I’m</p>
      <h1>Hazel<br /><em>Hidayah.</em></h1>
      <p class="hero-role">Coder <span>·</span> Designer <span>·</span> Storyteller</p>
      <p class="hero-intro">
        I blend code, design and a little bit of chaos to make digital experiences that feel
        thoughtful, useful and human.
      </p>
      <div class="hero-actions">
        <a href="#selected-work" class="btn btn--dark">Explore my work <span aria-hidden="true">↘</span></a>
        <a href="{{ '/about/' | relative_url }}" class="text-link">More about me <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <div class="portrait-wrap reveal reveal--delay" aria-label="Portrait of Hazel Hidayah">
      <span class="portrait-note">Malay-Chinese, made in Singapore</span>
      <div class="portrait-frame">
        <img src="{{ '/assets/img/profile.webp' | relative_url }}" alt="Hazel Hidayah" />
      </div>
      <span class="portrait-mark" aria-hidden="true">好奇心</span>
    </div>
  </div>
  <a class="scroll-cue" href="#about-preview" aria-label="Scroll to introduction">scroll <span>↓</span></a>
</section>

<section class="about-preview" id="about-preview">
  <div class="section-inner about-preview__grid">
    <div class="about-preview__heading">
      <p class="section-number">01 / About <span class="section-number__han" lang="zh">· 一</span></p>
      <h2>One brain,<br /><em>two worlds.</em></h2>
      <p class="about-vertical" lang="zh">好奇心</p>
    </div>
    <div class="about-preview__body">
      <p class="lead">
        I’m a Computer Science student at NUS who started out in Mass Communication, which means
        I care as much about the story and the person as I do about the system underneath.
      </p>
      <p>
        I’m drawn to UI/UX, front-end development and anything that turns a messy problem into a
        calm, clear experience. When I’m not debugging, I’m probably designing, working out or
        learning a skill I definitely did not need to pick up at 2am.
      </p>
      <div class="about-actions">
        <a href="{{ '/about/' | relative_url }}" class="text-link">Read my story <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
</section>

<section class="selected-work" id="selected-work">
  <div class="section-inner">
    <div class="section-heading">
      <div>
        <p class="section-number">02 / Selected work <span class="section-number__han" lang="zh">· 二</span></p>
        <h2>Things I’m<br /><em>proud of.</em></h2>
      </div>
      <a href="{{ '/works/' | relative_url }}" class="text-link">See all work <span aria-hidden="true">→</span></a>
    </div>

    <div class="project-list">
      <a class="project-row" href="{{ '/work/context-management-lite/' | relative_url }}">
        <span class="project-index">01</span>
        <span class="project-info">
          <span class="project-kicker">AI systems · Summer research</span>
          <strong>Context Management Lite</strong>
          <span>Human-controlled memory for reliable, branching AI conversations.</span>
          <span class="project-details"><span>Role: Researcher &amp; developer</span><span>Tools: React, TypeScript, LLMs</span></span>
        </span>
        <span class="project-year">2026</span>
        <span class="project-arrow" aria-hidden="true">→</span>
        <span class="project-preview" aria-hidden="true">
          <img src="{{ '/assets/img/context-management-poster.webp' | relative_url }}" alt="" loading="lazy" />
        </span>
      </a>

      <a class="project-row" href="{{ '/work/factsnap/' | relative_url }}">
        <span class="project-index">02</span>
        <span class="project-info">
          <span class="project-kicker">Hackathon finalist · Mobile AI/OCR</span>
          <strong>FactSnap</strong>
          <span>A social fact-checking app built with team “plebs” to make digital literacy engaging.</span>
          <span class="project-details"><span>Role: Frontend wireframing &amp; UI implementation</span><span>Tools: React Native, Expo, Supabase</span></span>
        </span>
        <span class="project-year">2025</span>
        <span class="project-arrow" aria-hidden="true">→</span>
        <span class="project-preview" aria-hidden="true">
          <img src="{{ '/assets/img/factsnap-community.webp' | relative_url }}" alt="" loading="lazy" />
        </span>
      </a>

      <a class="project-row" href="{{ '/work/scdf-redesign/' | relative_url }}">
        <span class="project-index">03</span>
        <span class="project-info">
          <span class="project-kicker">UI/UX · Web platform</span>
          <strong>SCDF Website Redesign</strong>
          <span>Research-led redesign for a clearer, calmer public-service experience.</span>
          <span class="project-details"><span>Role: Creative Director</span><span>Tools: Adobe XD, user research</span></span>
        </span>
        <span class="project-year">2025</span>
        <span class="project-arrow" aria-hidden="true">→</span>
        <span class="project-preview" aria-hidden="true">
          <img src="{{ '/assets/img/scdf-redesign.webp' | relative_url }}" alt="" loading="lazy" />
        </span>
      </a>
    </div>
  </div>
</section>

<section class="toolbox" id="toolbox">
  <div class="section-inner">
    <div class="toolbox__heading">
      <div>
      <p class="section-number">03 / Toolbox <span class="section-number__han" lang="zh">· 三</span></p>
      <h2>What I make<br /><em>things with.</em></h2>
      </div>
      <p>
        A mix of visual tools, programming languages and product-thinking skills I use to move
        from a rough idea to something people can actually use.
      </p>
    </div>

    <div class="skill-directory" aria-label="Skills and tools">
      <article class="skill-group">
        <div class="skill-group__marker" aria-hidden="true">A</div>
        <p class="skill-group__stage">Research</p>
        <h3>Understand the problem</h3>
        <p class="skill-group__example">Used to surface and organise user pain points in the SCDF redesign.</p>
        <ul class="skill-tags">
          <li>{% include tool-icon.html name="research" %}<span>User research</span></li>
          <li>{% include tool-icon.html name="testing" %}<span>Usability testing</span></li>
          <li>{% include tool-icon.html name="architecture" %}<span>Information architecture</span></li>
        </ul>
      </article>

      <article class="skill-group">
        <div class="skill-group__marker" aria-hidden="true">B</div>
        <p class="skill-group__stage">Design</p>
        <h3>Shape the experience</h3>
        <p class="skill-group__example">Used to turn research into flows, interfaces and visual systems.</p>
        <ul class="skill-tags">
          <li>{% include tool-icon.html name="figma" %}<span>Figma</span></li>
          <li>{% include tool-icon.html name="photoshop" %}<span>Photoshop</span></li>
          <li>{% include tool-icon.html name="illustrator" %}<span>Illustrator</span></li>
          <li>{% include tool-icon.html name="wireframe" %}<span>Wireframing</span></li>
          <li>{% include tool-icon.html name="prototype" %}<span>Prototyping</span></li>
          <li>{% include tool-icon.html name="storytelling" %}<span>Visual storytelling</span></li>
        </ul>
      </article>

      <article class="skill-group">
        <div class="skill-group__marker" aria-hidden="true">C</div>
        <p class="skill-group__stage">Build</p>
        <h3>Make it work</h3>
        <p class="skill-group__example">Used to prototype interfaces, AI-assisted tools and supporting systems.</p>
        <ul class="skill-tags">
          <li>{% include tool-icon.html name="javascript" %}<span>JavaScript</span></li>
          <li>{% include tool-icon.html name="python" %}<span>Python</span></li>
          <li>{% include tool-icon.html name="java" %}<span>Java</span></li>
          <li>{% include tool-icon.html name="c" %}<span>C</span></li>
          <li>{% include tool-icon.html name="sql" %}<span>SQL</span></li>
          <li>{% include tool-icon.html name="html" %}<span>HTML</span></li>
          <li>{% include tool-icon.html name="css" %}<span>CSS</span></li>
        </ul>
      </article>

      <article class="skill-group">
        <div class="skill-group__marker" aria-hidden="true">D</div>
        <p class="skill-group__stage">Ship</p>
        <h3>Prepare it for people</h3>
        <p class="skill-group__example">Used to version, package and check work before it reaches people.</p>
        <ul class="skill-tags">
          <li>{% include tool-icon.html name="git" %}<span>Git</span></li>
          <li>{% include tool-icon.html name="github" %}<span>GitHub</span></li>
          <li>{% include tool-icon.html name="docker" %}<span>Docker</span></li>
          <li>{% include tool-icon.html name="terminal" %}<span>CLI / Unix</span></li>
          <li>{% include tool-icon.html name="accessibility" %}<span>Accessibility</span></li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="contact-strip" id="contact">
  <div class="section-inner contact-strip__inner">
    <p class="section-number">04 / Say hello <span class="section-number__han" lang="zh">· 四</span></p>
    <h2>Have an idea?<br /><em>Let’s make it real.</em></h2>
    <div class="contact-links" aria-label="Contact and profile links">
      <a href="mailto:{{ site.email }}" class="contact-link">Email <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.github_username }}" class="contact-link contact-link--icon" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer">{% include social-icon.html platform="github" %}</a>
      <a href="{{ site.linkedin_url }}" class="contact-link contact-link--icon" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">{% include social-icon.html platform="linkedin" %}</a>
    </div>
  </div>
</section>
