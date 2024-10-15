'use client'
 
import React,{useState,useEffect } from 'react';
import LoginPage from '@/pages/Loginpage';
import { setUserType } from '@/redux/usertypeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setLoginData } from '@/redux/authSlice';
import Link from 'next/link';
import NewAppNav from './NewAppNav';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { clearAuthData } from '@/redux/sessionSlice';
import { resetZip } from '@/redux/zipcodeSlice';
import { saveUserType } from '@/redux/usertypeSlice';
 
function Navbar() {
   
    const [modalShow, setModalShow] = React.useState(false);
    const [navbar, setNavbar] = useState(false);
    const [showStepper, setShowStepper] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const firstname = useSelector(state => state.auth.firstname);
    // const history = useNavigate();
    const userid = useSelector(state=> state.user.userid)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const token = useSelector(state=> state.auth.token);
    const userType = useSelector((state)=> state.user.usertype)
    const session = useSelector(state=> state.session)
    const email = useSelector(state => state.session?.session?.user?.email);
    const glogin = useSelector(state=> state.session?.session?.user?.name)
    const isauthenticated = useSelector(state=> state.session?.isAuthenticated)
    console.log("gloing====>",session,userType)
    console.log("gloing====>",userType)
    console.log("nwjd",session);
    const dispatch = useDispatch();
    const router=useRouter()
    useEffect(() => {
        if (isauthenticated) {
          const url = 'https://lendapi.azurewebsites.net/api/setuserlogin';
     
          const data = {
            "usertype": userType,
            "firstname": glogin,
            "lastname": "Townhouse",
            "email": "satish@gmail.com",
            "mobile": "Test5",
            "username": glogin,
            "pass": 1000000.00,
            "oauth": 1,
            "smsallowed": "0",
            "social": 0,
            "token": token
          };
     
          const sendRequest = async () => {
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
     
              const result = await response.json();
              const user = result[0]?.userid;
              dispatch(setLoginData(result))
              console.log('Success:', result,user);

            } catch (error) {
              console.error('Error:', error);
            }
          };
     
          sendRequest();
        }
      }, [isauthenticated]); 
    useEffect(() => {
      setIsMounted(true);
    }, []);
 
    if (!isMounted) {
      return null;
    }
 
    // const handleHomeClick = () => {
    //   dispatch(resetZip()); // Reset the zipcode when home button is clicked
    // };
 
    // const handleLogout = () => {
    //      window.location.href = '/';
    //      setShowLoginPopup(true)
    //      setModalShow(false);
    //     Cookies.remove('isLoggedIn');
    //   dispatch(logout());
     
    // };
//     useEffect(() => {
//         const response ={
//             "usertype" : "user",
//             "firstname" :  glogin,
//             "lastname" : "Townhouse" ,
//             "email" : email,
//             "mobile" : "Test5" ,
//             "username" : glogin ,
//             "pass" : 1000000.00 ,
//             "oauth" : 1,
//             "smsallowedent": "0" ,
//             "social" : 0 ,
//             "token" : token,
//         };
//      fetch(`https://lendapi.azurewebsites.net/api/setuserlogin` , {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body:  response
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     //   setShowResetLogin(true);
//       // Handle successful password reset response here
//     })
//     .catch((error) => {
//       console.error('Error:', error);

//     });
//     },[glogin]);





    const handleResetPassword = () => {
        // API request for password reset

        
        
      };

    const handleLogout = () => {
        if (isauthenticated) {
            // Google logout
            signOut({
                // redirect: false,  // Prevent redirect after sign-out
                callbackUrl: '/'  // Optional: redirect to homepage after sign-out
            }).then(() => {
                dispatch(clearAuthData());
                Cookies.remove('isLoggedIn');
                router.push('/');
            });
        } else {
            setShowLoginPopup(true)
            setModalShow(false);
            // Normal logout
            dispatch(logout());
            // dispatch(clearAuthData());
            Cookies.remove('isLoggedIn');
            router.push('/');
        }
    };

 
    const showLoginwindow=(usertype)=>{
        setModalShow(true);
        // return usertype
        dispatch(setUserType({usertype:usertype}))
    }
 
    // const showLoginwindow = (usertype) => {
    //     setModalShow(true);
    //     const action = setUserType(usertype);
    //     console.log('Dispatching action:', action); // Debugging log
    //     dispatch(action);
    //     console.log('User Type Set:', usertype); // This should log 'user' or 'lo'
    // };
      const handleLogin = () => {
        // localStorage.setItem('isLoggedIn',true);
        setLoggedIn(true);
        // sessionStorage.setItem('loginData', 'true');
        setModalShow(false);  
        // window.location.href = '/';
    };

  return (
    <div className='fixed-top'>
        <NewAppNav/>
    <nav className="navbar navbar-expand-md bsb-navbar bsb-navbar-hover bsb-navbar-caret bg-white">
    <div className="container-fluid bg-white mx-4">
       <Link href="/" className="navbar-brand" >
            <img src="./homeratesyard_logo.svg" alt="HomeRatesyard Logo" className='img-fluid w-100' />
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>
        <div className="offcanvas offcanvas-end mt-2" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button className="button btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" >
                <ul className="navbar-nav justify-content-center flex-grow-1 mt-1">
                    <li className="nav-item" >
                       <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
 
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#!" id="loan-program" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Loan Products</a>
                        <ul className="dropdown-menu border-0 shadow bsb-zoomIn navdrop" aria-labelledby="loan-program">
                      <div className="row">
                      <div className='col-sm-12 col-md-3'>
                      <img src="./navigation/loan_products.jpg" alt="Loan Products" width="100%" />
                                </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-2">
                          <Link href="/Conventional" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>Conventional Loans </button></li></Link>
                          <Link href="/Usdaloans" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>USDA Loans</button></li></Link>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                        <Link href="/Amrloans" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>ARM Loans</button></li></Link>
                        <Link href="/Nonqmloans" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>Non-QM Loans</button></li></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-2">
                        <Link href="/Fhaloans" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>FHA Loans</button></li></Link>
                        <Link href="/Valoans" className='link-item'><li className="dropdown-item"><button className='navbarbut1'>VA Loans</button></li></Link>
                        </div>
                        <div className="col-md-2">
                   
                        </div>
                        <div className='col-md-2'>
                        </div>
                      </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#!" id="tools" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Refinance</a>
                        <ul className="dropdown-menu border-0 shadow bsb-zoomIn navdrop" aria-labelledby="tools">
                        <div className='row'>
                            <div className='col-sm-12 col-md-3'>
                            <img src="/assets/images/home-page/Refinance.jpg" alt="Refinance" className='img-fluid' />
                             </div>
                             <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/HomeRefinancing" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Home Refinance Loans</button></li></Link>
                       <Link href="/Varefinancing" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>VA Refinancing Loans</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/CashoutRefinancing" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Cash-out Refinance</button></li></Link>
                       <Link href="/Fharefinancing" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>FHA Refinancing Loans</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/Equity" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Home Equity Loans</button></li></Link>
                       </div>
                       <div className='col-md-2'>
                       </div>
                        </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#!" id="tools" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Calculators</a>
                        <ul className="dropdown-menu border-0 shadow bsb-zoomIn navdrop" aria-labelledby="tools">
                        <div className='row'>
                            <div className='col-sm-12 col-md-3'>
                            <img src="./assets/images/home-page/Calculators.jpg" alt="Calculators" width="100%" />
                        </div>
                       
                            <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/Monthlypayment" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Monthly Payment Calculator</button></li></Link>
                       <Link href="/Consolidate" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Consolidation Calculator</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/AffordabilityCalculator" className='link-item' passHref><li className="dropdown-item" ><button className='navbarbut1'>Affordability Calculator</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/Refinancecalculator" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Refinance Calculator</button></li></Link>
                       </div>
                       <div className='col-md-2'>
                        </div>
                        </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#!" id="tools" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                        <ul className="dropdown-menu border-0 shadow bsb-zoomIn navdrop" aria-labelledby="tools">
                       <div className='row'>
                        <div className='col-md-3'>
                        <img src="./assets/images/home-page/Resources.jpg" alt="Resources" className='img-fluid' />
                        </div>      
                         <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/Homebuyer" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>First-Time Homebuyer</button></li></Link>
                       <Link href="/About" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>About</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/MortgageGlossary" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Mortgage Glossary</button></li></Link>
                       <Link href="/Faq" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>FAQs</button></li></Link>
                       </div>
                       <div className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                       <Link href="/MortgageLoan" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Mortgage Loan Process</button></li></Link>
                        <Link href="/Homeloan" className='link-item'><li className="dropdown-item" ><button className='navbarbut1'>Mortgage Types</button></li></Link>
                        </div>
                        <div className='col-md-2'>
                        </div>
                       
                        </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#!" id="tools" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"> {isLoggedIn||isauthenticated ?`Welcome, ${firstname? firstname:glogin}`: 'My Portal'}</a>
                         <ul className="dropdown-menu border-0 shadow navdrop" aria-labelledby="user">
                            <div>
                            <div className='d-flex'>
                            <div className='p-3' style={{ backgroundImage: "url(./assets/images/home-page/My-Portal.jpg)",height:"113px",width:"873px",paddingLeft:"10px",color:"white",marginLeft:"10px"}}>
                            <h5>Quick, Free, Easy, and Simple</h5>
                            <p className='text-white'>Pay your loan faster than your bank's online bill pay with<br/>
                            our website. Click "LOGIN" to begin.</p>
                            </div>
                            <div className="d-flex mx-4" style={{height:'120px'}}>
                                <div className="vr"></div>
                                </div>
                                {isLoggedIn || isauthenticated? (
                                            <div title="Profile" id="basic-nav-dropdown">
                                                {userType ==="user" ?
                                                <>
                                                    <Link href="/userProfile" className='dropdown-item'><li><button className='navbarbut1'>Profile Update</button></li></Link>
                                                    <Link href="/portal" className='dropdown-item'><li><button className='navbarbut1'>DashBoard</button></li></Link>
                                                </>
                                                :
                                                <>
                                                    <Link href="/loprofile" className='dropdown-item'><li><button className='navbarbut1'>Profile Update</button></li></Link>
                                                    <Link href="/myportal" className='dropdown-item'><li><button className='navbarbut1'>DashBoard</button></li></Link>
                                                </>}
                                                <li><a className="dropdown-item" onClick={handleLogout}><button className='navbarbut1'>Logout</button></a></li>
                                                </div>
                                            ) : (
                                                <div  title="Login" id="basic-nav-dropdown" className=''>
                                                <li><a className="dropdown-item"  onClick={()=> showLoginwindow('user')}><button className='navbarbut1'>HomeOwner</button></a></li>
                                                <li><a className="dropdown-item" onClick={() => showLoginwindow('lo')}><button className='navbarbut1'>Mortgage Professional</button></a></li>
                                                </div>
                                            )}
                                           </div>
                                           </div>
                                        </ul>
                    </li>
                    <li className="nav-item">
                       <Link href="/PreApprovalPage" className='nav-link link-item'><li className="dropdown-item"><button  className="button-apply">APPLY</button></li></Link>
                    </li>
                    <li className="nav-item">
                       <Link href="/Support" className='nav-link link-item'><li className="dropdown-item"><button  className='contact'>CONTACT</button></li></Link>
                    </li>
                </ul>
                <LoginPage
                show={modalShow}
                onLogin={handleLogin}
                onHide={() => setModalShow(false)}
                            />
            </div>
        </div>
    </div>
</nav>
</div>
  )
}
 
 
export default Navbar;