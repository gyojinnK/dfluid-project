import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`px-[4vw] mx-auto ${className}`}>{children}</div>;
};

export default Container;
