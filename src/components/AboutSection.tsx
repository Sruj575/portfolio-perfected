import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate data science enthusiast with a strong foundation in machine learning and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my Integrated MSc in Data Science at Amrita Vishwa Vidyapeetham, 
                Coimbatore (2022-2027). With a CGPA of 7.94, I've been deeply involved in various 
                data science projects ranging from autonomous drone navigation systems to medical image 
                enhancement for brain tumor visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across Python, Machine Learning, Deep Learning, and Data Visualization. 
                I'm particularly interested in applying AI to solve complex real-world problems, especially 
                in healthcare and financial technology domains.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solving", "Self-learning", "Presentation", "Adaptability"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="glass-card rounded-xl p-6 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">Integrated MSc Data Science</p>
                    <p className="text-sm text-primary">Amrita Vishwa Vidyapeetham</p>
                    <p className="text-xs text-muted-foreground mt-1">CGPA: 7.94 | 2022-2027</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Focus Areas</h3>
                    <p className="text-sm text-muted-foreground">
                      Machine Learning, Deep Learning, NLP, Data Visualization, Graph Analytics
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Interests</h3>
                    <p className="text-sm text-muted-foreground">
                      Data Science, Analytics, Visualization, and AI-driven solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
