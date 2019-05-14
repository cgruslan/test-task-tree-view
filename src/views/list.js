import store from '../store';
import item from './item';

const list = (function () {
  function view({ parentId = '0', level = 0 } = {}) {
    const { items } = store.getState();
    const children = items.filter(i => i.parentId === parentId);
    
    return `
      <ul class="trv-list">
        ${children.map(i => item({ ...i, level })).join('')}
      </ul>
    `;
  }

  view.toString = view;
  return view;
}());

export default list;
