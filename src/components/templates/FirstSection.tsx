import { useEffect, useState } from "react";
import { ProfileInfos, TProfileInfos } from "../../constants/profile-infos";
import Heading from "../atoms/Heading";
import Profile from "../organisms/Profile";

const FirstSection = () => {
  const [randomOrderInfos, setRandomOrderInfos] =
    useState<TProfileInfos[]>(ProfileInfos);
  useEffect(() => {
    let copyArray = [...randomOrderInfos];
    copyArray.sort(() => Math.random() - 0.5);
    setRandomOrderInfos(copyArray);
  }, []);

  return (
    <>
      <div>
        <Heading className="pt-[7.5rem] pb-[4.375rem]">
          Snap photos and share like{"\n"}never before
        </Heading>
      </div>
      <div className="flex justify-start items-center gap-5">
        {randomOrderInfos.map((info) => (
          <Profile key={info.id} data={info} />
        ))}
      </div>
    </>
  );
};

export default FirstSection;
