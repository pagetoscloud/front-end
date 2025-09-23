import reducer, { changePage } from "../templatePagePositionSlice";

describe("templatePagePositionSlice", () => {
  const initialState = { currentPosition: false };

  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle changePage (set to true)", () => {
    const state = reducer(initialState, changePage(true));
    expect(state.currentPosition).toBe(true);
  });

  it("should handle changePage (set to string)", () => {
    const state = reducer(initialState, changePage("page two"));
    expect(state.currentPosition).toBe("page two");
  });

  it("should handle changePage (set to number)", () => {
    const state = reducer(initialState, changePage(3));
    expect(state.currentPosition).toBe(3);
  });
});