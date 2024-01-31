import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import LinkToPage from "./LinkToPage";
import { Link } from "react-router-dom";
import { ComponentProps } from "react";

vi.mock("react-router-dom", () => ({
  Link: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof Link>) => (
      <div data-testid={props.to}>{props.children}</div>
    )),
}));

describe("LinkToPage", () => {
  it("children should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <LinkToPage
        link="https://jjurasz.com"
        urlTo="https://jjurasz.com"
        linkTitle="Link"
      ></LinkToPage>
    );

    // ASSERT
    expect(getByText("Link")).toBeInTheDocument();
  });

  it("link prop should be passed properly", () => {
    // ARRANGE && ACT
    const { getByTestId } = render(
      <LinkToPage
        link="https://jjurasz.com"
        urlTo="https://jjurasz.com"
        linkTitle="Link"
      ></LinkToPage>
    );

    // ASSERT
    expect(getByTestId("https://jjurasz.com")).toBeInTheDocument();
  });
});
