import React, { Component } from 'react';

import NaviBar from '../components/Navbar';
//import PageIntro from '../components/PageIntro';
import OFMSurvParent from '../components/OFMSurvParent';
import OFMSurvChild from '../components/OFMSurvChild';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

class OFMSurvey extends Component {
    constructor(props) {
        super(props)
        this.state = { pageId: "OFMKidSurvey", fName: "", lName: "", email: "", children: "", parentInfo: false, childInfo: false }
        this.contactSubmit = this.contactSubmit.bind(this)
        this.childCard = this.childCard.bind(this)
    }

    contactSubmit() {
        this.setState({ parentInfo: true })
    }

    childCard() {
        this.setState({ childInfo: true })
    }

    render() {
        let renderCard;
        if (this.state.parentInfo === false) {
            renderCard = (
                <Row>
                    <Col xs lg="1"></Col>
                    <Col xs lg="auto">
                        <Card className="text-center" style={{ width: '24rem' }}>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control as="textarea" rows="1" required="required" onChange={e => this.setState({ fName: e.target.value })} value={this.state.fName} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control as="textarea" rows="1" required="required" onChange={e => this.setState({ lName: e.target.value })} value={this.state.lName} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" required="required" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Number of Children</Form.Label>
                                        <Form.Control
                                            as="select"
                                            onChange={e => this.setState({ children: e.target.value })}
                                            value={this.state.children}
                                        >
                                            <option>Select Quantity</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"5"}>More then 5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant="primary" onClick={this.contactSubmit}>
                                        Next Step
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="1"></Col>
                </Row>
            )
        } 
        if (this.state.parentInfo && this.state.childInfo === false) {
            renderCard = (<OFMSurvParent fName={this.state.fName} lName={this.state.lName} email={this.state.email} childCall={this.childCard}/>)
        }
        if (this.state.childInfo) {
            renderCard = (<OFMSurvChild email={this.state.email} children={this.state.children} />)
        }

        return (
            <div>
                <NaviBar />
                <div className='row'>
                    <div className='left-column'></div>
                    <div className='center-column'>
                        <h2>Survey</h2>
                        
                        {/* <PageIntro pageId={this.state.pageId}/> */}

                        { renderCard }

                    </div>
                    <div className='right-column'></div>
                </div>
            </div>
        )
    }
};

export default OFMSurvey;