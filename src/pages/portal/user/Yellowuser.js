import React,{useState} from "react";
import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Editprofile from "./Editprofile";
import Louser from "./Louser";
import Licenses from "./Licenses";
import Lender from "./Lender";
import Broker from "./Broker";
import ChangePassword from "./Changepassword";

const Yellowuser = () => {
    const [loexpand, setLoExpand] = useState(false);
    const [loactivet, setLoActive] = useState('Edit-Profile');

    const handleLoChange = (tab) => {
        setLoActive(tab);
        setLoExpand(true); // Expand all buttons on any tab click
    }

    return(
        <>
        <div className="container-fulid">
            <div className="row">
            <div className="col-sm-12 col-md-12 d-flex">
                    <div className="nav nav-pills">
                            <div className="nav-item" style={{ marginTop: "150px" }}>
                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'Edit-Profile' ? 'active' : ''}`} 
                                    onClick={() => handleLoChange('Edit-Profile')}
                                >
                                    <FaUserEdit /> 
                                    {loexpand && <span>Edit-Profile</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'change-password' ? 'active' : ''}`} 
                                    onClick={() => handleLoChange('change-password')}
                                >
                                    <FaKey /> 
                                    {loexpand && <span>change-password</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'Licenses' ? 'active' : ''}`} 
                                    onClick={() => handleLoChange('Licenses')}
                                >
                                    <FaCertificate /> 
                                    {loexpand && <span>Licenses</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'Lender' ? 'active' : ''}`} 
                                    onClick={() => handleLoChange('Lender')}
                                >
                                    <FaUniversity /> 
                                    {loexpand && <span>Lender</span>}
                                </button>

                                <button 
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'Broker' ? 'active' : ''}`} 
                                    onClick={() => handleLoChange('Broker')}
                                >
                                    <FaUserTie /> 
                                    {loexpand && <span>Broker</span>}
                                </button>
                            </div>
                        </div>
                        <div className="tab-content dashboard-background">
                            <div id="Edit-Profile" className={`tab-pane ${loactivet === 'Edit-Profile' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text"> Edit Profile</span>
                                        <h4 className="dashmain-head"> Edit Profile</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card  mx-1">
                                    <Louser />
                                </div>
                            </div>
                            <div id="change-password" className={`tab-pane ${loactivet === 'change-password' ? 'active' : 'fade'}`} style={{ marginTop: "100px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text">Change Password</span>
                                        <h4 className="dashmain-head">Change Password</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card mx-1">
                                <ChangePassword/>      
                                </div>
                            </div>
                            <div id="Licenses" className={`tab-pane ${loactivet === 'Licenses' ? 'active' : 'fade'}`} style={{ marginTop: "100px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text">Licenses</span>
                                        <h4 className="dashmain-head">Licenses</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card mx-1">
                                    <Licenses/>     
                                </div>
                            </div>
                            <div id="Lender" className={`tab-pane ${loactivet === 'Lender' ? 'active' : 'fade'}`} style={{ marginTop: "100px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text">Lender</span>
                                        <h4 className="dashmain-head">Lender</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card mx-1">
                                    <Lender />
                                </div>
                            </div>  
                            <div id="Broker" className={`tab-pane ${loactivet === 'Broker' ? 'active' : 'fade'}`} style={{ marginTop: "100px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text">Broker</span>
                                        <h4 className="dashmain-head">Broker</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card mx-1">
                                    <Broker />
                                </div>
                            </div>
                        </div>
                    </div>
            {/* <div className="col-md-2 col-sm-12 p-3 mt-4">
            <div className="nav nav-pills">
                 <div className="nav-item" style={{marginTop:"100px"}}>
                 <button className="dash-but1 active" data-bs-toggle="pill"
                         href="#Yellow-User">Edit Profile </button>
                       
                        <button className="dash-but2 mt-3" data-bs-toggle="pill"
                         href="#change-password">Change password</button>
                
                        {/* <button className="but2 mt-3" data-bs-toggle="pill"
                         href="#Yellow-User">Yellow User</button> *
                 
                        <button className="dash-but2 mt-3" data-bs-toggle="pill"
                         href="#Licenses">Licenses</button>
                 
                        <button className="dash-but2 mt-3" data-bs-toggle="pill"
                         href="#Lender">Lender Information</button>

                        <button className="dash-but2 mt-3" data-bs-toggle="pill"
                         href="#Broker">Broker</button>
                 </div>
            </div>
            </div>
                <div className="col-sm-12 col-md-10 dashboard-background1">                
                    <div className="tab-content">
                    <div id="Yellow-User" className=" tab-pane active" style={{marginTop:"150px"}}>
                    <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                        <div>
                            <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg></span>
                            <span className="dashhome-text"> Edit Profile</span>
                            <h4 className="dashmain-head"> Edit Profile</h4>
                        </div>
            </div>
            <div className="dash-head-card mx-1">
                        <Louser/>
                        </div>
                </div>
                <div id="change-password" className="tab-pane fade" style={{marginTop:"150px"}}>
                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                        <div>
                            <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg></span>
                            <span className="dashhome-text">Change Password</span>
                            <h4 className="dashmain-head">Change Password</h4>
                        </div>
            </div>
            <div className="dash-head-card mx-1">
                   <ChangePassword/>     
                   </div>
                </div>
                <div id="Licenses" className="tab-pane fade" style={{marginTop:"90px"}}>
                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                        <div>
                            <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg></span>
                            <span className="dashhome-text">Licenses</span>
                            <h4 className="dashmain-head">Licenses</h4>
                        </div>
            </div>
            <div className="dash-head-card mx-1">
                   <Licenses/>     
                   </div>
                </div>
                <div id="Lender" className="tab-pane fade" style={{marginTop:"150px"}}>
                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                        <div>
                            <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg></span>
                            <span className="dashhome-text">Lender Information</span>
                            <h4 className="dashmain-head">Lender Information</h4>
                        </div>
            </div>
            <div className="dash-head-card mx-1">
                <Lender/>
                </div>
            </div>  
            <div id="Broker" className="tab-pane fade" style={{marginTop:"150px"}}>
            <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                        <div>
                            <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg></span>
                            <span className="dashhome-text">Broker Information</span>
                            <h4 className="dashmain-head">Broker Information</h4>
                        </div>
            </div>
            <div className="dash-head-card mx-1">
                <Broker/>
                </div>
            </div> 
            </div>
            </div> */}
        </div>
        </div>
        </>
    )
}
export default Yellowuser;


// import React, { useState } from "react";
// import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
// import Form from 'react-bootstrap/Form';
// import Editprofile from "./Editprofile";
// import Louser from "./Louser";
// import Licenses from "./Licenses";
// import Lender from "./Lender";
// import Broker from "./Broker";
// import ChangePassword from "./Changepassword";

// const Yellowuser = () => {
//     const [activeTab, setActiveTab] = useState('Yellow-User');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     }

//     return(
//         <>
//         <div className="container-fulid">
//             <div className="row">
//             <div className="col-md-2 col-sm-12 p-3 mt-4">
//             <div className="nav nav-pills">
//                 <div className="nav-item" style={{marginTop:"100px"}}>
//                     <button className={`dash-but1 ${activeTab === 'Yellow-User' ? 'active' : ''}`} onClick={() => handleTabChange('Yellow-User')} data-bs-toggle="pill" href="#Yellow-User">
//                         <FaUserEdit /> {activeTab === 'Yellow-User' && "Edit Profile"}
//                     </button>

//                     <button className={`dash-but2 mt-3 ${activeTab === 'change-password' ? 'active' : ''}`} onClick={() => handleTabChange('change-password')} data-bs-toggle="pill" href="#change-password">
//                         <FaKey /> {activeTab === 'change-password' && "Change Password"}
//                     </button>
                
//                     <button className={`dash-but2 mt-3 ${activeTab === 'Licenses' ? 'active' : ''}`} onClick={() => handleTabChange('Licenses')} data-bs-toggle="pill" href="#Licenses">
//                         <FaCertificate /> {activeTab === 'Licenses' && "Licenses"}
//                     </button>
                 
//                     <button className={`dash-but2 mt-3 ${activeTab === 'Lender' ? 'active' : ''}`} onClick={() => handleTabChange('Lender')} data-bs-toggle="pill" href="#Lender">
//                         <FaUniversity /> {activeTab === 'Lender' && "Lender Information"}
//                     </button>

//                     <button className={`dash-but2 mt-3 ${activeTab === 'Broker' ? 'active' : ''}`} onClick={() => handleTabChange('Broker')} data-bs-toggle="pill" href="#Broker">
//                         <FaUserTie /> {activeTab === 'Broker' && "Broker"}
//                     </button>
//                 </div>
//             </div>
//             </div>
//                 <div className="col-sm-12 col-md-10 dashboard-background">                
//                     <div className="tab-content">
//                     <div id="Yellow-User" className={`tab-pane ${activeTab === 'Yellow-User' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text"> Edit Profile</span>
//                                 <h4 className="dashmain-head"> Edit Profile</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Louser />
//                         </div>
//                     </div>
//                     <div id="change-password" className={`tab-pane ${activeTab === 'change-password' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Change Password</span>
//                                 <h4 className="dashmain-head">Change Password</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <ChangePassword />     
//                         </div>
//                     </div>
//                     <div id="Licenses" className={`tab-pane ${activeTab === 'Licenses' ? 'active' : 'fade'}`} style={{marginTop:"90px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Licenses</span>
//                                 <h4 className="dashmain-head">Licenses</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Licenses />     
//                         </div>
//                     </div>
//                     <div id="Lender" className={`tab-pane ${activeTab === 'Lender' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Lender Information</span>
//                                 <h4 className="dashmain-head">Lender Information</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Lender />
//                         </div>
//                     </div>  
//                     <div id="Broker" className={`tab-pane ${activeTab === 'Broker' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Broker Information</span>
//                                 <h4 className="dashmain-head">Broker Information</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Broker />
//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </div>
//         </div>
//         </>
//     )
// }

// export default Yellowuser;


// import React, { useState } from "react";
// import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
// import Form from 'react-bootstrap/Form';
// import Editprofile from "./Editprofile";
// import Louser from "./Louser";
// import Licenses from "./Licenses";
// import Lender from "./Lender";
// import Broker from "./Broker";
// import ChangePassword from "./Changepassword";
// // import './Yellowuser.css'; // Import your CSS file for styling

// const Yellowuser = () => {
//     const [activeTab, setActiveTab] = useState('Yellow-User');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     }

//     return(
//         <>
//         <div className="container-fluid">
//             <div className="row">
//             <div className="col-md-2 col-sm-12 p-3 mt-4">
//             <div className="nav nav-pills">
//                 <div className="nav-item" style={{marginTop:"100px"}}>
//                     <button 
//                         className={`dash-but1 ${activeTab === 'Yellow-User' ? 'active' : ''}`} 
//                         onClick={() => handleTabChange('Yellow-User')} 
//                         data-bs-toggle="pill" 
//                         href="#Yellow-User"
//                     >
//                         <FaUserEdit /> {activeTab === 'Yellow-User' && <span className="button-text">Edit Profile</span>}
//                     </button>

//                     <button 
//                         className={`dash-but2 mt-3 ${activeTab === 'change-password' ? 'active' : ''}`} 
//                         onClick={() => handleTabChange('change-password')} 
//                         data-bs-toggle="pill" 
//                         href="#change-password"
//                     >
//                         <FaKey /> {activeTab === 'change-password' && <span className="button-text">Change Password</span>}
//                     </button>
                
//                     <button 
//                         className={`dash-but2 mt-3 ${activeTab === 'Licenses' ? 'active' : ''}`} 
//                         onClick={() => handleTabChange('Licenses')} 
//                         data-bs-toggle="pill" 
//                         href="#Licenses"
//                     >
//                         <FaCertificate /> {activeTab === 'Licenses' && <span className="button-text">Licenses</span>}
//                     </button>
                 
//                     <button 
//                         className={`dash-but2 mt-3 ${activeTab === 'Lender' ? 'active' : ''}`} 
//                         onClick={() => handleTabChange('Lender')} 
//                         data-bs-toggle="pill" 
//                         href="#Lender"
//                     >
//                         <FaUniversity /> {activeTab === 'Lender' && <span className="button-text">Lender Information</span>}
//                     </button>

//                     <button 
//                         className={`dash-but2 mt-3 ${activeTab === 'Broker' ? 'active' : ''}`} 
//                         onClick={() => handleTabChange('Broker')} 
//                         data-bs-toggle="pill" 
//                         href="#Broker"
//                     >
//                         <FaUserTie /> {activeTab === 'Broker' && <span className="button-text">Broker</span>}
//                     </button>
//                 </div>
//             </div>
//             </div>
//                 <div className="col-sm-12 col-md-10 dashboard-background">                
//                     <div className="tab-content">
//                     <div id="Yellow-User" className={`tab-pane ${activeTab === 'Yellow-User' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text"> Edit Profile</span>
//                                 <h4 className="dashmain-head"> Edit Profile</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Louser />
//                         </div>
//                     </div>
//                     <div id="change-password" className={`tab-pane ${activeTab === 'change-password' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Change Password</span>
//                                 <h4 className="dashmain-head">Change Password</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <ChangePassword />     
//                         </div>
//                     </div>
//                     <div id="Licenses" className={`tab-pane ${activeTab === 'Licenses' ? 'active' : 'fade'}`} style={{marginTop:"90px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Licenses</span>
//                                 <h4 className="dashmain-head">Licenses</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Licenses />     
//                         </div>
//                     </div>
//                     <div id="Lender" className={`tab-pane ${activeTab === 'Lender' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Lender Information</span>
//                                 <h4 className="dashmain-head">Lender Information</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Lender />
//                         </div>
//                     </div>  
//                     <div id="Broker" className={`tab-pane ${activeTab === 'Broker' ? 'active' : 'fade'}`} style={{marginTop:"150px"}}>
//                         <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                             <div>
//                                 <span className="dashhome-text">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg></span>
//                                 <span className="dashhome-text">Broker Information</span>
//                                 <h4 className="dashmain-head">Broker Information</h4>
//                             </div>
//                         </div>
//                         <div className="dash-head-card mx-1">
//                             <Broker />
//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         </div>
//         </div>
//         </>
//     )
// }

// export default Yellowuser;



// import React, { useState } from "react";
// import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
// import Editprofile from "./Editprofile";
// import Louser from "./Louser";
// import Licenses from "./Licenses";
// import Lender from "./Lender";
// import Broker from "./Broker";
// import ChangePassword from "./Changepassword";
// // import './Yellowuser.css'; // Import your CSS file for styling

// const Yellowuser = () => {
//     const [activeTab, setActiveTab] = useState('Yellow-User');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     }

//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-2 col-sm-12 p-3 mt-4">
//                         <div className="nav nav-pills">
//                             <div className="nav-item" style={{ marginTop: "100px" }}>
//                                 <button 
//                                     className={`dash-but ${activeTab === 'Yellow-User' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Yellow-User')}
//                                 >
//                                     <FaUserEdit /> 
//                                     {activeTab === 'Yellow-User' && <span className="button-text">Edit Profile</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${activeTab === 'change-password' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('change-password')}
//                                 >
//                                     <FaKey /> 
//                                     {activeTab === 'change-password' && <span className="button-text">Change Password</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${activeTab === 'Licenses' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Licenses')}
//                                 >
//                                     <FaCertificate /> 
//                                     {activeTab === 'Licenses' && <span className="button-text">Licenses</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${activeTab === 'Lender' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Lender')}
//                                 >
//                                     <FaUniversity /> 
//                                     {activeTab === 'Lender' && <span className="button-text">Lender Information</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${activeTab === 'Broker' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Broker')}
//                                 >
//                                     <FaUserTie /> 
//                                     {activeTab === 'Broker' && <span className="button-text">Broker</span>}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-10 dashboard-background">
//                         <div className="tab-content">
//                             <div id="Yellow-User" className={`tab-pane ${activeTab === 'Yellow-User' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text"> Edit Profile</span>
//                                         <h4 className="dashmain-head"> Edit Profile</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Louser />
//                                 </div>
//                             </div>
//                             <div id="change-password" className={`tab-pane ${activeTab === 'change-password' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Change Password</span>
//                                         <h4 className="dashmain-head">Change Password</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <ChangePassword />     
//                                 </div>
//                             </div>
//                             <div id="Licenses" className={`tab-pane ${activeTab === 'Licenses' ? 'active' : 'fade'}`} style={{ marginTop: "90px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Licenses</span>
//                                         <h4 className="dashmain-head">Licenses</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Licenses />     
//                                 </div>
//                             </div>
//                             <div id="Lender" className={`tab-pane ${activeTab === 'Lender' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Lender Information</span>
//                                         <h4 className="dashmain-head">Lender Information</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Lender />
//                                 </div>
//                             </div>  
//                             <div id="Broker" className={`tab-pane ${activeTab === 'Broker' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Broker Information</span>
//                                         <h4 className="dashmain-head">Broker Information</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Broker />
//                                 </div>
//                             </div> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Yellowuser;




// import React, { useState } from "react";
// import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
// import Editprofile from "./Editprofile";
// import Louser from "./Louser";
// import Licenses from "./Licenses";
// import Lender from "./Lender";
// import Broker from "./Broker";
// import ChangePassword from "./Changepassword";
// // import './Yellowuser.css'; // Import your CSS file for styling

// const Yellowuser = () => {
//     const [expanded, setExpanded] = useState(false);
//     const [activeTab, setActiveTab] = useState('Yellow-User');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//         setExpanded(true); // Expand all buttons on any tab click
//     }

//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-2 col-sm-12 p-3 mt-4">
//                     </div>
//                     <div className="col-sm-12 col-md-12 d-flex">
//                     <div className="nav nav-pills">
//                             <div className="nav-item" style={{ marginTop: "100px" }}>
//                                 <button 
//                                     className={`dash-but ${expanded ? 'expanded' : ''} ${activeTab === 'Yellow-User' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Yellow-User')}
//                                 >
//                                     <FaUserEdit /> 
//                                     {expanded && <span className="button-text">Edit Profile</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${expanded ? 'expanded' : ''} ${activeTab === 'change-password' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('change-password')}
//                                 >
//                                     <FaKey /> 
//                                     {expanded && <span className="button-text">Change Password</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${expanded ? 'expanded' : ''} ${activeTab === 'Licenses' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Licenses')}
//                                 >
//                                     <FaCertificate /> 
//                                     {expanded && <span className="button-text">Licenses</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${expanded ? 'expanded' : ''} ${activeTab === 'Lender' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Lender')}
//                                 >
//                                     <FaUniversity /> 
//                                     {expanded && <span className="button-text">Lender Information</span>}
//                                 </button>

//                                 <button 
//                                     className={`dash-but ${expanded ? 'expanded' : ''} ${activeTab === 'Broker' ? 'active' : ''}`} 
//                                     onClick={() => handleTabChange('Broker')}
//                                 >
//                                     <FaUserTie /> 
//                                     {expanded && <span className="button-text">Broker</span>}
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="tab-content dashboard-background">
//                             <div id="Yellow-User" className={`tab-pane ${activeTab === 'Yellow-User' ? 'active' : 'fade'}`} style={{ marginTop: "100px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text"> Edit Profile</span>
//                                         <h4 className="dashmain-head"> Edit Profile</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Louser />
//                                 </div>
//                             </div>
//                             <div id="change-password" className={`tab-pane ${activeTab === 'change-password' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Change Password</span>
//                                         <h4 className="dashmain-head">Change Password</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <ChangePassword />     
//                                 </div>
//                             </div>
//                             <div id="Licenses" className={`tab-pane ${activeTab === 'Licenses' ? 'active' : 'fade'}`} style={{ marginTop: "90px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Licenses</span>
//                                         <h4 className="dashmain-head">Licenses</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Licenses />     
//                                 </div>
//                             </div>
//                             <div id="Lender" className={`tab-pane ${activeTab === 'Lender' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Lender Information</span>
//                                         <h4 className="dashmain-head">Lender Information</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Lender />
//                                 </div>
//                             </div>  
//                             <div id="Broker" className={`tab-pane ${activeTab === 'Broker' ? 'active' : 'fade'}`} style={{ marginTop: "150px" }}>
//                                 <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
//                                     <div>
//                                         <span className="dashhome-text">Home
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                                                 <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                             </svg>
//                                         </span>
//                                         <span className="dashhome-text">Broker Information</span>
//                                         <h4 className="dashmain-head">Broker Information</h4>
//                                     </div>
//                                 </div>
//                                 <div className="dash-head-card mx-1">
//                                     <Broker />
//                                 </div>
//                             </div> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Yellowuser;

