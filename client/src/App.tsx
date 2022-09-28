import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Restaurants } from './pages/Restaurants'
import { Favorites } from './pages/Favorites'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
