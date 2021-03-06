import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

import ErrorTooltip from '../../ErrorTooltip/ErrorTooltip';

import { pilotsConstants } from '../../../re-ducks/pilots';

const PilotDetailsEdit = ({ handleChange, selectChange, errors, activePilot: { rank, mech, name, age, gunnery, piloting } }) => {
  return (
    <div className="details-view">
      <div className="details-view-row title">
        <div>
          <FormControl
            autoFocus
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
          {errors && errors.name
          ? <ErrorTooltip id="pilot-tooltip" placement="top" tooltip={errors.name} icon="exclamation-triangle" />
          : null
          }
        </div>
        <div className="details-view-title">[*Name]</div>
      </div>
      <div className="details-view-row title">
        <DropdownButton bsStyle="default" title={rank} id="dropdown-ranks" onSelect={selectChange}>
          {pilotsConstants.RANKS.map((rankItem, index) => 
            <MenuItem active={rank === rankItem.value} key={index} name="rank" eventKey={rankItem}>{rankItem.text}</MenuItem>
          )}
        </DropdownButton>
        <div className="details-view-title">[*Rank]</div>
      </div>
      <div className="details-view-row title">
        <div>
          <FormControl
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
          {errors && errors.age ?
            <ErrorTooltip id="pilot-tooltip" placement="top" tooltip={errors.age} icon="exclamation-triangle" />
          : null
          }
        </div>
        <div className="details-view-title">[*Age]</div>
      </div>
      <div className="details-view-row title">
        <div>
          <FormControl
            type="text"
            name="gunnery"
            value={gunnery}
            onChange={handleChange}
          />
          {errors && errors.gunnery ?
            <ErrorTooltip id="pilot-tooltip" placement="top" tooltip={errors.gunnery} icon="exclamation-triangle" />
          : null
          }
        </div>
        <div className="details-view-title">[*Gunnery]</div>
      </div>
      <div className="details-view-row title">
        <div>
          <FormControl
            type="text"
            name="piloting"
            value={piloting}
            onChange={handleChange}
          />
          {errors && errors.piloting ?
            <ErrorTooltip id="pilot-tooltip" placement="top" tooltip={errors.piloting} icon="exclamation-triangle" />
          : null
          }
        </div>
        <div className="details-view-title">[*Piloting]</div>
      </div>
      <div className="details-view-row title">
        <DropdownButton bsStyle="default" title={mech} name="mech" id="dropdown-mechs" onSelect={selectChange}>
          {pilotsConstants.MECHS.map((mechItem, index) => 
            <MenuItem active={mech === mechItem.text} key={index} name="mech" eventKey={mechItem}>{mechItem.text}</MenuItem>
          )}
        </DropdownButton>
        <div className="details-view-title">[Mech]</div>
      </div>
    </div>
  )
};

PilotDetailsEdit.propTypes = {
  handleChange: PropTypes.func,
  selectChange: PropTypes.func,
  errors: PropTypes.object,
  activePilot: PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gunnery: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    piloting: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mech: PropTypes.string
  })
};

PilotDetailsEdit.defaultProps = {
  handleChange: () => {},
  selectChange: () => {},
  errors: null,
  activePilot: {
    name: '',
    rank: '',
    age: '',
    gunnery: '',
    piloting: '',
    mech: ''
  }
};

export default PilotDetailsEdit;