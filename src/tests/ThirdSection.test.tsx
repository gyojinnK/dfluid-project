import { render, screen, waitFor } from "@testing-library/react";
import ThirdSection from "../components/templates/ThirdSection";
import { useFilterStore } from "../stores/useFilterStore";

const initialStore = useFilterStore.getState();

test("포토카드 filter 테스트", async () => {
  useFilterStore.setState(initialStore);
  render(<ThirdSection />);

  const { setSelectedRegion, setSelectedYears } = useFilterStore.getState();

  await waitFor(() => {
    setSelectedRegion("Europe");
  });
  const filteredRegion = screen.getAllByAltText(
    /(Italy, Pica-jpg|Spain, Sagrada Família-jpg)/i
  );
  expect(filteredRegion).toHaveLength(2);

  await waitFor(() => {
    setSelectedYears([1700, 2000]);
  });
  const filteredYears = screen.getAllByAltText(/Spain, Sagrada Família-jpg/i);
  expect(filteredYears).toHaveLength(1);
});

test("결과가 없는 화면 렌더링 테스트", async () => {
  useFilterStore.setState(initialStore);
  render(<ThirdSection />);

  const { setSelectedRegion, setSelectedYears } = useFilterStore.getState();

  await waitFor(() => {
    setSelectedRegion("Oceania");
  });
  const noDataText = screen.getByText(/There is no photo you want./i);
  expect(noDataText).toBeInTheDocument();

  await waitFor(() => {
    setSelectedRegion("Oceania");
    setSelectedYears([1000, 1700]);
  });
  expect(noDataText).toBeInTheDocument();
});
