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

vi.mock("./LinkToPage.tsx", () => ({
  default: (props: ComponentProps<typeof LinkToPage>) => (
    <div data-testid={props.urlTo}>
      <Link to={props.link}>{props.linkTitle}</Link>
    </div>
  ),
}));

describe("LinkToPage", () => {
  it("should render the children properly", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(
      <LinkToPage link="childID" urlTo="parentID" linkTitle="Link"></LinkToPage>
    );

    // ASSERT
    expect(getByText("Link")).toBeInTheDocument();
    expect(getByTestId("childID")).toBeInTheDocument();
    expect(getByTestId("parentID")).toBeInTheDocument();
  });
});
