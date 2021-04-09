import React, { useState, useEffect } from 'react';

import PageIntro from '../components/PageIntro';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const initialParentState = { stem: '', education: '', spouse: '', college: '', tech: '', dream: '', dreamAge: '' }

function OFMSurvParent() {
    const [contact, setContact] = useState([]);
    const [formData, setFormData] = useState(initialParentState);

    async function contactSubmit() {
        /*         try {
                  await API.graphql({ query: createContactMutation, variables: { input: formData } });
                  setContact([...contact, formData]);
                  setFormData(initialFormState);
                  handleClose();
                } catch (err) {
                  console.log('Error updating page intro');
                  console.log(err);
                } */
    }

    return (
        <div>
            <div className='row'>
                <div className='left-column'></div>
                <div className='center-column'>
                    <h2>Parent Info</h2>
                    {/* <PageIntro pageId={this.state.pageId}/> */}
                    <Row>
                        <Col xs lg="1"></Col>
                        <Col xs lg="auto">
                            <Card className="text-center" style={{ width: '40rem' }}>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>What is your understanding of STEM or STEAM curriculums in an educational setting?</Form.Label>
                                            <Form.Control as="textarea" rows="3" onChange={e => setFormData({ ...formData, 'stem': e.target.value })} value={formData.stem} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>What is your highest education level?</Form.Label>
                                            <Form.Control
                                                as="select"
                                                onChange={e => setFormData({ ...formData, 'education': e.target.value })}
                                                value={formData.contactReason}
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
                                                onChange={e => setFormData({ ...formData, 'spouse': e.target.value })}
                                                value={formData.spouse}
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
                                            <Form.Check inline type="radio" label="Highly Unlikely" id="1" name='college' onChange={e => setFormData({ ...formData, 'college': e.target.id })} value={formData.college} />
                                            <Form.Check inline type='radio' label="Unlikely" id="2" name='college' onChange={e => setFormData({ ...formData, 'college': e.target.id })} value={formData.college} />
                                            <Form.Check inline type="radio" label="Indifferent" id="3" name='college' onChange={e => setFormData({ ...formData, 'college': e.target.id })} value={formData.college} />
                                            <Form.Check inline type='radio' label="Likely" id="4" name='college' onChange={e => setFormData({ ...formData, 'college': e.target.id })} value={formData.college} />
                                            <Form.Check inline type="radio" label="Highly Likely" id="5" name='college' onChange={e => setFormData({ ...formData, 'college': e.target.id })} value={formData.college} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea2">
                                            <Form.Label>How likely would you recommend a technical degree to your children?</Form.Label>
                                            <Form.Check inline type="radio" label="Highly Unlikely" id="1" name='tech' onChange={e => setFormData({ ...formData, 'tech': e.target.id })} value={formData.tech} />
                                            <Form.Check inline type='radio' label="Unlikely" id="2" name='tech' onChange={e => setFormData({ ...formData, 'tech': e.target.id })} value={formData.tech} />
                                            <Form.Check inline type="radio" label="Indifferent" id="3" name='tech' onChange={e => setFormData({ ...formData, 'tech': e.target.id })} value={formData.tech} />
                                            <Form.Check inline type='radio' label="Likely" id="4" name='tech' onChange={e => setFormData({ ...formData, 'tech': e.target.id })} value={formData.tech} />
                                            <Form.Check inline type="radio" label="Highly Likely" id="5" name='tech' onChange={e => setFormData({ ...formData, 'tech': e.target.id })} value={formData.tech} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea3">
                                            <Form.Label>Do you have a career path or dream for any of your children, if so what?</Form.Label>
                                            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'dream': e.target.value })} value={formData.dream} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea4">
                                            <Form.Label>At what age were they when you thought of this?</Form.Label>
                                            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'dreamAge': e.target.value })} value={formData.dreamAge} />
                                        </Form.Group>
                                        <Button variant="primary" onClick={contactSubmit}>
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

};

export default OFMSurvParent;