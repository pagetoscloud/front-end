import { changeHistory } from './historySlice';
// undoRedoMiddleware.js
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const createUndoRedoMiddleware = () => {
  const maxHistory = 40;
  let history = {
    past: [],
    present: null,
    future: [],
  };

  return (store) => (next) => (action) => {
    const { type, meta } = action;
    const { dispatch } = store;
    if (type === UNDO) {
      if (history.past.length === 0) return;
      const previous = history.past.pop();
      history.future.unshift(history.present);
      history.present = previous;
      store.dispatch({ type: '__REPLACE_STATE__', payload: previous });
      dispatch(changeHistory({undo: history.past.length > 0, redo: history.future.length > 0}));
      return;
    }

    if (type === REDO) {
      if (history.future.length === 0) return;
      const nextState = history.future.shift();
      history.past.push(history.present);
      history.present = nextState;
      history.canRedo = history.future.length > 0;
      history.canUndo = history.past.length > 0;
      store.dispatch({ type: '__REPLACE_STATE__', payload: nextState });
      dispatch(changeHistory({undo: history.past.length > 0, redo: history.future.length > 0}));
      return;
    }

    const result = next(action);
    const newState = store.getState();
    if (meta?.initialData && history.present !== null){
      history.past = []
      history.present = null;
      history.future = [];
      dispatch(changeHistory({undo: false, redo: false}));
    }
    if (meta?.initialData && history.present === null){
      history.past = []
      history.present = newState;
      history.future = [];
      dispatch(changeHistory({undo: history.past.length > 0, redo: history.future.length > 0}));
    }
    if (meta?.record) {
      if (history.present !== null) {
        history.past.push(history.present);
        if (history.past.length > maxHistory) {
          history.past.shift(); // remove oldest
        }
      }
      history.present = newState;
      history.future = [];
      dispatch(changeHistory({undo: history.past.length > 0, redo: history.future.length > 0}));
    }
    return result;
  };
}
