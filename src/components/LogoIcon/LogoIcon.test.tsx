import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import LogoIcon from "./LogoIcon";

describe("LogoIcon", () => {
  it("text 'logoText' should be rendered", () => {
    // ARRANGE
    const { getByText } = render(
      <LogoIcon logo="logo" logoText="logoText"></LogoIcon>
    );

    // ACT & ASSERT
    expect(getByText("logoText")).toBeInTheDocument();
  });
});
