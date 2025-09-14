import { render, screen } from "@testing-library/react";
import MainTwo from "../MainTwo";
import { describe, it, expect, vi } from "vitest";

// Mock child components
function MockCategory({ data, mode }) {
  return <div data-testid="mock-category">Category: {data.name} - {mode}</div>;
}

function MockSpecialListItems({ data, mode }) {
  return <div data-testid="mock-special-list-items">SpecialList: {data.name} - {mode}</div>;
}

function MockListItems({ data, mode }) {
  return <div data-testid="mock-list-items">ListItems: {data.name} - {mode}</div>;
}

describe("MainTwo Component", () => {
  const mockComponents = {
    child: {
      category: MockCategory,
      specialListItems: MockSpecialListItems,
      listItems: MockListItems,
    },
  };

  const mockProductList = [
    { name: "Category 1", items: ["Item 1", "Item 2"] },
    { name: "Category 2", items: ["Item A", "Item B"] },
  ];

  const mockStyleData = { someStyle: "value" };
  const mockHandleEditMode = vi.fn();
  const mockHandleChangePage = vi.fn();
  const mockHandleChangeCurrentItems = vi.fn();

  it("renders category and specialListItems for the first product", () => {
    render(
      <MainTwo
        styleData={mockStyleData}
        components={mockComponents}
        productList={mockProductList}
        handleEditMode={mockHandleEditMode}
        mode="edit"
        handleChangePage={mockHandleChangePage}
        handleChangeCurrentItems={mockHandleChangeCurrentItems}
        onEdit={true}
      />
    );

    const categories = screen.getAllByTestId("mock-category");
    expect(categories[0]).toHaveTextContent("Category: Category 1 - edit");

    expect(screen.getByTestId("mock-special-list-items")).toHaveTextContent("SpecialList: Category 1 - edit");
  });

  it("renders category and listItems for subsequent products", () => {
    render(
      <MainTwo
        styleData={mockStyleData}
        components={mockComponents}
        productList={mockProductList}
        handleEditMode={mockHandleEditMode}
        mode="preview"
        handleChangePage={mockHandleChangePage}
        handleChangeCurrentItems={mockHandleChangeCurrentItems}
        onEdit={false}
      />
    );

    const categories = screen.getAllByTestId("mock-category");
    expect(categories[1]).toHaveTextContent("Category: Category 2 - preview");

    expect(screen.getByTestId("mock-list-items")).toHaveTextContent("ListItems: Category 2 - preview");
  });
});