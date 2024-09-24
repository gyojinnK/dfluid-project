import { TLetter } from "../../constants/second-section-letters";
import ExtraSmallText from "../atoms/ExtraSmallText";
import HorizontalRule from "../atoms/HorizontalRule";
import TextBox from "../molecules/TextBox";

type TextContentProps = {
  position?: "left" | "center" | "right";
  letter: TLetter;
};

const TextContent: React.FC<TextContentProps> = ({
  position = "left",
  letter,
}) => {
  return (
    <>
      <TextBox position={position}>
        <TextBox.Title className="pt-[9.5rem] text-[#ffffff]">
          {letter.title}
        </TextBox.Title>
        <TextBox.Description className="pb-[2rem] text-[#ffffffcc]">
          {letter.description}
        </TextBox.Description>
      </TextBox>
      <HorizontalRule className="mb-[2rem]" />
      <ExtraSmallText className="text-[#ffffff99] text-center">
        {letter.ps}
      </ExtraSmallText>
    </>
  );
};

export default TextContent;
