import React from 'react';
import './PostCard.css';

/**
 * Componente de tarjeta para mostrar publicaciones
 * 
 * TODO: FE-02 - Completar este componente con:
 * - Avatar del usuario
 * - Fecha de publicación
 * - Botones de reacciones (like, love, celebrar)
 * - Contador de comentarios
 * - Preview de comentarios
 */
const PostCard = ({ post }) => {
  return (
    <div className="post-card card">
      <div className="post-header">
        <div className="post-author">
          <div className="author-avatar">
            {/* TODO: Agregar imagen de perfil */}
            <span>{post?.author?.name?.charAt(0) || 'U'}</span>
          </div>
          <div className="author-info">
            <h4>{post?.author?.name || 'Usuario'}</h4>
            <span className="post-date">
              {post?.createdAt ? new Date(post.createdAt).toLocaleDateString('es-ES') : 'Hoy'}
            </span>
          </div>
        </div>
      </div>

      <div className="post-content">
        <p>{post?.content || 'Esta es una publicación de ejemplo. ¡Bienvenido a CoWork Social!'}</p>
        {post?.image && (
          <img src={post.image} alt="Post" className="post-image" />
        )}
      </div>

      <div className="post-actions">
        <button className="action-btn">
          👍 Me gusta {post?.likes || 0}
        </button>
        <button className="action-btn">
          💬 Comentar {post?.comments || 0}
        </button>
        <button className="action-btn">
          📤 Compartir
        </button>
      </div>
    </div>
  );
};

export default PostCard;
