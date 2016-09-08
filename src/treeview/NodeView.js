import React, {Component, PropTypes} from 'react';

class NodeView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.onNodeToggle(this.props.path);
  }

  /**
   * if the node contains children, renders a folder icon, if it is expanded renders an openfolder icon
   * @param {boolean} isParent contains children or not
   * @param {boolean} isExpanded the expanded state of this node
   * @return {XML} the JSX of the rendered icon
   */
  renderIcon(isParent, isExpanded) {
    if (isParent && isExpanded) {
      return (
          <span
            className="glyphicon glyphicon-folder-open"
            aria-hidden="true">
          </span>);
    } else if (isParent && !isExpanded) {
      return (
          <span
            className="glyphicon glyphicon-folder-close"
            aria-hidden="true">
          </span>);
    }

    return (
        <span
          className="glyphicon glyphicon-file node-view__file-icon"
          aria-hidden="true">
        </span>);
  }

  /**
   * if the node contains children and is collapsed renders a plus icon
   * @param {boolean} isParent contains children or not
   * @param {boolean} isExpanded the expanded state of this node
   * @return {XML} the JSX of the rendered icon
   */
  renderArrowIcon(isParent, isExpanded) {
    if (!isParent) {
      return null;
    }

    if (isExpanded) {
      return (
          <span
            className="glyphicon glyphicon-minus node-view__folder-ctrl"
            aria-hidden="true">
          </span>);
    }

    return (
        <span
          className="glyphicon glyphicon-plus node-view__folder-ctrl"
          aria-hidden="true">
        </span>);
  }

  /**
   * Renders the children of this element of the source object
   * @param {Array.object} items children objects of the source data structure
   * @param {Array.number} path array of indexes to get to this node
   * @return {XML} a recursive JSX structure that contains children of children
   */
  renderChildren(items, path) {
    const {isPathExpanded, onNodeToggle} = this.props;
    return (
        <ul>{items.map((item, i) => {
          let newPath = null;
          if (path) {
            newPath = [...path, i];
          }

          return (
            <NodeView
              node={item}
              key={i}
              path={newPath}
              expanded={isPathExpanded(newPath)}
              isPathExpanded={isPathExpanded}
              onNodeToggle={onNodeToggle}
            />);
        })}
        </ul>);
  }

  render() {
    const {node, path} = this.props;
    const isFolder = Boolean(node.items) && node.items.length > 0;
    const nodeIcon = this.renderIcon(isFolder, this.props.expanded);
    const arrowIcon = this.renderArrowIcon(isFolder, this.props.expanded);

    return (
        <li className="node-view__node" onClick={this.handleClick}>
          {arrowIcon}
          {nodeIcon}
          <div className="node-view__label">
            {node.label}
          </div>

          {isFolder && this.props.expanded ?
            this.renderChildren(node.items, path) : null
          }
        </li>
    );
  }
}
NodeView.propTypes = {
  node: PropTypes.shape({
    label: PropTypes.string,
    items: PropTypes.array
  }),
  expanded: PropTypes.bool.isRequired,
  path: PropTypes.array,
  onNodeToggle: PropTypes.func.isRequired,
  isPathExpanded: PropTypes.func.isRequired
};

export default NodeView;
