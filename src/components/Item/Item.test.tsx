import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Item from "./Item";
import { ComponentProps } from "react";

vi.mock("./Item.tsx", () => ({
  default: (props: ComponentProps<typeof Item>) => (
    <div data-testid={props.page}>{props.children}</div>
  ),
}));

describe("Item", () => {
  it("should render the child properly", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(
      <Item page="pageProp">Item</Item>
    );

    // ASSERT
    expect(getByText("Item")).toBeInTheDocument();
    expect(getByTestId("pageProp")).toBeInTheDocument();
  });
});
