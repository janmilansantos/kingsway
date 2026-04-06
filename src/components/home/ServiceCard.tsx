interface ServiceCardProps {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-secondary-container p-8 rounded-card shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-white/5">
      <span className="material-symbols-outlined text-4xl text-blue-200 mb-6 block group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <h3 className="text-2xl font-headline font-bold text-white mb-3 uppercase">
        {title}
      </h3>
      <p className="text-blue-100/70 font-body leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
