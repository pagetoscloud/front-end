// historySlice.test.js
import reducer, { changeHistory } from "../historySlice";

describe("historySlice", () => {
  const initialState = { canUndo: false, canRedo: false };

  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle changeHistory to enable undo/redo", () => {
    const action = changeHistory({ undo: true, redo: true });
    const state = reducer(initialState, action);
    expect(state).toEqual({ canUndo: true, canRedo: true });
  });

  it("should handle changeHistory to disable undo/redo", () => {
    const startingState = { canUndo: true, canRedo: true };
    const action = changeHistory({ undo: false, redo: false });
    const state = reducer(startingState, action);
    expect(state).toEqual({ canUndo: false, canRedo: false });
  });

  it("should handle changeHistory with mixed values", () => {
    const action = changeHistory({ undo: true, redo: false });
    const state = reducer(initialState, action);
    expect(state).toEqual({ canUndo: true, canRedo: false });
  });
});
