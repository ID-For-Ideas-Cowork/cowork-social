import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import mockUsers from '../data/mockUsers';
import './Search.css';

/**
 * Página de búsqueda de usuarios
 * Permite filtrar por nombre y por skill
 */
const Search = () => {
  const [searchName, setSearchName] = useState('');
  const [searchSkill, setSearchSkill] = useState('');

  // Lista de skills únicas para el selector de filtro
  const allSkills = useMemo(() => {
    const skillSet = new Set();
    mockUsers.forEach(user => user.skills.forEach(skill => skillSet.add(skill)));
    return Array.from(skillSet).sort();
  }, []);

  // Filtrado reactivo de usuarios
  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      const matchesName = user.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchesSkill =
        searchSkill === '' ||
        user.skills.some(skill =>
          skill.toLowerCase().includes(searchSkill.toLowerCase())
        );
      return matchesName && matchesSkill;
    });
  }, [searchName, searchSkill]);

  const handleClearFilters = () => {
    setSearchName('');
    setSearchSkill('');
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-header">
          <h1>🔍 Buscador de Usuarios</h1>
          <p className="search-subtitle">
            Descubre profesionales y conecta con la comunidad
          </p>
        </div>

        {/* Filtros */}
        <div className="search-filters card">
          <div className="filters-row">
            <div className="filter-group">
              <label htmlFor="search-name" className="filter-label">
                Por nombre
              </label>
              <input
                id="search-name"
                type="text"
                className="search-input"
                placeholder="Ej: Ana García..."
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="search-skill" className="filter-label">
                Por skill
              </label>
              <select
                id="search-skill"
                className="search-select"
                value={searchSkill}
                onChange={e => setSearchSkill(e.target.value)}
              >
                <option value="">Todas las skills</option>
                {allSkills.map(skill => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>

            {(searchName || searchSkill) && (
              <button className="btn btn-secondary clear-btn" onClick={handleClearFilters}>
                ✕ Limpiar filtros
              </button>
            )}
          </div>

          <p className="results-count">
            {filteredUsers.length === mockUsers.length
              ? `${mockUsers.length} usuarios`
              : `${filteredUsers.length} de ${mockUsers.length} usuarios`}
          </p>
        </div>

        {/* Resultados */}
        {filteredUsers.length > 0 ? (
          <div className="users-grid">
            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} searchSkill={searchSkill} />
            ))}
          </div>
        ) : (
          <div className="no-results card">
            <span className="no-results-icon">😕</span>
            <h3>Sin resultados</h3>
            <p>No se encontraron usuarios con esos filtros.</p>
            <button className="btn btn-primary" onClick={handleClearFilters}>
              Ver todos los usuarios
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Card individual de usuario en resultados de búsqueda
 */
const UserCard = ({ user, searchSkill }) => {
  return (
    <div className="user-card card">
      <div className="user-card-header">
        <div className="user-avatar">{user.name.charAt(0)}</div>
        <div className="user-card-info">
          <h3 className="user-card-name">{user.name}</h3>
          <span className="user-card-username">@{user.username}</span>
          <span className="user-card-location">📍 {user.location}</span>
        </div>
      </div>

      <p className="user-card-bio">{user.bio}</p>

      <div className="user-card-skills">
        {user.skills.map((skill, index) => (
          <span
            key={index}
            className={`skill-tag ${skill === searchSkill ? 'skill-tag--highlighted' : ''}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="user-card-footer">
        <div className="user-card-stats">
          <span><strong>{user.followers}</strong> seguidores</span>
          <span><strong>{user.following}</strong> siguiendo</span>
        </div>
        <Link to={`/profile/${user.id}`} className="btn btn-primary btn-sm">
          Ver perfil
        </Link>
      </div>
    </div>
  );
};

export default Search;
