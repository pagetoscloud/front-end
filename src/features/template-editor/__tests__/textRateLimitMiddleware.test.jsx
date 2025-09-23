import { configureStore } from "@reduxjs/toolkit";
import { createTextRateLimitMiddleware } from "../textRateLimitMiddleware";

vi.useFakeTimers();

describe("textRateLimitMiddleware", () => {
  const testReducer = (state = { calls: [] }, action) => {
    if (action.type.startsWith("templateContent/") || action.type.startsWith("product/")) {
      return { calls: [...state.calls, action] };
    }
    return state;
  };

  const setupStore = () =>
    configureStore({
      reducer: testReducer,
      middleware: (getDefault) =>
        getDefault().concat(createTextRateLimitMiddleware({ limit: 2, interval: 400 })),
    });

  it("should pass unrelated actions immediately", () => {
    const store = setupStore();
    store.dispatch({ type: "OTHER_ACTION" });
    expect(store.getState().calls).toEqual([]); // reducer ignores it, but importantly no crash
  });

  it("should re-dispatch action with meta.record=true when under limit", () => {
    const store = setupStore();
    store.dispatch({ type: "templateContent/changeBannerText", payload: "Hello" });

    // Advance timers
    vi.advanceTimersByTime(400);

    const [action] = store.getState().calls;
    expect(action.meta).toEqual({ record: true, recordForHistory: true });
  });

  it("should re-dispatch action with meta.record=false when over limit", () => {
    const store = setupStore();
    store.dispatch({ type: "templateContent/changeBannerText", payload: "First" });
    store.dispatch({ type: "templateContent/changeBannerText", payload: "Second" });
    store.dispatch({ type: "templateContent/changeBannerText", payload: "Third" });

    vi.advanceTimersByTime(400);

    const [action] = store.getState().calls;
    expect(action.meta).toEqual({ record: false, recordForHistory: false });
  });

  it("should reset after interval", () => {
    const store = setupStore();

    // First batch (3 actions > limit)
    store.dispatch({ type: "product/editProduct", payload: { id: 1 } });
    store.dispatch({ type: "product/editProduct", payload: { id: 1 } });
    store.dispatch({ type: "product/editProduct", payload: { id: 1 } });
    vi.advanceTimersByTime(400);
    expect(store.getState().calls[0].meta.record).toBe(false);

    // Second batch (1 action < limit) → should record
    store.dispatch({ type: "product/editProduct", payload: { id: 2 } });
    vi.advanceTimersByTime(400);
    expect(store.getState().calls[1].meta.record).toBe(true);
  });
});