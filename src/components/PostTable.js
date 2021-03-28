import React from "react";

import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Moment from 'moment';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries'

class PostTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    componentDidMount() {
        this.fetchPosts();
    }

    async fetchPosts() {
        try {
            const apiData = await API.graphql({ query: queries.listPortfolioPosts, variables: {} });
            this.setState({ posts: apiData.data.listPortfolioPosts.items });
        } catch (err) {
            console.log('Error fetching page intro');
            console.log(err);
        }
    }

    render() {

        const posts = this.state.posts;

        const rows = posts.map(p => (
            <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.page}</td>
                <td>
                    {Moment(p.createdAt).format('MM-DD-YYYY')}
                </td>
                <td><input type='checkbox'></input></td>
            </tr>
        ));

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
                                {rows}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default PostTable;