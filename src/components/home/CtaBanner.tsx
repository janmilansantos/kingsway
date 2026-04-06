import { Link } from 'react-router-dom';
import { ctaBanner } from '@/data/mockData';

function CtaBanner() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="kinetic-gradient rounded-card-lg p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Decorative blur circle */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-on-primary-container mb-2 uppercase">
              {ctaBanner.headline}
            </h2>
            <p className="text-on-primary-container/80 text-lg">
              {ctaBanner.subtitle}
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 btn btn-white px-12 py-5"
          >
            {ctaBanner.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
