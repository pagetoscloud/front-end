// connectorOne.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import ConnectorOne from "../ConnectorOne";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ConnectorOneEdit } from "../ConnectorOneEdit";
import { ConnectorOnePreview } from "../ConnectorOnePreview";

// Mock children components so we can check rendering
vi.mock("react-redux", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useDispatch: () => vi.fn(),
    useSelector: vi.fn(() => ({})),
  };
});

// --- Sample test data ---
const mockStyleData = {
  connector: {
    style: {
      button: { background: "red", color: "white", borderRadius: "4px", opacity: 1 },
      title: { fontSize: "20px" },
      subtitle: { fontSize: "16px" },
      paragraph: { fontSize: "14px" },
      background: { borderRadius: 8, background: "blue" },
    },
  },
};

const mockContentData = {
  connector: {
    title: "Test Title",
    subtitle: "Test Subtitle",
    paragraph: "Test Paragraph",
    buttonList: [
      { id: "btn1", name: "Google", type: "link", link: "https://google.com" },
      { id: "btn2", name: "Next Page", type: "change page", page: "page two" },
      { id: "btn3", name: "Back", type: "back" },
    ],
  },
};

describe("ConnectorOne (wrapper)", () => {
  it("renders ConnectorOneEdit when mode='edit'", () => {
    render(
      <ConnectorOne
        mode="edit"
        page="page three"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={vi.fn()}
      />
    );
    expect(screen.getByDisplayValue("Test Title")).toBeInTheDocument();
  });

  it("renders ConnectorOnePreview when mode!='edit'", () => {
    render(
        <MemoryRouter>
            <ConnectorOne
              mode="preview"
              page="page three"
              styleData={mockStyleData}
              contentData={mockContentData}
              handleEditMode={vi.fn()}
              handleChangePage={vi.fn()}
            />
        </MemoryRouter>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});

describe("ConnectorOneEdit", () => {
  it("renders title, subtitle, and paragraph inputs", () => {
    render(
      <ConnectorOneEdit
        page="page three"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={vi.fn()}
      />
    );

    expect(screen.getByDisplayValue("Test Title")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Paragraph")).toBeInTheDocument();
  });

  it("calls handleEditMode when title clicked", () => {
    const handleEditMode = vi.fn();
    render(
      <ConnectorOneEdit
        page="page three"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    );

    fireEvent.click(screen.getByDisplayValue("Test Title"));
    expect(handleEditMode).toHaveBeenCalledWith({
      mode: "Text",
      type: "title",
      component: "connector",
    });
  });

  it("renders ButtonItems for each button", () => {
    render(
      <ConnectorOneEdit
        page="page three"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={vi.fn()}
      />
    );
    expect(screen.getAllByRole("textbox").length).toBeGreaterThan(1); // input for title + buttons
  });
});

describe("ConnectorOnePreview", () => {
  beforeEach(() => {
    vi.spyOn(window, "open").mockImplementation(() => {});
  });

  it("renders content text", () => {
    render(
        <MemoryRouter>
            <ConnectorOnePreview
              page="page three"
              styleData={mockStyleData}
              contentData={mockContentData}
              handleChangePage={vi.fn()}
            />
        </MemoryRouter>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle.")).toBeInTheDocument();
    expect(screen.getByText("Test Paragraph")).toBeInTheDocument();
  });

  it("opens link when button type='link'", () => {
    render(
        <MemoryRouter>
            <ConnectorOnePreview
              page="page three"
              styleData={mockStyleData}
              contentData={mockContentData}
              handleChangePage={vi.fn()}
            />
        </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Google"));
    expect(window.open).toHaveBeenCalledWith("https://google.com", "_blank");
  });

  it("calls handleChangePage when button type='change page'", () => {
    const handleChangePage = vi.fn();
    render(
        <MemoryRouter>
            <ConnectorOnePreview
              page="page three"
              styleData={mockStyleData}
              contentData={mockContentData}
              handleChangePage={handleChangePage}
            />
        </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Next Page"));
    expect(handleChangePage).toHaveBeenCalledWith("page two");
  });
});
