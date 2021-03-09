import React, {Component} from 'react';


import NaviBar from '../components/Navbar';

import PageIntro from '../components/PageIntro';
import PostList from '../components/PostList';

// Redux Imports
import { useSelector, useDispatch, connect } from 'react-redux';
import { NAVI_LOCATION } from '../actions/actions'; 

class Make extends Component {
  constructor(props) {
    super(props)
    this.state = { pageId: "making" }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
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
            <PostList pageId={this.state.pageId}/>
            {/*<h5>Magic Castle</h5>
          <h5>Farie Doors</h5>
          <h5>Space Selfie</h5>
            <h5>{name}</h5>*/}
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