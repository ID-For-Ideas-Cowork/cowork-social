import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

/**
 * Página de registro de nuevos usuarios
 * 
 * TODO: FE-01 - Ampliar con:
 * - Validación completa de formularios
 * - Verificación de email
 * - Fuerza de contraseña
 * - Términos y condiciones
 */
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // TODO: Implementar lógica de registro con API
    console.log('Register attempt:', formData);
    alert('Registro funcional pendiente de implementar. Redirigiendo al login...');
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-container">
          <div className="register-card card">
            <h2>Crear Cuenta</h2>
            <p className="register-subtitle">Únete a CoWork Social</p>
            
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                />
              </div>

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
                  placeholder="Mínimo 8 caracteres"
                  minLength="8"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite tu contraseña"
                  minLength="8"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Crear Cuenta
              </button>
            </form>

            <div className="register-footer">
              <p>
                ¿Ya tienes cuenta?{' '}
                <Link to="/login" className="login-link">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
