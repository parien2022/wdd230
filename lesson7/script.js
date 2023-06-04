const images = document.querySelectorAll("img");

const options = {
  threshold: 0.5
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");

      if (src) {
        img.src = src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    }
  })
}

const observer = new IntersectionObserver(handleIntersection, options);

images.forEach(img => {
  observer.observe(img);
});
