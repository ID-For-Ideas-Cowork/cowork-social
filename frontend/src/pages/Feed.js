import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import CreatePostModal from '../components/CreatePostModal';
import './Feed.css';

const STORAGE_KEY = 'cowork_posts';

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

const loadPosts = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : mockPosts;
  } catch {
    return mockPosts;
  }
};

const savePosts = (posts) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    // Non-blocking: log and continue so the UI doesn't break if storage is unavailable
    console.error('Failed to save posts to localStorage:', error);
  }
};

const Feed = () => {
  const [posts, setPosts] = useState(loadPosts);
  const [showModal, setShowModal] = useState(false);

  const handleCreatePost = (content) => {
    const newPost = {
      id: Date.now(),
      author: { name: 'Tú', avatar: null },
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0
    };
    const updated = [newPost, ...posts];
    setPosts(updated);
    savePosts(updated);
  };

  return (
    <div className="feed-page">
      <div className="container">
        <div className="feed-container">
          <div className="feed-header">
            <h2>Feed de Publicaciones</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              ✏️ Nueva Publicación
            </button>
          </div>

          <div className="posts-list">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <CreatePostModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default Feed;