import React, { Component } from 'react';

import PostView from '../components/PostView';

class PostList extends Component {
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
        <PostView />
      </div>
    )
  }
};

export default PostList;