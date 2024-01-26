import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import EndOfSection from "./EndOfSection";

describe("EndOfSection", () => {
  it("component with testId 'endOfSection' should be rendered", () => {
    // ARRANGE
    const { getByTestId } = render(<EndOfSection></EndOfSection>);

    // ACT & ASSERT
    expect(getByTestId("endOfSection")).toBeInTheDocument();
  });
});
