
'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navigating(){
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
    return(
        <>
        <div className="container-fluid">
            <div>
                <div className="col-sm-12 col-md-12">
                    {/* <div className="d-flex  justify-content-center ">
                <p className="idealbox text-center">who we are</p>
                </div> */}
                <h3 className="text-center pt-1">Navigating Mortgages <span className="ideal-red">with Ease and Confidence</span></h3>
                </div>
                <div className="hometown-mortgage-cards p-2 col-lg-12 col-md-12">
                    <ul className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/Frist-time-buy.png" alt="First Time Home Buyer" />
                                <figcaption>First-time Home Buyer</figcaption>
                                <Link href="/Homebuyer"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/ARMloans.jpg" alt="AMR Loans" />
                                <figcaption>ARM Loans</figcaption>
                                <Link href="/Amrloans"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/Veterans.jpg" alt="Veterans Administration" />
                                <figcaption>Veterans Administration</figcaption>
                                <Link href="/Valoans"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>

                            </figure>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <figure>
                                <img className="img-fluid w-100" src="./assets/images/home-page/Nonqmloan.jpg" alt="Non-QM Loans" />
                                <figcaption>Non-QM Loans</figcaption>
                                <Link href="/Nonqmloans"><li><a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg></a></li></Link>
                            </figure>
                        </div>
                    </ul>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <Link href="/Navpages">
                    <button className="ideal-btn">
                        <p className="ideal-btn-text">More Services</p>
                    </button>
                    </Link>
                </div>
             </div>
        </div>
        </>
    )
}

export default Navigating;