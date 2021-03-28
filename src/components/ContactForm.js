import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

import ContactIcon from '../assets/icons/contact.png';

import { API } from 'aws-amplify';
import { createContact as createContactMutation } from '../graphql/mutations.js';

const initialFormState = { firstName: '', lastName: '', phone: '', email: '', message: '', contactReason: '' }

function ContactForm() {
  const [contact, setContact] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function contactSubmit() {
    try {
      await API.graphql({ query: createContactMutation, variables: { input: formData } });
      setContact([...contact, formData]);
      setFormData(initialFormState);
      handleClose();
    } catch (err) {
      console.log('Error updating page intro');
      console.log(err);
    }
  }

  return (
    <div>
      <img id='contactIcon' src={ContactIcon} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} size='med' animation={false}>
        <Modal.Body>
          <Row>
            <Col xs lg="1"></Col>
            <Col xs lg="auto">
              <Card className="text-center" style={{ width: '24rem' }}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'firstName': e.target.value })} value={formData.firstName} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'lastName': e.target.value })} value={formData.lastName} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'email': e.target.value })} value={formData.email} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'phone': e.target.value })} value={formData.phone} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'message': e.target.value })} value={formData.message} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Reason for Contact</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={e => setFormData({ ...formData, 'contactReason': e.target.value })}
                        value={formData.contactReason}
                      >
                        <option>Please Select a Reason</option>
                        <option value={"Hi"}>Just Saying Hi</option>
                        <option value={"Build"}>Need Something Built</option>
                        <option value={"Design"}>Need Design Input</option>
                        <option value={"Help"}>Need Some Guidance</option>
                        <option value={"Discuss"}>Want to Discuss Something</option>
                        <option value={"Other"}>Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={contactSubmit}>
                      Contact Me
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="1"></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default ContactForm;