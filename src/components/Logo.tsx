export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <img
        src="https://cdn.poehali.dev/projects/32067507-171f-4139-8d2f-0b034a6bdb19/bucket/11fdeccd-685f-4ea0-826b-d23b54f0d59a.png"
        alt="САТТАРОВ И ПАРТНЁРЫ"
        className="h-14 w-auto object-contain"
        style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(3%) saturate(127%) hue-rotate(57deg) brightness(96%) contrast(88%)' }}
      />
    </div>
  )
}