import React, { useState } from 'react';
import { mockUsers } from '../data/mockUsers'; //Se importa la base de datos local
import './Search.css';


/**
 * Componente Search: Permite buscar y filtrar profesionales por nombre o habilidad.
 * Tarea: FE-03 - Buscador de Usuarios.
 */
const Search = () => {
  // // Estado para capturar el texto que el usuario ingresa en el buscador
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Lógica de filtrado dinámico:
   * 1. Se utiliza .filter() para crear un nuevo array con los usuarios que coinciden.
   * 2. Se aplica .toLowerCase() para que la búsqueda ignore mayúsculas/minúsculas.
   * 3. Se busca coincidencia tanto en el nombre (name) como en las habilidades (skill).
   */
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Buscador de Usuarios 🔍 </h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre o tecnología (ej: React)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="results-grid">
        {/* Renderizado condicional: si hay resultados, mapea las tarjetas; si no, muestra aviso */}
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <h3>{user.name}</h3>
              <p>{user.skill}</p>
              <button className="view-profile-btn">Ver Perfil</button>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron usuarios con "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;