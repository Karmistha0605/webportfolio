// Animate skill bars only when cards are in full view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".bar-fill");
        bars.forEach((bar) => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        });
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});
