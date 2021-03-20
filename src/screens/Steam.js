import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

import '../styles/style.css';


class Steam extends Component {
  constructor(props) {
    super(props)
    this.state = { pageId: "learning" }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='left-column'></div>
          <div className='center-column'>
            <h2>Learning - STEAM</h2>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
            {/*<h5>Continuing Education</h5>
        <h5>STEAM</h5>*/}
          </div>
          <div className='right-column'></div>
        </div>
      </div>
    )
  }
};

export default Steam;