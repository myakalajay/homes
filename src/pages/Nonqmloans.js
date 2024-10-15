"use client";

import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

export default function Nonqmloans(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        <Head>
  <title>Non-QM Loans</title>
  <meta name="description" content="Learn about NON-QM Loans, designed for borrowers who don't meet traditional lending standards. Discover flexible mortgage options for self-employed individuals, investors, or those with unique financial situations." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

        <div className=''>
       <div className="row">
            <div className="col-sm-12 col-md-12 conven-page mx-5">
            <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
                <span className="home">Loan Programs <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
                <span className="home text-danger">Non-QM Loans</span>
                </div>
                <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/NONQM- Header.jpg" alt="NONQM Loans"  className="img-fluid w-100"/>
       </div>
       </div>
            <div className='col-sm-12 col-md-7 mt-3 back1'>
            <div className=" mx-5 mt-3">
              <span className='loan2 '> A Versatile Solution for  </span>
              <span className='loan1 '>  Diverse Borrowers</span>
              </div>
        <span className='government-backed'>
        Non-Qualified Mortgage (Non-QM) loans are designed for borrowers who do not fit the strict guidelines of conventional loans. These loans offer flexibility in terms of income verification, 
        credit requirements, and underwriting standards, making them ideal for individuals with unique financial situations. With Non-QM loans, self-employed individuals, real estate investors, 
        and those with non-traditional income streams can access mortgage financing, opening the door to homeownership and real estate investments for a broader range of borrowers. 
        </span>
      </div>
      <div className="col-sm-12 col-md-5 back back1 text-center">
      <img src=".\assets\images\home-page\nonqmimage.png" alt="NONQM Loans"  style={{height:"331px",width:"492px",marginTop:"10px"}} className="img-fluid p-3"/>
        </div>
            <div className="col-sm-12 col-md-5 col-lx-5 pt-4 text-center">
                <img src=".\assets\images\home-page\nonqmsub.png" alt="NONQM Loans"  className="img-fluid p-4 img-blend" />
            </div>
            <div className="col-sm-12 col-md-7 col-xl-7 p-4 mt-3">
              <div>
              <span className='loan2 '>Overview of </span>
              <span className='loan1 '> Non-QM Loan </span>
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
                                    Non-Qualified Mortgage (Non-QM) loans are financial products that serve borrowers who do not qualify 
                                    for conventional loans under the Consumer Financial Protection Bureau's (CFPB) Qualified Mortgage (QM) standards. 
                                    They allow for alternative documentation, such as bank statements, to verify income, and often accommodate higher 
                                    debt-to-income ratios, irregular income sources, and less-than-perfect credit. Non-QM loans serve as an alternative 
                                    for individuals whose financial profiles deviate from traditional lending models. 
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
                                   <span className=""> Non- QM loans come in various forms, each tailored to meet different financial needs and circumstances.<br/>
                                     Below are the key types of Non-QM loans available:<br/> </span>
                                     
                                      <span className="Mortgage mb-1"> Interest-Only Loans:  </span>
                                     <p> Borrowers only pay interest for a specific period, reducing initial monthly payments. However, this structure may result in a larger loan balance over time. </p>
                   
                                        <span className="Mortgage mb-1">Bank Statement Loans: </span>
                                         <p>Ideal for self-employed individuals or those with fluctuating income, these loans use bank statements to verify income rather than traditional documentation. .</p>
                   
                                        <span className="Mortgage mb-1">DSCR Loans (Debt Service Coverage Ratio):</span>
                                        <p>Tailored for real estate investors, these loans assess the income potential of the property rather than the borrower’s personal income. </p>
                                    
                                        <span className="Mortgage mb-1">  Alt-A Loans:</span>
                                        <p>Offering greater flexibility in underwriting, these loans allow higher loan-to-value (LTV) ratios and more lenient credit requirements, benefiting borrowers with complex financial profiles. .</p>
                  
                                          <span className="Mortgage mb-1">  Jumbo Loans: </span>
                                        <p>Exceed conforming loan limits set by Fannie Mae and Freddie Mac, often used for higher-value properties where traditional loan
                                           options may not apply.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed  dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Flexibility in Income Verification
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Unlike traditional loans, Non-QM loans allow borrowers to provide alternative forms of income verification. 
                                    For example, self-employed individuals can qualify using bank statements or asset documentation, 
                                    bypassing the need for W-2 forms or tax returns.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       Alternative Credit Data
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Non-QM lenders may consider non-traditional credit data, such as rent or utility payments, 
                                    allowing individuals with unconventional credit histories to qualify for financing. This opens 
                                    homeownership opportunities for those who don’t meet the criteria of conventional loans.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">              
                                        Loan Terms and Structure
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Non-QM loans offer a variety of loan structures beyond the typical 30-year fixed mortgage. 
                                    Options include interest-only payments, balloon payments, or extended 40-year terms, providing 
                                    flexibility that accommodates unique financial goals.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                      Higher Loan Amounts
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse danger" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    For affluent borrowers, Non-QM loans can provide access to higher loan amounts, making them a 
                                    suitable option for purchasing luxury properties that exceed traditional loan limits.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      {/* </div> */}
      <div className="col-sm-12 col-md-12">
        <div className="text-center">
        <span className='loan2 '>Pros and Cons </span>
        <span className='loan1 '>of Non-QM Loans</span>
        </div>
            <div className="mt-3 d-flex justify-content-center">
            <table className="table table-striped" style={{ width: '90%', height: '100%', margin: '0 auto' }}>
      <thead className="table-dark">
        <tr >
          <th >Pros</th>
          <th >Cons </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Accessibility for Self-Employed and Non-Traditional Earners:</span>
          <p  className="mx-4">Non-QM loans cater to freelancers, entrepreneurs, and business owners, offering loan options that consider non-traditional income streams.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Higher Interest Rates and Fees:</span>
          <p  className="mx-4">Due to the increased risk, Non-QM loans typically carry higher interest rates and fees compared to traditional loans. Borrowers need to assess whether the benefits outweigh the additional costs.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Solutions for High Net Worth Individuals:</span>
          <p  className="mx-4">These loans are tailored for high net-worth borrowers who require larger loan amounts or have complex financial situations, providing custom financing solutions.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Intensive Financial Scrutiny</span>
          <p  className="mx-4">Non-QM loans are not subject to the same stringent regulations as Qualified Mortgages, which may pose increased risks for both lenders and borrowers, particularly in terms of loan performance.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Options for Those with Non-Traditional Credit Histories:</span>
          <p  className="mx-4">By using alternative credit data, Non-QM loans are accessible to individuals with limited credit histories, making homeownership more inclusive.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Increased Risk from Less Regulation</span>
          <p  className="mx-4">Non-QM loans are subject to less stringent regulatory oversight, which can increase risks for both lenders and borrowers. This can lead to potential issues in loan performance.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Creative Financing Solutions:</span>
          <p  className="mx-4">Non-QM loans offer customizable terms, including interest-only payments or extended repayment periods, giving borrowers the flexibility to structure loans according to their financial needs.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Higher Down Payments Required</span>
          <p  className="mx-4">Borrowers may face higher down payment requirements for Non-QM loans, which can make them less accessible for individuals with limited upfront funds.</p></td>
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