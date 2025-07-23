//Load the skills bar when the section is in view
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

//circle around the cursor
const circle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

//slide in effect for education timeleine
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  items.forEach((item, i) => {
    if (item.getBoundingClientRect().top < trigger) {
      setTimeout(() => item.classList.add("active"), i * 500);
    }
  });
});
