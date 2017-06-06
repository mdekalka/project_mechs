import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from "react-bootstrap";

class MechList extends Component {
  static propTypes = {
    headers: PropTypes.array,
    list: PropTypes.array
  };

  static defaultProps = {
    headers: [],
    list: []
  };

  render() {
    return (
      <Table bordered hover>
        <thead>
          <tr>
            {this.props.headers.map((mechKey, index) => 
              <th key={index}>{mechKey}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(mech =>
            <tr key={mech.id}>
              <td>{mech.id}</td>
              <td>{mech.name}</td>
              <td>{mech.model}</td>
              <td>{mech.weight}</td>
              <td>{mech.class}</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
};

export default MechList;