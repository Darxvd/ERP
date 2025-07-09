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
            navbar.classList.add('fixed');
            placeholder.style.height = `${navbar.offsetHeight}px`;
        } else {
            topNav.style.transform = 'translateY(0)';
            navbar.classList.remove('fixed');
            placeholder.style.height = `0px`;
        }

        lastScrollY = currentScrollY;
        });