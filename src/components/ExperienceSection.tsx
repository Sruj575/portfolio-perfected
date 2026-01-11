import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experience in data operations and analytics
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="glass-card rounded-xl p-6 md:p-8 md:ml-auto md:w-[calc(50%-2rem)] relative gradient-border">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:-left-[calc(50%+2rem+0.5rem)] top-8 w-4 h-4 rounded-full bg-primary glow-primary -translate-x-1/2 md:translate-x-0" />

              <div className="flex items-center gap-2 text-primary mb-4">
                <Briefcase size={20} />
                <span className="font-display font-semibold">Auraa Aerospace</span>
              </div>

              <h3 className="text-xl font-display font-semibold mb-2">
                Data and Operations Support
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>May - June 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>On Site</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Managed and cleaned operational datasets to improve retrieval efficiency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Created technical and financial pitch decks using analytical insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Conducted research on 5G communication for drones including bandwidth and data handling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Gained exposure to IoT pipelines and drone telemetry systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Analyzed project and academic data for loan documentation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
