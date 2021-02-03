import React, { Component } from 'react';

import '../styles/style.css';
import Icon from '../assets/icons/gear.png';

class PageIntro extends Component {
  constructor (props) {
    super(props)
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }
  
// p: in render is to be replaced by conditional render based off page that is navigated to

  render() {
    return (
      <div className='container'>
        <img id='pageIcon' src={Icon}></img>
        <p id='pageText'>This is a text field for rendering the page info from the database. This object is rendered in a 'text field' component. I am going to utilize a state object in redux for tracking which page is rendered, making this component reusable.</p>
      </div>
    )
  }
};

export default PageIntro;