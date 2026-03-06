import React, { useState } from 'react';
import './CreatePostModal.css';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content.trim());
    setContent('');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>Nueva Publicación</h3>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <textarea
            className="post-textarea"
            placeholder="¿Qué quieres compartir hoy?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            autoFocus
          />

          {content.trim() && (
            <div className="post-preview">
              <span className="preview-label">Vista previa</span>
              <p className="preview-text">{content}</p>
            </div>
          )}

          <div className="modal-footer">
            <span className="char-count">{content.length} caracteres</span>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!content.trim()}
              >
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;