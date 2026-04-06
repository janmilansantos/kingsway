import { Section } from '@/components/layout/Section';

function ProductsPage() {
  return (
    <Section className="pt-32">
      <h1 className="text-5xl font-headline font-black text-white uppercase tracking-tighter mb-4">
        Our Products
      </h1>
      <p className="text-on-surface-variant text-xl">
        Coming soon &mdash; browse our full tire and auto parts catalog.
      </p>
    </Section>
  );
}

export default ProductsPage;
