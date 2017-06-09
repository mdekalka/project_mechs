import Pilots from '../pilots/Pilots/Pilots';
import Mechs from '../mechs/Mechs/Mechs';

export const dashboardNavigation = [
  {
    id: 1,
    key: 'pilots',
    title: 'Pilots',
    route: '/pilots',
    component: Pilots
  },
  {
    id: 2,
    key: 'mechs',
    title: 'Mechs',
    route: '/mechs',
    component: Mechs
  }
];