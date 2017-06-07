import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotList from '../PilotList/PilotList';
import PilotDetails from '../PilotDetails/PilotDetails';
import FilterInput from '../../FilterInput/FilterInput';

import * as pilotsActions from '../actions';
import { selectPilotList, selectPilotById } from '../selectors';
import { filterBy } from '../service';

export class Pilots extends Component {
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
    activePilot: {},
    query: ''
  }

  componentDidMount() {
    this.props.actions.loadPilots(() => {
      // Note: info loaded, do some magic if you want to
    });
  }

  selectPilot = (id) => {
    this.props.actions.setActiveId(id);
  }

  onFilterChange = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const filteredList = filterBy(this.props.pilots, 'name', this.state.query);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <FilterInput onChange={this.onFilterChange} placeholder={'Filter by name'} value={this.state.query} />
            {filteredList.length ?
              <PilotList selected={this.props.activeId} onSelect={this.selectPilot} headers={Pilots.PILOT_INFO} list={filteredList} />
            : <div>No results based on filter query</div>
            }
          </div>
          <div className="col-md-4">
            <div>Pilot details</div>
            {this.props.activePilot ?
              <PilotDetails ranks={Pilots.RANKS} mechs={Pilots.MECHS} details={this.props.activePilot} />
            : <div className="text-center">No pilot selected</div>
            }
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
      activeId: state.pilotsInfo.activeID,
      pilots: selectPilotList(state),
      activePilot: selectPilotById(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(pilotsActions, dispatch)
    }
};

Pilots = connect(mapStateToProps, mapDispatchToProps)(Pilots);

export default Pilots;