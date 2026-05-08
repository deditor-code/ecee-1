import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Smartphone,
  Banknote,
  Package,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

type PaymentMethod = 'mtn' | 'airtel' | 'cod';

const DELIVERY_ZONES: Record<string, number> = {
  kampala_central: 5000,
  kampala_suburbs: 8000,
  upcountry: 20000,
  gulu: 15000,
  lira: 18000,
  mbarara: 18000,
  jinja: 10000,
};

const DELIVERY_LABELS: Record<string, string> = {
  kampala_central: 'Kampala Central (CBD)',
  kampala_suburbs: 'Kampala Suburbs / Entebbe Rd / Jinja Rd',
  gulu: 'Gulu City',
  lira: 'Lira City',
  mbarara: 'Mbarara City',
  jinja: 'Jinja City',
  upcountry: 'Other Upcountry Locations',
};

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState<'details' | 'payment' | 'confirm' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mtn');
  const [deliveryZone, setDeliveryZone] = useState('kampala_central');
  const [processing, setProcessing] = useState(false);
  const [orderRef] = useState(() => `ECEE-${Date.now().toString(36).toUpperCase()}`);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    momoPhone: '',
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const deliveryFee = DELIVERY_ZONES[deliveryZone] ?? 20000;
  const grandTotal = total + deliveryFee;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateDetails = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^(\+?256|0)[0-9]{9}$/.test(form.phone.replace(/\s/g, '')))
      newErrors.phone = 'Enter a valid Ugandan phone number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email address';
    if (!form.address.trim()) newErrors.address = 'Delivery address is required';
    return newErrors;
  };

  const validatePayment = () => {
    const newErrors: Partial<typeof form> = {};
    if (paymentMethod !== 'cod') {
      if (!form.momoPhone.trim()) newErrors.momoPhone = 'Mobile Money number is required';
      else if (!/^(\+?256|0)[0-9]{9}$/.test(form.momoPhone.replace(/\s/g, '')))
        newErrors.momoPhone = 'Enter a valid Ugandan phone number';
    }
    return newErrors;
  };

  const handleDetailsNext = () => {
    const errs = validateDetails();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep('payment');
  };

  const handlePaymentNext = () => {
    const errs = validatePayment();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep('confirm');
  };

  const handlePlaceOrder = () => {
    setProcessing(true);
    // Simulate processing delay (replace with real payment API integration)
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      setStep('success');
    }, 2500);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
            <Package size={36} className="text-white/20" />
          </div>
          <h2 className="text-2xl font-black mb-3">Your cart is empty</h2>
          <p className="text-white/40 mb-6">Add some merch before checking out!</p>
          <Link
            to="/merch"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neon text-black font-black rounded-full hover:bg-neon-light transition-all"
          >
            <ArrowLeft size={16} />
            Shop Merch
          </Link>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle size={48} className="text-neon" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-4">
            <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            <span className="text-neon text-xs font-semibold tracking-wider uppercase">Order Confirmed</span>
          </div>
          <h2 className="text-4xl font-black mb-3 tracking-tight">
            Order <span className="text-neon">Placed!</span>
          </h2>
          <p className="text-white/50 mb-2">
            Thank you, <span className="text-white font-bold">{form.name || 'Fan'}</span>! Your ECEE merch is on its way.
          </p>
          <p className="text-white/30 text-sm mb-8">
            We'll contact you on <span className="text-white/60">{form.phone}</span> to confirm delivery.
          </p>

          <div className="bg-[#111] border border-white/8 rounded-2xl p-6 mb-8 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/40 text-sm">Order Reference</span>
              <span className="font-black text-neon text-sm tracking-wider">{orderRef}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/40 text-sm">Payment</span>
              <span className="text-white/80 text-sm font-semibold">
                {paymentMethod === 'mtn' ? 'MTN Mobile Money' : paymentMethod === 'airtel' ? 'Airtel Money' : 'Cash on Delivery'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-sm">Total Paid</span>
              <span className="font-black text-lg">UGX {grandTotal.toLocaleString()}</span>
            </div>
          </div>

          {paymentMethod !== 'cod' && (
            <div className="bg-neon/5 border border-neon/20 rounded-2xl p-5 mb-8 text-left">
              <p className="text-neon font-bold text-sm mb-1 flex items-center gap-2">
                <Smartphone size={14} />
                Mobile Money Payment Instructions
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {paymentMethod === 'mtn'
                  ? 'Dial *165# → Send Money → Enter 0787-400-311 (ECEE Music UG) → Amount: UGX ' + grandTotal.toLocaleString() + ' → Use reference: ' + orderRef
                  : 'Dial *185# → Send Money → Enter 0757-400-311 (ECEE Music UG) → Amount: UGX ' + grandTotal.toLocaleString() + ' → Use reference: ' + orderRef}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/merch"
              className="flex-1 px-6 py-3.5 bg-neon text-black font-black rounded-xl hover:bg-neon-light transition-all text-center"
            >
              Shop More Merch
            </Link>
            <Link
              to="/"
              className="flex-1 px-6 py-3.5 border border-white/20 text-white font-bold rounded-xl hover:border-neon hover:text-neon transition-all text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon/60 focus:bg-white/8 transition-all';
  const labelClass = 'block text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5';
  const errorClass = 'flex items-center gap-1 text-red-400 text-xs mt-1';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/merch"
          className="inline-flex items-center gap-2 text-white/40 hover:text-neon text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Merch
        </Link>

        <h1 className="text-4xl font-black tracking-tight mb-2">
          Check<span className="text-neon">out</span>
        </h1>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10">
          {(['details', 'payment', 'confirm'] as const).map((s, i) => {
            const labels = ['Your Details', 'Payment', 'Confirm'];
            const stepIndex = ['details', 'payment', 'confirm'].indexOf(step);
            const isCurrent = step === s;
            const isDone = stepIndex > i;
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isCurrent ? 'bg-neon text-black' : isDone ? 'bg-neon/20 text-neon' : 'bg-white/5 text-white/30'
                }`}>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isCurrent ? 'bg-black/20' : isDone ? 'bg-neon/30' : 'bg-white/10'
                  }`}>{isDone ? '✓' : i + 1}</span>
                  {labels[i]}
                </div>
                {i < 2 && <ChevronRight size={14} className="text-white/20" />}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-6">

            {/* STEP 1: Details */}
            {step === 'details' && (
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 space-y-5">
                <h2 className="font-black text-lg">Contact & Delivery Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Okello"
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}><AlertCircle size={12} />{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0772 400 311"
                      className={inputClass}
                    />
                    {errors.phone && <p className={errorClass}><AlertCircle size={12} />{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address (optional)</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    type="email"
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}><AlertCircle size={12} />{errors.email}</p>}
                </div>

                <div>
                  <label className={labelClass}>Delivery Zone *</label>
                  <select
                    value={deliveryZone}
                    onChange={(e) => setDeliveryZone(e.target.value)}
                    className={inputClass}
                  >
                    {Object.entries(DELIVERY_LABELS).map(([key, label]) => (
                      <option key={key} value={key} className="bg-[#111]">{label}</option>
                    ))}
                  </select>
                  <p className="text-neon text-xs mt-1">
                    Delivery fee: UGX {deliveryFee.toLocaleString()}
                  </p>
                </div>

                <div>
                  <label className={labelClass}>Full Delivery Address *</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Building, street, landmark…"
                    className={inputClass}
                  />
                  {errors.address && <p className={errorClass}><AlertCircle size={12} />{errors.address}</p>}
                </div>

                <div>
                  <label className={labelClass}>Order Notes (optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Special instructions, preferred delivery time…"
                    rows={3}
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <button
                  onClick={handleDetailsNext}
                  className="w-full py-4 bg-neon text-black font-black rounded-xl hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all flex items-center justify-center gap-2 group"
                >
                  Continue to Payment
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* STEP 2: Payment */}
            {step === 'payment' && (
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 space-y-5">
                <h2 className="font-black text-lg">Choose Payment Method</h2>

                <div className="space-y-3">
                  {[
                    {
                      id: 'mtn' as PaymentMethod,
                      label: 'MTN Mobile Money',
                      sub: 'Pay via MTN MoMo – fast & secure',
                      emoji: '🟡',
                    },
                    {
                      id: 'airtel' as PaymentMethod,
                      label: 'Airtel Money',
                      sub: 'Pay via Airtel Money',
                      emoji: '🔴',
                    },
                    {
                      id: 'cod' as PaymentMethod,
                      label: 'Cash on Delivery',
                      sub: 'Pay when your order arrives',
                      emoji: '💵',
                    },
                  ].map(({ id, label, sub, emoji }) => (
                    <button
                      key={id}
                      onClick={() => setPaymentMethod(id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                        paymentMethod === id
                          ? 'border-neon bg-neon/5'
                          : 'border-white/8 bg-white/3 hover:border-white/20'
                      }`}
                    >
                      <span className="text-2xl">{emoji}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{label}</p>
                        <p className="text-white/40 text-xs">{sub}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        paymentMethod === id ? 'border-neon' : 'border-white/30'
                      }`}>
                        {paymentMethod === id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-neon" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {paymentMethod !== 'cod' && (
                  <div>
                    <label className={labelClass}>
                      {paymentMethod === 'mtn' ? 'MTN' : 'Airtel'} Mobile Money Number *
                    </label>
                    <input
                      name="momoPhone"
                      value={form.momoPhone}
                      onChange={handleChange}
                      placeholder={paymentMethod === 'mtn' ? 'e.g. 0772 000 000' : 'e.g. 0752 000 000'}
                      className={inputClass}
                    />
                    {errors.momoPhone && (
                      <p className={errorClass}><AlertCircle size={12} />{errors.momoPhone}</p>
                    )}
                    <p className="text-white/30 text-xs mt-1">
                      You'll receive a payment prompt on this number after placing your order.
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('details')}
                    className="flex-1 py-4 border border-white/15 text-white/60 font-bold rounded-xl hover:border-white/30 hover:text-white transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePaymentNext}
                    className="flex-1 py-4 bg-neon text-black font-black rounded-xl hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all flex items-center justify-center gap-2 group"
                  >
                    Review Order
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Confirm */}
            {step === 'confirm' && (
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 space-y-5">
                <h2 className="font-black text-lg">Review & Confirm Order</h2>

                {/* Details Summary */}
                <div className="bg-white/4 rounded-2xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Delivery To</p>
                  <p className="font-bold">{form.name}</p>
                  <p className="text-white/60 text-sm">{form.phone}</p>
                  {form.email && <p className="text-white/60 text-sm">{form.email}</p>}
                  <p className="text-white/60 text-sm">{form.address}</p>
                  <p className="text-white/50 text-xs">{DELIVERY_LABELS[deliveryZone]}</p>
                </div>

                <div className="bg-white/4 rounded-2xl p-4">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Payment Method</p>
                  <p className="font-bold flex items-center gap-2">
                    {paymentMethod === 'mtn' && <><span>🟡</span> MTN Mobile Money</>}
                    {paymentMethod === 'airtel' && <><span>🔴</span> Airtel Money</>}
                    {paymentMethod === 'cod' && <><span>💵</span> Cash on Delivery</>}
                  </p>
                  {paymentMethod !== 'cod' && (
                    <p className="text-white/50 text-sm mt-1">{form.momoPhone}</p>
                  )}
                </div>

                {form.notes && (
                  <div className="bg-white/4 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Notes</p>
                    <p className="text-white/60 text-sm">{form.notes}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('payment')}
                    className="flex-1 py-4 border border-white/15 text-white/60 font-bold rounded-xl hover:border-white/30 hover:text-white transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={processing}
                    className="flex-1 py-4 bg-neon text-black font-black rounded-xl hover:bg-neon-light hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {processing ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>
                        <CheckCircle size={18} />
                        Place Order — UGX {grandTotal.toLocaleString()}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-[#111] border border-white/8 rounded-3xl p-6 sticky top-28">
              <h3 className="font-black text-base mb-5 flex items-center gap-2">
                <Package size={16} className="text-neon" />
                Order Summary
              </h3>

              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-xl shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.variant}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-black">
                        UGX {(item.price * item.qty).toLocaleString()}
                      </p>
                      <p className="text-white/40 text-xs">×{item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-white/50">
                  <span>Subtotal</span>
                  <span>UGX {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-white/50">
                  <span>Delivery ({DELIVERY_LABELS[deliveryZone].split('(')[0].trim()})</span>
                  <span>UGX {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-black text-lg border-t border-white/8 pt-3 mt-2">
                  <span>Total</span>
                  <span className="text-neon">UGX {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Security note */}
              <div className="mt-5 flex items-start gap-2 bg-white/3 rounded-xl p-3">
                <Banknote size={14} className="text-neon mt-0.5 shrink-0" />
                <p className="text-white/40 text-xs leading-relaxed">
                  All orders are verified before dispatch. Payment is confirmed via Mobile Money receipt or Cash on Delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
