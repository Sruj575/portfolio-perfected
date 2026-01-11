import { Plane, Brain, TrendingUp, Shield, Activity } from "lucide-react";

const projects = [
  {
    icon: Plane,
    title: "Autonomous Surveillance Drone Navigation",
    description:
      "Simulated a grid-based autonomous surveillance drone environment with obstacles, intrusions, and energy constraints using BFS, Greedy search, and Q-Learning for navigation and target interception.",
    details:
      "Designed a reward-driven decision system with heuristic control to balance exploration–exploitation, enforce path safety, and automatically return the drone to base under low-energy or mission-complete conditions.",
    tags: ["Q-Learning", "BFS", "Reinforcement Learning", "Python"],
  },
  {
    icon: Brain,
    title: "Medical Image Enhancement for Brain Tumor",
    description:
      "Developed a data visualization–driven medical image enhancement pipeline for MRI brain tumor images.",
    details:
      "Applied image preprocessing techniques such as contrast enhancement, filtering, and segmentation to improve tumor visibility and enable clearer visual interpretation to assist in downstream diagnostic analysis.",
    tags: ["OpenCV", "Image Processing", "Medical Imaging", "Python"],
  },
  {
    icon: TrendingUp,
    title: "Transformer-Based LOB Forecasting",
    description:
      "Developed a hierarchical Transformer (HLAT) with spatial–temporal attention and latency-aware features to predict mid-price movements from high-frequency LOB data.",
    details:
      "Achieved up to 94.12% accuracy on LOBSTER MSFT 10/50-level data, outperforming DeepLOB, HLOB, and CNN+LSTM baselines.",
    tags: ["Transformers", "Deep Learning", "FinTech", "Time Series"],
  },
  {
    icon: Shield,
    title: "Fake Job Detection using Explainable ORF",
    description:
      "Built a fake job detection system using machine learning with Explainable Online Random Forests (ORF).",
    details:
      "Engineered textual and metadata features from job postings to improve classification accuracy and provide interpretable results.",
    tags: ["Random Forests", "NLP", "Classification", "XAI"],
  },
  {
    icon: Activity,
    title: "Dengue Fever Prediction using SIR + ML",
    description:
      "Built a hybrid SIR–ML framework estimating time-varying β, γ and forecasting them with Random Forest and XGBoost using time-series cross-validation.",
    details:
      "Simulated future infection trajectories using the SIR model with RK4 integration and evaluated predictions against ground truth using RMSE, MAE, MAPE, and R2.",
    tags: ["XGBoost", "Random Forest", "Epidemiology", "Time Series"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in data science, machine learning, and AI
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <project.icon size={28} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-sm text-muted-foreground/80 mb-4">{project.details}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
