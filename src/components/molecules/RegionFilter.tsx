import { useFilterStore } from "../../stores/useFilterStore";
import Button from "../atoms/Button";

type RegionFilterProps = {};

const regions = ["All", "Asia", "Europe", "America", "Oceania"];

const RegionFilter: React.FC<RegionFilterProps> = ({}) => {
  const { selectedRegion, setSelectedRegion } = useFilterStore();

  return (
    <div className="flex gap-[0.3125rem] ring-1 ring-[#00000080] p-[0.3125rem] rounded-[1.5625rem] w-fit">
      {regions.map((region) => (
        <Button
          key={region}
          isActive={selectedRegion === region}
          onClick={() => setSelectedRegion(region)}
          className="h-[2.5rem] px-[1.5rem] rounded-[1.5625rem]"
        >
          {region}
        </Button>
      ))}
    </div>
  );
};

export default RegionFilter;
