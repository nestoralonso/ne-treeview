import React from 'react';
import {mount, render} from 'enzyme';
import TreeView from '../TreeView';

describe('TreeView', () => {
  const minData = {label: 'single-child'};
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

  it('renders without crashing', () => {
    const wrapper = render(<TreeView root={minData} />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('it has the same number of NodeItems as the source object', () => {
    const wrapper = mount(<TreeView root={threeLevels} />);
    expect(wrapper.find('NodeView').length).toBe(5);
  });

  // eslint-disable-next-line max-len
  it('it renders two NodeView instances if the root node contains two childs', () => {
    const wrapper = mount(<TreeView root={threeNodes} />);
    expect(wrapper.find('NodeView').length).toBe(3);
  });

  it('it doesn\'t render the children when it is collapsed', () => {
    const wrapper = mount(<TreeView root={threeNodes} />);
    const nodeToClick = wrapper.find('.node-view__node').first();
    nodeToClick.simulate('click', {stopPropagation() {}});

    // only the parent node must be present after the click
    expect(wrapper.find('NodeView').length).toBe(1);
  });

  it('it changes the NodeView to expanded=false after a click', () => {
    const wrapper = mount(<TreeView root={threeNodes} />);
    expect(wrapper.find('NodeView').first().prop('expanded')).toBe(true);
    const nodeToClick = wrapper.find('.node-view__node').first();
    nodeToClick.simulate('click', {stopPropagation() {}});
    expect(wrapper.find('NodeView').first().prop('expanded')).toBe(false);
  });

  it('it calls stop propagation when collapsing a node', () => {
    const wrapper = mount(<TreeView root={threeNodes} />);
    const mockStopProp = jest.fn();
    const nodeToClick = wrapper.find('.node-view__node').first();
    nodeToClick.simulate('click', {stopPropagation: mockStopProp});
    expect(mockStopProp).toBeCalled();
  });
});
