import reducer, {
  initialDataLocally,
  clearProductList,
  addNewProduct,
  deleteProduct,
  editCategory,
  editProduct,
} from "../templateProductSlice";

import { fetchProducts, saveProductEdit } from "../templateProductSlice";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

// Mock axios
vi.mock("axios");

const initialState = {
  product: {
    list: [],
    changed: { categories: [], products: [] },
    deleted: { categories: [], products: [] },
  },
  loading: false,
  error: null,
};

const sampleList = [
  {
    id: 1,
    name: "Food",
    listItems: [
      { id: 101, name: "Burger", price: 10000, description: "desc", image: "burger.png" },
    ],
  },
];
describe("productSlice", () => {

  it("should return the initial state", () => {
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle initialDataLocally", () => {
    const state = reducer(initialState, initialDataLocally(sampleList));
    expect(state.product.list.length).toBe(1);
    expect(state.product.changed.categories.length).toBe(1);
    expect(state.product.changed.products.length).toBe(1);
  });

  it("should handle clearProductList", () => {
    const state = reducer(
      { ...initialState, product: { list: [{ id: 1 }], changed: {}, deleted: {} } },
      clearProductList()
    );
    expect(state.product.list).toEqual([]);
    expect(state.product.changed.categories).toEqual([]);
    expect(state.product.deleted.products).toEqual([]);
  });

  it("should handle addNewProduct", () => {
    const startState = { ...initialState, product: { ...initialState.product, list: sampleList } };
    const action = addNewProduct({
      category: { id: 1, name: "Food" },
      data: { name: "Pizza", price: 20000, image: "pizza.png", description: "hot" },
    });
    const state = reducer(startState, action);
    expect(state.product.changed.products.length).toBe(1);
    expect(state.product.list[0].listItems.length).toBe(2);
  });

  it("should handle deleteProduct", () => {
    const startState = { ...initialState, product: { ...initialState.product, list: sampleList } };
    const action = deleteProduct({ category: "Food", id: 101 });
    const state = reducer(startState, action);
    expect(state.product.list[0].listItems.length).toBe(0);
    expect(state.product.deleted.products.length).toBe(1);
  });

  it("should handle editCategory", () => {
    const startState = { ...initialState, product: { ...initialState.product, list: sampleList } };
    const action = editCategory({ id: 1, data: "Updated Category" });
    const state = reducer(startState, action);
    expect(state.product.list[0].name).toBe("Updated Category");
    expect(state.product.changed.categories.length).toBeGreaterThan(0);
  });

  it("should handle editProduct", () => {
    const startState = { ...initialState, product: { ...initialState.product, list: sampleList } };
    const action = editProduct({
      category: "Food",
      id: 101,
      items: "name",
      data: "Updated Burger",
    });
    const state = reducer(startState, action);
    expect(state.product.list[0].listItems[0].name).toBe("Updated Burger");
    expect(state.product.changed.products.length).toBeGreaterThan(0);
  });
});

describe("productSlice async thunks", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { product: reducer },
    });
  });

  it("fetchProducts should dispatch fulfilled", async () => {
    axios.mockResolvedValueOnce({ data: { product: sampleList } });
    await store.dispatch(fetchProducts(123));
    const state = store.getState().product;
    expect(state.loading).toBe(false);
    expect(state.product.list.length).toBe(1);
  });

  it("fetchProducts should dispatch rejected", async () => {
    axios.mockRejectedValueOnce(new Error("Network error"));
    await store.dispatch(fetchProducts(123));
    const state = store.getState().product;
    expect(state.error).toBe("Network error");
  });

  it("saveProductEdit should dispatch rejected on error", async () => {
    axios.post.mockRejectedValueOnce({ response: { data: "Bad request" } });
    await store.dispatch(saveProductEdit(123));
    const state = store.getState().product;
    expect(state.error).toBe("Bad request");
  });
});