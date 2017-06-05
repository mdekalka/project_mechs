import React, { Component } from 'react';
import {
    Table,
    FormGroup,
    ControlLabel,
    FormControl,
    DropdownButton,
    MenuItem
} from "react-bootstrap";

class Pilots extends Component {
  static PILOT_INFO = [
    '#',
    'Name',
    'Rank',
    'Age',
    'Skills',
    'Mech'
  ];

  static RANKS = [
    {value: "Private", text : "Private"},
    {value: "Corporal", text : "Corporal"},
    {value: "Sergeant", text : "Sergeant"},
    {value: "Lieutenant", text : "Lieutenant"},
    {value: "Captain", text : "Captain"},
    {value: "Major", text : "Major"},
    {value: "Colonel", text : "Colonel"},
  ];

  static MECHS = [
    {value : "WHM-6R", text : "Warhammer WHM-6R"}
  ];

  state = {
    pilotList: [],
    activeRank: Pilots.RANKS[0],
    activeMech: Pilots.MECHS[0]
  }

  componentDidMount() {
    this.setState({ 
      pilotList: [
        {id: 1, name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'},
        {id: 2, name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'},
        {id: 3, name: 'Natasha Natasha', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R'}
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
                  {Pilots.PILOT_INFO.map((pilotKey, index) => 
                    <th key={index}>{pilotKey}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.state.pilotList.map(pilot =>
                  <tr key={pilot.id}>
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
            <div>Pilot details</div>
            <form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value="Natasha"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Affiliation</ControlLabel>
                <div>
                  <DropdownButton bsStyle="default" title={this.state.activeRank.text} id="dropdown-ranks" >
                    {Pilots.RANKS.map((rank, index) => 
                      <MenuItem key={index} eventKey={rank}>{rank.text}</MenuItem>
                    )}
                  </DropdownButton>
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Age</ControlLabel>
                <FormControl
                  type="text"
                  value="32"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Gunnery</ControlLabel>
                <FormControl
                  type="text"
                  value="2"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Piloting</ControlLabel>
                <FormControl
                  type="text"
                  value="3"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Mech</ControlLabel>
                <div>
                  <DropdownButton bsStyle="default" title={this.state.activeMech.text} id="dropdown-mechs" >
                    {Pilots.MECHS.map((mech, index) => 
                      <MenuItem key={index} eventKey={mech}>{mech.text}</MenuItem>
                    )}
                  </DropdownButton>
                </div>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default Pilots;