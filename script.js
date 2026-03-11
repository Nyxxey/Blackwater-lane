// ===== Login Modal =====
const loginModal = document.getElementById('loginModal');
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');

openLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.remove('active');
  document.body.style.overflow = '';
});

loginModal.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && loginModal.classList.contains('active')) {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== Login Form =====
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const badge = document.getElementById('badgeNumber').value;
  const password = document.getElementById('password').value;

  if (badge && password) {
    const btn = e.target.querySelector('.btn-login-submit');
    btn.textContent = 'AUTHENTICATING...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
      if (badge === '2323' && password === 'ford') {
        btn.textContent = 'ACCESS GRANTED';
        btn.style.background = 'linear-gradient(135deg, #2a6b3a, #3a9f4a)';
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 800);
      } else {
        btn.textContent = 'ACCESS DENIED';
        btn.style.background = 'linear-gradient(135deg, #6b2a2a, #9f3a3a)';
        setTimeout(() => {
          btn.textContent = 'ACCESS PORTAL';
          btn.style.background = '';
          btn.style.opacity = '';
        }, 2000);
      }
    }, 1500);
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close nav on link click
navLinks.querySelectorAll('a:not(.btn-login)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== Contact Form =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-primary');
  const originalText = btn.textContent;
  btn.textContent = 'MESSAGE SENT';
  btn.style.background = 'linear-gradient(135deg, #2a6b3a, #3a9f4a)';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    e.target.reset();
  }, 2500);
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 15, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 15, 0.92)';
  }
});
