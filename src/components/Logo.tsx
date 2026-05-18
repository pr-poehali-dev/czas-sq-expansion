export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="hsl(148,57%,23%)" />
        <rect x="7" y="22" width="5" height="8" fill="white" />
        <rect x="7" y="16" width="5" height="5" fill="white" opacity="0.7" />
        <rect x="14" y="18" width="5" height="12" fill="white" />
        <rect x="14" y="12" width="5" height="5" fill="white" opacity="0.7" />
        <rect x="21" y="14" width="8" height="16" fill="white" />
        <rect x="21" y="8" width="8" height="5" fill="white" opacity="0.7" />
        <circle cx="9" cy="13" r="2.5" fill="hsl(148,35%,75%)" />
        <circle cx="16" cy="10" r="2" fill="hsl(148,35%,75%)" />
        <circle cx="25" cy="6" r="2.5" fill="hsl(148,35%,75%)" />
        <line x1="9" y1="13" x2="16" y2="10" stroke="hsl(148,35%,75%)" strokeWidth="1" opacity="0.7" />
        <line x1="16" y1="10" x2="25" y2="6" stroke="hsl(148,35%,75%)" strokeWidth="1" opacity="0.7" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-wider text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>САТТАРОВ</span>
        <span className="text-xs font-semibold tracking-widest text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>И ПАРТНЁРЫ</span>
      </div>
    </div>
  )
}
