import { createContext, useContext } from "react";
import Input from "../atoms/Input";
import Label from "../molecules/Label";

type InputGroupProps = {
  linkText: string;
  children: React.ReactNode;
};

const InputGroupContext = createContext<{ linkText: string }>({
  linkText: "default",
});

const InputGroup: React.FC<InputGroupProps> & {
  Label: typeof Label;
  Input: typeof Input;
} = ({ linkText, children }) => {
  return (
    <InputGroupContext.Provider value={{ linkText }}>
      <div>{children}</div>
    </InputGroupContext.Provider>
  );
};

InputGroup.Label = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { linkText } = useContext(InputGroupContext);
  return (
    <Label htmlFor={linkText} className={className}>
      {children}
    </Label>
  );
};
InputGroup.Input = ({
  className,
  placeholder,
  value,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { linkText } = useContext(InputGroupContext);
  return (
    <Input
      id={linkText}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputGroup;
