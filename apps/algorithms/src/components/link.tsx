import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  name?: string;
  props?: HTMLAttributes<HTMLAnchorElement>;
  children?: React.ReactNode;
}

export function Link({ href, name, props, children }: LinkProps) {
  return (
    <>
      <a className="text-white mx-4 font-bold" href={href} {...props}>
        {name || children}
      </a>
    </>
  );
}
