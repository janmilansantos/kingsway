import { Link } from 'react-router-dom';
import { heroContent } from '@/data/mockData';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src={heroContent.heroImage}
          alt="Tire warehouse with premium tires under blue ambient lighting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter text-white mb-6 uppercase">
            {heroContent.headline}
            <span className="text-blue-400">{heroContent.accentSpan}</span>
            {heroContent.headlineSuffix}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn btn-primary">
              {heroContent.ctaPrimary}
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Icon */}
      <div className="absolute right-[-10%] bottom-[10%] opacity-20 hidden lg:block">
        <span className="material-symbols-outlined text-[400px] text-blue-400 font-thin rotate-12">
          settings_suggest
        </span>
      </div>
    </section>
  );
}

export default Hero;
