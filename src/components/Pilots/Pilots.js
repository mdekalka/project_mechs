import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Pilots extends Component {
  state = {
    pilotList: []
  }

  componentDidMount() {
    this.setState({ 
      pilotList: [
        {id: 1, name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'},
        {id: 1, name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'},
        {id: 1, name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'}
      ] 
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
                  <th>#</th>
                  <th>Name</th>
                  <th>Rank</th>
                  <th>Age</th>
                  <th>Skills</th>
                  <th>Mech</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pilotList.map(pilot =>
                  <tr>
                    <td>{pilot.id}</td>
                    <td>{pilot.name}</td>
                    <td>{pilot.rank}</td>
                    <td>{pilot.age}</td>
                    <td>{pilot.skills}</td>
                    <td>{pilot.mech}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          <div className="col-md-4">
            asf
          </div>
        </div>
      </div>
    )
  }
};

export default Pilots;