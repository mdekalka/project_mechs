import React from 'react';
import PropTypes from 'prop-types';

import './ItemsCount.css';

const ItemsCount = ({ count, label, activeValue, onSelect }) => {
  return (
    <div className="items-count-container">
      <ul className="items-count-list">
        {count.map((listItem, index) =>
          <li key={index}
              onClick={() => onSelect(listItem.value)}
              className={`count-item ${listItem.value === activeValue ? 'active' : ''}`}>
            {listItem.value}
          </li>
        )}
      </ul>
      {label ? <div className="items-count-label">{label}</div> : null}
    </div>
  )
};

ItemsCount.propTypes = {
  count: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number
  })),
  label: PropTypes.string,
  onSelect: PropTypes.func
};

ItemsCount.defaultProps = {
  count: [],
  label: '',
  onSelect: () => {}
};

export default ItemsCount;