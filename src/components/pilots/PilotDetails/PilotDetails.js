import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PilotsDetailsView from '../PilotDetailsView/PilotsDetailsView';
import PilotDetailsEdit from '../PilotDetailsEdit/PilotDetailsEdit';
import Icon from '../../Icon/Icon';

import { selectPilotById } from '../selectors';
import { EDIT_MODE, VIEW_MODE } from '../../../constants/constants';

import './PilotsDetails.css';

export class PilotDetails extends Component {
  state = {
    mode: EDIT_MODE
  }

  changeMode = (mode) => {
    this.setState({ mode });
  }

  handleChange = (event) => {
    debugger
  }

  selectChange = (a,b) => {
    debugger
  }

  render() {
    return (
      <div className="pilots-view-container">
        {this.props.activePilot ?
          <div className="pilots-view">
            <div className="pilots-header">
              <h3 className="header text-center">Pilot Details</h3>
              {this.state.mode === VIEW_MODE ?
                <div className="icon-group"><Icon name="pencil" onClick={() => this.changeMode(EDIT_MODE)} /></div>
              : <div className="icon-group">
                  <Icon name="check" theme="accept" />
                  <Icon name="ban" theme="cancel" onClick={() => this.changeMode(VIEW_MODE)} />
                </div>
              }
            </div>
            <div className="pilots-content">
              {this.state.mode === VIEW_MODE ?
                <PilotsDetailsView {...this.props.activePilot} />
              : <PilotDetailsEdit handleChange={this.handleChange} selectChange={this.selectChange} {...this.props} />
              }
            </div>
          </div>
        : <div className="message warning-message text-center">No Pilot selected</div>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
      activePilot: selectPilotById(state)
    }
};

PilotDetails = connect(mapStateToProps)(PilotDetails);

export default PilotDetails;