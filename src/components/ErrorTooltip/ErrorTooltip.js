import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class ErrorTooltip extends Component {
  static propTypes = {
    icon: PropTypes.string,
    id: PropTypes.string,
    placement: PropTypes.string,
    tooltip: PropTypes.string
  };
  static defaultProps = {
    icon: '',
    id: '1',
    placement: 'top',
    tooltip: ''
  };

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