import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PilotList.css';

class PilotList extends Component {
  static propTypes = {
    selected: PropTypes.string,
    list: PropTypes.array,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    selected: null,
    list: [],
    onSelect: () => {}
  };

  static PILOT_INFO = [
    'Name',
    'Rank',
    'Age',
    'Skills',
    'Mech'
  ];

  render() {
    return (
      <table className="border hover center pointer pilots-table">
        <thead>
          <tr>
            {PilotList.PILOT_INFO.map((headerKey, index) => 
              <th key={index}>{headerKey}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Yeah, we could send all pilot info manually, but imagine we have only id*/}
          {this.props.list.map(pilot =>
            <tr className={this.props.selected === pilot.id ? 'active-row': ''} key={pilot.id} onClick={() => this.props.onSelect(pilot.id)}>
              <td>{pilot.name}</td>
              <td>{pilot.rank}</td>
              <td>{pilot.age}</td>
              <td>{pilot.gunnery}/{pilot.piloting}</td>
              <td>{pilot.mech}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
};

export default PilotList;