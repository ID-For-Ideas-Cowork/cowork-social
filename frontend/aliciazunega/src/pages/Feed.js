import React from "react";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import "./Feed.css";

/**
 * Página del feed principal
 * Muestra las publicaciones de todos los usuarios
 *
 * TODO: FE-04 - Implementar scroll infinito
 * TODO: FE-06 - Agregar modal para crear publicaciones
 */

 // Mock data - en producción vendría de la API
 const mockPosts = [
    {
      id: 1,
      author: { name: "María González", avatar: null },
      content:
        "¡Acabo de terminar mi primer proyecto en React! 🎉 Fue todo un desafío pero aprendí muchísimo en el camino. ¿Algún consejo para optimizar el rendimiento?",
      createdAt: new Date().toISOString(),
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: { name: "Carlos Ruiz", avatar: null },
      content:
        "Compartiendo mi experiencia con GraphQL. Las queries son increíblemente eficientes comparadas con REST. ¿Alguien más lo está usando?",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      likes: 18,
      comments: 12,
    },
    {
      id: 3,
      author: { name: "Ana Martínez", avatar: null },
      content:
        "Busco colaboradores para un proyecto open source de gestión de tareas. ¿Alguien interesado? stack: Node.js + MongoDB + React",
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      likes: 45,
      comments: 23,
    },
  ];

const Feed = () => {
 
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  // Cargar datos de localStorage o usar mock data
 useEffect(() => {
    const saved = localStorage.getItem('posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(mockPosts);
      localStorage.setItem('posts', JSON.stringify(mockPosts));
    }
  }, []);

  // Actualizar el feed desde el modal
  const handlePostCreated = (newPosts) => {
    setPosts(newPosts);
  };

  return (
    <div className="feed-page">
      <div className="container">
        <div className="feed-container">
          <div className="feed-header">
            <h2>Feed de Publicaciones</h2>
            {/* Conecta el boton al estado */}
            <button
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              ✏️ Nueva Publicación
            </button>
          </div>

          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="feed-loader">
            <p>Cargando más publicaciones...</p>
          </div>
        </div>
      </div>

      {/* Renderizado del Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
};

export default Feed;
