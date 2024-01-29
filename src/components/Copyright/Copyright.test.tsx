import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Copyright from "./Copyright";

describe("Copyright", () => {
  it("component with testId 'copyright' should be rendered", () => {
    // ARRANGE && ACT
    const { getByTestId } = render(<Copyright></Copyright>);

    // ASSERT
    expect(getByTestId("copyright")).toBeInTheDocument();
  });
});
