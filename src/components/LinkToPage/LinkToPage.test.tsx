import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import LinkToPage from "./LinkToPage";
import { BrowserRouter } from "react-router-dom";

describe("  LinkToPage", () => {
  it("text 'Link' should be rendered", () => {
    // ARRANGE && ACT
    const { getByText } = render(
      <LinkToPage
        link="https://jjurasz.com"
        urlTo="https://jjurasz.com"
        linkTitle="Link"
      ></LinkToPage>,
      { wrapper: BrowserRouter }
    );

    // ASSERT
    expect(getByText("Link")).toBeInTheDocument();
  });
});
