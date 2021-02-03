import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';

class Manage extends Component {
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
        <h2>Doing</h2>
        <PageIntro />
        {/*<h5>Project Management</h5>
        <h5>Full Scale Effects</h5>
        <h5>Special Effects Coordinator</h5>*/}
      </div>
    )
  }
  
};

export default Manage;