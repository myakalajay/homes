"use client";

import React from "react";
import Link from 'next/link';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";
import Head from 'next/head';

export default function Usdaloans(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        <Head>
  <title>USDA Loans</title>
  <meta name="description" content="Explore USDA Loans, designed for low-to-moderate income borrowers in rural areas. Learn about eligibility, benefits like zero down payment, and how to apply for this government-backed mortgage." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

        <div className=''>
       <div className="row">
            <div className="col-md-12 col-sm-12 mx-5 conven-page">
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
                <span className="home text-danger">USDA Loans</span>
                </div>
                <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' >
            <img src="./assets/images/home-page/USDA-Header.jpg" alt="USDA Loan" className="img-fluid w-100" />
       </div>
       </div>
            <div className='col-sm-12 col-md-7 back1'>
            <div className=" mx-5 mt-3">
              <span className='loan2 '> Supporting Rural  </span>
              <span className='loan1 '>  Home Buyers</span>
              </div>
        <span className='government-backed loan8'>
        USDA loans, offered through the U.S. Department of Agriculture, aim to promote affordable homeownership 
        in rural and suburban areas. These loans are especially beneficial for low- to moderate-income buyers, offering no down payment, 
        low interest rates, and affordable financing options. Designed to uplift rural communities, USDA loans help foster local economies 
        by encouraging homeownership and stabilizing rural living. 
        </span>
      </div>
      <div className="col-md-5 back back1 text-center">
      <img src=".\assets\images\home-page\usdaimage.png" alt="USDA Loan" style={{height:"250px",width:"492px",marginTop:"10px"}} className="img-fluid p-3"/>
        </div>

            <div className="col-sm-12 col-md-5 col-xl-5 pt-4 text-center">
                <img src=".\assets\images\home-page\usdasub.png" alt="USDA Loan" className="img-fluid p-4 img-blend"/>
            </div>
            <div className="col-sm-12 col-md-7 col-xl-7 p-4">
              <div>
              <span className='loan2 '>Overview Of</span>
              <span className='loan1 '> USDA Loan </span>
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
                                    USDA loans are government-backed mortgage programs created to provide affordable homeownership options 
                                    in designated rural and suburban areas. These loans are particularly targeted at low-income families and 
                                    individuals who may not qualify for conventional mortgages. Key benefits include no down payment and lower-than-average 
                                    interest rates, making them an attractive choice for first-time homebuyers and those looking for affordable housing in less populated areas.
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
                                   <span className=""> USDA loans come in various forms, each tailored to meet different financial needs and circumstances.<br/>
                                     Below are the key types of USDA loans available:<br/> </span>
                                     
                                      <span className="Mortgage mb-1"> USDA Single Family Housing Direct Home Loans: </span>
                                     <p>These loans cater to very low-income families who are unable to secure credit from other sources. With no down payment and low-interest rates, 
                                      the loan terms can extend up to 38 years, making homeownership accessible to economically disadvantaged families. </p>
                   
                                        <span className="Mortgage mb-1">USDA Single Family Housing Guaranteed Loan Program: </span>
                                         <p>This program allows approved lenders to provide loans to low- to moderate-income borrowers. The USDA guarantees a portion of the loan, 
                                          which reduces the lender's risk, resulting in favorable terms such as no down payment and competitive interest rates. .</p>
                   
                                        <span className="Mortgage mb-1">USDA Rural Repair and Rehabilitation Loans and Grants:</span>
                                        <p>These funds are available to low-income homeowners needing to repair, improve, or modernize their homes, particularly to address health and safety 
                                          concerns. Grants are also available to elderly homeowners.</p>
                                    
                                        <span className="Mortgage mb-1">  USDA Housing Preservation Grants: </span>
                                        <p>This program supports non-profit organizations and government entities in rehabilitating homes for low-income homeowners in rural areas. The grants 
                                          aim to preserve housing quality and improve living conditions.</p>
                  
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       No Down Payment Requirement
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    One of the standout features of USDA loans is the ability to finance 100% of the home's purchase price, requiring no down payment. 
                                    This makes these loans particularly attractive for lower-income families in rural areas, as it removes one of the biggest barriers to homeownership. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       Lower Interest Rates
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    USDA loans come with competitive, and often lower, interest rates compared to conventional loans. 
                                    This reduces the overall cost of the mortgage, making homeownership more financially feasible for qualified borrowers in rural regions.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                      Mortgage Insurance Premiums
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse danger" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    While USDA loans don’t require traditional private mortgage insurance (PMI), they include an upfront guarantee fee and a smaller, 
                                    annual fee spread across monthly payments. These fees help maintain the USDA loan program while keeping costs manageable for borrowers.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                      Eligibility Criteria
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse danger" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Eligibility for USDA loans depends on income limits and the property’s location within designated rural areas. 
                                    Applicants must meet the income criteria specific to the area and demonstrate financial need. Properties must 
                                    also meet USDA guidelines regarding location and quality to qualify for the program.
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
      <div className="col-md-12 col-sm-12">
        <div className="text-left  px-5">
        <span className='loan2 '>Pros and Cons   </span>
        <span className='loan1 '>of USDA Loans</span>
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
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Increased Affordability for Rural Homebuyers:</span>
          <p  className="mx-4">USDA loans allow low- to moderate-income families to own homes without needing a down payment, offering competitive mortgage terms that make homeownership more accessible in rural areas.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Accessibility for Veterans and Service Members:</span>
          <p  className="mx-4">USDA loans are restricted to properties located in USDA-defined rural areas. This geographic limitation can make it difficult for buyers who prefer suburban or urban regions.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/> <span className='Mortgage1 '>Accessibility for Low- to Moderate-Income Families:</span>
          <p  className="mx-4">USDA loans provide financing options for families who may not qualify for traditional loans, especially in rural areas. These programs are critical for enabling homeownership among financially disadvantaged individuals. </p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/> <span className='Mortgage1'>Income Limits:</span>
          <p  className="mx-4">Borrowers must meet USDA income limits to qualify, which may exclude higher-income individuals from the program. This can be a drawback for those who exceed the income threshold.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Competitive Mortgage Terms:</span>
          <p  className="mx-4">USDA loans often come with lower interest rates and favorable terms compared to conventional loans, making them a cost-effective option for borrowers looking to minimize their borrowing costs.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Property Eligibility Requirements:</span>
          <p  className="mx-4">USDA loans have strict property eligibility guidelines, which can limit the number of homes that qualify. Properties must meet location and condition standards, ensuring homes are safe and habitable, but limiting housing choices.</p></td>
        </tr>
        <tr>
          <td><img src="./assets/images/home-banner/right.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Streamlined Refinancing Options:</span>
          <p  className="mx-4">USDA borrowers can take advantage of streamlined refinancing options to secure lower rates or better terms, making it easier to manage their loans over time.</p></td>
          <td><img src="./assets/images/home-banner/wrong.png" alt="" width="22px" height="22px"/><span className='Mortgage1 mx-1'>Funding Fee and Mortgage Insurance:</span>
          <p  className="mx-4">While USDA loans do not require PMI, they do come with an upfront funding fee and annual mortgage insurance premiums, increasing the overall cost of the loan.</p></td>
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