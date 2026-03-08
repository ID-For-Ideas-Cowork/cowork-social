import React, { useState } from 'react';
import './CreatePostModal.css';

/**
 * Componente de ventana modal para la creación de nuevas publicaciones.
 * @param {boolean} isOpen - Controla la visibilidad del modal.
 * @param {function} onClose - Función para cerrar el modal y resetear estados.
 */

const CreatePostModal = ({ isOpen, onClose }) => {
    // Estado local para capturar el texto del usuario antes de enviarlo
  const [postText, setPostText] = useState('');

  // Renderizado condicional: si isOpen es false, el componente no devuelve nada al DOM
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  const handleSend = () => {
    // 1. Validación: Evitar publicaciones vacías o solo con espacios
    if (!postText.trim()) return;

    // 2. Persistencia: Recuperar existentes y agregar el nuevo post
    const savedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
    
    const newPost = {
      id: Date.now(), // ID único basado en tiempo
      author: { name: 'Cristian Landeira', avatar: null }, 
      content: postText,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0
    };

    // Guardamos: el nuevo post va al principio de la lista
    localStorage.setItem('userPosts', JSON.stringify([newPost, ...savedPosts]));

    // 3. Limpieza y cierre
    setPostText('');
    onClose();
    
    // Forzamos recarga para actualizar el Feed (FE-02)
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content card">
        <h3>Crear nueva publicación</h3>
        <textarea 
          placeholder="¿En qué estás pensando?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        {/* --- NUEVO: Sección de Vista Previa (Requisito FE-02) --- */}
        {postText && (
          <div className="post-preview">
            <small>Vista previa:</small>
            <p>{postText}</p>
          </div>
        )}
       <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleSend}
            disabled={!postText.trim()} // Deshabilitar si no hay texto
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;