import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

class About extends Component {
  constructor (props) {
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
        <h2>About Me</h2>
        <h5>History</h5>
        <h5>Volunteer</h5>
        <h5>Travel</h5>
      </div>
    )
  }
};

export default About;