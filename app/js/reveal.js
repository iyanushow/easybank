const scrollFromRight = {
  duration: 500,
  distance: '100%',
  origin: 'right',
  viewFactor: 0.5,
};

ScrollReveal({ reset: true });
// ScrollReveal().reveal('.header', { ...scrollFromRight, reset: false });
ScrollReveal().reveal('.hero__image', { duration: 1000, delay: 600 });
ScrollReveal().reveal('.hero__details h1', { delay: 1000 });
ScrollReveal().reveal('.hero__details p', { delay: 1500 });
ScrollReveal().reveal('.hero__cta', { delay: 2000 });
ScrollReveal().reveal('.feature__details', { duration: 5000 });
ScrollReveal().reveal('.feature__item', { ...scrollFromRight });
ScrollReveal().reveal('.article', { duration: 500, viewFactor: 0.5 });
ScrollReveal().reveal('.article__item', { ...scrollFromRight, useDelay: 'once' });
