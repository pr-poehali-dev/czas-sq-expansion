import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'hsl(150,25%,6%)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="6" fill="hsl(148,57%,23%)" />
                <rect x="7" y="22" width="5" height="8" fill="white" />
                <rect x="14" y="18" width="5" height="12" fill="white" />
                <rect x="21" y="14" width="8" height="16" fill="white" />
                <circle cx="9" cy="13" r="2.5" fill="hsl(148,35%,75%)" />
                <circle cx="16" cy="10" r="2" fill="hsl(148,35%,75%)" />
                <circle cx="25" cy="6" r="2.5" fill="hsl(148,35%,75%)" />
                <line x1="9" y1="13" x2="16" y2="10" stroke="hsl(148,35%,75%)" strokeWidth="1" opacity="0.7" />
                <line x1="16" y1="10" x2="25" y2="6" stroke="hsl(148,35%,75%)" strokeWidth="1" opacity="0.7" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-wider text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>САТТАРОВ</span>
                <span className="text-xs font-semibold tracking-widest text-green-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>И ПАРТНЁРЫ</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
              Строительная компания полного цикла. Строим для людей — создаём комфортную, экологичную и надёжную среду для жизни и бизнеса.
            </p>
            <p className="text-xs text-gray-500">© 2025 САТТАРОВ И ПАРТНЁРЫ. Все права защищены.</p>
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
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                info@sattarov-partners.ru
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                г. Казань, ул. Строителей, 123
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
