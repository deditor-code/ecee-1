import { useState } from 'react';
import { ShoppingBag, Plus, Minus, Star, Truck, Shield, RefreshCw, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

/* ─── Product catalogue ─────────────────────────────────────────── */
const products = [
  {
    id: 'tshirt',
    name: 'ECEE T-Shirt',
    tagline: 'Rep the movement. Day or night.',
    price: 40000,
    emoji: '👕',
    gradient: 'from-zinc-900 to-zinc-800',
    accent: 'text-neon',
    badge: 'Best Seller',
    colors: ['Black', 'White', 'Forest Green'],
    colorHex: { Black: '#111', White: '#f5f5f5', 'Forest Green': '#1a4731' },
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Premium heavyweight cotton tee featuring the iconic ECEE logo. Screen-printed with water-based inks that last wash after wash.',
    features: ['100% Heavy Cotton', 'Screen Printed Logo', 'Pre-shrunk Fabric', 'Unisex Cut'],
  },
  {
    id: 'hoodie',
    name: 'ECEE Hoodie',
    tagline: 'Stay warm. Stay ECEE.',
    price: 65000,
    emoji: '🧥',
    gradient: 'from-neutral-900 to-neutral-800',
    accent: 'text-neon',
    badge: 'Premium',
    colors: ['Jet Black', 'Charcoal', 'Olive'],
    colorHex: { 'Jet Black': '#0a0a0a', Charcoal: '#3a3a3a', Olive: '#3d4a2e' },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Thick pullover hoodie with embroidered ECEE branding on the chest and back graphic print. Double-lined hood, kangaroo pocket.',
    features: ['340gsm Fleece Blend', 'Embroidered Logo', 'Double Hood Lining', 'Ribbed Cuffs & Hem'],
  },
  {
    id: 'cap',
    name: 'ECEE Cap',
    tagline: 'Wear the crown.',
    price: 15000,
    emoji: '🧢',
    gradient: 'from-stone-900 to-stone-800',
    accent: 'text-neon',
    badge: 'New Drop',
    colors: ['Black', 'Cream', 'Camo'],
    colorHex: { Black: '#111', Cream: '#f0e8d8', Camo: '#4a5240' },
    sizes: ['One Size'],
    description:
      'Structured 5-panel cap with embroidered ECEE logo. Adjustable snapback closure — one size fits all.',
    features: ['5-Panel Structured', 'Embroidered Logo', 'Snapback Closure', 'Moisture-Wicking Sweatband'],
  },
];

const perks = [
  { icon: Truck, label: 'Kampala Delivery', sub: '2–4 business days' },
  { icon: Shield, label: 'Quality Guaranteed', sub: '100% authentic merch' },
  { icon: RefreshCw, label: 'Easy Returns', sub: '7-day return policy' },
  { icon: Zap, label: 'Fast Processing', sub: 'Orders confirmed same day' },
];

/* ─── Product Card ─────────────────────────────────────────────── */
function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    const variantId = `${product.id}-${selectedColor}-${selectedSize}`;
    addItem({
      id: variantId,
      productId: product.id,
      name: product.name,
      variant: `${selectedColor} / ${selectedSize}`,
      color: selectedColor,
      size: selectedSize,
      price: product.price,
      image: product.emoji,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col bg-[#111] border border-white/8 rounded-3xl overflow-hidden hover:border-neon/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,65,0.08)]">
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-neon text-black text-xs font-black rounded-full tracking-wider">
          {product.badge}
        </span>
      </div>

      {/* Product Visual */}
      <div className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-8xl select-none group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
          {product.emoji}
        </span>
        {/* Decorative lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-xl font-black tracking-tight">{product.name}</h3>
          <p className="text-white/40 text-sm mt-0.5">{product.tagline}</p>
          <p className="text-2xl font-black text-neon mt-2">
            UGX {product.price.toLocaleString()}
          </p>
        </div>

        <p className="text-white/55 text-sm leading-relaxed">{product.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5">
          {product.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5 text-xs text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Color Picker */}
        <div>
          <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-semibold">
            Color — <span className="text-white/70">{selectedColor}</span>
          </p>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                title={c}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === c
                    ? 'border-neon scale-110 shadow-[0_0_10px_rgba(0,255,65,0.5)]'
                    : 'border-white/20 hover:border-white/50'
                }`}
                style={{
                  backgroundColor: (product.colorHex as Record<string, string>)[c],
                  outline: c === 'White' || c === 'Cream' ? '1px solid rgba(255,255,255,0.15)' : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* Size Picker */}
        <div>
          <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-semibold">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                  selectedSize === s
                    ? 'bg-neon text-black border-neon'
                    : 'bg-transparent text-white/60 border-white/15 hover:border-neon/50 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={12} className="fill-neon text-neon" />
          ))}
          <span className="text-white/40 text-xs ml-1">(5.0)</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-black text-sm tracking-wide transition-all duration-300 ${
            added
              ? 'bg-neon/20 text-neon border border-neon'
              : 'bg-neon text-black hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] active:scale-95'
          }`}
        >
          {added ? (
            <>
              <span className="w-4 h-4 rounded-full bg-neon flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l2.5 2.5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              Add to Cart — UGX {product.price.toLocaleString()}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Merch() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-neon/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
            <ShoppingBag size={14} className="text-neon" />
            <span className="text-neon text-xs font-semibold tracking-wider uppercase">Official Merch Store</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
            ECEE <span className="text-neon">MERCH</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-4">
            Wear the music. Rep the brand. Look fire doing it.
          </p>
          <p className="text-white/30 text-sm">
            All items are officially designed and shipped from Kampala, Uganda.
          </p>
        </div>
      </section>

      {/* Perks Bar */}
      <section className="border-y border-white/8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neon/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-neon" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{label}</p>
                  <p className="text-xs text-white/40">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              Latest <span className="text-neon">Drops</span>
            </h2>
            <p className="text-white/40 text-sm mt-1">
              {products.length} items available
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            In Stock
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Size Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#111] border border-white/8 rounded-3xl p-8">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-neon/20 flex items-center justify-center text-neon text-xs">📏</span>
            Size Guide
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-6 text-white/40 font-semibold">Size</th>
                  <th className="text-left py-2 pr-6 text-white/40 font-semibold">Chest (cm)</th>
                  <th className="text-left py-2 pr-6 text-white/40 font-semibold">Length (cm)</th>
                  <th className="text-left py-2 pr-6 text-white/40 font-semibold">Shoulder (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['XS', '86–91', '66', '40'],
                  ['S', '91–96', '68', '42'],
                  ['M', '96–101', '71', '44'],
                  ['L', '101–107', '74', '46'],
                  ['XL', '107–112', '76', '48'],
                  ['XXL', '112–117', '79', '50'],
                ].map(([size, chest, length, shoulder]) => (
                  <tr key={size} className="hover:bg-white/3 transition-colors">
                    <td className="py-2.5 pr-6 font-bold text-neon">{size}</td>
                    <td className="py-2.5 pr-6 text-white/70">{chest}</td>
                    <td className="py-2.5 pr-6 text-white/70">{length}</td>
                    <td className="py-2.5 pr-6 text-white/70">{shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neon/15 via-neon/5 to-transparent border border-neon/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              Can't find your size?
            </h3>
            <p className="text-white/50">
              Contact us directly for custom orders, bulk purchases, or pre-orders.
            </p>
          </div>
          <a
            href="mailto:eceemusicug@gmail.com"
            className="shrink-0 px-8 py-3.5 bg-neon text-black font-black rounded-full hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
