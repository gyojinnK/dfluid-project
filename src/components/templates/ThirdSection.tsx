import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import FilterGroup from "../organisms/FilterGroup";
import {
  PhotoCardInfos,
  TPhotoCardInfo,
} from "../../constants/photo-card-infos";
import PhotoCard from "../organisms/PhotoCard";
import { motion } from "framer-motion";
import { useFilterStore } from "../../stores/useFilterStore";
import NoData from "../organisms/NoData";
import { filterPhotoCards } from "../../utils/filter-photo-cards";

const ThirdSection = () => {
  const { selectedRegion, selectedYears } = useFilterStore();
  const [filteredItems, setFilteredItems] =
    useState<TPhotoCardInfo[]>(PhotoCardInfos);

  useEffect(() => {
    const filteredPhotoCards = filterPhotoCards(
      PhotoCardInfos,
      selectedRegion,
      selectedYears
    );
    setFilteredItems(filteredPhotoCards);
  }, [selectedRegion, selectedYears]);

  return (
    <div className="pt-[7.5rem]">
      <Container>
        <Heading className="pb-[3.75rem]">
          Duis tincidunt ut ligula vitae mollis.
        </Heading>
        <div className="pb-[4.25rem]">
          <FilterGroup />
        </div>
      </Container>
      {filteredItems.length > 0 ? (
        <div className="relative overflow-hidden h-[32.5rem] scrollbar-hide">
          <motion.div
            className="flex items-start px-[4vw] gap-[2.5rem] absolute top-0 left-0"
            drag="x"
            dragConstraints={{ left: -100 * filteredItems.length, right: 0 }}
            style={{ userSelect: "none", touchAction: "none" }}
          >
            {filteredItems.map((info) => (
              <PhotoCard key={info.id} data={info} />
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="h-[32.5rem] flex justify-center items-start">
          <NoData />
        </div>
      )}
    </div>
  );
};

export default ThirdSection;
