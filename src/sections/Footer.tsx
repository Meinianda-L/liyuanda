import config from '../config';
import Reveal from '../components/Reveal';

const Footer = () => {
  const { personal, footer } = config;

  return (
    <footer id="contact" className="bg-[#070c1c] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <Reveal>
            <div>
              <div className="text-3xl font-medium mb-4">{personal.logo}</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {footer.description}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {personal.email}
                  </a>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">
                    WeChat: {personal.wechat}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={200}>
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">{footer.copyright}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
