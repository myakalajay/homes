import React from "react";
import Link from 'next/link';
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Newfooter from "@/components/NewFooter";
import Signup from "@/pages/Signup";
import Head from 'next/head';

function MortgageGlossary() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Head>
  <title>Mortgage Glossary</title>
  <meta name="description" content="Explore a comprehensive mortgage glossary to understand key terms and concepts. Learn the definitions of essential mortgage-related terms to help you navigate the homebuying process with confidence and clarity." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

      <div className='container-fluid'>
        <div className="row">
          <div className="conven-page ">
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
              <span className="home text-danger">Mortgage Glossary </span>
            </div>
          </div>

          <div className='conventional-loans' >
            <img src="./assets/images/home-page/Mortgage-glossary.jpg" alt="Mortgage-glossary" className="img-fluid w-100" />
       </div>

          <div className="col-sm-12 col-md-12">
            <div className="nav nav-pills Home-buyer">
              <div className="nav-item mx-2">
                <div>
                        <a className="mx-3 active text-center" data-bs-toggle="pill"
                         href="#A">A</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#B">B</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#C">C</a>

                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#D">D</a>

                         <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#E">E</a>
                       
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#F">F</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#G">G</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#H">H</a>

                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#I">I</a>
                         
                         <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#J">J</a>
                       
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#K">K</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#L">L</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#M">M</a>

                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#N">N</a>

                          <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#O">O</a>
                       
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#P">P</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#Q">Q</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#R">R</a>

                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#S">S</a>
                         <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#T">T</a>
                       
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#U">U</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#V">V</a>
                 
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#W">W</a>

                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#X">X</a>
                         
                         <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#Y">Y</a>
                       
                        <a className="mx-3 text-center" data-bs-toggle="pill"
                         href="#Z">Z</a>
              </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12" style={{backgroundImage:"url(./assets/images/home-page/About-back.png)"}}>
              <p className="Mortgage2 pt-3 mx-4">Use this glossary of mortgage terms to better understand the overall mortgage
              process as well as any specific mortgage terms that may be unfamiliar to you.</p>
              <div className="tab-content">
                <div id="A" className="tab-pane active">
                  <p className='Mortgage1 px-3'>A</p>
                  <div className="p-3">
                      <h5 className='Mortgage'>Abstract of title :</h5>
                        <p className="Mortgage2">A written history of all the transactions related to the title for a specific tract of land. 
                            An abstract of title covers the period from the original source of title 
                            (often the original land grant from the United States government to an individual) 
                            to the present time and summarizes all subsequent documents that have been recorded against that tract.</p>
                        <p className='Mortgage'>Acceptance:</p>
                        <p className="Mortgage2">A buyer’s or seller’s agreement to enter into a contract and be bound by the terms of the offer.</p>
                        <p className='Mortgage'>Account termination fee :</p>
                        <p className="Mortgage2">
                            A fee that may be charged if you pay in full and terminate your home equity line of credit during the first 5 years. Paying down to a zero balance does not count as termination. See
                            also: prepayment penalty.
                        </p>
                    </div>
                 </div>
                
                <div id="B" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>B</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Balance Sheet :</h5>
                      <p className="Mortgage2">A dated financial statement (in table form) that shows your assets, liabilities and net worth.</p>
                      <p className='Mortgage'> Balloon loan</p>
                      <p className="Mortgage2"> A loan that provides you with lower-than-usual monthly payments for a set period of time followed by a payment larger than usual at the end of your loan repayment period. 
                      While a balloon loan may lower your monthly payments it can also mean you make higher interest payments over the life of the loan.</p>
                    </div>
                </div>
                
                <div id="C" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>C</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Call option</h5>
                      <p className="Mortgage2">
                          A provision in a loan that gives the lender the right to accelerate the debt and require full payment of the loan immediately at the end of a specified period or for specified reason.</p>
                      <p className='Mortgage'>Cash-out refinance</p>
                      <p className="Mortgage2"> A refinance transaction in which the new loan amount exceeds the total of the principal balance of the existing first mortgage and any secondary mortgages or liens, together with closing costs and points for the new loan. 
                          This excess is usually given to the borrower in cash and can often be used for debt consolidation, home improvement or any other purpose.</p>
                    </div>
                </div>
                
                <div id="D" className="tab-pane fade">
                  <p className='Mortgage1 px-3'> D </p>
                    <div className="p-3">
                      <h5 className='Mortgage'> Debt consolidation </h5>
                      <p className="Mortgage2"> 
                         A single loan to pay off multiple debts, usually over a longer term. This is a popular use for a home equity line of credit.
                      </p>
                      <p className='Mortgage'> Debt-to-income ratio </p>
                      <p className="Mortgage2">
                        Your total monthly debt payments (for example: loans, credit cards and court-ordered payments) divided by your gross monthly income before taxes and expressed as a percentage. Federal Housing Administration (FHA) guidelines popup in early 2017 recommend that your monthly mortgage payment 
                        should be no greater than 31% of your monthly income before taxes and your total monthly debt should be no greater than 43% of your monthly income before taxes.
                      </p>
                    </div>
                </div>

                <div id="E" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>E</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Earnest money</h5>
                      <p className="Mortgage2"> A deposit made toward a down payment as a sign of good faith. The deposit is typically made when a purchase agreement is signed.</p>
                    </div>
                </div>

                <div id="F" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>F</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Fair Credit Reporting Act (FCRA)</h5>
                      <p className="Mortgage2">
                      Law passed by Congress to give borrowers certain rights when dealing with consumer reporting agencies, or credit bureaus. All credit bureaus are required to provide accurate credit histories to authorized businesses 
                      for use in evaluating applications for insurance, employment, credit or loans. Learn more about the FCRA
                      </p>
                    </div>
                </div>

                <div id="G" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>G</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Good faith estimate (GFE)</h5>
                      <p className="Mortgage2">
                         An itemized, detailed list of certain estimated costs associated with a home loan that the lender is required to provide to the borrower within 3 business days of the application.
                      </p>
                    </div>
                </div>

                <div id="H" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>H</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Home equity line of credit (HELOC)</h5>
                      <p className="Mortgage2">
                        A line of credit secured by the borrower's residence. The typical HELOC term is 30 years: a 10-year draw period followed by a 20-year repayment period. A HELOC is often used for home improvements, debt consolidation or other major expenses. In most cases, 
                        you can withdraw funds up to your available credit limit for the first 10 years (your draw period) using convenience checks, debit cards or money transfer via Online Banking. Learn more about HELOCs
                      </p>
                    </div>
                </div>

                <div id="I" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>I</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Initial advance at closing</h5>
                      <p className="Mortgage2">
                        You have chosen our funds transfer option to reduce your interest rate. Please verify that the account information is correct. If you maintain at least this $25,000 balance for the first three consecutive billing cycles the account is open, 
                        you will receive .25% off your approved rate for the life of the line.
                      </p>
                    </div>
                </div>

                <div id="J" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>J</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Jumbo loan</h5>
                      <p className="Mortgage2">
                        Also known as a nonconforming loan. The amount of the loan exceeds standards that would make it eligible for sale to Fannie Mae and Freddie Mac. Certain geographical areas have temporary conforming loan limits higher than typical conforming limits. 
                        Lenders may charge additional fees and place certain restrictions due to the large loan amounts. Learn more about jumbo loans
                      </p>
                    </div>
                </div>

                <div id="K" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>K</p>
                    <div className="p-3">
                      <h5 className='Mortgage'> NO INFO</h5>
                    </div>
                </div>

                <div id="L" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>L</p>
                    <div className="p-3">
                      <h5 className='Mortgage'> Liabilities</h5> 
                      <p className="Mortgage2">
                         A person’s debts or financial obligations. Liabilities include long-term and short-term debt, as well as potential losses from legal claims.
                      </p>
                    </div>
                </div>

                <div id="M" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>M</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Manufactured housing</h5>  
                      <p className="Mortgage2">
                        A structure that has been partially or entirely constructed at another location and moved onto the property (on a permanent foundation). A manufactured home may or may not be a mobile home.
                      </p>
                    </div>
                </div>

                <div id="N" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>N</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>No closing cost loan</h5> 
                      <p className="Mortgage2">
                        A loan in which the borrower is not required to pay cash out-of-pocket at closing for the normal closing costs. 
                        The lender typically includes the closing costs in the principal balance or charges a higher interest rate than for a loan with closing costs to cover the advance of closing costs.
                      </p>
                    </div>
                </div>

                <div id="O" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>O</p>
                    <div className="p-3">
                      <h5  className='Mortgage'>Option ARM</h5> 
                      <p className="Mortgage2">
                        A type of adjustable-rate mortgage (ARM) that offers the borrower a choice of 4 monthly payment options to help provide financial flexibility to manage payments in rising rate markets and take advantage of falling interest rates.
                      </p>
                    </div>
                </div>  

                <div id="P" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>P</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Payment change date</h5> 
                      <p className="Mortgage2">
                        The date when a new monthly payment amount takes effect on an adjustable-rate mortgage (ARM). Generally, the payment change date occurs in the month immediately after the interest rate adjustment date. The borrower is notified 30 days before the new rate and payment take effect.
                      </p>
                    </div>
                </div>

                <div id="Q" className="tab-pane fade">
                  <p className='Mortgage1  px-3'>Q</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Qualifying ratios</h5>
                      <p className="Mortgage2">
                        Calculations that are used to determine whether a borrower can qualify for a mortgage. They consist of 2 separate calculations: a housing expense as a percent of income and total debt obligations as a percent of income.
                      </p>
                    </div>
                </div>

                <div id="R" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>R</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Rate lock</h5> 
                      <p className="Mortgage2">
                        A commitment issued by a lender to a borrower guaranteeing a specific interest rate for a specified period of time. Rate lock periods are for a fixed number of days, 
                        and rate lock expiration occurs when that period has passed, subjecting the interest rate on the loan to market fluctuations since the date of the initial rate lock. When a rate lock expires, you will need to contact your lending specialist to establish a new rate lock prior to closing your loan.
                      </p>
                    </div>
                </div>

                <div id="S" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>S</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Secured loans</h5> 
                      <p className="Mortgage2">
                        Loans for which the borrower gives the lender a lien on property such as an automobile, boat, other personal property or real estate that will serve as collateral for the loan.
                      </p>
                    </div>
                </div>

                <div id="T" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>T</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Third-party fees</h5>
                      <p className="Mortgage2">
                        Fees charged for services rendered by parties other than the borrower or the lender. Such fees may include appraisal, credit report, title and flood certifications.
                      </p> 
                    </div>
                </div>

                <div id="U" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>U</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Unapplied Funds</h5>
                      <p className="Mortgage2">
                      When your entire payment or a portion of your payment received by Bank of America may be placed into a Suspense account.
                      </p>
                    </div>
                </div>
                  
                <div id="V" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>V</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>VA loans</h5>
                      <p className="Mortgage2">
                      A mortgage that is guaranteed by the Department of Veterans Affairs (VA) for qualified veterans of U.S. military forces. See also: Government loan
                      </p>
                    </div>
                </div>
                      
                <div id="W" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>W</p>
                    <div className="p-3">
                      <h5 className='Mortgage'>Windstorm insurance</h5>
                      <p className="Mortgage2">
                        This coverage is typically required in coastal areas and pays for property damage resulting from a windstorm. Like flood and earthquake coverage, windstorm insurance covers damage to the dwelling and, in some cases, 
                        personal property and living expenses if the dwelling is uninhabitable. Some states offer market assistance programs or joint underwriting associations to help homeowners find coverage in areas where coverage is scarce
                      </p>
                    </div>
                </div>

                <div id="X" className="tab-pane fade">
                  <p className='Mortgage1 px-3'>X</p>
                    <div className="p-3">
                      <h5 className='Mortgage'> NO INFO</h5>
                    </div>
                </div>

               <div id="Y" className="tab-pane fade">
                <p className='Mortgage1 px-3'>Y</p>
                  <div className="p-3">
                    <h5 className='Mortgage'> Year-end statement</h5>
                    <p className="Mortgage2">
                       The report shows how much was paid in interest during the year, as well as the remaining mortgage loan balance at the end of the year. If the bank has an impound account for you, it will also show how much was paid and reserved in property taxes. If the bank does not have a property tax impound account, then tax details are not displayed on the report.
                    </p>
                  </div>
               </div>

               <div id="Z" className="tab-pane fade">
                <p className='Mortgage1 px-3'>Z</p>
                  <div className="p-3">
                    <h5 className='Mortgage'> NO INFO</h5>
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
  );
}

export default MortgageGlossary;
