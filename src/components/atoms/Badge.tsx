type BadgeProps = {
  className?: string;
  isActive: boolean | null;
  onClick?: () => void;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  onClick,
  isActive,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      draggable={false}
      className={`font-['Exo2'] text-[1rem] ${className} ${
        isActive ? "bg-black" : "bg-[#999999]"
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
