import React, { Component } from 'react';


import Card from 'react-bootstrap/Card';

import GoG from '../assets/images/GoGBlindfoldSS.png';

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
            <Card className="text-center" style={{ width: '75%' }}>
                <Card.Img variant="top" src={GoG} />
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