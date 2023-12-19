const header = document.querySelector('.header');

function checkScroll() {
  if (window.scrollY > 80) {
    header.style.backgroundColor = 'var(--color-bg-dark)';
  } else {
    header.style.backgroundColor = '';
  }
}

window.addEventListener('scroll', checkScroll);
