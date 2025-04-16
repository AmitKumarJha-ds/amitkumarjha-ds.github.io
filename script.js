document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    // Save theme preference
    localStorage.setItem('theme', 
      document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  
  // Load theme preference on page load
  window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
  