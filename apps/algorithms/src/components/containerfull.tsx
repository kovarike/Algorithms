import { HtmlHTMLAttributes } from "react";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  props?: HtmlHTMLAttributes<HTMLDivElement>
}

export function ContainerFull({ children, props }: ContainerProps) {
  return (
    <div {...props} className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl bg-zinc-950 text-white">
      {children}
    </div>
  );
}
