import { TProfileInfos } from "../../constants/profile-infos";
import Avatar from "../atoms/Avatar";
import TextBox from "../molecules/TextBox";

type ProfileProps = {
  data: TProfileInfos;
};

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div>
      <Avatar className="mb-[2.5rem]">
        <img src={data.imageUrl} alt={`${data.id}-avatar`} />
      </Avatar>
      <TextBox>
        <TextBox.Title>{data.title}</TextBox.Title>
        <TextBox.Description className="text-[rgba(0,0,0,0.8)]">
          {data.description}
        </TextBox.Description>
      </TextBox>
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
