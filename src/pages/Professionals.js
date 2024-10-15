import React from 'react'
import Link from 'next/link'
import Step from '@/page/Step'
import Head from 'next/head';

function Professionals() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
   <>
   <Head>
  <title>Mortgage Professionals</title>
  <meta name="description" content="Connect with experienced mortgage professionals to guide you through the home financing process. Learn about their expertise, services, and how they can help you secure the best mortgage options for your financial situation." />
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
       <span className="home text-danger">Mortgage Professional</span>
       </div>
       </div>
       <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/professional.jpg" alt="professional" className="img-fluid w-100" />
       </div>
       </div>
            <div className="col-md-5 back back1 text-center">
      <img src="./assets/images/home-page/Reg-bor1.png" alt="professional" className="img-fluid w-100"/>
        </div>
              <div className='col-md-7 col-sm-12 back1'>
                    <div className='mt-5 px-4'>
                        <span className='loan1'>Why Partner with </span>
                        <span className='loan2'>  HomeRatesYard?</span>
                    </div>
                <span className='government-backed mb-5'>
                At HomeRatesYard, we empower mortgage professionals with the tools and resources needed to thrive in a competitive market. 
                Our network offers a range of benefits designed to boost your reach and operational efficiency. 
                By joining us, you gain access to exclusive resources that will help you grow your business and achieve lasting success. Elevate your performance and stay ahead with HomeRatesYard. 
                </span>
                </div>
                <div className='col-sm-12 col-md-12 back1'>
                        <div className='text-center mt-4'>
                        <span className='loan1'>Benefits of </span>
                        <span className='loan2'> Registering</span>
                        </div> 
                    </div>
                    
            <div className="col-sm-12 col-md-12 back1">
                <img src="./assets/images/home-page/explore6.png" alt="professional" className="img-fluid" />
            </div>
            <div className='col-sm-12 col-md-12'>
        <div className='text-center mt-3'>
            <span className='loan1'>How to Register as  </span>
            <span className='loan2'>  a Mortgage Professional</span>
            </div>
      </div>
      <div className='col-sm-12 col-md-5 p-4'>
            <img src='./assets/images/home-page/reg-bor3.png' alt='professional' className='img-fluid'/>
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
            <span className="Mortgage">Explore Loan Options</span>
            <p>Compare personalized loan offers without affecting your credit score.</p>
        </div>
        </div>
        <div className='d-flex mt-2'>
        <p className='reg-bor'>3</p>
        <div className='mx-4'>
            <span className="Mortgage">Select Your Loan</span>
            <p>Choose the loan that best suits your needs.</p>
        </div>
        </div>
        <div className='d-flex mt-2'>
        <p className='reg-bor'>4</p>
        <div className='mx-4'>
            <span className="Mortgage">Receive Your Funds</span>
            <p>Enjoy quick access to your approved funds.</p>
        </div>
        </div>
      </div>
                <div className="back">
                <div className="col-sm-12 col-md-8 p-4 mt-4">
                  <span className='loan2 '>Unlock the Advantages of  </span>
                  <span className='loan1 '>  Partnering with Us</span>
                  <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Enhanced Business Tools
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Access cutting-edge tools and resources designed to streamline your processes and boost efficiency. 
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Increased Market Reach
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Leverage our network to expand your client base and increase your market presence. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Exclusive Resources
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Benefit from specialized training, marketing support, and exclusive industry insights. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Custom Support
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse danger" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Receive ongoing support from our team to help you succeed and grow your business.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="./assets/images/home-page/explore5.png" alt="professional" className="img-fluid p-3 img-blend"/>
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
        <button className="Home-buyer-button mx-2" onClick={() => setModalShow(true)}>Get Started</button>
        <Link href="/MortgageLoan">  <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
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

export default Professionals