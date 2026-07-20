import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './design-system.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="pixel-grid-bg" style={{ minHeight: '100vh' }}>
        <Nav />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
