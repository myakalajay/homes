
import Modal from 'react-bootstrap/Modal';
import Quickquote from './Quickquote';

function Quickstep(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>
      <h6 classname = "text-center">Quick Quotes</h6>
      </Modal.Header>
      <Modal.Body>
        <Quickquote/>
      </Modal.Body>
    </Modal>
  );
}

export default Quickstep;