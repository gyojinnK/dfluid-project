type AvatarProps = {
  children: React.ReactNode;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ children, className }) => {
  return (
    <div className={`rounded-full w-[6.75rem] h-[6.75rem] ${className}`}>
      {children}
    </div>
  );
};

export default Avatar;
