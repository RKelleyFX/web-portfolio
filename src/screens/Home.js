import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import ControlledCarousel from '../components/carousel';
import ModalResume from '../components/ModalResume';

import '../styles/style.css';

import ContactIcon from '../assets/icons/contact.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from "react-bootstrap/Button";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { contact: false };
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
            <p id='welcomeText'>Welcome to my portfolio. This is my first published web application after completing my Full Stack Developer program at Woz-U. I hope you take the time to review all of the projects that I have worked on over the years. I've split up my portfolio into four categories for your browsing convenience.</p>
            <p id='welcomeText'>The <b>Coding</b> page touches on my most recent endeavors of creating tools and applications that help businesses grow. The <b>Making</b> page is a reflection on my previous career as well as my desire to build physical projects with my hands. On the <b>Managing</b> page you will find projects that I have spearheaded as a team leader or manager. Finally on the <b>Learning</b> page is my contribution to the future of our society.</p>
            <p id='welcomeText'>Feel free to check out any of the links for my social or git-repository sites. I’ve also added a contact button for you to send me a message. I hope you enjoy and feel free to reach out with any questions!</p>
            <h3>Featured Articles</h3>
            <div>
              <ControlledCarousel />
            </div>
          </div>
          <div className='side-column'>
            <div id='siderIcon'>
              <ContactCard />
            </div>
            {/* <div id='siderIcon'>
              <ModalResume />
            </div> */}
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