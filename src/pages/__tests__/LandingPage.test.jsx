import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import LandingPage from "../LandingPage";
import productReducer from "../../features/template-editor/templateProductSlice";
import styleReducer from "../../features/template-editor/templateStyleSlice";
import contentReducer from "../../features/template-editor/templateContentSlice";
import pageReducer from "../../features/template-editor/templatePagePositionSlice";
// import configureStore from "redux-mock-store";

// vi.mock("../features/landing-page", () => ({
//     IntegrationFeature: () => <div>IntegrationFeature</div>,
//     Jumbotron: () => <div>Jumbotron</div>,
//     Banner: () => <div>Banner</div>,
//     TargetUser: () => <div>TargetUser</div>,
//     Advantage: () => <div>Advantage</div>,
//     QnA: () => <div>QnA</div>,
//     Footer: () => <div>Footer</div>,
//     Detail: ({ detail }) => <div>Detail {detail.toString()}</div>,
// }));


const store = configureStore({
    reducer: {
        product: productReducer,
        style: styleReducer,
        content: contentReducer,
        page: pageReducer,
    },
});

describe("LandingPage (Unit)", () => {
  it("renders all main sections", () => {
    // const store = mockStore({});
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );
    // jumbotron
    expect(screen.getByText(/Produk Terlihat lebih Menarik/)).toBeInTheDocument();
    // integration
    expect(screen.getByText(/Terhubung Dengan berbagai Platform lain./)).toBeInTheDocument();
    // banner
    expect(screen.getByText(/Mudah Buatnya./)).toBeInTheDocument();
    // template sample
    expect(screen.getByText(/Pilihan Desain Beragam/)).toBeInTheDocument();
    // target user
    expect(screen.getByText(/Dibuat Khusus Untuk UMKM Indonesia./)).toBeInTheDocument();
    // advantage
    expect(screen.getByText(/Banyak Manfaatnya./)).toBeInTheDocument();
    // qna
    expect(screen.getByText(/QnA/)).toBeInTheDocument();
  });

  it("does not render Detail by default", () => {
    // const store = mockStore({});
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/Detail/)).toBeNull();
  });
});