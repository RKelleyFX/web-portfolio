import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { API } from 'aws-amplify';
import { getPageIntro } from '../graphql/queries';
import { createPageIntro as createIntroMutation } from '../graphql/mutations'; 

const initialFormState = { page: '', body: ''}

function PageIntroMod () {
    const [intro, setIntro] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchIntro();
    }, []);

    async function fetchIntro() {
        const apiData = await API.graphql({ query: getPageIntro, variables: { page: 'home'}});
        setIntro(apiData.data.getPageIntro.items);
        
    }

    async function updateIntro() {
        if (!formData.page || !formData.body) return;
        await API.graphql({ query: createIntroMutation, variables: { input: formData } });
        setIntro([ ...intro, formData ]);
        setFormData(initialFormState); 
    }

    
        return (

            <Card className="text-center" style={{ width: '24rem' }}>
                <Card.Title as="h3">Page Introduction</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Introduction for Page</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange={e => setFormData({ ...formData, 'page': e.target.value})}
                                value={formData.page}
                            >
                                <option>Select Page</option>
                                <option value={"home"}>Home</option>
                                <option value={"making"}>Making</option>
                                <option value={"doing"}>Doing</option>
                                <option value={"designing"}>Designing</option>
                                <option value={"future"}>The Future</option>
                                <option value={"about"}>About Me</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Intro Body</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows="3" 
                                onChange={e => setFormData({ ...formData, 'body': e.target.value})}
                                value={formData.body}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={updateIntro}>
                            Save Intro
                        </Button>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{intro.page}</Form.Label>
                            <Form.Label>{intro.body}</Form.Label>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        )
    
};

export default PageIntroMod;