import { useState } from 'react';
import {
  Mail,
  MapPin,
  Calendar,
  Users,
  Send,
  CheckCircle,
  Clock,
  Globe,
  Mic,
} from 'lucide-react';

const packages = [
  {
    title: 'Live Performance',
    description: 'Full live performance with ECEE. Includes soundcheck, meet & greet, and exclusive merchandise.',
    features: ['Full Set Performance', 'Meet & Greet', 'Sound Check', 'Social Media Mention'],
    icon: Mic,
  },
  {
    title: 'Featured Collaboration',
    description: 'Get ECEE on your track. Includes verse recording, mixing consultation, and promo support.',
    features: ['Verse / Hook', 'Studio Session', 'Mixing Notes', 'Social Promo'],
    icon: Globe,
  },
  {
    title: 'Brand Partnership',
    description: 'Partner with ECEE for brand endorsements, ambassador deals, and campaign collaborations.',
    features: ['Brand Endorsement', 'Content Creation', 'Social Campaign', 'Event Appearances'],
    icon: Users,
  },
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    date: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-neon/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-neon" />
          </div>
          <h2 className="text-3xl font-black mb-4">Request Sent!</h2>
          <p className="text-white/50 mb-6">
            Thank you for your interest in booking ECEE. We'll review your request and get back to you within 24-48 hours.
          </p>
          <div className="glass rounded-2xl p-6 mb-6">
            <p className="text-white/40 text-sm mb-2">For urgent inquiries, contact:</p>
            <a href="mailto:eceemusicug@gmail.com" className="text-neon font-medium hover:underline">
              eceemusicug@gmail.com
            </a>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 border border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <Calendar size={14} className="text-neon" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">Artist Booking</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              Book <span className="text-gradient-green">ECEE</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mb-8">
              Available for live performances, featured collaborations, brand partnerships, and more.
              Let's create something legendary together.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/40">
                <Mail size={14} className="text-neon" />
                <a href="mailto:eceemusicug@gmail.com" className="hover:text-neon transition-colors">eceemusicug@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin size={14} className="text-neon" />
                <span>Kampala, Uganda (Available Worldwide)</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <Clock size={14} className="text-neon" />
                <span>Response within 24-48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Packages */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black mb-8">
            Booking <span className="text-neon">Options</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4">
                  <pkg.icon size={22} className="text-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-white/50 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                      <CheckCircle size={14} className="text-neon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Submit a <span className="text-neon">Booking Request</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Fill out the form below and our team will get back to you within 24-48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+256 XXX XXX XXX"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Organization / Company</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your company or organization"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Event Type *</label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all appearance-none"
                >
                  <option value="" className="bg-dark">Select event type</option>
                  <option value="concert" className="bg-dark">Concert / Live Performance</option>
                  <option value="festival" className="bg-dark">Festival</option>
                  <option value="collaboration" className="bg-dark">Featured Collaboration</option>
                  <option value="brand" className="bg-dark">Brand Partnership</option>
                  <option value="private" className="bg-dark">Private Event</option>
                  <option value="other" className="bg-dark">Other</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Proposed Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Event Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all appearance-none"
                >
                  <option value="" className="bg-dark">Select budget range</option>
                  <option value="under-1k" className="bg-dark">Under $1,000</option>
                  <option value="1k-5k" className="bg-dark">$1,000 - $5,000</option>
                  <option value="5k-10k" className="bg-dark">$5,000 - $10,000</option>
                  <option value="10k-plus" className="bg-dark">$10,000+</option>
                  <option value="negotiable" className="bg-dark">Negotiable</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-white/60 mb-2">Additional Details</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your event, expectations, and any special requirements..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300"
              >
                <Send size={16} />
                Submit Booking Request
              </button>
              <p className="text-white/30 text-xs">
                We'll respond within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-4">Prefer Direct Contact?</h2>
          <p className="text-white/50 mb-6">Reach out directly via email for faster response.</p>
          <a
            href="mailto:eceemusicug@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 border border-neon/30 text-neon font-bold rounded-full hover:bg-neon/10 transition-all"
          >
            <Mail size={16} />
            eceemusicug@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
