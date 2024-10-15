"use client";

import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

export default function Homeloan(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        <Head>
  <title>Mortgage Types</title>
  <meta name="description" content="Explore different types of mortgages, including fixed-rate, adjustable-rate, FHA, VA, USDA, and more. Learn about the benefits and eligibility requirements of each mortgage type to find the best fit for your home financing needs." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

        <div className='container-fulid'>
       <div className="row">
       <div className="col-sm-12 col-md-12 mx-5 conven-page">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
       <span className="home text-danger"> Explore Loan Options</span>
       </div>
       <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/explore.jpg" alt="home Loan" className="img-fulid w-100"/>
       </div>
       </div>
            
      <div className="d-flex back1">
            <div className="col-sm-12 col-md-5  p-5 mt-2 text-center">
                <img src="./assets/images/home-page/explore1.png" alt="home Loan" className="img-blend"style={{height:"460px",width:"400px",marginTop:"10px"}} />
            </div>
            <div className="faq-block col-sm-12 col-xl-7 col-md-7 mx-auto">
              <div className="p-5">
                <span className="loan1">Types of </span>
                <span className="loan2">  home Loans</span>
              </div>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                                            Conventional loan
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                     Ideal for Borrowers with Strong Credit Profiles.  <br/>
                                    {/* <a href="#" className='m-1 mx-3' style={{ color: 'blue', textDecoration: 'none' }}>Conforming loans: </a><br/> */}
                                    Conforming loans align with specific guidelines set by the Federal Housing Finance Agency (FHFA), covering aspects such as creditworthiness, debt-to-income ratio, and maximum loan limits. 
                                    When a conventional loan meets these criteria, it qualifies for purchase by Fannie Mae and Freddie Mac, two influential government-sponsored enterprises that underpin a large segment of the mortgage industry. 
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
                                    {/* <span className= 'Mortgage3'>Jumbo Loans: </span> Jumbo loans are mortgages for amounts exceeding the conforming limits set by Fannie Mae and Freddie Mac, these limits change periodically.  */}
                                    Jumbo loans are mortgages for amounts exceeding the conforming limits set by Fannie Mae and Freddie Mac, these limits change periodically. Jumbo loans are typically used for luxury homes or properties in expensive real estate markets. 
                                    Interest rates on jumbo loans can also be slightly higher compared to conforming loans, although this gap has narrowed in recent years. 
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
                                     A fixed-rate mortgage is a type of home loan where the interest rate remains constant throughout the life of the loan. This stability means that the monthly principal and interest payments are predictable and won't change, providing borrowers with a consistent repayment schedule.
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
                                    An adjustable-rate mortgage (ARM) is a type of home loan where the interest rate can change periodically based on market conditions. Typically, ARMs offer a lower initial interest rate compared to fixed-rate mortgages, but the rate can fluctuate after an initial period. 
                                    Changes in the rate lead to variations in monthly payments, which can increase or decrease over time
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                           High Balance Loans
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    High-balance loans are conforming loans for areas with housing prices above standard limits but below jumbo loan thresholds. For 2024, these limits exceed around $726,200 in high-cost regions. They offer a middle ground with slightly higher interest rates than standard conforming loans 
                                    but are more accessible than jumbo loans, with similar qualification criteria. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            DSCR Loans
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    A DSCR loan (Debt Service Coverage Ratio loan) evaluates the borrower’s ability to repay based on the property’s income relative to its debt obligations. DSCR is calculated by comparing the property's net operating income (NOI) to its debt service (loan payments). A higher DSCR indicates the property generates enough income to cover the debt, reducing the lender’s risk. These loans are typically used in commercial real estate and rental property financing. 
                                    Lenders often require a DSCR of at least 1.2, meaning the income should exceed the loan payment by 20% or more. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                           NON-DSCR Loans
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-word">
                                    A NON-DSCR loan does not require proof of the property's income relative to its debt. Instead, eligibility is based on other factors such as the borrower’s credit history, collateral, or personal income. These loans are often favored by investors who lack immediate rental income or want greater flexibility. However, 
                                    non-DSCR loans usually carry higher interest rates and stricter terms due to the increased risk for lenders. 
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      </div>
     
      <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">Get Customized Home Mortgage Loan Offers Today</p>
        <p className="offers2">Discover the best mortgage loan offers tailored to your financial needs and goals. <br/>
        Explore your options & get personalized quotes to find the perfect home financing solution for you.</p>

        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
          <div className="mt-5">
          <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Link href="/MortgageLoan">< button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
        </div>
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