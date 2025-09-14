import { render, screen } from "@testing-library/react";
import ScreenOne from "../ScreenOne";

describe("ScreenOne Component", () => {
  it("renders children directly when mode is 'edit'", () => {
    render(
      <ScreenOne mode="edit" page="page one">
        <div>Child Content</div>
      </ScreenOne>
    );
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("wraps children in Scroll when mode is not 'edit'", () => {
    render(
      <ScreenOne mode="preview" page="page one">
        <div>Preview Content</div>
      </ScreenOne>
    );
    expect(screen.getByText("Preview Content")).toBeInTheDocument();
  });

  it("applies overflow hidden style when mode is 'edit' and page is not 'page one'", () => {
    render(
      <ScreenOne mode="edit" page="page two">
        <div>Hidden Overflow</div>
      </ScreenOne>
    );
    const wrapper = screen.getByTestId("screen-wrapper");
    expect(wrapper).toHaveStyle({ overflow: "hidden" });
  });

  it("does not apply overflow hidden style when mode is 'edit' and page is 'page one'", () => {
    render(
      <ScreenOne mode="edit" page="page one">
        <div>No Hidden Overflow</div>
      </ScreenOne>
    );
    const wrapper = screen.getByTestId("screen-wrapper");
    expect(wrapper).not.toHaveStyle({ overflow: "hidden" });
  });
});