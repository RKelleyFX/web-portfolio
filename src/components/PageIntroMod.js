import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { API, Storage } from 'aws-amplify';
import { listPageIntros } from '../graphql/queries';
import { createPageIntro as createIntroMutation } from '../graphql/mutations'; 

const initialFormState = { page: 'home', body: ''}

function PageIntroMod () {
    const [intro, setIntro] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchIntro();
    }, []);

    async function fetchIntro() {
        const apiData = await API.graphql({ query: listPageIntros, variables: { filter: { page: { eq: formData.page } } } });
        setIntro(apiData.data.listPageIntros.items);
        setFormData(apiData.data.listPageIntros.items);
    }

    async function updateIntro() {
        try {
            await API.graphql({ query: createIntroMutation, variables: { input: formData } });
            if (formData.icon) {
                const icon = await Storage.get(formData.icon);
                formData.icon = icon;
            }
            setIntro([ ...intro, formData ]);
            setFormData(initialFormState);
        } catch (err) {
            console.log('Error updating page intro');
            console.log(err);
        } 
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, icon: file.name });
        await Storage.put(file.name, file);
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
                                <option value={"home"}>Home</option>
                                <option value={"making"}>Making</option>
                                <option value={"managing"}>Managing</option>
                                <option value={"coding"}>Coding</option>
                                <option value={"learning"}>Learning</option>
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
                        <Form.Group controlId="exampleForm.ControlFile1">
                            <Form.Label>Upload Icon</Form.Label>
                            <Form.File type="file" onChange={onChange}/>
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