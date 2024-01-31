import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import WorkDate from "./WorkDate";

describe("WorkDate", () => {
  it("child should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(<WorkDate>{"WorkDate"}</WorkDate>);

    // ASSERT
    expect(getByText("WorkDate")).toBeInTheDocument();
  });
});
