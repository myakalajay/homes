"use client";
import React from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import Signup from "@/pages/Signup";


function Blog () {
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
       <span className="home text-danger">Blog</span>
       </div>
       </div>
      <div className="col-sm-12 col-md-12 pb-5">
        <div className='conventional-loans' style={{ backgroundImage: "url(./assets/images/home-page/mortgageloan.jpg)"}}>
            <div className="col-md-12 p-5">
                <span className='conventional'>Blog</span>
            </div>
       </div>
       </div>
       <div className="col-sm-12 col-md-8 d-flex flex-row justify-content-end pb-5" style={{backgroundColor:"#DDD",paddingTop:"30px"}}>
            <div className="blog-back mt-3">
                <div className="d-flex mt-3">
                    <img src="./assets/images/home-page/blog-img.png" alt="" className="blog-img"/>
                    <div className="px-3">
                    <a className="blog-link">High Student Loans? Here's How<br/>You Can Still Buy a Home</a>
                    <p className="blog-para">If you have student loan debt, you are not alone. But just because <br/>you are still paying off your college …</p>
                    <span className="blog-text">Jul 5 2024 <a href="#"> Home Loan</a></span>
                    </div>
                </div>
                <div className="d-flex mt-5">
                <img src="./assets/images/home-page/blog-img1.png" alt="" className="blog-img"/>
                    <div className="px-3">
                    <a className="blog-link">Asian American Homeownership <br/>on the Rise Despite Challenges</a>
                    <p className="blog-para">If you have student loan debt, you are not alone. But just because <br/>you are still paying off your college …</p>
                    <span className="blog-text">Jul 5 2024 <a href="#"> Home Loan</a></span>
                    </div>
                    
                </div>
                <div className="d-flex mt-5">
                <img src="./assets/images/home-page/blog-img3.png" alt="" className="blog-img"/>
                    <div className="px-3">
                    <a className="blog-link">Homebuyers Can Lock in Super-<br/>Low Rates with Assumable <br/>Mortgages. Are the Loans Worth <br/>the Risks?</a>
                    <p className="blog-para">If you have student loan debt, you are not alone. But just because <br/>you are still paying off your college …</p>
                    <span className="blog-text">Jul 5 2024 <a href="#"> Home Loan</a></span>
                    </div>
                </div>
                <div className="d-flex mt-5">
                <img src="./assets/images/home-page/blog-img4.png" alt="" className="blog-img"/>
                    <div className="px-3">
                    <a className="blog-link">Self-Employed? No Problem. How <br/>to Get a Non-QM Loan to Buy a <br/>Home</a>
                    <p className="blog-para">If you have student loan debt, you are not alone. But just because <br/>you are still paying off your college …</p>
                    <span className="blog-text">Jul 5 2024 <a href="#"> Home Loan</a></span>
                    </div>
                </div>
            </div>
       </div>
       <div className="col-sm-12 col-md-4"  style={{backgroundColor:"#DDD",paddingLeft:"20px",paddingTop:"30px"}}>
            <div className="mt-3"> 
                <h6 className="blog-heading px-3">Trending</h6>
                <div className="px-4">
                    <ul className="list-unstyled">
                        <li className="blog-text">
                    <a>FHA vs Conventional Loans</a></li>
                    <li className="blog-text">
                        <a>Home Buying FAQs</a>
                    </li>
                    <li className="blog-text">
                        <a>Pre-Approved Mortgage or Pre-<br/>Qualified</a>
                    </li>
                    <li className="blog-text">
                        <a>How to Become a First Time Home<br/> Buyer</a>
                    </li>
                    <li className="blog-text">
                        <a >Buying a Home with Non-Traditional <br/>Income Verification</a>
                    </li>
                    <li className="blog-text">
                        <a >Down Payment Download: How Much <br/>Do You Really Need?</a>
                    </li>
                    </ul>
                </div>
            </div>
                <div>
                    <h6 className="blog-heading px-3">Categories</h6>
                        <ul className="list-unstyled px-4">
                            <li className="blog-text"><a>Financial Markets</a></li>
                            <li className="blog-text"><a>Home Life</a></li>
                            <li className="blog-text"><a>Home Loans</a></li>
                            <li className="blog-text"><a>Mortgage News</a></li>
                            <li className="blog-text"><a>Personal Finance</a></li>
                            <li className="blog-text"><a>Real Estate Business</a></li>
                            <li className="blog-text"><a>Real Estate Tips</a></li>
                        </ul>
                </div>
            <div>
            <h6 className="blog-heading px-3">Popular Resources</h6>
            
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
        
      </div>  
      </div>
      </div>
     </>

    )
}
export default Blog;