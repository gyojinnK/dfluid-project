import { TProfileInfos } from "../../constants/profile-infos";
import Description from "../atoms/Description";
import Title from "../atoms/Title";
import Avatar from "../molecules/Avatar";

type ProfileProps = {
  data: TProfileInfos;
};

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div>
      <Avatar className="mb-[2.5rem]">
        <img src={data.imageUrl} alt={data.id} />
      </Avatar>
      <Title className="pb-[1.5rem]">{data.title}</Title>
      <Description className="pb-[1.5rem]">{data.description}</Description>
      <a
        href={data.extraLink}
        className="font-['Exo2'] text-[#18A0FB] text-[1.125rem] font-bold"
      >
        LEARN MORE
      </a>
    </div>
  );
};

export default Profile;
