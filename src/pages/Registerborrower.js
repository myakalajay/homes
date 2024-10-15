import React from 'react'
import Link from 'next/link'
import Step from '@/page/Step'
import Signup from '@/pages/Signup';
import Head from 'next/head';

function Registerborrower() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
   <>
   <Head>
  <title>Register for Borrower</title>
  <meta name="description" content="Register as a borrower to access personalized mortgage options. Complete the registration process to explore loan programs, pre-approval, and exclusive benefits tailored to your financial needs and homeownership goals." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

    <div className='container-fluid'>
       <div className="row conven-page">
       <div className="">
       <div className="col-sm-12 col-md-12 mx-5">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
       <span className="home text-danger">Register for borrower</span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12">
        <div className='conventional-loans img-fluid' style={{ backgroundImage: "url(./assets/images/home-page/Conventional-Header.jpg)"}}>
        <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/Borrower.jpg" alt="Borrower" className="img-fluid w-100" />
       </div>
       </div>
       </div>
       </div>
            {/* <div className="col-md-5 back back1  text-center">
      <img src="./assets/images/home-page/Reg-bor1.png" alt="" className="mt-4 p-4 img-fluid"/>
        </div>
              <div className='col-md-7 col-sm-12 back1'>
                    <div className='mt-5 px-4'>
                        <span className='loan1'>Welcome to </span>
                        <span className='loan2'> HomeRatesYard </span>
                    </div>
                <span className='government-backed mb-5 '>
                Where your financial goals are our top priority. Whether you're buying your dream home, consolidating debt, or managing unexpected expenses, 
                we connect you with personalized borrowing solutions tailored to your needs and manage your mortgages. 
                </span>
            </div> */}
            <div className='col-sm-12 col-md-12'>
                        <div className='text-center'style={{background:'#FFF6F6'}}>
                        <span className='loan1'>Why Sign Up with </span>
                        <span className='loan2'>HomeRatesYard</span>
                        </div> 
                        
                        <div className="col-sm-12 col-md-12 p-5" style={{background:'#FFF6F6'}}>
                <img src="./assets/images/home-page/borrower2.png" alt="Borrower" className="img-fluid" />
            </div>
                    </div>
                    <div className='col-sm-12 col-md-12'>
        <div className='text-center mt-3'>
            <span className='loan1'>How It</span>
            <span className='loan2'> Works</span>
            </div>
      </div>
      <div className='col-sm-12 col-md-5 p-4'>
            <img src='./assets/images/home-page/reg-bor3.png' alt='' className='img-fluid'/>
      </div>
      <div className='col-sm-12 col-md-7'>
        <div className='d-flex mt-4'>
        <p className='reg-bor'>1</p>
        <div className='mx-4'>
        <span className="Mortgage">Create your Account</span>
            <p>Sign up with your basic information securely.</p>
            </div>
        </div>

        
        <div className='d-flex mt-2'>
        <p className='reg-bor'>2</p>
        <div className='mx-4'>
            <span className="Mortgage">Manage  your Properties </span>
            <p>Manage your properites and loans </p>
        </div>
        </div>
        <div className='d-flex mt-2'>
        <p className='reg-bor'>3</p>
        <div className='mx-4'>
            <span className="Mortgage">Explore Loan Options</span>
            <p>Choose the loan that best suits your needs.</p>
        </div>
        </div>
        <div className='d-flex mt-2'>
        <p className='reg-bor'>4</p>
        <div className='mx-4'>
            <span className="Mortgage">Recommendations</span>
            <p>Enjoy quick access to your approved funds.</p>
        </div>
        </div>
      </div>
            <div className="back">
                <div className="col-sm-12 col-md-8 p-4 mt-4">
                  <span className='loan2 '>Unlock the Benefits of  </span>
                  <span className='loan1 '>  Borrower Registration</span>
                  <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Personalized Loan Recommendations
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Receive tailored loan options based on your financial profile and home preferences.
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Streamlined Application Process
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Enjoy a simplified application with pre-filled details and easy document uploads. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Access to Exclusive Offers
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Gain access to special rates and offers available only to registered borrowers. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Expert Guidance
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse danger" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Get direct assistance from our mortgage experts to guide you through every step of the mortgage process. 
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="./assets/images/home-page/Borrower1.png" alt="" className="img-fluid p-3 img-blend"/>
                </div>
              </div>
                    <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">  Ready to Start Your Financial Journey?</p>
        <p className="offers2">Discover the best mortgage loan offers tailored to your financial needs and goals. <br/>
        Explore your options & get personalized quotes to find the perfect home financing solution for you.</p>

        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
          <div className="mt-5">
          <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Link href="/MortgageLoan"> <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
        </div>
        <Step
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </div>
      </div>
      </div>
   </>
  )
}

export default Registerborrower