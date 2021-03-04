import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { API } from 'aws-amplify';
import { createContact as createContactMutation} from '../graphql/mutations.js';

class ContactForm extends Component {
  constructor (props) {
    super(props);
    this.fName = React.createRef();
    this.lName = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
    this.message = React.createRef();
    this.reason = React.createRef();
    this.state = { visitor: "" }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }

  contactSubmit = () => {
    var data = JSON.stringify({
      "firstName":this.fName.current.value,
      "lastName":this.lName.current.value,
      "email":this.email.current.value,
      "phone":this.phone.current.value,
      "message":this.message.current.value,
      "contactReason":this.reason.current.value
    });
    //if (!formData.name || !formData.description) return;
    API.graphql({ query: createContactMutation, variables: { input: data } });
    //setNotes([ ...notes, formData ]);
    //setFormData(initialFormState);

    /* // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        "firstName":this.fName.current.value,
        "lastName":this.lName.current.value,
        "email":this.email.current.value,
        "phone":this.phone.current.value,
        "message":this.message.current.value,
        "reason":this.reason.current.value
    });
    this.setState({ visitor : (this.fName.current.value + this.lName.current.value) });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://c7pcclcqs3.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error)); */
  }
  
  render() {
    return (
      <Card className="text-center" style={{ width: '24rem' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>First Name</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.fName} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.lName} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Email</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.email} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>Phone</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.phone} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" ref={this.message} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Reason for Contact</Form.Label>
            <Form.Control as="select"  ref={this.reason}>
              <option value={"Hi"}>Just Saying Hi</option>
              <option value={"Build"}>Need Something Built</option>
              <option value={"Design"}>Need Design Input</option>
              <option value={"Help"}>Need Some Guidance</option>
              <option value={"Discuss"}>Want to Discuss Something</option>
              <option value={"Other"}>Other</option>  
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={this.contactSubmit}>
            Contact Me
          </Button>
        </Form>
      </Card.Body>
      </Card>
    )
  }
};

export default ContactForm;