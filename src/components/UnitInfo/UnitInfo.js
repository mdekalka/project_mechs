import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UnitInfoDetails from '../UnitInfoDetails/UnitInfoDetails';

import * as unitInfoActions from './actions';

export class UnitInfo extends Component {
  componentDidMount() {
    this.props.actions.loadUnitInfo().then(() => {
      // Note: info loaded, do some magic if you want to
    });
  }

  onUnitNameChange = (e) => {
    this.setState({ unitName: e.target.value });
  }

  onFactionsSelect = (value, event) => {
    this.setState({ activeFaction: value });
  }

  render() {
    return (
      <div>
        <UnitInfoDetails details={this.props.unitInfo} onChange={this.onUnitNameChange} onSelect={this.onFactionsSelect} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        unitInfo: state.unitInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(unitInfoActions, dispatch)
    }
};

UnitInfo = connect(mapStateToProps, mapDispatchToProps)(UnitInfo);

export default UnitInfo;