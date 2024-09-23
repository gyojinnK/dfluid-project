type InputProps = {
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      id={id && id}
      placeholder={placeholder && placeholder}
      className={`font-['Exo2'] text-[1rem] pl-[1rem] py-[0.75rem] bg-transparent focus:outline-none ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
