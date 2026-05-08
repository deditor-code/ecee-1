import { Award, Mic, Music, Zap, Heart, Globe, Star, Calendar } from 'lucide-react';

const timeline = [
  { year: '2018', title: 'The Beginning', desc: 'Ecee began his journey with his debut single "My Name"', icon: Mic },
  { year: '2019-2022', title: 'Finding His Sound', desc: 'Developed his genre-blending style, fusing hip-hop with Afrobeats and local language', icon: Music },
  { year: '2023', title: 'Rising Recognition', desc: 'Grew into one of Northern Uganda\'s strongest new voices', icon: Zap },
  { year: '2024', title: 'Award Season', desc: 'Won Northern Rapper of the Year & Collaboration of the Year at Hip Hop Music Awards', icon: Award },
  { year: '2024', title: 'Concysson EP', desc: 'Released his latest body of work, named in honor of his mother', icon: Heart },
  { year: 'Future', title: 'World Domination', desc: 'Carrying the Ugandan sound to the world stage', icon: Globe },
];

const influences = [
  { name: 'Travis Scott', desc: 'Dark, atmospheric soundscapes' },
  { name: 'Nasty C', desc: 'African hip-hop excellence' },
  { name: 'Lil Wayne', desc: 'Sharp lyricism & wordplay' },
  { name: 'Blxckie', desc: 'New wave African rap' },
];

const achievements = [
  { icon: Award, title: 'Northern Rapper of the Year', org: 'Hip Hop Music Awards 2024' },
  { icon: Star, title: 'Collaboration of the Year', org: 'Hip Hop Music Awards 2024' },
  { icon: Music, title: 'Concysson EP', org: 'Latest Release' },
  { icon: Calendar, title: 'Active Since 2018', org: '6+ Years in Music' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">About The Artist</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
              The <span className="text-gradient-green">Story</span>
            </h1>
            <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-3xl">
              <p>
                Ecee is a Ugandan rapper, singer, producer, and songwriter whose genre-blending sound bridges the
                raw energy of hip-hop with the vibrant pulse of Afrobeats. Born in <span className="text-white">Kitgum</span> and shaped by the
                cultures of <span className="text-white">Soroti</span>, <span className="text-white">Gulu</span>, and <span className="text-white">Kampala</span>, his music carries the grit,
                rhythm, and resilience of Northern Uganda while pushing toward global domination.
              </p>
              <p>
                Inspired by Travis Scott, Nasty C, Lil Wayne, and Blxckie, Ecee has built a lane defined by
                dark, atmospheric soundscapes, sharp lyricism, and a unique melodic touch. His signature strength
                is seamlessly switching between English and his local language, creating a style that feels both
                international and deeply rooted in home soil.
              </p>
              <p>
                With his hybrid style, cinematic vision, and relentless work ethic, Ecee is building not just
                songs, but a <span className="text-neon font-semibold">legacy</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-dark-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-neon" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musical Influences */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Musical <span className="text-neon">Influences</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">The artists who shaped ECEE's sound and vision.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {influences.map((influence, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mx-auto mb-4 group-hover:from-neon/30 group-hover:to-neon/10 transition-all">
                  <Music size={24} className="text-neon" />
                </div>
                <h3 className="font-bold text-white mb-1">{influence.name}</h3>
                <p className="text-white/40 text-xs">{influence.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-dark-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The <span className="text-neon">Journey</span>
            </h2>
            <p className="text-white/40">From "My Name" to world domination.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-neon/50 to-white/10" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-neon rounded-full -translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon size={18} className="text-neon" />
                        <span className="text-neon text-sm font-bold">{item.year}</span>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concysson EP Feature */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Concysson <span className="text-neon">EP</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                His latest body of work, the Concysson EP, is named in honor of his mother, reflecting
                both gratitude and ambition. The project showcases the full range of his artistry — from
                melodic trap to Afro-fusion — and marks a major step toward his long-term goal: becoming
                the biggest artist to ever rise out of Northern Uganda and carrying the Ugandan sound to
                the world stage.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium border border-neon/20">Gratitude</span>
                <span className="px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium border border-neon/20">Ambition</span>
                <span className="px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium border border-neon/20">Legacy</span>
                <span className="px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium border border-neon/20">Northern Uganda</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-neon/5 to-transparent rounded-3xl blur-2xl" />
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
        </div>
      </section>
    </div>
  );
}
