import { Calendar, ExternalLink, ArrowUpRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Concysson EP — A Letter to His Mother',
    excerpt: 'ECEE\'s latest project, the Concysson EP, is a deeply personal body of work named in honor of his mother. It reflects both gratitude for where he comes from and ambition for where he\'s going. The EP traverses melodic trap, Afro-fusion, and hard-hitting hip-hop.',
    date: '2024',
    tags: ['EP Release', 'Concysson', 'New Music'],
    spotifyLink: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    category: 'Release',
  },
  {
    title: 'Northern Rapper of the Year — Hip Hop Music Awards 2024',
    excerpt: 'ECEE was crowned Northern Rapper of the Year at the 2024 Hip Hop Music Awards, cementing his place as a rising force in Uganda\'s music scene. This recognition is a testament to his relentless work ethic and the impact of his sound.',
    date: '2024',
    tags: ['Award', 'Hip Hop Awards', 'Recognition'],
    spotifyLink: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    category: 'Achievement',
  },
  {
    title: 'Collaboration of the Year — Making Moves',
    excerpt: 'Taking home Collaboration of the Year at the Hip Hop Music Awards 2024, ECEE continues to prove that his ability to work with diverse artists and create magic is unmatched. His genre-blending collaborations are pushing boundaries in Ugandan music.',
    date: '2024',
    tags: ['Award', 'Collaboration', 'Hip Hop Awards'],
    spotifyLink: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    category: 'Achievement',
  },
  {
    title: 'From Kitgum to Kampala — The Journey Continues',
    excerpt: 'Born in Kitgum and shaped by the cultures of Soroti, Gulu, and Kampala, ECEE\'s journey is one of grit, rhythm, and resilience. His music carries the spirit of Northern Uganda while resonating with audiences worldwide.',
    date: '2024',
    tags: ['Journey', 'Northern Uganda', 'Story'],
    spotifyLink: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    category: 'Story',
  },
  {
    title: 'Stream ECEE on All Platforms',
    excerpt: 'ECEE\'s music is available on Spotify, Apple Music, YouTube, and all major streaming platforms. Dive into his discography and experience the sound that\'s redefining Ugandan hip-hop.',
    date: '2024',
    tags: ['Streaming', 'Spotify', 'Apple Music'],
    spotifyLink: 'https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL',
    category: 'Music',
  },
];

const categories = ['All', 'Release', 'Achievement', 'Story', 'Music'];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <Tag size={14} className="text-neon" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              The <span className="text-gradient-green">Blog</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Stay updated with ECEE's latest releases, achievements, and journey from Northern Uganda to the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-neon text-black'
                    : 'bg-white/5 text-white/50 hover:text-neon hover:bg-neon/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article key={i} className="glass rounded-2xl overflow-hidden card-hover group flex flex-col">
                {/* Category header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/30 text-xs">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/30">#{tag}</span>
                    ))}
                  </div>

                  {/* Spotify Link */}
                  <a
                    href={post.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Listen on Spotify <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Embed in Blog */}
      <section className="py-16 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              Listen to <span className="text-neon">ECEE</span> Now
            </h2>
            <p className="text-white/40 text-sm">Stream the full discography on Spotify</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://open.spotify.com/embed/artist/4Fjy32nOkX6jFJlDjSjabL?utm_source=generator&theme=0"
                width="100%"
                height="380"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Be Part of the <span className="text-neon">Story</span>
          </h2>
          <p className="text-white/50 mb-6">Book ECEE for your next event or collaboration.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon-light transition-all"
            >
              Book ECEE <ArrowUpRight size={16} />
            </Link>
            <a
              href="https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon transition-all"
            >
              Follow on Spotify
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
