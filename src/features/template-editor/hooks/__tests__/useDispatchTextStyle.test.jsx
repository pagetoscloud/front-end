import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import * as reactRedux from "react-redux";
import { useDispatchTextStyle } from "../useDispatchTextStyle";
import { changeText } from "../../templateStyleSlice";

vi.mock("react-redux");

describe("useDispatchTextStyle", () => {
  let mockDispatch;
  const editMode = { component: "banner", type: "title" };
  const sampleData = {
    banner: {
      data: {
        title: {
          color: "#000000",
          opacity: 50,
          fontSize: 16,
          fontWeight: 400,
          fontFamily: "Arial",
          lineHeight: 20,
          wordSpacing: 2,
          textAlign: "left",
        },
      },
    },
  };

  beforeEach(() => {
    mockDispatch = vi.fn();
    reactRedux.useDispatch.mockReturnValue(mockDispatch);
  });

  it("should initialize state correctly", () => {
    const { result } = renderHook(() =>
      useDispatchTextStyle(sampleData, editMode)
    );

    expect(result.current.fontColor).toBe("#000000");
    expect(result.current.opacity).toBe(50);
    expect(result.current.fontSize).toBe(16);
    expect(result.current.fontFamily).toBe("Arial"); // pulled from sampleData
    expect(result.current.fontStyle).toBe(400);
    expect(result.current.fontLineHeight).toBe(20);
    expect(result.current.fontSpacing).toBe(2);
    expect(result.current.textAlign).toBe("left");
  });

  it("should handle font color change", () => {
    const { result } = renderHook(() =>
      useDispatchTextStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeFontColor({ data: "#ff0000", style: "red" });
    });

    expect(result.current.fontColor).toEqual({ data: "#ff0000", style: "red" });
    expect(mockDispatch).toHaveBeenCalledWith(
      changeText({
        component: "banner",
        type: "title",
        itemData: "color",
        itemStyle: "color",
        data: "#ff0000",
        style: "red",
      })
    );
  });

  it("should handle opacity change", () => {
    const { result } = renderHook(() =>
      useDispatchTextStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeFontOpacity(75);
    });

    expect(result.current.opacity).toBe(75);
    expect(mockDispatch).toHaveBeenCalledWith(
      changeText({
        component: "banner",
        type: "title",
        itemData: "opacity",
        itemStyle: "opacity",
        data: 75,
        style: "75%",
      })
    );
  });

  it("should handle font size change", () => {
    const { result } = renderHook(() =>
      useDispatchTextStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeFontSize(25);
    //   result.current.handleChangeFontSize(20);
    });

    expect(result.current.fontSize).toBe(25);
    expect(mockDispatch).toHaveBeenCalledWith({
        ...changeText({
            component: "banner",
            type: "title",
            itemData: "fontSize",
            itemStyle: "fontSize",
            data: 25,
            style: `25px`,
        }),
        meta: {record: true}
    });
  });

  it("should handle text align change", () => {
    const { result } = renderHook(() =>
      useDispatchTextStyle(sampleData, editMode)
    );

    act(() => {
      result.current.handleChangeTextAlign("center");
    });

    expect(result.current.textAlign).toBe("center");
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: expect.any(String),
        payload: expect.objectContaining({
          itemData: "textAlign",
          style: "center",
        }),
      })
    );
  });
});