import { render, screen } from "@testing-library/react";
import ListItemsTwo from "../ListItemsTwo";
import ListItemsTwoEdit from "../ListItemsTwoEdit";
import ListItemsTwoPreview from "../ListItemsTwoPreview";

// 🟢 Fake child component for items
const FakeItem = ({ data }) => (
  <div data-testid="list-item">{data.name}</div>
);

describe("ListItemsTwo Components", () => {
  const mockData = {
    listItems: [
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
    ],
  };

  const mockComponents = {
    child: { items: FakeItem },
  };

  it("renders list items in ListItemsTwoPreview", () => {
    render(
      <ListItemsTwoPreview>
        <p data-testid="child">Item A</p>
        <p data-testid="child">Item B</p>
        <p data-testid="child">Item C</p>
      </ListItemsTwoPreview>
    );

    const items = screen.getAllByTestId("child");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("Item A");
    expect(items[1]).toHaveTextContent("Item B");
  });

  it("renders list items in ListItemsOneEdit", () => {
    render(
      <ListItemsTwoEdit>
        <p data-testid="child">Item A</p>
        <p data-testid="child">Item B</p>
        <p data-testid="child">Item C</p>
      </ListItemsTwoEdit>
    );

    const items = screen.getAllByTestId("child");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("Item A");
    expect(items[1]).toHaveTextContent("Item B");
    expect(items[2]).toHaveTextContent("Item C");
  });

  it("renders ListItemsTwoEdit when mode is 'edit'", () => {
    render(
      <ListItemsTwo mode="edit" data={mockData} components={mockComponents} />
    );
    const items = screen.getAllByTestId("list-item");
    expect(items).toHaveLength(2);
  });

  it("renders ListItemsTwoPreview when mode is 'preview'", () => {
    render(
      <ListItemsTwo mode="preview" data={mockData} components={mockComponents} />
    );
    const items = screen.getAllByTestId("list-item");
    expect(items).toHaveLength(2);
  });
});