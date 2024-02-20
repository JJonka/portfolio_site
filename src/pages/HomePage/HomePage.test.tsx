import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { ComponentProps } from "react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import { BrowserRouter } from "react-router-dom";

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

describe("HomePage", () => {
  it("should render the children properly with their props", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(<HomePage></HomePage>, {
      wrapper: BrowserRouter,
    });

    // ASSERT
    expect(getByText("Menu")).toBeInTheDocument();
    expect(getByText("Hi! I am Joanna,")).toBeInTheDocument();

    expect(getByTestId("container-home")).toBeInTheDocument();
    expect(getByTestId("header-home")).toBeInTheDocument();
    expect(getByTestId("h2")).toBeInTheDocument();
  });
});
