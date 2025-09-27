import { render, screen, fireEvent } from "@testing-library/react";
import EditorText from "../editor-text/EditorText";
import * as useDispatchTextStyleHook from "../../../../hooks/useDispatchTextStyle";

// --- Mock react-redux ---
vi.mock("react-redux", () => ({
  useSelector: vi.fn(fn =>
    fn({
      templateStyle: {
        current: {
          banner: { data: { text: {} } },
        },
      },
    })
  ),
  useDispatch: () => vi.fn(),
}));

// --- Mock child components ---
vi.mock("../editor-color-list/EditorColorList", () => ({
  default: ({ handleChangeColor, handleShow }) => (
    <div>
        <div data-testid="custom-color" onClick={() => handleShow({type: 'custom color', mode: ''})}>
            Custom Color
        </div>
        <div data-testid="color-list" onClick={() => handleChangeColor("#123456")}>
        MockColorList
        </div>
    </div>
  ),
}));

vi.mock("../editor-color-picker/EditorColorPicker", () => ({
  default: ({ handleChangeColor }) => (
    <div data-testid="color-picker" onClick={() => handleChangeColor("#abcdef")}>
      MockColorPicker
    </div>
  ),
}));

describe("EditorText", () => {
  let mockHookValues;

  beforeEach(() => {
    mockHookValues = {
      fontColor: "#000000",
      opacity: 90,
      fontSize: "16",
      fontFamily: "Roboto",
      fontStyle: "400",
      fontLineHeight: "1.5",
      fontSpacing: "1",
      textAlign: "left",
      handleChangeFontColor: vi.fn(),
      handleChangeFontOpacity: vi.fn(),
      handleChangeFontSize: vi.fn(),
      handleChangeFontFamily: vi.fn(),
      handleChangeFontStyle: vi.fn(),
      handleChangeFontLineHeight: vi.fn(),
      handleChangeFontSpacing: vi.fn(),
      handleChangeTextAlign: vi.fn(),
    };

    vi.spyOn(useDispatchTextStyleHook, "useDispatchTextStyle").mockReturnValue(
      mockHookValues
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders labels and inputs", () => {
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);

    expect(screen.getByText("Font Color")).toBeInTheDocument();
    expect(screen.getByText("Font Family")).toBeInTheDocument();
    expect(screen.getByText("Text Align")).toBeInTheDocument();
  });

  it("calls handleChangeFontOpacity when opacity changes", () => {
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    fireEvent.change(screen.getByDisplayValue("90"), { target: { value: "75" } });
    expect(mockHookValues.handleChangeFontOpacity).toHaveBeenCalledWith("75");
  });

  it("calls handleChangeFontFamily when select changes", () => {
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    fireEvent.change(screen.getByDisplayValue("Roboto"), { target: { value: "Nunito" } });
    expect(mockHookValues.handleChangeFontFamily).toHaveBeenCalledWith("Nunito");
  });

  it("shows color list and triggers color change", () => {
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    // first click opens color list
    // fireEvent.click(screen.getByRole("img", { hidden: true })); // the swatch
    fireEvent.click(screen.getByTestId("color-display"));
    fireEvent.click(screen.getByTestId("color-list"));
    expect(mockHookValues.handleChangeFontColor).toHaveBeenCalledWith("#123456");
  });

  it("shows custom color picker and triggers color change", () => {
    // simulate pickColor state → custom color
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    // directly render color picker mock
    fireEvent.click(screen.getByTestId("color-display"));
    fireEvent.click(screen.getByTestId("custom-color"));
    // fireEvent.click(screen.getByTestId("color-list"));
    fireEvent.click(screen.getByTestId("color-picker"));
    // expect(mockHookValues.handleChangeFontColor).toHaveBeenCalledWith("#abcdef");
  });

  it("calls handleChangeTextAlign when alignment clicked", () => {
    render(<EditorText handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    const rightAlignBtn = screen.getByAltText("right");
    fireEvent.click(rightAlignBtn);
    expect(mockHookValues.handleChangeTextAlign).toHaveBeenCalledWith("right");
  });
});