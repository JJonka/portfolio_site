import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import LogoIcon from "./LogoIcon";
import { ComponentProps } from "react";
import { ReactSVG } from "react-svg";

vi.mock("react-svg", () => ({
  ReactSVG: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof ReactSVG>) => (
      <div>{props.src}</div>
    )),
}));

describe("LogoIcon", () => {
  it("should render the children properly with props", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <LogoIcon logo="logo" logoText="logoText"></LogoIcon>
    );

    // ASSERT
    expect(getByText("logo")).toBeInTheDocument();

    expect(getByText("logoText")).toBeInTheDocument();
  });
});
