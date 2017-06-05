import React, { Component } from 'react';

const unitList = [
  {id: 1, name: 'Command Lance', list: [
    {id: 1, name: 'Cpt. Natasha Kerensky - WHM-6R Warhammer'},
    {id: 2, name: 'Colin Maclaren - MAD-3R Marauder'},
    {id: 3, name: 'Lynn Sheridan - CRD-3R Crusader'},
    {id: 4, name: 'John Hayes - GRF-1N Griffin'}
  ]},
  {id: 2, name: 'Fire Lance', list: [
    {id: 1, name: 'Lt. Takiro Ikeda - ARC-2R Archer'},
    {id: 2, name: 'Miklos Delius - ARC-2R Archer'},
    {id: 3, name: 'Nikolai Koniev - WSP-1A Wasp'},
    {id: 4, name: 'Alex Ward - STG-3R Stinger'}
  ]},
  {id: 3, name: 'Recon Lance', list: [
    {id: 1, name: 'Lt. John "Gentleman Johnny" Clavell - RFL-3N Rifleman'},
    {id: 1, name: 'Piet Nichols - PXH-1K Phoenix Hawk'},
    {id: 1, name: 'Simon Fraser - STG-3R Stinger'},
    {id: 1, name: 'Mohammar Jahan - STG-3R Stinger'}
  ]}
];

class UnitOrganization extends Component {
  static ORGANIZATION_HEADER = 'Black Window Company';

  state = {
    unitList: []
  };

  componentDidMount() {
    this.setState({ unitList });
  }
  
  render() {
    const { unitList } = this.state;

    return (
      <div className="container-fluid">
        <div>{UnitOrganization.ORGANIZATION_HEADER}</div>
        <ul class="list unit-list">
          {unitList.map(unitItem =>
            <li>
              <div>{unitItem.name}</div>
              {unitItem.list.length ?
                <ul class="list team-list">
                  {unitItem.list.map(unit =>
                    <li>{unit.name}</li>
                  )}
                </ul>
                : null
              }
            </li>
          )}
        </ul>
      </div>
    )
  }
};

export default UnitOrganization;