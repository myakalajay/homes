import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginPopup from './LoginPopup';
import { useSelector } from 'react-redux';


function Login(props,handleClose) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <>
    {!isLoggedIn && <Modal
    {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
         <LoginPopup isLoggedIn={isLoggedIn} />
      </Modal.Body>
    </Modal>
}
    </>
    
  );
}

export default Login;