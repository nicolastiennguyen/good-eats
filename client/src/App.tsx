import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Navbar } from './components/Navbar';
import { Container } from 'react-bootstrap';
import { About } from './pages/About';
import { Saved } from './pages/Saved';
import { Home } from './pages/Home';

function App() {
  return (
    <Container className="mb-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
