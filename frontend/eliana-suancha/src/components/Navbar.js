import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Componente de barra de navegación
 * TODO: FE-05 - Mejorar responsive con menú hamburguesa en mobile
 */
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <h2>CoWork Social</h2>
        </Link>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/search">Buscar</Link></li>
            <li><Link to="/profile/me">Perfil</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <label className="theme-toggle" aria-label="Cambiar tema">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span className="toggle-track">
              <span className="toggle-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
