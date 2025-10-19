import { Code2, Smartphone, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive, modern websites using MERN Stack and WordPress with custom themes and plugins.",
      image: "/web-development-coding-laptop.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating user-friendly mobile applications using Flutter, FlutterFlow, and React Native.",
      image: "/mobile-app-development.png",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Driving measurable growth through SEO, social media ads, and targeted digital campaigns.",
      image: "/digital-marketing-analytics-growth.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80 mb-4">
            Interested in working together? Let's build something great.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact for Quote
          </a>
        </div>
      </div>
    </section>
  )
}
