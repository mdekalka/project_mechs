import React, { Component } from 'react';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

import { RANKS , MECHS } from '../constants';

class PilotDetailsEdit extends Component {
  render() {
    const { handleChange, selectChange, activePilot: { rank, mech, name, age, gunnery, piloting } } = this.props;

    return (
      <div className="details-view">
        <div className="details-view-row title">
          <FormControl
            autoFocus
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <div className="details-view-title">[Name]</div>
        </div>
        <div className="details-view-row title">
          <DropdownButton bsStyle="default" title={rank} id="dropdown-ranks" onSelect={selectChange}>
            {RANKS.map((rankItem, index) => 
              <MenuItem active={rank === rankItem.text} key={index} eventKey={rankItem}>{rankItem.text}</MenuItem>
            )}
          </DropdownButton>
          <div className="details-view-title">[Rank]</div>
        </div>
        <div className="details-view-row title">
          <FormControl
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
          <div className="details-view-title">[Age]</div>
        </div>
        <div className="details-view-row title">
          <FormControl
            type="text"
            name="gunnery"
            value={gunnery}
            onChange={handleChange}
          />
          <div className="details-view-title">[Gunnery]</div>
        </div>
        <div className="details-view-row title">
          <FormControl
            type="text"
            name="piloting"
            value={piloting}
            onChange={handleChange}
          />
          <div className="details-view-title">[Piloting]</div>
        </div>
        <div className="details-view-row title">
          <DropdownButton bsStyle="default" title={mech} name="mech" id="dropdown-mechs" onSelect={selectChange}>
            {MECHS.map((mechItem, index) => 
              <MenuItem active={mech === mechItem.text} key={index} eventKey={mechItem}>{mechItem.text}</MenuItem>
            )}
          </DropdownButton>
          <div className="details-view-title">[Mech]</div>
        </div>
      </div>
    )
  }
};

export default PilotDetailsEdit;