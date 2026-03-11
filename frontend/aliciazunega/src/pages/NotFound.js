import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

/**
 * Página 404 - No encontrada
 * 
 * TODO: FE-11 - Personalizar con ilustraciones y mejores mensajes
 */
const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="container">
        <div className="notfound-content">
          <div className="notfound-code">404</div>
          <h1>Página No Encontrada</h1>
          <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
          <div className="notfound-actions">
            <Link to="/" className="btn btn-primary">
              Ir al Inicio
            </Link>
            <Link to="/feed" className="btn btn-secondary">
              Ver el Feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
