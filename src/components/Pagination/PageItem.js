import React from 'react';
import PropTypes from 'prop-types';

const PageItem = ({ customClass, onClick, pageIndex, content }) => {
  const onLocalClick = (event, pageIndex) => {
    event.preventDefault();

    onClick(event, pageIndex);
  };

  return (
    <li className={`page-item ${customClass}`}>
      <a className="page-link" onClick={(e) => onLocalClick(e, pageIndex)} href="">{content}</a>
    </li>
  )
};

PageItem.propTypes = {
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  pageIndex: PropTypes.number,
  content: PropTypes.any
};

PageItem.defaultProps = {
  customClass: '',
  onClick: () => {},
  pageIndex: null,
  content: ''
};

export default PageItem;