import api from './api';

/**
 * Servicio de publicaciones
 * 
 * TODO: BE-02 - Implementar estos endpoints en el backend
 */

export const postService = {
  /**
   * Obtener todas las publicaciones (feed)
   * @param {Object} params - { page, limit }
   */
  getAllPosts: async (params = {}) => {
    const response = await api.get('/posts', { params });
    return response.data;
  },

  /**
   * Obtener una publicación por ID
   * @param {string} postId
   */
  getPostById: async (postId) => {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  },

  /**
   * Crear nueva publicación
   * @param {Object} postData - { content, image }
   */
  createPost: async (postData) => {
    const response = await api.post('/posts', postData);
    return response.data;
  },

  /**
   * Actualizar publicación
   * @param {string} postId
   * @param {Object} postData
   */
  updatePost: async (postId, postData) => {
    const response = await api.put(`/posts/${postId}`, postData);
    return response.data;
  },

  /**
   * Eliminar publicación
   * @param {string} postId
   */
  deletePost: async (postId) => {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  },

  /**
   * Dar like a una publicación
   * @param {string} postId
   */
  likePost: async (postId) => {
    const response = await api.post(`/posts/${postId}/like`);
    return response.data;
  },

  /**
   * Quitar like de una publicación
   * @param {string} postId
   */
  unlikePost: async (postId) => {
    const response = await api.delete(`/posts/${postId}/like`);
    return response.data;
  },
};

export default postService;
