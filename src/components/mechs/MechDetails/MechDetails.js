import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from "react-bootstrap";

import { getWeightClass } from '../selectors';

class MechDetails extends Component {
  static propTypes = {
    details: PropTypes.object
  };

  static defaultProps = {
    details: {}
  };

  render() {
    const { id, name, model, weight, class : techClass } = this.props.details;
    const weightClass = getWeightClass(weight);

    return (
      <form>
        <FormGroup>
          <ControlLabel>Id</ControlLabel>
          <FormControl
            type="text"
            value={id}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={name}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Model</ControlLabel>
          <FormControl
            type="text"
            value={model}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Weight(tons)</ControlLabel>
          <FormControl
            type="text"
            value={weightClass}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Class</ControlLabel>
          <FormControl
            type="text"
            value={techClass}
          />
        </FormGroup>
      </form>
    )
  }
};

export default MechDetails;