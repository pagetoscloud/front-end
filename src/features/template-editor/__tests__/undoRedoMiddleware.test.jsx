import { configureStore } from "@reduxjs/toolkit";
import { createUndoRedoMiddleware, UNDO, REDO } from "../undoRedoMiddleware";
import historyReducer from "../historySlice";

describe("undoRedoMiddleware", () => {
  const reducer = (state = { count: 0 }, action) => {
    if (action.type === "INCREMENT") return { count: state.count + 1 };
    if (action.type === "__REPLACE_STATE__") return action.payload.app;
    return state;
  };

  const setupStore = () =>
    configureStore({
      reducer: { app: reducer, history: historyReducer },
      middleware: (getDefault) => getDefault().concat(createUndoRedoMiddleware()),
    });

  it("should record actions with meta.record", () => {
    const store = setupStore();
    store.dispatch({ type: "INCREMENT", meta: { record: true } });
    store.dispatch({ type: "INCREMENT", meta: { record: true } });

    const state = store.getState();
    expect(state.app.count).toBe(2);
    expect(state.history.canUndo).toBe(true);
  });

  it("should undo and redo", () => {
    const store = setupStore();
    store.dispatch({ type: "INCREMENT", meta: { record: true } });
    store.dispatch({ type: "INCREMENT", meta: { record: true } });

    expect(store.getState().app.count).toBe(2);

    store.dispatch({ type: UNDO });
    expect(store.getState().app.count).toBe(1);
    expect(store.getState().history.canRedo).toBe(true);

    store.dispatch({ type: REDO });
    expect(store.getState().app.count).toBe(2);
  });

  it("should reset history on initialData", () => {
    const store = setupStore();
    store.dispatch({ type: "INCREMENT", meta: { record: true } });
    expect(store.getState().app.count).toBe(1);

    store.dispatch({ type: "RESET", meta: { initialData: true } });
    expect(store.getState().history.canUndo).toBe(false);
    expect(store.getState().history.canRedo).toBe(false);
  });
});