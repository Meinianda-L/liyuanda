import Hero from '../sections/Hero';
import About from '../sections/About';
import Reveal from '../components/Reveal';
import config from '../config';
import { Link } from 'react-router-dom';

const Home = () => {
  const { quote, theme, projects, blogs } = config;

  return (
    <>
      <Hero />
      <About />

      <section id="projects" className="min-h-screen flex items-center bg-[#f0f7ff] py-20">
        <div className="max-w-5xl mx-auto px-6 w-full text-center">
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-5">Projects</p>
          </Reveal>
          <Reveal delayMs={50}>
            <div className="flex justify-center mb-4">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7h16M4 17h16M7 4v16M17 4v16" />
                </svg>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              className="text-3xl md:text-4xl text-gray-900 leading-tight mb-5"
              style={{ fontFamily: theme.fontFamily.heading }}
            >
              Build, Test, Improve
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {projects.length > 0
                ? `${projects.length} project${projects.length > 1 ? 's are' : ' is'} available.`
                : 'No projects are published yet.'}
            </p>
          </Reveal>
          <Reveal delayMs={180}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: theme.primaryColor }}
            >
              View Projects
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="blog" className="min-h-screen flex items-center bg-[#edf4ff] py-20">
        <div className="max-w-5xl mx-auto px-6 w-full text-center">
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-5">Blog</p>
          </Reveal>
          <Reveal delayMs={50}>
            <div className="flex justify-center mb-4">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 4h10l4 4v12H5z" />
                  <path d="M15 4v4h4" />
                  <path d="M8 12h8M8 16h6" />
                </svg>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              className="text-3xl md:text-4xl text-gray-900 leading-tight mb-5"
              style={{ fontFamily: theme.fontFamily.heading }}
            >
              Notes and Reflections
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {blogs.length > 0
                ? `${blogs.length} blog post${blogs.length > 1 ? 's are' : ' is'} available.`
                : 'No blog posts are published yet.'}
            </p>
          </Reveal>
          <Reveal delayMs={180}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: theme.primaryColor }}
            >
              View Blog
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <Reveal>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-[1.4] mb-6"
              style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
            >
              "{quote.text}"
            </p>
          </Reveal>
          {quote.author ? (
            <Reveal delayMs={100}>
              <p
                className="text-base text-gray-500"
                style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
              >
                — {quote.author}
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Home;
