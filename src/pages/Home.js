import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

class Home extends Component {
  constructor(props) {
    super(props)
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>

        <NaviBar />

        <h2>Home</h2>
      </div>
    )
  }
};

export default Home;