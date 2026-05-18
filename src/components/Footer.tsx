import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'hsl(150,25%,6%)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="https://cdn.poehali.dev/projects/32067507-171f-4139-8d2f-0b034a6bdb19/bucket/11fdeccd-685f-4ea0-826b-d23b54f0d59a.png"
                alt="САТТАРОВ И ПАРТНЁРЫ"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
              Строительная компания полного цикла. Строим для людей — создаём комфортную, экологичную и надёжную среду для жизни и бизнеса.
            </p>
            <p className="text-xs text-gray-500 mt-1">ООО «САТТАРОВ И ПАРТНЁРЫ»</p>
            <p className="text-xs text-gray-500">ОГРН: 1252600016866 &nbsp;|&nbsp; ИНН: 2635268075</p>
            <p className="text-xs text-gray-500 mt-1">© 2025 САТТАРОВ И ПАРТНЁРЫ. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>Навигация</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "О компании" },
                { href: "#services", label: "Услуги" },
                { href: "#portfolio", label: "Объекты" },
                { href: "#pricing", label: "Стоимость" },
                { href: "#contact", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                +7 (914) 925-24-25, +7 (984) 270-38-25
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                sattarov-partners@yandex.ru
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                355037, г. Ставрополь, ул. Шпаковская, д. 76/9
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            «СТРОИМ ДЛЯ ЛЮДЕЙ. СОЗДАЁМ БУДУЩЕЕ»
          </p>
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ background: 'hsl(148,57%,23%)' }} />
            <div className="w-4 h-4 rounded-sm" style={{ background: 'hsl(148,45%,33%)' }} />
            <div className="w-4 h-4 rounded-sm" style={{ background: 'hsl(148,35%,75%)' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}