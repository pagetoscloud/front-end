import reducer, {
  initialStyle,
  changeScreen,
  changeTitle,
  changeText,
  changeBackground,
  changeStyleImage,
  changeStyleButton,
} from "../templateStyleSlice";

describe("templateStyleSlice", () => {
  const baseState = {
    current: {
      connector: {
        data: {
          title: { text: "Old Title" },
          subtitle: { text: "Old Subtitle" },
          paragraph: { text: "Old Paragraph" },
          background: { color: "white" },
          image: { src: "old.png" },
          button: { label: "Click me" },
        },
        style: {
          title: { color: "black" },
          subtitle: { color: "gray" },
          paragraph: { color: "gray" },
          background: { opacity: 1 },
          image: { border: "none" },
          button: { background: "blue" },
        },
      },
    },
  };

  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual({ current: {} });
  });

  it("should handle initialStyle", () => {
    const newData = { connector: { data: {}, style: {} } };
    const action = initialStyle({ data: newData });
    const state = reducer(undefined, action);
    expect(state.current).toEqual(newData);
  });

  it("should handle changeScreen", () => {
    const action = changeScreen({
      component: "connector",
      itemData: "text",
      data: "New Title",
      itemStyle: "color",
      style: "red",
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.title.text).toBe("New Title");
    expect(state.current.connector.style.title.color).toBe("red");
  });

  it("should handle changeTitle", () => {
    const action = changeTitle({
      component: "connector",
      itemData: "text",
      data: "Changed Title",
      itemStyle: "color",
      style: "green",
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.title.text).toBe("Changed Title");
    expect(state.current.connector.style.title.color).toBe("green");
  });

  it("should handle changeText", () => {
    const action = changeText({
      component: "connector",
      type: "paragraph",
      itemData: "text",
      data: "New Paragraph",
      itemStyle: "color",
      style: "purple",
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.paragraph.text).toBe("New Paragraph");
    expect(state.current.connector.style.paragraph.color).toBe("purple");
  });

  it("should handle changeBackground", () => {
    const action = changeBackground({
      component: "connector",
      type: "background",
      itemData: "color",
      data: "black",
      itemStyle: "opacity",
      style: 0.5,
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.background.color).toBe("black");
    expect(state.current.connector.style.background.opacity).toBe(0.5);
  });

  it("should handle changeStyleImage", () => {
    const action = changeStyleImage({
      component: "connector",
      itemData: "src",
      data: "new.png",
      itemStyle: "border",
      style: "1px solid red",
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.image.src).toBe("new.png");
    expect(state.current.connector.style.image.border).toBe("1px solid red");
  });

  it("should handle changeStyleButton", () => {
    const action = changeStyleButton({
      component: "connector",
      itemData: "label",
      data: "Updated Button",
      itemStyle: "background",
      style: "orange",
    });
    const state = reducer(baseState, action);
    expect(state.current.connector.data.button.label).toBe("Updated Button");
    expect(state.current.connector.style.button.background).toBe("orange");
  });
});
