import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Box from "./Box";

describe("Box", () => {
  it("should render child properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Box>Box</Box>);

    // ASSERT
    expect(getByText("Box")).toBeInTheDocument();
  });
  it("should render prop header properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Box header="My header">Box</Box>);

    // ASSERT
    expect(getByText("My header")).toBeInTheDocument();
  });
});
