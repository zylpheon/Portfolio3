(function () {
  let theme = localStorage.getItem('theme') || 'dark';
  function setTheme(newTheme) {
    if (newTheme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }
    theme = newTheme;
    localStorage.setItem('theme', newTheme);
  }
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle-btn';
  toggleBtn.setAttribute('aria-label', 'Toggle theme');
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.right = '24px';
  toggleBtn.style.bottom = '24px';
  toggleBtn.style.zIndex = '1000';
  toggleBtn.style.background = 'rgba(255,255,255,0.85)';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '50%';
  toggleBtn.style.width = '48px';
  toggleBtn.style.height = '48px';
  toggleBtn.style.display = 'flex';
  toggleBtn.style.alignItems = 'center';
  toggleBtn.style.justifyContent = 'center';
  toggleBtn.style.fontSize = '1.5rem';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  toggleBtn.style.backdropFilter = 'blur(16px)';
  toggleBtn.style.webkitBackdropFilter = 'blur(16px)';
  document.body.appendChild(toggleBtn);
  function updateToggleBg(theme) {
    const sunIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 21V23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4.22 4.22L5.64 5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.36 18.36L19.78 19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M1 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M21 12H23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4.22 19.78L5.64 18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    const moonIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" stroke-width="2" fill="none"/></svg>`;
    if (theme === 'light') {
      toggleBtn.style.background = '#111';
      toggleBtn.innerHTML = sunIcon;
      toggleBtn.style.color = '#fff';
    } else {
      toggleBtn.style.background = '#fff';
      toggleBtn.innerHTML = moonIcon;
      toggleBtn.style.color = '#111';
    }
  }
  const origSetTheme = setTheme;
  setTheme = function (newTheme) {
    origSetTheme(newTheme);
    updateToggleBg(newTheme);
  };
  updateToggleBg(theme);
  toggleBtn.onclick = function () {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  setTheme(theme);
})();
