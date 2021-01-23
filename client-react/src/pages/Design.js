import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

class Design extends Component {
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
        <h2>Designing</h2>
        <h5>CAD Design</h5>
        <h5>Web Development</h5>
        <h5>Special Effects Technician</h5>
      </div>
    )
  }
};

export default Design;