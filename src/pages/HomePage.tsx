import Hero from '@/components/home/Hero';
import ServiceCard from '@/components/home/ServiceCard';
import BrandLogo from '@/components/home/BrandLogo';
import FeatureItem from '@/components/home/FeatureItem';
import TestimonialCard from '@/components/home/TestimonialCard';
import CtaBanner from '@/components/home/CtaBanner';
import { Section, SectionHeader } from '@/components/layout/Section';
import {
  services,
  brands,
  features,
  testimonials,
  aboutImage,
} from '@/data/mockData';

function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <Section variant="dark-alt">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Brands */}
      <Section variant="light">
        <SectionHeader
          label="Our Partners"
          title="Trusted Brands We Carry"
          light
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <BrandLogo key={brand.name} {...brand} />
          ))}
        </div>
      </Section>

      {/* Why Kingsway */}
      <Section variant="dark" className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <img
              className="rounded-2xl relative z-10 shadow-blue-glow border border-white/5"
              src={aboutImage}
              alt="Modern professional tire service bay"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-container p-8 rounded-card z-20 shadow-xl hidden md:block">
              <p className="text-white font-headline font-black text-4xl">
                25+
              </p>
              <p className="text-on-primary-container font-headline font-bold uppercase tracking-widest text-xs">
                Years Experience
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-400 font-headline font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              Legacy of Excellence
            </span>
            <h2 className="text-5xl font-headline font-black text-white mb-10 uppercase leading-tight">
              Why Kingsway?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="blueprint">
        <SectionHeader title="Voice of Our Clients" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.initials} {...testimonial} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

export default HomePage;
