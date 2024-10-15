import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Property from './Property';


function Dashproperty(props,handleClose,selectedPropertyId) {
  const { selectedProperty, show, onHide } = props;
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
    <Modal
    {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Property propertyId={selectedPropertyId}/>
      </Modal.Body>
    </Modal>
    </>
    
  );
}

export default Dashproperty;