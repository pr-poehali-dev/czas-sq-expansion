import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Сдали проект раньше срока и в рамках бюджета. Дизайн превзошёл ожидания — клиенты сразу начали оставлять заявки через новый сайт. Очень доволен результатом!",
    name: "Алексей",
    role: "Владелец строительной компании",
  },
  {
    quote:
      "Нам нужен был интернет-магазин с интеграцией 1С. PixelForge справились отлично — запустились за 3 недели, продажи через сайт уже покрыли стоимость разработки.",
    name: "Марина",
    role: "Директор по маркетингу",
  },
  {
    quote:
      "Долго искал студию, которая не просто рисует красивые картинки, а понимает бизнес. PixelForge предложили структуру лендинга сами — конверсия выросла в 2,5 раза.",
    name: "Дмитрий",
    role: "Основатель стартапа",
  },
  {
    quote:
      "Переделали наш устаревший корпоративный сайт. Теперь он отлично смотрится на мобильных, скорость загрузки выросла, и мы наконец попали в топ-10 по ключевым запросам.",
    name: "Ольга",
    role: "Руководитель отдела продаж",
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

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Нам важен результат, а не просто красивый макет. Вот что говорят клиенты, которые уже запустились с нами.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
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