import React from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

const PilotDetailsEdit = ({ ranks, mechs, details: { name, age, gunnery, piloting } }) => {
  return (
    <form>
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          value={name}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Rank</ControlLabel>
        {}
        <div>
          <DropdownButton bsStyle="default" title={ranks[0].text} id="dropdown-ranks" >
            {ranks.map((rank, index) => 
              <MenuItem key={index} eventKey={rank}>{rank.text}</MenuItem>
            )}
          </DropdownButton>
        </div>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Age</ControlLabel>
        <FormControl
          type="text"
          value={age}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Gunnery</ControlLabel>
        <FormControl
          type="text"
          value={gunnery}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Piloting</ControlLabel>
        <FormControl
          type="text"
          value={piloting}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Mech</ControlLabel>
        <div>
          <DropdownButton bsStyle="default" title={mechs[0].text} id="dropdown-mechs" >
            {mechs.map((mech, index) => 
              <MenuItem key={index} eventKey={mech}>{mech.text}</MenuItem>
            )}
          </DropdownButton>
        </div>
      </FormGroup>
    </form>
  )
};

export default PilotDetailsEdit;