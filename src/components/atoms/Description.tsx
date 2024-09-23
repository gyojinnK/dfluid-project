type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} font-['montserrat'] text-[1.125rem] leading-[1.875rem]`}
    >
      {children}
    </p>
  );
};

export default Description;
