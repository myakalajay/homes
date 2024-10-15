"use client";
import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";

function About () {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Head>
        <title>About </title>
        <meta name="description" content="Learn more about Homeratesyard Mortgages, offering tailored residential mortgage solutions for U.S. citizens and Foreign Nationals." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className=''>
        <div className="row">
          <div className="conven-page">
            <div className="col-sm-12 col-md-12 mx-5">
              <Link href="/" style={{ textDecorationLine: "none" }}>
                <span className="home">Home
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </span>
              </Link>
              <span className="home">Resources 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </span>
              <span className="home text-danger">About</span>
            </div>
          </div>

          <div className="col-sm-12 col-md-12">
            <div className='conventional-loans'>
              <img src="./assets/images/home-page/About.jpg" alt="About" className="img-fluid w-100" />
            </div>
          </div>

          <div className='col-md-7 col-sm-12 back1'>
            <div>
              <span className='loan1 mt-4 mx-5'>Overview</span>
            </div>
            <span className='government-backed loan8'>
              At Homeratesyard Mortgages, we specialize in delivering tailored residential mortgage solutions 
              for U.S. citizens and Foreign Nationals residing abroad. Our extensive portfolio features over 
              150 mortgage products from top U.S. banks and wholesale lenders, designed specifically for 
              our international clientele. 
            </span>
            <span className='government-backed loan8'>
              In addition to residential financing, we offer a variety of options for commercial loans, 
              portfolio financing, bridging loans, and high-value home mortgages through our network of 
              specialized lenders, both in the United States and overseas. Our commitment is to provide 
              you with personalized service and competitive rates to meet your unique financial needs. 
            </span>
          </div>

          <div className="col-md-5 back1 text-center">
            <img src=".\assets\images\home-page\About1.png" alt="About" style={{ height: "250px", width: "492px", marginTop: "10px" }} className="img-fluid p-3" />
          </div>

          <div className="col-sm-12 col-md-4 d-flex justify-content-center">
            <img src=".\assets\images\home-page\About-section1.png" alt="About" className="img-fluid img-blend p-3" />
          </div>

          <div className='col-md-7 col-sm-12'>
            <div className="p-3">
              <span className='loan2'>Our</span>
              <span className='loan1'> Story</span>
              <p className='homebuyer-textsection'>
                <span className='Mortgage'> Homeratesyard Mortgages: </span>
                Your Global Real Estate Financing Partner. We offer comprehensive real estate financing solutions tailored for clients in the U.K., 
                Canada, Australia, France, Thailand, Hong Kong, and beyond, in addition to serving the U.S. market.
              </p>
              <p className='homebuyer-textsection'>
                Our journey began over a year ago when our co-founders met in Los Angeles and formed a lasting friendship. 
                We recognized the challenge of securing overseas mortgages as non-residents, particularly for U.S. properties. 
                Driven by this insight, we set out on a mission to provide seamless mortgage solutions for our international clients.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
              <p className="offers1">Prequalify now with the Homeratesyard <br />Digital Mortgage Experience</p>
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

export default About;
