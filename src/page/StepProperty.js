import StepperProperty from '@/page/StepperProperty';
import Modal from 'react-bootstrap/Modal';
import React from 'react'


export default function StepProperty(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>
        <h6 classname = "text-center">Add New Property</h6>
        </Modal.Header>
        <Modal.Body>
          <StepperProperty onHide={props.onHide}/>
        </Modal.Body>
      </Modal>
    );
  }
