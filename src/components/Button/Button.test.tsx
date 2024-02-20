import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  it("should render child properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Button link="test">Button</Button>, {
      wrapper: BrowserRouter,
    });

    // ASSERT
    expect(getByText("Button")).toBeInTheDocument();
  });
});
