"use client";

import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

export default function Fhaloans(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        <Head>
  <title>FHA Loans</title>
  <meta name="description" content="Learn about FHA Loans, designed for first-time homebuyers and those with lower credit scores. Explore the benefits, requirements, and steps to apply for a government-backed mortgage." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

        <div className=''>
       <div className="row">
            <div className="col-sm-12 col-md-12 mx-5 conven-page">
            <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
                <span className="home">Loan Product <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
                <span className="home text-danger">FHA Loans</span>
                </div>
                <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/FHA-Header.jpg" alt="FHA Loan" className="img-fluid w-100" />
       </div>
       </div>
            <div className='col-md-7 back1 '>
            <div className=" mx-5 mt-3">
              <span className='loan2 '> Facilitating Access to</span>
              <span className='loan1 '> Homeownership  </span>
              </div>  
        <span className='government-backed loan8 '>
        FHA loans, insured by the Federal Housing Administration, are an attractive option for first-time homebuyers and individuals with less-than-perfect credit. 
        These loans feature low down payment requirements, sometimes as low as 3.5%, and offer more lenient credit standards compared to conventional mortgages. 
        FHA loans are also assumable, which can simplify the home selling process. However, borrowers must be aware of additional costs, including upfront 
        and monthly mortgage insurance premiums (MIP), which can increase the total loan expense. 
        </span>
      </div>
      <div className="col-md-5 back back1 text-center">
      <img src=".\assets\images\home-page\FHA-section.png" alt="FHA Loan" style={{height:"250px",width:"492px",marginTop:"10px"}} className="img-fluid p-3"/>
        </div>

            <div className="col-sm-12 col-md-4 col-xl-5 pt-4 text-center">
                <img src=".\assets\images\home-page\fhasub.png" alt="FHA Loan" className="dash-img2 img-fluid p-4 img-blend" />
            </div>
            <div className="col-sm-12 col-md-8 col-xl-7 p-4 mt-3">
              <div>
              <span className='loan2 '>Overview of </span>
              <span className='loan1 '> FHA Loan </span>
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
                                    An FHA loan is a mortgage loan insured by the Federal Housing Administration (FHA), designed to help low-
                                    to moderate-income borrowers who may have less-than-perfect credit or limited savings. These loans feature lower 
                                    down payments and less stringent borrowing criteria compared to conventional loans, making homeownership more accessible. 
                                    However, borrowers are required to pay mortgage insurance premiums and must purchase homes that meet FHA standards. 
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
                                   <span className=""> FHA loans come in various forms, each tailored to meet different financial needs and circumstances.<br/>
                                     Below are the key types of FHA loans available:<br/> </span>
                                     
                                      <span className="Mortgage mb-1">FHA 203(b) Loan:  </span>
                                     <p>The most common FHA loan, used for purchasing or refinancing a primary residence with a minimal down payment. 
                                      It is ideal for borrowers with lower credit scores and is a popular option for first-time homebuyers.</p>
                   
                                        <span className="Mortgage mb-1">FHA 203(k) Rehab Loan:  </span>
                                         <p> This loan allows buyers to finance both the purchase of a home and the necessary renovations. It's designed for properties 
                                          needing significant repairs or improvements and provides financing for the purchase and the construction..</p>
                   
                                        <span className="Mortgage mb-1"> FHA Energy Efficient Mortgage (EEM): </span>
                                        <p>This loan allows homeowners to finance energy-efficient improvements in addition to the mortgage loan. It helps borrowers 
                                          reduce energy consumption while keeping the loan’s interest rate low.</p>
                                    
                                        <span className="Mortgage mb-1"> FHA Section 245(a) Graduated Payment Mortgage (GPM):  </span>
                                        <p>With this loan, monthly payments start low and gradually increase over time. It's best suited for borrowers who expect their 
                                          income to rise in the future.</p>

                                        <span className="Mortgage mb-1 "> FHA Reverse Mortgage (HECM): An instrument </span>
                                        <p>The Home Equity Conversion Mortgage is available to homeowners aged 62 and older. It allows them to convert home equity into 
                                          cash without selling their homes, offering a form of financial flexibility in retirement..</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button  collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Low Down Payment Requirements
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Borrowers with a credit score of 580 or higher can make a down payment as low as 3.5%. 
                                    This reduces the financial barriers to homeownership, especially for those with limited savings.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       Flexible Credit Score Criteria
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    FHA loans are known for their relaxed credit requirements, allowing borrowers with scores as low as 500 to qualify, though a larger down payment may be required. 
                                    This makes FHA loans an excellent choice for those with poor or fair credit. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                       Mortgage Insurance Premiums (MIP)
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Borrowers must pay both an upfront MIP at closing and an annual MIP, which is included in monthly payments. This insurance protects lenders from potential borrower default, but it adds to the overall cost of the loan.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      <div className="col-md-12 col-sm-12">
        <div className="text-left px-5">
        <span className='loan2 '>Pros and Cons  </span>
        <span className='loan1 '>of FHA Loans</span>
        </div>
            <div className="mt-3 d-flex px-5" style={{margin: '0 auto'}}>
            <table className="table table-striped " style={{width: '100%', height: '100%' }}>
      <thead className="table-dark">
        <tr >
          <th >Pros</th>
          <th >Cons </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Accessibility for First-Time Homebuyers:</span>
          <p  className="mx-4">FHA loans are tailored for first-time buyers by reducing entry barriers with lower down payment requirements and more lenient credit qualifications</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Mandatory Mortgage Insurance:</span>
          <p  className="mx-4">FHA loans require upfront and ongoing MIP, increasing the cost of the loan over time and making monthly payments higher.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Leniency in Credit Requirements:</span>
          <p  className="mx-4">Borrowers with previous credit issues can still qualify for FHA loans, offering more flexibility than conventional loans. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Loan Limits:</span>
          <p  className="mx-4">FHA loans have a maximum borrowing limit, which may not be sufficient for higher-priced homes in some areas, restricting their use.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Competitive Interest Rates:</span>
          <p  className="mx-4">FHA loans typically offer competitive interest rates, making them an attractive financing option that can result in significant savings over time. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Property Standards and Appraisal Requirements:</span>
          <p  className="mx-4">The property must meet specific FHA appraisal and condition standards, limiting the pool of eligible homes and sometimes requiring costly repairs.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Assumability of Loans:</span>
          <p  className="mx-4">FHA loans can be assumed by a new buyer, potentially offering significant savings on interest when selling the property.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Limited to Primary Residences:</span>
          <p  className="mx-4">FHA loans can only be used for primary residences, meaning they cannot be used to purchase vacation homes or investment properties.</p></td>
        </tr>
      </tbody>
    </table>
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