import { render, screen } from "@testing-library/react";
import FirstSection from "../components/templates/FirstSection";
import { test } from "vitest";

test("heading 렌더링 테스트", () => {
  render(<FirstSection />);
  const headingText = screen.getByRole("heading");
  expect(headingText).toBeDefined();
});

test("프로필 카드 렌더링 테스트", () => {
  render(<FirstSection />);
  const imageAlt = screen.getAllByAltText(
    /(girl-info-avatar|man-info-avatar|cat-info-avatar)/i
  );
  expect(imageAlt).toHaveLength(3);
});
