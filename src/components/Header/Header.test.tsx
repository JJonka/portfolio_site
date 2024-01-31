import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("child should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Header>Header</Header>);

    // ASSERT
    expect(getByText("Header")).toBeInTheDocument();
  });
});
