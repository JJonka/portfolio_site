import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Box from "./Box";

describe("Box", () => {
  it("child should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Box>Box</Box>);

    // ASSERT
    expect(getByText("Box")).toBeInTheDocument();
  });
  it("prop header should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Box header="My header">Box</Box>);

    // ASSERT
    expect(getByText("My header")).toBeInTheDocument();
  });
});
