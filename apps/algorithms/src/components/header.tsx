import { Logo } from "../../public/logo";

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="bg-zinc-950 text-white px-2 py-5 text-center my-0 mx-auto w-[80%]">
      <h1 className="flex text-3xl justify-center items-center font-bold">
        <Logo />
        Engineering
      </h1>

      <nav className="my-2 text-center">{children}</nav>
    </header>
  );
}
