import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import CreatePostModal from '../components/CreatePostModal';
import './Feed.css';

const Feed = () => {
  // datos mock - reemplazar con api
  const mockPosts = [
    {
      id: 1,
      author: { name: 'María González', avatar: null },
      content: '¡Acabo de terminar mi primer proyecto en React! 🎉 Fue todo un desafío pero aprendí muchísimo en el camino. ¿Algún consejo para optimizar el rendimiento?',
      createdAt: new Date().toISOString(),
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: { name: 'Carlos Ruiz', avatar: null },
      content: 'Compartiendo mi experiencia con GraphQL. Las queries son increíblemente eficientes comparadas con REST. ¿Alguien más lo está usando?',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      author: { name: 'Ana Martínez', avatar: null },
      content: 'Busco colaboradores para un proyecto open source de gestión de tareas. ¿Alguien interesado? stack: Node.js + MongoDB + React',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      likes: 45,
      comments: 23
    }
  ];

  // posts guardados por el usuario
  const getStoredPosts = () => {
    try {
      return JSON.parse(localStorage.getItem('posts') || '[]');
    } catch {
      return [];
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState(getStoredPosts);

  // combinar posts (user primero, luego mock)
  const allPosts = [...userPosts, ...mockPosts];

  // handlers modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // nuevo post
  const handlePostCreated = (newPost) => {
    setUserPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="feed-page">
      <div className="container">
        <div className="feed-container">
          <div className="feed-header">
            <h2>Feed de Publicaciones</h2>
            <button className="btn btn-primary" onClick={handleOpenModal}>
              ✏️ Nueva Publicación
            </button>
          </div>

          <div className="posts-list">
            {allPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="feed-loader">
            <p>Cargando más publicaciones...</p>
          </div>
        </div>
      </div>

      {/* modal crear post */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
};

export default Feed;