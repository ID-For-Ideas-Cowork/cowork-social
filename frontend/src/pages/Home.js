import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

/**
 * Página de inicio / Landing page
 * Muestra información sobre la plataforma y llama a acción
 */
const Home = () => {
  console.log("DEPLOY EN VERCEL 2");
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenido a CoWork Social</h1>
            <p className="hero-subtitle">
              La red social para profesionales que colaboran y construyen juntos
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary">
                Comenzar Ahora
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Características</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">👤</div>
              <h3>Perfiles Profesionales</h3>
              <p>Crea tu perfil y muestra tus habilidades al mundo</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">📝</div>
              <h3>Publicaciones</h3>
              <p>Comparte tus proyectos, ideas y conocimientos</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">💬</div>
              <h3>Colaboración</h3>
              <p>Comenta, reacciona y conecta con otros profesionales</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Visualiza el engagement de tus publicaciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>¿Listo para colaborar?</h2>
          <p>Únete a nuestra comunidad de profesionales</p>
          <Link to="/register" className="btn btn-primary">
            Crear Cuenta Gratis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
