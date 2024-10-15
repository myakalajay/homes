"use client";
import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";

function MortageResources () {
  const [modalShow, setModalShow] = React.useState(false);
    return(
       <>
       <div className='container-fluid'>
       <div className="row">
       <div className="conven-page">
       <div className="col-sm-12 col-md-12 mx-3">
       <Link href="/" style={{textDecorationLine:"none"}}>
                <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
             </Link>
                <span className="home">Resources <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
       <span className="home text-danger">Mortage Resources</span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12">
        <div className='conventional-loans' style={{ backgroundImage: "url(./assets/images/home-page/Conventional-Header.jpg)"}}>
            <div className="col-md-12 p-5">
                <span className='conventional'>Mortage </span>
                <span className='loans'> Resources</span>
              
            </div>
       </div>
       </div>
       <div className="col-sm-12 col-md-12">
       <div className="nav nav-pills Home-buyer">
                 <div className="nav-item d-flex flex-row">
                 <button className="loan-but1 active text-center" data-bs-toggle="pill"
                         href="#All">Calculators</button>
                       
                        <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#Blog">Blog</button>
                 
                        <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#Licenses">Video </button>
                 
                        <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Lender">Downloads</button> 
                 </div>
            </div>
    </div>
    <div className="col-sm-12 col-md-12" style={{backgroundImage:"url(./assets/images/home-page/About-back.png)"}}>                
                    <div className="tab-content">
                    <div id="All" className="tab-pane active">
                      <h1>hello this calculator</h1>
                </div>
                  <div id="Blog" className="tab-pane fade">
                    <div className="homebuyer-dir">
                        <div>
                          <ul className="list-unstyled">
                            <li className="p-3">
                                <a className="red-link">What are the Benefits of Refinancing Your Mortgage?</a>
                            </li>
                            <li className="p-3">
                                <a className="red-link">How can I acquire a mortgage to purchase a home?</a>
                            </li>
                            <li className="p-3">
                                <a className="red-link">Are there any first-time homebuyer programs in my area?</a>
                            </li>
                            <li className="p-3">
                                <a className="red-link">What conditions need to be met for a home loan approval?</a>
                            </li>
                            <li className="p-3">
                                <a className="red-link">What should I know about buying a home with an FHA loan?</a>
                            </li>
                            <li className="p-3">
                                <a className="red-link">What should I know about buying a home with an FHA loan?</a>
                            </li>
                            <li className="p-3">
                              <a className="red-link ">What should I know about buying a home with an FHA loan?</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                <div id="Licenses" className="tab-pane fade">
                </div>
                <div id="Lender" className="tab-pane fade">
            </div>  
            <div id="Broker" className="tab-pane fade">
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
          <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn more</button>
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
};
export default MortageResources;