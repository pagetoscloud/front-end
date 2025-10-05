import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useDispatchImageContent } from "../useDispatchImageContent";
import { changeImage, changeImageProduct } from "../../templateContentSlice";
import { editProduct } from "../../templateProductSlice";
// import { ImageListData } from "../../../../data/ImageListData";

// Mock react-redux
let mockDispatch;
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

// Mock ImageListData
vi.mock("../../../../data/ImageListData", () => ({
  ImageListData: [
    { id: "1", image: "image-1.png" },
    { id: "2", image: "image-2.png" },
  ],
}));

describe("useDispatchImageContent", () => {
  beforeEach(() => {
    mockDispatch = vi.fn();
  });

  const baseData = {}; // not used inside hook directly
  const productEditMode = { mode: 'Image', type: 'image', component: "product", id: "p1", category: "cat1", image: "old-product.png" };
  const bannerEditMode = { component: "banner", image: "old-banner.png" };

  it("should initialize state correctly", () => {
    const { result } = renderHook(() =>
      useDispatchImageContent(bannerEditMode)
    );

    expect(result.current.browserImage).toBe("old-banner.png");
    expect(result.current.selectedUploadImage).toBe("old-banner.png");
  });

  it("should handleChangeImageBrowser for product", () => {
    const { result } = renderHook(() =>
      useDispatchImageContent(productEditMode)
    );

    act(() => {
      result.current.handleChangeImageBrowser("1"); // pick from ImageListData
    });

    expect(result.current.browserImage).toBe("image-1.png");
    expect(mockDispatch).toHaveBeenCalledWith({
      ...editProduct({
        items: "image",
        component: "product",
        category: "cat1",
        id: "p1",
        data: "image-1.png",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeImageBrowser for banner", () => {
    const { result } = renderHook(() =>
      useDispatchImageContent(bannerEditMode)
    );

    act(() => {
      result.current.handleChangeImageBrowser("2");
    });

    expect(result.current.browserImage).toBe("image-2.png");
    expect(mockDispatch).toHaveBeenCalledWith({
      ...changeImage({
        component: "banner",
        itemData: "image",
        itemStyle: "image",
        data: "image-2.png",
      }),
      meta: { record: true },
    });
  });

  it("should handleChangeImageUpload for product", () => {
    const { result } = renderHook(() =>
      useDispatchImageContent(productEditMode)
    );

    act(() => {
      result.current.handleChangeImageUpload("uploaded-product.png");
    });

    expect(result.current.selectedUploadImage).toBe("uploaded-product.png");
    expect(mockDispatch).toHaveBeenCalledWith(
      changeImageProduct({
        component: "product",
        category: "cat1",
        id: "p1",
        data: "uploaded-product.png",
      })
    );
  });

  it("should handleChangeImageUpload for banner", () => {
    const { result } = renderHook(() =>
      useDispatchImageContent(bannerEditMode)
    );

    act(() => {
      result.current.handleChangeImageUpload("uploaded-banner.png");
    });

    expect(result.current.selectedUploadImage).toBe("uploaded-banner.png");
    expect(mockDispatch).toHaveBeenCalledWith(
      changeImage({
        component: "banner",
        itemData: "image",
        itemStyle: "image",
        data: "uploaded-banner.png",
      })
    );
  });
});