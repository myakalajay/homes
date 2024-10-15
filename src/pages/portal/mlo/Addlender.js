
import React, { useState,useEffect } from "react";
import DOMPurify from 'dompurify';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function Addlender({lenddata}) {
    const userId = useSelector((state) => state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const [brokerid, setBrokerid] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [lenderdata, setLenderData] = useState({
        // lendertype: "",
        // lendername: "",
        userid:"",
        borkerid:"",
        lenderid:"",
        decrip: "",
        startdate:"",
        enddate:"",
        poc:"",
        email: "",
        mobile: "",
        rate:"",
        // nmls: "",
        // fax: "",
        // active: "",
        // lenderid: "",
    });

    const [tableData, setTableData] = useState([]);

    const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };

    useEffect(() => {
        const fetchBrokername = async () => {
            const requestData = { broker: "" };
              // console.log('Request Data:', requestData);
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getbroker`, {
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
            setBrokerid(data);
             console.log('setdata',data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchBrokername();
          }, []);

    const handleLenderChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setLenderData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
        }));
    };

    const handleActiveChange = (value) => {
        setLenderData((prevData) => ({
            ...prevData,
            active: value === 'Yes' ? 1 : 0,
        }));
    };

    const handleSubmitLender = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlender`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lenderdata),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); 
            console.log(data);
            setTableData((prevData) => [...prevData, lenderdata]);
            setLenderData({
                userid:userId,
                // borkerid:"",q
                lenderid:"",
                decrip: "",
                startdate:"",
                enddate:"",
                poc:"",
                email: "",
                mobile: "",
                rate:"",
                    });
                    // const data = await response.json(); // Assuming the response contains JSON data
                    console.log(data); // Handle success response
                    
                    setSuccessMessage('Data saved successfully!'); // Show success message
                  } catch (error) {
                    console.error(error); // Handle error
                    setSuccessMessage('Failed to save data.'); // Show failure message
                  }
                };
              

    return (
        <>
            <div className="row">
            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker Name</span>
                            <div>
                                 <select
                            className="dashboard-text"
                            name="brokerName"
                            value={lenddata?.brokerid}
                            onChange={handleLenderChange}
                        >
                            <option value="">Select Broker Name...</option>
                            {brokerid.map((broker) => (
                                 <option key={broker.brokerid} value={broker.brokerid}>
                                 {broker.brokername}
                             </option>
                            ))}
                        </select>
                            </div>
                        </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="profile-name">Lender Name</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-text"
                            placeholder="Zone 1"
                            style={{ fontSize: '15px' }} 
                            id="lendername" 
                            name="lendername" 
                            value={lenddata?.lendername} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="profile-name">Lender Type</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-text"
                            placeholder="Zone 1"
                            style={{ fontSize: '15px' }} 
                            id="lendername" 
                            name="lendername" 
                            value={lenddata?.lendertype} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Lender Email</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }} 
                            id="email" 
                            name="email" 
                            value={lenddata?.email} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Lender Mobile</span>
                    <div>
                        <input 
                            type='text'
                            className="dashboard-text"  
                            placeholder="9120000000"
                            style={{ fontSize: '15px' }} 
                            id="phone" 
                            name="phone" 
                            value={lenddata?.phone} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Lender website</span>
                    <div>
                        <input 
                            type='text'
                            className="dashboard-text"  
                            placeholder="9120000000"
                            style={{ fontSize: '15px' }} 
                            id="phone" 
                            name="phone" 
                            value={lenddata?.website} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="profile-name">Lender Fax</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-text"
                            placeholder="Zone 1"
                            style={{ fontSize: '15px' }} 
                            id="lendername" 
                            name="lendername" 
                            value={lenddata?.fax} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="profile-name">Nmls</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-text"
                            placeholder="Zone 1"
                            style={{ fontSize: '15px' }} 
                            id="lendername" 
                            name="lendername" 
                            value={lenddata?.nmls} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Lender Rate</span>
                    <div>
                        <input 
                            type='text'  
                            className="dashboard-text" 
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }}
                            id="rate" 
                            name="rate" 
                            value={lenddata?.rate} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Description</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }} 
                            id="description" 
                            name="description" 
                            value={lenddata?.description} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                <span className="property-text">Active</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="checkbox"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={lenderdata?.active === 1}
                                            onChange={(e) => handleActiveChange(e.target.value)}
                                        />
                                        
                                     <label>Yes</label>
                                     </div>
                                        <div className="m-1">
                                        <input 
                                            type='checkbox'
                                            label='No'
                                            value='No'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={lenderdata?.active === 0}
                                            onChange={(e) => handleActiveChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                </div>
        
                <div className="col-sm-12 col-md-8 d-flex justify-content-end mx-5">
                    <button className="lobutton m-2" onClick={handleSubmitLender}>Save</button>
                    <button className="lobutton m-1">Close</button>
                    {/* <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div> */}
                </div>
            </div>  

            {tableData.length > 0 && (
                <div className="row mt-4">
                    <div className="col-sm-12">
                    <div className='table-responsive'>
                        <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
                    <thead>
                    <tr>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender Type<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg>
                        </th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg>
                        </th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Email <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Description <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Phone <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Fax <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                         <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Website <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                         <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Active <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                        <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>NMLS <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
                            </svg></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((item, index) => (
                            <tr key={index}>
                            <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lendertype}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lendername}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.email}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.decrip}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.fax}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.website}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.active}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lenderid}</td>
                            <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.nmls}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Addlender;
