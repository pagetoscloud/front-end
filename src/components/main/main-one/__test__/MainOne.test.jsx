import { render, screen } from "@testing-library/react";
import MainOne from "../MainOne";
import { describe, it, expect, vi } from "vitest";

// Mock child components
function MockCategory({ data, styleData, handleEditMode, mode }) {
  return (
    <div data-testid="mock-category">
      Category: {data.name} - {mode}
    </div>
  );
}

function MockListItems({
  data,
  styleData,
  handleEditMode,
  handleChangePage,
  handleChangeCurrentItems,
  mode,
  onEdit,
}) {
  return (
    <div data-testid="mock-list-items">
      ListItems: {data.name} - {mode}
    </div>
  );
}

describe("MainOne Component", () => {
  const mockComponents = {
    child: {
      category: MockCategory,
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

  it("renders category and listItems components for each product in the list", () => {
    render(
      <MainOne
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

    // Two categories rendered
    const categories = screen.getAllByTestId("mock-category");
    expect(categories).toHaveLength(2);
    expect(categories[0]).toHaveTextContent("Category 1 - edit");
    expect(categories[1]).toHaveTextContent("Category 2 - edit");

    // Two list items rendered
    const listItems = screen.getAllByTestId("mock-list-items");
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent("Category 1 - edit");
    expect(listItems[1]).toHaveTextContent("Category 2 - edit");
  });

  it("passes the correct props down to children", () => {
    render(
      <MainOne
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

    // Verify "preview" mode passed correctly
    expect(screen.getByText("Category: Category 1 - preview")).toBeInTheDocument();
    expect(screen.getByText("ListItems: Category 1 - preview")).toBeInTheDocument();
  });
});
