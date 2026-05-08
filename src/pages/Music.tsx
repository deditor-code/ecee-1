import { Play, ExternalLink, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    color: '#1DB954',
    description: 'Stream all of ECEE\'s music on Spotify',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/ug/artist/ecee/496045825',
    color: '#FA57C1',
    description: 'Listen on Apple Music',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Eceeug',
    color: '#FF0000',
    description: 'Watch music videos and content',
  },
];

const tracks = [
  { title: 'My Name', type: 'Single', year: '2018', description: 'The debut single that started it all — ECEE\'s introduction to the Ugandan music scene.' },
  { title: 'Concysson EP', type: 'EP', year: '2024', description: 'Named in honor of his mother. A full showcase of artistry from melodic trap to Afro-fusion.' },
];

export default function Music() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <Headphones size={14} className="text-neon" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">Discography</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              The <span className="text-gradient-green">Music</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Dark soundscapes, sharp lyricism, and a unique melodic touch. Stream ECEE's music across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Spotify Embed */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://open.spotify.com/embed/artist/4Fjy32nOkX6jFJlDjSjabL?utm_source=generator&theme=0"
                width="100%"
                height="600"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-16 md:py-24 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-12">
            Featured <span className="text-neon">Releases</span>
          </h2>

          <div className="space-y-6">
            {tracks.map((track, i) => (
              <div key={i} className="glass rounded-2xl p-6 md:p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center flex-shrink-0">
                    <Play size={32} className="text-neon" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold">{track.title}</h3>
                      <span className="px-3 py-0.5 rounded-full bg-neon/10 text-neon text-xs font-semibold">
                        {track.type}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm mb-3">{track.year}</p>
                    <p className="text-white/60">{track.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon text-black font-bold text-sm rounded-full hover:bg-neon-light transition-all"
                    >
                      <Play size={14} /> Spotify
                    </a>
                    <a
                      href="https://music.apple.com/ug/artist/ecee/496045825"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-bold text-sm rounded-full hover:border-neon hover:text-neon transition-all"
                    >
                      Apple Music
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream On All Platforms */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Stream on All <span className="text-neon">Platforms</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Find ECEE's music wherever you listen. Tap a platform to start streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-8 card-hover group text-center"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${platform.color}15`, border: `1px solid ${platform.color}30` }}
                >
                  <Play size={24} style={{ color: platform.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-white/40 text-sm mb-4">{platform.description}</p>
                <span className="inline-flex items-center gap-1 text-neon text-sm font-medium group-hover:gap-2 transition-all">
                  Listen Now <ExternalLink size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 md:py-24 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Watch on <span className="text-neon">YouTube</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Experience ECEE's cinematic vision through music videos, behind-the-scenes content,
                and exclusive releases on his YouTube channel.
              </p>
              <a
                href="https://www.youtube.com/@Eceeug"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all"
              >
                <ExternalLink size={16} /> Visit YouTube Channel
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-red-500/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-card aspect-video flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@Eceeug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 text-center p-8"
                >
                  <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">@Eceeug</p>
                    <p className="text-white/40 text-sm">Subscribe on YouTube</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Want ECEE at your <span className="text-neon">event</span>?
          </h2>
          <p className="text-white/50 mb-6">Book ECEE for performances, features, and brand collaborations.</p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
