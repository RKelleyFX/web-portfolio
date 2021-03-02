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
        <h2>{this.props.pageId} posts</h2>  
        <PostView />
      </div>
    )
  }
};

export default PostList;