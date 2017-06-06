import React from 'react';

import UserInfo from '../UnitInfo/UnitInfo';
import Pilots from '../pilots/Pilots/Pilots';
import Mechs from '../mechs/Mechs/Mechs';
import UnitOrganization from '../UnitOrganization/UnitOrganization';

export const dashboardNavigation = [
  {
    id: 1,
    key: 'unit_info',
    title: 'Unit info',
    route: '/unit-info',
    component: UserInfo
  },
  {
    id: 2,
    key: 'pilots',
    title: 'Pilots',
    route: '/pilots',
    component: Pilots
  },
  {
    id: 3,
    key: 'mechs',
    title: 'Mechs',
    route: '/mechs',
    component: Mechs
  },
  {
    id: 4,
    key: 'unit_organization',
    title: 'Unit organization',
    route: '/unit-organization',
    component: UnitOrganization
  }
];