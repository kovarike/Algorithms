import { HTMLAttributes } from 'react';

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export function Img({ src, alt, height, width, ...rest }: ImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...rest}
      className="object-cover"
    />
  );
}
