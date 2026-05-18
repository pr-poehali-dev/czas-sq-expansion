import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Лендинг фитнес-клуба",
    category: "Лендинг",
    image: "/restaurant-website-design.png",
    description:
      "Продающий лендинг для премиум фитнес-клуба. Конверсия с посетителя в заявку — 8,4%. Анимации, онлайн-запись и интеграция с CRM.",
    url: "#",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Интернет-магазин одежды",
    category: "E-commerce",
    image: "/modern-ecommerce-website.png",
    description:
      "Полнофункциональный магазин с каталогом, фильтрами, корзиной и оплатой. Запустили за 3 недели. Уже в первый месяц — 150+ заказов.",
    url: "#",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Корпоративный сайт агентства",
    category: "Корпоративный сайт",
    image: "/professional-corporate-website.png",
    description:
      "Представительский сайт для PR-агентства с блогом, командой и кейсами. SEO-оптимизация вывела сайт в топ-5 по целевым запросам за 2 месяца.",
    url: "#",
    tags: ["React", "CMS", "SEO", "Tailwind CSS"],
  },
  {
    title: "Портфолио и личный бренд",
    category: "Портфолио-сайт",
    image: "/creative-portfolio-website.png",
    description:
      "Персональный сайт для дизайнера с анимированным портфолио, кейсами и блогом. Тёмная тема, плавные переходы, высокий балл в Lighthouse.",
    url: "#",
    tags: ["React", "GSAP", "TypeScript", "Framer Motion"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наше портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Несколько примеров из более чем 70 реализованных проектов. Каждый — уникальный дизайн и измеримый результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => project.url !== "#" && window.open(project.url, "_blank")}
                  >
                    Смотреть кейс <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}