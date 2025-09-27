import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { UNDO, REDO } from "../../../../undoRedoMiddleware";
import { clearProductList } from "../../../../templateProductSlice";
// import { useNavigate } from "react-router-dom";
// import { useWindowSize } from "../../../../../hooks/useWindowSize";

// --- Mock react-redux ---
const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (fn) =>
    fn({
      history: { canUndo: true, canRedo: true },
      authentication: { loggedIn: true },
      accountData: { personalData: { username: "john", profilePicture: "" } },
    }),
}));

// --- Mock react-router-dom ---
const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

// --- Mock custom hook ---
vi.mock("../../../../../hooks/useWindowSize", () => ({
  useWindowSize: () => [1000, 800], // [height, width]
}));

describe("Header", () => {
  let baseProps;

  beforeEach(() => {
    baseProps = {
      handleLocalStorage: vi.fn(),
      handleChangePage: vi.fn(),
      handleShowNavigation: vi.fn(),
      handleDownloadImage: vi.fn(),
      handleChangeDocumentName: vi.fn(),
      documentName: "My Doc",
      web_id: "123",
      page: "page one",
    };

    mockDispatch.mockClear();
    mockNavigate.mockClear();
    localStorage.clear();
  });

  it("renders with user profile and document name", () => {
    render(<Header {...baseProps} />);
    expect(screen.getByDisplayValue("My Doc")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Collection")).toBeInTheDocument();
  });

  it("updates document name on input change", () => {
    render(<Header {...baseProps} />);
    const input = screen.getByDisplayValue("My Doc");
    fireEvent.change(input, { target: { value: "New Doc" } });
    expect(baseProps.handleChangeDocumentName).toHaveBeenCalledWith("New Doc");
  });

  it("dispatches UNDO and REDO when buttons clicked", () => {
    render(<Header {...baseProps} />);
    fireEvent.click(screen.getByAltText("undo"));
    fireEvent.click(screen.getByAltText("redo"));
    expect(mockDispatch).toHaveBeenCalledWith({ type: UNDO });
    expect(mockDispatch).toHaveBeenCalledWith({ type: REDO });
  });

  it("navigates home and clears storage on Home click", () => {
    render(<Header {...baseProps} />);
    fireEvent.click(screen.getByText("Home"));
    expect(mockDispatch).toHaveBeenCalledWith(clearProductList());
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("navigates to Collection when clicked", () => {
    render(<Header {...baseProps} />);
    fireEvent.click(screen.getByText("Collection"));
    expect(mockNavigate).toHaveBeenCalledWith("/collection");
  });

  it("calls handleChangePage when Next clicked", () => {
    render(<Header {...baseProps} page="page one" />);
    fireEvent.click(screen.getByText("Next"));
    expect(baseProps.handleChangePage).toHaveBeenCalledWith("page two");
  });

  it("calls handleDownloadImage when Save clicked", () => {
    render(<Header {...baseProps} />);
    fireEvent.click(screen.getAllByText("Save")[0]);
    expect(baseProps.handleDownloadImage).toHaveBeenCalled();
  });

  it("shows Publish instead of Save when web_id is '*'", () => {
    render(<Header {...baseProps} web_id="*" />);
    expect(screen.getAllByText("Publish").length).toBeGreaterThan(0);
  });

  it("calls handleShowNavigation when menu button clicked", () => {
    render(<Header {...baseProps} />);
    fireEvent.click(screen.getByAltText("menu toggle"));
    expect(baseProps.handleShowNavigation).toHaveBeenCalled();
  });
});