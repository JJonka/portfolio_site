import Menu from "./Menu";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Menu", () => {
  it("text 'Home' should be render", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Menu></Menu>, { wrapper: BrowserRouter });

    // ASSERT
    expect(getByText("Home")).toBeInTheDocument();
  });
});
