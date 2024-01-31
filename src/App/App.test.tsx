import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { ComponentProps } from "react";
import { Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

vi.mock("react-router-dom", () => ({
  Routes: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof Routes>) => (
      <div>{props.children}</div>
    )),
  Route: vi
    .fn()
    .mockImplementation((props: ComponentProps<typeof Route>) => (
      <div>{props.path}</div>
    )),
}));

describe("App", () => {
  it("children should be rendered properly with their props", () => {
    // ARRANGE && ACT
    const { getByText } = render(<App></App>);

    // ASSERT
    expect(getByText("/")).toBeInTheDocument();
    expect(getByText("/about")).toBeInTheDocument();
    expect(getByText("/work")).toBeInTheDocument();
    expect(getByText("/contact")).toBeInTheDocument();
  });
});
