import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

import MeBW from '../assets/resume/HeadshotWebBW.jpg';
import MeColor from '../assets/resume/HeadshotWebColor.jpg';

import '../styles/style.css';

class About extends Component {
  constructor (props) {
    super(props)
    this.state = { pageId: "about" }
  }
  
  render() {
    
    let linkButton = <a href='/admin' className="btn btn-secondary">Admin Page</a>;

    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='left-column'>
          </div>
          <div className='center-column'>
            <h2>About Me</h2>
            <div className='container'>
              <img id='headShot' src={MeColor}></img>
              <h3>Full Stack Engineer / Project Manager</h3>
              <h5>Sherwood, OR - 818.653.5213</h5>
            </div>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
          </div>
          <div className='right-column'>
            {linkButton}
          </div>
        </div>
      </div>
    )
  }
};

export default About;