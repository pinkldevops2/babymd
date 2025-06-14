import Image, { StaticImageData } from 'next/image';

interface BeeHolderProps {
  src: StaticImageData | string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
}

const BeeHolder: React.FC<BeeHolderProps> = ({
  src,
  width,
  height,
  className = '',
  alt = 'Bee image',
}) => {
  return (
    <div className={`bee_holder ${className}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default BeeHolder;