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
      <Image src={src} alt={alt} {...props} height={height} width={width} />
    </>
  );
}
