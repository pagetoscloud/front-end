import reducer, { changeRef } from "../editorBoardRefSlice";

describe("editorBoardRefSlice", () => {
  const initialState = { currentRef: {} };

  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle changeRef with an object", () => {
    const fakeRef = { id: "123", node: "div" };
    const state = reducer(initialState, changeRef(fakeRef));
    expect(state.currentRef).toEqual(fakeRef);
  });

  it("should handle changeRef with a DOM-like object", () => {
    const domRef = { current: document.createElement("div") };
    const state = reducer(initialState, changeRef(domRef));
    expect(state.currentRef.current.tagName).toBe("DIV");
  });

  it("should replace the currentRef completely (not merge)", () => {
    const startState = { currentRef: { id: "old" } };
    const newRef = { id: "new" };
    const state = reducer(startState, changeRef(newRef));
    expect(state.currentRef).toEqual({ id: "new" });
    expect(state.currentRef).not.toHaveProperty("old");
  });
});