interface ContainerProps {
  children?: React.ReactNode;


}

export function Container({ children }: ContainerProps) {
  return (
    <div className="my-0 mx-auto mx-full p-5 bg-white text-slate-950 rounded-md shadow-post" >
      {children}
    </div>
  );
}
