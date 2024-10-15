"use client";
import React,{useState} from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

function MortgageLoan() {
 
  const [activeButton, setActiveButton] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);
  
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
    return(
       <>
       <Head>
  <title>Mortgage Loan Process</title>
  <meta name="description" content="Learn about the mortgage loan process from application to closing. Understand each step, including pre-approval, documentation, underwriting, and closing, to help you navigate the journey to homeownership with ease." />
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
                    </svg>
                </span>
       <span className="home text-danger">Mortgage-Loan Process</span>
       </div>
       </div>
       <div className='conventional-loans' >
            <img src="./assets/images/home-page/Mortgage-Loan.jpg" alt="Mortgage Loan" className="img-fluid w-100" />
       </div>
       <div className="col-sm-12 col-md-12">
       <div className="nav nav-pills Home-buyer">
                 <div className="nav-item">
                  <div>
                 <button className="loan-but1 active text-center" data-bs-toggle="pill"
                         href="#Preapproved">1.Preapproved</button>
                       
                        <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#Documents">2.Documents</button>
                 
                        <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#Budget">3.Budget</button>
                 
                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#House-Huntingr">4.House Hunting</button>

                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Makeanoffer">5.Make an offer</button>

                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Finalize-Loan">6.Finalize Loan</button>

                         <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Underwriting">7.Underwriting</button>

                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Appraisal">8.Appraisal</button>
                         
                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Close">9.Close</button>
                 </div>
                 </div>
            </div>
             </div>
            <div className="tab-content">
            <div id="Preapproved" className="tab-pane active">
            {/* <div style={{backgroundImage:"url(./assets/images/home-page/About-back.png)"}}> */}
            <div className='loan-flip back'>
    <div className="col-md-8 col-sm-12 ">
        <p className='loan1 mx-5'>Why <span className='loan2 '> Preapproval </span> <span className='loan1 '>is Essential </span></p>
        <span className='government-backed loan8'>
            Securing a mortgage preapproval is the crucial first step in the home-buying journey.
            This process determines how much a lender is willing to lend based on your financial health,
            giving you a clear budget range and making you a serious contender in the housing market.
            Without a mortgage preapproval, many real estate agents may be hesitant to invest their time in you, especially in a competitive seller’s market. A preapproval letter, or a Verified Approval Letter, demonstrates to real estate agents and sellers that you are serious about buying a home and capable of making a competitive offer.
        </span>
    </div>
    <div className="col-md-4 mt-4 mx-5">
        <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid img-blend"/>
    </div>
</div>

            <div className="back mt-3">
              <div className="col-md-4">
                <img src="./assets/images/home-page/homebuyer2.png" alt="Mortgage Loan" className="img-fluid p-3 img-blend"/>
              </div> 
              <div className="col-md-8">
                <div className='mx-5'>
                <p className='loan1'>Mortgage <span className='loan2'> Preapproval Process</span></p>
                  </div>
                  
                  <div className="mx-5">
                    <p>
                      When you get preapproved, a mortgage lender will pull your credit report to assess your financial health.<br/>
                      Here’s a breakdown of the main items your lender will consider during the preapproval process:
                    </p>
                    <div >
                      <p>
                        <span className= 'Mortgage'>Credit Score:</span>The required credit score varies based on the type of home loan. For an FHA loan, you'll typically need a minimum score of 580,
                        though some FHA lenders accept scores as low as 500. A score of 620 or higher is usually needed for a conventional loan with most lenders. 
                        VA loans don’t have a specific score requirement, but each lender sets its own guidelines.
                      </p>
                      <p>
                        <span className='Mortgage'>Debt-to-Income Ratio(DTI):</span>Lenders will consider your income, assets, and outstanding debt to determine how much home you can afford.
                      Your DTI is expressed as a percentage of your monthly debt payments divided by your gross monthly income. DTI requirements vary by lender
                      </p>
                        <p>
                        <span className='Mortgage'>Credit History:</span>Lenders will review your credit history, including any bankruptcies or collections. It's possible to get a mortgage with negative
                        items on your report, but you may be limited to certain loan options.
                        </p>
                          <p>
                          During the preapproval process, you’ll be matched with a preliminary loan program. While some borrowers may change their loan type later,
                            obtaining initial approval is crucial even if your situation changes.
                          </p>
                          </div>
                    </div>
                  </div>
              </div>
              <div className="back ">
                <div className="col-md-7 p-3">
                  <span className='loan2'>Benfits of  </span>
                  <span className='loan1'> Preapproval </span>
                  <div>
                    <span className='Mortgage '>Increased Credibility</span>
                    <p>
                      Shows sellers and real estate agents that you are a serious buyer.
                    </p>
                  </div>
                  <div>
                    <span className='Mortgage '>Financial Clarity </span>
                    <p>
                    Helps you understand your budget and avoid looking at homes outside your price range.
                    </p>
                  </div>
                  <div>
                    <span className='Mortgage'>Stronger Offers </span>
                    <p>
                      Enables you to make stronger offers, often necessary in competitive markets.
                    </p>
                  </div>
                  <div>
                    <span className='Mortgage'>Saves Time  </span>
                    <p>
                     Speeds up the final approval process once you find a home.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 p-3">
                    <img src="./assets/images/home-page/homebuy3.png" alt="Mortgage Loan" className="img-fluid img-blend"/>
                </div>
              </div>
            </div>

         <div id="Documents" className="tab-pane fade">
         <div className='loan-flip  back'>
         <div className="col-md-8 col-sm-12 ">
              <p className='loan2 mx-5'> Importance of <span className='loan1 '>Document Preparation</span></p>  
                  <p className='government-backed loan8'>
                  Having these documents ready can significantly speed up the loan process and reduce potential delays.
                   It demonstrates to your lender that you are prepared and organized, which can also enhance your credibility
                    as a borrower. Additionally, it helps in avoiding any last-minute surprises or requests for additional 
                    information. Being proactive with document preparation allows for a smoother underwriting process, 
                    increasing your chances of getting approved faster. Overall, staying organized can make a significant 
                    difference in securing your loan with ease.
                  </p>
                </div>
                <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
                </div>
                
              <div className="back ">
                <div className="col-md-4">
                  <img src="./assets/images/home-page/document1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-md-8 mx-5">
                  <span className='loan2 '> Why It  </span>
                  <span className='loan1 '> Matters </span>
                  <div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage"> Streamlined Process</span>
                    <p>Quickly providing required documents ensures a smoother and<br/> faster loan approval process.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage"> Increased Credibility</span>
                    <p>Showing you are organized and prepared can positively impact <br/> your lender’s perception.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Reduced Stress</span>
                    <p>Being proactive can minimize last-minute scrambles <br/>and stress.</p>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="back ">
                  <div className="col-sm-12 col-md-7 ">
                    <div className="mx-3">
                    <span className='loan2 '> Helpful Tips for  </span>
                    <span className='loan1 '> Document Preparation</span>
                    </div>
                    <div>
      <button
        className={`document-btn mx-3 ${activeButton === 1 ? 'active' : ''}`}
        onClick={() => handleButtonClick(1)}
      >
        <span className="d-flex flex-row justify-content-center">
          <p className="document-img">
            <img
              src="./assets/images/home-page/document-btn1.png"
              alt="Mortgage Loan"
              className="img-fluid"
            />
          </p>
        </span>
        Create a Checklist
      </button>

      <button
        className={`document-btn ${activeButton === 2 ? 'active' : ''}`}
        onClick={() => handleButtonClick(2)}
      >
        <span className="d-flex flex-row justify-content-center">
          <p className="document-img">
            <img
              src="./assets/images/home-page/document-btn2.png"
              alt=""
              className="img-fluid"
            />
          </p>
        </span>
        Stay Organized
      </button>

      <button
        className={`document-btn  mx-3 ${activeButton === 3 ? 'active' : ''}`}
        onClick={() => handleButtonClick(3)}
      >
        <span className="d-flex flex-row justify-content-center">
          <p className="document-img">
            <img
              src="./assets/images/home-page/documennt-btn3.png"
              alt=""
              className="img-fluid"
            />
          </p>
        </span>
        Be Prepared to Explain
      </button>
    </div>
                  </div>
                  
                  <div className="col-sm-12 col-md-5">
                    <img src="./assets/images/home-page/document2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
                  </div>
                </div>
          </div>


          <div id="Budget" className="tab-pane fade">
          <div className='loan-flip  back'>
          <div className="col-md-8 col-sm-12 ">
              <p className='loan2 mx-5'> Understanding Your <span className='loan1 '>  Financial Limits</span></p>
                  <span className='government-backed loan8'>
                  Establishing your budget is a crucial step in the home-buying process. Knowing how much you can 
                  afford helps you focus your search and ensures you are financially prepared for homeownership. 
                  It prevents you from overextending yourself and falling into financial stress later. 
                  By setting clear financial boundaries, you can make more confident decisions throughout 
                  the process. Additionally, understanding your limits ensures you're looking at properties 
                  within your range, saving time and avoiding unnecessary disappointment.
                  </span>
            </div>
             <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
            </div>
          <div className="back">
            <div className="col-sm-12 col-md-4">
            <img src="./assets/images/home-page/budget1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
            </div>
            <div className="col-sm-12 col-md-8">

                <p className='loan2 mx-5'> Steps to Create <span className='loan1 '>Your Budget</span> </p>
                <div className="mx-5">
                <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage"> Calculate Monthly Expenses</span>
                    <p> Include current rent/mortgage payments, utilities, groceries, transportation, and other recurring expenses.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage"> Determine Your Down Payment</span>
                    <p>Down payments typically range from 3% to 20% of the home's purchase price.<br/> A larger down payment can reduce your monthly mortgage payment.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Estimate Additional Costs</span>
                    <p>Consider closing costs (2% to 5% of the loan amount), homeowners insurance, property taxes, <br/>and home maintenance and repair costs.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Use Mortgage Calculators</span>
                    <p>Online mortgage calculators can help estimate your monthly payments based on loan amount,<br/>interest rate, and term length.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="back ">
              <div className="col-md-7">
                <span className='loan2 mx-5'> Importance of a <span className='loan1 '>  Budget</span>  </span>
            <div>
              <span className='government-backed loan8'>
                Establishing a realistic budget helps you avoid overextending yourself financially. It allows you to make informed decisions and provides a clear picture of what you can afford.
              </span>
              </div>
              <div className="mx-5 mt-3">
              <h5 className="loan2">Helpful Tools</h5>
                <span className='Mortgage1 '>Budgeting Apps</span>
                <p >
                Use apps like Mint or YNAB to track expenses and manage your budget.
                </p>
                <span className='Mortgage1 '>Financial Advisors</span>
                <p >
                  Consider consulting a financial advisor for personalized advice.
                </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-5">
              <img src="./assets/images/home-page/budget2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
              </div>

           </div>

           <div id="House-Huntingr" className="tab-pane fade">
              <div className="back ">
                <div className="col-sm-12 col-md-7">
                  <p className='loan2 mx-5'> Start House <span className='loan1 '>Hunting</span> </p>
                    <p className='government-backed loan8'>
                    With a preapproval and budget in place, you can begin house hunting. 
                    This is an exciting phase where you start to envision your new home. 
                    As you explore different neighborhoods and properties, keep an open 
                    mind and consider your long-term goals. Take note of what features 
                    are most important to you, such as location, size, and amenities. 
                    Engaging with a real estate agent can provide valuable insights and
                     help you navigate the market more effectively. Remember to enjoy the process
                      and stay flexible, as finding the right home can take time and patience.
                    </p>
                </div>
                <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
              </div>
              <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/hunting1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                    <div className="col-sm-12 col-md-8">
                      <p className='loan2 mx-5'>  House Hunting <span className='loan1 '>Tips </span></p>           
                      <div className="mx-5">
                      <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">List Your Priorities</span>
                    <p>Identify must-have features (number of bedrooms, bathrooms, etc.)<br/>and preferred neighborhoods or school districts.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Work with a Real Estate Agent</span>
                    <p>Find an agent who knows the local market and can provide access to <br/>listings and schedule showings.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Attend Open Houses</span>
                    <p>Visiting open houses can give you a sense of what's available <br/>within your budget.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Compare Listings</span>
                    <p>Visiting open houses can give you a sense of what's available <br/>within your budget..</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>5</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Stay Flexible</span>
                    <p>Visiting open houses can give you a sense of what's available <br/>within your budget.</p>
                        </div>   
                    </div>
                      </div>
                  </div>
              </div>
              <div className="back ">
                <div className="col-sm-12 col-md-7">
                    <span className='loan2 mx-4'> Benefits of Working with <span className='loan1 '> a Real Estate Agent</span></span>
                  <div>
                    <p className='government-backed loan8 mx-4'>
                    A knowledgeable real estate agent can provide valuable insights, negotiate on your behalf, and help
                    you navigate the complexities of buying a home.
                      </p>
                  </div>
                  <div className='Mortgage  px-4 '>Online Resources</div>
                  <span className='Mortgage1  px-4'>Listing Websites</span>
                  <p className="px-4">
                    Use sites like Zillow, Realtor.com, and Redfin to browse listings and gather information.
                  </p>
                  <span className='Mortgage1 px-4'>Neighborhood Reviews</span>
                  <p className="px-4">
                      Look for reviews and forums to learn more about potential neighborhoods.
                  </p>
                </div>
                <div className="col-sm-12 col-md-5">
                  <img src="./assets/images/home-page/hunting2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
                </div>
              </div>
          </div>

          <div id="Makeanoffer" className="tab-pane fade">
              <div className="back ">
                <div className="col-sm-12 col-md-7">
                  <p className='loan2 mx-5'> Making a <span className='loan1 '>Competitive Offer </span> </p>
                  <span className='government-backed loan8'>
                  Once you find a home you love, making a strategic offer is crucial. This step can be competitive, 
                  especially in a seller's market. Understanding the local market conditions can help you determine 
                  an appropriate offer price that stands out to the seller. It's also beneficial to include a personal 
                  letter with your offer to create a connection and show your genuine interest in the home. Additionally, 
                  consider being flexible with contingencies to make your offer more appealing. Collaborating closely with
                   your real estate agent during this process can provide you with expert advice and enhance your chances 
                   of securing the home.
                  </span>
                 
                </div>
                <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
              </div>
            <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/offer1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-sm-12 col-md-8">
                <p className='loan2 mx-5 mt-3'>Steps to Making a <span className='loan1 '>Successful Offer</span> </p>
                  <div className="mx-4">
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Research the Market</span>
                    <p>Understand the home’s market value by comparing recent sales of similar homes in the area.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Consult with Your Agent</span>
                    <p>Your agent can help determine a competitive offer price and<br/>discuss contingencies and terms.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Submit a Formal Offer</span>
                    <p>Your agent will draft a purchase agreement that includes your offer price,<br/>contingencies, and proposed closing date.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Negotiate if Necessary</span>
                    <p>Be prepared for counteroffers and remain within your budget without making<br/>emotional decisions.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>5</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Earnest Money Deposit</span>
                    <p>Include an earnest money deposit (typically 1% to 2% of the purchase price) to<br/>show your commitment.</p>
                        </div>   
                    </div>
                </div>
              </div>
            </div>

          <div className="back ">
            <div className="col-sm-12 col-md-7">
              <span className='loan2 mx-4'> Key  <span className='loan1 '>Considerations </span></span>
              <p className='government-backed loan8 mx-4'>
                A knowledgeable real estate agent can provide valuable insights, negotiate on your behalf, and help
                Making a strong offer can increase your chances of securing the home you want. Be sure to
                include contingencies that protect your interests, such as financing and inspection contingencies.
              </p>
                  <h6 className='Mortgage mx-4 mt-2'>Negotiation Tips</h6>
                  <div className="mx-4">
                    <span className='Mortgage1 px-1'>Stay Firm</span>
                      <p className="mx-1">
                        Stick to your budget and don't be swayed by emotional decisions.tise to navigate the negotiation process.
                      </p>
                    <span className='Mortgage1 px-1'>Be Flexible</span>
                      <p className="mx-1">
                        Be willing to compromise on smaller issues to secure the deal.
                      </p>
                    <span className='Mortgage1 px-1'>Consult Your Agent</span>
                      <p className="mx-1">
                        Rely on your agent’s expertise to navigate the negotiation process.
                      </p>
                  </div>
              </div>
              <div className="col-sm-12 col-md-5">
                 <img src="./assets/images/home-page/offer2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
            </div>
          </div>

          <div id="Finalize-Loan" className="tab-pane fade">
            <div className="back ">
              <div className="col-sm-12 col-md-7">
              <p className='loan2 mx-5'> Finalizing Your <span className='loan1 '>Mortgage Loan </span> </p>

                <p className='government-backed loan8'>
                After your offer is accepted, you need to finalize your mortgage loan. This involves working closely 
                with your lender to complete the necessary steps. It's important to provide any additional documentation 
                they may require, such as proof of income or bank statements, to ensure a smooth process. Be prepared to
                 discuss your loan options in detail and choose the terms that best suit your financial situation. Additionally, 
                 reviewing the loan estimate carefully can help you understand your monthly payments and closing costs. Staying
                  organized and proactive during this phase will help you navigate any potential hurdles and move closer to homeownership.
                </p>
              </div>
              <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
            </div>
            <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/loan1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-sm-12 col-md-8">
                <p className='loan2 mx-5 mt-3'>Finalizing <span className='loan1 '>Your Loan</span> </p>
                  <div className="mx-4">
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Lock in Your Interest Rate</span>
                    <p>Decide whether to lock in your rate or float it until closing.<br/>Rate locks are typically for 30 to 60 days.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Submit Additional Documents</span>
                    <p>Provide any additional documentation requested<br/>by your lender.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Review Loan Estimate</span>
                    <p>Review the Loan Estimate (LE) provided by your lender and ensure<br/>all details are correct.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Schedule a Home Inspection</span>
                    <p>Hire a professional inspector to evaluate the property and address any<br/>major issues found during the inspection.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>5</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Appraisal</span>
                    <p>The lender will order an appraisal to determine the home’s value, which<br/> must meet or exceed the purchase price.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>6</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Final Approval</span>
                    <p>Your lender will issue a final approval once all conditions are met.</p>
                        </div>   
                    </div>
                </div>
              </div>
            </div>
            <div className="back ">
            <div className="col-sm-12 col-md-7">
              <span className='loan2 mx-4'> Importance of  <span className='loan1 '>Finalizing Your Loan </span></span>
              <p className='government-backed  loan8 mx-4'>
              Completing these steps promptly helps avoid delays 
              and ensures you are ready to move forward with the purchase.
              </p>
                  <h6 className='Mortgage mx-4 mt-2'>Tips for Smooth Finalization</h6>
                  <div className="mx-4">
                    <span className='Mortgage1 px-1'>Stay Organized</span>
                      <p className="mx-1">
                      Keep all documents easily accessible.tick to your budget and don't be swayed by emotional decisions.tise to navigate the negotiation process.
                      </p>
                    <span className='Mortgage1 px-1'>Communicate Regularly</span>
                      <p className="mx-1">
                      Maintain open communication with your lender and real estate agent.
                      </p>
                    <span className='Mortgage1 px-1'>Be Prompt</span>
                      <p className="mx-1">
                      Respond quickly to requests for additional information
                      </p>
                  </div>
              </div>
              <div className="col-sm-12 col-md-5">
                 <img src="./assets/images/home-page/loan2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
            </div>
          </div>
          <div id="Underwriting" className="tab-pane fade">
            <div className="back ">
              <div className="col-sm-12 col-md-7">
              <p className='loan2 mx-5'> Understanding the <span className='loan1 '>Underwriting Process </span> </p>

                <p className='government-backed loan8'>
                The underwriting process involves a thorough review of your financial information to ensure you meet 
                the loan requirements. During this phase, underwriters assess your credit history, income, debt-to-income 
                ratio, and other relevant factors to evaluate your risk as a borrower. It’s essential to remain responsive
                 and provide any requested documents promptly to avoid delays. Understanding that this process can take time will
                  help you stay patient and focused. Additionally, clear communication with your lender can help clarify any 
                  concerns that arise, ensuring a smoother underwriting experience as you move closer to securing your mortgage
                </p>
              </div>
              <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
            </div>
            <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/under1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-sm-12 col-md-8">
                <p className='loan2 mx-5 mt-3'>What to Expect <span className='loan1 '>During Underwriting</span> </p>
                  <div className="mx-4">
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Document Verification</span>
                    <p>Underwriters will verify the accuracy of your submitted documents.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Credit Review</span>
                    <p>A detailed review of your credit report and history.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Employment Verification</span>
                    <p>Confirmation of your employment status and income.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Appraisal Review</span>
                    <p>Ensure the home’s appraised value supports the loan amount.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>5</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Debt-to-Income Ratio (DTI)</span>
                    <p>Confirmation that your DTI meets the lender’s guidelines.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>6</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Clear Conditions</span>
                    <p>Provide additional information or documents if requested.</p>
                        </div>   
                    </div>
                </div>
              </div>
            </div>
            <div className="back ">
            <div className="col-sm-12 col-md-7">
              <span className='loan2 mx-4'> Importance of  <span className='loan1 '>Underwriting </span></span>
              <p className='government-backed loan8 mx-4 '>
              Underwriting is a critical step that ensures the lender has a complete understanding of
              your financial situation and the risk involved in lending you money.
              </p>
                  <h6 className='Mortgage mx-4 mt-2'>Tips for Smooth Underwriting Process</h6>
                  <div className="mx-4">
                    <span className='Mortgage1 px-1'>Be Responsive</span>
                      <p className="mx-1">
                      Quickly provide any requested documents or information.
                      </p>
                    <span className='Mortgage1 px-1'>Stay Honest</span>
                      <p className="mx-1">
                      Ensure all information provided is accurate and truthful.
                      </p>
                    <span className='Mortgage1 px-1'>Maintain Financial Stability</span>
                      <p className="mx-1">
                      Avoid making large purchases or opening new credit accounts during this time
                      </p>
                  </div>
              </div>
              <div className="col-sm-12 col-md-5">
                 <img src="./assets/images/home-page/under2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
            </div>
          </div>

          <div id="Appraisal" className="tab-pane fade">
            <div className="back ">
              <div className="col-sm-12 col-md-7">
              <p className='loan2 mx-5'> The Importance of a <span className='loan1 '>Home Appraisal</span> </p>

                <p className='government-backed loan8'>
                A home appraisal is a professional assessment of the property’s value. It ensures the lender that the home 
                is worth the loan amount. This process provides an objective evaluation of the property, which can protect 
                both the lender and the buyer from overpaying. Additionally, a successful appraisal can help in finalizing the
                 mortgage terms, as it reassures the lender of their investment's security. Understanding the appraisal 
                 process can also prepare you for potential outcomes, whether the appraisal comes in at, below, or above the
                  expected value. Ultimately, a home appraisal is a crucial step that contributes to a successful and informed 
                  home-buying experience.
                </p>
              </div>
              <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
            </div>
            <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/appraisal1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-sm-12 col-md-8">
                <p className='loan2 mx-5 mt-3'>Appraisal <span className='loan1 '>Process</span> </p>
                  <div className="mx-4">
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Property Inspection</span>
                    <p>The appraiser will visit the property to evaluate its condition, size, and features.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Comparable Sales</span>
                    <p>The appraiser will compare the property to similar homes that have recently sold in the area.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Appraisal Report</span>
                    <p>A detailed report is provided with the estimated value and findings.</p>
                        </div>   
                    </div>
                </div>
              </div>
            </div>
            <div className="back ">
            <div className="col-sm-12 col-md-7">
              <span className='loan2 mx-4'> What to Do if <span className='loan1 '>Appraisal is Low </span></span>
              <p className='government-backed loan8 mx-4'>
              If the appraisal comes in lower than the purchase price, you have several options:
              </p>
                  <div className="mx-4">
                    <span className='Mortgage1 px-1'>Renegotiate the Price</span>
                      <p className="mx-1">
                      Ensures the lender can proceed with the loan.
                      </p>
                    <span className='Mortgage1 px-1'>Increase Down Payment</span>
                      <p className="mx-1">
                      Make up the difference with a larger down payment.
                      </p>
                    <span className='Mortgage1 px-1'>Appraisal Rebuttal</span>
                      <p className="mx-1">
                      Provide evidence that the home is worth more and request a re-evaluation.
                      </p>
                      <span className='Mortgage px-1'>Benefits of a Satisfactory Appraisal</span>
                      <h6 span className='Mortgage1 px-1'>Loan Approval:</h6>
                      <p className="mx-1">
                      Ensures the lender can proceed with the loan.
                      </p>
                      <span className='Mortgage1 px-1'>Peace of Mind:</span>
                      <p className="mx-1">
                      Confirms you are not overpaying for the property.
                      </p>
                  </div>
              </div>
              <div className="col-sm-12 col-md-5">
                 <img src="./assets/images/home-page/appraisal2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
            </div>
          </div>
          <div id="Close" className="tab-pane fade">
            <div className="back ">
              <div className="col-sm-12 col-md-7">
              <p className='loan2 mx-5'> Closing the <span className='loan1 '> Deal </span> </p>

                <p className='government-backed loan8'>
                Closing is the final step in the home buying process, where ownership of the property is officially transferred to you. 
                During this stage, you'll review and sign a variety of documents, including the mortgage agreement and title transfer paperwork. 
                It's essential to carefully read through these documents to ensure you understand all terms and conditions. Additionally,
                 you’ll need to bring any necessary funds for closing costs and fees. This process can take a few hours, 
                 so being prepared and organized will make it more efficient. Once everything is signed and funds are transferred, 
                 you’ll receive the keys to your new home, marking the exciting beginning of your journey as a homeowner!
                </p>
              </div>
              <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/homebuy-4.png" alt="Mortgage Loan" className="img-fluid  img-blend"/>
                </div>
            </div>
            <div className="back">
                <div className="col-sm-12 col-md-4">
                  <img src="./assets/images/home-page/close1.png" alt="Mortgage Loan" className="img-fluid m-4 img-blend"/>
                </div>
                <div className="col-sm-12 col-md-8">
                <p className='loan2 mx-4 mt-3'>Steps to a Successful <span className='loan1 '>Closing</span> </p>
                  <div className="mx-4">
                  <div className='d-flex mt-4'>
                    <p className='reg-bor'>1</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Review Closing Disclosure</span>
                    <p>Ensure all terms, interest rates, and closing costs are accurate and as expected.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>2</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Final Walkthrough</span>
                    <p>Inspect the property one last time to ensure it is in the agreed-upon condition.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>3</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Attend Closing Meeting</span>
                    <p>Sign necessary documents, including the loan agreement, deed, and title.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>4</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Transfer Funds</span>
                    <p>Complete your down payment and pay closing costs. This is typically done via wire transfer.</p>
                        </div>   
                    </div>
                    <div className='d-flex mt-4'>
                    <p className='reg-bor'>5</p>
                    <div className='mx-3'>
                     <span className="Mortgage">Receive Keys</span>
                    <p>Once all documents are signed and funds are transferred, you receive the keys to your new home.</p>
                        </div>   
                    </div>
                </div>
              </div>
            </div>
            <div className="back ">
            <div className="col-sm-12 col-md-7">
              <span className='loan2 mx-5 '> Importance of  <span className='loan1 '> Closing </span></span>
              <p className='government-backed loan8'>
              Closing is a crucial step as it legally completes the home buying process and ensures all financial <br/>
              and legal matters are settled.
              </p>
                  <h6 className='Mortgage mx-5 mt-1'>Tips for Smooth Finalization</h6>
                  <div className="mx-5">
                    <span className='Mortgage1 px-1'>Stay in Contact:</span>
                      <p className="mx-1">
                      Keep in regular contact with your real estate agent, lender, and closing agent.Keep all documents easily accessible.tick to your budget and don't be swayed by emotional decisions.tise to navigate the negotiation process.
                      </p>
                    <span className='Mortgage1 px-1'>Review Documents Carefully:</span>
                      <p className="mx-1">
                      Ensure all documents are accurate before signing.
                      </p>
                    <span className='Mortgage1 px-1'>Prepare for Costs:</span>
                      <p className="mx-1">
                      Be prepared for closing costs and ensure funds are readily available.
                      </p>
                      <span className='Mortgage1 px-1'>Celebrate Your New Home!</span>
              <p className='mx-1'>
              Closing marks the beginning of your homeownership journey. Congratulations on your new home!
              </p>
                  </div>
              </div>
              <div>
              </div>
              <div className="col-sm-12 col-md-5">
                 <img src="./assets/images/home-page/close2.png" alt="Mortgage Loan" className="img-fluid img-blend"/> 
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>
        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
       <div className="mt-5">
       <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
       {/* <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button> */}
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


export default MortgageLoan;