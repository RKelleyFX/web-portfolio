import React, { Component } from 'react';

import { Form, Button, Container, Col } from 'react-bootstrap';

// Routing Imports
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
  };
  }

  componentDidMount() {

  }

  login = () => {
    let user = this.user.current.value;
    let password = this.password.current.value;
    if (JSON.stringify(user) == 'rkelleyfx'){
      if (JSON.stringify(password) == 'abc123'){
        alert("Login Good - Redirect")
      } else {
        alert("Incorrect Password")
      }
    } else {
      alert("User Does Not Exist")
    }
  };

  render() {
    return (
      <div>
        <Container id="lCont1">
          <Form >
            <h1 className="mb-5"> Login </h1>

            <Form.Group  >
              <Form.Label className="float-left" > User Name: </Form.Label >
              <Form.Control type="user" placeholder="Enter User Name" ref={this.user} />
            </Form.Group >

            <Form.Group   >
              <Form.Label className="float-left" > Password: </Form.Label>
              <Form.Control type="password" placeholder="Enter Password" ref={this.password} />
            </Form.Group >

            <Container>
              <Col className="mt-4">
                <Button type="button" className="btn btn-secondary mr-3 mt-2" onClick={this.login}>
                  Login
                </Button>
              </Col>
            </Container>

          </Form>
        </Container >
      </div>
    )
  }
};

export default LogIn;