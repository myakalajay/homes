"use client";

import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

export default function Valoans(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
<Head>
  <title>VA Loans</title>
  <meta name="description" content="Learn about VA Loans, exclusive for veterans, active-duty military members, and their families. Explore the benefits, including zero down payment, competitive interest rates, and flexible credit requirements, for a government-backed mortgage." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

         <div className=''>
       <div className="row">
            <div className="col-md-12 col-sm-12  mx-5 conven-page">
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
                <span className="home text-danger">VA Loans</span>
                </div>
                <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="/assets/images/home-page/page-Header.jpg" alt="VA Loan" className="img-fluid w-100" />
       </div>
       </div>
            <div className='col-sm-12 col-md-7 back1'>
            <div className=" mx-5 mt-3">
              <span className='loan2 '> Veteran-Friendly</span>
              <span className='loan1 '> Home Financing</span>
              </div>
        <span className='government-backed loan8'>
        VA Loans offer exceptional benefits to veterans, active-duty service members, and eligible National Guard and Reserve members. Sponsored by the U.S. Department of Veterans Affairs (VA), 
        these loans provide unparalleled financial advantages such as no down payment, competitive interest rates, and no requirement for private mortgage insurance (PMI). VA loans also feature 
        flexible credit requirements and no penalties for prepayment, making them one of the most accessible and affordable home financing options for military members transitioning to civilian life. 
        They promote financial stability and homeownership, honoring the service of those who have served. 
        </span>
      </div>
      <div className="col-sm-12 col-md-5  back1 ">
      <img src=".\assets\images\home-page\vasub.png" alt="VA Loan" style={{height:"250px",width:"492px",marginTop:"10px"}} className="img-fluid p-3" />
        </div>
            <div className="col-sm-12 col-md-5 ">
                <img src=".\assets\images\home-page\Vaimg.png" alt="VA Loan" className="img-fluid p-4 img-blend" />
            </div>
            <div className="faq-block col-sm-12 col-md-7 p-4">
              <div>
              <span className='loan2 '>Overview of </span>
              <span className='loan1 '> VA Loan </span>
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
                                    A VA Loan is a mortgage option backed by the U.S. Department of Veterans Affairs, designed specifically 
                                    for veterans, active-duty service members, and certain members of the National Guard and Reserves. These 
                                    loans provide favorable terms, including zero down payment, no PMI requirement, and competitive interest rates. 
                                    This program ensures affordable homeownership and real estate opportunities for service members and veterans, recognizing 
                                    their service with flexible, accessible home financing solutions
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
                                   <span className=""> VA loans come in various forms, each tailored to meet different financial needs and circumstances.<br/>
                                     Below are the key types of VA loans available:<br/> </span>
                                     
                                      <span className="Mortgage mb-1">VA Purchase Loan: </span>
                                     <p>Allows eligible borrowers to buy a home with no down payment and 100% financing. </p>
                   
                                        <span className="Mortgage mb-1">VA Cash-Out Refinance Loan:  </span>
                                         <p> Enables borrowers to refinance an existing mortgage and take cash from the home's equity, ideal for home improvements or debt consolidation. </p>
                   
                                        <span className="Mortgage mb-1">3.	VA Interest Rate Reduction Refinance Loan (IRRRL): </span>
                                        <p>Also known as a VA Streamline Refinance, this option lets veterans lower their existing loan’s interest rate with minimal documentation. </p>
                                    
                                        <span className="Mortgage mb-1"> VA Adapted Housing Grant: </span>
                                        <p>Provides financial aid for veterans with service-connected disabilities to build or modify homes for enhanced accessibility. </p>
                                        <p>Each loan type caters to the specific needs of veterans, whether they aim to buy, refinance, or adapt their homes to suit their requirements. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        No Down Payment
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    One of the most significant benefits of VA loans is that borrowers can finance 100% of the home's purchase price, meaning no down payment is required. 
                                    This feature is especially helpful for veterans and service members who may not have substantial savings, making homeownership more accessible. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       No Private Mortgage Insurance (PMI)
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    VA loans do not require PMI, regardless of the down payment amount. Unlike conventional and FHA loans, where PMI can significantly increase monthly payments, 
                                    VA loans keep costs lower by eliminating this insurance. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                       Limited Closing Costs
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The VA limits the closing costs lenders can charge, making the overall home-buying process more affordable. 
                                    Some fees are even covered by the seller, further reducing the buyer’s out-of-pocket expenses. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       VA Funding Fee
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse danger" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Although VA loans do not require PMI, they do include a one-time VA funding fee that supports the VA loan program. 
                                    The amount varies based on military service, loan type, and whether it's a first or subsequent loan. Veterans receiving 
                                    VA disability benefits are often exempt from this fee. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                       Loan Entitlement
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse danger" aria-labelledby="headingSeven"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The VA Loan Entitlement is a guarantee from the VA that protects lenders in case of borrower default. Veterans can use this entitlement multiple times, 
                                    but specific conditions and limits may apply depending on loan size and previous VA loan use. 
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      <div className="col-sm-12 col-md-12">
        <div className="text-left px-5">
        <span className='loan2'>Pros and Cons  </span>
        <span className='loan1 '>of VA Loans</span>
        </div>
            <div className="mt-3 d-flex px-5 " style={{margin:"0 auto"}}>
            <table className="table table-striped " style={{width: '90%', height: '100%' }}>
      <thead className="table-dark">
        <tr >
          <th >Pros</th>
          <th >Cons </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Accessibility for Veterans and Service Members:</span>
          <p  className="mx-4">VA loans extend to a wide array of military personnel, increasing the chances for veterans and service members to secure financing for homeownership. Their broad eligibility requirements simplify the path to buying a home.  </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>VA Funding Fee:</span>
          <p  className="mx-4">While the VA funding fee helps maintain the loan program, it adds an extra upfront or financed cost to the loan. For some, this fee may outweigh the benefits of no down payment.  </p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Financial Benefits:</span>
          <p  className="mx-4">With lower interest rates, no PMI, capped closing costs, and no down payment, VA loans are designed to reduce the financial burden of homeownership. These benefits significantly lower the total borrowing costs. .</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Property Requirements and Restrictions:</span>
          <p  className="mx-4">VA loans come with property requirements, which may limit the types of homes eligible for financing. This restricts some options for buyers seeking unconventional properties or fixer-uppers. </p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Easier Credit Requirements </span>
          <p  className="mx-4">VA loans are more lenient on credit scores, making them more accessible to veterans with past credit issues. The flexibility helps those with less-than-perfect credit histories qualify. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Loan Limits and Entitlement Issues:</span>
          <p  className="mx-4">Although the VA allows multiple uses of loan entitlements, borrowers may face loan limits, especially for more expensive homes. These restrictions could affect the amount of financing available without a down payment. </p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>No Prepayment Penalties:</span>
          <p  className="mx-4">VA loans allow borrowers to pay off the loan early without incurring prepayment penalties. This flexibility can lead to substantial savings for homeowners who wish to reduce their loan balance sooner. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Potential for Longer Closing Times:</span>
          <p  className="mx-4">VA loans sometimes require longer processing times due to the additional documentation and VA-specific requirements. This delay can extend the home-buying process compared to conventional loans. </p></td>
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