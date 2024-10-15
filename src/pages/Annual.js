"use client";
import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';
function Annual () {
  const [modalShow, setModalShow] = React.useState(false);
    return(
       <>
       <Head>
  <title>APR vs Interest Rate</title>
  <meta name="description" content="Understand the difference between APR and interest rate when comparing mortgage options. Learn how each affects your loan's total cost and make informed decisions to secure the best mortgage for your financial situation." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

       <div className=''>
        
       <div className="row conven-page">
       <div className="">
       <div className="col-sm-12 col-md-12 mx-5">
                <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span></Link>
                <span className="home">First-time Homebuyer<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
        
       <span className="home text-danger">APR vs InterestRate</span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12 ">
        <div className='conventional-loans ' >
            <img src="./assets/images/home-page/Annual-header.jpg" alt="" className="img-fluid w-100 "/>
       </div>
       </div>
              <div className='col-md-7 col-sm-12 '> 
              <div className=" mx-5 mt-3">
              <span className='loan2 '>Decoding Loan Costs</span>
              <span className='loan1 '>  APR vs Interest Rates </span>
              </div>   
        <span className='government-backed back loan8 '>
        When borrowing money, it’s essential to understand the difference between interest rates and APR (Annual Percentage Rate). 
        While the interest rate focuses on your borrowing cost, the APR gives a clearer picture by including fees and additional costs. 
        </span>
        <span className='government-backed back  loan8'>
        Choosing the lowest interest rate might seem like the smartest move, but it's not always the best strategy. For example, a loan with a 4% interest rate and extra fees could end up costing more than one with a 5% rate and no hidden costs. 
        That's why it’s important to consider both when making your decision you might save more in the long run!  
        </span>
        </div>
      <div className="col-md-5  back text-center">
      <img src="./assets/images/home-page/annual2.png" alt="conventional_section" style={{height:"250px",width:"400px",marginTop:"10px"}} className="img-fluid p-3 pages-img"/>
        </div>
            <div className="col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
                <img src="./assets/images/home-page/annual1.png" alt="" style={{height:"501px",width:"400px",marginTop:"10px"}} className="img-fluid p-4 img-blend" />
            </div>
            <div className="col-sm-12 col-md-8 p-4 mt-4">
              <div className="">
              <span className='loan2 '>Understanding </span>
              <span className='loan1 '>  Loan Metrics</span>
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
                                    <span className="Mortgage mb-1">APR (Annual Percentage Rate) </span>
                                     <p>The APR goes beyond the interest rate to include additional loan costs, such as closing fees, broker charges, and discount points, giving you a 
                                      more accurate picture of the total cost of borrowing. This is why the APR is typically higher than the interest rate. For example, if your loan has 
                                      a 6% interest rate and $5,000 in fees, your APR might be 6.15%.   </p>
                                        <p>Unlike the interest rate, APR allows you to better compare loan offers by factoring in these extra costs. Thanks to the Truth in Lending Act, 
                                          lenders are required to disclose both the interest rate and the APR so you can make informed decisions. </p>
                                    <span className="Mortgage mb-1">Interest Rate  </span>
                                     <p>The interest rate is the percentage charged by lenders on the loan amount, representing the cost of borrowing money. For instance, if you take out 
                                      a $200,000 mortgage at a 6% interest rate, your yearly interest payments would total $12,000. Interest rates are influenced by economic factors, such 
                                      as the federal funds rate set by the Federal Reserve, which adjusts based on market conditions to either boost spending or encourage saving. </p>
                                      <p> While the interest rate directly affects your monthly payments, it's important to remember that it doesn’t account for other loan-related costs. </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Why Is the Annual Percentage Rate (APR) Higher Than the Interest Rate? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The Annual Percentage Rate (APR) is typically higher than the interest rate because it includes not just the interest, but also additional costs like fees, 
                                    origination charges, discount points, and lender fees. These upfront expenses are factored into the loan’s total cost, effectively increasing the amount borrowed. 
                                    As a result, the APR gives a more complete picture of what you’ll pay over the life of the loan, making it higher than the stated interest rate. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What Is a Good APR? 
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A good APR (Annual Percentage Rate) is defined by a lower percentage, which indicates a more favourable cost of borrowing. Lower APRs result in reduced overall expenses throughout the loan term. 
                                    APRs can vary based on factors such as the loan's purpose, duration, and macroeconomic conditions affecting lending rates. Ideally, a 0% APR is the best scenario, as it means no interest is charged, often seen in temporary promotional offers. 
                                    When considering loans, comparing APRs is crucial to ensure you secure the best deal for your financial needs. 
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>   
                        <div className="col-md-12 col-sm-12 ">
          <div className="text-left px-5">
        <span className='loan2'> APR (Annual Percentage Rate) VS Interest Rate </span>
        {/* <span className='loan1'> of Conventional Loans</span> */}
        </div>
            <div className="mt-3 d-flex px-5" style={{margin: 'auto'}} >
            <table className="table table-striped " style={{width: '100%', height: '100%'}}>
      <thead className="table-dark ">
        <tr >
        {/* <th > Aspect  </th> */}
          <th > APR (Annual Percentage Rate) </th>
          <th > Interest Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        {/* <td> <span className=' Mortgage1 mx-1'>Definition  </span></td> */}
          <td><span className=' mx-1'>A comprehensive view of the total cost of borrowing, including interest and various fees. </span></td>
          <td><span className=' mx-1'>The specific cost of borrowing money, focusing solely on the interest charged on the loan.   </span></td>
        </tr>
        <tr>
        {/* <td> <span className=' Mortgage1 mx-1'>Fees Included  </span></td> */}
          <td><span className=' mx-1'>  Includes points, origination fees, broker fees, and closing costs. </span></td>
          <td> <span className='mx-1'>Does not include additional fees related to the loan.  </span></td>
        </tr>
        <tr>
        {/* <td> <span className=' Mortgage1 mx-1'>Determination </span></td> */}
          <td><span className=' mx-1'>Primarily influenced by the lender, incorporating factors like discount points and additional fees.  </span></td>
          <td> <span className='mx-1 '>Determined by the borrower’s individual financial profile, such as credit score and history. </span></td>
        </tr>
        <tr>
        {/* <td> <span className=' Mortgage1 mx-1'>Short-Term Advantage  </span></td> */}
          <td><span className='mx-1'>More beneficial for those planning to stay in their home long-term, as it reflects the overall cost over the duration of the loan. </span></td>
          <td><span className=' mx-1'>More advantageous for short-term homeowners, as lower rates can lead to reduced monthly payments, even if the total loan cost remains high.  </span></td>
        </tr>
        <tr>
        {/* <td> <span className=' Mortgage1 mx-1'>Cost Impact </span></td> */}
          <td><span className=' mx-1'>Lower APRs typically result in reduced total loan expenses, although they may lead to higher monthly payments.  </span></td>
          <td><span className=' mx-1'>Lower rates often translate to lower monthly payments, though the total loan may still be more expensive.  </span> </td>
        </tr>
        {/* <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className=' mx-1'>Required to be disclosed by lenders for transparency. </span></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className=' mx-1'>Not always required to be prominently displayed.  </span> </td>
        </tr> */}
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
          <Link href="/MortgageLoan">< button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
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
export default Annual;