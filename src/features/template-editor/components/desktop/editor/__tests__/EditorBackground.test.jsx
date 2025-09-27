// src/features/template-editor/components/desktop/editor/__tests__/EditorBackground.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import EditorBackground from "../editor-background/EditorBackground";
import * as useDispatchBackgroundStyleHook from "../../../../hooks/useDispatchBackgroundStyle";

// --- Mock react-redux ---
vi.mock("react-redux", () => ({
  useSelector: vi.fn(fn =>
    fn({
      templateStyle: {
        current: {
          banner: { data: { background: {} } },
        },
      },
    })
  ),
  useDispatch: () => vi.fn(),
}));

// --- Mock child components ---
vi.mock("../editor-color-list/EditorColorList", () => ({
  default: ({ handleChangeColor }) => (
    <div data-testid="color-list" onClick={() => handleChangeColor("#fff")}>
      MockColorList
    </div>
  ),
}));

vi.mock("../editor-color-picker/EditorColorPicker", () => ({
  default: ({ handleChangeColor }) => (
    <div data-testid="color-picker" onClick={() => handleChangeColor("#000")}>
      MockColorPicker
    </div>
  ),
}));

vi.mock("../../../../../../components", () => ({
  EffectTemplateEditor: ({ handleDeleteEffect }) => (
    <div
      data-testid="effect-editor"
      onClick={() => handleDeleteEffect(0)}
    >
      MockEffectEditor
    </div>
  ),
}));

describe("EditorBackground", () => {
  let mockHookValues;

  beforeEach(() => {
    mockHookValues = {
      backgroundColor: "#ffffff",
      backgroundColorDisplay: "#ffffff",
      backgroundOpacity: 80,
      backgroundBlur: 5,
      backgroundBorderRadius: 10,
      backgroundEffect: [{ type: "blur", value: 5 }],
      borderColor: "#000000",
      borderSize: 2,
      borderType: "solid",
      handleChangeBackgroundColor: vi.fn(),
      handleChangeBackgroundOpacity: vi.fn(),
      handleChangeBackgroundBlur: vi.fn(),
      handleChangeBackgroundBorderRadius: vi.fn(),
      handleAddBackgroundEffect: vi.fn(),
      handleChangeBackgroundEffectValue: vi.fn(),
      handleDeleteBackgroundEffect: vi.fn(),
      handleChangeEffectType: vi.fn(),
      handleChangeBorderColor: vi.fn(),
      handleChangeBorderSize: vi.fn(),
      handleChangeBorderType: vi.fn(),
    };

    vi.spyOn(useDispatchBackgroundStyleHook, "useDispatchBackgroundStyle").mockReturnValue(
      mockHookValues
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders background and border inputs", () => {
    render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);

    expect(screen.getByText("Background")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Border")).toBeInTheDocument();
    expect(screen.getByText("Effect")).toBeInTheDocument();
    expect(screen.getByText("Opacity")).toBeInTheDocument();
    expect(screen.getByText("Border Radius")).toBeInTheDocument();
  });

  it("calls handleChangeBorderType when select changes", () => {
    render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "dotted" } });
    expect(mockHookValues.handleChangeBorderType).toHaveBeenCalledWith("dotted");
  });

  it("calls handleChangeBackgroundOpacity when opacity slider changes", () => {
    render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    const sliders = screen.getAllByRole("slider");
    fireEvent.change(sliders[sliders.length - 2], { target: { value: "60" } }); // opacity
    expect(mockHookValues.handleChangeBackgroundOpacity).toHaveBeenCalledWith("60");
  });

  it("shows color list and calls color change handler", () => {
        render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
        // Step 1: click the background color swatch to show the color list
        fireEvent.click(screen.getByTestId("color-display"));
        // Step 2: now EditorColorList mock is rendered
        fireEvent.click(screen.getByTestId("color-list"));
        expect(mockHookValues.handleChangeBackgroundColor).toHaveBeenCalledWith("#fff");
    });

  it("renders EffectTemplateEditor and calls delete handler", () => {
    render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    fireEvent.click(screen.getByTestId("effect-editor"));
    expect(mockHookValues.handleDeleteBackgroundEffect).toHaveBeenCalledWith(0);
  });

  it("calls handleAddBackgroundEffect when Add button clicked", () => {
    render(<EditorBackground handleEditMode={vi.fn()} editMode={{ component: "banner" }} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockHookValues.handleAddBackgroundEffect).toHaveBeenCalled();
  });
});