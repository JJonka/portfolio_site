import Menu from "./Menu";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import LinkToPage from "../LinkToPage/LinkToPage";

vi.mock("../LinkToPage/LinkToPage.tsx", () => ({
  default: (props: ComponentProps<typeof LinkToPage>) => (
    <div data-testid={props.link}>{props.linkTitle}</div>
  ),
}));

describe("Menu", () => {
  it("children should be rendered properly with their props", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(<Menu></Menu>);

    // ASSERT
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Work")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();

    expect(getByTestId("/")).toBeInTheDocument();
    expect(getByTestId("/about")).toBeInTheDocument();
    expect(getByTestId("/work")).toBeInTheDocument();
    expect(getByTestId("/contact")).toBeInTheDocument();
  });
});
