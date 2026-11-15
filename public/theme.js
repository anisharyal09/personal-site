(() => {
  let preference = 'system';

  try {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {
    // Use the system preference when browser storage is unavailable.
  }

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;
  const root = document.documentElement;

  root.classList.toggle('light-mode-active', theme === 'light');
  root.dataset.theme = theme;
  root.dataset.themePreference = preference;
})();
