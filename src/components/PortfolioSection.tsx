import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Жилой комплекс «Зелёный квартал»",
    category: "Жилое строительство",
    image: "/restaurant-website-design.png",
    description:
      "Экологичный жилой комплекс на 320 квартир. Зелёные кровли, солнечные панели, система сбора дождевой воды. Сдан в срок, в рамках бюджета.",
    tags: ["Жильё", "Эко-технологии", "Казань"],
  },
  {
    title: "Бизнес-центр «Панорама»",
    category: "Коммерческое строительство",
    image: "/professional-corporate-website.png",
    description:
      "12-этажный офисный центр класса А. Фасад с вентилируемой системой, панорамное остекление, современная инженерия. Площадь 18 000 м².",
    tags: ["Коммерция", "Офис", "Фасад"],
  },
  {
    title: "Парк «Экоквартал»",
    category: "Благоустройство",
    image: "/modern-ecommerce-website.png",
    description:
      "Комплексное благоустройство городского квартала: ландшафтный дизайн, велодорожки, детские площадки, 500 высаженных деревьев.",
    tags: ["Благоустройство", "Озеленение", "Экология"],
  },
  {
    title: "Загородный жилой посёлок",
    category: "Малоэтажное строительство",
    image: "/creative-portfolio-website.png",
    description:
      "48 коттеджей из экологически чистых материалов. Единый архитектурный стиль, инфраструктура, общественные зелёные зоны.",
    tags: ["Коттеджи", "Эко-материалы", "Инфраструктура"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

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
                  >
                    Подробнее <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                {/* Green overlay badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'hsl(148,57%,23%)' }}>
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
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