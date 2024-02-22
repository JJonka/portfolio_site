import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Copyright from "./Copyright";

describe("Copyright", () => {
  it("should render the component properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<Copyright page=""></Copyright>);

    // ASSERT
    expect(getByText("© 2024 Joanna Jurasz")).toBeInTheDocument();
  });
});
