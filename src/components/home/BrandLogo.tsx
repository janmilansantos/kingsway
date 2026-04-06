interface BrandLogoProps {
  readonly name: string;
  readonly image: string;
}

function BrandLogo({ name, image }: BrandLogoProps) {
  return (
    <div className="flex justify-center">
      <img className="h-12 object-contain" src={image} alt={`${name} logo`} />
    </div>
  );
}

export default BrandLogo;
