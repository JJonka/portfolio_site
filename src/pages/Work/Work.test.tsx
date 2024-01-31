import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { ComponentProps } from "react";
import "@testing-library/jest-dom";
import Work from "./Work";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Project from "../../components/Project/Project";
import Item from "../../components/Item/Item";
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
    <div>{props.children}</div>
  ),
}));
vi.mock("../../components/Header/Header", () => ({
  default: () => <div>Header</div>,
}));
vi.mock("../../components/Box/Box", () => ({
  default: (props: ComponentProps<typeof Box>) => <div>{props.children}</div>,
}));
vi.mock("../../components/Project/Project", () => ({
  default: (props: ComponentProps<typeof Project>) => (
    <div>{props.children}</div>
  ),
}));
vi.mock("../../components/Item/Item", () => ({
  default: (props: ComponentProps<typeof Item>) => <div>{props.children}</div>,
}));
vi.mock("../../components/EndOfSection/EndOfSection", () => ({
  default: () => <div>EndOfSection</div>,
}));
vi.mock("../../components/WorkDate/WorkDate", () => ({
  default: () => <div>WorkDate</div>,
}));
vi.mock("../../components/TechIcon/TechIcon", () => ({
  default: () => <div>TechIcon</div>,
}));

describe("Work", () => {
  it("children should be rendered properly", () => {
    // ARRANGE && ACT
    const { getByText, getAllByText } = render(<Work></Work>);

    // ASSERT
    expect(getByText("Menu")).toBeInTheDocument();
    expect(getAllByText("Header")).toHaveLength(4);
    expect(getAllByText("TechIcon")).toHaveLength(12);
    expect(getAllByText("WorkDate")).toHaveLength(5);
    expect(getAllByText("EndOfSection")).toHaveLength(3);
  });
});
