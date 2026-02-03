import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border/50 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <Heart className="w-5 h-5 text-primary animate-heartbeat" />
          <span className="font-display text-xl font-bold text-gradient">Save Oreo</span>
        </div>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
          Thank you for taking the time to read Oreo's story. 
          Your kindness means the world to us.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Made with love for Oreo 🧡
        </p>
      </div>
    </footer>
  );
};

export default Footer;
