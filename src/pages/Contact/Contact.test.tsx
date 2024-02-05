import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { ComponentProps } from "react";
import "@testing-library/jest-dom";
import Contact from "./Contact";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import LogoIcon from "../../components/LogoIcon/LogoIcon";

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
vi.mock("../../components/LogoIcon/LogoIcon", () => ({
  default: (props: ComponentProps<typeof LogoIcon>) => (
    <div data-testid={props.logo}>{props.logoText}</div>
  ),
}));

describe("Contact", () => {
  it("should render the children properly with their props", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(<Contact></Contact>);

    // ASSERT
    expect(getByText("Menu")).toBeInTheDocument();
    expect(getByText("Let's stay in touch!")).toBeInTheDocument();
    expect(getByText("in/joanna-jurasz/")).toBeInTheDocument();
    expect(getByText("joanna.jurasz21@gmail.com")).toBeInTheDocument();
    expect(getByText("github.com/JJonka")).toBeInTheDocument();

    expect(getByTestId("container-contact")).toBeInTheDocument();
    expect(getByTestId("header-contact")).toBeInTheDocument();
    expect(getByTestId("/assets/linkedin_logo.svg")).toBeInTheDocument();
    expect(getByTestId("/assets/mail_logo.svg")).toBeInTheDocument();
    expect(getByTestId("/assets/github_logo.svg")).toBeInTheDocument();
    expect(getByTestId("logos")).toBeInTheDocument();
  });
});
