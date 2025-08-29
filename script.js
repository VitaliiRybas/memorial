const uaBtn = document.querySelector('.ua');
const engBtn = document.querySelector('.eng');
const active = document.querySelector('.lang-active');

let currentLang = localStorage.getItem('lang') || 'ua';
setLanguage(currentLang);

uaBtn.addEventListener('click', () => {
  setLanguage('ua');
});

engBtn.addEventListener('click', () => {
  setLanguage('eng');
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  active.style.left = lang === 'ua' ? "0px" : "58px";

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ua], [data-eng]').forEach(el => {
    el.innerHTML = lang === 'ua' ? el.getAttribute('data-ua') : el.getAttribute('data-eng');
  });
}

const fireBtn = document.querySelector('.fire-button');
const fireCount = document.getElementById('fireCount');
const starsContainer = document.querySelector('.stars-container');

let count = parseInt(localStorage.getItem('fireCount') || '0');
let currentStars = parseInt(localStorage.getItem('starsShown') || '0');
const maxStars = 100;

fireCount.textContent = count;

for (let i = 0; i < currentStars; i++) {
  createStar();
}

fireBtn.addEventListener('click', () => {
  count++;
  fireCount.textContent = count;
  localStorage.setItem('fireCount', count);

  fireCount.classList.add('flash');
  setTimeout(() => {
    fireCount.classList.remove('flash');
  }, 400);

  if (currentStars < maxStars) {
    createStar();
    currentStars++;
    localStorage.setItem('starsShown', currentStars);
  }
});

function createStar() {
  const star = document.createElement('img');
  star.src = 'img/star.svg';
  star.classList.add('star');

  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 100);

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  starsContainer.appendChild(star);
}

const scrollBtn = document.getElementById('scroll-to-top');

if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


function resetStars() {
  localStorage.removeItem('fireCount');
  localStorage.removeItem('starsShown');
  location.reload();
}
