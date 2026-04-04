import { useState, useEffect } from 'react';

export const useTheme = () => {
  // 1. Intentar obtener el tema guardado o usar el del sistema
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    // 2. Aplicar el atributo al HTML y guardar en localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
};