import * as types from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.SET_ITEMS:
      return [...action.items];

    case types.TOGGLE_ITEM:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          collapsed: !item.collapsed,
        };
      });
      
    default:
      return state;
  }
};
