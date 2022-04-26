# Directory Tree

> A programming task

[View demo](https://cgruslan.github.io/test-task-tree-view/)


## Task

Create a JavaScript library that displays a directory tree structure from provided data.

Requirements:

- Native DOM API only (no dependencies like React or Angular)
- Should be embeddable

Data example:

```javascript
{
  items: [
    { id: '1', name: "пункт №1", parentId: '0' },
    { id: '2', name: "пункт №1.1", parentId: '1' },
    // ...
  ]
}
```


## Solution

The script is called `TreeView` and has a corresponding prefix (`trv`) for its class names to avoid collisions when embedded into the page like so:

```html
<link href="treeview.min.css" rel="stylesheet">
<script src="treeview.min.js"></script>
```

Program expects to get a selector (or an element) to be used as a container and data to display.

```javascript
const treeView = new TreeView('#root', json.items);
```

Extra functionality is available. User can get `ID` property of a selected directory with `select` event:

```javascript
treeView.addEventListener('select', (event) => {
  console.log(event.id);
});
```
