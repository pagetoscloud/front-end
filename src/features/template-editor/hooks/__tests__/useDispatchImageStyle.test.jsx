import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useDispatchImageStyle } from "../useDispatchImageStyle";
import { changeStyleImage } from "../../templateStyleSlice";

// Mock react-redux
let mockDispatch;
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("useDispatchImageStyle", () => {
  const sampleData = {
    media: {
      data: {
        image: {
          opacity: 80,
          filter: { type: "blur", value: 4 },
          borderRadius: 6,
        },
      },
    },
  };

  const editMode = { component: "media", type: "image" };

  beforeEach(() => {
    mockDispatch = vi.fn();
  });

  it("should initialize state correctly", () => {
    const { result } = renderHook(() =>
      useDispatchImageStyle(sampleData, editMode)
    );

    expect(result.current.imageOpacity).toBe(80);
    expect(result.current.imageBlur).toBe(4);
    expect(result.current.imageBorderRadius).toBe(6);
    expect(result.current.imageFilter).toBe("blur");
  });

  it("should handleChangeImageOpacity update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchImageStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeImageOpacity(50);
    });

    expect(result.current.imageOpacity).toBe(50);
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeStyleImage({
        component: "media",
        itemData: "opacity",
        itemStyle: "opacity",
        data: 50,
        style: "50%",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeImageBlur update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchImageStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeImageBlur(12);
    });

    expect(result.current.imageBlur).toBe(12);
    expect(mockDispatch).toHaveBeenCalledWith(
      changeStyleImage({
        component: "media",
        itemData: "filter",
        itemStyle: "filter",
        data: { type: "blur", value: 12 },
        style: "blur(12px)",
      })
    );
  });

  it("should handleChangeImageBorderRadius update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchImageStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeImageBorderRadius(15);
    });

    expect(result.current.imageBorderRadius).toBe(15);
    expect(mockDispatch).toHaveBeenCalledWith(
      changeStyleImage({
        component: "media",
        itemData: "borderRadius",
        itemStyle: "borderRadius",
        data: 15,
        style: "15px",
      })
    );
  });

  it("should handleChangeImageFilter update state and dispatch", () => {
    const { result } = renderHook(() =>
      useDispatchImageStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeImageFilter({
        data: { type: "grayscale", value: 1 },
        style: "grayscale(1)",
      });
    });

    expect(result.current.imageFilter).toEqual({
      type: "grayscale",
      value: 1,
    });
    expect(mockDispatch).toHaveBeenCalledWith(
      changeStyleImage({
        component: "media",
        itemData: "filter",
        itemStyle: "filter",
        data: { type: "grayscale", value: 1 },
        style: "grayscale(1)",
      })
    );
  });
});