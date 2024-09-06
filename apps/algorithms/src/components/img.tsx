import Image from "next/image";
import { HTMLAttributes } from "react";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  props?: HTMLAttributes<HTMLImageElement>;
  height?: number;
  width?: number;
}

export function Img({ src, props, alt, height, width }: ImgProps) {
  return (
    <>
      <img src={src} alt={alt} {...props} height={height} width={width} className="object-cover" />
    </>
  );
}
