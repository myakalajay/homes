"use client";

import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';


export default function Amrloans(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
      <Head>
  <title>ARM Loans</title>
  <meta name="description" content="Discover Adjustable-Rate Mortgages (ARM) and how they work. Learn about the benefits, risks, and application process to find flexible mortgage options that adjust with the market." />
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
                <span className="home text-danger">ARM Loans</span>
                </div>
                <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/ARM-Header.jpg" alt="AMR Loan"  className="img-fluid w-100"/>
       </div>
       </div>
            <div className='col-md-7 back1 '>
            <div className=" mx-5 mt-3">
              <span className='loan2 '>A Flexible Path to </span>
              <span className='loan1 '>Homeownership </span>
              </div> 
        <span className='government-backed   loan8'>
        Adjustable-Rate Mortgages (ARMs) are popular among borrowers looking to capitalize on lower initial interest rates compared to fixed-rate mortgages. ARMs start with a fixed interest rate for an 
        introductory period—usually ranging from 3 to 10 years—after which the rate adjusts periodically based on a financial index plus a predetermined margin. This flexibility can offer significant savings 
        in the early years of homeownership, but borrowers must also be prepared for potential rate increases over time. Understanding how ARMs function and planning for rate adjustments can help borrowers make 
        informed decisions that align with their financial strategies and long-term goals. 
           </span>
      </div>
      <div className="col-md-5 back1  text-center">
      <img src=".\assets\images\home-page\ARM-section.png" alt="AMR Loan" style={{height:"250px",width:"450px",marginTop:"10px"}} className="img-fluid p-3"/>
        </div>
            <div className="col-sm-12 col-md-5 pt-3 text-center">
                <img src=".\assets\images\home-page\armsub.png" alt="AMR Loan"  className="img-fluid p-4 img-blend" />
            </div>
            <div className="col-sm-12 col-md-7 p-4 ">
              <div>
              <span className='loan2 '>Overview of </span>
              <span className='loan1 '>  ARM Loans </span>
              </div>
            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
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
                                    An Adjustable-Rate Mortgage (ARM) offers a fixed, lower interest rate for an initial period, followed by periodic adjustments based on changes in market interest rates. 
                                    The rate is recalculated using a specific market index plus a fixed margin, meaning monthly payments can fluctuate after the initial fixed period ends. 
                                    ARMs can be ideal for borrowers seeking lower initial costs, but they also carry the risk of higher payments if market interest rates rise during the loan term. 
                                    Proper financial planning is essential to manage the potential fluctuations in payment amounts. 
                                    </div>
                                </div>
                            </div>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button  collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Mechanism of ARM Loan
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                    The defining characteristic of an ARM is its variable interest rate, which adjusts over time based on <br/>
                                    prevailing economic indices. Here's how it works:<br/>
                                    <span className='Mortgage '> Initial Fixed Period:</span>
                                    <p>The loan starts with a fixed interest rate for a predetermined period, such as 3, 5, 7, or 10 years.</p>
                                    <span className='Mortgage '> Rate Adjustments:</span>
                                    <p>After the initial period, the interest rate adjusts at regular intervals, such as annually. The new rate <br/>is determined by adding a margin set by the lender to a benchmark index, such as the
                                      LIBOR (London Interbank Offered Rate) or the U.S. Treasury rate.</p>
                                    <span className='Mortgage '> Rate Caps:</span>
                                    <p>ARMs often include rate caps that limit how much the interest rate can increase or decrease during
                                    each adjustment period and over the life of the loan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Common Types of ARMs
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    These variations allow borrowers to choose an ARM that aligns with their financial goals and anticipated timeline for homeownership.<br/>
                                    <span className='Mortgage mb-1 '> 3/1 ARM:</span> <p>The 3/1 ARM provides a fixed interest rate for the first three years, after which the 
                                      rate adjusts annually based on market conditions. This option is suitable for borrowers planning to sell their home or refinance before the adjustment period begins, offering short-term savings.</p>
                                    <span className='Mortgage mb-1'> 5/1 ARM</span> <p>With a fixed rate for the first five years, the 5/1 ARM is a balance between short-term and medium-term stability. After the initial period, the rate adjusts annually. 
                                      This is ideal for borrowers expecting to stay in their home for a moderate duration or those planning to refinance.</p>
                                    <span className='Mortgage mb-1'> 7/1 ARM:</span><p>The 7/1 ARM offers a fixed rate for the first seven years, followed by annual adjustments. It suits borrowers who want a longer period of stable payments while still benefiting 
                                      from a lower initial rate, offering flexibility for those who may refinance later.</p>
                                    <span className='Mortgage mb-1 '> 10/1 ARM:</span><p>The 10/1 ARM gives borrowers a fixed interest rate for the first ten years, offering the longest period of stability before rate adjustments begin. It is perfect for those who expect 
                                      long-term homeownership or want consistent payments for a decade before any potential rate changes. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      <div className="col-md-12 col-sm-12">
          <div className="text-left px-5">
        <span className='loan2'>Pros and Cons </span>
        <span className='loan1'>of ARM Loans</span>
        </div>
            <div className="mt-3 d-flex px-5" style={{margin: '0 auto'}}>
            <table className="table table-striped " style={{width: '100%', height: '100%'}}>
      <thead className="table-dark">
        <tr >
          <th >Pros</th>
          <th >Cons </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Lower Initial Interest Rates and Monthly Payments:</span>
          <p  className="mx-4">One of the main benefits of ARMs is their lower introductory interest rates, which translate into reduced monthly payments during the initial fixed-rate period. This can lead to substantial savings compared to fixed-rate mortgages.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Uncertainty and Risk of Rate Increases:</span>
          <p  className="mx-4">Once the initial fixed-rate period ends, interest rates may increase, leading to higher monthly payments. This unpredictability can create financial stress for borrowers if they are unprepared for fluctuating rates.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Potential for Rate and Payment Reductions:</span>
          <p  className="mx-4">In certain cases, borrowers might face negative amortization, where monthly payments do not cover the interest due, causing the loan balance to increase. This can result in higher debt over time, making it more challenging to manage. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'>Potential for Negative Amortization:</span>
          <p  className="mx-4">In some cases, monthly payments may not cover the full interest due,causing the loan balance to increase. This can result in a larger debt over time.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Short-Term Affordability and Flexibility:</span>
          <p  className="mx-4">ARMs provide a financial advantage for borrowers who plan to sell or refinance before the rate adjustments begin. The lower initial payments offer flexibility for short-term financial strategies, such as when anticipating an increase in income</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Challenges in Long-Term Budgeting:</span>
          <p  className="mx-4">The variable nature of ARMs makes long-term budgeting more difficult, particularly if rates rise significantly during the adjustable period. Borrowers may face difficulties maintaining financial stability as payment amounts change.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'>Suitability for Certain Financial Strategies:</span>
          <p  className="mx-4">Borrowers expecting significant income growth or those using an ARM as part of a short-term financial strategy may find these loans advantageous. The lower initial cost allows for more flexibility in the borrower’s financial plan.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'> Loan Limits:</span>
          <p  className="mx-4">Some ARMs come with stricter loan limits based on the lender’s criteria or specific mortgage terms. This could restrict borrowing capacity, making it less suitable for those with higher borrowing needs. </p></td>
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