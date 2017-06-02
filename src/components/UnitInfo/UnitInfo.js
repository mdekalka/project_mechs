import React, { Component } from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from "react-bootstrap";

class UnitInfo extends Component {
  static FACTIONS = [
    {value : "lc", text : "Lyran Commonwealth"},
    {value : "wd", text : "Wolf's Dragoons"}
  ];
  
  state = {
    unitName: '',
    activeFaction: UnitInfo.FACTIONS[0]
  }

  onUnitNameChange = (e) => {
    this.setState({ unitName: e.target.value });
  }

  onFactionsSelect = (value, event) => {
    this.setState({ activeFaction: value });
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Unit name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.onUnitNameChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Affiliation</ControlLabel>
            <div>
              <DropdownButton bsStyle="default" title={this.state.activeFaction.text} id="dropdown-factions" onSelect={this.onFactionsSelect}>
                {UnitInfo.FACTIONS.map((faction, index) => 
                  <MenuItem key={index} eventKey={faction}>{faction.text}</MenuItem>
                )}
              </DropdownButton>
            </div>
          </FormGroup>
        </form>
      </div>
    )
  }
};

export default UnitInfo;