export const THEME_STORAGE_KEY = 'theme';
export const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export function normalizeThemePreference(preference) {
  return preference === 'light' || preference === 'dark' ? preference : 'system';
}

export function readThemePreference() {
  try {
    return normalizeThemePreference(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return 'system';
  }
}

export function saveThemePreference(preference) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, normalizeThemePreference(preference));
  } catch {
    // The choice still applies to this page when browser storage is unavailable.
  }
}

export function resolveTheme(preference, systemDark) {
  const normalized = normalizeThemePreference(preference);
  return normalized === 'system' ? (systemDark ? 'dark' : 'light') : normalized;
}

export function applyTheme(preference, systemDark, root = document.documentElement) {
  const theme = resolveTheme(preference, systemDark);
  root.classList.toggle('light-mode-active', theme === 'light');
  root.dataset.theme = theme;
  root.dataset.themePreference = normalizeThemePreference(preference);
}
