import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotsDetailsView from '../PilotDetailsView/PilotsDetailsView';
import PilotDetailsEdit from '../PilotDetailsEdit/PilotDetailsEdit';
import Icon from '../../Icon/Icon';

import { isEmptyPrimitive } from '../../../utils/utils';
import { updatePilotInfo, removePilot } from '../actions';
import { selectPilotById } from '../selectors';
import { EDIT_MODE, VIEW_MODE } from '../../../constants/constants';

import './PilotsDetails.css';

export class PilotDetails extends Component {
  static ERRORS_MSG = {
    name: 'Name field cannot be empty',
    age: 'Age field cannot be empty',
    gunnery: 'Gunnery field cannot be empty',
    piloting: 'Piloting field cannot be empty'
  };

  activePilotDefault = null;

  state = {
    mode: VIEW_MODE,
    activePilot: null,
    errors: null,
    isInvalid: false
  }

  componentWillReceiveProps(props) {
    // Wow. Are you brave enough to do this?
    this.setState({ 
      activePilot: props.activePilot,
      errors: null,
      isInvalid: false
    });
    this.activePilotDefault = Object.assign({}, props.activePilot);
  }

  changeMode = (mode) => {
    this.setState({ mode });
  }

  pilotUpdater = (key, value) => {
    if (!key) {
      return;
    }

    // TODO: compare origin model to new one

    this.setState(prevState => {
      return {
        activePilot: { ...prevState.activePilot, [key]: value },
        errors: null
      }
    });
  }

  handleChange = (event) => {
    const target = event.target;

    this.pilotUpdater(target.name, target.value);
  }

  selectChange = (selected, event) => {
    var name = event.target.name;

    this.pilotUpdater(name, selected.value);
  }

  closeEdit = () => {
    this.setState({ 
      activePilot: this.activePilotDefault,
      isInvalid: false,
      errors: []
    });

    this.changeMode(VIEW_MODE);
  }

  updatePilot = () => {
    this.validate(() => {
      if (this.state.isInvalid) {
        return;
      }

      this.props.actions.updatePilotInfo(this.state.activePilot);
      this.changeMode(VIEW_MODE);
    });
  }

  removePilot = (id) => {
    this.props.actions.removePilot(id);
    this.changeMode(VIEW_MODE);
  }

  validate = (afterValidate) => {
    let ERRORS = null;
    const { activePilot } = this.state;

    for (const key in activePilot) {
      if (PilotDetails.ERRORS_MSG[key]) {
        if (isEmptyPrimitive(activePilot[key])) {
          ERRORS = ERRORS ? ERRORS : {};

          ERRORS[key] = PilotDetails.ERRORS_MSG[key]
        }
      }
    };

    this.setState({
      errors: ERRORS,
      isInvalid: !!ERRORS
    }, afterValidate);
  }

  render() {
    return (
      <div className="pilots-view-container">
        {this.state.activePilot ?
          <div className="pilots-view">
            <div className="pilots-header">
              <h3 className="header text-center">Pilot Details</h3>
              {this.state.mode === VIEW_MODE ?
                <div className="icon-group">
                  <Icon name="pencil" onClick={() => this.changeMode(EDIT_MODE)} />
                  <Icon name="trash-o" theme="cancel" onClick={() => this.removePilot(this.state.activePilot.id)} />
                </div>
              : <div className="icon-group">
                  <Icon name="check" theme="accept" onClick={this.updatePilot} />
                  <Icon name="ban" theme="cancel" onClick={this.closeEdit} />
                </div>
              }
            </div>
            <div className="pilots-content">
              {this.state.mode === VIEW_MODE ?
                <PilotsDetailsView {...this.state.activePilot} />
              : <PilotDetailsEdit 
                  errors={this.state.errors}
                  handleChange={this.handleChange}
                  selectChange={this.selectChange}
                  activePilot={this.state.activePilot}
                />
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ updatePilotInfo, removePilot }, dispatch)
  }
};

PilotDetails = connect(mapStateToProps, mapDispatchToProps)(PilotDetails);

export default PilotDetails;