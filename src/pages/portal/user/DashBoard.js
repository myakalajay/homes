"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Property from "./Property";
import Dashscenarios from "./Dashscenarios";
import Dashpreapproval from "./Dashpreapproval";
import Dashrefinacetracker from "./Dashrefinacetracker";
import Userloantracker from "./userloantracker";
import Dashmain from "./Dashmain";
import Dashproperty from "./Dashproperty";
import Addloan from "./Addloan";
import Step from "@/page/Step";
import StepLoan from "@/page/StepLoan";
import StepProperty from "@/page/StepProperty";
import Myloan from "./Myloan";
import Head from 'next/head';

const DashBoard = () => {
    const [expand, setExpand] = useState(true);
    const [modalpropertyShow, setModalPropertyShow] = useState(false);
    const [modalLoanShow, setModalLoanShow] = useState(false);
    const [dashtext, setDashText] = useState([]);
    const [dashname, setDashName] = useState([]);
    const [properties, setProperties] = useState([]);
    const [exploreModalShow, setExploreModalShow] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state
    const firstname = useSelector(state => state.auth.firstname);
    const user = useSelector(state => state.auth.userid);
    const token = useSelector(state => state.auth.token);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        
        const fetchDashname = async () => {
            const requestData = { user: user, token: token };
            try {
                setLoading(true); // Set loading to true when fetching data
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                    setDashText(data.result_sets[0]);
                    setDashName(data.result_sets[1]);
                } else {
                    console.error('Expected an array but got:', data.result_sets);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Reset loading state
            }
        };
        fetchDashname();
    }, [user, token]);

    const handlePropertyTypeClick = (property) => {
        setModalShow(true);
    };

    const handleLoanTypeClick = () => {
        setModalLoanShow(true);
    };

    const [activet, setActiveT] = useState('Dashboard');

    const handleDashChange = (tab) => {
        setActiveT(tab);
        setExpand(true); // Expand all buttons on any tab click
    };

    const toggleExpand = () => {
        setExpand(!expand);
    };

    return (
        <>
<Head>
    <title>Dashboard</title>
    <meta 
        name="description" 
        content="Welcome to your Dashboard. Access essential tools, manage your account, and explore resources tailored to enhance your experience. Stay informed about your responsibilities and discover how we support you while using our platform." 
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

            <div className="container-fluid">
                <div className="row scrollable-element">
                    <div className="col-sm-12 col-md-12 d-flex">
                        <div className="nav nav-pills">
                            <div className="nav-item" style={{ marginTop: "150px", height: "100%", marginBottom: "100px" }}>
                                <button
                                    className={`toggle-expand-btn ${expand ? 'expanded' : ''}`}
                                    onClick={toggleExpand}
                                >
                                    {expand ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>}
                                </button>
                                {/** Render loading indicator here */}
                                {loading && (
                                    <div className="loading-container">
                                        <div className="loading-indicator" style={{ backgroundColor: '#AB133', width: '30px', height: '30px', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    </div>
                                )}
                            
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Dashboard' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Dashboard')}
                                >
                                    <FaUserEdit style={{ marginRight: '10px' }} />
                                    {expand && <span> Dashboard</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Your-Scenarios' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Your-Scenarios')}
                                >
                                    <FaKey style={{ marginRight: '10px' }} />
                                    {expand && <span> Your Scenario &apos;s</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Pre-Approved-Letters' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Pre-Approved-Letters')}
                                >
                                    <FaCertificate style={{ marginRight: '10px' }} />
                                    {expand && <span> Pre Approved Letters</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Add-Property' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Add-Property')}
                                >
                                    <FaUniversity style={{ marginRight: '10px' }} />
                                    {expand && <span> Add Property</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'My-Loan' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('My-Loan')}
                                >
                                    <FaUniversity style={{ marginRight: '10px' }} />
                                    {expand && <span> My Loan</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Loan-Tracker' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Loan-Tracker')}
                                >
                                    <FaUserTie style={{ marginRight: '10px' }} />
                                    {expand && <span> Loan Tracker</span>}
                                </button>
                                <button
                                    className={`dash-but ${expand ? 'expanded' : ''} ${activet === 'Refinance-Tracker' ? 'active' : ''}`}
                                    onClick={() => handleDashChange('Refinance-Tracker')}
                                >
                                    <FaEnvelope style={{ marginRight: '10px' }} />
                                    {expand && <span> Refinance Tracker</span>}
                                </button>
                            </div>
                        </div>
                    <div className="tab-content dashboard-background">
                        <div className="col-sm-12 col-md-12" style={{ marginTop: "150px" }}>
                            <div className='p-3 mx-2 dash-card1  d-flex justify-content-between'>                  
                                <div className="mx-1">
                                    <h5 className="dash-adtext">{isLoggedIn ?`Welcome back, ${firstname}!`: 'HI'}</h5> 
                                    <p> You have earned 54% more than last month<br/>
                                    which is great thing.</p>
                                    <div className="d-flex">
                                        <div>
                                            <div className="d-flex">
                                                <span className="dash-adtext"><h6>
                                                    {Array.isArray(dashtext) && dashtext.length > 0 ? (
                                                        dashtext.map((dash) => (
                                                            <p key={dash.year} value={dash.totalvalue}>
                                                                {/* <img src="/assets/images/icons/dashboard-card1.svg" alt="" /> */}
                                                                ${dash.totalvalue !== null ? dash.totalvalue : "No data available"}
                                                            </p>
                                                            // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                        ))
                                                    ) : (
                                                        <></>
                                                        // <p className="dash-text"> <img src="/assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                    )}
                                                </h6></span>
                                                <span>
                                                {Array.isArray(dashtext) && dashtext.length > 0 ? (
                                                    dashtext.map((dash) => (
                                                    <p key={dash.year} value={dash.year} className="dash-year">
                                                        {/* <img src="./assets/images/icons/dashboard-card1.svg" alt="" /> */}
                                                        {dash.year !== null ? dash.year : "No data available"}
                                                    </p>
                                                    // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                        ))
                                                    ) : (
                                                    <></>  // <p> <img src="./assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                    )}  
                                                </span>
                                            </div>
                                            <button className="btn btn-primary">Check</button>
                                        </div>
                                        <div className="d-flex margin-card2">
                                        <div className=" dashboard-card1">
                                            <span className="dash-text">Your Homes</span> 
                                            <div className="pt-2 px-1">
                                                <h6>
                                                    {Array.isArray(dashtext) && dashtext.length > 0 ? (
                                                        dashtext.map((dash) => (
                                                            <p key={dash.year} value={dash.propcount}>
                                                                <img src="/assets/images/icons/dashboard-card1.svg" alt="" />
                                                                {dash.propcount !== null ? dash.propcount : "No data available"}
                                                            </p>
                                                            // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                        ))
                                                    ) : (
                                                        <p  className="dash-text"> <img src="/assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                    )}
                                                </h6>
                                            </div> 
                                        </div>
                                        <div className="dashboard-card1">
                                            <span className="dash-text">Networth</span>  
                                            <div className="pt-2 ">
                                                <h6>
                                                    {Array.isArray(dashtext) && dashtext.length > 0 ? (
                                                        dashtext.map((dash) => (
                                                            <p key={dash.year} value={dash.totalvalue}>
                                                                <img src="/assets/images/icons/dashboard-card1.svg" alt="" />
                                                                ${dash.totalvalue !== null ? dash.totalvalue : "No data available"}
                                                            </p>
                                                            // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                        ))
                                                    ) : (
                                                        <p className="dash-text"> <img src="/assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                    )}
                                                </h6>
                                            </div> 
                                        </div>
                                        <div className="dashboard-card1">
                                            <span className="dash-text" style={{fontWeight:"700"}}>Loan Amount</span>  
                                            <div className="pt-2 px-1">
                                                <h6>
                                                    {Array.isArray(dashtext) && dashtext.length > 0 ? (
                                                        dashtext.map((dash) => (
                                                            <p key={dash.year} value={dash.outstandingloan}>
                                                                <img src="/assets/images/icons/dashboard-card1.svg" alt="" />
                                                                {dash.outstandingloan !== null ? dash.outstandingloan : "No data available"}
                                                            </p>
                                                            // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                        ))
                                                    ) : (
                                                        <p  className="dash-text"> <img src="./assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                    )}
                                                </h6>
                                            </div> 
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="/assets/images/home-page/Dashcard-img.png" alt="" className="dash-img"/> 
                            </div>
                        </div>
                        <div id="Dashboard" className={`tab-pane ${activet === 'Dashboard' ? 'active' : 'fade'}`}>
                            <div className=" mx-1">
                                <div className="mx-2 m-1 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text"> Dashboard</span>
                                        <h4 className="dashmain-head"> Your Summary</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <div className="dash-card2 mx-1">
                                        <div className="">
                                            <h5 className="mx-1">Your Overview</h5>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="d-flex">
                                                <div className="dashboard-card">
                                                    <span className="dash-text" onClick={() => handleDashChange('Pre-Approved-Letters')}>Pre approved request</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                            {Array.isArray(dashname) && dashname.length > 0 ? (
                                                                dashname.map((dash) => (
                                                                    <p key={dash.loanscnt} value={dash.preapprovalcnt}>
                                                                        <img src="/assets/images/icons/dashboard-card1.svg" alt="" />
                                                                        {dash.preapprovalcnt !== null ? dash.preapprovalcnt : "No data available"}
                                                                    </p>
                                                                        // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                                    ))
                                                                ) : (
                                                                <p> <img src="/assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                            )}
                                                        </h6>
                                                    </div>
                                                    {/* <div className="dash-text">
                                                        Avg up by
                                                        <span className="dash-text px-4">+12%</span>
                                                    </div> */}
                                                </div>
                                                <div className="dashboard-card">
                                                    <span className="dash-text" onClick={() => handleDashChange('Your-Scenarios')}> User Scenarios</span>
                                                    <div className="pt-1 px-1">
                                                        <h6>  
                                                            {Array.isArray(dashname) && dashname.length > 0 ? (
                                                                dashname.map((dash) => (
                                                                    <p className="pt-2" key={dash.loanscnt} value={dash.scenariocnt}>
                                                                        <img src="/assets/images/icons/dash-card2.svg" alt="" />
                                                                        {dash.scenariocnt !== null ? dash.scenariocnt : "No data available"}
                                                                    </p>
                                                                ))
                                                            ) : (
                                                                <p><img src="/assets/images/icons/dash-card2.svg" alt="" />No data available</p>
                                                            )}
                                                        </h6>
                                                    </div>
                                                    {/* <div className="dash-text">
                                                        Avg up by
                                                        <span className="dash-text px-4">+12%</span>
                                                    </div> */}
                                                </div>
                                                <div className="dashboard-card">
                                                    <span className="dash-text" onClick={() => handleDashChange('Loan-Tracker')}>Loan in progress</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                        {Array.isArray(dashname) && dashname.length > 0 ? (
                                                            dashname.map((dash) => (
                                                                <p key={dash.loanscnt} value={dash.loanscnt}>
                                                                    <img src="/assets/images/icons/dash-card3.svg" alt="" />
                                                                    {dash.loanscnt !== null ? dash.loanscnt : "No data available"}
                                                                </p>
                                                                ))
                                                            ) : (
                                                            <p> <img src="/assets/images/icons/dash-card3.svg" alt="" />No data available</p>
                                                        )}
                                                        </h6>
                                                    </div>
                                                    
                                                    {/* <div className="dash-text">
                                                        Avg up by
                                                        <span className="dash-text px-4">+12%</span>
                                                    </div> */}
                                                </div>
                                                <div className="dashboard-card">
                                                    <span className="dash-text" onClick={() => handleDashChange('Loan-Tracker')}>Refinance</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                        {Array.isArray(dashname) && dashname.length > 0 ? (
                                                            dashname.map((dash) => (
                                                                <p key={dash.loanscnt} value={dash.loanscnt}>
                                                                    <img src="/assets/images/icons/dash-card3.svg" alt="" />
                                                                    {dash.loanscnt !== null ? dash.loanscnt : "No data available"}
                                                                </p>
                                                                ))
                                                            ) : (
                                                            <p> <img src="/assets/images/icons/dash-card3.svg" alt="" />No data available</p>
                                                        )}
                                                        </h6>
                                                    </div>
                                                    
                                                    {/* <div className="dash-text">
                                                        Avg up by
                                                        <span className="dash-text px-4">+12%</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex">
                                                    <div className="mx-2">
                                                        <button className="dashboard-button mt-4"  onClick={() => setModalPropertyShow(true)}>Add property</button>
                                                    </div>
                                                    <StepProperty
                                                    show={modalpropertyShow}
                                                    onHide={() => setModalPropertyShow(false)}/>
                                                    <div >
                                                        <button className='dashboard-button mt-4 mx-1' onClick={() => setModalLoanShow(true)}>Add Loan</button>
                                                        {/* <button className="dashboard-button mt-5" onClick={() => handlePropertyTypeClick(null)}>Explore Loan options</button> */}
                                                    </div>
                                                    <StepLoan 
                                                    show={modalLoanShow}
                                                    onHide={() => setModalLoanShow(false)}/>
                                                </div>
                                                <button className="dashboard-explore-button mt-2 mx-2" onClick={() => setExploreModalShow(true)}>
                                                    EXPLORE YOUR HOME LOAN OPTIONS
                                                </button>
                                                <Step
                                                    show={exploreModalShow}
                                                    onHide={() => setExploreModalShow(false)}
                                                />
                                            </div>
                                        </div>
                
                                    </div>
                                    {/* <Dashproperty       
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                    <Addloan
                                        show={modalLoanShow}
                                        onHide={() => setModalLoanShow(false)}
                                    /> */}
                                </div>
                                <div className="dash-table mx-1 mt-3">
                                    <p className="advance-payments mt-2 mx-4"> Mortgage Loan Overview</p>
                                    <Dashmain/>
                                </div>                               
                            </div>
                        </div>
                        <div id="Your-Scenarios" className={`tab-pane ${activet === 'Your-Scenarios' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3  d-flex justify-content-between">
                                <div>
                                <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span></Link>
                                    <span className="dashhome-text">Your Scenario</span>
                                    <h4 className="dashmain-head">Your Scenario</h4>
                                </div>
                            </div>
                            <div className="dash-head-card">
                                <Dashscenarios />     
                            </div>
                        </div>
                        <div id="Pre-Approved-Letters" className={`tab-pane ${activet === 'Pre-Approved-Letters' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                <div>
                                    <span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span>
                                    <span className="dashhome-text">Pre Approved Letters</span>
                                    <h4 className="dashmain-head">Pre Approved Letters</h4>
                                </div>
                            </div>
                            <div className="dash-head-card m-2">
                                <Dashpreapproval/>     
                            </div>
                        </div>
                        <div id="Add-Property" className={`tab-pane ${activet === 'Add-Property' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                <div>
                                    <span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span>
                                    <span className="dashhome-text">Add Property </span>
                                    <h4 className="dashmain-head">Add Property </h4>
                                </div>
                            </div>
                            <div className="dash-head-card dash-table">
                                <Property />
                            </div>
                        </div>  
                        <div id="My-Loan" className={`tab-pane ${activet === 'My-Loan' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                <div>
                                    <span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span>
                                    <span className="dashhome-text">My Loan</span>
                                    <h4 className="dashmain-head">My Loan</h4>
                                </div>
                            </div>
                            <div className="dash-head-card mx-1 bg-white">
                                <Myloan/>
                            </div>
                        </div> 
                        <div id="Loan-Tracker" className={`tab-pane ${activet === 'Loan-Tracker' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                <div>
                                    <span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span>
                                    <span className="dashhome-text">Loan Tracker</span>
                                    <h4 className="dashmain-head">Loan Tracker</h4>
                                </div>
                            </div>
                            <div className="dash-head-card mx-1">
                                <Userloantracker/>
                            </div>
                        </div> 
                        <div id="Refinance-Tracker" className={`tab-pane ${activet === 'Refinance-Tracker' ? 'active' : 'fade'}`}>
                            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                <div>
                                    <span className="dashhome-text">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </span>
                                    <span className="dashhome-text">Refinance Tracker</span>
                                    <h4 className="dashmain-head">Refinance Tracker</h4>
                                </div>
                            </div>
                            <div className="dash-head-card mx-1">
                                <Dashrefinacetracker />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
    )
}

 
export default DashBoard;