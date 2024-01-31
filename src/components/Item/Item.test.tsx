import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Item from "./Item";

describe("Item", () => {
  it("child should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Item>Item</Item>);

    // ASSERT
    expect(getByText("Item")).toBeInTheDocument();
  });
});
