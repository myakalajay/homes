"use client";

import React from "react";
import Link from 'next/link'
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import Step from "@/page/Step";


export default function Loanoptions(){
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-12 pt-5 mt-5">
       <h2>All Loans We offer</h2>
       <div className="nav nav-pills">
                 <div className="nav-item d-flex flex-row">
                 <button className="loan-but1 active mt-3 mx-2 text-center" data-bs-toggle="pill"
                         href="#All">All</button>
                       
                        <button className="loan-but2 mt-3 mx-2 text-center" data-bs-toggle="pill"
                         href="#change-password">Buy A Home</button>
                 
                        <button className="loan-but2 mt-3 mx-2 text-center" data-bs-toggle="pill"
                         href="#Licenses">Refinace</button>
                 
                        <button className="loan-but2 mt-3 mx-2 text-center" data-bs-toggle="pill"
                         href="#Lender">Take Cash Out</button>

                        <button className="loan-but2 mt-3 mx-2 text-center" data-bs-toggle="pill"
                         href="#Broker">Low Credit</button>
                 </div>
            </div>
    </div>
    <div className="tab-content">
    <div id="All" className=" tab-pane active">
      <div className="d-flex">
    <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">30-Year Fixed</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">Home Equity Loan</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">FHA Loan</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">15-Year Fixed</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="d-flex">
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">Adjustable-Rate Mortgage</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div> <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">VA Loan</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">15-Year Fixed</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="loan-card1">
          <div className="loan-cards">
            <div className="affordability"><span>Affordability</span></div>
            <h5 className="text-center">15-Year Fixed</h5>
            <p className="text-center card-para">It's still the most popular loan for buying or refinancing a home. A longer term results in lower monthly payments. You can buy a home with as little as 3% down.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-md-7 col-sm-12 get">
        <p className="offers text-center mt-5"> Don't guess what's right. Just ask us!</p>
        </div>
        <div className="col-md-5 col-sm-12 text-center get">
          <button className="btn btn-danger mt-5 mx-3">Chat With An Expert</button>
      <button className="btn btn-danger mt-5">(222) 432-8372</button>
      </div>
  </div>
  </div>
      
      {/* <Newspage/> */}
  </>
    )
}