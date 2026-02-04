import { Heart, Copy, ExternalLink, Check, FileText } from "lucide-react";
import { useState } from "react";
import jioQR from "@/assets/jio-qr.jpeg";
import paypalQR from "@/assets/paypal-qr.png";

const kettoLink = "https://www.ketto.org/fundraiser/offer-a-helping-hand-to-support-oreos-treatment-1112171?utm_medium=copy&shby=1&utm_source=internal&utm_campaign=offer-a-helping-hand-to-support-oreos-treatment-1112171";
const medicalDocsLink = "https://drive.google.com/drive/folders/18S_H1lKaKcqVNjbccJL3Ihqb8-MAGCsr";

const DonateSection = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "saveoreo@jio";
  const paypalLink = "https://www.paypal.com/ncp/payment/NZ9Y8VYH97KK4";

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 px-4 bg-background relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="urgent-badge mb-4">
            <Heart className="w-4 h-4 animate-heartbeat" />
            Make a Difference
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Help Save <span className="text-gradient">Oreo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every contribution, no matter how small, brings Oreo one step closer to recovery. 
            Choose your preferred method below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* UPI Section */}
          <div className="qr-card text-center">
            <div className="tag-india mb-4">
              🇮🇳 India (UPI)
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Pay via UPI</h3>
            
            <div className="bg-white rounded-2xl p-4 mb-4 inline-block shadow-inner border border-border/30">
              <img 
                src={jioQR} 
                alt="Jio Finance UPI QR Code" 
                className="w-40 h-40 object-contain mx-auto"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Or copy UPI ID:</p>
              <div className="flex items-center justify-center gap-2">
                <code className="bg-muted/80 px-3 py-2 rounded-lg font-mono text-xs border border-border/50">
                  {upiId}
                </code>
                <button 
                  onClick={copyUPI}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-105"
                  title="Copy UPI ID"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-primary text-xs font-medium animate-fade-in">✓ Copied!</p>
              )}
            </div>
          </div>

          {/* Ketto Section */}
          <div className="qr-card text-center">
            <div className="tag-ketto mb-4">
              🏥 Ketto
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Donate via Ketto</h3>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 mb-4 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <div className="text-4xl mb-2">🩺</div>
                <p className="text-sm text-muted-foreground">Trusted Platform</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Verified fundraiser:</p>
              <a 
                href={kettoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ketto-btn"
              >
                <ExternalLink className="w-4 h-4" />
                Donate on Ketto
              </a>
            </div>
          </div>

          {/* PayPal Section */}
          <div className="qr-card text-center">
            <div className="tag-international mb-4">
              🌍 International (PayPal)
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Pay via PayPal</h3>
            
            <div className="bg-white rounded-2xl p-4 mb-4 inline-block shadow-inner border border-border/30">
              <img 
                src={paypalQR} 
                alt="PayPal QR Code" 
                className="w-40 h-40 object-contain mx-auto"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Or use the link:</p>
              <a 
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="paypal-btn"
              >
                <ExternalLink className="w-4 h-4" />
                Donate via PayPal
              </a>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="mt-12 text-center">
          <a 
            href={medicalDocsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
          >
            <FileText className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium">View All Medical Bills & Prescriptions</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
          <p className="text-xs text-muted-foreground mt-2">Full transparency - access all medical documents</p>
        </div>

        <div className="mt-16 text-center">
          <div className="card-warm max-w-2xl mx-auto p-8">
            <p className="text-xl font-display font-bold mb-3 text-gradient-gold">
              Every ₹1 Helps 🙏
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you cannot donate, please share this page with someone who can. 
              Your share could save Oreo's life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href={`https://twitter.com/intent/tweet?text=Please%20help%20save%20Oreo%20the%20cat!%20She's%20fighting%20for%20her%20life.&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn-dark"
              >
                Share on X
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn-blue"
              >
                Share on Facebook
              </a>
              <a 
                href={`https://wa.me/?text=Please%20help%20save%20Oreo%20the%20cat!%20${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn-green"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
