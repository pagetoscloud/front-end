import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useDispatchButton } from "../useDispatchButton";
import { changeStyleButton } from "../../templateStyleSlice";

// Mock react-redux
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

let mockDispatch;

describe("useDispatchButton", () => {
  const initialData = {
    buttonComponent: {
      data: {
        button: {
          background: "red",
          color: "white",
          borderRadius: 5,
          opacity: 0.5,
        },
      },
    },
  };
  const editMode = { component: "buttonComponent", type: "testType" };

  beforeEach(() => {
    mockDispatch = vi.fn();
  });

  it("should initialize state from data", () => {
    const { result } = renderHook(() =>
      useDispatchButton(initialData, editMode)
    );

    expect(result.current.background).toBe("red");
    expect(result.current.color).toBe("white");
    expect(result.current.borderRadius).toBe(5);
    expect(result.current.opacity).toBe(0.5);
  });

  it("should handleChangeBackgroundColor update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchButton(initialData, editMode)
    );

    act(() => {
      result.current.handleChangeBackgroundColor({ data: "blue", style: "blue" });
    });

    expect(result.current.background).toBe("blue");
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeStyleButton({
        component: editMode.component,
        itemData: "background",
        itemStyle: "background",
        data: "blue",
        style: "blue",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeFontColor update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchButton(initialData, editMode)
    );

    act(() => {
      result.current.handleChangeFontColor({ data: "black", style: "black" });
    });

    expect(result.current.color).toBe("black");
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeStyleButton({
        component: editMode.component,
        itemData: "color",
        itemStyle: "color",
        data: "black",
        style: "black",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeBorderRadius update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchButton(initialData, editMode)
    );

    act(() => {
      result.current.handleChangeBorderRadius(10);
    });

    expect(result.current.borderRadius).toBe(10);
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeStyleButton({
        component: editMode.component,
        type: editMode.type,
        itemData: "borderRadius",
        itemStyle: "borderRadius",
        data: 10,
        style: "10px",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeOpacity update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchButton(initialData, editMode)
    );

    act(() => {
      result.current.handleChangeOpacity(75);
    });

    expect(result.current.opacity).toBe(75);
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeStyleButton({
        component: editMode.component,
        type: editMode.type,
        itemData: "opacity",
        itemStyle: "opacity",
        data: 75,
        style: "75%",
      }),
      meta: { record: true },
    });
  });
});
