interface ContainerProps {
  children?: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="my-0 mx-auto mx-full p-6 bg-white text-black">
      {children}
    </div>
  );
}
