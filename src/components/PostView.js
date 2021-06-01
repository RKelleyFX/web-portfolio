import React, { Component } from 'react';

import { API, Storage } from 'aws-amplify';
import * as queries from '../graphql/queries';

import MoreIcon from '../assets/icons/more.png'
import '../styles/style.css';

class PostView extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [], expand: false, viewId: 'blank', postBody: ''}
        this.morePost = this.morePost.bind(this)
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
            console.log('Error fetching portfolio post');
            console.log(err);
        }
    }

    async morePost(body, event) {
        if (this.state.expand === false) {
            this.setState({ 
                expand: true, 
                postBody: body,
                viewId: event.target.name
            });
        } else {
            this.setState({
                expand: false
            })
        }
    }

    render() {
        const expand = this.state.expand;
        const posts = this.state.posts;
        const postBody = this.state.postBody;
        const viewId = this.state.viewId;
        let expandPost;

        if (expand) {
            expandPost = (
                <div>
                   {postBody}
                </div>
            )
        } else {
            expandPost = (
                <div></div>
            )
        }

        return (
            <div>
                {posts.map(p => (
                    <div className='post-card' key={p.id}>
                        <div className='post-header'>

                            <div className='post-content'>
                                <div className="slideshow-container">
                                    { p.attachment && <img id='post-img' alt="Post Attachment" src={p.attachment} /> }
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
                            <div>
                                {
                                    p.body !== ""
                                    ? <img id='moreIcon' alt="More" src={MoreIcon} name={p.id} onClick={(e) => this.morePost(p.body, e)} />
                                    : <div></div>
                                }    
                            </div>
                            { p.id === viewId ? expandPost : "" }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

export default PostView;