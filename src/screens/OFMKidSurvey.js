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
        this.state = { pageId: "survey" }
    }

    render() {
        return (
            <div>
                <NaviBar />
                <div className='row'>
                    <div className='left-column'></div>
                    <div className='center-column'>
                        <h2>Survey</h2>
                        {/* <PageIntro pageId={this.state.pageId}/> */}
                        <Row>
                            <Col xs lg="1"></Col>
                            <Col xs lg="auto">
                                <Card className="text-center" style={{ width: '24rem' }}>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control as="textarea" rows="1" required="required" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control as="textarea" rows="1" required="required" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea2">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" required="required" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Number of Children</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select Quantity</option>
                                                    <option value={"1"}>1</option>
                                                    <option value={"2"}>2</option>
                                                    <option value={"3"}>3</option>
                                                    <option value={"4"}>4</option>
                                                    <option value={"5"}>5</option>
                                                    <option value={"5"}>More then 5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant="primary" >
                                                Next Step
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs lg="1"></Col>
                        </Row>
                        <OFMSurvParent pageId={this.state.pageId} />
                        <OFMSurvChild pageId={this.state.pageId} />
                    </div>
                    <div className='right-column'></div>
                </div>
            </div>
        )
    }
};

export default OFMSurvey;