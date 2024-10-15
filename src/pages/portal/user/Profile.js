import React, { useState, useRef } from "react";
import { FaUserEdit, FaKey, FaCertificate, FaUniversity, FaUserTie } from 'react-icons/fa';
import Editprofile from "./Editprofile";
import ChangePassword from "./Changepassword";
import Head from 'next/head';

function Profile() {
  const [disableFields, setDisableFields] = useState(false);
  const [profileImage, setProfileImage] = useState("Finance"); // Default profile image
  const fileInputRef = useRef(null);
  const [profilexpand, setProfilExpand] = useState(true);
    const [profileactive, setProfileActive] = useState('Profile');

    const handleProfileChange = (tab) => {
      setProfileActive(tab);
        setProfilExpand(true); // Expand all buttons on any tab click
    }

  const handleCheckboxChange = (e) => {
    setDisableFields(e.target.checked);
  };

  const handleProfileImageClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleExpand = () => {
    setProfilExpand(!profilexpand);
}
  return (
    <>
<Head>
    <title>Profile</title>
    <meta name="description" content="Manage your personal profile, view loan details, and track your financing journey. Access your scenarios, pre-approved letters, and property information all in one place." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

      <div>
        <div className="container-fluid">
          <div className="row" style={{marginTop:'100px'}}>         
            {/* <div className="col-md-2 col-sm-12 p-2" style={{marginLeft:"50px"}}>
            <div
              className="Ellipse84"
              style={{
                width: 180,
                height: 180,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
                border: "10px #E81C25 solid",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
              <div
                className="Ellipse85"
                style={{
                  width: 40,
                  height: 40,
                  background: "#FF5723",
                  marginLeft: "137px",
                  borderRadius: 9999,
                  cursor: "pointer",
                }}
                onClick={handleProfileImageClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  padding="10px"
                  className="bi bi-camera-fill mx-2 mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                </svg>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleProfileImageChange}
              />
            </div>
          </div>
          <div className="col-md-3 col-sm-10 d-flex flex-column justify-content-center">
            <span className="profile-picture">Your Profile Picture</span>
          </div>
          <div className="col-md-5 col-sm-2">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              style={{ height: "20px", width: "20px", marginTop: "89px" }}
            />
          </div> */}
            <div className="col-sm-12 col-md-2 mt-5">
              <div className="nav nav-pills">
                <div className="nav-item">
                  <button
                    className={`toggle-expand-btn ${profilexpand ? 'expanded' : ''}`}
                    onClick={toggleExpand}
                  >
                    {profilexpand ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                      </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>}
                  </button>
                  <button 
                    className={`dash-but ${profilexpand ? 'expanded' : ''} ${profileactive === 'Profile' ? 'active' : ''}`} 
                    onClick={() => handleProfileChange('Profile')}
                  >
                                    <FaUserEdit style={{ marginRight: '10px' }}/> 
                                    {profilexpand && <span className="mx-2">Profile</span>}
                                </button>
                                <button 
                                    className={`dash-but ${profilexpand ? 'expanded' : ''} ${profileactive === 'ChangePassword' ? 'active' : ''}`} 
                                    onClick={() => handleProfileChange('ChangePassword')}
                                >
                                    <FaKey style={{ marginRight: '10px' }}/> 
                                    {profilexpand && <span className="mx-2">Change Password</span>}
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-8 mb-4">
                        <div className="tab-content dashboard-background">
                            <div id="Profile" className={`tab-pane ${profileactive === 'Profile' ? 'active' : 'fade'}`} style={{ marginTop: "20px" }}>
                                <div className="col-sm-12 col-md-12 p-3 d-flex justify-content-between">
                                    <div>
                                        <span className="dashhome-text">Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                        <span className="dashhome-text"> Edit profile</span>
                                        <h4 className="dashmain-head"> Edit profile</h4>
                                    </div>
                                </div>
                                <div className="dash-head-card2 mb-5 m-2">
                                    <Editprofile />
                                </div>
                            </div>
                            <div id="ChangePassword" className={`tab-pane ${profileactive === 'ChangePassword' ? 'active' : 'fade'}`} style={{ marginTop: "20px" }}>
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
                                <div className="dash-head-card2 mb-5 m-2">
                                    <ChangePassword />     
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
