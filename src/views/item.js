import store from '../store';
import list from './list';
import className from '../utils/className';

const item = (function () {
  function view({ name, id, collapsed, level }) {
    const { items, selectedItemId } = store.getState();
    const hasChildren = items.some(i => i.parentId === id);

    const metaClassName = className('trv-item__meta js-select-item', {
      'trv-item__meta_selected': id === selectedItemId,
    });

    const metaStyle = `padding-left: ${10 + (18 * level)}px`;

    const toggleClassName = className('trv-item__toggle js-toggle-item', {
      'trv-item__toggle_on': !collapsed,
      'trv-item__toggle_hidden': !hasChildren,
    });

    const iconClassName = className('trv-item__icon', {
      'trv-item__icon_open': !collapsed,
    });

    return `
      <li class="trv-item" data-id="${id}">
        <span class="${metaClassName}" style="${metaStyle}">
          <i class="${toggleClassName}"></i>
          <i class="${iconClassName}"></i>
          <span class="trv-item__name">${name}</span>
        </span>
        ${(hasChildren && !collapsed)
          ? list({ parentId: id, level: level + 1 })
          : ''
        }
      </li>
    `;
  }

  return view;
}());

export default item;
