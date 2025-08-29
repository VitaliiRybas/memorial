// === Вогники ===
const fireBtn = document.querySelector('.fire-button');
const manualStar = document.querySelector('.manual-star'); // ВАЖЛИВО: не через getElementById!

fireBtn.addEventListener('click', () => {
  if (manualStar && manualStar.style.display !== 'block') {
    manualStar.style.display = 'block';
    manualStar.classList.add('blink');
  }
});

// === Скрол до верху ===
const scrollBtn = document.getElementById('scroll-to-top');
if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === Скидання (необов'язково) ===
function resetStars() {
  location.reload();
}
