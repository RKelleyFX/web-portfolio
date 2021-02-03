import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ContactForm extends Component {
  constructor (props) {
    super(props)
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <Card className="text-center" style={{ width: '24rem' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Email</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>Phone</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Reason for Contact</Form.Label>
            <Form.Control as="select"  ref={this.contactReason}>
              <option value={1}>Just Saying Hi</option>
              <option value={2}>Need Something Built</option>
              <option value={3}>Need Design Input</option>
              <option value={4}>Need Some Guidance</option>
              <option value={5}>Want to Discuss Something</option>
              <option value={6}>Other</option>  
            </Form.Control>
          </Form.Group>
          <Button variant="primary">
            Contact Me
          </Button>
        </Form>
      </Card.Body>
      </Card>
    )
  }
};

export default ContactForm;