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

// --- Slider con flechas, puntos, fade y overlay sincronizado ---

// Imágenes de fondo
const images = [
  'css/img/slider/img1.jpg',
  'css/img/slider/img2.jpg',
  'css/img/slider/img3.jpg',
  'css/img/slider/img4.jpg'
];

// Imágenes overlay (como el chico en cada slide)
const overlays = [
  'css/img/slider/subslider/slideone.png',
  'css/img/slider/subslider/slidetwo.png',
  'css/img/slider/subslider/slidethree.png',
  'css/img/slider/subslider/slidefour.png',
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const overlayImage = document.getElementById('slider-overlay');
const dotsContainer = document.getElementById('slider-dots');

// Crear puntos de navegación
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

// Actualizar estilos de puntos
function updateDots() {
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Mostrar slide específico
function showSlide(index) {
  if (index >= images.length) currentIndex = 0;
  else if (index < 0) currentIndex = images.length - 1;
  else currentIndex = index;

  sliderImage.classList.remove('visible');
  overlayImage.classList.remove('visible');

  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    overlayImage.src = overlays[currentIndex];

    sliderImage.classList.add('visible');
    overlayImage.classList.add('visible');

    updateDots();
  }, 200);
}

// Navegar entre slides
function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Inicializar
sliderImage.classList.add('visible');
overlayImage.classList.add('visible');
showSlide(currentIndex);

// Auto-slide cada 10 segundos
setInterval(() => {
  changeSlide(1);
}, 10000);