type HorizontalRuleProps = {
  className?: string;
};

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ className }) => {
  return (
    <hr className={`${className} border-[#ffffff80] border-[0.0625rem]`} />
  );
};

export default HorizontalRule;
