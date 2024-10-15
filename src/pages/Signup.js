import React,{useState,useEffect,useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
// import React from 'react'
export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [createpassword, setCreatePassword]=useState('');
    const [confirmpassword , setConfirmPassword]=useState('');
    const [formError, setFormError] = useState('');
  const [lasterror , setLastError]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message,setMessage]=useState('')
  const userType = useSelector(state=> state.user.usertype);

    const handleRegister = async () => {
        setPasswordError('');
        setFormError('');
        setEmailError('');
        setLastError('');
     
        if (!email) {
          setEmailError('Enter your email*');
          return;
        }
       
        if (!createpassword) {
          setPasswordError('Enter your password*');
          return;
        }
     
        if (!firstname) {
          setFormError('Enter your first name*');
          return;
        }
     
        if (!lastname) {
          setLastError('Enter your Last name*');
          return;
        }
     
        try {
          const response  = await fetch(`${process.env.NEXT_API_URL}/api/v1/auth/validateEmail`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email,usertype: 'user' }),
          });
         
         
          const data = await response.json();
     
                if (data.success && data.message === 'User  exist') {
                    setEmailError('Account already exists with this email.');
                    return;
                }
     
        const registrationResponse = await fetch(`${process.env.NEXT_API_URL}/api/v1/auth/register/email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             firstName: firstname,
             lastname: lastname,
             email:email,
             password: createpassword,
             usertype: 'user'
            }),
        })
     
        const registrationData = await registrationResponse.json();
     
        if (registrationData.success) {
          console.log(registrationData);
          setShowregisterMessage(true);
        } else {
          setFormError('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        setFormError('An unexpected error occurred.');
    }
    };
    
    const clearMessage = () => {
        setMessage('');
        // setIsErrorMessage(false);
      };
      

  return (
    <div className='row conven-page'>
         {/* <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>
        <h6 classname = "text-center">Sign Up</h6>
        </Modal.Header>
        <Modal.Body> */}
            <div className='col-sm-12 col-md-12 d-flex flex-row justify-content-center'>
        <div className='mt-2 mx-1'>
            <span className='sign-3 mx-3'>Sign Up</span>
          <br/>  
            <span className='sign-2 mx-3'>Enter your credential to access your account</span>
          <div className='d-flex'>
            <div className='mx-3'>
            <span className='name'>First Name<span style={{ color: 'red' }}>*</span></span>
                    <input
                      type='text'
                      className='box2 p-3'
                      style={{fontSize: '15px'}}
                      placeholder='Enter first name'
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      onFocus={clearMessage}
                    />
                    <p className='error-msg' style={{color:"red"}}>{formError}</p>
            </div>
            {/* <p className='error-msg'>{formError}</p> */}
            <div className=''>
              <span className='name'>Last Name<span style={{ color: 'red' }}>*</span></span>
              <input
              type="text"
              placeholder="Enter Last name"
              className='box2 p-3'
              style={{fontSize: '15px'}}
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={clearMessage}
        />
        <p className='error-msg ' style={{color:"red"}}>{lasterror}</p>
            </div>
          </div>
          <div style={{marginLeft:"17px"}}>
            <span className='name'>Your Email<span style={{ color: 'red' }}>*</span></span>
            <input
              type="email"
              placeholder="Enter email"
              className='box p-3'
              style={{fontSize: '15px'}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={clearMessage}
        />
         {emailError && <p className="error-msg" style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div className='d-flex mx-3'>
            <div className=''>
              <span className='name'>Create Password<span style={{ color: 'red' }}>*</span></span>
              <input
              type='password'
              placeholder="Enter Password"
                value={createpassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                className='box2 p-3'
              style={{fontSize: '15px'}}
              />
              <p className='error-msg' style={{color:"red"}}>{passwordError}</p>
            </div>
            <div className='mx-3'>
              <span className='name'>Confirm Password<span style={{ color: 'red' }}>*</span></span>
              <input
              type='password'
              placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='box2 p-3'
              style={{fontSize: '15px'}}/>
            </div>
          </div>

          <div className='mx-1' >
            <input type="checkbox" className="form-chck-ipnut mx-3"></input>
            <label for="formcheck" className="form-check-label text-secondary name1"> I agree with the terms of use</label>
          </div>


          <div >
           <button className='button-1 text-center mt-1' onClick={handleRegister}><p className='but text-center mt-1'>Signup</p></button>
           {/* <p className='error-msg '>{formError}</p> */}
          </div>
          {/* <p className='error-msg '>{formError}</p> */}
          <ul>
              <li className='d-flex name1 justify-content-center'>
                <div>Already, i have an account?&nbsp; <a href="#" className='text-center forgot' style={{ color: 'blue', textDecoration: 'none' }}>Sign here</a></div>
                </li>
            </ul>
          {/* <div className='text-center name1'>
          <hr/><p>or<hr/></p>
          </div> */}
          {/* <div className='d-flex align-items-center justify-content-center'>
              <hr className='flex-grow-1 orline' />
              <p className='mx-2 or'>or</p>
              <hr className='flex-grow-1 orline' />
            </div> */}
          {/* <div className='mx-2'>
              <button onClick={handleGoogle} className='google-but'> <img src=".\assets\images\home-page\google.jpg" alt="" className='google-logo' />Login With Google</button>
            </div> */}
          </div>
         
        </div>
        {/* </Modal.Body>
      </Modal> */}
    </div>
  )
}
