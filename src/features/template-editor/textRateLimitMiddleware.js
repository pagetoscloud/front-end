export function createTextRateLimitMiddleware({ limit = 2, interval = 400} = {}) {
    let changeCount = 0;
    let timer = null;
    let lastAction = null;
  
    return store => next => action => {
      if (
            action.type !== 'templateContent/changeBannerText' &&
            action.type !== 'templateContent/changeLogoText' &&
            action.type !== 'templateContent/changeButton' &&
            action.type !== 'templateContent/changeConnectorText' &&
            action.type !== 'product/editProduct' &&
            action.type !== 'product/editCategory'
        ) {
        return next(action); // Pass unrelated actions through
      }
  
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