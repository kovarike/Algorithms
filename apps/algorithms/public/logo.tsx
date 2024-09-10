interface LogoProps extends React.SVGProps<SVGSVGElement> { }
export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  return (
    <svg
      width={150}
      height={50}
      className="rounded-md"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100%" height="100%" fill="#000" />
      <text
        x="50%" // Centraliza horizontalmente
        y="50%" // Centraliza verticalmente
        textAnchor="middle" // Alinha o texto ao meio horizontalmente
        dominantBaseline="middle" // Alinha o texto ao meio verticalmente
        fontFamily="Inter, sans-serif"
        fontSize={24}
        fill="#00FF00"
      >
        <tspan fontWeight="bold" fill="#00FF00">
          {"Algorithms"}
        </tspan>
      </text>
    </svg>
  );
};
