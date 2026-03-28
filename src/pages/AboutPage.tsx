import { Link } from 'react-router-dom';
import config from '../config';
import Reveal from '../components/Reveal';

const AboutPage = () => {
  const { aboutPage, theme } = config;

  return (
    <div className="bg-white min-h-screen">
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/#about"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1
            className="text-5xl md:text-6xl font-normal text-gray-900 italic"
            style={{ fontFamily: theme.fontFamily.heading }}
          >
            {aboutPage.title}
          </h1>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${theme.primaryColor}1A` }}
            >
              <svg className="w-6 h-6" fill="none" stroke={theme.primaryColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2
              className="text-4xl md:text-5xl font-normal text-gray-900"
              style={{ fontFamily: theme.fontFamily.heading }}
            >
              {aboutPage.journeyTitle}
            </h2>
          </div>

          {aboutPage.journeyCards.map((card, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={card.title} delayMs={index * 80}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    reverse ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      {card.tag}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-normal text-gray-900 mb-4"
                      style={{ fontFamily: theme.fontFamily.heading }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>

                  <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={(event) => {
                          const target = event.currentTarget;
                          if (card.fallbackImage && target.src !== card.fallbackImage) {
                            target.src = card.fallbackImage;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f0f7ff]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${theme.primaryColor}1A` }}
            >
              <svg className="w-6 h-6" fill="none" stroke={theme.primaryColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2
              className="text-4xl md:text-5xl font-normal text-gray-900"
              style={{ fontFamily: theme.fontFamily.heading }}
            >
              {aboutPage.awardsTitle}
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.primaryColor}80, ${theme.primaryColor}30)`,
              }}
            />

            {aboutPage.awardsByYear.map((yearBlock, index) => {
              const isRight = index % 2 === 1;
              const containerClass = isRight
                ? 'ml-24 md:ml-[calc(50%+3rem)]'
                : 'ml-24 md:ml-0 md:mr-[calc(50%+3rem)]';
              const badgeRotate = isRight ? '-rotate-2' : 'rotate-3';

              return (
                <Reveal key={yearBlock.year} delayMs={index * 120}>
                  <div className="relative mb-12">
                    <div
                      className={`absolute left-0 md:left-1/2 w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg md:-translate-x-1/2 z-10 ${badgeRotate}`}
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      <span className="text-xs opacity-80">Year</span>
                      <span className="text-xl font-bold">{yearBlock.year}</span>
                    </div>

                    <div className={containerClass}>
                      <div className="space-y-4">
                        {yearBlock.items.map((item) => (
                          <div
                            key={item.title}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4"
                            style={{ borderLeftColor: theme.primaryColor }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className="px-2 py-0.5 rounded text-xs font-medium"
                                style={{
                                  backgroundColor: `${theme.primaryColor}1A`,
                                  color: theme.primaryColor,
                                }}
                              >
                                {item.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
