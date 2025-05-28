// components/BeeHolder.jsx
import Image from 'next/image';

const BeeHolder = ({ src, width, height, className, alt = 'Bee image' }) => {
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