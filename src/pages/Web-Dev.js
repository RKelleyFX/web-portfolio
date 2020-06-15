import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

class WebDev extends Component {
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
        <h2>Web Development</h2>
      </div>
    )
  }
};

export default WebDev;