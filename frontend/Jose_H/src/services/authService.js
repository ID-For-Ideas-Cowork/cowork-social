import api from './api';

/**
 * Servicio de autenticación
 * 
 * TODO: BE-01 - Estos endpoints deben coincidir con el backend
 */

export const authService = {
  /**
   * Registrar nuevo usuario
   * @param {Object} userData - { name, email, password }
   */
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  /**
   * Iniciar sesión
   * @param {Object} credentials - { email, password }
   */
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  /**
   * Cerrar sesión
   */
  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },

  /**
   * Obtener usuario actual
   */
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;
