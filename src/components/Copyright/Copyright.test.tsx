import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Copyright from "./Copyright";

describe("Copyright", () => {
  it("component should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Copyright></Copyright>);

    // ASSERT
    expect(getByText("© 2023 Joanna Jurasz")).toBeInTheDocument();
  });
});
