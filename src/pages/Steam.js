import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';

class Steam extends Component {
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
        <h2>The Future - STEAM</h2>
        <PageIntro />
        {/*<h5>Continuing Education</h5>
        <h5>STEAM</h5>*/}
      </div>
    )
  }
};

export default Steam;