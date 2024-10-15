
'use client'
import React, { useEffect, useState } from "react";
import HomeProcessCards from "./HomeProcessCards";

function Idealproperty(){
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
            <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div id="homeyearControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeyearControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeyearControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homeyearControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner text-center" style={{margin:'0 auto'}}>
                    <div className="carousel-item active ">
                        <img src="./assets/images/home-page/homeyear.png" alt="homeyear" className="img-fluid" />
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/images/home-page/homeyear2.png" alt="homeyear" className="img-fluid" />
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/images/home-page/homeyear3.png" alt="homeyear" className="img-fluid" />
                    </div>
                </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#homeyearControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true "></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeyearControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                <div className=" pt-4 px-3">
                    {/* <p className="idealbox d-flex flex-column justify-content-center">Your Partner in Home Financing</p> */}
                    <h3> Your Partner in  <span className="ideal-red">Home Financing</span></h3>
                    <p className="idealtext"> At HomeRatesYard, we make home financing simple, offering personalized mortgage options for borrowers and platform to connect with mortgage experts. 
                    </p>
                </div>
                <div>
                <HomeProcessCards/>
                </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Idealproperty;