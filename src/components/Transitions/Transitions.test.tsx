import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Transitions from "./Transitions";

describe("Transitions", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Transitions>Transitions</Transitions>);

    // ASSERT
    expect(getByText("Transitions")).toBeInTheDocument();
  });
});
