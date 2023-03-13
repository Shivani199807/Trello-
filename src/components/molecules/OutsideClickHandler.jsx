import React, { Component } from "react";
import PropTypes from "prop-types";

export default class OustideClickHandler extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
      PropTypes.object,
    ]),
  };

  render() {
    return <div id={this.id}>{this.props.children}</div>;
  }
}
