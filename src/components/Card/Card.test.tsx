import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  it("text 'Card' should be rendered", () => {
    // ARRANGE
    const { getByText } = render(<Card>Card</Card>);

    // ACT & ASSERT
    expect(getByText("Card")).toBeInTheDocument();
  });
});
