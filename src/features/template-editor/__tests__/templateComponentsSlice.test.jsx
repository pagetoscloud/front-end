import reducer, { initialComponents } from "../templateComponentsSlice";

describe("templateComponentsSlice", () => {
  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual([]);
  });

  it("should handle initialComponents", () => {
    const components = [
      { id: 1, type: "header" },
      { id: 2, type: "banner" },
    ];
    const action = initialComponents({ data: components });
    const state = reducer([], action);

    expect(state).toEqual(components);
    expect(state.length).toBe(2);
    expect(state[0].type).toBe("header");
  });
});
