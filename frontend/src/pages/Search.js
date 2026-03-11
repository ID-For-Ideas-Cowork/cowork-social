import React, { useState } from "react";
import "./Search.css";
import { mockUsers } from "../data/mockUsers";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredUsers = mockUsers.filter((user) => {
    const search = query.toLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.skills.join(" ").toLowerCase().includes(search)
    );
  });

  return (
    <div className="container">
      <h1>Buscar Usuarios</h1>

      <input
        type="text"
        placeholder="Buscar por nombre o skill..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {/* Users grid */}
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div key={user.id} className="card user-card">
            <h3>{user.name}</h3>
            <p>{user.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
