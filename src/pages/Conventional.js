"use client";
import React from "react";
import Link from 'next/link';
import Step from "@/page/Step";
import Newfooter from "@/components/NewFooter";
import Signup from "@/pages/Signup";
import Head from 'next/head';
function Conventional () {
  const [Showmodal, setShowModal] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
    return(
      
       <>
        <Head>
        <title>Conventional Loans</title>
        <meta name="description" content="Learn about Conventional Loans. Explore options, benefits, and application processes to find the best mortgage for your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
       <div className=''>
        
       <div className="row conven-page">
       <div className="">
       <div className="col-sm-12 col-md-12 mx-5">
                <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span></Link>
                <span className="home">Loan Product <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
        
       <span className="home text-danger">Conventional</span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12 ">
        <div className='conventional-loans ' >
            <img src="./assets/images/home-page/Conventional-Header.jpg" alt="conventional Loan" className="img-fluid w-100 "/>
       </div>
       </div>
              <div className='col-md-8 col-sm-12 '> 
              <div className=" mx-5 mt-3">
              <span className='loan2 '>A Trusted Cornerstone of </span>
              <span className='loan1 '> Home Financing </span>
              </div>   
        <span className='government-backed back  loan8'>
        Conventional loans are one of the most widely used mortgage options, providing homebuyers with financing solutions that are 
        not backed by any government agency. These loans adhere to the standards set by Fannie Mae and Freddie Mac, 
        two government-sponsored enterprises. With flexible terms and competitive interest rates, conventional loans 
        are a preferred choice for many. Conventional loans are available in two primary types: conforming loans, which align with standard loan limits, and jumbo loans, which exceed these limits, offering solutions for higher borrowing needs.  
        </span>
        </div>
      <div className="col-md-4  back text-center">
      <img src="./assets/images/home-page/conventional_section.png" alt="conventional Loan" style={{height:"230px",width:"400px",marginTop:"10px"}} className="img-fluid p-3 pages-img"/>
        </div>
            <div className="col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
                <img src="./assets/images/home-page/conventional_Image.png" alt="conventional Loan" style={{height:"501px",width:"400px",marginTop:"10px"}} className="img-fluid p-4 img-blend" />
            </div>
            <div className="col-sm-12 col-md-8 p-4 ">
              <div className="">
              <span className='loan2 '>Overview Of  </span>
              <span className='loan1 '>  Conventional Loans </span>
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
                                    <div className="accordion-body  loan8">
                                     Conventional loans are mortgage loans that do not fall under government programs such as the FHA, VA, 
                                     or USDA loans. Instead, they are structured around meeting the criteria established by Fannie Mae and Freddie Mac, ensuring reliability and conformity to industry 
                                     standards. Conventional loans may allow borrowers to eliminate PMI if a down payment of 20% or more is made, 
                                     which can significantly reduce overall monthly payments. .
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
                                   <span className=""> Conventional loans come in various forms, each tailored to meet different financial needs and circumstances.<br/>
                                     Below are the key types of conventional loans available:<br/> </span>
                                     
                                      <span className="Mortgage mb-1">	Conforming Loans </span>
                                     <p>These loans comply with the loan limits set by Fannie Mae and Freddie Mac. Conforming loans often feature competitive interest rates 
                                      and flexible payment options, making them a practical choice for borrowers with good credit and stable income. </p>
                   
                                        <span className="Mortgage mb-1"> Non-Conforming Loans </span>
                                         <p>Loans that exceed the conforming limits, such as jumbo loans, fall into the non-conforming category. These loans are ideal for those seeking larger 
                                          loan amounts but come with higher interest rates and more stringent credit requirements. </p>
                   
                                        <span className="Mortgage mb-1"> Fixed-Rate Mortgages </span>
                                        <p>A fixed-rate mortgage guarantees a consistent interest rate throughout the life of the loan, providing predictable and stable monthly payments. 
                                          This option is perfect for borrowers who prefer long-term financial stability.</p>
                                    
                                        <span className="Mortgage mb-1"> Adjustable-Rate Mortgages (ARMS) </span>
                                        <p>ARMs start with lower interest rates that adjust periodically based on market conditions. While the initial rates may be lower than fixed-rate mortgages, 
                                          payments can fluctuate over time, depending on rate adjustments. </p>

                                        <span className="Mortgage mb-1 "> Interest-Only Mortgages </span>
                                        <p>With an interest-only mortgage, borrowers only pay interest for a set period, making initial payments smaller. However, after this period, they must begin 
                                          repaying the principal, often resulting in significantly higher payments. </p> 
                                      
                                        <span className="Mortgage "> Low-Down-Payment Conventional Loans  </span>
                                       <p> These loans are designed to help borrowers who may not have enough savings for a 20% down payment. Low-down-payment options provide greater accessibility, 
                                        especially for first-time buyers or those with limited financial resources. </p><br/>
                                    
                                    
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
                                     <span className='Mortgage1 '> To qualify for a conventional loan, borrowers typically need to meet the following criteria:<br/></span>
                                    <span className='Mortgage '> Credit Score: </span>
                                    <p className="loan3">
                                    Minimum requirements vary, but a score of 620 or higher is often required. 
                                     </p>
                                     <span className='Mortgage '> Down Payment:</span>
                                    <p className="loan3">
                                    Generally, a down payment of at least 5% is required, though putting down 20% can eliminate the 
                                    need for Private Mortgage Insurance (PMI). 
                                     </p>
                                     <span className='Mortgage'> Debt-to-Income Ratio: </span>
                                    <p className="loan3">
                                    Lenders typically look for a debt-to-income ratio of 43% or less.
                                     </p>
                                     <span className='Mortgage '> Employment History: </span>
                                    <p className="loan3">
                                    Steady employment and income history are crucial. 
                                     </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>   
                        <div className="col-md-12 col-sm-12 ">
          <div className="text-left px-5">
        <span className='loan2'>Pros and Cons  </span>
        <span className='loan1'> of Conventional Loans</span>
        </div>
            <div className="mt-3 d-flex px-5" style={{margin: '0 auto'}} >
            <table className="table table-striped " style={{width: '100%', height: '100%'}}>
      <thead className="table-dark ">
        <tr >
          <th >Pros</th>
          <th >Cons </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/>  <span className='Mortgage1 mx-1'>Competitive Interest Rates:</span>
          <p className="mx-4"> Conventional loans generally offer lower interest rates compared to government-backed loans, resulting in potential savings over the loan’s lifespan.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 '> Strict Credit Score Requirements:</span><br/>
          <p className="mx-4">Conventional loans often demand a higher credit score, which may exclude potential borrowers with less-than-perfect credit from qualifying for the most competitive rates.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Flexibility in Terms:</span>
          <p className="mx-4">Borrowers have access to a variety of term options, including fixed and adjustable-rate structures. This allows homebuyers to choose the option that best aligns with their financial goals and stability</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px" /> <span className='Mortgage1 '>Substantial Down Payment:</span>
          <p className="mx-4">While low-down-payment options exist, a larger down payment is usually necessary to avoid PMI. This can be a challenge for buyers who do not have substantial savings.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Variety of Loan Types:</span>
          <p className="mx-4">With multiple loan products available, such as conforming, jumbo, and interest-only loans, borrowers can select a product tailored to their unique financial situation.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 '>Rigorous Approval Criteria:</span>
          <p className="mx-4">The approval process for conventional loans is often more rigorous, with stricter requirements for income, credit history, and supporting documentation. Borrowers must meet higher financial thresholds.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 '>Lower Lender Fees:</span>
          <p className="mx-4">Conventional loans typically have lower upfront fees and ongoing costs than government-backed loans, minimizing the financial burden on borrowers during the loan process.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>PMI for Down Payments Less than 20%:</span>
          <p className="mx-4">If borrowers put down less than 20%, PMI will likely be required, increasing the overall monthly payments until enough equity is built up to remove it..</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>No Private Mortgage Insurance (PMI) with 20% Down:</span>
          <p className="mx-4">By putting down 20% or more, borrowers can avoid Private Mortgage Insurance (PMI), which can significantly reduce monthly payments and improve long-term affordability.</p></td>
          <td> </td>
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
export default Conventional;