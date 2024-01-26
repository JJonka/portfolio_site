import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import TechIcon from "./TechIcon";

describe("TechIcon", () => {
  it("text 'text' should be rendered", () => {
    // ARRANGE
    const { getByText } = render(
      <TechIcon icon="icon" tooltipText="text"></TechIcon>
    );

    // ACT & ASSERT
    expect(getByText("text")).toBeInTheDocument();
  });
});
