import React, { Component } from 'react';

import { API, Storage } from 'aws-amplify';
import * as queries from '../graphql/queries';

import '../styles/style.css';

class PostAdd extends Component {
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
            const apiData = await API.graphql({ query: queries.listPortfolioPosts, variables: { filter: { page: { eq: this.props.pageId } } } });
            const postsFromAPI = apiData.data.listPortfolioPosts.items;
            await Promise.all(postsFromAPI.map(async p => {
                if (p.attachment) {
                    const attachment = await Storage.get(p.attachment);
                    p.attachment = attachment;
                }
                return p;
            }))
            this.setState({ posts: postsFromAPI });
        } catch (err) {
            console.log('Error fetching page intro');
            console.log(err);
        }
    }

    render() {

        const posts = this.state.posts;

        return (
            <div>
                {posts.map(p => (
                    <div className='post-card' key={p.id}>
                        <div className='post-header'>

                            <div className='post-content'>
                                <div className="slideshow-container">
                                    { p.attachment && <img id='post-img' src={p.attachment} /> }
                                </div>
                            </div>

                            <div className='post-content'>
                                <div id='post-title'>
                                    <h3>{p.title}</h3>
                                </div>
                                <div id='post-body'>
                                    <p>{p.intro}</p>
                                </div>
                            </div>

                        </div>
                        <div id='post-body'>
                            <p>{p.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

export default PostAdd;