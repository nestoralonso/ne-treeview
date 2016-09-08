import React from 'react';
import {shallow} from 'enzyme';
import NodeView from '../NodeView';

describe('NodeView', () => {
  const minData = {label: 'single-child'};
  const alwaysExpanded = path => true;
  const dummyToggle = function(path) {};

  it('renders without crashing', () => {
    shallow(<NodeView
        node={minData}
        expanded={true}
        isPathExpanded={alwaysExpanded}
        onNodeToggle={dummyToggle} />);
  });

  it('it renders a single child if only one label is passed', () => {
    const wrapper = shallow(<NodeView node={minData}
        expanded={true}
        isPathExpanded={alwaysExpanded}
        onNodeToggle={dummyToggle} />);
    expect(wrapper.find('li').length).toBe(1);
  });
});
