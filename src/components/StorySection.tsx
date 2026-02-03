import { Heart, AlertTriangle, Clock, Shield } from "lucide-react";
import oreoImage1 from "@/assets/oreo-1.png";

const StorySection = () => {
  return (
    <section id="story" className="py-24 px-4 bg-card relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Her Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Oreo's Story
          </h2>
          <p className="text-muted-foreground text-lg">
            A fighter from day one — this is her journey
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="sticky top-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl image-glow">
                <img 
                  src={oreoImage1} 
                  alt="Oreo as a kitten" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl card-glass">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Born in our home</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl card-glass">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Protected against all odds</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl card-glass">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Part of our family</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="card-warm p-6 border-l-4 border-l-accent">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">Urgent Appeal</span>
              </div>
              <p className="text-2xl font-display font-bold mb-2">
                PLEASE HELP US SAVE OREO
              </p>
              <p className="text-muted-foreground">
                Oreo is just <span className="story-highlight">9 MONTHS OLD.</span>
              </p>
            </div>

            <div className="space-y-5 text-foreground/90 leading-relaxed text-[17px]">
              <p>
                She was born inside our home when a stray cat gave birth to two kittens—Oreo and her sister Brownie. We did not plan to adopt them but we grew attached and they became <span className="story-highlight">PART OF OUR FAMILY.</span>
              </p>

              <p>
                Our whole building was against us. People kept forcing us to throw them out on the streets. <span className="story-highlight">WE FOUGHT EVERYONE AND KEPT THEM SAFE.</span>
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 my-8">
                <p className="font-bold text-accent text-lg mb-3">
                  Now OREO IS FIGHTING FOR HER LIFE.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She suddenly fell very sick. There were <span className="font-semibold text-foreground">CONTINUOUS SEIZURES</span>, emergency hospital visits and <span className="font-semibold text-foreground">GLUCOSE INJECTIONS EVERY FEW HOURS.</span> My mom and brother stayed awake all night, running back and forth to the hospital just to keep her alive.
                </p>
              </div>

              <p>
                We have already spent <span className="story-highlight">AROUND ₹50,000</span> on her treatment.
              </p>

              <p>
                She was diagnosed with <span className="story-highlight">GLAUCOMA AND HAS LOST VISION IN ONE EYE.</span> The seizures damaged her body badly and caused a <span className="story-highlight">LIVER RUPTURE.</span> Cats have <span className="font-semibold">EXTREMELY DELICATE LIVERS</span> and her condition is still <span className="story-highlight">CRITICAL.</span>
              </p>

              <p>
                She survived this far only because <span className="story-highlight">SHE KEPT FIGHTING</span> and because <span className="story-highlight">WE REFUSED TO GIVE UP.</span>
              </p>

              <p>
                But we are <span className="font-semibold">EXHAUSTED—EMOTIONALLY AND FINANCIALLY.</span> Still, <span className="story-highlight">WE CANNOT LET HER DIE.</span>
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
                <p className="font-display text-xl font-bold mb-3">
                  We are doing everything we can but WE NEED HELP.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you love animals or if you believe that <span className="font-semibold text-foreground">EVERY LIFE MATTERS</span>, please consider donating. <span className="story-highlight">EVEN ₹1 HELPS.</span> And if you cannot donate, please <span className="font-semibold text-foreground">SHARE THIS WITH SOMEONE WHO CAN.</span>
                </p>
              </div>

              <div className="text-center pt-6 pb-2">
                <p className="text-lg text-muted-foreground italic mb-3">
                  We are not asking for charity.
                </p>
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  WE ARE ASKING FOR A CHANCE TO SAVE A LIFE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
