import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
//import PageIntro from '../components/PageIntro';

import '../styles/style.css';
import ContactIcon from '../assets/icons/contact.png';

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
        <div className='container'>
          <h2>Ryan Kelley</h2>
          <h3>Web Portfolio</h3>
          <p id='welcomeText'>Welcome to my portfolio. This is a real time view of the progression of my build process. I've started my process with some wire frames which can be found on my <b>Designing Page</b>. From there you can head over to my <b>Doing Page</b> where you can see my kanban board and track my ticket progress.</p>
          <p id='welcomeText'>I am hosting this application on AWS Amplify while using DynamoDB for my data base. Although I am aware that this is overkill for a blog format application, I couldn't waste an opportunity to learn a new technology. As I link the backend to the DB you will see the content that I have uploaded for me to utilize my post creation function.</p>
          <p id='welcomeText'>My final steps will be cleaning up the structure of my application. My goal is to create as many reusable components as possible while maintaining proper component structure. Thank you and enjoy!</p>
        </div>
        <div className='siderIcon'>
          <img id='contactIcon' src={ContactIcon}></img>
        </div>
      </div>
    )
  }
};

export default Home;