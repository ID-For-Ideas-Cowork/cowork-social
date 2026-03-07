import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

/**
 * Página de perfil de usuario
 * 
 * TODO: FE-03 - Implementar:
 * - Modo edición del perfil
 * - Upload de foto de perfil
 * - Sección de skills
 * - Lista de publicaciones del usuario
 * - Botón de seguir/dejar de seguir
 */
const Profile = () => {
  const { userId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock data - vendría de la API
  const mockUser = {
    name: 'Ana Martínez',
    bio: 'Full Stack Developer apasionada por tecnología y código abierto. Me encanta aprender y compartir conocimientos.',
    location: 'Madrid, España',
    skills: ['React', 'Node.js', 'Python', 'MongoDB'],
    followers: 234,
    following: 189,
    posts: 45
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-container">
          {/* Header con cover y avatar */}
          <div className="profile-header">
            <div className="profile-cover"></div>
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                {mockUser.name.charAt(0)}
              </div>
              {userId === 'me' && (
                <button 
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? '💾 Guardar' : '✏️ Editar Perfil'}
                </button>
              )}
            </div>
          </div>

          {/* Información del perfil */}
          <div className="profile-info card">
            <h2>{mockUser.name}</h2>
            <p className="profile-location">📍 {mockUser.location}</p>
            <p className="profile-bio">{mockUser.bio}</p>

            {/* Stats */}
            <div className="profile-stats">
              <div className="stat-item">
                <strong>{mockUser.posts}</strong>
                <span>Publicaciones</span>
              </div>
              <div className="stat-item">
                <strong>{mockUser.followers}</strong>
                <span>Seguidores</span>
              </div>
              <div className="stat-item">
                <strong>{mockUser.following}</strong>
                <span>Siguiendo</span>
              </div>
            </div>

            {/* Skills */}
            <div className="profile-skills">
              <h3>Habilidades</h3>
              <div className="skills-list">
                {mockUser.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Publicaciones del usuario */}
          <div className="profile-posts">
            <h3>Publicaciones</h3>
            <p className="coming-soon">Las publicaciones del usuario se mostrarán aquí...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
