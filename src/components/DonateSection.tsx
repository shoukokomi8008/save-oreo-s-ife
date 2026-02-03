import { Heart, Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import upiQR from "@/assets/upi-qr.png";
import paypalQR from "@/assets/paypal-qr.png";

const DonateSection = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "saveoreo@airtel";
  const paypalLink = "https://www.paypal.com/ncp/payment/NZ9Y8VYH97KK4";

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 animate-heartbeat" />
            Make a Difference
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Help Save Oreo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution, no matter how small, brings Oreo one step closer to recovery. 
            Choose your preferred method below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* UPI Section */}
          <div className="qr-card text-center">
            <div className="tag-india mb-4">
              🇮🇳 India (UPI)
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Pay via UPI</h3>
            
            <div className="bg-card rounded-xl p-4 mb-4 inline-block shadow-inner border border-border">
              <img 
                src={upiQR} 
                alt="UPI QR Code" 
                className="w-56 h-56 object-contain mx-auto"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Or copy UPI ID:</p>
              <div className="flex items-center justify-center gap-2">
                <code className="bg-muted px-4 py-2 rounded-lg font-mono text-sm">
                  {upiId}
                </code>
                <button 
                  onClick={copyUPI}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                  title="Copy UPI ID"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-primary text-sm font-medium">Copied to clipboard!</p>
              )}
            </div>
          </div>

          {/* PayPal Section */}
          <div className="qr-card text-center">
            <div className="tag-international mb-4">
              🌍 International (PayPal)
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Pay via PayPal</h3>
            
            <div className="bg-card rounded-xl p-4 mb-4 inline-block shadow-inner border border-border">
              <img 
                src={paypalQR} 
                alt="PayPal QR Code" 
                className="w-56 h-56 object-contain mx-auto"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Or use the link:</p>
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

        <div className="mt-12 text-center">
          <div className="card-warm max-w-2xl mx-auto p-6">
            <p className="text-lg font-display font-semibold mb-2">
              Every ₹1 Helps 🙏
            </p>
            <p className="text-muted-foreground">
              If you cannot donate, please share this page with someone who can. 
              Your share could save Oreo's life.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
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
