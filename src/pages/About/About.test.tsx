import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { ComponentProps } from "react";
import "@testing-library/jest-dom";
import About from "./About";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Box from "../../components/Box/Box";

vi.mock("../../components/Card/Card", () => ({
  default: (props: ComponentProps<typeof Card>) => <div>{props.children}</div>,
}));
vi.mock("../../components/Menu/Menu", () => ({
  default: () => <div>Menu</div>,
}));
vi.mock("../../components/Transitions/Transitions", () => ({
  default: (props: ComponentProps<typeof Transitions>) => (
    <div>{props.children}</div>
  ),
}));
vi.mock("../../components/Container/Container", () => ({
  default: (props: ComponentProps<typeof Container>) => (
    <div data-testid={props.page}>{props.children}</div>
  ),
}));
vi.mock("../../components/Header/Header", () => ({
  default: (props: ComponentProps<typeof Header>) => (
    <div data-testid={props.page}>{props.children}</div>
  ),
}));
vi.mock("../../components/Box/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));

describe("About", () => {
  it("children should be rendered properly with their props", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(<About></About>);

    // ASSERT
    expect(getByText("Menu")).toBeInTheDocument();
    expect(getByText("That's me.")).toBeInTheDocument();
    expect(
      getByText("If I had to describe", { exact: false })
    ).toBeInTheDocument();

    expect(getByTestId("container-about")).toBeInTheDocument();
    expect(getByTestId("header-about")).toBeInTheDocument();
    expect(getByTestId("image")).toBeInTheDocument();
  });
});
