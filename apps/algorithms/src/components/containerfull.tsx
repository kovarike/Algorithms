interface ContainerProps {
  children?: React.ReactNode;
}

export function ContainerFull({ children }: ContainerProps) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl h-screen bg-zinc-950 text-white">
      {children}
    </div>
  );
}
