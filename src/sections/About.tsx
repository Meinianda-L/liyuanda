import { Link } from 'react-router-dom';
import config from '../config';

const About = () => {
  const { about, theme } = config;
  const [firstImage, secondImage] = about.images;

  return (
    <section id="about" className="bg-[#faf6f0] py-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">
              {about.sectionTitle}
            </span>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 leading-[1.5] mb-8"
              style={{ fontFamily: theme.fontFamily.heading }}
            >
              {about.shortDescription}
            </h2>
            <Link
              to={about.ctaButton.href}
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: theme.primaryColor }}
            >
              {about.ctaButton.text}
            </Link>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            {firstImage ? (
              <div className="absolute left-0 top-0 w-52 md:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={firstImage.src} alt={firstImage.alt} className="w-full h-full object-cover" />
              </div>
            ) : null}
            {secondImage ? (
              <div className="absolute right-0 bottom-0 w-48 md:w-60 lg:w-68 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={secondImage.src} alt={secondImage.alt} className="w-full h-full object-cover" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
