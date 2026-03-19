---
layout: default
title: Home
---

<section class="section hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="section-inner hero-grid hero-grid--center">
    <div class="hero-content">
      <h1 class="hero-title">I'm Hazel / Hidayah</h1>
      <div class="hero-subtitle">CODER | DESIGNER | STUDENT</div>
      <p class="hero-copy">
        Quietly obsessed with interfaces, tiny details and projects that make everyday life feel a
        little softer and more intentional.
      </p>
      <div class="hero-actions">
        <a href="{{ '/about/' | relative_url }}" class="btn-brush">The real about me</a>
      </div>
    </div>
  </div>
</section>

<section class="section background-section" id="background">
  <div class="section-inner background-grid">
    <div>
      <div class="section-label">Background</div>
      <h2 class="section-title">A bit about me</h2>
      <div class="background-text">
        <p>
          I’m a Computer Science student at NUS with a growing passion for UI/UX, design and
          building stuff that actually make life easier/increase quality of life. I used to study
          Mass Communication at Ngee Ann Polytechnic so most of my time now has been dedicated to
          beating imposter syndrome!
        </p>
        <p>
          I find anything design and computer related fascinating so I’m dedicating my life to
          learning everything I can and nerding out about it :)
        </p>
      </div>
      <div class="resume-actions">
        <a
          href="{{ '/assets/docs/tech-resume.pdf' | relative_url }}"
          class="btn-brush"
          target="_blank"
          rel="noopener noreferrer"
          >View Tech Resume</a
        >
      </div>
    </div>

    <div class="background-photo">
      <img
        src="{{ '/assets/img/profile.png' | relative_url }}"
        alt="Hazel Hidayah"
        class="background-photo-img"
        loading="lazy"
      />
    </div>
  </div>
</section>

<section class="section works-section" id="main-works">
  <div class="section-inner">
    <div class="works-header">
      <div>
        <div class="section-label">Main Works</div>
        <h2 class="section-title">Proudest things so far</h2>
      </div>
    </div>

    <div class="works-carousel" aria-label="Highlighted projects">
      <article class="work-card">
        <div class="work-thumb tech-1"></div>
        <div class="work-meta">Tech Stuff</div>
        <h3 class="work-title">Study Companion Dashboard</h3>
        <p class="work-desc">
          A minimal web app that tracks study sessions, tiny wins and energy levels in a single
          clean interface.
        </p>
        <div class="work-links">
          <a href="{{ '/works/#tech-stuff' | relative_url }}" class="btn-ghost">View details</a>
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb creative-1"></div>
        <div class="work-meta">Creative</div>
        <h3 class="work-title">Ink &amp; Neon Poster Series</h3>
        <p class="work-desc">
          A set of digital posters mixing sumi‑e textures with bold typography and glitchy overlays.
        </p>
        <div class="work-links">
          <a href="{{ '/works/#creative-work' | relative_url }}" class="btn-ghost">View details</a>
        </div>
      </article>

      <article class="work-card">
        <div class="work-thumb tech-2"></div>
        <div class="work-meta">Tech Stuff</div>
        <h3 class="work-title">Campus Habit Tracker</h3>
        <p class="work-desc">
          Mobile‑first tracker built for students who want lightweight nudges instead of noisy
          notifications.
        </p>
        <div class="work-links">
          <a href="{{ '/works/#tech-stuff' | relative_url }}" class="btn-ghost">View details</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section skills-section" id="skills">
  <div class="section-inner">
    <div class="works-header">
      <div>
        <div class="section-label">Skillset deck</div>
        <h2 class="section-title">Tools &amp; tech I use</h2>
      </div>
    </div>

    <div class="skills-grid" aria-label="Skillset deck">
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-solid fa-pen-nib" aria-hidden="true"></i></div>
        <div class="skill-name">Figma</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-solid fa-image" aria-hidden="true"></i></div>
        <div class="skill-name">Adobe Photoshop</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-solid fa-bezier-curve" aria-hidden="true"></i></div>
        <div class="skill-name">Adobe Illustrator</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">Py</span></div>
        <div class="skill-name">Python</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">C</span></div>
        <div class="skill-name">C</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">J</span></div>
        <div class="skill-name">Java</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">JS</span></div>
        <div class="skill-name">JavaScript</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">CSS</span></div>
        <div class="skill-name">CSS</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><span class="skill-text-icon">SQL</span></div>
        <div class="skill-name">SQL</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-brands fa-git-alt" aria-hidden="true"></i></div>
        <div class="skill-name">Git</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-brands fa-github" aria-hidden="true"></i></div>
        <div class="skill-name">GitHub</div>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fa-solid fa-terminal" aria-hidden="true"></i></div>
        <div class="skill-name">CLI / Unix</div>
      </article>
    </div>
  </div>
</section>
