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
        <h2>Ryan Kelley Web Portfolio</h2>
        <p>Welcome to my portfolio. Have a look around at the projects that I have been involved with over the years. If you have any questions feel free to reach out to me at any time.</p>
      </div>
    )
  }
};

export default Home;