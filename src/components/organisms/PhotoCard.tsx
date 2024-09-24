import { TPhotoCardInfo } from "../../constants/photo-card-infos";
import ExtraSmallText from "../atoms/ExtraSmallText";
import SubTitle from "../atoms/SubTitle";

type PhotoCardProps = {
  data: TPhotoCardInfo;
};

const PhotoCard: React.FC<PhotoCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-[25rem] px-[1.25rem] bg-[#d9d9d950] rounded-[0.625rem]">
      <div className="flex justify-between items-center pt-[0.9375rem] pb-[0.5625rem]">
        <SubTitle className="font-['montserrat']">{data.title}</SubTitle>
        <ExtraSmallText className="text-[1rem]">{data.year}</ExtraSmallText>
      </div>
      <img
        src={data.imageUrl}
        alt={`${data.title}-jpg`}
        className="h-[14.1875rem] mb-[1.25rem] rounded-[0.3125rem]"
        draggable={false}
      />
      <ExtraSmallText className="text-[0.875rem] mb-[1.25rem] overflow-ellipsis line-clamp-6 leading-4">
        {data.description}
      </ExtraSmallText>
    </div>
  );
};

export default PhotoCard;
