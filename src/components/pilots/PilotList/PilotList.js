import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from "react-bootstrap";

class PilotList extends Component {
  static propTypes = {
    selected: PropTypes.number,
    headers: PropTypes.array,
    list: PropTypes.array,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    selected: null,
    header: [],
    list: [],
    onSelect: () => {}
  };

  render() {
    return (
      <Table bordered hover>
        <thead>
          <tr>
            {this.props.headers.map((headerKey, index) => 
              <th key={index}>{headerKey}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Yeah, we could send all pilot info manually, but image we have only id*/}
          {this.props.list.map(pilot =>
            <tr className={this.props.selected === pilot.id ? 'table-active': ''} key={pilot.id} onClick={() => this.props.onSelect(pilot.id)}>
              <td>{pilot.id}</td>
              <td>{pilot.name}</td>
              <td>{pilot.rank}</td>
              <td>{pilot.age}</td>
              <td>{pilot.gunnery}/{pilot.piloting}</td>
              <td>{pilot.mech}</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
};

export default PilotList;