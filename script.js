// 🌗 Theme Toggle
const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // ⌨️ Typewriter (initialize on DOM load)
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    const originalText = typewriter.textContent.trim();
    typewriter.textContent = '';
    let i = 0;
    const type = () => {
      if (i < originalText.length) {
        typewriter.textContent += originalText.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  }
});

// 🧙 Scroll Reveal Effect using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// 🌌 tsParticles for Hero Background
tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  background: {
    color: { value: "#0a0a0a" }
  },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: ["#00f2ff", "#39ff14", "#d946ef"] },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 1, max: 4 } },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  }
});

// ✅ Contact Form Submission Confirmation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent actual submission for demo
    setTimeout(() => {
      alert("Thanks for your message! I’ll get back to you soon.");
      contactForm.reset(); // optional: clear form
    }, 300);
  });
}
document.querySelectorAll('section').forEach(section => {
  observer.observe(section); // skills included
});

