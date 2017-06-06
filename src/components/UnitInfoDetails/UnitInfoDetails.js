import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from "react-bootstrap";

class UnitInfoDetails extends Component {
  static propTypes = {
    details: PropTypes.object,
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    details: {},
    onChange: () => {},
    onSelect: () => {}
  };


  render() {
    const { name, affiliation } = this.props.details;

    return (
      <form>
        <FormGroup>
          <ControlLabel>Unit name</ControlLabel>
          <FormControl
            type="text"
            value={name}
            placeholder="Enter text"
            onChange={this.props.onChange}
          />
        </FormGroup>
        {affiliation.length ? 
          <FormGroup>
            <ControlLabel>Affiliation</ControlLabel>
            <div>
              <DropdownButton bsStyle="default" title={affiliation[0].text} id="dropdown-factions" onSelect={this.props.onSelect} >
                {affiliation.map((affiliation, index) => 
                  <MenuItem key={index} eventKey={affiliation}>{affiliation.text}</MenuItem>
                )}
              </DropdownButton>
            </div>
          </FormGroup>
        : null
        }
      </form>
    )
  }
};

export default UnitInfoDetails;