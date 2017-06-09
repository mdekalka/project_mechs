import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotList from '../PilotList/PilotList';
import PilotDetails from '../PilotDetails/PilotDetails';
import FilterInputWithType from '../../FilterInputWithType/FilterInputWithType';

import * as pilotsActions from '../actions';
import { getFilter, getQuery, selectFilteredPilotList } from '../selectors';

export class Pilots extends Component {
  state = {
    activePilot: {}
  }

  componentDidMount() {
    this.props.actions.loadPilots(() => {
      // Note: info loaded, do some magic if you want to
    });
  }

  selectPilot = (id) => {
    if (this.props.activeId !== id) {
      this.props.actions.setActiveId(id);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="form-row">
                  <FilterInputWithType />
                </div>
              </div>
            </div>
            {this.props.pilots.length ?
                <PilotList selected={this.props.activeId} onSelect={this.selectPilot} list={this.props.pilots} />
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
    pilots: selectFilteredPilotList(state),
    filter: getFilter(state),
    query: getQuery(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(pilotsActions, dispatch)
  }
};

Pilots = connect(mapStateToProps, mapDispatchToProps)(Pilots);

export default Pilots;