type HorizontalRuleProps = {
  className?: string;
};

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ className }) => {
  return <hr className={className} />;
};

export default HorizontalRule;
