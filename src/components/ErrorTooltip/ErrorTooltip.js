import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class ErrorTooltip extends Component {
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger placement={this.props.placement} overlay={tooltip}>
        <FontAwesome name={this.props.icon} />
      </OverlayTrigger>
    )
  }
};

export default ErrorTooltip;