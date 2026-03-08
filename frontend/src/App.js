import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './cristian-landeira/pages/Home';
import Login from './cristian-landeira/pages/Login';
import Register from './cristian-landeira/pages/Register';
import Profile from './cristian-landeira/pages/Profile';
import Feed from './cristian-landeira/pages/Feed';
import Search from './cristian-landeira/pages/Search';
import NotFound from './pages/NotFound';


// Components
import Navbar from './cristian-landeira/components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
