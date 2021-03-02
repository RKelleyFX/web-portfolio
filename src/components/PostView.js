import React, { Component } from 'react';

import GoG from '../assets/images/GoGBlindfoldSS.png';

import '../styles/style.css';

class PostAdd extends Component {
    constructor(props) {
        super(props)
        this.state = { slideIndex: 1 }
        //this.newTicketQuery = this.newTicketQuery.bind(this)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            
            <div className='post-card'>
                <div className='post-header'>
                    <div className='post-content'>

                        <div className="slideshow-container">

                            <img id='post-img' src={GoG} />
                            
                        </div>

                    </div>
                    
                    <div className='post-content'>
                        <div id='post-title'>
                            <h3>Post Title</h3>
                        </div>
                        <div id='post-body'>
                            <p>
                                This is an 'in progress' card design. I am utilizing bootstrap for quite a few design elements throughout my application but I did not like the card layouts that bootstrap provides. This is my test card concept.
                            </p>
                        </div>
                    </div>
                </div>
                <div id='post-body'>
                    <p>
                        Donec sit amet commodo nisl, eget luctus urna. Curabitur vulputate dolor sit amet mi fermentum gravida. Duis eu sapien ullamcorper, tempor velit ac, posuere elit. Nunc interdum tellus eu lacus porta mollis. Pellentesque cursus at augue vitae elementum. Nam eu sodales lacus. Aliquam erat volutpat. Praesent sed ex tempor, ultricies sem ut, vestibulum risus. Fusce gravida, urna vel elementum porta, orci nisl ornare elit, sed porttitor purus lacus non diam. Phasellus et nulla at velit varius porta ac nec arcu. Morbi venenatis congue nisl elementum sodales. Duis posuere massa sit amet massa interdum tincidunt. Nullam rutrum urna in lorem consectetur, eget convallis magna condimentum.
                    </p>
                </div>
            </div>

        )
    }
};

export default PostAdd;