import { render, screen } from "@testing-library/react";
import ListItemsOne from "../ListItemsOne";
import ListItemsOneEdit from "../ListItemsOneEdit";
import ListItemsOnePreview from "../ListItemsOnePreview";

// 🟢 Fake child component for items
const FakeItem = ({ data }) => (
  <div data-testid="list-item">{data.name}</div>
);

describe("ListItemsOne Components", () => {
  const mockData = {
    listItems: [
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
    ],
  };

  const mockComponents = {
    child: { items: FakeItem },
  };

  it("renders list items in ListItemsOnePreview", () => {
    render(
      <ListItemsOnePreview
        data={mockData}
        components={mockComponents}
        handleChangePage={vi.fn()}
        handleChangeCurrentItems={vi.fn()}
        styleData={{}}
      />
    );

    const items = screen.getAllByTestId("list-item");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Item A");
    expect(items[1]).toHaveTextContent("Item B");
  });

  it("renders list items in ListItemsOneEdit", () => {
    render(
      <ListItemsOneEdit>
        <p data-testid="child">Item A</p>
        <p data-testid="child">Item B</p>
        <p data-testid="child">Item C</p>
      </ListItemsOneEdit>
    );

    const items = screen.getAllByTestId("child");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("Item A");
    expect(items[1]).toHaveTextContent("Item B");
    expect(items[2]).toHaveTextContent("Item C");
  });

  it("renders ListItemsOneEdit when mode is 'edit'", () => {
    render(
      <ListItemsOne mode="edit" data={mockData} components={mockComponents} />
    );
    const items = screen.getAllByTestId("list-item");
    expect(items).toHaveLength(2);
  });

  it("renders ListItemsOnePreview when mode is 'preview'", () => {
    render(
      <ListItemsOne mode="preview" data={mockData} components={mockComponents} />
    );
    const items = screen.getAllByTestId("list-item");
    expect(items).toHaveLength(2);
  });
});