import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Project from "./Project";

describe("Project", () => {
  it("should render the child properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Project>Project</Project>);

    // ASSERT
    expect(getByText("Project")).toBeInTheDocument();
  });
});
