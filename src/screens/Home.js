import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
//import PageIntro from '../components/PageIntro';
import ContactForm from '../components/ContactForm';
import ControlledCarousel from '../components/carousel';

import '../styles/style.css';

import ContactIcon from '../assets/icons/contact.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from "react-bootstrap/Button";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { contact: false };
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {

  }

  contactForm() {
    this.setState({ contact: true });
  }

  render() {
    let gitHub = <a href='https://github.com/RKelleyFX' target="_blank" className="btn btn-secondary">GitHub</a>;
    let linkedIn = <a href='https://www.linkedin.com/in/ryan-kelley-8b232319/' target="_blank" className="btn btn-secondary">LinkedIn</a>;

    const contact = this.state.contact; 
    let viewCard;

    if (contact === true) {
      viewCard = <ContactForm />;
    }

    const popover = (
      <Popover >
        <Popover.Content >
          <ContactForm />
        </Popover.Content>
      </Popover>
    );

    const ContactCard = () => (
      <OverlayTrigger trigger='click' placement="auto" overlay={popover} >
        <img id='contactIcon' src={ContactIcon}></img>
      </OverlayTrigger>
    );

    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='main-column'>
            <h2>Ryan Kelley</h2>
            <h3>Web Portfolio</h3>
            <p id='welcomeText'>Welcome to my portfolio. This is a real time view of the progression of my build process. I've started my process with some wire frames which can be found on my <b>Coding Page</b>. From there you can head over to my <b>Managing Page</b> where you can see my kanban board and track my ticket progress.</p>
            <p id='welcomeText'>I am hosting this application on AWS Amplify while using DynamoDB for my data base. Although I am aware that this is overkill for a blog format application, I couldn't waste an opportunity to learn a new technology. Currently all page intros as well as the posts are being rendered from S3 and DynamoDB via GraphQL.</p>
            <p id='welcomeText'>My final steps will be cleaning up the structure of my application as well as styling and a responsive format. My goal is to create as many reusable components as possible while maintaining proper component structure. Thank you and feel free to leave a message to let my know you stopped by!</p>
            <h3>Featured Articles</h3>
            <div>
              <ControlledCarousel />
            </div>
          </div>
          <div className='side-column'>
            <div id='siderIcon'>
              <ContactCard />
            </div>
            <div id='siderIcon'>
              {linkedIn}
            </div>
            <div id='siderIcon'>
              {gitHub}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;