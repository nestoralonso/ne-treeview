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

const threeNodes = {
  label: 'parent',
  items: [
    {
      label: 'child-1'
    },
    {
      label: 'child-2'
    }]
};

const threeLevels = {
  label: 'c-0',
  items: [
    {
      label: 'c-0-1'
    },
    {
      label: 'c-0-2',
      items: [
        {label: 'c-0-2-0'},
        {label: 'c-0-2-1'}
      ]
    }]
};

const treeStyle = {float: 'left', width: 200, border: '1px dotted darkgrey'};

ReactDOM.render(
  <div className="row">
    <div className="col-md-4">
      <h2>The original example</h2>
      <TreeView root={root} style={treeStyle} />
    </div>
    <div className="col-md-4">
      <h2>Minimal example</h2>
      <TreeView root={threeNodes} style={treeStyle}/>
    </div>
    <div className="col-md-4">
      <h2>Other example</h2>
      <TreeView root={threeLevels} style={treeStyle}/>
    </div>
  </div>,
  document.getElementById('root')
);
