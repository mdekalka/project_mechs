import React, { Component } from 'react';

import MechDetails from '../MechDetails/MechDetails';
import MechList from '../MechList/MechList';

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
      mechList: [{ id: 1, name: 'Warhammer', model: 'WHM-6R', weight: 70, class: 'Heavy' }]
    })
  }

  render() {
    const { mechList } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <MechList headers={Mechs.MECH_INFO} list={mechList} />
          </div>
          <div className="col-md-4">
            <div>Mech details</div>
            <MechDetails details={mechList[0]} />
          </div>
        </div>
      </div>
    )
  }
};

export default Mechs;