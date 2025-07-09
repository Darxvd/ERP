    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    }
    
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