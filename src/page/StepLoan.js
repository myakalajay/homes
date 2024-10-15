import Modal from 'react-bootstrap/Modal';
import React from 'react'
import StepperLoan from '@/page/StepperLoan';


export default function StepLoan(props) {
    const { onHide, ...modalProps } = props;
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{ height: '1000px', maxHeight: '1000px' }} 
      >
        <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>
        <h6 classname = "text-center">Add New Loan</h6>
        </Modal.Header>
        <Modal.Body>
          <StepperLoan onClose={onHide}/>
        </Modal.Body>
      </Modal>
    );
  }