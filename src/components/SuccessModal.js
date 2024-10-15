import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SuccessModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton style={{ backgroundColor: '#AB1331' }}>
                <Modal.Title style={{ color: '#FFFFFF' }}>Feedback Submitted</Modal.Title> {/* Title color updated */}
            </Modal.Header>
            <Modal.Body>
                Thank you for Your Inputs! Our team will verify and reach out to you.
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="primary" 
                    onClick={onHide} 
                    style={{ backgroundColor: '#AB1331', borderColor: '#AB1331' }} // Button color updated
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuccessModal;
