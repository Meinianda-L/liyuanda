import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import PreviewSection from './sections/PreviewSection'
import Quote from './sections/Quote'
import Footer from './sections/Footer'
import config from './config'
import './App.css'

function App() {
  const { preview } = config;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        {preview.projects.enabled && (
          <PreviewSection 
            type="projects"
            title={preview.projects.title}
            subtitle={preview.projects.subtitle}
            items={preview.projects.items}
            viewAllLink={preview.projects.viewAllLink}
            viewAllText={preview.projects.viewAllText}
          />
        )}
        {preview.blog.enabled && (
          <PreviewSection 
            type="blog"
            title={preview.blog.title}
            subtitle={preview.blog.subtitle}
            items={preview.blog.items}
            viewAllLink={preview.blog.viewAllLink}
            viewAllText={preview.blog.viewAllText}
          />
        )}
        <Quote />
      </main>
      <Footer />
    </div>
  )
}

export default App
