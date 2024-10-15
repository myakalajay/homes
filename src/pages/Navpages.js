import HomeBanner from '@/components/HomeBanner';
import Newfooter from '@/components/NewFooter';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

function Navpages() {
  return (
    <>
    <Head>
  <title>More Services</title>
  <meta name="description" content="Explore our range of additional services designed to enhance your mortgage experience. Discover options for refinancing, financial consulting, and personalized support to meet your unique home financing needs." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

    <HomeBanner/>
    <div className='container-fluid'>
        <div className='p-5'>
            <h2 className='px-3'>More Services</h2>
            <div className="hometown-mortgage-cards p-4 col-lg-12 col-md-12">
                    <ul className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service7.jpg" alt="First Time Home Buyer" />
                                <figcaption>First-time Home Buyer</figcaption>
                                <Link href="/Homebuyer"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/Service2.jpg" alt="AMR Loans" />
                                <figcaption>ARM Loans</figcaption>
                                <Link href="/Amrloans"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service6.jpg" alt="Veterans Administration" />
                                <figcaption>Veterans Administration</figcaption>
                                <Link href="/Valoans"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>

                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service5.jpg" alt="Non-QM Loans" />
                                <figcaption>Non-QM Loans</figcaption>
                                <Link href="/Nonqmloans"><li><a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                    </ul>
                </div>
                <div className="hometown-mortgage-cards p-4 col-lg-12 col-md-12">
                    <ul className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service1.png" alt="First Time Home Buyer" />
                                <figcaption>Conventional</figcaption>
                                <Link href="/Conventioan"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service3.jpg" alt="AMR Loans" />
                                <figcaption>FHA Loans</figcaption>
                                <Link href="/Fhaloans"><><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service4.jpg" alt="Veterans Administration" />
                                <figcaption>USDA Loans</figcaption>
                                <Link href="/Usdaloans"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/service8.jpg" alt="Non-QM Loans" />
                                <figcaption>Mortgage Loan process</figcaption>
                                <Link href="/MortgageLoan "><li><a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                    </ul>
                </div>
                </div>
                </div>
    </>
  )
}

export default Navpages