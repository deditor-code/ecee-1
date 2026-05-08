import { useState } from 'react';
import { Heart, DollarSign, CheckCircle, Shield, CreditCard, Gift } from 'lucide-react';

const donationAmounts = [5, 10, 25, 50, 100, 250];

const supporterBenefits = [
  { icon: Heart, title: 'Fuel the Dream', desc: 'Your support helps ECEE create more music and reach a global audience.' },
  { icon: Gift, title: 'Exclusive Content', desc: 'Supporters get early access to new releases and behind-the-scenes content.' },
  { icon: Shield, title: 'Secure Payment', desc: 'Powered by Flutterwave — safe, secure, and trusted across Africa.' },
];

declare global {
  interface Window {
    FlutterwaveCheckout: (config: Record<string, unknown>) => void;
  }
}

export default function Support() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!amount || amount <= 0) return;

    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxxx', // Replace with ECEE's actual Flutterwave public key
        tx_ref: `ECEE-support-${Date.now()}`,
        amount: amount,
        currency: 'USD',
        payment_options: 'card,banktransfer,ussd,mobilemoney,mpesa',
        redirect_url: window.location.href,
        customer: {
          name: 'ECEE Supporter',
        },
        customizations: {
          title: 'Support ECEE Music',
          description: `Support ECEE with $${amount}`,
          logo: '/images/hero-bg.jpg',
        },
      });
    } else {
      // Fallback: redirect to Flutterwave payment link or show message
      alert(
        'Payment gateway is loading. Please ensure you have a stable internet connection and try again. ' +
        'Alternatively, you can send support directly to eceemusicug@gmail.com via PayPal or bank transfer.'
      );
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon/3 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
              <Heart size={14} className="text-neon" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">Support The Artist</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              Fuel the <span className="text-gradient-green">Dream</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Help ECEE carry the Ugandan sound to the world stage. Every contribution — big or small — 
              fuels the mission to become the biggest artist to ever rise out of Northern Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Supporter Benefits */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supporterBenefits.map((benefit, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-neon" />
                </div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Card */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-green rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  Make a <span className="text-neon">Contribution</span>
                </h2>
                <p className="text-white/50 text-sm">Choose an amount or enter a custom value</p>
              </div>

              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-neon text-black shadow-[0_0_20px_rgba(0,255,65,0.3)]'
                        : 'bg-white/5 text-white border border-white/10 hover:border-neon/30 hover:text-neon'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative mb-8">
                <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter custom amount"
                  className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/30 transition-all text-lg"
                />
              </div>

              {/* Total Display */}
              <div className="flex items-center justify-between py-4 border-t border-white/10 mb-8">
                <span className="text-white/50">Your contribution:</span>
                <span className="text-3xl font-black text-neon">
                  ${customAmount || selectedAmount || '0'}
                </span>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="w-full py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-neon-light hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Support ECEE Now
              </button>

              {/* Security Notice */}
              <div className="flex items-center justify-center gap-2 mt-4 text-white/30 text-xs">
                <Shield size={12} />
                <span>Secure payment powered by Flutterwave</span>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {['Card', 'Bank Transfer', 'Mobile Money', 'USSD'].map((method) => (
                  <span key={method} className="text-white/20 text-xs px-2 py-1 bg-white/5 rounded">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Support Does */}
      <section className="py-16 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              What Your Support <span className="text-neon">Does</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Studio Time & Production', desc: 'Fund recording sessions, mixing, and mastering to deliver world-class music.' },
              { title: 'Music Videos & Visuals', desc: 'Create cinematic visuals that bring ECEE\'s artistic vision to life.' },
              { title: 'Touring & Live Shows', desc: 'Help ECEE reach new cities and connect with fans across Africa and beyond.' },
              { title: 'Marketing & Promotion', desc: 'Amplify the Northern Ugandan sound to reach a global audience.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-4">Other Ways to Support</h2>
          <p className="text-white/50 mb-8">Can\'t donate? You can still support by streaming and sharing ECEE\'s music.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.spotify.com/artist/4Fjy32nOkX6jFJlDjSjabL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon-light transition-all"
            >
              Stream on Spotify
            </a>
            <a
              href="https://www.youtube.com/@Eceeug"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:border-neon hover:text-neon transition-all"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
