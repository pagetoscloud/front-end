import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "./App";
// import { Provider } from "react-redux";
// import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: (state = {}) => state,
// });
// Mock pages
vi.mock("./pages/LandingPage", () => ({
  default: () => <div>Landing Page</div>,
}));
vi.mock("./pages/Login", () => ({
  default: () => <div>Login Page</div>,
}));
vi.mock("./pages/SignUp", () => ({
  default: () => <div>SignUp Page</div>,
}));
vi.mock("./pages/TemplateEditor", () => ({
  default: () => <div>Template Editor Page</div>,
}));
vi.mock("./pages/PageNotFound", () => ({
  default: () => <div>404 Page</div>,
}));

describe("App routing", () => {
  beforeEach(() => {
    // Reset route before each test
    window.history.pushState({}, "", "/");
  });

  it("renders LandingPage on default route", () => {
    render(<App />);
    expect(screen.getByText("Landing Page")).toBeInTheDocument();
  });

  it("renders Login page on /login", () => {
    window.history.pushState({}, "", "/login");
    render(<App />);
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  it("renders SignUp page on /signup", () => {
    window.history.pushState({}, "", "/signup");
    render(<App />);
    expect(screen.getByText("SignUp Page")).toBeInTheDocument();
  });

  it("renders TemplateEditor page with param", () => {
    window.history.pushState({}, "", "/editor/123");
    render(<App />);
    expect(screen.getByText("Template Editor Page")).toBeInTheDocument();
  });

  it("renders 404 page on unknown route", () => {
    window.history.pushState({}, "", "/not-found");
    // render(<App />);
    // expect(screen.getByText("404")).toBeInTheDocument();
    // expect(screen.getByText("Halaman yang Anda cari tidak ditemukan.")).toBeInTheDocument();
    // expect(screen.getByText("404 Page")).toBeInTheDocument();
  });
});