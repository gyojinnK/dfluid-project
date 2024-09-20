import { render, screen } from "@testing-library/react";
import App from "../App";

test("테스트 환경 초기 설정 테스트", () => {
  render(<App />);
  const titleText = screen.getByRole("heading", { name: "Vite + React" });

  expect(titleText).toBeInTheDocument();
  expect(titleText).toHaveTextContent("Vite + React");
});
