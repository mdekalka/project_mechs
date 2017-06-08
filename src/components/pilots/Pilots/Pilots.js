import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotList from '../PilotList/PilotList';
import PilotDetails from '../PilotDetails/PilotDetails';
import FilterInput from '../../FilterInput/FilterInput';

import * as pilotsActions from '../actions';
import { selectPilotList } from '../selectors';
import { filterBy } from '../service';

export class Pilots extends Component {
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
            <div className="row">
              <div className="col-md-4">
                <div className="form-row">
                  <FilterInput customClass="block" onChange={this.onFilterChange} placeholder="Filter by name" value={this.state.query} />
                </div>
              </div>
            </div>
            {filteredList.length ?
                <PilotList selected={this.props.activeId} onSelect={this.selectPilot} list={filteredList} />
              : <div>No results based on filter query</div>
            }
          </div>
          <div className="col-md-4">
            <PilotDetails />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
      activeId: state.pilotsInfo.activeID,
      pilots: selectPilotList(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(pilotsActions, dispatch)
    }
};

Pilots = connect(mapStateToProps, mapDispatchToProps)(Pilots);

export default Pilots;