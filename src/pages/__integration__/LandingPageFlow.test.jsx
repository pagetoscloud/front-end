import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import productReducer from "../../features/template-editor/templateProductSlice";
import styleReducer from "../../features/template-editor/templateStyleSlice";
import contentReducer from "../../features/template-editor/templateContentSlice";
import pageReducer from "../../features/template-editor/templatePagePositionSlice";

// ✅ Declare a mock function before mocking react-router-dom
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate, // use the declared mock
  };
});

describe("LandingPage Integration Flow", () => {
  it("saves template and navigates to editor", () => {
    const store = configureStore({
      reducer: {
        product: productReducer,
        style: styleReducer,
        content: contentReducer,
        page: pageReducer,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    // simulate clicking the IntegrationFeature button
    const button = screen.getByRole("button", { name: /Hubungkan/i });
    // const button = screen.getByText(/Buat Sekarang/i);
    fireEvent.click(button);

    // ✅ Expect navigation called
    expect(mockNavigate).toHaveBeenCalledWith("/editor/*");

    // ✅ Expect localStorage updated
    const savedData = JSON.parse(localStorage.getItem("templateEditor"));
    expect(savedData).toHaveProperty("templateId");
    expect(savedData).toHaveProperty("style");
  });
});