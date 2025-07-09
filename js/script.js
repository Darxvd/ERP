// --- Menú hamburguesa ---
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// --- Scroll del Navbar ---
const topNav = document.querySelector('.top-nav');
const navbar = document.querySelector('.navbar');
const placeholder = document.querySelector('.placeholder-navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    topNav.style.transform = 'translateY(-100%)';
    topNav.style.position = 'absolute';
    topNav.style.top = '-100px';

    navbar.classList.add('fixed');
    placeholder.style.height = `${navbar.offsetHeight}px`;
  } else {
    topNav.style.transform = 'translateY(0)';
    topNav.style.position = 'relative';
    topNav.style.top = '0';

    navbar.classList.remove('fixed');
    placeholder.style.height = `0px`;
  }

  lastScrollY = currentScrollY;
});

// --- Slider con flechas, puntos y fade ---
const images = [
  'css/img/img1.jpg',
  'css/img/img2.jpg',
  'css/img/img3.jpg',
  'css/img/img4.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const dotsContainer = document.getElementById('slider-dots');

// Crear puntos dinámicamente
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function showSlide(index) {
  if (index >= images.length) currentIndex = 0;
  else if (index < 0) currentIndex = images.length - 1;
  else currentIndex = index;

  // Fade out
  sliderImage.classList.remove('visible');

  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    sliderImage.classList.add('visible');
    updateDots();
  }, 200); // Tiempo debe coincidir con el CSS transition (~200ms)
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Inicializar slider
sliderImage.classList.add('visible');
showSlide(currentIndex);
