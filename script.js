// Smooth scrolling
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// CV Download Modal
document.addEventListener('DOMContentLoaded', () => {
  const cvButton = document.getElementById('cv-button');
  if (cvButton) {
    cvButton.addEventListener('click', () => {
      window.open('https://drive.google.com/uc?export=download&id=1YjG_64dFP7pf_XWeYK8nfAdsSLFfTff_', '_blank');
    });
  }
});

// Navbar active highlight
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('ring-2', 'ring-cyan-400');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ring-2', 'ring-cyan-400');
    }
  });
});

// Typing animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
});

// Scroll reveal
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Typing effect
  const typeElements = document.querySelectorAll('.typing');
  typeElements.forEach(el => {
    const text = el.getAttribute('data-text');
    setTimeout(() => typeWriter(el, text), 500);
  });

  // Scroll reveal for sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Loading animation
document.body.style.overflow = 'auto';
  document.getElementById('loading').classList.add('opacity-0', 'pointer-events-none');

  // Contact form validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message && /\S+@\S+\.\S+/.test(email)) {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('Please fill all fields correctly.');
    }
  });
});

