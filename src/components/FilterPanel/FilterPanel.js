import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'react-bootstrap';

const FilterPanel = ({ types, onTypeChange, filter }) => {
  return (
    <div className="types-panel">
      <ul className="types-list">
        {types.map((typeFilter, index) =>
          <li className="types-item" key={index} >
            <Radio
              checked={filter === typeFilter.value}
              name="radioGroup"
              className="types-radio"
              value={typeFilter.value}
              onChange={onTypeChange}
            >
            {typeFilter.name}
            </Radio>
          </li>
        )}
      </ul>
    </div>
  )
};


FilterPanel.propTypes = {
  types: PropTypes.array,
  onTypeChange: PropTypes.func,
  filter: PropTypes.string
};

FilterPanel.defaultProps = {
  types: [],
  onTypeChange: () => {},
  filter: ''
};

export default FilterPanel;
