import React from "react";

import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";

class ContactTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    render() {

        return (
            <div>
                <Card>
                    <Card.Title as="h3">Contact Submissions</Card.Title>
                    <Card.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Reason for Contact</th>
                                    <th>Message</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sample Date</td>
                                    <td>Sample Name</td>
                                    <td>Sample Email</td>
                                    <td>Sample Phone</td>
                                    <td>Sample Reason</td>
                                    <td>Sample Message</td>
                                    <td><button>Delete Contact</button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ContactTable;