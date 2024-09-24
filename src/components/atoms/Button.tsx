type ButtonProps = {
  className?: string;
  isActive: boolean | null;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isActive,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      draggable={false}
      className={`font-['Exo2'] text-[1rem] ${className} ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
