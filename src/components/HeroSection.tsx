import { Heart, MessageCircle } from "lucide-react";
import oreoImage from "@/assets/oreo-2.jpg";

const HeroSection = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex flex-col px-4 py-16 relative overflow-hidden">
      {/* Disclaimer Banner */}
      <div className="w-full bg-accent/10 border border-accent/30 rounded-xl p-4 mb-8 max-w-4xl mx-auto">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-foreground/90">
              <span className="font-semibold">Note:</span> My Reddit account was temporarily banned for posting too frequently, but I won't give up — I've filed an appeal!
            </p>
            <p className="text-muted-foreground mt-1">
              Meanwhile, you can contact me on Telegram: <a href="https://t.me/Abhishek_8008" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">@Abhishek_8008</a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 fade-in">
            <span className="urgent-badge">
              <Heart className="w-4 h-4 animate-heartbeat" />
              Urgent: Help Needed
            </span>
          </div>

          <div className="relative mb-12 fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden float-animation image-glow">
              <img
                src={oreoImage}
                alt="Oreo the cat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 card-glass px-6 py-2.5 rounded-full">
              <span className="font-display text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Oreo, 9 months old
              </span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in tracking-tight" style={{ animationDelay: '0.2s' }}>
            Please Help Us Save{" "}
            <span className="text-gradient">Oreo</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            A tiny kitten fighting for her life against glaucoma and liver damage. 
            <span className="font-semibold text-foreground"> Every contribution brings hope.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToDonate} className="btn-donate flex items-center gap-3 text-lg">
              <Heart className="w-5 h-5" />
              Donate Now
            </button>
            <a 
              href="#story" 
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium px-4 py-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Read Oreo's Story 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-bold text-gradient-gold">₹50K+</p>
              <p className="text-sm text-muted-foreground mt-1">Already Spent</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-bold text-gradient-gold">9</p>
              <p className="text-sm text-muted-foreground mt-1">Months Old</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-bold text-gradient">Critical</p>
              <p className="text-sm text-muted-foreground mt-1">Condition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
