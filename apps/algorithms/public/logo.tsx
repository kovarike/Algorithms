interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  return (
    <svg width={200} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100%" height="100%" fill="#000" />
      <text
        x={10}
        y={60}
        fontFamily="Inter, sans-serif"
        fontSize={24}
        fill="#00FF00"
      >
        <tspan fontWeight="bold" fill="#00FF00">
          {"<Algorithms/>"}
        </tspan>
      </text>
    </svg>
  );
};
