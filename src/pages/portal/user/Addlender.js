
import React, { useState } from "react";
import DOMPurify from 'dompurify';

function Addlender() {
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
                    });
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="property-text">Lender Information</span>
                        <button className="lobutton">Add</button>
                    </div>
                </div> 
                <div className="col-sm-12 col-md-5 mt-2">
                    <span className="profile-name">Lender Name</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-box"
                            placeholder="Zone 1"
                            style={{ fontSize: '15px' }} 
                            id="lendername" 
                            name="lendername" 
                            value={lenderdata.lendername} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="profile-name">Lender POC </span>
                    <div>
                        <select className="dashboard-box" 
                            style={{ fontSize: '15px' }}
                            id="lendertype" 
                            name="lendertype" 
                            value={lenderdata.lendertype} 
                            onChange={handleLenderChange}>
                            <option value="">Zone 1</option>
                            <option>Zone 2</option>
                            {/* <option>Zone 3</option>
                            <option>Zone 4</option>
                            <option>Zone 5</option>
                            <option>Zone 6</option> */}
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 mt-2">
                    <span className="property-text">Lender Email</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }} 
                            id="email" 
                            name="email" 
                            value={lenderdata.email} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-2">
                    <span className="property-text">Lender Mobile</span>
                    <div>
                        <input 
                            type='text'
                            className="dashboard-box"  
                            placeholder="9120000000"
                            style={{ fontSize: '15px' }} 
                            id="phone" 
                            name="phone" 
                            value={lenderdata.phone} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 mt-2">
                    <span className="property-text">Lender Rate</span>
                    <div>
                        <input 
                            type='text'  
                            className="dashboard-box" 
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }}
                            id="rate" 
                            name="rate" 
                            value={lenderdata.rate} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 mt-2">
                    <span className="property-text">Description</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            style={{ fontSize: '15px' }} 
                            id="decrip" 
                            name="decrip" 
                            value={lenderdata.decrip} 
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
                                            checked={lenderdata.active === 1}
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
                                            checked={lenderdata.active === 0}
                                            onChange={(e) => handleActiveChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                </div>
        
                <div className="col-sm-12 col-md-8 d-flex justify-content-end mx-5">
                    <button className="lobutton m-2" onClick={handleSubmitLender}>Save</button>
                </div>
            </div>  

            {tableData.length > 0 && (
                <div className="row mt-4">
                    <div className="col-sm-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Lender Type</th>
                                    <th>Lender Name</th>
                                    <th>Email</th>
                                    <th>Description</th>
                                    <th>Phone</th>
                                    <th>Fax</th>
                                    <th>Website</th>
                                    <th>Active</th>
                                    <th>Lender ID</th>
                                    <th>NMLS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.lendertype}</td>
                                        <td>{item.lendername}</td>
                                        <td>{item.email}</td>
                                        <td>{item.decrip}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.fax}</td>
                                        <td>{item.website}</td>
                                        <td>{item.active}</td>
                                        <td>{item.lenderid}</td>
                                        <td>{item.nmls}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}

export default Addlender;
