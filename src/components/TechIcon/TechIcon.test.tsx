import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import TechIcon from "./TechIcon";
import { ComponentProps } from "react";
import { ReactSVG } from "react-svg";

vi.mock("react-svg", () => ({
  ReactSVG: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof ReactSVG>) => (
      <div>{props.src}</div>
    )),
}));

describe("TechIcon", () => {
  it("children should be rendered properly with props", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <TechIcon icon="icon" tooltipText="text"></TechIcon>
    );

    // ASSERT
    expect(getByText("icon")).toBeInTheDocument();
    expect(getByText("text")).toBeInTheDocument();
  });
});
