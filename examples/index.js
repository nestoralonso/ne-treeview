/* global document:true */
import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from 'ne-treeview';

let root = {
  label: 'Node Label',
  items: [
    {
      label: 'Child Node Label',
      items: [
        {
          label: 'Child Node Label',
          items: [
            {
              label: 'Child Node Label',
              items: []
            },
            {
              label: 'Child Node Label'
            },
            {
              label: 'Leaf Node Label'
            }
          ]
        }
      ]
    },
    {
      label: 'Leaf Node Label'
    }
  ]
};

ReactDOM.render(
  <div style={{width: 600, margin: '0 auto'}}>
    <TreeView root={root} />
  </div>,
  document.getElementById('root')
);
