import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* logo */}
        <Link to="/" className="navbar-brand">
          <h2>CoWork Social</h2>
        </Link>

        {/* menu navegacion */}
        <ul className="navbar-menu">
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/search">Buscador</Link></li>
          <li><Link to="/profile/me">Perfil</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            {/* boton tema */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <span className="theme-toggle-icon">{isDarkMode ? '☀️' : '🌙'}</span>
              <span className="theme-toggle-label">
                {isDarkMode ? 'Claro' : 'Oscuro'}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;