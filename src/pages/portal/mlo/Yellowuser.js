import React, { useState } from "react";
import { FaUserEdit, FaKey } from 'react-icons/fa';
import Louser from "./Louser";
import ChangePassword from "@/pages/portal/user/Changepassword";
import Head from 'next/head';

const Yellowuser = () => {
    const [loexpand, setLoExpand] = useState(true); // Set default to true
    const [loactivet, setLoActive] = useState('Edit-Profile');

    const handleLoChange = (tab) => {
        setLoActive(tab);
        setLoExpand(true); // Ensure buttons are expanded when changing tabs
    }

    const toggleExpand = () => {
        setLoExpand(!loexpand);
    }

    return (
        <>
        <Head>
    <title>Profile</title>
    <meta name="description" content="Manage your personal profile, view loan details, and track your financing journey. Access your scenarios, pre-approved letters, and property information all in one place." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>
            <div className="container-fluid">
                <div className="row"  >
                    <div className="col-sm-12 col-md-2 " style={{ marginTop: "150px" }}>
                        <div className="nav nav-pills">
                            <div className="nav-item">
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
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'Edit-Profile' ? 'active' : ''}`}
                                    onClick={() => handleLoChange('Edit-Profile')}
                                >
                                    <FaUserEdit style={{ marginRight: '10px' }}/>
                                    {loexpand && <span>Edit Profile</span>}
                                </button>
                                <button
                                    className={`dash-but ${loexpand ? 'expanded' : ''} ${loactivet === 'change-password' ? 'active' : ''}`}
                                    onClick={() => handleLoChange('change-password')}
                                >
                                    <FaKey style={{ marginRight: '10px' }}/>
                                    {loexpand && <span>Change Password</span>}
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-10 mb-5">
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
                                <div className="dash-head-card mx-4">
                                    <Louser />
                                </div>
                            </div>
                            <div id="change-password" className={`tab-pane ${loactivet === 'change-password' ? 'active' : 'fade'}`} style={{ marginTop: "120px" }}>
                                <div className="">
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
                                <div className="dash-head-card dash-table mb-5 mx-1">
                                    <ChangePassword />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default Yellowuser;
