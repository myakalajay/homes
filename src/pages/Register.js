"use client";

import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";


export default function Register(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        <div className='container-fluid'>
       <div className="row">
       <div className="col-sm-12 col-md-12 mx-2 mt-3 conven-page">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
       <span className="home text-danger"> Explore Loan Options</span>
       </div>

                <div className='conventional-loans ' style={{ backgroundImage: "url(./assets/images/home-page/homeloanoption.png)", paddingRight:'50px'}}>
                <div className="col-md-12 p-5">
                    <span className='conventional'>Explore Loan Options</span>
                 
                </div>
            </div>
            
      <div className="d-flex back">
            <div className="col-sm-12 col-md-5  p-5 mt-2 text-center">
                <img src="./assets/images/home-page/Homeloan.jpg" alt="" />
            </div>
            <div className="faq-block col-sm-12 col-xl-7 col-md-7 mx-auto">
              <div className="p-5">
                <span className="conventional">Types of <h4 className="text-danger"> home Loans</h4></span>
              </div>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed dropp " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> 
                                            Conventional loan
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    Best for borrowers with good credit scores <br/>
                                    <a href="#" className='m-1 mx-3' style={{ color: 'blue', textDecoration: 'none' }}>Conforming loans: </a><br/>
                                    A conforming loan adheres to a set of standards established by the Federal
                                    Housing Finance Agency (FHFA), which include criteria related to credit,
                                    debt, and loan size. When a conventional loan meets these criteria,
                                    it becomes eligible for purchase by Fannie Mae and Freddie Mac, the two
                                    government-sponsored enterprises (GSEs) that support a significant
                                    portion of the mortgage market.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="bg=danger">
                                            Jumbo loan
                                            </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    FHA loans provide opportunities for individuals with lower credit scores to obtain a mortgage. Borrowers with scores as low as 500 may still qualify, albeit with a higher down payment requirement.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Fixed-rate mortgage
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    Borrowers are required to pay an upfront mortgage insurance premium (UFMIP) and an annual mortgage insurance premium, which is typically included in monthly payments. This insurance protects lenders against losses if the borrower defaults on the loan.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                           Adjustable-rate mortgage
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    FHA loans provide opportunities for individuals with lower credit scores to obtain a mortgage. Borrowers with scores as low as 500 may still qualify, albeit with a higher down payment requirement.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      </div>
      <div className="col-md-7 col-sm-12 get">
        <p className="offers text-center mt-5"> Get Home Mortgage Loan Offers Customized for You Today</p>
        </div>
        <div className="col-md-5 col-sm-12 text-center get">
        <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Step
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </div>
      </div>
      </div>
      <Newspage/>
  </>
    )
}