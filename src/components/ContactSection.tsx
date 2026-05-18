import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: 'hsl(148,57%,23%)' }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'hsl(148,45%,33%)' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            Связаться с нами
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-balance"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Обсудим <span className="text-primary">ваш объект</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Оставьте заявку — мы свяжемся в течение 2 часов, проведём бесплатную консультацию и выедем на объект.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl bg-background">
              <CardHeader>
                <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Заявка на расчёт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold">Имя *</label>
                      <Input
                        id="name" name="name" value={formData.name}
                        onChange={handleChange} placeholder="Ваше имя" required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold">E-mail *</label>
                      <Input
                        id="email" name="email" type="email" value={formData.email}
                        onChange={handleChange} placeholder="your@email.ru" required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold">Телефон</label>
                    <Input
                      id="phone" name="phone" type="tel" value={formData.phone}
                      onChange={handleChange} placeholder="+7 900 123-45-67"
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">Описание объекта *</label>
                    <Textarea
                      id="message" name="message" value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем объекте: тип, площадь, пожелания..."
                      rows={5} required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <Button
                    type="submit" size="lg"
                    className="w-full sm:w-auto group bg-primary hover:bg-primary/90 font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Телефон</h3>
                    <p className="text-sm text-muted-foreground">+7 (914) 925-24-25</p>
                    <p className="text-sm text-muted-foreground">+7 (984) 270-38-25</p>
                    <p className="text-xs text-muted-foreground mt-1">Пн–Пт: 8:00–19:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>E-mail</h3>
                    <p className="text-sm text-muted-foreground">саттаров-loft@yandex.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Адрес</h3>
                    <p className="text-sm text-muted-foreground">355037, Ставропольский край, г. Ставрополь, ул. Шпаковская, д. 76/9, кв. 156</p>
                    <p className="text-xs text-muted-foreground mt-1">Бесплатный выезд на объект</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brand color palette */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Корпоративные цвета</h3>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 rounded" style={{ background: 'hsl(148,57%,23%)' }} title="#1B5E35" />
                  <div className="flex-1 h-8 rounded" style={{ background: 'hsl(148,45%,33%)' }} title="#2E7D52" />
                  <div className="flex-1 h-8 rounded" style={{ background: 'hsl(148,35%,55%)' }} title="#4CAF7C" />
                  <div className="flex-1 h-8 rounded border border-border" style={{ background: 'hsl(148,35%,75%)' }} title="#A8D5B5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}