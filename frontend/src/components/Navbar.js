import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme'; //Importo Hook
import './Navbar.css';

/**
 * Componente de barra de navegación
 * TODO: FE-05 - Mejorar responsive con menú hamburguesa en mobile
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <h2>CoWork Social</h2>
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/profile/me">Perfil</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
