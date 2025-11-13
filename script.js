// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerLines = document.querySelectorAll('.hamburger-line');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0', '-translate-y-4');
        mobileMenu.classList.add('max-h-80', 'opacity-100', 'translate-y-0');
        
        hamburgerLines[0].classList.add('rotate-45', 'translate-y-1');
        hamburgerLines[0].classList.remove('-translate-y-0.5');
        hamburgerLines[1].classList.add('opacity-0');
        hamburgerLines[2].classList.add('-rotate-45', '-translate-y-1');
        hamburgerLines[2].classList.remove('translate-y-0.5');
      } else {
        mobileMenu.classList.add('max-h-0', 'opacity-0', '-translate-y-4');
        mobileMenu.classList.remove('max-h-80', 'opacity-100', 'translate-y-0');
        
        hamburgerLines[0].classList.remove('rotate-45', 'translate-y-1');
        hamburgerLines[0].classList.add('-translate-y-0.5');
        hamburgerLines[1].classList.remove('opacity-0');
        hamburgerLines[2].classList.remove('-rotate-45', '-translate-y-1');
        hamburgerLines[2].classList.add('translate-y-0.5');
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-xl');
      navbar.classList.remove('shadow-lg');
    } else {
      navbar.classList.add('shadow-lg');
      navbar.classList.remove('shadow-xl');
    }
  });
});
