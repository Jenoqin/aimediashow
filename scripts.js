document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll shadow effect
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.25)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.15)';
    }
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scene, .cta-section').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
