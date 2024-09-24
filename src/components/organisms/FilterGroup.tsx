import React from "react";
import RegionFilter from "../molecules/RegionFilter";
import YearFilter from "../molecules/YearFilter";

type FilterGroupProps = {};

const FilterGroup: React.FC<FilterGroupProps> = ({}) => {
  return (
    <div className="flex justify-start items-center gap-[1.25rem]">
      <RegionFilter />
      <YearFilter />
    </div>
  );
};

export default FilterGroup;
