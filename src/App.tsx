import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './sections/Navigation'
import Footer from './sections/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import SlowScroll from './components/SlowScroll'
import './App.css'

const ScrollToHash = () => {
  const { hash, pathname } = useLocation()

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }

    if (!tryScroll()) {
      setTimeout(tryScroll, 50)
    }
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SlowScroll />
      <ScrollToHash />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
