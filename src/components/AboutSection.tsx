import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Leaf } from "lucide-react"

const values = [
  { title: "Экология", description: "Используем сертифицированные экологически чистые материалы, снижаем углеродный след каждого объекта" },
  { title: "Человек в центре", description: "Проектируем пространства, ориентируясь на потребности людей — комфорт, безопасность, эстетика" },
  { title: "Надёжные конструкции", description: "Применяем передовые инженерные решения и строго соблюдаем строительные нормы и стандарты" },
  { title: "Экстерьер и среда", description: "Преображаем городскую среду: фасады, благоустройство, озеленение создают живые и привлекательные пространства" },
  { title: "Комфортный интерьер", description: "Разрабатываем функциональные интерьеры, которые сочетают красоту, практичность и долговечность" },
  { title: "Прозрачность", description: "Открытый диалог с клиентом на каждом этапе, фиксированные сроки и смета без скрытых доплат" },
]

const stats = [
  { number: "15+", label: "Лет опыта" },
  { number: "200+", label: "Сданных объектов" },
  { number: "1 200+", label: "Довольных клиентов" },
  { number: "0", label: "Просроченных сдач" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: 'hsl(148,57%,23%)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'hsl(148,45%,33%)' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            <Leaf className="h-4 w-4" />
            О компании
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-balance"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            САТТАРОВ{" "}
            <span className="text-primary relative">
              И ПАРТНЁРЫ
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Строительная компания с 15-летним опытом. Мы верим, что качественное строительство — это вклад в жизнь людей и будущее нашей планеты. Каждый объект возводим как собственный дом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3
                      className="font-bold text-lg mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div
                className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Brand Identity showcase */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
          <div className="bg-primary/5 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-bold text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ФИРМЕННЫЙ СТИЛЬ И КОРПОРАТИВНАЯ АЙДЕНТИКА
            </span>
          </div>
          <img
            src="https://cdn.poehali.dev/projects/32067507-171f-4139-8d2f-0b034a6bdb19/files/494524cb-333d-479b-8a23-58d43846501a.jpg"
            alt="Корпоративная айдентика САТТАРОВ И ПАРТНЁРЫ"
            className="w-full h-auto object-cover"
          />
          <div className="bg-primary/5 px-6 py-4 border-t border-primary/10">
            <p className="text-sm text-muted-foreground text-center">
              Единый фирменный стиль: офис, флаг, транспорт, визитки, каски и спецодежда — всё в корпоративных цветах
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}