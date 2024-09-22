type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} font-['montserrat'] text-[1.125rem] text-[rgba(0,0,0,0.8)] `}
    >
      {children}
    </p>
  );
};

export default Description;
