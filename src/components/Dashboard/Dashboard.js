import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';


import { dashboardNavigation } from './DashboardService';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Navigation customClass="dashboard-nav" list={dashboardNavigation} />
        <Switch>
          {dashboardNavigation.map(navItem =>
            <Route key={navItem.id} path={navItem.route} component={navItem.component} />
          )}
        </Switch>
      </div>
    )
  }
};

export default Dashboard;