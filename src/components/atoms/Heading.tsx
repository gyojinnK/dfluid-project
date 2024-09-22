import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1
      className={`font-['Exo2'] font-normal text-5xl whitespace-break-spaces leading-[4.5rem] tracking-[-0.72px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
