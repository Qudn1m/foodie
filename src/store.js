import { createStore } from "redux";

const initialState = {
    count:0,
};

function counterReducers(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : 0,
        };
      default:
        return state;
    }
  }
  const store = createStore(counterReducers);
  export default store;