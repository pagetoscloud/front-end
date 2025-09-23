import { renderHook, act } from "@testing-library/react";
import { useLoginPopUp } from "../useLoginPopUp";

describe("useLoginPopUp", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should start with showLoginPopUp=false", () => {
    const { result } = renderHook(() => useLoginPopUp(false));
    expect(result.current.showLoginPopUp).toBe(false);
  });

  it("should toggle showLoginPopUp", () => {
    const { result } = renderHook(() => useLoginPopUp(false));

    act(() => {
      result.current.handleLoginPopUp(); // open
    });
    expect(result.current.showLoginPopUp).toBe(true);

    act(() => {
      result.current.handleLoginPopUp(); // close
    });
    expect(result.current.showLoginPopUp).toBe(false);
  });

  it("should clear localStorage when closing and logged out", () => {
    localStorage.setItem("unsave-thumbnail-progress", "thumb");
    localStorage.setItem("unsave-template-progress", "template");

    const { result } = renderHook(() => useLoginPopUp(false));

    act(() => {
      result.current.handleLoginPopUp(); // open
    });
    act(() => {
      result.current.handleLoginPopUp(); // close
    });

    expect(localStorage.removeItem).toHaveBeenCalledWith("unsave-thumbnail-progress");
    expect(localStorage.removeItem).toHaveBeenCalledWith("unsave-template-progress");
  });

  it("should NOT clear localStorage when closing and logged in", () => {
    const { result } = renderHook(() => useLoginPopUp(true));

    act(() => {
      result.current.handleLoginPopUp(); // open
    });
    act(() => {
      result.current.handleLoginPopUp(); // close
    });

    expect(localStorage.removeItem).not.toHaveBeenCalled();
  });
});