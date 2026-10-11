/// <reference types="vite/client" />

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Interests from './pages/Interests'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-ink">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App