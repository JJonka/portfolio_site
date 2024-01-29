import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import LogoIcon from "./LogoIcon";

describe("LogoIcon", () => {
  it("text 'logoText' should be rendered", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <LogoIcon logo="logo" logoText="logoText"></LogoIcon>
    );

    // ASSERT
    expect(getByText("logoText")).toBeInTheDocument();
  });
});
