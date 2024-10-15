import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
import Licenses from "./Licenses";
import Lender from "./Lender";
import Broker from "./Broker";
import Lodashmain from "./Lodashmain";
import  Link  from 'next/link';
import Step from "@/page/Step";
import Loscenarios from "./Loscenarios";
import Lopreapproval from "./Lopreapproval";
import Dashloantracker from "./Dashloantracker";
import RefinanceTracker from "./RefinanceTracker";
import Head from 'next/head';

const Lodashboard = () => {
    const [expanded, setExpanded] = useState(true);
    const [loexpand, setLoExpand] = useState(true); // Set default to true
    const [modalShow, setModalShow] = React.useState(false);
    const [dashname, setDashName] = useState([]);
    const [activeTab, setActiveTab] = useState('lo-Dashboard');
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const firstname = useSelector(state => state.auth.firstname);
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const [exploreModalShow, setExploreModalShow] = React.useState(false);
    const dispatch = useDispatch();
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // setExpanded(true); // Expand all buttons on any tab click
        setLoExpand(true); // Ensure buttons are expanded when changing tabs
    }
    const toggleExpand = () => {
        setLoExpand(!loexpand);
    }

    useEffect(() => {
        const fetchDashname = async () => {
            const requestData = { user: user, token: token };
            // console.log('Request Data:', requestData);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any other headers as needed
                    },
                    body: JSON.stringify(requestData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("lodashmai",data)
                if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                    setDashName(data.result_sets[0]);
                } else {
                    console.error('Expected an array but got:', data.result_sets);
                }
                // console.log('setdata', data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDashname();
    }, [user, token]);
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
                <div className="row">
                    <div className="col-sm-12 col-md-12 d-flex">
                        <div className="nav nav-pills">
                            <div className="nav-item" style={{ marginTop: "100px" }}>
                                <button
                                    className={`toggle-expand-btn ${loexpand ? 'expanded' : ''}`}
                                    onClick={toggleExpand}
                                >
                                    {/* {loexpand && '<<' : '>>'} */}
                                    {loexpand ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                        </svg>}
                                </button>
                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'lo-Dashboard' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('lo-Dashboard')}
                                >
                                    <FaUserEdit  style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Dashboard</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Scenario' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Scenario')}
                                >
                                    <FaKey style={{ marginRight: '10px'}}/> 
                                    {loexpand && <span >Your Scenario's</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Approved' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Approved')}
                                >
                                    <FaCertificate style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Pre Approved Letters</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Licenses' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Licenses')}
                                >
                                    <FaUniversity style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Licenses</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Lender-Information' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Lender-Information')}
                                >
                                    <FaUserTie style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Lender Information</span>}
                                </button>
                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Broker-Information' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Broker-Information')}
                                >
                                    <FaUserTie style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Broker Information</span>}
                                </button>
                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Loan' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Loan')}
                                >
                                    <FaUserTie style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Loan Tracker</span>}
                                </button>
                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${activeTab === 'Refinance' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('Refinance')}
                                >
                                    <FaUserTie style={{ marginRight: '10px' }}/> 
                                    {loexpand && <span>Refinance Tracker</span>}
                                </button>
                            </div>
                        </div>
                        <div className="tab-content dashboard-background">
                            <div className="col-md-12 col-sm-12 m-2">
                                <div className='p-3 dash-card2 d-flex' style={{ marginTop: "130px" }}>
                                    <img src="./assets/images/home-page/Dashcard-img.png" alt="" className="dash-img"/>                   
                                    <div className="mx-3">
                                        <p>{isLoggedIn ?`HI, ${firstname}`: 'HI'}</p>
                                        <p> Congratulations! Your mortgage loan has been approved.Review and sign the final<br/> documents to<Link href="#"> Procced</Link></p>
                                            <button className="dashboard-explore-button" onClick={() => setExploreModalShow(true)}>
                                                EXPLORE YOUR HOME LOAN OPTIONS
                                            </button>
                                                {/* commneted for testing purpose */}
                                        <Step
                                            show={exploreModalShow}
                                            onHide={() => setExploreModalShow(false)}
                                        />
                                    </div>
                                </div>      
                            </div>
                            <div id="lo-Dashboard" className={`tab-pane ${activeTab === 'lo-Dashboard' ? 'active' : 'fade'}`} >
                                <div className="mx-2">
                                    <div className="col-sm-12 col-md-12 mx-2 m-1 d-flex justify-content-between">
                                        <div>
                                            <span className="dashhome-text">Home
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </span>
                                            <span className="dashhome-text">Dashboard</span>
                                            <h4 className="dashmain-head"> Summary</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 m-2">
                                        <div className="dash-card">
                                            <div className="">
                                                <h5 className="mx-1">Your Overview</h5>
                                            </div>
                                            <div className="d-flex">
                                                <div className="dashboard-card2">
                                                    <span className="dash-text" onClick={() => handleTabChange('Scenario')}> User Scenarios</span>
                                                    <div className="pt-1 px-1">
                                                        <h6>  
                                                            {Array.isArray(dashname) && dashname.length > 0 ? (
                                                                dashname.map((dash) => (
                                                                    <p className="pt-2" key={dash.year} value={dash.totalvalue}>
                                                                        <img src="./assets/images/icons/dash-card2.svg" alt="" />
                                                                        {dash.totalvalue !== null ? dash.totalvalue : "0"}
                                                                    </p>
                                                                ))
                                                            ) : (
                                                                <p><img src="./assets/images/icons/dash-card2.svg" alt="" />No data available</p>
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="dashboard-card2">
                                                    <span className="dash-text" onClick={() => handleTabChange('Approved')}>Pre Approved Request</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                            {Array.isArray(dashname) && dashname.length > 0 ? (
                                                                dashname.map((dash) => (
                                                                    <p key={dash.year} value={dash.propcount}>
                                                                        <img src="./assets/images/icons/dashboard-card1.svg" alt="" />
                                                                        {dash.propcount !== null ? dash.propcount : "0"}
                                                                    </p>
                                                                    // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                                                ))
                                                            ) : (
                                                                <p> <img src="./assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="dashboard-card2">
                                                    <span className="dash-text" onClick={() => handleTabChange('Loan')}>Loan In Progress</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                        {Array.isArray(dashname) && dashname.length > 0 ? (
                                                            dashname.map((dash) => (
                                                                <p key={dash.year} value={dash.outstandingloan} style={{fontSize:'15px'}}>
                                                                    <img src="./assets/images/icons/dash-card3.svg" alt="" />
                                                                    {dash.outstandingloan !== null ? dash.outstandingloan : "0"}
                                                                </p>
                                                            ))
                                                            ) : (
                                                            <p> <img src="./assets/images/icons/dash-card3.svg" alt="" />No data available</p>
                                                        )}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="dashboard-card2">
                                                    <span className="dash-text" onClick={() => handleTabChange('Approved')}>Outstanding Invoices</span>
                                                    <div className="pt-2 px-1">
                                                        <h6>
                                                            {Array.isArray(dashname) && dashname.length > 0 ? (
                                                                dashname.map((dash) => (
                                                                    <p key={dash.year} value={dash.propcount}>
                                                                        <img src="./assets/images/icons/dashboard-card1.svg" alt="" />
                                                                        {dash.propcount !== null ? dash.propcount : "0"}
                                                                    </p>
                                                                ))
                                                            ) : (
                                                                <p> <img src="./assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>
                
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="dash-head-card mx-2">
                                    <Lodashmain />
                                 </div>
                                </div>
                            </div>
                            <div id="Scenario" className={`tab-pane ${activeTab === 'Scenario' ? 'active' : 'fade'}`}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                        <Link href="/"style={{textDecoration:"none"}}>
                                            <span className="dashhome-text">Home
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </span>
                                        </Link>
                                        <span className="dashhome-text">Your-Scenario</span>
                                        <h4 className="dashmain-head">Your-Scenario</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card mx-2">
                                    <Loscenarios />     
                                </div>
                            </div>
                            <div id="Approved" className={`tab-pane ${activeTab === 'Approved' ? 'active' : 'fade'}`} >
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                        <Link href="/"style={{textDecoration:"none"}}>
                                            <span className="dashhome-text">Home
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </span>
                                        </Link>
                                        <span className="dashhome-text">Pre Approved Letters</span>
                                        <h4 className="dashmain-head">Pre Approved Letters</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table1 mx-2 p-3">
                                    <Lopreapproval/>     
                                </div>
                            </div>
                            <div id="Licenses" className={`tab-pane ${activeTab === 'Licenses' ? 'active' : 'fade'}`} >
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                        <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span></Link>
                                        <span className="dashhome-text">Licenses </span>
                                        <h4 className="dashmain-head">Licenses </h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table mx-2">
                                    <Licenses />
                                </div>
                            </div>  
                            <div id="Lender-Information" className={`tab-pane ${activeTab === 'Lender-Information' ? 'active' : 'fade'}`}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                    <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span></Link>
                                        <span className="dashhome-text">Lender Information</span>
                                        <h4 className="dashmain-head">Lender Information</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table p-2 mx-2">
                                    <Lender />
                                </div>
                            </div> 
                            <div id="Broker-Information" className={`tab-pane ${activeTab === 'Broker-Information' ? 'active' : 'fade'}`}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                    <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span></Link>
                                        <span className="dashhome-text">Broker Information</span>
                                        <h4 className="dashmain-head">Broker Information</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table mx-2">
                                    <Broker />
                                </div>
                            </div>
                            <div id="Loan" className={`tab-pane ${activeTab === 'Loan' ? 'active' : 'fade'}`}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                    <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span></Link>
                                        <span className="dashhome-text">Loan-Tracker</span>
                                        <h4 className="dashmain-head">Loan-Tracker</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table mx-2">
                                    <Dashloantracker />
                                </div>
                            </div>
                            <div id="Refinance" className={`tab-pane ${activeTab === 'Refinance' ? 'active' : 'fade'}`}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div className="mx-3">
                                    <Link href="/"style={{textDecoration:"none"}}><span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span></Link>
                                        <span className="dashhome-text">Refinance Tracker</span>
                                        <h4 className="dashmain-head">Refinance Tracker</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card dash-table mx-2">
                                  <RefinanceTracker/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Lodashboard;
