import React, { Component } from 'react';

class PostManage extends Component {
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
        <h3>Making Posts</h3>
        <h3>Doing Posts</h3>
        <h3>Designing Posts</h3>
        <h3>The Future Posts</h3>
        <h3>About Me Posts</h3>
        <h3>Archived Posts</h3>
      </div>
    )
  }
};

export default PostManage;