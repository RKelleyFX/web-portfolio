import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PostAdd extends Component {
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
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Post Title</Card.Title>
                    <Card.Text>
                    Some text that describes the project in detail. This is pulled from the main input field from the new post form.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
};

export default PostAdd;