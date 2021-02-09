import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

import PostAdd from '../components/PostAdd';
import ContactTable from '../components/ContactTable';
import PageIntroMod from '../components/PageIntroMod';
import PostTable from '../components/PostTable';

class Admin extends Component {
  constructor(props) {
    super(props)
    //this.state = { value: false }
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
            <h2>Administration</h2>
            <div className='container'>
              <PostAdd /> 
              <ContactTable />
              <PageIntroMod />
              <PostTable />
            </div>
          </div>
          <div className='right-column'></div>
        </div>
      </div>
    )
  }
};

export default Admin;