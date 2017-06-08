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
  onClick: PropTypes.func
};

Icon.defaultProps = {
  onClick: () => {}
}

export default Icon