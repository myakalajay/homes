
import Modal from 'react-bootstrap/Modal';
import StepperScreen from './StepperScreen';
import StepperProperty from '@/page/StepperProperty';
import StepperLoan from '@/page/StepperLoan';


function Step(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fixed
    >
      <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>
      <h6 classname = "text-center">EXPLORE YOUR HOME LOAN OPTIONS</h6>
      </Modal.Header>
      <Modal.Body>
        <StepperScreen/>
      </Modal.Body>
    </Modal>
  );
}

export default Step;