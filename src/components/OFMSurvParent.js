import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

import { API } from 'aws-amplify';
import { createSurveyOfmParent as createParentMutation } from '../graphql/mutations.js';

class OFMSurvParent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            fName: this.props.fName,
            lName: this.props.lName,
            email: this.props.email,
            stem: '', 
            education: '', 
            spouse: '', 
            college: '', 
            tech: '', 
            dream: '', 
            dreamAge: '' 
        }
        this.parentSubmit = this.parentSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.props.fName, this.props.lName)
    }

    async parentSubmit(event) {
        try {
            await API.graphql({ query: createParentMutation, variables: { input: this.state } });
        } catch (err) {
            console.log('Error saving parent info');
            console.log(err);
        }

        event.preventDefault()
        const { childCall } = this.props
        childCall()
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='left-column'></div>
                    <div className='center-column'>
                        <h2>Parent Info</h2>
                        <Row>
                            <Col xs lg="1"></Col>
                            <Col xs lg="auto">
                                <Card className="text-center" style={{ width: '40rem' }}>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>What is your understanding of STEM or STEAM curriculums in an educational setting?</Form.Label>
                                                <Form.Control as="textarea" rows="3" onChange={e => this.setState({ stem: e.target.value })} value={this.state.stem} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What is your highest education level?</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    onChange={e => this.setState({ education: e.target.value })}
                                                    value={this.state.education}
                                                >
                                                    <option>Please Select</option>
                                                    <option value={"HS"}>Highschool or GED</option>
                                                    <option value={"Cert"}>Certificate</option>
                                                    <option value={"Assoc"}>Associate</option>
                                                    <option value={"Bach"}>Bachelor</option>
                                                    <option value={"Mast"}>Master</option>
                                                    <option value={"PhD"}>PhD</option>
                                                    <option value={"Other"}>Other</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What is your spouse's highest education level?</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    onChange={e => this.setState({ spouse: e.target.value })}
                                                    value={this.state.spouse}
                                                >
                                                    <option>Please Select</option>
                                                    <option value={"HS"}>Highschool or GED</option>
                                                    <option value={"Cert"}>Certificate</option>
                                                    <option value={"Assoc"}>Associate</option>
                                                    <option value={"Bach"}>Bachelor</option>
                                                    <option value={"Mast"}>Master</option>
                                                    <option value={"PhD"}>PhD</option>
                                                    <option value={"Other"}>Other</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>How likely would you recommend a college education to your children?</Form.Label>
                                                <Form.Check inline type="radio" label="Highly Unlikely" id="1" name='college' onChange={e => this.setState({ college: e.target.id })} value={this.state.college} />
                                                <Form.Check inline type='radio' label="Unlikely" id="2" name='college' onChange={e => this.setState({ college: e.target.id })} value={this.state.college} />
                                                <Form.Check inline type="radio" label="Indifferent" id="3" name='college' onChange={e => this.setState({ college: e.target.id })} value={this.state.college} />
                                                <Form.Check inline type='radio' label="Likely" id="4" name='college' onChange={e => this.setState({ college: e.target.id })} value={this.state.college} />
                                                <Form.Check inline type="radio" label="Highly Likely" id="5" name='college' onChange={e => this.setState({ college: e.target.id })} value={this.state.college} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea2">
                                                <Form.Label>How likely would you recommend a technical degree to your children?</Form.Label>
                                                <Form.Check inline type="radio" label="Highly Unlikely" id="1" name='tech' onChange={e => this.setState({ tech: e.target.id })} value={this.state.tech} />
                                                <Form.Check inline type='radio' label="Unlikely" id="2" name='tech' onChange={e => this.setState({ tech: e.target.id })} value={this.state.tech} />
                                                <Form.Check inline type="radio" label="Indifferent" id="3" name='tech' onChange={e => this.setState({ tech: e.target.id })} value={this.state.tech} />
                                                <Form.Check inline type='radio' label="Likely" id="4" name='tech' onChange={e => this.setState({ tech: e.target.id })} value={this.state.tech} />
                                                <Form.Check inline type="radio" label="Highly Likely" id="5" name='tech' onChange={e => this.setState({ tech: e.target.id })} value={this.state.tech} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                                <Form.Label>Do you have a career path or dream for any of your children, if so what?</Form.Label>
                                                <Form.Control as="textarea" rows="1" onChange={e => this.setState({ dream: e.target.value })} value={this.state.dream} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea4">
                                                <Form.Label>At what age were they when you thought of this?</Form.Label>
                                                <Form.Control as="textarea" rows="1" onChange={e => this.setState({ dreamAge: e.target.value })} value={this.state.dreamAge} />
                                            </Form.Group>
                                            <Button variant="primary" onClick={this.parentSubmit}>
                                                Child Info
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs lg="1"></Col>
                        </Row>
                    </div>
                    <div className='right-column'></div>
                </div>
            </div>
        )
    }
};

export default OFMSurvParent;
