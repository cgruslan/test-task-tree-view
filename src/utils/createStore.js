function createStore(reducer, initialState = {}) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore;
