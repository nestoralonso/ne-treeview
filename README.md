# ne-treeview

Component to display an object tree structure of the form:

```javascript
const rootObject = {
  label: 'parent',
  items: [
    {
      label: 'child-1'
    },
    {
      label: 'child-2'
    }]
};
```
All the nodes are expanded by default. The html generated is based on ul&gt;li tags.

## Demo
To see a demo of the component in action goto the [demo](https://ne-treeview-demo.firebaseapp.com/)

## Usage
```bash
  npm install --save ne-treeview
```
In your javascript
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from 'ne-treeview';

const root = {
  label: 'parent',
  items: [
    {
      label: 'child-1'
    },
    {
      label: 'child-2'
    }]
};

ReactDOM.render(
  <div style={{width: 600, margin: '0 auto'}}>
    <TreeView root={root} />
  </div>,
  document.getElementById('root')
);
```
## API
```jsx
  <TreeView root={rootObject} style={inlineStylesObj}/>
```

## Styling
The styles contained in [ne-treeview.css](./ne-treeview.css) must be loaded globally via a link tag, also the bootstrap 3 stylesheet must be present 

```html
<link rel="stylesheet" type="text/css" href="/your-styles/ne-treeview.css">
```

## Build
To build the commonjs and es6 versions run:
```bash
 npm run build
```

## Testing
To run the tests
```bash
 npm test
```
## Linting
To run the lint command
```bash
 npm run lint
```
## Running the example
 ```bash
 cd examples
 node server.js
```
## Implementation details
The implementation contains one user facing components that acts as the API and has state and one internal component that has not state and recursively paints the tree.
The state has the expanded/collapsed state for the nodes.