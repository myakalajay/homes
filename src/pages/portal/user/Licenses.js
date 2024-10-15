import React,{useState,useEffect} from "react";
import { Table } from 'react-bootstrap';
import Addlender from "./Addlender";
import Dashproperty from './Dashproperty';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';

function Licenses(){
    const userId = useSelector((state) => state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const [modalShow, setModalShow] = React.useState(false);
    const [properties, setProperties] = useState([]);
    const [brokername, setBrokerName] = useState([]);
    const [state, setState] = useState([]);
    const [showlender,setShowLender]=useState(false);
    const [activeBut, setActiveBut] = useState('licenses'); 
    const [licensesData, setLicensesData] = useState({
        user: userId,
        brokername: "",
        startdate:"",
        enddate:"",
        rate:"",
        rateprc:"",
        appllink:"",
        shortlink:"",
        active:""
        // state:"",
        // broker: "",
        // mobile: "",
        // nmls:"",
        // website:"",
        // email: "",
        // startdate:"",
        // enddate:"",
        // rate:"",
        // rateprc:"",
        // disc:"",
        // contact: "",
        // addr1:"",
        // addr2:"",
        // city:"",
        // zipcode:"",
        // fax:"",
        // appllink:"",
        // shortlink:"",
        // smsconsent:"",
        // ratepct:"",
    });
    //  const handleLicensesChange = (e) => {
    //     const { name, value } = e.target;
    //     const sanitizedValue = DOMPurify.sanitize(value); 
    //     setLicensesData((prevData) => ({
    //         ...prevData,
    //         [name]: (name === "rate" || name === "rateprc") ? parseFloat(sanitizedValue) : sanitizedValue,
    //     }));
    // };
    const handleLicensesChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = DOMPurify.sanitize(value);
        setLicensesData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
        }));
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
            setBrokerName(data);
            //  console.log('setdata',data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchBrokername();
          }, []);


          useEffect(() => {
            const fetchState = async () => {
                const requestData = { broker: "" };
                  // console.log('Request Data:', requestData);
              try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getcountrystates`, {
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
                setState(data);
                //  console.log('setdata',data)
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
            fetchState();
              }, []);

              
    const handleSubmitLicenses = async () => {
        try {
            // Parsing rate and rateprc to ensure they are numbers
            const parsedRate = parseFloat(licensesData.rate);
            const parsedRatePrc = parseFloat(licensesData.rateprc);

            if (isNaN(parsedRate) || isNaN(parsedRatePrc)) {
                throw new Error('Rate and Rate Percentage must be valid numbers');
            }

            // ${process.env.NEXT_API_URL}/api/v1/auth/setuserprofile
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlobrokerlicense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...licensesData,
                    rate: parsedRate,
                    rateprc: parsedRatePrc,
                    // user:userId,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Assuming the response contains JSON data
            console.log(data); // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const handleAmortizationButtonClick = () => {
        setActiveBut('lender');
        // setShowAmortizationData(true);
        setShowLender(true);
    };
  
    const handleBreakupButtonClick = () => {
      setActiveBut('licenses'); 
      setShowLender(false);
    //   setShowAmortizationData(false);
  };

    return(
        <>
        <div className="row p-4">
            {/* <div className=" mb-3"> */}
                <div className="col-md-12">
                 <button className={activeBut === 'licenses' ? 'addlicenses active' : 'addlicenses'} onClick={handleBreakupButtonClick}>Add Licenses</button>
                <button className= {activeBut === 'lender' ? 'addlender active' : 'addlender'} onClick={handleAmortizationButtonClick}>Add Lender</button>
            {/* </div> */}
            </div>
            {showlender ?(
                <>
                 <Addlender/>
                </>
            ):(
                <>
      <div className="col-md-9 col-sm-12">
                    <div className="d-flex  justify-content-between">
                    {/* <h3>Licenses</h3> */}
                    {/* {userId} */}
                    {/* <button className={activeBut === 'break' ? 'breakup active' : 'breakup'} onClick={handleBreakupButtonClick}>Add Licenses</button>
                              <button className= {activeBut === 'amortiz' ? 'amortization active' : 'amortization'} onClick={handleAmortizationButtonClick}>Add Lender</button> */}
                    {/* <button className="lobutton">Add</button> */}
                    </div>
                    </div>
                            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">State</span>
                            <div>
                            <select
                            className="dashboard-text"
                            name="state"
                            value={licensesData.state}
                            onChange={handleLicensesChange}
                        >
                            <option value="">Select Broker name...</option>
                            {state.map((country) => (
                                 <option key={country.countrystateid} value={country.statecode}>
                                 {country.state}
                             </option>
                            ))}
                        </select>
                                {/* <input
                                    type="text"
                                    className="dashboard-box"
                                    id="state" 
                                    name="state"
                                    style={{fontSize: '15px'}} 
                                    value={licensesData.state} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                /> */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker Name</span>
                            <div>
                                 <select
                            className="dashboard-text"
                            name="brokername"
                            value={licensesData.brokername}
                            onChange={handleLicensesChange}
                        >
                            <option value="">Select Broker name...</option>
                            {brokername.map((broker) => (
                                 <option key={broker.brokerid} value={broker.brokerid}>
                                 {broker.brokername}
                             </option>
                            ))}
                        </select>
                            </div>
                        </div>
                       
                            {/* <div className="col-md-5 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker Mobile</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-box"
                                    id="mobile" 
                                    name="mobile"
                                    style={{fontSize: '15px'}} 
                                    value={licensesData.mobile} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div> */}
                        {/* <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker NMLS</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-box"
                                    id="nmls" 
                                    name="nmls"
                                    style={{fontSize: '15px'}} 
                                    value={licensesData.nmls} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div> */}
                       
                            {/* <div className="col-md-5 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker website</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-box"
                                    id="website" 
                                    name="website"
                                    style={{fontSize: '15px'}} 
                                    value={licensesData.website} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div> */}
                        {/* <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker Email</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-box"
                                    id="email" 
                                    name="email"
                                    style={{fontSize: '15px'}} 
                                    value={licensesData.email} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div> */}
                            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker application URL</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-text" 
                                    name="appllink"
                                    // style={{fontSize: '15px'}} 
                                    value={licensesData.appllink} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Broker short application URL</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-text"
                                    name="shortlink"
                                    // style={{fontSize: '15px'}} 
                                    value={licensesData.shortlink} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div>
                            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Start Date</span>
                            <div>
                                <input
                                    type="date"
                                    className="dashboard-text" 
                                    name="startdate"
                                    value={licensesData.startdate} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">End Date</span>
                            <div>
                                <input
                                    type="date"
                                    className="dashboard-text"
                                    name="enddate"
                                    value={licensesData.enddate} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div>
                            {/* <div className="col-md-5 col-sm-12 mt-2"> 
                                <span className="profile-name">Description</span>
                            <div>
                                <input
                                     rows="3"
                                    // type="description"
                                    className="dashboard-box"
                                    id="disc" 
                                    name="disc"
                                    value={licensesData.disc} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div> */}
                        <div className="col-md-4 col-sm-6 mt-2"> 
                                <span className="profile-name">Rate</span>
                            <div>
                                <input
                                     rows="3"
                                    // type="description"
                                    className="dashboard-text"
                                    name="rate"
                                    value={licensesData.rate} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 mt-2 d-flex justify-content-between"> 
                            <div>    
                                <span className="profile-name">Rate Precentage</span>
                            <div>
                                <input
                                    //  rows="3"
                                    // type="description"
                                    className="dashboard-text"
                                    name="rateprc"
                                    value={licensesData.rateprc} 
                                    onChange={handleLicensesChange}
                                    // disabled={disableFields}
                                />
                            </div>
                            </div>
                            {/* <button className="btn btn-danger mt-3 mx-2" onClick={()=>{setShowLender(true)}}>Add Lender</button> */}
                        </div>
                        <div className="col-sm-12 col-md-12 d-flex flex-row justify-content-end">
                        <button className="btn btn-danger mt-2 mx-2" onClick={handleSubmitLicenses}>Save</button>
                        </div>
                        <div className="col-sm-12 col-md-9 pt-5">
            <div className="second-box dashboard-advancement mt-3">
            <div className="d-flex flex-row justify-content-between p-2">
            <p className="advance-payments mx-4 mt-4">Advance Payments</p>
            <button className="dashboard-button"  onClick={() => handlePropertyTypeClick(null)}>Add property</button>
            </div>
            <Table   hover className="table">
        <thead>
          <tr>
            <th>Property Type</th>
            <th>Property Name</th>
            <th>Purchase Value</th>
            <th>Loan Amount</th>
            <th>Track</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
        {properties && properties.length > 0 ? (
            properties.map((property) => (
              <tr key={property.propertyid}>
                <td onClick={() => handlePropertyTypeClick(property)}>{property.propertytype}</td>
                <td>{property.propertyname}</td>
                <td>{property.purchasevalue}</td>
                <td>{property.loanamount}</td>
                <td>{property.istrack}</td>
                <td>{property.zipcode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No properties available</td>
            </tr>
          )}
        </tbody>
      </Table>
        <Dashproperty
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>
                    </div>
                    </>
            )}
            </div>
        </>
    );
}

export default Licenses;