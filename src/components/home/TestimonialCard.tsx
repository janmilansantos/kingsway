interface TestimonialCardProps {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly initials: string;
  readonly featured?: boolean;
}

function TestimonialCard({
  quote,
  author,
  role,
  initials,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-surface-container-high p-8 rounded-card border border-white/5 shadow-xl ${
        featured
          ? 'scale-105 z-10 bg-gradient-to-br from-surface-container-high to-surface-container'
          : ''
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-star text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>

      <p
        className={`italic mb-6 leading-relaxed ${
          featured ? 'text-on-surface' : 'text-on-surface-variant'
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">
          {initials}
        </div>
        <div>
          <h5 className="text-white font-bold text-sm">{author}</h5>
          <p className="text-xs text-blue-400/60 font-label">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
