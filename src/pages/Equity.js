"use client";
import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

function Equity  () {
  const [modalShow, setModalShow] = React.useState(false);
    return(
       <>
       <Head>
  <title>Home Equity Loans</title>
  <meta name="description" content="Learn about Home Equity Loans, a way to borrow against the equity in your home for major expenses like renovations, debt consolidation, or large purchases. Explore the benefits, risks, and how to apply for this fixed-rate loan option." />
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
                <span className="home">Refinancing <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
       <span className="home text-danger"> Home Equity Loan </span>
       </div>
       </div>
       <div className='conventional-loans' >
            <img src="./assets/images/home-page/Equity.jpg" alt="Equity" className="img-fluid w-100" />
       </div>
              <div className='col-md-7 col-sm-12 back1'>
                <div className="mx-5 pt-3">
                <span className='loan2 '>Home  </span>
                <span className='loan1 '>  Equity Loan</span>
                </div>
        <span className='government-backed loan8'>
        A home equity loan allows you to borrow against the value of your home, using it as collateral for a lump sum of cash. This loan provides access to funds for various financial needs, 
        such as home improvements, debt consolidation, or major purchases. You repay the loan in fixed installments over a set period, making it a useful option for significant expenses. 
        However, it's important to note that it adds to your overall debt and should be approached with caution. 
        </span>
        </div>
      <div className="col-sm-12 col-md-5  x-4back1 d-flex justify-content-center">
      <img src=".\assets\images\home-page\Refinance8.png" alt="Equity" style={{height:"250px",width:"492px",marginTop:"10px"}} className=" img-fluid p-3"/>
        </div>
        <div className="back ">
                <div className="col-md-4 mx-4">
                  <img src="./assets/images/home-page/Refinance11.png" alt="Equity" className="img-fluid p-3 img-blend"/>
                </div>
                <div className="col-md-8 mx-5">
                  <span className='loan2 '> Benefits of   </span>
                  <span className='loan1 '> Home-Equity Loan</span>
                  <div>
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Access to Funds</span>
                    <p>Home equity loans provide a large lump sum of cash upfront, offering substantial<br/> 
                    financial flexibility for major expenses or investments. </p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Fixed Interest Rates</span>
                    <p>Enjoy stable and predictable monthly payments with a fixed interest rate, <br/>
                    ensuring consistency and ease of budgeting throughout the loan term. </p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Tax Deductibility</span>
                    <p>Interest on home equity loans may be tax-deductible if the funds are used for <br/>
                    home improvements, depending on current tax regulations. This can lead to significant savings. </p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Lower Interest Rates</span>
                    <p>Because home equity loans are secured by your property, they often come with <br/> 
                    lower interest rates compared to unsecured loans or credit cards, making them a cost-effective borrowing option.</p>
                        </div>   
                    </div>
                  </div>
                </div>
                </div>  
                <div className="back">
                <div className="col-sm-12 col-md-8 p-4 mt-4 px-5">
                  <span className='loan2 '>Considerations and </span>
                  <span className='loan1 '>  How to Apply</span>
                  <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Risk of Foreclosure
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Assess your current financial status, including your credit score, debt-to-income ratio, and equity in your home. This evaluation will guide your decision-making process and help you choose the most suitable loan option. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Fees and Closing Costs
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Be mindful of additional fees and closing costs, as they can increase the total loan amount. Factor these into your budget before proceeding.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Reduced Home Equity
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Borrowing against your home decreases your equity, potentially reducing financial flexibility if property values fall. This can impact your overall financial stability.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                     Debt-to-Income Ratio
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse danger" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A higher debt-to-income ratio can affect your loan qualification and financial  stability. This ratio may influence the lender's decision and your overall financial health.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How to Apply
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <span className='Mortgage '>1.Evaluate Your Financial Needs: </span>
                                        <p>
                                        Determine the amount needed and ensure a home equity loan aligns with your financial goals.
                                          </p>
                                          <span className='Mortgage '>2.Check Your Credit Score: </span>
                                        <p>
                                        Review your credit report to meet lender requirements and secure the best rates..
                                          </p>
                                          <span className='Mortgage '>3.Determine Home Value: </span>
                                        <p>
                                        Get a home appraisal to establish your property’s current market value.
                                          </p>
                                          <span className='Mortgage '>4.Compare Lenders:</span>
                                        <p>
                                        Research and compare offers from various lenders for favorable terms and rates.
                                          </p>
                                          <span className='Mortgage '>5.Submit Your Application: </span>
                                        <p>
                                        Apply with your chosen lender, providing necessary documentation such as<br/>
                                         income verification and mortgage details.
                                          </p>
                                          <span className='Mortgage '>6.Close the Loan:</span>
                                        <p>
                                        Complete the closing process, and receive the lump sum from your home equity loan once approved.
                                          </p>

                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                <div className="col-md-4">
                    <img src="./assets/images/home-page/Refinance12.png" alt="Equity" className="img-fluid p-3 img-blend"/>
                </div>
              </div>
        <div className="col-sm-12 col-md-12">
        <div className="text-left px-5">
        <span className='loan2 '>Pros and Cons  </span>
        <span className='loan1 '>  Home-Equity Loan</span>
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
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'> Access to Cash:</span>
          <p  className="mx-4">Cash-out refinancing allows you to tap into your home’s equity for significant expenses or investments. This provides substantial financial flexibility.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'> Higher Interest Rates:</span>
          <p  className="mx-4">Cash-out refinances often come with higher interest rates, leading to increased monthly payments and total interest over the life of the loan.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'> Debt Consolidation:</span>
          <p  className="mx-4">Use the funds to pay off high-interest debts, simplifying your finances into a single, lower-interest payment.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'> Longer Loan Term:</span>
          <p  className="mx-4">Extending your loan term can result in paying more interest over time, increasing the total cost of the loan.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Fixed-Rate Stability:</span>
          <p  className="mx-4">Switching to a fixed-rate mortgage ensures consistent monthly payments and shields you from interest rate fluctuations.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'> Closing Costs:</span>
          <p  className="mx-4">Anticipate closing costs of 2% to 5% of the loan amount, which can add to the overall expense of refinancing.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'> Potential Tax Benefits:</span>
          <p  className="mx-4">Interest on the new mortgage may be tax-deductible if used for home improvements, offering potential tax savings.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Reduced Equity:</span>
          <p  className="mx-4">Withdrawing cash reduces your home equity, which can be risky if property values decline.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Flexible Funds:</span>
          <p  className="mx-4">The cash obtained can be used for various needs, providing broad financial options.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 mx-1'>Foreclosure Risk:</span>
          <p  className="mx-4">A higher mortgage balance increases your monthly payments and financial risk, especially if you face unexpected difficulties.</p></td>
        </tr>
      </tbody>
    </table>
    </div>
        {/* </div> */}
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
export default Equity;