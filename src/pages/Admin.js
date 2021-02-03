import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

import PostAdd from '../components/PostAdd';
import ContactTable from '../components/ContactTable';
import PageIntroMod from '../components/PageIntroMod';
import PostTable from '../components/PostTable';

import '../styles/style.css';

class Admin extends Component {
  constructor (props) {
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
        <div className='container'>
          <h2>Administration</h2>
          <PostAdd />
          <ContactTable />
          <PageIntroMod />
          <PostTable />
        </div>
      </div>
    )
  }
};

export default Admin;