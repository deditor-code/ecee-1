import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Merch', path: '/merch' },
  { name: 'Blog', path: '/blog' },
  { name: 'Booking', path: '/booking' },
  { name: 'Support', path: '/support' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-neon rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300">
              <span className="text-black font-black text-sm md:text-base">E</span>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight">
              EC<span className="text-neon">EE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-neon text-black'
                    : 'text-white/70 hover:text-neon hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Cart */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-neon transition-all duration-300"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-neon text-black text-[10px] font-black flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
            <Link
              to="/booking"
              className="px-6 py-2.5 bg-neon text-black font-bold text-sm rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300"
            >
              Book ECEE
            </Link>
          </div>

          {/* Mobile Cart + Menu */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2 text-white/70 hover:text-neon transition-colors"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-neon text-black text-[9px] font-black flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-neon transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? 'bg-neon text-black'
                  : 'text-white/70 hover:text-neon hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="block mt-3 px-4 py-3 bg-neon text-black font-bold text-sm rounded-lg text-center"
          >
            Book ECEE
          </Link>
        </div>
      </div>
    </nav>
  );
}
