import { ReactNode } from "react";
import Title from "../atoms/Title";
import Description from "../atoms/Description";

type TextBoxProps = {
  position?: "left" | "center" | "right";
  children: ReactNode;
};

const TextBox: React.FC<TextBoxProps> & {
  Title: typeof Title;
  Description: typeof Description;
} = ({ position = "left", children }) => {
  return <div className={`text-${position}`}>{children}</div>;
};

TextBox.Title = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <Title className={`pb-[1.5rem] ${className}`}>{children}</Title>;
};

TextBox.Description = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Description className={`pb-[1.5rem] ${className}`}>{children}</Description>
  );
};

export default TextBox;
