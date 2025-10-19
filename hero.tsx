import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Areeba</h1>
              <p className="text-xl text-primary font-semibold mb-2">Web Developer
</p>
              <p className="text-lg text-foreground/80 text-balance">
                Building responsive websites and mobile apps using MERN, Flutter & React Native. I also deliver
                measurable growth through SEO and targeted digital campaigns.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 space-y-2 text-sm text-foreground/70">
              <p>📧 areebamehar65@gmail.com</p>
              <p>📱 +92 325 6270239</p>
              <p>📍 Gujranwala, Pakistan</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <Image
                src="/images/design-mode/image.jpg"
                alt="Areeba"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
