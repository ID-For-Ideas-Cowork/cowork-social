import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Componente de barra de navegación
 * TODO: FE-05 - Mejorar responsive con menú hamburguesa en mobile
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <h2>CoWork Social</h2>
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/search">Buscador</Link></li>
          <li><Link to="/profile/me">Perfil</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
