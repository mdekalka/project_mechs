import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import enhanceWithClickOutside from 'react-click-outside';
import FontAwesome from 'react-fontawesome';

import FilterPanel from '../FilterPanel/FilterPanel';
import FilterInput from '../FilterInput/FilterInput';

import { inputFiltersActions } from '../../re-ducks/inputFilters';
import { FILTER_TYPES } from '../../constants/constants'

import './FilterInputWithType.css';

export class FilterInputWithType extends Component {
  static PLACEHOLDER = 'Filter by';

  state = {
    isOpen: false
  };

  togglePanel = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  handleClickOutside() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  onTypeChange = (event) => {
    this.props.actions.setFilterType(event.target.value);
  }

  onQueryChange = (event) => {
    this.props.actions.updateSearchQuery(event.target.value);
  }

  render() {
    const filterMessage = `${FilterInputWithType.PLACEHOLDER} ${this.props.filter}`;

    return (
      <div className="filter-type-container">
        <FilterInput customClass="block" onChange={this.onQueryChange} placeholder={filterMessage} value={this.props.query} />
        <div className={`filter-types pointer ${this.state.isOpen ? 'open': ''}`} onClick={this.togglePanel} >
          <FontAwesome name="bars" />
        </div>
        {this.state.isOpen ? <FilterPanel types={FILTER_TYPES} onTypeChange={this.onTypeChange} filter={this.props.filter} /> : null}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    filter: state.filterInfo.filter,
    query: state.filterInfo.query
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(inputFiltersActions, dispatch)
  }
};

FilterInputWithType = connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(FilterInputWithType));


export default FilterInputWithType;