import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PostAdd extends Component {
  constructor (props) {
    super(props)
    this.title = React.createRef();
    this.intro = React.createRef();
    this.body = React.createRef();
    this.keyword = React.createRef();
    this.postLoc = React.createRef();
    this.feature = React.createRef();
    this.attachment = React.createRef();
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    
  }

  submitPost = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "title":this.title.current.value,
      "intro":this.intro.current.value,
      "body":this.body.current.value,
      "keyword":this.keyword.current.value,
      "postLoc":this.postLoc.current.value,
      "feature":this.feature.current.value,
      "attachment":this.attachment.current.value
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://dppxez74rh.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
    .then(response => { response.text();
      this.title.current.value = "";
      this.intro.current.value = "";
      this.body.current.value = "";
      this.keyword.current.value = "";
      this.postLoc.current.value = "making";
      this.feature.current.value = false ;
      this.attachment.current.value = ""
    })
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
  }
  
  render() {
    return (
      <Card className="text-center" style={{ width: '24rem' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Title</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.title}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Post Intro</Form.Label>
            <Form.Control as="textarea" rows="3" ref={this.intro}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Post Body</Form.Label>
            <Form.Control as="textarea" rows="3" ref={this.body}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Keywords</Form.Label>
            <Form.Control as="textarea" rows="1" ref={this.keyword}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Post Location</Form.Label>
            <Form.Control as="select"  ref={this.postLoc}>
              <option value={"making"}>Making</option>
              <option value={"doing"}>Doing</option>
              <option value={"designing"}>Designing</option>
              <option value={"future"}>The Future</option>
              <option value={"about"}>About Me</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlCheckbox1">
            <Form.Label>Featured Post</Form.Label>
            <Form.Check type="checkbox" ref={this.feature}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlFile1">
            <Form.Label>Upload File</Form.Label>
            <Form.File type="file" ref={this.attachment}/>
          </Form.Group>
          <Button variant="primary" onClick={this.submitPost}>
            Submit Post
          </Button>
        </Form>
      </Card.Body>
      </Card>
    )
  }
};

export default PostAdd;