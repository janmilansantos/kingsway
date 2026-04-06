interface FeatureItemProps {
  readonly title: string;
  readonly description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <span className="material-symbols-outlined text-blue-400 flex-shrink-0">
        check_circle
      </span>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-on-surface-variant text-sm">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
