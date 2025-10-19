export function About() {
  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      school: "Gift University",
      period: "2021 — 2025",
    },
    {
      degree: "F.Sc (Pre-Medical) with Distinction",
      school: "Apex Group Of College",
      period: "2019 — 2021",
    },
    {
      degree: "Secondary Education",
      school: "Grammar Public School",
      period: "2011 — 2019",
    },
  ]

  const skills = {
    web: ["MongoDB", "Express", "React", "Node.js", "WordPress"],
    mobile: ["Flutter", "FlutterFlow", "React Native"],
    marketing: ["SEO", "Facebook/Instagram Ads", "Google Ads", "Social Media Marketing"],
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a passionate and results-driven developer with hands-on experience in Web Development (MERN Stack &
              WordPress), Mobile App Development (Flutter, Flutter Flow, React Native), and Digital Marketing. I build
              responsive, user-friendly websites and mobile apps — from small projects to full-scale professional
              solutions.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-foreground/70">{edu.school}</p>
                    <p className="text-sm text-foreground/60">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Digital Marketing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.marketing.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
