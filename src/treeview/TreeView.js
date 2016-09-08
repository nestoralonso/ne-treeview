import React, {Component, PropTypes} from 'react';
import NodeView from './NodeView';

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedState: {}
    };
    this.handleExpandToggle = this.handleExpandToggle.bind(this);
    this.isPathExpanded = this.isPathExpanded.bind(this);
  }

  /**
   * returns true if the children of this NodeView are expanded, if there is no key in the state returns true
   * @param {Array.number} path array of indexes to get to this node
   * @return {boolean} this branch is expanded or not
   */
  isPathExpanded(path) {
    // if it is undefined assume that is expanded
    if (this.state.expandedState[path] === undefined) {
      return true;
    }
    return this.state.expandedState[path];
  }

  /**
   * Toggles the expanded state of a node
   * @param {Array.number} path array of indexes to get to this node
   */
  handleExpandToggle(path) {
    const isExpanded = this.isPathExpanded(path);
    const oldExState = this.state.expandedState;
    oldExState[path] = !isExpanded;
    this.setState({
      expandedState: oldExState
    });
  }

  render() {
    return (
      <ul className="node-view__root" style={this.props.style}>
        <NodeView
          node={this.props.root}
          path={[0]}
          expanded={this.isPathExpanded([0])}
          onNodeToggle={this.handleExpandToggle}
          isPathExpanded={this.isPathExpanded}
        />
      </ul>
    );
  }
}
TreeView.propTypes = {
  root: PropTypes.shape({
    label: PropTypes.string,
    items: PropTypes.array
  }).isRequired,
  style: PropTypes.object
};

export default TreeView;
