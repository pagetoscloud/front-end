import { configureStore } from "@reduxjs/toolkit";
// import accountDataSlice from '../features/setting/accountDataSlice';
// import templateStyleSlice  from "../features/template-editor/templateStyleSlice";
// import templateContentSlice from "../features/template-editor/templateContentSlice";
// import templateComponentsSlice from '../features/template-editor/templateComponentsSlice'
// import collectionSlice from '../features/collection/collectionSlice';
import { createStyleRateLimitMiddleware } from "../features/template-editor/styleRateLimitMiddleware";
import { createUndoRedoMiddleware } from "../features/template-editor/undoRedoMiddleware";
import { createTextRateLimitMiddleware } from "../features/template-editor/textRateLimitMiddleware";

import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(createStyleRateLimitMiddleware({ actionType: 'templateStyle/changeBackground' }))
            .concat(createTextRateLimitMiddleware({ actionType: 'templateContent' }))
            .concat(createUndoRedoMiddleware())
});