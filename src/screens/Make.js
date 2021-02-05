import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

import PageIntro from '../components/PageIntro';
import PostView from '../components/PostView';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { NAVI_LOCATION } from '../actions/actions';

class Make extends Component {
  constructor(props) {
    super(props)
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    this.setNaviState();
  }

  setNaviState() {
    //useDispatch({ type: NAVI_LOCATION, payload: 'fabrication' })
  };

  render() {
    //const name = useSelector(state => state.navPage);

    return (
      <div>
        <NaviBar />
        <div className='row'>
          <div className='left-column'>
            <p></p>
          </div>
          <div className='center-column'>
            <h2>Making</h2>
            <PageIntro />
            <PostView />
            {/*<h5>Magic Castle</h5>
          <h5>Farie Doors</h5>
          <h5>Space Selfie</h5>*/}
            {/*<h5>{name}</h5>*/}
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