import React, { Component } from 'react';
import {
    Table,
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from "react-bootstrap";

class Mechs extends Component {
  static MECH_INFO = [
    'Id',
    'Name',
    'Modal',
    'Weight(tons)',
    'Class'
  ];

  state = {
    mechList: []
  }

  componentDidMount() {
    this.setState({ 
      mechList: [{ id: 1, name: 'Warhammer', model: 'WHM-6R', weight: '70', class: 'Heavy' }]
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Table bordered hover>
              <thead>
                <tr>
                  {Mechs.MECH_INFO.map((mechKey, index) => 
                    <th key={index}>{mechKey}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.state.mechList.map(mech =>
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
          </div>
          <div className="col-md-4">
            <div>Mech details</div>
            <form>
              <FormGroup>
                <ControlLabel>Id</ControlLabel>
                <FormControl
                  type="text"
                  value="1"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value="Warhammer"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Model</ControlLabel>
                <FormControl
                  type="text"
                  value="WHM-6R"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Weight(tons)</ControlLabel>
                <FormControl
                  type="text"
                  value="70"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Class</ControlLabel>
                <FormControl
                  type="text"
                  value="Heavy"
                />
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default Mechs;