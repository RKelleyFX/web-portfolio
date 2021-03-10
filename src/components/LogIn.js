import React, { Component } from 'react';

import { Form, Button, Container, Col } from 'react-bootstrap';

import '../styles/style.css'

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
    if (JSON.stringify(user) === 'rkelleyfx') {
      if (JSON.stringify(password) === 'abc123') {
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
      <div className='container-login'>
        
        <div>
          <p id="welcomeText"> This is a basic login function that will allow me to access to the backend functions of my portfolio. This will allow me to create new posts to the website as well as access any contacts that were submitted on the website.</p>
        </div>

        <form>
            <div className="container">

              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required></input>

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>

              <button type="submit">Login</button>

            </div>
        </form>

      </div>
    )
  }
};

export default LogIn;