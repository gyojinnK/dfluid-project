import SubTitle from "../atoms/SubTitle";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor && htmlFor}>
      <SubTitle className={`${className} font-['Exo2'] text-center`}>
        {children}
      </SubTitle>
    </label>
  );
};

export default Label;

//[rgb(232,206,206)]
