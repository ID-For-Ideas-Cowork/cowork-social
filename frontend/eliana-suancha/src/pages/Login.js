import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

/**
 * Página de inicio de sesión
 * 
 * TODO: FE-01 - Completar esta página con:
 * - Validación de formularios con react-hook-form
 * - Manejo de errores
 * - Integración con API de autenticación
 * - Loading states
 * - Recordar usuario
 */
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar lógica de login con API
    console.log('Login attempt:', formData);
    
    // Simulación de login exitoso (temporal)
    alert('Login funcional pendiente de implementar. Redirigiendo al feed...');
    navigate('/feed');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-card card">
            <h2>Iniciar Sesión</h2>
            <p className="login-subtitle">Bienvenido de vuelta a CoWork Social</p>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Recordarme</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Iniciar Sesión
              </button>
            </form>

            <div className="login-footer">
              <p>
                ¿No tienes cuenta?{' '}
                <Link to="/register" className="register-link">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
