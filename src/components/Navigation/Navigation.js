import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ customClass, list }) => {
  return (
    <ul className={`navigation ${customClass}`}>
      {list.map(listItem =>
        <li key={listItem.id}><Link to={listItem.route}>{listItem.title}</Link></li>
      )}
    </ul>
  )
};

Navigation.propTypes = {
  list: PropTypes.array,
  customClass: PropTypes.string
};

Navigation.defaultProps = {
  list: [],
  customClass: ''
};

export default Navigation;