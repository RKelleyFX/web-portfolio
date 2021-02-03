import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PageIntroMod extends Component {
    constructor(props) {
        super(props)
        //this.state = { value: false }
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    componentDidMount() {

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
                                <option value={1}>Home</option>
                                <option value={2}>Making</option>
                                <option value={3}>Doing</option>
                                <option value={4}>Designing</option>
                                <option value={5}>The Future</option>
                                <option value={6}>About Me</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Intro Body</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary">
                            Save Intro
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
};

export default PageIntroMod;