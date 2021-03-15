import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

class Code extends Component {
  constructor(props) {
    super(props)
    this.state = { pageId: "coding" }
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
            <h2>Coding</h2>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
            {/*<h5>CAD Design</h5>
        <h5>Web Development</h5>
        <h5>Special Effects Technician</h5>*/}
          </div>
          <div className='right-column'></div>
        </div>
      </div>
    )
  }
};

export default Code;