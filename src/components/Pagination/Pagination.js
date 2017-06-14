import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageItem from './PageItem';

import './Pagination.css';

class Pagination extends Component {
  static propTypes = {
    maxShown: PropTypes.number,
    pageCount: PropTypes.number,
    onSelect: PropTypes.func,
    activePage: PropTypes.number,
    customClass: PropTypes.string
  };

  static defaultProps = {
    maxShown: 5,
    pageCount: 1,
    onSelect: () => {},
    activePage: 1,
    customClass: ''
  };

  static FIRST_PAGE = 1;

  onPageSelect = (event, index) => {
    event.preventDefault();

    if (index !== undefined && this.props.activePage !== index) {
      this.props.onSelect(index);
    }
  }

  countParts(shownCount) {
    const parts = shownCount - 1;
    const left = Math.round(parts / 2);

    return {
      left,
      right: parts - left
    }
  }

  renderPages(start, end) {
    let finalPages = [];

    for (let i = start; i <= end; i++) {
      const activeClass = this.props.activePage === i ? 'active' : '';

      finalPages.push(<PageItem key={i} pageIndex={i} content={i} customClass={activeClass} onClick={this.onPageSelect} />);
    }

    return finalPages;
  }

  renderWithEllipsis() {
    const { maxShown, activePage, pageCount } = this.props;
    const { left, right } = this.countParts(maxShown);
    let pageList = [];

    if (maxShown >= pageCount) {
      return this.renderPages(Pagination.FIRST_PAGE, pageCount);
    } else {
      let start = activePage - left > 0 ? activePage - left : Pagination.FIRST_PAGE;
      let end = start + maxShown - 1;

      if (end > pageCount) {
        start -= end - pageCount;
      }

      if (activePage - left > 0 && start > Pagination.FIRST_PAGE) {
        pageList.push(<PageItem key="el-left" content="..." customClass="page-ellipsis" />);
      }

      pageList = pageList.concat(this.renderPages(start, start + maxShown - 1));

      if (activePage + right < pageCount) {
        pageList.push(<PageItem key="el-right" content="..." customClass="page-ellipsis" />);
      }

      return pageList;
    }
  }

  validatePrevNext(nextValue) {
    if (nextValue < Pagination.FIRST_PAGE || nextValue > this.props.pageCount) {
      return this.props.activePage;
    }

    return nextValue;
  }

  render() {
    return (
      <div className={`pagination-container ${this.props.customClass}`}>
        {/* TODO: Refactor list items to separate method*/}
        <ul className="pagination-list">
          <PageItem content="«" customClass="page-start" onClick={this.onPageSelect}  pageIndex={Pagination.FIRST_PAGE} />
          <PageItem content="‹" customClass="page-prev" onClick={this.onPageSelect}  pageIndex={this.validatePrevNext(this.props.activePage - 1)} />
          {this.renderWithEllipsis()}
          <PageItem content="›" customClass="page-next" onClick={this.onPageSelect}  pageIndex={this.validatePrevNext(this.props.activePage + 1)} />
          <PageItem content="»" customClass="page-end" onClick={this.onPageSelect}  pageIndex={this.props.pageCount} />
        </ul>
      </div>
    )
  }
};


export default Pagination;