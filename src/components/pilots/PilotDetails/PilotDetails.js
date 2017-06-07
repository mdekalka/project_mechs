import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PilotsDetailsView from '../PilotDetailsView/PilotsDetailsView';
import PilotDetailsEdit from '../PilotDetailsEdit/PilotDetailsEdit';

import { EDIT_MODE, VIEW_MODE } from '../../../constants/constants';

class PilotDetails extends Component {
  static propTypes = {
    ranks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })),
    mechs: PropTypes.array,
    details: PropTypes.object
  };

  static defaultProps = {
    ranks: [],
    mechs: [],
    details: {}
  };

  state = {
    mode: VIEW_MODE
  }

  renderByMode(mode) {
    switch (mode) {
      case EDIT_MODE:
        return <PilotDetailsEdit {...this.props} />

      case VIEW_MODE:
        return <PilotsDetailsView {...this.props.details} />

      default:
        return null;
    }
  }

  render() {
    const { ranks, mechs, details: { name, age, gunnery, piloting } } = this.props;

    return this.renderByMode(this.state.mode);
  }
};

export default PilotDetails;