import { Heart, AlertTriangle, Clock, Shield } from "lucide-react";
import oreoImage1 from "@/assets/oreo-1.png";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Oreo's Story
          </h2>
          <p className="text-muted-foreground text-lg">
            A fighter from day one
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="sticky top-8">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-border">
                <img 
                  src={oreoImage1} 
                  alt="Oreo as a kitten" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">Born in our home</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Protected against all odds</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm">Part of our family</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="card-warm p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-warm-coral" />
                <span className="font-semibold text-warm-coral">Urgent Appeal</span>
              </div>
              <p className="text-xl font-display font-semibold mb-2">
                PLEASE HELP US SAVE OREO
              </p>
              <p className="text-muted-foreground">
                Oreo is just <span className="story-highlight">9 MONTHS OLD.</span>
              </p>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                She was born inside our home when a stray cat gave birth to two kittens—Oreo and her sister Brownie. We did not plan to adopt them but we grew attached and they became <span className="story-highlight">PART OF OUR FAMILY.</span>
              </p>

              <p>
                Our whole building was against us. People kept forcing us to throw them out on the streets. <span className="story-highlight">WE FOUGHT EVERYONE AND KEPT THEM SAFE.</span>
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 my-6">
                <p className="font-semibold text-destructive mb-2">
                  Now OREO IS FIGHTING FOR HER LIFE.
                </p>
                <p className="text-muted-foreground">
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

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 my-6">
                <p className="font-display text-lg font-semibold mb-2">
                  We are doing everything we can but WE NEED HELP.
                </p>
                <p className="text-muted-foreground">
                  If you love animals or if you believe that <span className="font-semibold text-foreground">EVERY LIFE MATTERS</span>, please consider donating. <span className="story-highlight">EVEN ₹1 HELPS.</span> And if you cannot donate, please <span className="font-semibold text-foreground">SHARE THIS WITH SOMEONE WHO CAN.</span>
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg text-muted-foreground italic">
                  We are not asking for charity.
                </p>
                <p className="font-display text-2xl font-bold text-gradient mt-2">
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
