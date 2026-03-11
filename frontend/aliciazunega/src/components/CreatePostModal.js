import React, { useState } from "react";
import "./CreatePostModal.css";
import PostCard from "./PostCard";

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

   
    const newPost = {
      id: Date.now(),
      author: { name: "Usuario Invitado", avatar: null }, //usuario harcodeado por el momento
      content: content,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
    };

    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = [newPost, ...savedPosts];

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    onPostCreated(updatedPosts);
    setContent("");
    onClose();
  };
  const previewData = {
    id: "preview",
    author: { name: "Tu Nombre (Vista Previa)", avatar: null },
    content: content || "Aquí se verá tu increíble publicación...",
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: 0,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Nueva Publicación</h3>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            autoFocus
            placeholder="¿Qué quieres compartir hoy?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="preview-container">
            <span className="preview-label">Vista Previa de tu Post:</span>
            <div className="preview-scale-wrapper">
              <PostCard post={previewData} />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!content.trim()}
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
