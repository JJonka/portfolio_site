import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Container from "./Container";
import { ComponentProps } from "react";

vi.mock("./Container.tsx", () => ({
  default: (props: ComponentProps<typeof Container>) => (
    <div data-testid={props.page}>{props.children}</div>
  ),
}));

describe("Container", () => {
  it("should render child properly", () => {
    // ARRANGE && ACT
    const { getByText, getByTestId } = render(
      <Container page="pageProp">Container</Container>
    );

    // ASSERT
    expect(getByText("Container")).toBeInTheDocument();
    expect(getByTestId("pageProp")).toBeInTheDocument();
  });
});
