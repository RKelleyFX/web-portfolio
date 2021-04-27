import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

class OFMSurvChild extends Component {
    constructor(props) {
        super(props)
        this.state = { age: '', gender: '', activity: '', learnAge: '', childCount: 1}
        this.contactSubmit = this.contactSubmit.bind(this)
    }

    contactSubmit() {
        if (this.state.childCount < this.props.children) {
            let count = this.state.childCount
            this.setState({ childCount: (count + 1) })
        }
        if (this.state.childCount == this.props.children) {
            console.log("Submit Children")
        }


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

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='left-column'></div>
                    <div className='center-column'>
                        <h2>Child Info</h2>
                        <Row>
                            <Col xs lg="1"></Col>
                            <Col xs lg="auto">
                                <Card className="text-center" style={{ width: '50rem' }}>
                                    <Card.Body>
                                        <Form>
                                            <h4>Child {this.state.childCount} of {this.props.children}</h4>
                                            <hr></hr>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>How old is this child?</Form.Label>
                                                <Form.Control as="textarea" rows="1" onChange={e => this.setState({ age: e.target.value })} value={this.state.age} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What is this child's gender?</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    onChange={e => this.setState({ gender: e.target.value })}
                                                    value={this.state.gender}
                                                >
                                                    <option>Please Select</option>
                                                    <option value={"Female"}>Female</option>
                                                    <option value={"Male"}>Male</option>
                                                    <option value={"FemIDMal"}>Female Identifying as Male</option>
                                                    <option value={"MalIDFem"}>Male Identifying as Female</option>
                                                    <option value={"NonBin"}>Non-Binary</option>
                                                    <option value={"N/A"}>Prefer Not to Answer</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea2">
                                                <Form.Label>What kinds of toys or activities did this child play with around the age of 5-10 years old?</Form.Label>
                                                <Form.Check inline type="checkbox" label="Action Figures" id="AF" />
                                                <Form.Check inline type="checkbox" label="Dolls" id="D" />
                                                <Form.Check inline type="checkbox" label="Swords/Guns" id="SG" />
                                                <Form.Check inline type="checkbox" label="Legos" id="L" />
                                                <Form.Check inline type="checkbox" label="Knitting/Sewing" id="KS" />
                                                <Form.Check inline type="checkbox" label="Painting" id="Pa" />
                                                <Form.Check inline type="checkbox" label="Pottery" id="Po" />
                                                <Form.Check inline type="checkbox" label="Cars/Matchbox/HotWheels" id="CMH" />
                                                <Form.Check inline type="checkbox" label="RC Car/Plane/Drone" id="RC" />
                                                <Form.Check inline type="checkbox" label="Tools" id="T" />
                                                <Form.Check inline type="checkbox" label="Model Kits" id="MK" />
                                                <Form.Check inline type="checkbox" label="Cooking" id="C" />
                                                <Form.Check inline type="checkbox" label="Jewlery Making" id="JM" />
                                                <Form.Check inline type="checkbox" label="Board Games" id="BG" />
                                                <Form.Check inline type="checkbox" label="Science Kits" id="SK" />
                                                <Form.Check inline type="checkbox" label="Programming/Electronics" id="PE" />
                                                <Form.Check inline type="checkbox" label="Robotics" id="R" />
                                                <Form.Check inline type="checkbox" label="Video Games" id="VG" />
                                                <Form.Check inline type="checkbox" label="Sports" id="S" />
                                                <Form.Check inline type="checkbox" label="Hiking/Wildlife" id="HW" />
                                                <Form.Check inline type="checkbox" label="Hunting/Fishing" id="HF" />
                                                <Form.Check inline type="checkbox" label="Music/Performing Arts" id="MPA" />
                                                <Form.Check inline type="checkbox" label="Reading/Writing" id="RW" />
                                                <Form.Check inline type="checkbox" label="Photography" id="Ph" />
                                                <Form.Check inline type="checkbox" label="Astronomy" id="A" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>What age (in years) did your child learn to use/do the following? Leave blank if not applicable.</Form.Label>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Scissors</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Hammer</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Screwdriver</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Pliers / Wrench</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Hand Saw</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Screw Gun / Drill Motor</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Reciprocating Saw</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Band Saw</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Table Saw</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Drill Press</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Welding Machine</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Soldering Iron</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Mill or Lathe</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Sewing Machine</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Lawn Mower</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Gardening</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Automotive Maint</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Motorcycle or Quad</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Changing a Tire</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Cooking a Meal</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Meal Planning</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Accounting / Budgeting</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Home Maintenance</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Plumbing / HVAC</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Map or Geolocation</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>First Aid / CPR</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>SLR Camera</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Telescope</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Home Electrical Circuits (110VAC)</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Low Voltage Circuits (Less then 24VDC)</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Advanced Computer Software</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Computer Networking</Form.Label>
                                                        <Form.Control as="textarea" rows="1" />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                            <Button variant="primary" onClick={this.contactSubmit}>
                                                Complete
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

export default OFMSurvChild;