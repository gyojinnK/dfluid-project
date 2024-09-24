import { useState, useEffect } from "react";
import { useFilterStore } from "../../stores/useFilterStore";
import Badge from "../atoms/Badge";
import RangeBar from "../organisms/RangeBar";

type YearFilterProps = {};

const yearOptions = [1000, 1300, 1700, 2000];

const YearFilter: React.FC<YearFilterProps> = ({}) => {
  const { setSelectedYears } = useFilterStore();
  const [minYear, setMinYear] = useState<number>(0);
  const [maxYear, setMaxYear] = useState<number>(1000);

  useEffect(() => {
    setSelectedYears([minYear + 1000, maxYear + 1000]);
  }, [minYear, maxYear, setSelectedYears]);

  return (
    <div className="flex items-center ring-1 ring-[#00000080] p-[0.3125rem] rounded-full w-fit relative">
      <RangeBar
        minYear={minYear}
        maxYear={maxYear}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
      />
      <div className="flex justify-between w-full gap-[4.75rem]">
        {yearOptions.map((year) => (
          <Badge
            key={year}
            isActive={minYear + 990 <= year && year <= maxYear + 1000}
            className="w-[2.5rem] h-[2.5rem] rounded-full text-[0.875rem] text-[#ffffff] flex justify-center items-center"
          >
            <p className="absolute z-30 select-none">{year}</p>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default YearFilter;
