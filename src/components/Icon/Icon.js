import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './Icon.css';

const Icon = (props) => {
  const { theme, ...rest } = props;

  return (
    <div className={`icon-container ${theme}`} onClick={props.onClick}>
      <FontAwesome {...rest} />
    </div>
  )
};

Icon.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.string
};

Icon.defaultProps = {
  onClick: () => {},
  theme: ''
}

export default Icon