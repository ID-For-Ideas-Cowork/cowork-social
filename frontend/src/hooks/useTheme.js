import { useState, useEffect } from 'react';

const THEME_KEY = 'theme';
const DEFAULT_THEME = 'light';

const getStoredTheme = () => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return DEFAULT_THEME;
  }

  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored === 'dark' ? 'dark' : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

const persistTheme = (value) => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(THEME_KEY, value);
  } catch {
    // Ignore storage errors to avoid breaking the UI.
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return getStoredTheme();
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    persistTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;