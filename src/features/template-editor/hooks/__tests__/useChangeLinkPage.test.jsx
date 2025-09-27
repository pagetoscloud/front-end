import { renderHook, act } from "@testing-library/react";
import { useChangeLinkPage } from "../useChangeLinkPage";

describe("useChangeLinkPage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize with default state", () => {
    const { result } = renderHook(() => useChangeLinkPage("123"));

    expect(result.current.linkPage).toBe("");
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.success).toBe(false);
  });

  it("should update linkPage and set success on successful API call", async () => {
    const mockResponse = { status: "ok" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const { result } = renderHook(() => useChangeLinkPage("123"));

    await act(async () => {
      await result.current.handleChangeLinkPage("new-link");
    });

    expect(result.current.linkPage).toBe("new-link");
    expect(result.current.loading).toBe(false);
    expect(result.current.success).toBe(true);
    expect(result.current.error).toBe(null);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/personal-area/change-link"),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ link: "new-link", web_id: "123" }),
      })
    );
  });

  it("should set error when API call fails", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    const { result } = renderHook(() => useChangeLinkPage("123"));

    await act(async () => {
      await result.current.handleChangeLinkPage("bad-link");
    });

    expect(result.current.success).toBe(false);
    expect(result.current.error).toBe("Network error");
  });

  it("should catch exceptions thrown by fetch", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("fetch failed"));

    const { result } = renderHook(() => useChangeLinkPage("123"));

    await act(async () => {
      await result.current.handleChangeLinkPage("test-link");
    });

    expect(result.current.success).toBe(false);
    expect(result.current.error).toBe("fetch failed");
  });
});