import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, HardHat, Leaf, Home, Wrench, TreePine } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Строительство под ключ",
    description:
      "Возводим жилые, коммерческие и промышленные объекты. От фундамента до сдачи — полный цикл работ с соблюдением сроков и строительных норм.",
  },
  {
    icon: Home,
    title: "Интерьер и экстерьер",
    description:
      "Преображаем пространства: авторский дизайн интерьеров, отделка фасадов, благоустройство территории. Создаём комфортную среду для жизни и работы.",
  },
  {
    icon: Leaf,
    title: "Экологичные решения",
    description:
      "Применяем экологически чистые материалы и энергоэффективные технологии. Строим в гармонии с природой — заботимся о будущем планеты.",
  },
  {
    icon: Wrench,
    title: "Проектирование",
    description:
      "Разрабатываем архитектурные и конструктивные проекты. BIM-проектирование, 3D-визуализация, полная проектная документация под ключ.",
  },
  {
    icon: HardHat,
    title: "Капитальный ремонт",
    description:
      "Комплексный капитальный ремонт зданий и помещений. Усиление конструкций, замена инженерных систем, восстановление несущих элементов.",
  },
  {
    icon: TreePine,
    title: "Благоустройство",
    description:
      "Ландшафтный дизайн, озеленение территорий, устройство парков и скверов. Создаём зелёные пространства, где людям приятно находиться.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit tracking-wide">
          Наши услуги
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-balance"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Что мы <span className="text-primary">строим</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный спектр строительных услуг — от проекта до благоустройства территории.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle
                  className="text-xl group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
