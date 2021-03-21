import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

import '../styles/style.css';

class Manage extends Component {
  constructor(props) {
    super(props)
    this.state = { pageId: "managing" }
  }

  render() {
    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='left-column'>
          </div>
          <div className='center-column'>
            <h2>Managing</h2>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
          </div>
          <div className='right-column'>
          </div>
        </div>
      </div>
    )
  }
};

export default Manage;