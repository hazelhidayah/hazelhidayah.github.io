(() => {
  const sectionLinks = [...document.querySelectorAll("[data-nav-section]")];
  const observed = sectionLinks
    .map((link) => ({ link, section: document.getElementById(link.dataset.navSection) }))
    .filter(({ section }) => section);

  if (!("IntersectionObserver" in window) || observed.length === 0) return;

  const setActive = (activeLink) => {
    observed.forEach(({ link }) => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else if (link.getAttribute("aria-current") === "location") link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const match = observed.find(({ section }) => section === visible.target);
        if (match) setActive(match.link);
      }
    },
    { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25, 0.5] }
  );

  observed.forEach(({ section }) => observer.observe(section));
})();
