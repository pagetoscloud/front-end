import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useDispatchBackgroundStyle } from "../useDispatchBackgroundStyle";
import { changeBackground } from "../../templateStyleSlice";

// Mock react-redux
let mockDispatch;
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("useDispatchBackgroundStyle", () => {
  const sampleData = {
    block: {
      data: {
        background: {
          color: "#fff",
          opacity: 50,
          filter: { type: "blur", value: 5 },
          borderRadius: 8,
          effect: [],
          border: { color: "#000", size: 2, type: "solid" },
        },
      },
      style: {
        background: {
          background: "#fff",
          opacity: "50%",
          borderRadius: "8%",
          filter: "blur(5px)",
        },
      },
    },
  };

  const editMode = { component: "block", type: "background" };

  beforeEach(() => {
    mockDispatch = vi.fn();
  });

  it("should initialize state correctly", () => {
    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(sampleData, editMode)
    );
    expect(result.current.backgroundColor).toBe("#fff");
    expect(result.current.backgroundOpacity).toBe(50);
    expect(result.current.backgroundBlur).toBe(5);
    expect(result.current.backgroundBorderRadius).toBe(8);
    expect(result.current.backgroundEffect).toEqual([]);
    expect(result.current.borderColor).toBe("#000");
    expect(result.current.borderSize).toBe(2);
    expect(result.current.borderType).toBe("solid");
  });

  it("should handle background color change", () => {
    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeBackgroundColor({ data: "#123", style: "blue" });
    });

    expect(result.current.backgroundColor).toBe("#123");
    expect(mockDispatch).toHaveBeenCalledWith(
      changeBackground({
        component: "block",
        type: "background",
        itemData: "color",
        itemStyle: "background",
        data: "#123",
        style: "blue",
      })
    );
  });

  it("should handle opacity change", () => {
    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeBackgroundOpacity(75);
    });

    expect(result.current.backgroundOpacity).toBe(75);
    expect(mockDispatch).toHaveBeenCalledWith(
      changeBackground({
        component: "block",
        type: "background",
        itemData: "opacity",
        itemStyle: "opacity",
        data: 75,
        style: "75%",
      })
    );
  });

  it("should handle blur change", () => {
    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeBackgroundBlur(10);
    });

    expect(result.current.backgroundBlur).toBe(10);
    expect(mockDispatch).toHaveBeenCalledWith(
      changeBackground({
        component: "block",
        type: "background",
        itemData: "filter",
        itemStyle: "filter",
        data: { type: "blur", value: 10 },
        style: "blur(10px",
      })
    );
  });

  it("should add new effect", () => {
    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleAddBackgroundEffect();
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "templateStyle/changeBackground",
      })
    );
  });

  it("should delete effect", () => {
    const newData = {
      block: {
        data: {
          background: {
            ...sampleData.block.data.background,
            effect: [{ name: "filter", value: 10, type: "blur" }],
          },
        },
        style: sampleData.block.style,
      },
    };

    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(newData, editMode)
    );

    act(() => {
      result.current.handleDeleteBackgroundEffect("filter");
    });

    expect(result.current.backgroundEffect).toEqual([]);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "templateStyle/changeBackground",
      })
    );
  });

  it("should change effect type", async () => {
    const newData = {
      block: {
        data: {
          background: {
            ...sampleData.block.data.background,
            effect: [{ name: "filter", value: 5, type: "blur" }],
          },
        },
        style: sampleData.block.style,
      },
    };

    const { result } = renderHook(() =>
      useDispatchBackgroundStyle(newData, editMode)
    );

    await act(async () => {
      await result.current.handleChangeEffectType("filter", "boxShadow", {
        x: 1,
        y: 1,
        z: 1,
        size: 3,
        color: "#000",
      });
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "templateStyle/changeBackground",
      })
    );
  });
});