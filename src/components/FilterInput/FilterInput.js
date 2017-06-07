import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

class FilterInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    value: '',
    onChange: () => {},
    placeholder: ''
  };

  render() {
    return (
      <div className="input-filter-container">
        <FormControl type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} />
      </div>
    )
  }
};

export default FilterInput;