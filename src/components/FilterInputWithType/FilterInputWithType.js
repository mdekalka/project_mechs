import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Radio } from 'react-bootstrap';
import enhanceWithClickOutside from 'react-click-outside';
import FontAwesome from 'react-fontawesome';

import FilterInput from '../FilterInput/FilterInput';

import * as filterActions from './actions';

import './FilterInputWithType.css';

export class FilterInputWithType extends Component {
  static FILTER_TYPES = [
    { name: 'by Name', value: 'name' },
    { name: 'by Rank', value: 'rank' },
    { name: 'by Mech', value: 'mech' }
  ];

  static PLACEHOLDER = 'Filter by';

  state = {
    isOpen: false
  }

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
        {this.state.isOpen ? 
          <div className="types-panel">
            <ul className="types-list">
              {FilterInputWithType.FILTER_TYPES.map((filter, index) =>
                <li className="types-item" key={index} >
                  <Radio
                    checked={this.props.filter === filter.value}
                    name="radioGroup"
                    className="types-radio"
                    value={filter.value}
                    onChange={this.onTypeChange}
                  >
                  {filter.name}
                  </Radio>
                </li>
              )}
            </ul>
          </div>
        : null
        }
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
    actions: bindActionCreators(filterActions, dispatch)
  }
};

FilterInputWithType = connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(FilterInputWithType));


export default FilterInputWithType;