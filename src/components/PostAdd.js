import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { API, Storage } from 'aws-amplify';
import { createPortfolioPost as createPostMutation } from '../graphql/mutations.js';

const initialFormState = { page: '', title: '', intro: '', body: '', featured: false, keywords: '', attachment: '', archive: false }

function PostAdd() {
  const [post, setPost] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
 
  useEffect(() => {}, []);

  async function createPost() {
    try {
      await API.graphql({ query: createPostMutation, variables: { input: formData } });
      if (formData.attachment) {
        const attachment = await Storage.get(formData.attachment);
        formData.attachment = attachment;
      }
      setPost([ ...post, formData ]);
      setFormData(initialFormState);
    } catch (err) {
      console.log('Error creating post');
      console.log(err);
    } 
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, attachment: file.name });
    await Storage.put(file.name, file);
  }
  
    return (
      <Card className="text-center" style={{ width: '24rem' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Title</Form.Label>
            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'title': e.target.value })} value={formData.title} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Post Intro</Form.Label>
            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'intro': e.target.value })} value={formData.intro} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Post Body</Form.Label>
            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'body': e.target.value })} value={formData.body} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Keywords</Form.Label>
            <Form.Control as="textarea" rows="1" onChange={e => setFormData({ ...formData, 'keywords': e.target.value })} value={formData.keywords} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Post Location</Form.Label>
            <Form.Control as="select" onChange={e => setFormData({ ...formData, 'page': e.target.value })} value={formData.page} >
              <option value={"making"}>Making</option>
              <option value={"managing"}>Managing</option>
              <option value={"coding"}>Coding</option>
              <option value={"learning"}>Learning / STEAM</option>
              <option value={"about"}>About Me</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlCheckbox1">
            <Form.Label>Featured Post</Form.Label>
            <Form.Control type="checkbox" rows="1" onChange={e => setFormData({ ...formData, 'featured': e.target.value })} value={ true } />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlFile1">
            <Form.Label>Upload File</Form.Label>
            <Form.File type="file" onChange={onChange}/>
          </Form.Group>
          <Button variant="primary" onClick={createPost}>
            Submit Post
          </Button>
        </Form>
      </Card.Body>
      </Card>
    )
  
};

export default PostAdd;