import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Dashmain from "./Dashmain";
import Dashproperty from "./Dashproperty";
import Addloan from "./Addloan";
import Step from "@/page/Step";

function Dashsub(){
    const [modalpropertyShow, setModalPropertyShow] = React.useState(false);
    const [modalLoanShow, setModalLoanShow] = React.useState(false);
    const [dashname, setDashName] = useState([]);
    const [properties, setProperties] = useState([]);
    const [exploreModalShow, setExploreModalShow] = React.useState(false);
    const firstname = useSelector(state => state.auth.firstname);
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

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
                if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                    setDashName(data.result_sets[0]);
                    setProperties(data.result_sets[1]);
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

    const handlePropertyTypeClick = () => {
        // setSelectedPropertyId(property.propertyid);
        setModalPropertyShow(true);
      };
      const handleLoanTypeClick =() => {
        // setSelectedPropertyId(property.propertyid);
        setModalLoanShow(true);
      };

    return(
        <>
            <div className="mx-2 m-1 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text"> DashBoard</span>
                                        <h4 className="dashmain-head"> DashBoard</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                <div className='p-3 dash-card1 mx-2 d-flex justify-content-between'>                  
                    <div className="mx-3">
                    <h5 className="dash-adtext">{isLoggedIn ?`Welcome back, ${firstname}!`: 'HI'}</h5>
                    
                    <p> You have earned 54% more than last month<br/>
                    which is great thing.</p>
                    <span className="dash-adtext">54,382.78</span>
                    <span className="dash-year">2024</span>
                    <div>
                    <button className="btn btn-primary">Check</button>
                    </div>
                    </div>
                    <img src="./assets/images/home-page/Dashcard-img.png" alt="" className="dash-img"/> 
                    </div>
                                </div>
            <div className="col-sm-12 col-md-12 m-2 d-flex">
        <div className="dash-card2">
                <div className="">
                <h5 className="mx-1">Your Overview</h5>
                </div>
            <div className="d-flex">
                <div className="dashboard-card">
                    <span className="dash-text" id="Pre-Approved-Letters">Pre approved request</span>
                    <div className="pt-2 px-1">
                     <h6>
                               {Array.isArray(dashname) && dashname.length > 0 ? (
                                    dashname.map((dash) => (
                                        <p key={dash.year} value={dash.propcount}>
                                            <img src="./assets/images/icons/dashboard-card1.svg" alt="" />
                                            {dash.propcount !== null ? dash.propcount : "No data available"}
                                        </p>
                                        // <p key={dash.year}>{dash.propcount !== null ? dash.propcount : 'No data available'}</p>
                                    ))
                                ) : (
                                    <p> <img src="./assets/images/icons/dashboard-card1.svg" alt="" />No data available</p>
                                )}
                                </h6>
                    </div>
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                <div className="dashboard-card">
                    <span className="dash-text"> User Scenarios</span>
                    <div className="pt-1 px-1">
                    <h6>  
                              {Array.isArray(dashname) && dashname.length > 0 ? (
                                    dashname.map((dash) => (
                                        <p className="pt-2" key={dash.year} value={dash.totalvalue}>
                                            <img src="./assets/images/icons/dash-card2.svg" alt="" />
                                            {dash.totalvalue !== null ? dash.totalvalue : "No data available"}
                                        </p>
                                    ))
                                ) : (
                                    <p><img src="./assets/images/icons/dash-card2.svg" alt="" />No data available</p>
                                )}
                                </h6>
                    </div>
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                <div className="dashboard-card">
                    <span className="dash-text">Loan in progress</span>
                    <div className="pt-2 px-1">
                    <h6>
                    {Array.isArray(dashname) && dashname.length > 0 ? (
                                    dashname.map((dash) => (
                                        <p key={dash.year} value={dash.outstandingloan}>
                                             <img src="./assets/images/icons/dash-card3.svg" alt="" />
                                            {dash.outstandingloan !== null ? dash.outstandingloan : "No data available"}
                                        </p>
                                    ))
                                ) : (
                                    <p> <img src="./assets/images/icons/dash-card3.svg" alt="" />No data available</p>
                                )}
                    </h6>
                    </div>
                    
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                <div className="dashboard-card">
                    <span className="dash-text">Loan in progress</span>
                    <div className="pt-2 px-1">
                    <h6>
                    {Array.isArray(dashname) && dashname.length > 0 ? (
                                    dashname.map((dash) => (
                                        <p key={dash.year} value={dash.outstandingloan}>
                                             <img src="./assets/images/icons/dash-card3.svg" alt="" />
                                            {dash.outstandingloan !== null ? dash.outstandingloan : "No data available"}
                                        </p>
                                    ))
                                ) : (
                                    <p> <img src="./assets/images/icons/dash-card3.svg" alt="" />No data available</p>
                                )}
                    </h6>
                    </div>
                    
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                <div className="mx-4">
                    <button className="dashboard-button mt-5"  >Add property</button>
                   <br/>
                    <button className='dashboard-button1 mt-5' onClick={() => handleLoanTypeClick(null)}>Add Loan</button>
                    </div>
                    <div className="pt-2">
                    <button className="dashboard-explore-button mt-5" onClick={() => setExploreModalShow(true)}>
                                        EXPLORE YOUR HOME LOAN OPTIONS
                                        </button>

                                        {/* commneted for testing purpose */}
                                        <Step
                                        show={exploreModalShow}
                                        onHide={() => setExploreModalShow(false)}
                                        />
                        {/* <button className="dashboard-button mt-5" onClick={() => handlePropertyTypeClick(null)}>Explore Loan options</button> */}
                    </div>
                </div>
                </div>
                <Dashproperty
            show={modalpropertyShow}
            onHide={() => setModalPropertyShow(false)}
            />

            <Addloan
            show={modalLoanShow}
            onHide={() => setModalLoanShow(false)}
            />
                </div>
                <div className="dash-table mx-2">
                <p className="advance-payments mt-2 mx-4"> Mortgage Loan Overview</p>
                <Dashmain/>
                </div>
        </>
    )
}

export default Dashsub;