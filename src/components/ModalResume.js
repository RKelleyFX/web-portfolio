import React, { useState } from 'react';

import '../styles/style.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from '../assets/resume/RyanKelleyResumeWD.pdf';

//import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ModalResume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        My Resume
      </Button>

      <Modal show={show} onHide={handleClose} size='lg' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs lg="1"></Col>
            <Col xs lg="auto">
              <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {
                  Array.from(
                    new Array(numPages),
                    (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        className='pdfView'
                      />
                    ),
                  )
                }
              </Document>
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
    </>
  );
};

export default ModalResume;