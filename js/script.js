// --- Menú Hamburguesa ---
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
    placeholder.style.height = '0px';
  }

  lastScrollY = currentScrollY;
});

// --- Datos del Slider ---
const images = [
  'css/img/slider/img1.jpg',
  'css/img/slider/img2.jpg',
  'css/img/slider/img3.jpg',
  'css/img/slider/img4.jpg'
];

const overlays = [
  'css/img/slider/subslider/slideone.png',
  'css/img/slider/subslider/slidetwo.png',
  'css/img/slider/subslider/slidethree.png',
  'css/img/slider/subslider/slidefour.png',
];

const slideInfo = [
  {
    subtitle: 'INICIA TU FUTURO CON NUESTRA',
    title: 'CARRERA TÉCNICA',
    title_two: 'DE CLIMATIZACIÓN',
    description: 'Conviértete en un experto en Aire Acondicionado y Refrigeración en solo 12 meses.  Obtén la formación práctica y teórica que necesitas para asegurar tu futuro laboral en el rubro HVAC-R.',
    link: '#seminarios',
    dates: ['12 DE JUNIO', '18 DE JUNIO', '20 DE JULIO']
  },
  {
    subtitle: 'VUÉLVETE UN EXPERTO EN',
    title: 'AIRE',
    title_two: 'ACONDICIONADO',
    description: 'Aprende sobre equipos Split, VRV/VRF y las últimas tecnologías del rubro HVAC con nuestro renovado y mejorado que trae el PROGRAMA TÉCNICO DE AIRE ACONDICIONADO.',
    link: '#basico',
    dates: ['5 DE JULIO', '10 DE JULIO','12 DE JUNIO']
  },
  {
    subtitle: 'SÉ UN ESPECIALISTA EN',
    title: 'REFRIGERACIÓN',
    title_two: 'COMERCIAL',
    description: 'Impulsa tu carrera en solo 5 meses, aprende y domina  cualquier sistema de conservación y congelación practicando con equipos 100% reales y de última tecnología.',
    link: '#vrf',
    dates: ['20 DE JULIO', '27 DE JULIO']
  },
  {
    subtitle: 'ESPECIALÍZATE CON NUESTROS',
    title: 'SEMINARIOS',
    title_two: 'HVAC-R',
    description: 'Capacitaciones para profesionales experimentados en el rubro, aumenta tus conocimientos en temas avanzados como sistemas VRF, Amoníaco, CO2, diseño CAD y mucho más.',
    link: '#diplomado',
    dates: ['3 DE AGOSTO', '10 DE AGOSTO']
  }
];

// --- Elementos del Slider ---
const sliderImage = document.getElementById('slider-image');
const overlayImage = document.getElementById('slider-overlay');
const dotsContainer = document.getElementById('slider-dots');

const subtitleEl = document.getElementById('slide-subtitle');
const titleEl = document.getElementById('slide-title');
const titletwoEl = document.getElementById('slide-title-two');
const descEl = document.getElementById('slide-description');
const linkEl = document.getElementById('slide-link');
const datesEl = document.getElementById('slide-dates');

let currentIndex = 0;

// --- Crear puntos del slider ---
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

// --- Actualiza puntos activos ---
function updateDots() {
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// --- Actualiza contenido del slide ---
function updateSlideInfo(index) {
  const info = slideInfo[index];

  subtitleEl.innerText = info.subtitle;
  titleEl.innerText = info.title;
  titletwoEl.innerText = info.title_two;
  descEl.innerText = info.description;
  linkEl.href = info.link;

  datesEl.innerHTML = '';

  info.dates.forEach((date, idx) => {
    const dateSpan = document.createElement('span');
    dateSpan.innerText = date;
    dateSpan.classList.add('slide-date');
    datesEl.appendChild(dateSpan);

    if (idx < info.dates.length - 1) {
      const separator = document.createElement('span');
      separator.innerText = ' | ';
      separator.classList.add('slide-separator');
      datesEl.appendChild(separator);
    }
  });
}

// --- Mostrar slide ---
function showSlide(index) {
  const newIndex = (index + images.length) % images.length;

  sliderImage.classList.remove('visible');
  overlayImage.classList.remove('visible');

  setTimeout(() => {
    currentIndex = newIndex;

    sliderImage.src = images[currentIndex];
    overlayImage.src = overlays[currentIndex];

    updateDots();
    updateSlideInfo(currentIndex);

    sliderImage.classList.add('visible');
    overlayImage.classList.add('visible');
  }, 300);
}

// --- Cambiar slide manualmente ---
function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// --- Inicializar slider ---
showSlide(currentIndex);

// --- Cambio automático de slides ---
setInterval(() => {
  changeSlide(1);
}, 20000);

const totalMarcas = 10;
const marcas = [];

for (let i = 1; i <= totalMarcas; i++) {
  marcas.push(`css/img/marcas/recurso_${i}.svg`);
}

const track = document.getElementById('slider-track');

const allMarcas = [...marcas, ...marcas];

allMarcas.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Marca patrocinadora';
  track.appendChild(img);
});

