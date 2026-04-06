export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly headline: string;
  readonly accentSpan: string;
  readonly headlineSuffix: string;
  readonly subtitle: string;
  readonly ctaPrimary: string;
  readonly ctaSecondary: string;
  readonly heroImage: string;
}

export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface Brand {
  readonly name: string;
  readonly image: string;
}

export interface Feature {
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly initials: string;
  readonly featured?: boolean;
}

export interface CtaBannerContent {
  readonly headline: string;
  readonly subtitle: string;
  readonly ctaLabel: string;
}

export interface ContactInfo {
  readonly address: string;
  readonly phone: string;
  readonly email: string;
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const heroContent: HeroContent = {
  headline: 'Your Trusted Partner in ',
  accentSpan: 'Tire Trading',
  headlineSuffix: ' & Auto Parts',
  subtitle:
    'Distributing premium global brands with precision engineering and competitive pricing for the modern road.',
  ctaPrimary: 'Browse Products',
  ctaSecondary: 'Request Quote',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDCp1Ipw_nrpekHjjHFbbO3_x2AmZXS7okdVx21UUoouyJSo23u9op5bgBNZBYinfcC39XfYA80CRxl-iVhbSui5BcDM5HeTlTGOjrGhoyMV2l-jG0a3-4dwd_YVcfTb2sUpx5GN9ysx-75eKqpzoK_fGvaPilO_1d3ar0eWVL0whWC8zzkA3_Plzo2KU0fAqW_tBruddZE1t5Vjrr7OW_stUc9xPUJ9VG1nIj0xyzClaaHbo1UQ_CnSq7Xyr0zodwCrFZ6hxo3sTk',
};

export const services: readonly Service[] = [
  {
    icon: 'tire_repair',
    title: 'Tire Installation',
    description:
      'Precision mounting using state-of-the-art robotic systems for ultimate balance.',
  },
  {
    icon: 'balance',
    title: 'Wheel Balancing',
    description:
      'Laser-guided calibration ensuring smooth rides and extended tire longevity.',
  },
  {
    icon: 'architecture',
    title: 'Wheel Alignment',
    description:
      'Computerized 3D alignment to correct steering pull and uneven wear.',
  },
  {
    icon: 'local_shipping',
    title: 'Fleet Services',
    description:
      'Comprehensive maintenance packages designed for commercial fleet efficiency.',
  },
];

export const brands: readonly Brand[] = [
  {
    name: 'Michelin',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQitY7UOZqxL9VKzBQMoj5B8eTB94aS9d38-ixeqB-XdSkzuekAxRxc7UkpwE0lp7YtNJzI9ldHY936JztBgf1eCs0nFOu-7YqSZ0faRPh8W-M6PZi0t6NVpABZsMbDS1UhdosCtB2PnoSHTaRWeN0Zim1N1xygGb9nLDP-Msl6X1qOFtksfrUHkblDlJkFfl7dFk66WSxjFuxxhe12QuhixHDi-JIyegcOXXD80cgU7oJMbKZTJ9d1F2b1HCoioSS_4yQvbvlWcc',
  },
  {
    name: 'Bridgestone',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhOT-zvBp-MNfXhqq-HsDJPaDyYcoFZo8VBJmG64WATGOKboBvFPJ_7RUX_bjBKqFsPkh9hJ6xDWdwFbariySiUrqeL503DdHDr_-_yseEYH3HjrjvV0bnNCF1GJPVknfX1GSDPt1srrzRjIv7Fqszq7SSicK0dTM9Yb0J-zW7Xjaxj1mpYawyVYgE_1TuPbP1t1sl-H_K5e4DM0WFMutXVnoFYV_JO5KAaAsIx2Rl2GUmbZtWwkS8wRL3x8ycGyVxxV6TfnjlLok',
  },
  {
    name: 'Goodyear',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPeOsPauT0qlFQ6mr_P2nWavfKBIATkz7LaiZtLzq0NrzpqtG-q5ikNqtxjpwt8BDnlbA6ZA6ePiie8_1hkE7WxwFjYDZAuVquhRMNiQBu6R_6gpeYelWouEYlZHZWfp0jQXYe8x63Lv6utlX7hYCLQ_Pgj6mmp-nwaS8q-6-_2ZNPmbKuJSAZar_4sDpVjsBdIbc7B8wadxK3QGm3gSvJSLi-_nCgbj2hX_buxXDCLklncjJPyNojyBo4BZ2hc8CtUjHUeB4e3iY',
  },
  {
    name: 'Continental',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD58KK_3OcNznux4XC5EmWOLzeAmT4AfQ-lapfHrKk0Fo7nJBD6sp2_TOp8L1C2blFuagpCpoV2m4m_PAT1OGcPc8vK0LBYgiK4ryja99aThOj5XXD72qBaGb0aiQhiJw7d8wCn6uvER1QCo09JXXnM0mkD1_rrciTgiGgRw607oRNTCqr2xFWWQ4_5Ox35_DAfGVyFAWcaEcf8rFaFioF_1WoA3dZTW6Cg8JP7-Pw4kivEY8nyBvz-hJZDzujiIHzv91BVS_furzI',
  },
  {
    name: 'Pirelli',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdj61j6ATyaL5Pp6CLcDa1KbwpxX3Ys16lqPm3nka40mR_e-CllBZmQ_yl-lNhOT3AnE6vsN5XEIfi_Z22AQiocskLBwuLYnGAmvQoisAvRUE6afsuwzu0Uo0HQwm9lwVoJaD8doZEY90vXI_Ff3RSa0Yy4yIaQc9fi_vdv8Vd0u6Xr0Zf9gEemEEvGiiMDl6Jf4qzWeqAAVjlnD5NN6vaiiriUlYfYw1l6oPkwOVVQ5CBrDBrL2lDNzbCdqpfVfQ6C-OCHkAIzk0',
  },
  {
    name: 'Yokohama',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDf5mrGErINnDuSXlk9FEq3FHqq8AnieaIX_TKOnoE6DTXhltLqfXcaONsZVk6yl2-ETiuBrW5QE9NPkPJ-t57BVI5FqxGT-1Wb7_4-csWD4fnrupjvbtBSK7MUkCAZXn8iEpEHg7nt6OnwJPS1lpkLe9--cre7ACTzuTMg2RaesN8VjX_Va_zbamn4eDbQ9BCGX7CEeY3XlrY1KjnXb-gDQUDniDJrntPQPn1xHD5GzHPtIQ938SPALs42rOvjTTIuSV3hJ8IE_LY',
  },
];

export const features: readonly Feature[] = [
  {
    title: 'Competitive Pricing',
    description: 'Direct-to-consumer rates on top-tier global brands.',
  },
  {
    title: 'Expert Installation',
    description: 'Certified technicians with decades of mechanical expertise.',
  },
  {
    title: 'Same-Day Service',
    description: 'Fast turnaround times to keep you moving efficiently.',
  },
  {
    title: 'All Major Brands',
    description: 'Exclusive inventory of global premium tire manufacturers.',
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'The inventory availability at Kingsway is unmatched. Found the specific Pirellis for my SUV when no one else had them.',
    author: 'John D.',
    role: 'Fleet Manager',
    initials: 'JD',
  },
  {
    quote:
      "Kingsway doesn't just sell tires; they provide a complete engineering solution. The alignment was pixel-perfect.",
    author: 'Marcus K.',
    role: 'Racing Enthusiast',
    initials: 'MK',
    featured: true,
  },
  {
    quote:
      'Best prices in the region for Michelin tires. The same-day installation saved our family road trip.',
    author: 'Sarah R.',
    role: 'Daily Commuter',
    initials: 'SR',
  },
];

export const ctaBanner: CtaBannerContent = {
  headline: 'Ready to Find Your Perfect Tires?',
  subtitle: 'Contact our experts today for a custom quote and inventory check.',
  ctaLabel: 'Get a Quote',
};

export const contactInfo: ContactInfo = {
  address: 'Industrial Area Phase 2, Dubai, UAE',
  phone: '+971 4 000 0000',
  email: 'info@kingswaytire.com',
};

export const footerServices: readonly string[] = [
  'Installation',
  'Alignment',
  'Fleet Solutions',
  'Battery Service',
];

export const aboutImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRIuE2mSFpZ_5Vkp-tepjzopgHP4eqKIPwX1Xy4TJ-e2ujfEpIbRVpxiMf8cHSxJxPLoi1u33MdY5ALQ9AEDwj8IOZ6nMuKU91sYTMylQLbVuzi_uyquD7TEuWzrOoEWp_irnUN1gFaMShD6SCDu3q_lvNK9bR3uV16iuRA09mJsbgrOYr9VuEEhHcD5q_TKdmpuLzSPrLv1zsVMcN2RdJf64MazACaQwMNL6R0Wr3Q71BLn-u1Syk7pF5Bb8ftW2fyGOQ3Os4OR8';
