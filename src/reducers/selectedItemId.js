import * as types from '../constants/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case types.SELECT_ITEM:
      return action.id;
    
    default:
      return state;
  }
};
