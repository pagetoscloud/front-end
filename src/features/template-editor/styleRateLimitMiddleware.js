export function createStyleRateLimitMiddleware({ limit = 2, interval = 100} = {}) {
  let changeCount = 0;
  let timer = null;
  let lastAction = null;
  // let intervalTime = interval;
  return store => next => action => {
    if (
        action.type !== 'templateStyle/changeBackground' && 
        action.type !== 'templateStyle/changeText' &&
        action.type !== 'templateStyle/changeStyleImage'
      ) {
      return next(action); // Pass unrelated actions through
    }
    // if (action.type === 'templateStyle/changeBackground') {
    //   intervalTime = 100; // Longer interval for image changes
    // }
    changeCount++;
    lastAction = action;

    if (!timer) {
      timer = setTimeout(() => {
        if (changeCount < limit && lastAction) {
          // Add a tag to mark this as undo/redo eligible
          next({ ...lastAction, meta: { record: true, recordForHistory: true } });
        } else {
          next({ ...lastAction, meta: { record: false, recordForHistory: false } });
        }
        // Reset window
        changeCount = 0;
        timer = null;
        lastAction = null;
      }, interval);
    }
  };
}

  