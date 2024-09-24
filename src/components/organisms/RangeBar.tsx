import { useState } from "react";

type RangeBarProps = {
  minYear: number;
  maxYear: number;
  setMinYear: (value: number) => void;
  setMaxYear: (value: number) => void;
};

const RangeBar: React.FC<RangeBarProps> = ({
  minYear,
  maxYear,
  setMinYear,
  setMaxYear,
}) => {
  const [rangeMinValue, setRangeMinValue] = useState(0);
  const [rangeMaxValue, setRangeMaxValue] = useState(1000);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);
  const yearGap = 50;

  const minChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxYear);
    setMinYear(value);
  };

  const maxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minYear);
    setMaxYear(value);
  };

  const yearRangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMinValue(parseInt(e.target.value));
  };

  const yearRangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < yearGap) {
      setRangeMaxValue(rangeMinValue + yearGap);
      setRangeMinValue(rangeMaxValue - yearGap);
    } else {
      setRangeMinPercent((rangeMinValue / 1000) * 100);
      setRangeMaxPercent(100 - (rangeMaxValue / 1000) * 100);
    }
  };

  return (
    <div className="absolute h-full w-full top-0 left-0 flex items-center">
      <input
        type="range"
        min={0}
        max={1000}
        value={rangeMinValue}
        onChange={(e) => {
          minChangeHandler(e);
          yearRangeMinValueHandler(e);
          twoRangeHandler();
        }}
        className="absolute w-full z-50"
        style={{ pointerEvents: "none" }}
      />
      <input
        type="range"
        min={0}
        max={1000}
        value={rangeMaxValue}
        onChange={(e) => {
          maxChangeHandler(e);
          yearRangeMaxValueHandler(e);
          twoRangeHandler();
        }}
        className="absolute w-full z-50"
        style={{ pointerEvents: "none" }}
      />
      <div className="relative h-[0.625rem] rounded w-full mx-[0.3125rem] z-[-10] bg-[#999999] overflow-hidden">
        <div
          className="absolute h-[0.625rem] bg-black rounded z-50"
          style={{
            left: `${rangeMinPercent}%`,
            right: `${rangeMaxPercent}%`,
          }}
        />
      </div>
    </div>
  );
};

export default RangeBar;
