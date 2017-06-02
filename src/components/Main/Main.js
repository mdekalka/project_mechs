import React, { Component } from 'react';

import Dashboard from '../Dashboard/Dashboard';

class Main extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    console.log(this.node)
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
};

export default Main;