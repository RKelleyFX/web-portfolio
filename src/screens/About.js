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
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }

  //loginComp =() => {
    //this.setState({loginView: true})
  //};
  
  render() {
    
    //const loginRender = this.state.loginView;
    let linkButton = <a href='/admin' className="btn btn-secondary">Admin Page</a>;

    /* if (loginRender) {
      linkButton = <a href='/admin'>Admin Page</a>;
      //loginComp = <LogIn />
    } else {
      //linkButton = <button onClick={this.loginComp}>I Am Me</button>
      linkButton = <a href='/admin' className="btn btn-secondary">I Am Me</a>
    } */
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
            </div>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
            {/*<h5>History</h5>
            <h5>Volunteer</h5>
            <h5>Travel</h5>*/}
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