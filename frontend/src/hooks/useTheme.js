import { useState, useEffect } from 'react';

/**
 * Custom Hook: useTheme
 * Gestiona el estado del tema global (claro/oscuro) y su persistencia en el navegador.
 */

export const useTheme = () => {
  // Inicialización: se intenta recuperar el tema guardado en localStorage.
  // Si no existe, por defecto se aplica 'light'.

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  /**
   * Efecto de Sincronización:
   * Cada vez que el estado 'theme' cambia, se actualiza el atributo en el DOM
   * y se guarda la preferencia en el almacenamiento local.
   */

  useEffect(() => {
    // Se aplica el atributo al elemento raíz (<html>) para que las variables CSS reaccionen.
    document.documentElement.setAttribute('data-theme', theme);
    // Se guarda la elección para futuras sesiones del usuario.
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre temas basándose en el estado anterior.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Se expone el estado actual y la función controladora para ser usados en componentes (ej. Navbar).
  return { theme, toggleTheme };
};