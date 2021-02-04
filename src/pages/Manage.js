import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';

//TEMP IMPORTS
import Card from 'react-bootstrap/Card';
import Kanban from '../assets/images/Kanban.png';

class Manage extends Component {
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
        <div className='container'>
          <h2>Doing</h2>
          <PageIntro />
          <Card className="text-center" style={{ width: '24rem' }}>
            <Card.Img variant="top" src={Kanban} />
            <Card.Body>
              <Card.Title>Kanban using Trello</Card.Title>
              <Card.Text>
                Over the years I have used Trello for tracking tasks and project progression. It was fitting to find that a Kanban board uses a similar format. Using my wireframes I was able to extract components that need to be built as well as functions that I needed to work out. My goal is to find a board structure that allows me to organize tickets based off of type of development required as well as linking card dependencies.
                    </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          {/*<h5>Project Management</h5>
        <h5>Full Scale Effects</h5>
        <h5>Special Effects Coordinator</h5>*/}
        </div>
      </div>
    )
  }

};

export default Manage;