window.onload = () => {
  const hambuger = document.querySelector('.hamburger');
  const header = document.querySelector('.header');

  hambuger.addEventListener('click', () => {
    header.classList.toggle('nav__open');
    document.body.classList.toggle('no-scroll');
  });
};
