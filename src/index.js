import store from './store';
import EventEmitter from './utils/EventEmitter';
import * as types from './constants/ActionTypes';
import list from './views/list';

class TreeView extends EventEmitter {
  constructor(container, items) {
    let containerEl;
    if (typeof container === 'string') {
      containerEl = document.querySelector(container);
    } else if (container instanceof Element) {
      containerEl = container;
    } else {
      throw new Error('Container is required');
    }

    super();
    this.containerEl = containerEl;
    this.containerEl.classList.add('trv-root');
    this.containerEl.addEventListener('click', this.handleClick.bind(this));
    items = items.map(i => ({ ...i, collapsed: true }));
    store.dispatch({ type: types.SET_ITEMS, items });
    store.subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    this.containerEl.innerHTML = list;
  }

  handleClick(event) {
    const parentItemEl = event.target.closest('.trv-item');
    if (!parentItemEl) return;
    
    const { id } = parentItemEl.dataset;
    
    if (event.target.classList.contains('js-toggle-item')) {
      return store.dispatch({ type: types.TOGGLE_ITEM, id });
    }

    if (
      store.getState().selectedItemId !== id
      && event.target.closest('.js-select-item')
    ) {
      store.dispatch({ type: types.SELECT_ITEM, id });
      const evt = new Event('select');
      evt.id = id;
      this.dispatchEvent(evt);
    }
  }
}

window.TreeView = TreeView;
