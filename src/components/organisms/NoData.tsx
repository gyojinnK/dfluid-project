import TextBox from "../molecules/TextBox";
import HorizontalRule from "../atoms/HorizontalRule";
import SubTitle from "../atoms/SubTitle";
import ExtraSmallText from "../atoms/ExtraSmallText";

const NoData = () => {
  return (
    <div className="py-[5rem] px-[20rem]">
      <TextBox position="center">
        <TextBox.Title>
          There is no photo you want. <br /> Try adjusting the filters.
        </TextBox.Title>
        <HorizontalRule className="mb-[1.5rem] border-[#00000030]" />
        <SubTitle className="text-[#18a0fb]">
          <a href="http://example.com">Contribute directly</a>
        </SubTitle>
        <ExtraSmallText className="text-[#000000cc]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          laudantium iste et modi provident id voluptatum nobis, in incidunt
          officia possimus alias reprehenderit ex aperiam, reiciendis quidem
          earum, rem nulla?
        </ExtraSmallText>
      </TextBox>
    </div>
  );
};

export default NoData;
