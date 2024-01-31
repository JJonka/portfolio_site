import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Container from "./Container";

describe("Container", () => {
  it("child should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Container>Container</Container>);

    // ASSERT
    expect(getByText("Container")).toBeInTheDocument();
  });
});
