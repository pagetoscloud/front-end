import reducer, {
  initialContent,
  initialProduct,
  changeBannerText,
  addNewProduct,
  deleteProduct,
  addNewButton,
  deleteButton,
  addNewCategory,
  changeLogoText,
  changeCategoryName,
  changeProductText,
  changeConnectorText,
  changeButton,
  changeImageProduct,
  changeImage,
} from "../templateContentSlice";

describe("templateContentSlice", () => {
  let baseState;

  beforeEach(() => {
    baseState = {
      header: { logo: { type: "text", text: "logo" } },
      banner: { image: "old.png", title: "Old title", paragraph: "Old text" },
      product: [
        {
          id: 1,
          name: "Food",
          listItems: [
            { id: 1, name: "Burger", price: 10000, description: "desc", image: "burger.png" },
          ],
        },
      ],
      connector: { buttonList: [{ id: 1, name: "Button1", type: "link" }] },
    };
  });

  it("should return the initial state when passed an empty action", () => {
    const state = reducer(undefined, { type: "" });
    expect(state.header.logo.text).toBe("logo");
  });

  it("should handle initialContent", () => {
    const action = initialContent({ data: { header: { logo: { type: "text", text: "new" } } } });
    const state = reducer(undefined, action);
    expect(state.header.logo.text).toBe("new");
  });

  it("should handle initialProduct", () => {
    const products = [{ id: 99, name: "Test", listItems: [] }];
    const state = reducer(baseState, initialProduct({ data: products }));
    expect(state.product).toEqual(products);
  });

  it("should handle changeBannerText", () => {
    const state = reducer(baseState, changeBannerText({ type: "title", value: "Updated" }));
    expect(state.banner.title).toBe("Updated");
  });

  it("should handle addNewProduct (removes item by id)", () => {
    const state = reducer(
      baseState,
      addNewProduct({ category: "Food", id: 1 })
    );
    // Food list should now be empty
    expect(state.product[0].listItems).toEqual([]);
  });

  it("should handle deleteProduct", () => {
    const state = reducer(
      baseState,
      deleteProduct({ category: "Food", id: 1 })
    );
    expect(state.product[0].listItems.length).toBe(0);
  });

  it("should handle addNewButton", () => {
    const state = reducer(baseState, addNewButton());
    expect(state.connector.buttonList.length).toBe(2);
  });

  it("should handle deleteButton", () => {
    const state = reducer(baseState, deleteButton(1));
    expect(state.connector.buttonList.length).toBe(0);
  });

  it("should handle addNewCategory", () => {
    const category = { id: 2, name: "Drinks", listItems: [] };
    const state = reducer(baseState, addNewCategory({ data: category }));
    expect(state.product.length).toBe(2);
    expect(state.product[1].name).toBe("Drinks");
  });

  it("should handle changeLogoText", () => {
    const state = reducer(baseState, changeLogoText("new logo"));
    expect(state.header.logo.text).toBe("new logo");
  });

  it("should handle changeCategoryName", () => {
    const state = reducer(baseState, changeCategoryName({ id: 1, data: "Updated Name" }));
    expect(state.product[0].name).toBe("Updated Name");
  });

  it("should handle changeProductText", () => {
    const state = reducer(
      baseState,
      changeProductText({ category: "Food", id: 1, items: "name", data: "Updated Burger" })
    );
    expect(state.product[0].listItems[0].name).toBe("Updated Burger");
  });

  it("should handle changeConnectorText", () => {
    const state = reducer(baseState, changeConnectorText({ type: "title", value: "Connector Title" }));
    expect(state.connector.title).toBe("Connector Title");
  });

  it("should handle changeButton", () => {
    const state = reducer(
      baseState,
      changeButton({ component: "connector", id: 1, type: "name", value: "Updated Button" })
    );
    expect(state.connector.buttonList[0].name).toBe("Updated Button");
  });

  it("should handle changeImageProduct", () => {
    const state = reducer(
      baseState,
      changeImageProduct({ category: "Food", id: 1, data: "new.png" })
    );
    expect(state.product[0].listItems[0].image).toBe("new.png");
  });

  it("should handle changeImage", () => {
    const state = reducer(
      baseState,
      changeImage({ component: "banner", data: "banner.png" })
    );
    expect(state.banner.image).toBe("banner.png");
  });
});
