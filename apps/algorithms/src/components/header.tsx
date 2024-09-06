import { Logo } from "../../public/logo";

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (

    <header className="bg-zinc-950 text-white py-5 text-center my-0  w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl">
      <h1 className="flex text-3xl justify-center items-center font-bold">
        <Logo />
      </h1>

      <nav className="my-2 text-center">{children}</nav>
    </header>
  );
}
