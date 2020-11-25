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
        <h2>Old Forge Maker</h2>
        <p>Old Forge Maker has been a project that has been in the making for quite a long time. Over the years my mind has been constantly running from one idea to the next and OFM is the outcome. It is a platform for me to share not only my experiences but to share how I made them all happen. The goal is to promote growth not only within myself but within all who want to join.</p>
      </div>
    )
  }
};

export default Home;