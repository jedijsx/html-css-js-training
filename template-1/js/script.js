const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');

function checkScroll() {
  if (window.scrollY > 80) {
    header.style.backgroundColor = 'var(--color-bg-dark)';
    headerInner.style.minHeight = '64px';
  } else {
    header.style.backgroundColor = '';
    headerInner.style.minHeight = '96px';
  }
}

window.addEventListener('scroll', checkScroll);
