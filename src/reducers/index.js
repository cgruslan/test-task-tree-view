import items from './items';
import selectedItemId from './selectedItemId';

export default function (state = {}, action) {
  return {
    items: items(state.items, action),
    selectedItemId: selectedItemId(state.selectedItemId, action),
  };
}
