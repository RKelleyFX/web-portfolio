import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
import PageIntro from '../components/PageIntro';

//TEMP IMPORTS
import Card from 'react-bootstrap/Card';
import WFHome from '../assets/images/WFHome.png';
import WFContact from '../assets/images/WFContact.png';
import WFAdmin from '../assets/images/WFAdmin.png';

class Design extends Component {
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
          <h2>Designing</h2>
          <PageIntro />
          <Card className="text-center" style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={WFHome} />
                  <Card.Img variant="top" src={WFContact} />
                  <Card.Img variant="top" src={WFAdmin} />
                  <Card.Body>
                    <Card.Title>Wireframes Using Balsamiq</Card.Title>
                    <Card.Text>
                      Here are some wireframes of the pages and components that I will need to build my portfolio. Creating a visual representation allows me to work on navigation and routing as well as components that are needed in order to build a functional SPA.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
            </Card>
        {/*<h5>CAD Design</h5>
        <h5>Web Development</h5>
        <h5>Special Effects Technician</h5>*/}
        </div>
      </div>
    )
  }
};

export default Design;