import { Code, Library, Wrench, Database, BookOpen } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "SQL", "R Programming"],
  },
  {
    icon: Library,
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "Tesseract", "Matplotlib", "Seaborn"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["PowerBI", "VSCode", "Tableau", "Jupyter Notebook", "Kaggle Notebook"],
  },
  {
    icon: Database,
    title: "Cloud/Databases",
    skills: ["MongoDB", "MySQL", "Relational Databases"],
  },
  {
    icon: BookOpen,
    title: "Coursework",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Graph Analytics",
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Probability",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for data science and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/50 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
