import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Header from "./Header";
import { ComponentProps } from "react";

vi.mock("./Header.tsx", () => ({
  default: (props: ComponentProps<typeof Header>) => (
    <div data-testid={props.page}>{props.children}</div>
  ),
}));

describe("Header", () => {
  it("should render the child properly with its props", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(
      <Header page="pageProp">Header</Header>
    );

    // ASSERT
    expect(getByText("Header")).toBeInTheDocument();
    expect(getByTestId("pageProp")).toBeInTheDocument();
  });
});
