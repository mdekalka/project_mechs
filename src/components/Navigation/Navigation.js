import React from 'react';
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

export default Navigation;