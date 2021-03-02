import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PageIntroMod extends Component {
    constructor(props) {
        super(props)
        this.page = React.createRef();
        this.introBody = React.createRef();
        //this.state = { value: false }
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    componentDidMount() {

    }

    updateIntro = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "page":this.page.current.value,
            "introBody":this.introBody.current.value
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw, 
            redirect: 'follow'
        };
        fetch("https://uynimpqet3.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }

    render() {
        return (
            <Card className="text-center" style={{ width: '24rem' }}>
                <Card.Title as="h3">Page Introduction</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Introduction for Page</Form.Label>
                            <Form.Control as="select" ref={this.page}>
                                <option value={"home"}>Home</option>
                                <option value={"making"}>Making</option>
                                <option value={"doing"}>Doing</option>
                                <option value={"designing"}>Designing</option>
                                <option value={"future"}>The Future</option>
                                <option value={"about"}>About Me</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Intro Body</Form.Label>
                            <Form.Control as="textarea" rows="3" ref={this.introBody}/>
                        </Form.Group>
                        <Button variant="primary" onClick={this.updateIntro}>
                            Save Intro
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
};

export default PageIntroMod;