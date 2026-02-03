import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary" />
          <span className="font-display text-xl font-semibold">Save Oreo</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Thank you for taking the time to read Oreo's story. 
          Your kindness means the world to us.
        </p>
        <p className="text-xs text-muted-foreground">
          Made with love for Oreo 🧡
        </p>
      </div>
    </footer>
  );
};

export default Footer;
