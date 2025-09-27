import * as exports from "../index"; // adjust path if needed

describe("Index exports", () => {
  const expectedExports = [
    "BannerOne",
    "BannerTwo",
    "ScreenOne",
    "HeaderOne",
    "HeaderTwo",
    "ListItemsOne",
    "ListItemsTwo",
    "ListItemsThree",
    "ItemsOne",
    "ItemsTwo",
    "ItemsThree",
    "ItemsFour",
    "ItemsFive",
    "ItemDetailsOne",
    "ItemDetailsTwo",
    "ItemDetailsThree",
    "ItemDetailsFour",
    "ItemDetailsFive",
    "ItemDetailsSix",
    "ItemDetailsSeven",
    "MainOne",
    "MainTwo",
    "CategoryOne",
    "CategoryTwo",
    "ConnectorOne",
    "ConnectorTwo",
    "PersonalAreaHeader",
    "PersonalAreaNavigation",
    "EffectTemplateEditor",
  ];

  it("should export all expected modules", () => {
    expectedExports.forEach((name) => {
      expect(exports[name]).toBeDefined();
    });
  });
});
