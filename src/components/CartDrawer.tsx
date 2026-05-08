import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#0d0d0d] border-l border-white/10 flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-neon" />
            <h2 className="text-lg font-black tracking-tight">Your Cart</h2>
            {count > 0 && (
              <span className="w-6 h-6 rounded-full bg-neon text-black text-xs font-black flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
            aria-label="Close cart"
          >
            <X size={16} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-20">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingBag size={32} className="text-white/20" />
              </div>
              <div>
                <p className="text-white/50 font-semibold">Your cart is empty</p>
                <p className="text-white/30 text-sm mt-1">Add some merch to get started!</p>
              </div>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-neon text-black font-black text-sm rounded-full hover:bg-neon-light transition-all"
              >
                Browse Merch
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white/4 rounded-2xl border border-white/8 hover:border-white/15 transition-colors"
              >
                {/* Image / Emoji */}
                <div className="w-16 h-16 rounded-xl bg-white/8 flex items-center justify-center text-3xl shrink-0">
                  {item.image}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm leading-tight truncate">{item.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{item.variant}</p>
                  <p className="text-neon font-black text-sm mt-1">
                    UGX {item.price.toLocaleString()}
                  </p>

                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={10} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={10} />
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center hover:bg-red-500/25 text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/8 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Subtotal ({count} {count === 1 ? 'item' : 'items'})</span>
              <span className="font-black text-lg">UGX {total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-white/30">
              Delivery fee calculated at checkout based on your location.
            </p>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-2 py-4 bg-neon text-black font-black rounded-xl hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300 active:scale-98 group"
            >
              Proceed to Checkout
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={closeCart}
              className="w-full py-3 border border-white/15 text-white/60 font-semibold text-sm rounded-xl hover:border-white/30 hover:text-white transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
