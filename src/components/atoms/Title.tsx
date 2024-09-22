type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <p className={`font-['montserrat'] font-bold text-[1.5rem] ${className}`}>
      {children}
    </p>
  );
};

export default Title;
