import React from "react";

import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

class ContactTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contacts: [] }
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    componentDidMount() {
        this.fetchContacts();
    }

    async fetchContacts() {
        try {
            const apiData = await API.graphql({ query: queries.listContacts, variables: {} });
            this.setState({ contacts: apiData.data.listContacts.items });
        } catch (err) {
            console.log('Error fetching page intro');
            console.log(err);
        }
    }

    deleteContact() {

    }

    render() {

        const contacts = this.state.contacts;

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
                                {contacts.map(c => (
                                    <tr key={c.id}>
                                        <td>Date Created</td>
                                        <td>{c.firstName} {c.lastName}</td>
                                        <td>{c.email}</td>
                                        <td>{c.phone}</td>
                                        <td>{c.contactReason}</td>
                                        <td>{c.message}</td>
                                        <td><button name={c.id} onClick={this.deleteContact} >X</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}

export default ContactTable;