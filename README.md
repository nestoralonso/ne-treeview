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

## API
```jsx
  <TreeView root={rootObject} />
```

## Styling
The styles contained in [ne-treeview.css](./ne-treeview.css) must be loaded globally via a link tag, also the styles for bootstrap 3 must be present 

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
