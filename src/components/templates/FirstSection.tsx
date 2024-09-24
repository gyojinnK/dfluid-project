import { useEffect, useState } from "react";
import { ProfileInfos, TProfileInfos } from "../../constants/profile-infos";
import Heading from "../atoms/Heading";
import Profile from "../organisms/Profile";
import { shuffleProfile } from "../../utils/shuffle-profile";

const FirstSection = () => {
  const [randomOrderInfos, setRandomOrderInfos] =
    useState<TProfileInfos[]>(ProfileInfos);

  useEffect(() => {
    const shuffledProfiles = shuffleProfile([...ProfileInfos]);
    setRandomOrderInfos(shuffledProfiles);
  }, []);

  return (
    <div className="pb-[6.875rem]">
      <Heading className="pt-[7.5rem] pb-[4.375rem]">
        Snap photos and share like{"\n"}never before
      </Heading>
      <div className="flex justify-start items-center gap-5">
        {randomOrderInfos.map((info) => (
          <Profile key={info.id} data={info} />
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
