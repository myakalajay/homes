"use client";
import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

function Faq () {
  const [modalShow, setModalShow] = React.useState(false);
    return(
       <>
       <Head>
  <title>FAQs</title>
  <meta name="description" content="Find answers to frequently asked questions about mortgages, homebuying, refinancing, and more. Get insights into common concerns to help you make informed decisions throughout your homeownership journey." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

       <div className=''>
       <div className="row">
       <div className="conven-page">
       <div className="col-sm-12 col-md-12 mx-5">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
                <span className="home">Resources <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
       <span className="home text-danger">FAQs</span>
       </div>
       </div>
       <div className='conventional-loans' >
            <img src="./assets/images/home-page/page Header1.jpg" alt="Faq" className="img-fluid w-100" />
       </div>
      <div className="col-sm-12 col-md-12 " style={{backgroundColor:"#F9F9F9" ,width:'100%'}}>
            <div className="accordion p-4" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       What's a mortgage?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A mortgage is a loan specifically designed for purchasing a home. In this legal agreement, a mortgage lender provides the full amount needed to buy<br/>
                                    the house, with the expectation that the borrower will repay the loan, along with interest, over a predetermined period. Mortgages enable homebuyers to <br/>
                                    acquire homes even if they do not have the full purchase price available upfront. This arrangement allows individuals to invest in property while spreading <br/>
                                    the cost over many years. 
                                    <br/><span className='Mortgage4'>Loan Officer:</span> The mortgage adviser in charge of your file. They’ll help you from beginning to end. 
                                    <br/><span className='Mortgage4'>Interest Rate:</span> The amount of money paid for the ability to borrow money, expressed as a percentage. 
                                    <br/><span className='Mortgage4'>Closing:</span> The final steps in the transfer of property ownership. The buyer signs all final documents, and the seller receives funds.
                                    <br/> <span className='Mortgage4'>Credit Score:</span> A number representing a consumer’s.
                                    <br/> creditworthiness. Lower scores pose a greater risk of default, while higher scores indicate a lower risk to lenders.                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Can you show homebuyers steps from start to finish?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The homebuying process starts with securing a mortgage pre-approval, followed by house hunting and making an offer. After the offer is accepted, you'll go through a home 
                                    inspection and appraisal. Finally, the process concludes with securing financing and closing on the home.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Difference between Pre approval vs pre qualification?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Pre-qualification is an informal evaluation of your creditworthiness and provides an estimate of how much you can borrow. Pre-approval, on the other hand, involves a 
                                    more detailed review of your financial situation by a lender and gives you a formal loan offer. Pre-approval holds more weight when making an offer on a house.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Is buying a house really better than renting?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse danger" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Buying a home allows you to build equity over time and offers long-term financial benefits, including potential property value appreciation. Renting, while offering flexibility 
                                    and lower upfront costs, doesn't build ownership or equity. The better option depends on factors like your financial stability, lifestyle, and long-term goals.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What are the qualification requirements to get a mortgage?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    To qualify for a mortgage, you'll need a stable income, a good credit score (typically 620 or higher), and a down payment, usually ranging from 3% to 20% of the home price. 
                                    Lenders also evaluate your debt-to-income (DTI) ratio, which should generally be under 43% for approval.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Conventional, FHA, USDA, VA - what are the difference?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse danger" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Conventional loans usually require higher credit scores and larger down payments but offer more flexibility. FHA loans are backed by the government and are ideal for first-time buyers 
                                    with lower credit scores. USDA loans cater to rural homebuyers, while VA loans provide benefits to eligible veterans with no down payment.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                      How can i mange a healthy credit score?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse danger" aria-labelledby="headingSeven"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    To maintain a good credit score, make sure to pay all bills on time and keep your credit card balances low compared to your limits. Additionally, avoid opening too many new credit accounts in a 
                                    short time, and regularly review your credit report to catch any errors or fraudulent activity.
                                    </div>
                                </div>
                                
                            </div>
                  
                    
                            </div>
             
                        </div>  
                        <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">Prequalify now and take the first step towards<br/> your dream home.</p>
        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
          <div className="mt-5">
          <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Link href="/MortgageLoan"><button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
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
export default Faq;