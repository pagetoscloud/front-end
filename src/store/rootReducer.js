// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/authentication/authSlice';
import accountDataSlice from '../features/setting/accountDataSlice';
import templateStyleSlice  from "../features/template-editor/templateStyleSlice";
import templateContentSlice from "../features/template-editor/templateContentSlice";
import templateComponentsSlice from '../features/template-editor/templateComponentsSlice'
import collectionsSlice from '../features/collections/collectionsSlice';
import historySlice from '../features/template-editor/historySlice';
import productSlice from '../features/template-editor/templateProductSlice';
import templatePagePositionSlice from '../features/template-editor/templatePagePositionSlice';
import editorBoardRefSlice from '../features/template-editor/editorBoardRefSlice';
const appReducer = combineReducers({
  // add more reducers here
    authentication: authSlice,
    accountData: accountDataSlice,
    collection: collectionsSlice,
    templateStyle: templateStyleSlice,
    templateContent: templateContentSlice,
    templateComponents: templateComponentsSlice,
    templatePagePosition: templatePagePositionSlice,
    history: historySlice,
    product: productSlice,
    editorBoardRef: editorBoardRefSlice
});

const rootReducer = (state, action) => {
  if (action.type === '__REPLACE_STATE__') {
    return action.payload; // override entire state
  }
  return appReducer(state, action);
};

export default rootReducer;
