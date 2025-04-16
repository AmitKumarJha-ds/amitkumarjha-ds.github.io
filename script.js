const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  // Change icon
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load theme
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Optional scroll reveal effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    } else {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(30px)';
    }
  });
});
