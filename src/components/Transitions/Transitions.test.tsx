import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Transitions from "./Transitions";

describe("Transitions", () => {
  it("component 'Transitions' is rendered", () => {
    // ARRANGE
    const { getByText } = render(<Transitions>Transitions</Transitions>);

    // ACT & ASSERT
    expect(getByText("Transitions")).toBeInTheDocument();
  });
});
