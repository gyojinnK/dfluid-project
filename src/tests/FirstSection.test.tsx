import { render, screen } from "@testing-library/react";
import FirstSection from "../components/templates/FirstSection";
import { test } from "vitest";

test("heading 렌더링 테스트", () => {
  render(<FirstSection />);
  const headingText = screen.getByRole("heading", {
    name: "Snap photos and share like never before",
  });

  expect(headingText).toBeDefined();
});

test("프로필 카드 렌더링 테스트", () => {
  render(<FirstSection />);
  const imageAlt = screen.getAllByAltText(/-avatar/i);
  const titleText = screen.getAllByRole("paragraph");

  expect(imageAlt).toHaveLength(3);
  expect(titleText).toHaveLength(3);
});
