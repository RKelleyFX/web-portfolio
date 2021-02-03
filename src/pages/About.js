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
          <p id='pageText'>I've had the greatest opportunity spending the first few years of my professional career creating the same movie magic that I have loved seeing as a child. Throughout these experiences I have grown an affinity for the spirit of the small businesses that lie at the heart of our society. My hope is to use my new skills as a Web Developer to help create tools for these businesses to succeed. </p>
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