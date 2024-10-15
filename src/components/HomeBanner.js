"use client"
import React, { useEffect, useState } from "react";
import RatesGraph from '@/page/RatesGraph';
import Step from "../page/Step";
import Link from "next/link";

function HomeBanner() {
    const [modalShow, setModalShow] = React.useState(false);
    const [Showmodal, setShowModal] = React.useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
    return (
    <>
        <section>
        <div>
            <div id="homeBannerControls" className="carousel slide pt-5 mt-5" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeBannerControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeBannerControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homeBannerControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row p-5 align-items-center heroBanner back" style={{ backgroundImage: "url(./assets/images/home-banner/Homecelebrates.jpg)",height:"100%", backgroundSize:'cover' }}>
                                <div className="col-md-5">
                                    <h1>Making Homeownership Affordable and Attainable! </h1>
                                    <p>Let us help you navigate every step, from exploring options to securing <br/>your ideal home. </p>
                                    <div className="d-flex gap-2">
                                    <button className="explore-button" onClick={() => setModalShow(true)}>
                                        EXPLORE YOUR HOME LOAN OPTIONS
                                        </button>
                                        <Step
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-2 text-center">
                                    <div className='bg-transparent '>
                                        <RatesGraph />
                                    </div>
                                </div>
                        </div>
                </div>
                <div className="carousel-item">
                <div className="row p-5 align-items-center heroBanner back" style={{ backgroundImage: "url(./assets/images/home-banner/Uniqueintegratedplatform.jpg)",height:"100%", backgroundSize:'cover'}}>
                                <div className="col-md-6">
                                    <h1>Connecting Borrowers, Mortgage Experts, and Lenders Seamlessly!</h1>
                                    <p> Discover tailored solutions and make informed decisions<br/> for your home financing. </p>
                                    <div className="d-flex gap-2">
                                    <button className="explore-button" onClick={() => setShowModal(true)}>
                                        EXPLORE YOUR HOME LOAN OPTIONS
                                        </button>
                                        <Step
                                        show={Showmodal}
                                        onHide={() => setShowModal(false)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-2 text-center">
                                    <div className='bg-transparent '>
                                        <RatesGraph />
                                    </div>
                                </div>
                            </div>
                </div>
                
                <div className="carousel-item">
                            <div className="row p-5 align-items-center heroBanner back" style={{ backgroundImage: "url(./assets/images/home-banner/GetPreapprovallette.jpg)",height:"100%", backgroundSize:'cover' }}>
                                <div className="col-md-6">
                                    <h1>Get Your Preapproval Letter in 60 Minutes or Less!</h1>
                                    <p>Simplify Your Mortgage Experience with streamlined processes and <br/>personalized support.  </p>
                                    <div className="d-flex gap-2" >
                                        <Link href='/PreApprovalPage' className="explore-button1 text-center" style={{textDecorationLine:"none"}}>Get Preapproval Letter</Link>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-2 text-center">
                                    <div className='bg-transparent '>
                                        <RatesGraph />
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeBannerControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeBannerControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </section>
    </>
    );
}

export default HomeBanner;