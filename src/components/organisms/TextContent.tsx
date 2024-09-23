import { TLetter } from "../../constants/second-section-letters";
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
      <HorizontalRule className="text-[#ffffff80] pb-[2rem]" />
      <p className="font-['montserrat'] text-[0.875rem] text-[#ffffff99] text-center leading-[1.375rem]">
        {letter.ps}
      </p>
    </>
  );
};

export default TextContent;
