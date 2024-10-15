"use client";
import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";

function Refinancing () {
  const [modalShow, setModalShow] = React.useState(false);
    return(
       <>
       <div className='container-fluid'>
       <div className="row">
       <div className="conven-page">
       <div className="col-sm-12 col-md-12 mx-2">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
                <span className="home">Refinancing <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
       <span className="home text-danger">Refinancing works </span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' style={{ backgroundImage: "url(./assets/images/home-page/Refinancing-Header.jpg)"}}>
            <div className="col-md-12 p-5">
                <span className='conventional'> How Refinancing Works</span>
            </div>
       </div>
       </div>
              <div className='col-md-7 col-sm-12 back1'>
        <span className='government-backed'>
        Refinancing a home involves replacing an existing mortgage with a new loan, typically to achieve more favorable terms such as a lower interest rate, reduced monthly payments, or access to home equity. Here's a step-by-step guide on how the refinancing process works:
        </span>
        <span className='government-backed'>
       </span>
       <Link href='/PreApprovalPage'>
        <button className='btn btn-danger m-5'>Apply Now</button>
        </Link>
        </div>
      <div className="col-sm-12 col-md-5  back1">
      <img src=".\assets\images\home-page\Rectangle 22.jpg" alt="" className="conventional-img img-fluid p-3"/>
        </div>
            <div className="col-sm-12 col-md-5">
                <img src=".\assets\images\home-page\benfits.jpg" alt="" className="img-fluid p-4" />
            </div>
            <div className="col-sm-12 col-md-7 p-4">
              <div>
                <span className="conventional">UnderStanding</span>
                <p className="loans">Home Equity Loans</p>
              </div>
            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Definition
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A home equity loan is a loan that allows homeowners to borrow against the equity they have built up in their property. Equity is the difference between the current market value of the home and the outstanding mortgage balance. Home equity loans typically have fixed interest rates and are repaid over a set period, usually between 5 and 30 years.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Types
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    There are two main types of conventional loans - conforming and non-conforming.
                                     Conforming loans fall within the maximum limits set by Fannie Mae and Freddie Mac,
                                      while non-conforming loans exceed these limits and include jumbo loans.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Basic Requirements
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Generally, conventional loans require a higher credit score compared to government-insured loans.
                                     Borrowers are typically expected to have a credit score of 620 or higher, a stable income,
                                      and a debt-to-income ratio (DTI) of 43% or lower. Down payments can vary, 
                                      with a minimum of 3% for certain conforming loans, though a 20% down payment is ideal to avoid PMI.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>   
      <div className="col-md-12 col-sm-12 col-lg-7 get">
        <p className="offers text-center mt-5 "> Get Home Mortgage Loan Offers Customized for You Today</p>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-5 text-center get2">
        <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Step
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </div>
      </div>
      </div>
      {/* <Newspage/> */}
       </>

    )
}
export default Refinancing ;