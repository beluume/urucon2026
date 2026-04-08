
//  Nav scroll shrink 
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


// ── Mobile drawer
const drawer    = document.getElementById('mobileDrawer');
const hamburger = document.getElementById('hamburger');

function toggleMobile() {
  const isOpen = drawer.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobile() {
  drawer.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

// Cerrar drawer al hacer click fuera del contenido
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) closeMobile();
});

// ── Scroll reveal 
const reveals  = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));
