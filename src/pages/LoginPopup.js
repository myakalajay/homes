import React,{useState,useEffect,useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData, logout } from '@/redux/authSlice';
import Modal from 'react-bootstrap/Modal';
import { FormLabel, FormControl, FormGroup, Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';
import { Pixelify_Sans } from 'next/font/google';
import store from '@/redux/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { signIn,signOut, useSession } from 'next-auth/react';
 
 
const LoginPopup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [createpassword, setCreatePassword]=useState('');
  const [confirmpassword , setConfirmPassword]=useState('');
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [resetAccount, setResetAccount] = React.useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showResetlogin, setShowResetLogin] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showregisterMessage, setShowregisterMessage] = useState(false);
  const [formError, setFormError] = useState('');
  const [googleRespData,setGoogleRespData] = useState('')
  const [message,setMessage]=useState('')
  const [remember,setRemember]=useState(false)
  const [lasterror , setLastError]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ResetpasswordData, setResetpasswordData] = useState({
    email: '',
    token: '',
    password: '',
    confirmPassword: ''
});
 
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const authState = useSelector((state) => state.auth);
  const userType = useSelector(state=> state.user.usertype);
  const router = useRouter();
  const { data: session } = useSession();
 
  console.log("userType",userType)
 
  const handleChange = (e) => {
    setResetpasswordData({
        ...ResetpasswordData,
        [e.target.name]: e.target.value
    });
};
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
    setResetAccount(false);
    setShowSuccessMessage(false);
    setShowregisterMessage(false);
    setShowResetLogin(false);
   
  };
 
  const handleResetAccount = () => {
    setIsSignIn(false);
    setResetAccount(true);
  };
 
  const handleActiveChange = (value) => {
    setRemember(!remember);
};
 
 
   
  const handleGoogle = async () => {
    // window.location.href = "https://lendauthapi.azurewebsites.net/api/v1/auth/google"
    signIn('google')
 
  };
 
  console.log("GoogleData",googleRespData)
 
  const handleLogin = () => {
   
    fetch(`${process.env.NEXT_API_URL}/api/v1/auth/login/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
    password: password,
    usertype: userType,
  }),
    })
      .then((response) => response.json())
      .then((data) => {
        // res.send(data);
        console.log("data",data)
        const currentTime = new Date().getTime();
        const loginData = {
          email: email,
          token: data.token,
          userid: data.data[0].userid,
          username: data.data[0].username,
          firstname:data.data[0].firstname,
          lastname:data.data[0].lastname
          // expireTime: currentTime + 10 * 60 * 1000, // Set expiration time to 5 minutes from now
        };
        setMessage('Password is correct');
        Cookies.set('isLoggedIn', 'true', { expires: 7 }); // Expires in 7 days
  // dispatch(login());
        dispatch(setLoginData(loginData));
        console.log(store.getState());
        setLoginSuccess(true);
 
        if (userType === 'user') {
          router.push('/portal'); // Redirect homeowners to /portal
        } else if (userType === 'lo') {
          router.push('/myportal'); // Redirect mortgage owners to /myportal
        }
      })
      .catch((error) => {
        setMessage("Password is unsuccessful")
        console.error('Error:', error);
      });
  }
 
   const handleLogout = () => {
    // logout();
    // Remove login data from session storage on logout
    sessionStorage.removeItem('loginData');
    localStorage.removeItem('loginData');
    setLoginSuccess(false);
 
    // dispatch(logout());
    // Cookies.remove('isLoggedIn');
 
  };
 
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
        body: JSON.stringify({ email,usertype: userType }),
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
         usertype: userType
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

const handleResetPassword = () => {
  setEmailError('');
  if (!email) {
    setEmailError('Enter your Email*');
    return;
  }

  // API request for password reset
  fetch(`${process.env.NEXT_API_URL}/api/v1/auth/reset-password-token` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email,usertype:userType }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setShowResetLogin(true);
      // Handle successful password reset response here
    })
    .catch((error) => {
      console.error('Error:', error);

    });
};

const handleResetLogin = async () => {
  const { email, token, password, confirmPassword } = ResetpasswordData;

  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/api/v1/auth/reset-password` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email,token,password,confirmPassword,usertype:userType }),
  });
    if (!response.ok) {
        throw new Error('Failed to reset password');
    }
    const data = await response.json();
      setShowSuccessMessage(true);
    } catch(error) {
      console.error('Error:', error);

    }
};

const clearMessage = () => {
  setMessage('');
  // setIsErrorMessage(false);
};

return (
 
<>
<div className='login'>
  <div className='row '>
    <div className='col-md-5  '>
 {isSignIn ? (
        <>
          <div className=''>
            <span className='sign-1'>Login</span>
            <br/>
            <span className='sign-2'>Enter your credentials to access your account </span>
          </div>
          <div className='login-align'>
            <span className='name'>Email Address </span>
            <input
              placeholder="Enter email"
              className='box'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={clearMessage}
              required
            />    
          </div>
          <div className='d-flex justify-content-between'>
            <div className='login-align'>
              <span className='name' style={{marginLeft:"5px"}}>Password</span>
            </div>
            <div className='mx-3 mt-3'>
              <a href="#" onClick={handleResetAccount} className='forgot m-1 mx-3' style={{ textDecoration: 'none' }}>Forgot Password?</a>
            </div>
          </div>
            <div className='d-flex '>
              <input
                type='password'
                placeholder="Enter password"
                value={password}
                className='dashboard-text mx-4 p-3'
                onChange={(e) => setPassword(e.target.value)}
                onFocus={clearMessage}
                />
               
          </div>

        {message && <p className='name' style={{marginLeft: "25px", color: message.includes('unsuccessful') ? 'red' : 'black'}}>{message}</p>}

         
            <div className='login-align'>
            <div className='d-flex'>
                                      <input
                                          type="checkbox"
                                          label='Yes'
                                          value='Yes'
                                          className="m-2"
                                          style={{height:'20px',width:'20px',}}
                                          checked={remember}
                                          onChange={(e) => handleActiveChange(e.target.value)}
                                      />
                                       <label for="formcheck" className="form-check-label text-secondary name mt-2">Remember me</label>
                                      </div>
            </div>
            <button className='button-1 text-center ' onClick={handleLogin}><p className='but-1 text-center p-1'>Login</p></button>
            <ul>
              <li className='name1 d-flex justify-content-center'>
                <div>Don't have an account?&nbsp; <a href="#" onClick={handleToggle} className='m-1 forgot'  style={{ textDecoration: 'none' }}>Register here</a></div>
              </li>
            </ul>
            <div className='d-flex align-items-center justify-content-center login-align'>
              <hr className='flex-grow-1 orline' />
              <p className='mx-2 or'>or</p>
              <hr className='flex-grow-1 orline' />
              </div>

              <div className='login-align'>
              <button onClick={handleGoogle} className='google-but'>
                <img src=".\assets\images\home-page\google.jpg" alt="" className='google-logo' />Login With Google
              </button>
              </div>
            {/* <div className='d-flex align-items-center justify-content-center'>
              <hr className='w-25' />
              <span className='px-3'>or</span>
              <hr className='w-25'  />
            </div>
           
            <div className=''>
              <button onClick={handleGoogle} className='google-but'> <img src=".\assets\images\home-page\google.jpg" alt="" className='google-logo' />Login With Google</button>
            </div> */}
        </>
      )  : showregisterMessage ? (
        <>
         <div className='d-flex flex-column align-item-end'>
           <div className='success-page'>
             <div className='text-center'>
             <img src=".\assets\images\home-page\success.jpg" alt="" className='item-center'/>
             </div>
             <div><h6 className='success'>Success!</h6></div>
               <p className='Success text-center'>
               
                  You Have Successfully registerd..
               </p>
           
           <div className=''>
             <button  className='bottom-button mx-4' onClick={handleToggle} >
               <p className='back-to-home'>Back to Login</p>
             </button>
           </div>
         </div>
         </div>

          </>
       
    ): showSuccessMessage ? (
       <>
        <div>
          <div className='success-page'>
            <div className='d-flex flex-row justify-content-center'>
            <img src=".\assets\images\home-page\success.jpg" alt="" className='item-center'/>
            </div>
            <div><h6 className='success'>Success!</h6></div>
              <p className='reset-password-desc text-center'>
                An email has been sent to <span id="emailPlaceholder"></span>. Please
                check for an email from the company and click on the included
                link to reset your password.
              </p>
         
          <div className='d-flex flex-row justify-content-center'>
            <button  className='bottom-button mx-4' onClick={handleToggle} >
              <span className='back-to-home text-center'>Back to Login</span>
            </button>
          </div>
        </div>
        </div>
         </>
      ) :showResetlogin ?(
        <>
        <div className='d-flex flex-column align-item-end'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{ position: 'absolute', top: '40px', left: '20px', cursor: 'pointer' }} onClick={handleToggle}>
                <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
               </svg>
        <span className='sign mt-3'>Reset Your Password</span>
        </div>
        {/* <div className='p-3'> */}
          <div className="mt-3">
         <span className="name">Email</span>
         <div>
             <input
             type="email"
             className="box p-3"  
             name="email"
             placeholder="Enter Email"
             style={{fontSize: '15px'}}
             value={ResetpasswordData.email}
                  onChange={handleChange}
             />
         </div>
     </div>

     <div className="mt-3 ">
         <span className="name">Token</span>
         <div>
             <input
             type="token"
             className="box p-3"
             name="token"
             placeholder="Enter Token"
             style={{fontSize: '15px'}}
                  value={ResetpasswordData.token}
                  onChange={handleChange}
             />
         </div>
     </div>
     <div className="mt-3">
         <span className="name">New password</span>
         <div>
             <input
             type="password"
             className="box p-3"  
             name="password"
             placeholder="Enter Password"
             style={{fontSize: '15px'}}
             value={ResetpasswordData.password}
             onChange={handleChange}
             />
         </div>
     </div>
     <div className="mt-3">
         <span className="name">Confirm password</span>
         <div>
             <input
             type="password"
             className="box p-3"  
             name="confirmPassword"
             placeholder="Confirm Password"
             value={ResetpasswordData.confirmPassword}
             onChange={handleChange}
             />
         </div>
     </div>
     {/* </div> */}
     <div>
         <button type="submit" className='button-1 mt-3' onClick={handleResetLogin}><p className='but-1 text-center p-1'> Reset Password</p> </button>
     </div>
        </>
      ): resetAccount ? (
        <>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='m-4 mt- d-flex flex-column justifiy-content-center aline-items-center'>
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{ position: 'absolute', top: '40px', left: '20px', cursor: 'pointer' }} onClick={handleToggle}>
                <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
               </svg>
                <span className='sign'>Reset Password</span>
              </div>
              <div>
                <p className='mt-4 reset-des' >
                  Enter your mail address and we'll send you an email with instructions to reset your password
                </p>
              </div>
             <div className='mt-3'>
                <span className='name'>Your Email</span>
                <div className='col-4'>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className='box p-3'
                    style={{fontSize: '15px'}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className='error-msg' style={{color:"red"}}>{emailError}</p>
                </div>
              </div>
              <button className='button-1 mt-3' onClick={handleResetPassword}>
              <p className='but-1 text-center p-1'>Reset</p>
                </button>
            </div>
          </div>
        </>
      ) : (
        <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{ position: 'absolute', left: '20px', cursor: 'pointer' }}
          onClick={handleToggle} // Add onClick event to navigate back
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
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
                <div>Already, i have an account?&nbsp; <a href="#" onClick={handleToggle} className='text-center forgot' style={{ color: 'blue', textDecoration: 'none' }}>Sign here</a></div>
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
          <div className='mx-2'>
              <button onClick={handleGoogle} className='google-but'> <img src=".\assets\images\home-page\google.jpg" alt="" className='google-logo' />Login With Google</button>
            </div>
          </div>
         
        </>
      )}
    </div>
    <div className='col-md-7'>
    <img src=".\assets\images\home-page\Login_Image.jpg" alt="" className='sign-image' />
    </div>
      </div>
  </div>
</>
);
};

export default LoginPopup;