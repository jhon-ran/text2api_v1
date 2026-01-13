(function () {
  // Wire CTAs to the Typeform URL
  const url = window.TEXT2API_TYPEFORM_URL || "#";
  const ids = ["ctaTop","ctaHero","ctaHow","ctaSecurity","ctaExamples","ctaFaq","ctaFooter"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });

  // Smooth scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      // Only smooth-scroll for same-page anchors (not CTAs)
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
