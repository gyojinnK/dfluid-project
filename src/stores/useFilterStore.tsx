import { create } from "zustand";

type Action = {
  setSelectedRegion: (target: string) => void;
  setSelectedYears: (target: number[]) => void;
};
type State = {
  selectedRegion: string;
  selectedYears: number[];
};

export const useFilterStore = create<Action & State>((set) => ({
  selectedRegion: "All",
  selectedYears: [1000, 2000],

  setSelectedRegion: (target: string) => set({ selectedRegion: target }),
  setSelectedYears: (target: number[]) => set({ selectedYears: [...target] }),
}));
