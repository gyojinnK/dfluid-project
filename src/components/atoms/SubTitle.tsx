type SubTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ children, className }) => {
  return (
    <h3 className={`${className} font-['Exo2'] font-bold text-[1rem]`}>
      {children}
    </h3>
  );
};

export default SubTitle;
