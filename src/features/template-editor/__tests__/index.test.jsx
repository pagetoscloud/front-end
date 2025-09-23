import * as TemplateEditor from "../index";

describe("template-editor index exports", () => {
  it("should export DesktopTemplateEditorLayout", () => {
    expect(TemplateEditor.DesktopTemplateEditorLayout).toBeDefined();
  });

  it("should export DesktopMainContentLayout", () => {
    expect(TemplateEditor.DesktopMainContentLayout).toBeDefined();
  });

  it("should export DesktopHeader", () => {
    expect(TemplateEditor.DesktopHeader).toBeDefined();
  });

  it("should export DesktopTemplateList", () => {
    expect(TemplateEditor.DesktopTemplateList).toBeDefined();
  });

  it("should export DesktopEditor", () => {
    expect(TemplateEditor.DesktopEditor).toBeDefined();
  });

  it("should export DesktopMockup", () => {
    expect(TemplateEditor.DesktopMockup).toBeDefined();
  });

  it("should export DesktopLoginPopUp", () => {
    expect(TemplateEditor.DesktopLoginPopUp).toBeDefined();
  });

  it("should export MobileEditor", () => {
    expect(TemplateEditor.MobileEditor).toBeDefined();
  });

  it("should export MobileSideNavigation", () => {
    expect(TemplateEditor.MobileSideNavigation).toBeDefined();
  });
});