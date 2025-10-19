import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce MERN App",
      description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-website-shopping.png",
    },
    {
      title: "School Management App",
      description: "Mobile application for managing student records, attendance, and grades using Flutter.",
      tags: ["Flutter", "Firebase", "Dart"],
      image: "/school-management-app.jpg",
    },
    {
      title: "WordPress Custom Theme",
      description: "Custom WordPress theme for local business with SEO optimization and responsive design.",
      tags: ["WordPress", "PHP", "CSS", "SEO"],
      image: "/wordpress-website-design.jpg",
    },
    {
      title: "Social Media Campaign",
      description: "Managed Facebook and Instagram ads campaign resulting in 35% engagement lift.",
      tags: ["Facebook Ads", "Instagram", "Analytics"],
      image: "/social-media-campaign.png",
    },
    {
      title: "React Native Chat App",
      description: "Real-time messaging application built with React Native and Firebase backend.",
      tags: ["React Native", "Firebase", "JavaScript"],
      image: "/chat-application-messaging.jpg",
    },
    {
      title: "SEO Optimization Project",
      description:
        "Improved website ranking from page 5 to page 1 for target keywords through comprehensive SEO strategy.",
      tags: ["SEO", "Analytics", "Content"],
      image: "/seo-concept.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
