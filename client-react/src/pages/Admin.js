import React, { Component } from 'react';

import PostAdd from '../components/PostAdd';
import PostManage from '../components/PostManage';

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
        <PostAdd />
        <PostManage />
      </div>
    )
  }
};

export default Admin;