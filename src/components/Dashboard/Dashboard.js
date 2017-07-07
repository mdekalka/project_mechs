import React, { Component } from 'react';

import Pilots from '../PilotsComponents/Pilots/Pilots';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h3 className="dashboard-header text-center">React/Redux app</h3>
        <Pilots />
      </div>
    )
  }
};

export default Dashboard;