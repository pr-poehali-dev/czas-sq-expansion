import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Компания САТТАРОВ И ПАРТНЁРЫ сдала наш офисный центр точно в срок. Качество строительства превзошло ожидания — уже 3 года эксплуатируем без единой претензии.",
    name: "Андрей Валиуллин",
    role: "Директор девелоперской компании",
  },
  {
    quote:
      "Доверили им строительство жилого комплекса. Применили экологичные материалы, сделали зелёную кровлю. Жильцы в восторге, квартиры разошлись ещё на этапе строительства.",
    name: "Лилия Хайруллина",
    role: "Застройщик",
  },
  {
    quote:
      "Ремонт нашего офиса выполнили за 3 недели вместо запланированных 4. Интерьер получился стильным, функциональным и экологичным. Команда профессионалов!",
    name: "Максим Соколов",
    role: "Руководитель IT-компании",
  },
  {
    quote:
      "Благоустройство территории нашего посёлка — отдельная история. Посадили более 300 деревьев, сделали дорожки, детские площадки. Жители говорят «наш посёлок стал лучшим в регионе».",
    name: "Нина Бурханова",
    role: "Председатель ТСЖ",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => { cancelAnimationFrame(animationFrameId) }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            Отзывы клиентов
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-balance"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Нам <span className="text-primary">доверяют</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Более 1 200 довольных клиентов выбрали САТТАРОВ И ПАРТНЁРЫ за качество, честность и соблюдение сроков.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[100px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
