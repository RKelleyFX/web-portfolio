import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PostAdd extends Component {
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
            <Form.Label>Post Title</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Post Body</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Post Location</Form.Label>
            <Form.Control as="select"  ref={this.priority}>
              <option value={1}>Making</option>
              <option value={2}>Doing</option>
              <option value={3}>Designing</option>
              <option value={4}>The Future</option>
              <option value={5}>About Me</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary">
            Submit Post
          </Button>
        </Form>
      </Card.Body>
      </Card>
    )
  }
};

export default PostAdd;