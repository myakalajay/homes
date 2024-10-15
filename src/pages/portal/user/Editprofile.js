import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import { useSelector } from "react-redux";
import { Form } from 'react-bootstrap';

function Editprofile() {
    const [profileData, setProfileData] = useState([]);
    const [dataSaved, setDataSaved] = useState("");
    const token = useSelector(state => state.auth.token);
    const userid = useSelector(state => state.auth.userid);
    const usertype = useSelector(state => state.user.usertype);

    const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setProfileData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
        }));
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserprofile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ usertype: usertype, user: userid}),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json(); 
                const user = data.result_sets[0][0];
                setProfileData(user); 
                console.log("getData", profileData); 
                console.log("getData", user.firstname, user.lastname, user.email);
                console.log("getData",  data.result_sets[0][0]);
                console.log("getData",  data);
            } catch (error) {
                console.error(error); 
            }
        }
        fetchData();
    }, [usertype, userid]);

    const handleSmsAllowedChange = (e) => {
        setProfileData((prevData) => ({
            ...prevData,
            smsallowed: e.target.checked ? 1 : 0,
        }));
    };

    const handleCheckboxChange = (e) => {
        // Add your logic here if needed
        console.log("Checkbox checked:", e.target.checked);
    };

    const payloadextra = {
        firstname: profileData.firstname,
        lastname: profileData.lastname,
        token: token,
        userid: userid,
        usertype: usertype,
        email: profileData?.emailaddress,
        whatsapp: profileData?.whatsapp,
        mobile: profileData?.mobile,
        work: profileData?.work,
        smsallowed: profileData?.smsallowed,
        username: profileData.emailaddress,
        password: '',
        oauth: '0',
        social: false,
    };

    console.log("profileData", profileData);

    const handleSubmitProfile = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserprofile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...payloadextra }),
            });
            console.log("payloadextra", { ...payloadextra });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); 
            setDataSaved("Profile updated successfully"); 
            console.log("Editeddata", data); 
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <>
        <div className="row p-3 ">
            <div className="col-sm-12 col-md-4">
                <div className="fName ">
                    <label className="px-2">
                        First Name</label>
                    <input
                        type="text"
                        className="edit-text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter First Name"
                        value={profileData?.firstname}
                        onChange={handleProfileChange}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="fName">
                    <label className="px-2">Last Name</label>
                    <input
                        type="text"
                        className="edit-text"
                        id="lastname"
                        name="lastname"
                        placeholder="Enter Last Name"
                        value={profileData?.lastname}
                        onChange={handleProfileChange}
                    />
                </div>
            </div>


            <div className="col-sm-12 col-md-4">
                <div className="fName">
                    <label className="px-2">Email Address</label>
                    <input
                         type="text"
                         className="edit-text p-2"
                         id="emailaddress"
                         name="emailaddress"
                         placeholder="Enter Email address"
                         value={profileData?.emailaddress}
                         onChange={handleProfileChange}
                    />
                </div>
            </div>

            <div className="col-sm-12 col-md-4">
                <div className="fName">
                    <label className="px-2">Phone number</label>
                    <input
                        type="text"
                        className="edit-text"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter Phone number"
                        value={profileData?.mobile}
                        onChange={handleProfileChange}
                    />
                </div>
            </div>
             
            <div className="col-sm-12 col-md-4">
                <div className="fName">
                    <label className="px-2">WhatsApp Number</label>
                    <input
                        type="text"
                        className="edit-text"
                        id="whatsappnum"
                        name="whatsappnum"
                        placeholder="Enter WhatsApp Number"
                        value={profileData?.whatsappnum}
                        onChange={handleProfileChange}
                    />
                </div>
            </div>

            <div className="col-sm-12 col-md-4">
                <div className="fName">
                    <label className="px-2">Work Number</label>
                    <input
                        type="text"
                        className="edit-text"
                        id="worknumber"
                        name="worknumber"
                        placeholder="Enter Work Number"
                        value={profileData?.worknumber}
                        onChange={handleProfileChange}
                    />
                </div>
            </div>
            
            <div className="col-sm-12 col-md-4">
                <div className="form-group">
                    <Form.Label as="legend" className="first-name">SMS Allowed</Form.Label>
                    <div className="d-flex align-items-center px-4">
                        <span className="mr-2">No</span>
                        <Form.Check 
                            type="switch"
                            id="sms-allowed-toggle"
                            className="first-name"
                            label=""
                            name="smsallowed"
                            checked={profileData?.smsallowed === 1}
                            onChange={handleSmsAllowedChange}
                        />
                        <span className="ml-2">Yes</span>
                    </div>
                </div>
            </div>

            {/* <div className="col-md-3 col-sm-10 d-flex flex-column justify-content-center">
                <span className="profile-picture">Your Profile Picture</span>
            </div>
            <div className="col-md-5 col-sm-2">
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    style={{ height: "20px", width: "20px", marginTop: "89px" }}
                />
            </div> */}

            <div className="col-sm-12 col-md-12">
                <div className="mt-3" style={{ display: "flex" }}>
                    <button className="lobutton profile-button text-centre" style={{ marginBottom: "10px" }} onClick={handleSubmitProfile}>Save</button>
                    {dataSaved && <div style={{ alignContent: "center", color: "green",marginLeft:'20px' }}>{dataSaved}</div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Editprofile;
