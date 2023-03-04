const introImg = document.querySelector(".img");
const introBefore = document.querySelector(".intro--before");
const introAfter = document.querySelector(".intro--after");
const introName = document.querySelector(".intro-name");
const h2Span = document.querySelectorAll("h2 span, .intro-p");

const observeTheseEL = document.querySelectorAll(
  ".img, .intro--before, .intro--after"
);

const observeImg = function (entries) {
  entries.forEach((entry) => {
    // Guard clause do not show entry data that is not intersecting
    if (!entry.isIntersecting) return;

    // console.log(entry);
    // Add classes if the data intersect
    introImg.classList.remove("reduce-size");
    introBefore.classList.add("slide-right");
    introAfter.classList.add("slide-right");
    h2Span.forEach((span) => span.classList.add("slide-right"));
  });
};

// Observe IMG
const imgObserver = new IntersectionObserver(observeImg, {
  root: null,
  threshold: 0.5,
  rootMargin: "-300px",
});

observeTheseEL.forEach((el) => {
  imgObserver.observe(el);
});

function observeSpan(entries) {
  entries.forEach((entry) => {
    // Guard clause do not show entry data that is not intersecting
    if (!entry.isIntersecting) return;
    console.log(entry);
    entry.target.classList.add("slide-right");
    if (entry.target.classList.contains("intro-p")) {
      entry.target.classList.add("slide-down");
    }
  });
}
const spanObserver = new IntersectionObserver(observeSpan, {
  root: null,
  threshold: 0.1,
});

h2Span.forEach((span) => {
  spanObserver.observe(span);
});
