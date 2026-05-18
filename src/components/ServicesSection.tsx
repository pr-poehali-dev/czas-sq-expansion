import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Лендинги и сайты",
    description:
      "Создаём продающие одностраничники и корпоративные сайты с нуля. Каждый проект — уникальный дизайн, адаптированный под вашу аудиторию и бизнес-цели. Никаких шаблонов с биржи.",
  },
  {
    icon: Code,
    title: "Веб-приложения",
    description:
      "Разрабатываем сложные веб-сервисы: личные кабинеты, CRM-системы, маркетплейсы и SaaS-продукты. Используем современный стек — React, Node.js, PostgreSQL.",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description:
      "Проектируем интерфейсы, которые приятно использовать. Исследуем целевую аудиторию, создаём прототипы и передаём готовые макеты в Figma для разработки.",
  },
  {
    icon: Share2,
    title: "Интернет-магазины",
    description:
      "Запускаем e-commerce проекты с каталогом, корзиной, оплатой и личным кабинетом. Интегрируем 1С, CRM и службы доставки. Всё готово к продажам с первого дня.",
  },
  {
    icon: Target,
    title: "Брендинг и айдентика",
    description:
      "Разрабатываем фирменный стиль: логотип, цвета, типографику и гайдлайн. Ваш бренд получит узнаваемый визуальный язык, который работает во всех каналах.",
  },
  {
    icon: Search,
    title: "SEO-продвижение",
    description:
      "Выводим сайты в топ поисковых систем. Технический аудит, оптимизация контента, ссылочное продвижение — комплексный подход для стабильного роста органического трафика.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">делаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный цикл создания цифровых продуктов — от стратегии и дизайна до разработки и продвижения в поиске.
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
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
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