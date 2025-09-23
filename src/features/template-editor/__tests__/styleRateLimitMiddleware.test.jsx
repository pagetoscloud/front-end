import { configureStore } from "@reduxjs/toolkit";
import { createStyleRateLimitMiddleware } from "../styleRateLimitMiddleware";

vi.useFakeTimers();

describe("styleRateLimitMiddleware", () => {
  const testReducer = (state = { calls: [] }, action) => {
    if (action.type.startsWith("templateStyle/")) {
      return { calls: [...state.calls, action] };
    }
    return state;
  };

  const setupStore = () =>
    configureStore({
      reducer: testReducer,
      middleware: (getDefault) =>
        getDefault().concat(createStyleRateLimitMiddleware({ limit: 2, interval: 100 })),
    });

  it("should pass unrelated actions immediately", () => {
    const store = setupStore();
    store.dispatch({ type: "OTHER_ACTION" });
    expect(store.getState().calls).toEqual([]);
  });

  it("should re-dispatch with meta.record=true when under limit", () => {
    const store = setupStore();
    store.dispatch({ type: "templateStyle/changeText", payload: "Hello" });

    vi.advanceTimersByTime(100);

    const [action] = store.getState().calls;
    expect(action.meta).toEqual({ record: true, recordForHistory: true });
  });

  it("should re-dispatch with meta.record=false when over limit", () => {
    const store = setupStore();
    store.dispatch({ type: "templateStyle/changeBackground", payload: "red" });
    store.dispatch({ type: "templateStyle/changeBackground", payload: "blue" });
    store.dispatch({ type: "templateStyle/changeBackground", payload: "green" });

    vi.advanceTimersByTime(100);

    const [action] = store.getState().calls;
    expect(action.meta).toEqual({ record: false, recordForHistory: false });
  });

  it("should reset after interval", () => {
    const store = setupStore();

    // First batch (over limit)
    store.dispatch({ type: "templateStyle/changeStyleImage", payload: "first.png" });
    store.dispatch({ type: "templateStyle/changeStyleImage", payload: "second.png" });
    store.dispatch({ type: "templateStyle/changeStyleImage", payload: "third.png" });
    vi.advanceTimersByTime(100);
    expect(store.getState().calls[0].meta.record).toBe(false);

    // Next batch (under limit)
    store.dispatch({ type: "templateStyle/changeStyleImage", payload: "new.png" });
    vi.advanceTimersByTime(100);
    expect(store.getState().calls[1].meta.record).toBe(true);
  });
});