import React, { useState, useEffect } from 'react';
import './CreatePostModal.css';

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 500;

  // contador caracteres
  useEffect(() => {
    setCharCount(content.length);
  }, [content]);

  // cerrar con escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // bloquear scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = () => {
    const trimmed = content.trim();
    if (!trimmed) return;

    const newPost = {
      id: Date.now(),
      author: { name: 'Tú', avatar: null },
      content: trimmed,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
    };

    // guardar en localStorage
    const stored = JSON.parse(localStorage.getItem('posts') || '[]');
    const updated = [newPost, ...stored];
    localStorage.setItem('posts', JSON.stringify(updated));

    // notificar al padre
    if (onPostCreated) onPostCreated(newPost);

    // limpiar y cerrar
    setContent('');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  const isOverLimit = charCount > MAX_CHARS;
  const isEmpty = content.trim().length === 0;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <h3 id="modal-title">✏️ Nueva Publicación</h3>
        </div>

        <div className="modal-body">
          <textarea
            className="modal-textarea"
            placeholder="¿Qué tienes en mente? Comparte algo con tu red..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />

          <div className="modal-meta">
            <span className={`char-counter ${isOverLimit ? 'char-over' : charCount > MAX_CHARS * 0.8 ? 'char-warning' : ''}`}>
              {charCount}/{MAX_CHARS}
            </span>
          </div>

          {/* vista previa */}
          {content.trim() && (
            <div className="modal-preview">
              <p className="preview-label">Vista previa</p>
              <div className="preview-card">
                <div className="preview-author">
                  <div className="preview-avatar">T</div>
                  <div>
                    <strong>Tú</strong>
                    <span className="preview-date">Ahora</span>
                  </div>
                </div>
                <p className="preview-content">{content}</p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isEmpty || isOverLimit}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;