import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  svg: string;
}

const socials: SocialLink[] = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Eceeug',
    svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.36c-.2.3-.56.4-.86.2-2.36-1.44-5.33-1.77-8.83-.97-.34.08-.66-.14-.74-.46-.08-.34.14-.66.46-.74 3.83-.87 7.12-.5 9.77 1.12.3.18.4.56.2.85zm1.23-2.73c-.24.38-.76.5-1.14.24-2.7-1.66-6.82-2.14-10.02-1.17-.4.12-.82-.1-.94-.5-.12-.4.1-.82.5-.94 3.65-1.1 8.18-.57 11.28 1.33.36.22.48.74.24 1.1zm.1-2.84C14.4 8.78 8.7 8.56 5.62 9.48c-.5.14-1-.14-1.16-.62-.14-.5.14-1 .62-1.16C8.7 6.56 15 6.82 19.12 9.2c.44.26.6.86.34 1.3-.26.44-.86.6-1.3.34z"/>',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/ug/artist/ecee/496045825',
    svg: '<path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.96 1.04 1.882.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.298.22.39.03.78.05 1.172.05h12.118c.235-.017.47-.027.704-.05.665-.057 1.312-.18 1.927-.438 1.376-.585 2.28-1.553 2.79-2.95.183-.51.282-1.043.345-1.582.053-.448.078-.897.08-1.347V6.124zM17.5 13.645v3.855c0 .598-.224.932-.764 1.1-.398.123-.81.16-1.224.16-.183 0-.275-.093-.28-.278-.01-.27-.02-.543-.04-.813-.027-.357-.173-.51-.53-.527-.264-.013-.53-.01-.793-.032-.402-.032-.59-.225-.62-.624-.02-.27-.025-.542-.025-.813V9.4c0-.5.18-.73.67-.78.358-.036.72-.05 1.08-.05.272 0 .38.1.4.374.028.35.04.702.055 1.053.016.358.195.553.545.578.278.02.56.018.84.033.353.02.54.22.565.57.02.27.025.543.025.814v1.66zm-6.635-3.86c.095-.785.53-1.247 1.298-1.396.373-.072.757-.09 1.137-.087.19 0 .287.096.287.287v2.07c0 .287-.096.396-.383.396h-.72c-.627 0-.96.29-.99.92-.016.317-.02.636-.02.954v3.91c0 .366-.112.483-.477.483h-1.2c-.332 0-.457-.13-.457-.462v-4.37c0-.602.005-1.204.015-1.806.01-.524.068-1.044.168-1.558l.662.66z"/>',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/eceemusic/',
    svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/eceeug_/',
    svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  },
];

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Merch', path: '/merch' },
  { name: 'Blog', path: '/blog' },
  { name: 'Booking', path: '/booking' },
  { name: 'Support', path: '/support' },
];

function SocialIcon({ svgPath, size = 16 }: { svgPath: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: svgPath }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-neon/10 via-dark-card to-neon/10 rounded-2xl p-8 md:p-12 border border-neon/20 text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Ready to <span className="text-neon">collaborate</span>?
          </h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Book ECEE for your next event, feature, or brand partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300"
            >
              Book Now <ArrowUpRight size={16} />
            </Link>
            <a
              href="mailto:eceemusicug@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-neon/30 text-neon font-bold rounded-full hover:bg-neon/10 transition-all duration-300"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg">E</span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                EC<span className="text-neon">EE</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Ugandan rapper, singer, producer, and songwriter bridging hip-hop with Afrobeats.
              Building not just songs, but a legacy from Northern Uganda to the world.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} />
              <span>Kampala, Uganda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 text-sm hover:text-neon transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-neon transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                    <SocialIcon svgPath={social.svg} />
                  </div>
                  {social.name}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:eceemusicug@gmail.com"
                className="text-white/50 text-sm hover:text-neon transition-colors"
              >
                eceemusicug@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ECEE Music. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-neon transition-colors duration-200"
                aria-label={social.name}
              >
                <SocialIcon svgPath={social.svg} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
