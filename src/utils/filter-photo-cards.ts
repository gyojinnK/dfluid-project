import { TPhotoCardInfo } from "../constants/photo-card-infos";

export const filterPhotoCards = (
  PhotoCardInfos: TPhotoCardInfo[],
  selectedRegion: string,
  selectedYears: number[]
) => {
  if (selectedRegion !== "All") {
    const filterByRegions = PhotoCardInfos.filter(
      (item) => item.region === selectedRegion
    );
    const filterByYears = filterByRegions.filter(
      (item) =>
        +item.year <= Math.max(...selectedYears) &&
        +item.year >= Math.min(...selectedYears)
    );
    return filterByYears;
  } else {
    const filterByYears = PhotoCardInfos.filter(
      (item) =>
        +item.year <= Math.max(...selectedYears) &&
        +item.year >= Math.min(...selectedYears)
    );
    return filterByYears;
  }
};
