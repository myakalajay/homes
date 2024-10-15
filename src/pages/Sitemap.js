"use client";
import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import Step from "@/page/Step";

function Sitemap() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Head>
                <title>Sitemap</title>
                <meta name="description" content="Explore our comprehensive sitemap to easily navigate through loan products, refinancing options, mortgage calculators, and resources for first-time homebuyers. Find everything you need to make informed decisions about your home financing journey." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className=''>
                <div className="row conven-page">
                    <div className="col-sm-12 col-md-12 mx-5">
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <span className="home" aria-label="Home">Home 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </span>
                        </Link>
                        <span className="home">Footer 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </span>
                        <span className="home text-danger">Sitemap</span>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-12">
                <div className='conventional-loans'>
                    <img src="./assets/images/home-page/sitemap.jpg" alt="Sitemap Overview" className="img-fluid w-100" />
                </div>
            </div>

            <div className="col-sm-12 col-md-12 p-4 mx-4">
                <div className="sitemap-container">
                    <div className="sitemap-content">
                        <div className="column">
                            <span className="loan9 underline">Loan Products </span>
                            <Link href="Conventional">Conventional Loans</Link>
                            <Link href="Amrloans">ARM Loans</Link>
                            <Link href="Fhaloans">FHA Loans </Link>
                            <Link href="Usdaloans">USDA Loans </Link>
                            <Link href="Nonqmloans">Non-QM Loans</Link>
                            <Link href="Valoans">VA Loans </Link>
                        </div>
                        <div className="column">
                            <span className="loan9 underline">Refinance</span>
                            <Link href="Refinancing">Home Refinancing Loans </Link>
                            <Link href="CashoutRefinancing">Cash-Out Refinancing Loans</Link>
                            <Link href="Equity">Home Equity Loans </Link>
                            <Link href="Varefinancing">VA Refinancing Loans </Link>
                            <Link href="Fharefinancing">FHA Refinancing Loans</Link>
                        </div>
                        <div className="column">
                            <span className="loan9 underline">Calculators</span>
                            <Link href="Monthlypayment">Monthly Payment Calculator</Link>
                            <Link href="AffordabilityCalculator">Affordability Calculator</Link>
                            <Link href="Refinancecalculator">Refinance calculator</Link>
                            <Link href="Consolidate">Consolidate Calculator</Link>
                        </div>
                        <div className="column">
                            <span className="loan9 underline">Resources</span>
                            <Link href="Homebuyer">First-Time Home buyer</Link>
                            <Link href="MortgageGlossary">Mortgage Glossary</Link>
                            <Link href="MortgageLoan">Mortgage Loan Process</Link>
                            <Link href="About">About</Link>
                            <Link href="Faq">FAQs</Link>
                            <Link href="Homeloan">Mortgage Types </Link>
                        </div>
                    </div>
                    <div className="row mx-4 mt-5">
                        <div className="col-sm-12 col-md-12 col-lg-7 get1">
                            <div className="m-4">
                                <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
                            <div className="mt-5">
                                <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
                                <Link href="/MortgageLoan">
                                    <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button>
                                </Link>
                            </div>
                            <Step
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sitemap;
