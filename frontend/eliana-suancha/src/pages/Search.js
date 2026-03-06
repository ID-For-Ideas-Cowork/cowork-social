import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import mockUsers from '../data/mockUsers';
import './Search.css';

const allSkills = [...new Set(mockUsers.flatMap(u => u.skills))].sort();

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      const matchesName = user.name.toLowerCase().includes(query.toLowerCase());
      const matchesSkill = selectedSkill
        ? user.skills.includes(selectedSkill)
        : true;
      return matchesName && matchesSkill;
    });
  }, [query, selectedSkill]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(prev => (prev === skill ? '' : skill));
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedSkill('');
  };

  const hasFilters = query || selectedSkill;

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-container">
          <div className="search-header">
            <h2>Buscar Usuarios</h2>
            <p className="search-subtitle">Encuentra profesionales y colaboradores</p>
          </div>

          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nombre..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="clear-input" onClick={() => setQuery('')} aria-label="Limpiar">✕</button>
            )}
          </div>

          <div className="skills-filter">
            <span className="filter-label">Filtrar por skill:</span>
            <div className="skills-tags">
              {allSkills.map(skill => (
                <button
                  key={skill}
                  className={`skill-filter-btn ${selectedSkill === skill ? 'active' : ''}`}
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="search-results-info">
            <span>{filteredUsers.length} usuario{filteredUsers.length !== 1 ? 's' : ''} encontrado{filteredUsers.length !== 1 ? 's' : ''}</span>
            {hasFilters && (
              <button className="clear-filters" onClick={clearFilters}>
                Limpiar filtros
              </button>
            )}
          </div>

          {filteredUsers.length > 0 ? (
            <div className="users-grid">
              {filteredUsers.map(user => (
                <div key={user.id} className="user-card card">
                  <div className="user-card-header">
                    <div className="user-avatar">
                      {user.name.charAt(0)}
                    </div>
                    <div className="user-info">
                      <h3 className="user-name">{user.name}</h3>
                      <span className="user-location">📍 {user.location}</span>
                    </div>
                  </div>

                  <p className="user-bio">{user.bio}</p>

                  <div className="user-skills">
                    {user.skills.map(skill => (
                      <span
                        key={skill}
                        className={`user-skill-tag ${selectedSkill === skill ? 'highlighted' : ''}`}
                        onClick={() => handleSkillClick(skill)}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link to={`/profile/${user.id}`} className="btn btn-secondary view-profile-btn">
                    Ver Perfil
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>No se encontraron usuarios con esos filtros.</p>
              <button className="btn btn-secondary" onClick={clearFilters}>
                Limpiar filtros
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Search;
