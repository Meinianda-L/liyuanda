import { Link } from 'react-router-dom';
import config from '../config';

const BlogPage = () => {
  const { theme } = config;

  return (
    <section className="min-h-screen bg-[#f0f7ff] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <Link to="/#blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          Back to Home
        </Link>
        <h1
          className="mt-6 text-4xl md:text-5xl text-gray-900"
          style={{ fontFamily: theme.fontFamily.heading }}
        >
          Blog
        </h1>
      </div>
    </section>
  );
};

export default BlogPage;
