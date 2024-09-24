type ExtraSmallTextProps = {
  children: React.ReactNode;
  className?: string;
};

const ExtraSmallText: React.FC<ExtraSmallTextProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`${className} font-['montserrat'] text-[0.875rem] leading-[1.375rem]`}
    >
      {children}
    </p>
  );
};

export default ExtraSmallText;
