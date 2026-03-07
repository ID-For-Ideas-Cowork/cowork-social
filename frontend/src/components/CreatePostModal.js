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
    // Por ahora muestro solamente en consola; luego conectaré con localStorage (FE-02)
    console.log("Enviando post:", postText);
    // Se limpia el textarea después de "enviar"
    setPostText('');
    onClose();
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
        <div className="modal-actions">
          {/* Botón para cancelar: cierra sin guardar cambios */}
          <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          {/* Botón para publicar: dispara la lógica de guardado */}
          <button className="btn btn-primary" onClick={handleSend}>Publicar</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;