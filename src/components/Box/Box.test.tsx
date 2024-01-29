import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Box from "./Box";

describe("Box", () => {
  it("text 'Box' should be rendered", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Box>Box</Box>);

    // ASSERT
    expect(getByText("Box")).toBeInTheDocument();
  });
});
