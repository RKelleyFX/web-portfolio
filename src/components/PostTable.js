import React from "react";

import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";

class PostTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    render() {

        return (
            <div>

                <Card>
                    <Card.Title as="h3">Posts</Card.Title>
                    <Card.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Post Title</th>
                                    <th>Post Page</th>
                                    <th>Post Date</th>
                                    <th>Post Archived</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Post Title</td>
                                    <td>Post Page</td>
                                    <td>Post Date</td>
                                    <td><input type='checkbox'></input></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default PostTable;