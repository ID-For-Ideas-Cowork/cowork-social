import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navbar global */}
        <Navbar />
        
        {/* contenido principal */}
        <main className="main-content">
          <Routes>
            {/* rutas publicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            
            {/* rutas privadas */}
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:userId" element={<Profile />} />
            
            {/* ruta 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;