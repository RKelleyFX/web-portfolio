import React, {Component} from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

import '../styles/style.css';

// Redux Imports
import { useSelector, useDispatch, connect } from 'react-redux';
import { NAVI_LOCATION } from '../actions/actions'; 

class Make extends Component {
  constructor(props) {
    super(props)
    this.state = { pageId: "making" }
  }

  render() {
    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='left-column'>
            <p></p>
          </div>
          <div className='center-column'>
            <h2>Making</h2>
            <PageIntro pageId={this.state.pageId}/>
            <PostView pageId={this.state.pageId}/>
          </div>
          <div className='right-column'>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
};

export default Make;