import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Star, ChevronDown } from 'lucide-react';

const socials = [
  { name: 'YouTube', url: 'https://www.youtube.com/@Eceeug', svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL', svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.36c-.2.3-.56.4-.86.2-2.36-1.44-5.33-1.77-8.83-.97-.34.08-.66-.14-.74-.46-.08-.34.14-.66.46-.74 3.83-.87 7.12-.5 9.77 1.12.3.18.4.56.2.85zm1.23-2.73c-.24.38-.76.5-1.14.24-2.7-1.66-6.82-2.14-10.02-1.17-.4.12-.82-.1-.94-.5-.12-.4.1-.82.5-.94 3.65-1.1 8.18-.57 11.28 1.33.36.22.48.74.24 1.1zm.1-2.84C14.4 8.78 8.7 8.56 5.62 9.48c-.5.14-1-.14-1.16-.62-.14-.5.14-1 .62-1.16C8.7 6.56 15 6.82 19.12 9.2c.44.26.6.86.34 1.3-.26.44-.86.6-1.3.34z"/>' },
  { name: 'Apple Music', url: 'https://music.apple.com/ug/artist/ecee/496045825', svg: '<path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.96 1.04 1.882.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.298.22.39.03.78.05 1.172.05h12.118c.235-.017.47-.027.704-.05.665-.057 1.312-.18 1.927-.438 1.376-.585 2.28-1.553 2.79-2.95.183-.51.282-1.043.345-1.582.053-.448.078-.897.08-1.347V6.124z"/>' },
  { name: 'Facebook', url: 'https://www.facebook.com/eceemusic/', svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
  { name: 'Instagram', url: 'https://www.instagram.com/eceeug_/', svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
];

const stats = [
  { number: '2018', label: 'Debut Year' },
  { number: '2', label: 'Awards Won' },
  { number: 'EP', label: 'Concysson' },
  { number: '∞', label: 'Potential' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="ECEE performing on stage"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        </div>

        {/* Green accent lines */}
        <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-neon/30 to-transparent" />
        <div className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-transparent via-neon/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">Northern Uganda's Finest</span>
            </div>
          </div>

          <h1 className="animate-slide-up text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
            EC<span className="text-gradient-green">EE</span>
          </h1>

          <p className="animate-slide-up delay-200 text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 font-light" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Rapper • Singer • Producer • Songwriter
          </p>

          <p className="animate-slide-up delay-300 text-sm md:text-base text-white/40 max-w-xl mx-auto mb-8 font-light" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Bridging the raw energy of hip-hop with the vibrant pulse of Afrobeats.
            From Northern Uganda to the world stage.
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <Link
              to="/music"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon-light hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all duration-300 group"
            >
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Listen Now
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon hover:bg-neon/5 transition-all duration-300"
            >
              Book ECEE
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex items-center justify-center gap-3 mb-16" style={{ animationDelay: '0.8s', opacity: 0 }}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-neon hover:border-neon/30 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: social.svg }} />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <ChevronDown className="mx-auto text-white/20 animate-bounce" size={24} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-8 border-y border-white/5 bg-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-neon">{stat.number}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 mb-6">
                <Star size={12} className="text-neon" />
                <span className="text-neon text-xs font-semibold tracking-wider uppercase">Latest Release</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                Concysson <span className="text-neon">EP</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6 max-w-lg">
                Named in honor of his mother, the Concysson EP reflects both gratitude and ambition.
                This project showcases the full range of ECEE's artistry — from melodic trap to
                Afro-fusion — marking a major step toward becoming the biggest artist to rise out of
                Northern Uganda.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Hip-Hop', 'Afrobeats', 'Melodic Trap', 'Afro-Fusion'].map((genre) => (
                  <span key={genre} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon-light transition-all"
                >
                  Stream on Spotify
                </a>
                <a
                  href="https://music.apple.com/ug/artist/ecee/496045825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon transition-all"
                >
                  Apple Music
                </a>
              </div>
            </div>

            {/* Spotify Embed */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://open.spotify.com/embed/artist/4Fjy32nOkX6jFJlDjSjabL?utm_source=generator&theme=0"
                  width="100%"
                  height="480"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                  style={{ borderRadius: '16px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Marquee */}
      <section className="py-6 border-y border-white/5 overflow-hidden bg-dark-card/50">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              {['Northern Rapper of the Year 2024', 'Collaboration of the Year 2024', 'Concysson EP Out Now', 'Hip Hop Music Awards Winner', 'From Kitgum to the World', 'Building a Legacy'].map((text, j) => (
                <span key={j} className="text-white/20 text-lg font-bold flex items-center gap-4">
                  <span className="w-2 h-2 bg-neon rounded-full" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Music Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Feel the <span className="text-neon">Vibe</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Stream ECEE's music across all platforms. Dark soundscapes, sharp lyricism, and a unique melodic touch.
            </p>
          </div>

          {/* Featured Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center">
                  <Play size={20} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-bold">My Name</h3>
                  <p className="text-white/40 text-sm">Debut Single • 2018</p>
                </div>
              </div>
              <p className="text-white/40 text-sm">The single that started it all. ECEE's introduction to the world.</p>
            </div>

            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center">
                  <Play size={20} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-bold">Concysson EP</h3>
                  <p className="text-white/40 text-sm">Latest Project • 2024</p>
                </div>
              </div>
              <p className="text-white/40 text-sm">Named in honor of his mother. A journey through melodic trap and Afro-fusion.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neon/30 text-neon font-bold rounded-full hover:bg-neon/10 transition-all"
            >
              Explore All Music <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-gradient-to-b from-dark to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Support the <span className="text-neon">Movement</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Help ECEE carry the Ugandan sound to the world stage. Every contribution fuels the dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300"
            >
              Support ECEE
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon transition-all"
            >
              Book for Events
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Watch <span className="text-neon">ECEE</span>
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto">
            Experience the visuals. Watch the latest from ECEE on YouTube.
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6lFG5vwJsDU?si=4IKoedWhr1L9gjPD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
