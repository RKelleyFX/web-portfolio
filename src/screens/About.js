import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import TextField from '../components/PageIntro';
import LogIn from '../components/LogIn';

import MeBW from '../assets/resume/HeadshotWebBW.jpg';
import MeColor from '../assets/resume/HeadshotWebColor.jpg';

import '../styles/style.css';

class About extends Component {
  constructor (props) {
    super(props)
    this.state = { loginView: false, pageId: "about" }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }

  loginComp =() => {
    this.setState({loginView: true})
  };
  
  render() {
    
    const loginRender = this.state.loginView;
    let loginComp, linkButton;

    if (loginRender) {
      linkButton = <a href='/admin'>Admin Page</a>;
      //loginComp = <LogIn />
    } else {
      //linkButton = <button onClick={this.loginComp}>I Am Me</button>
      linkButton = <a href='/admin' className="btn btn-secondary">I Am Me</a>
    }

    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='main-column'>
            <h2>About Me</h2>
            <div className='container'>
              <img id='headShot' src={MeColor}></img>
            </div>
            <PageIntro pageId={this.state.pageId}/>
            <p id='pageText'>I've had the greatest opportunity spending the first few years of my professional career creating the same movie magic that I have loved seeing as a child. Throughout these experiences I have grown an affinity for the spirit of the small businesses that lie at the heart of our society. My hope is to use my new skills as a Web Developer to help create tools for these businesses to succeed. </p>
            {/*<h5>History</h5>
            <h5>Volunteer</h5>
            <h5>Travel</h5>*/}
          </div>
          <div className='side-column'>
            <div>{linkButton}</div>
            <div>{loginComp}</div>
          </div>
        </div>
      </div>
    )
  }
};

export default About;