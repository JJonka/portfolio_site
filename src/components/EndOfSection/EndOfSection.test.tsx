import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import EndOfSection from "./EndOfSection";
import { ReactSVG } from "react-svg";
import { ComponentProps } from "react";

vi.mock("react-svg", () => ({
  ReactSVG: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof ReactSVG>) => (
      <div>{props.src}</div>
    )),
}));

describe("EndOfSection", () => {
  it("child should be rendered properly with its props", () => {
    // ARRANGE && ACT
    const { getByText } = render(<EndOfSection></EndOfSection>);

    // ASSERT
    expect(getByText("/assets/star.svg")).toBeInTheDocument();
  });
});
