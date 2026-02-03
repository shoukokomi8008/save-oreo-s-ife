import { Heart } from "lucide-react";
import oreoImage from "@/assets/oreo-2.jpg";

const HeroSection = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 fade-in">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4 animate-heartbeat" />
            Urgent: Help Needed
          </span>
        </div>

        <div className="relative mb-10 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 float-animation">
            <img
              src={oreoImage}
              alt="Oreo the cat"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-full shadow-lg border border-border">
            <span className="font-display text-lg font-semibold">Oreo, 9 months old</span>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          Please Help Us Save{" "}
          <span className="text-gradient">Oreo</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
          A tiny kitten fighting for her life. She needs your help to survive glaucoma and liver damage. 
          <span className="font-semibold text-foreground"> Every rupee counts.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in" style={{ animationDelay: '0.4s' }}>
          <button onClick={scrollToDonate} className="btn-donate flex items-center gap-2 text-lg">
            <Heart className="w-5 h-5" />
            Donate Now
          </button>
          <a 
            href="#story" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Read Oreo's Story →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary">₹50K+</p>
            <p className="text-sm text-muted-foreground">Already Spent</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-2xl md:text-3xl font-bold text-primary">9</p>
            <p className="text-sm text-muted-foreground">Months Old</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary">Critical</p>
            <p className="text-sm text-muted-foreground">Condition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
