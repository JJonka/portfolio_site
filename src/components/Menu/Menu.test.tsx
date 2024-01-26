import Menu from "./Menu";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Menu", () => {
  it("text 'Home' should be render", () => {
    // ARRANGE
    const { getByText } = render(<Menu></Menu>, { wrapper: BrowserRouter });

    // ACT && ASSERT
    expect(getByText("Home")).toBeInTheDocument();
  });
});
