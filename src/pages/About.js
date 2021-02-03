import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import TextField from '../components/PageIntro';

import MeBW from '../assets/resume/HeadshotWebBW.jpg';
import MeColor from '../assets/resume/HeadshotWebColor.jpg';

import '../styles/style.css';

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
        <div className='container'>
          <h2>About Me</h2>
          <img id='headShot' src={MeBW}></img>
          {/*<h5>History</h5>
          <h5>Volunteer</h5>
          <h5>Travel</h5>*/}
          <a href='/logIn'>I Am Me</a>
        </div>
      </div>
    )
  }
};

export default About;