import { Button } from "@/components/ui/button"
import { ArrowRight, HardHat, Building2, Leaf } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/32067507-171f-4139-8d2f-0b034a6bdb19/files/e1bbfabc-dcb4-45d2-adb7-dcfb0b403fd8.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* City skyline decorative bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-skyline pointer-events-none opacity-60" />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Building2
          className="absolute text-primary/20 animate-float"
          style={{ top: "15%", left: "8%", animationDelay: "0s" }}
          size={48}
        />
        <Leaf
          className="absolute text-primary/20 animate-float"
          style={{ top: "20%", right: "12%", animationDelay: "2s" }}
          size={40}
        />
        <HardHat
          className="absolute text-primary/20 animate-float"
          style={{ bottom: "25%", left: "15%", animationDelay: "1s" }}
          size={36}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary tracking-wide">Строительная компания полного цикла</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up text-balance"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Строим для{" "}
          <span className="text-primary relative inline-block">
            людей
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
            </svg>
          </span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground">
            Создаём будущее
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Проектирование, строительство и отделка под ключ. Экологичные решения для комфортной жизни и бизнеса.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            asChild
          >
            <a href="#contact">
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#portfolio">Наши объекты</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>15+ лет на рынке</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>200+ сданных объектов</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Экологичные технологии</span>
          </div>
        </div>
      </div>
    </section>
  )
}