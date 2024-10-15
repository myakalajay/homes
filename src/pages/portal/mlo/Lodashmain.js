import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
// import Dashproperty from "@/pages/portal/user/Dashproperty";
// import Step from "@/components/home/Step";
// import  Link  from 'next/link';
// import Dashmain from "./Dashmain";
// import './Dashboard.css';
// import Dashproperty from "./Dashproperty";
import Modal from 'react-bootstrap/Modal';

function Lodashmain(){
    // const [modalShow, setModalShow] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [dashname, setDashName] = useState([]);
    const [properties, setProperties] = useState([]);
    const [showPropertyInfo, setShowPropertyInfo] = useState(true);
    const [selectedLoan, setSelectedLoan] = useState([]);
    const [loanData, setLoanData] = useState([]);
    const [showLoanData,setShowLoanData] = useState(true) 
    const [activeButton, setActiveButton] = useState('property');
    const [mortgageCompanies, setMortgageCompanies] = useState([]);
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const firstname = useSelector(state => state.auth.firstname);
    const [errors,setErrors]=useState({})
    const [options,setOptions]=useState([]);
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
                console.log("lodashmai",data)
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

    const handlePropertyTypeClick = (property) => {
        // setSelectedPropertyId(property.propertyid);
        setModalShow(true);
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        console.log("fj",value)
        const sanitizedValue = sanitizeInput(value);
        setLoanData((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      }

      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLoan(null);
      };

      const handleCloseClick = () => {
        setShowLoanData(true); 
      };

      const handleEditInputChange = (e) => {
        const { name, value } = e.target;
      
        console.log("fhgj",value)
        const sanitizedValue = sanitizeInput(value);
        setSelectedLoan((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      };

      const handleZipInputChange = async ({event}) =>{
        const zipcode = event.target.value;
        setZip(zipcode);
      
        if (loan) {
          setSelectedLoan(loan);
          setIsModalOpen(true);
        } else {
          console.error('Loan details are not available');
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserproperty`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(selectedLoan),
           }).then((response) => response.json())
           .then((data) => {
           console.log("property saved successfully")
           })
           .catch((error) => {
             // setMessage("Password is unsuccessful")
             console.error('Error:', error);
           });
      
           if (response.ok) {
             // Handle success
            
             
             console.log("Data submitted successfully!");
            
           } else {
             // Handle errors
             console.error("Error submitting data");
           }
         } catch (error) {
           console.error("Error:", error);
         }
      };

      const handleEditClick = (loan) => {
        setSelectedLoan(loan);
        setIsModalOpen(true);
      };

      const handleLoanSave = async (e) => {
        e.preventDefault();
        try {
          const response= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserpropertyloan`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({...loanData,
              propid:selectedLoan.propertyid
          }),
           }).then((response) => response.json())
           .then((data) => {
           console.log("Loan saved successfully")
           })
           .catch((error) => {
             console.error('Error:', error);
           });
      
           if (response.ok) {
      
             
             console.log("Data submitted successfully!");
            
           } else {
             console.error("Error submitting data");
           }
         } catch (error) {
           console.error("Error:", error);
         }
      };
      

    return(
        <>
        {/* <div className="d-flex">
        <div className="lo-dash-card1">
                <div className="">
                <h5 className="mx-1">Your Overview</h5>
                </div>
            <div className="d-flex">
                <div className="dashboard-card">
                    <span className="dash-text">No of Properties</span>
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
                    <span className="dash-text">Total assets value</span>
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
                    <span className="dash-text">Outstanding loan</span>
                    <div className="pt-2 px-1">
                    <h5>
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
                    </h5>
                    </div>
                    
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                <div className="dashboard-card">
                    <span className="dash-text">Outstanding loan</span>
                    <div className="pt-2 px-1">
                    <h5>
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
                    </h5>
                    </div>
                    
                    <div className="dash-text">
                        Avg up by
                        <span className="dash-text px-4">+12%</span>
                    </div>
                </div>
                </div>
                </div>
                <div className='lo-dash-card mx-2'>
                    <img src="./assets/images/home-page/lo-dash.png" alt="" className="lo-dash-img"/>
                    <div className="d-flex flex-row justify-content-center">
                    <button className="dashboard-button mt-2"  onClick={() => setModalShow(true)}>EXPLORE LOAN OPTIONS</button>
                    </div>
                </div>
                </div> */}
                 <div className="row" style={{marginBottom:"4rem"}}>
                </div>

                <div className='dash-table table-responsive'>
            <Table hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
        <thead>
          <tr>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Property Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Property Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Purchase Value <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Track <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Zip Code <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Actions <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
          </tr>
        </thead>
        <tbody>
        {properties && properties.length > 0 ? (
            properties.map((property) => (
              <tr key={property.propertyid}>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.propertytype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.propertyname}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.purchasevalue}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.loanamount}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.istrack}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.zipcode}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>
                <button onClick={() => handleEditClick(property)} className='scenarios-btn'>Edit</button>{property?.actions}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No properties available</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal size='xl' show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className=" col-md-12 d-flex flex-row justify-content-center">
                <button className={activeButton === 'property' ? 'dash-button1 active mt-2' : 'dash-button1 mt-2'} onClick={() => {setShowPropertyInfo(true);setActiveButton('property');}}>Property Information</button>
                <button className={activeButton === 'loan' ? 'dash-button2 active mt-2' : 'dash-button2 mt-2'}    onClick={() => {setShowPropertyInfo(false);setActiveButton('loan')}}>Loan Information</button>
            </div>
            {showPropertyInfo ? (
                <>
        {selectedLoan && (
          <div className='m-4'>
            <form>
                    <label className="property-text"><span className="mx-2">Property Name</span>
                    <div>
                        <input
                            // type='text'
                            className="dashboard-text"
                            // style={{borderColor:"#CACED8"}}
                            placeholder="Enter Property Name"
                            name="propertyname"
                             value={selectedLoan.propertyname} 
                             onChange={handleEditInputChange}
                        />
                        {/* {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}       */}
                        </div>
                        </label>

                    <label className="property-text mx-4"><span className="mx-2">Property type</span>
                    <div>
                    <select 
                        className="dashboard-text" 
                        name="propertytype"
                        value={selectedLoan.propertytype}
                        onChange={handleEditInputChange}
                    >
                    <option value="">Select Property type...</option>
                        <option>Single Family</option>
                        <option>Condo</option>
                        <option>Townhouse</option>
                        <option>Multi-Family</option>
                        <option>Carriage Home</option>
                        <option>Other</option>
                    </select>
            </div>
            </label>
        
                    <label className="property-text mt-2"><span className="mx-2">occupancy type</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="occupancytype"
                            value={selectedLoan.occupancytype}
                            onChange={handleEditInputChange}
                        >
                            <option value="">Select Property type...</option>
                            <option>Primary</option>
                            <option>Second</option>
                            <option>Investment</option>
                        </select>
                    </div>
                    </label>

                 
                    <label className="property-text"><span className="mx-2">Address1</span>
                    <div>
                        <input 
                            // type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Your Address1"
                            name="addr1"
                            value={selectedLoan.addr1}
                            onChange={handleEditInputChange}
                        />
                         {/* {errors.addr1 && (<div style={{color:'red'}}>{errors.addr1}</div>)} */}
                    </div>
                    </label>

                
                    <label className="property-text mx-4"><span className="mx-2">Address2</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Your Address2" 
                            name="addr2"
                            value={selectedLoan.addr2}
                            onChange={handleEditInputChange}
                        />
                    </div>
                    </label>
           
                
                    <label className="property-text"><span className="mx-2">Zip Code</span>
                    <div>
                       
                        <input 
                            // type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Your Zip Code"
                            name="zipcode"
                            value={selectedLoan.zipcode}
                            maxLength={5}
                            onChange={handleZipInputChange}
                        />
                         { options.length>0 && 
              <div className="col-sm-12  col-md-6 col-lg-4 mt-3">
                    <select id="options" onChange={handleOptionSelect} className="dashboard-selecttextbox" >
                        <option value="">Select city and state...</option>
                        {options.map((option,index) => (
                            <option key={index} value={`${option.city},${option.state}`}>
                                {option.city} {option.state}
                            </option>
                        ))}
                    </select>
                </div>
                }
                         {/* {errors.zip && (<div style={{color:'red'}}>{errors.zip}</div>)} */}
                    </div>
                    </label>
            
                 
                    <label className="property-text"><span className="mx-2">City</span>
                    <div>
                        <input 
                            // type='text'  
                            readOnly
                            className="dashboard-text"  
                            placeholder="Enter Your City" 
                            name="city"
                            value={selectedLoan.city}
                            onChange={handleEditInputChange}
                        />
                         {/* {errors.city && (<div style={{color:'red'}}>{errors.city}</div>)} */}
                    </div>
                    </label>

                
                    <label className="property-text mx-4"><span className="mx-2">State</span>
                    <div>
                        <input 
                            type='text' 
                            readOnly
                            className="dashboard-text"  
                            placeholder="Enter Your State" 
                            name="state"
                            value={selectedLoan.state}
                            onChange={handleEditInputChange}
                        />
                         {/* {errors.state && (<div style={{color:'red'}}>{errors.state}</div>)} */}
                    </div>
                    </label>
               
               
                    <label className="property-text"><span className="mx-2">Purchase Price</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Your Purchase Price"
                            name="purchasevalue"
                            value={selectedLoan.purchasevalue}
                            onChange={handleEditInputChange}
                        />
                        {/* {errors.purchase && (<div style={{color:'red'}}>{errors.purchase}</div>)} */}
                    </div>
                    </label>
                <div className="d-flex flex-row justify-content-end mt-2">
                <button className="prebutton m-1 " onClick={closeModal}>Close</button>
                <button className="lobutton m-1 mx-4 mb-3" onClick={handleSubmit}>Save</button>
                </div>
            </form>
          </div>
        )}
        </>
        ) : (
          <>
          <div>
          {showLoanData && (
    <button
      className="lobutton mt-2"
      style={{ marginLeft: "50rem", marginBottom: "10px" }}
      onClick={() => setShowLoanData(!showLoanData)}
    >
      Add Loan
    </button>
          )}
          </div>
           { showLoanData ? (
            <>
            <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
            <thead>
              <tr>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Purchase value <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Documents <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
              </tr>
            </thead>
            <tbody>
            {/* {refinace && refinace.length > 0 ? (
                refinace.map((prop) => (
                  <tr key={prop.userpropid}>
                    <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.lendername}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loanamount}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.emiamount}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.term}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.pmiamount}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.istrackrefi}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No properties available</td>
                </tr>
              )} */}
            </tbody>
          </Table>
          </>
          // )}
        ): (
          <>
          {loanData && (
            <div>
              <label className=" mt-2 "><span className="property-text mx-2">Property Name</span>
              <div>
                       <select
                          className="dashboard-text"
                          name="propertyname"
                          value={loanData.propertyname}
                          onChange={handleInputChange}
                      >
                          <option value="">Select Mortgage Company...</option>
                          {properties.map((properties) => (
                               <option key={properties.propertyid} value={properties.propertyname}>
                               {properties.propertyname}
                           </option>
                          ))}
                      </select>
                </div>
                </label>
  
                  <label className="mt-2 mx-5"><span className="property-text mx-2">Loan Type</span>
                  <div>
                      <select 
                          className="dashboard-text" 
                          name="loantype"
                          value={loanData.loantype}
                          onChange={handleInputChange}
                      >
                          <option value="">Select Property type...</option>
                          <option>Conv</option>
                          <option>Good</option>
                          <option>Some Problems</option>
                          <option>Major Problems</option>
                          <option>i'm not sure</option>
                      </select>
                  </div>
                  </label>
              
              
              {/* <label className="property-text mt-2">Mortgage company
              <div>
                       <select
                          className="dashboard-text"
                          name="lender"
                          value={loanData.lender}
                          onChange={handleInputChange}
                      >
                          <option value="">Select Mortgage Company...</option>
                          {mortgageCompanies.map((lender) => (
                               <option key={lender.lenderid} value={lender.lendername}>
                               {lender.lendername}
                           </option>
                          ))}
                      </select>
                </div>
                </label> */}
  
              
                  <label className="mt-2"><span className="property-text mx-2">Loan Amount</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Loan Amount"
                          name="loanamount"
                          value={loanData.loanamount}
                          onChange={handleInputChange}
                        />
                  </div>
                  </label>
             
              
                  <label className="mt-2"><span className="property-text mx-2">Pmi Amount</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Pmi Amount"
                          name="pmiamount"
                          value={loanData.pmiamount}
                          onChange={handleInputChange}
                      />
                  </div>
                  </label>
              
                  <label className="mt-2 mx-5"><span className="property-text mx-2">Loan Start Date</span>
                  <div>
                      <input
                          type='date'
                          className="dashboard-text p-2"
                          placeholder="Enter Loan Start Date"
                          name="startdate"
                          value={loanData.startdate}
                          onChange={handleInputChange}
                          inline 
                      />
                  </div>
                  </label>
              
                  <label className="mt-2 "><span className="property-text mx-2">Loan End Date</span>
                  <div>
                      <input
                          type='date'
                          className="dashboard-text"
                          placeholder="Enter Loan End Date"
                          name="enddate"
                          value={loanData.enddate}
                          onChange={handleInputChange}
                          inline 
                      />
                  </div>
                  </label>
              
                  <label className="mt-2"><span className="property-text mx-2">Loan Rate</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Loan Rate"
                          name="rate"
                          value={loanData.rate}
                          onChange={handleInputChange}
                      />
                  </div>
                  </label>
  
              <label className='mt-2 mx-5'>
                  <span className="property-text mx-2">Loan Term</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Loan Term"
                          name="term"
                          value={loanData.term}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>
              <label className="mt-2">
                  <span className="property-text mx-2">EMI Amount</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter EMI Amount"
                          name="emiamount"
                          value={loanData.emiamount}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>
              
              {/* <div className="col-sm-12  col-md-12 col-lg-4 mt-4">
                  <span className="property-text">Is Refinanced</span>
                  <div className="d-flex">
                      <div className="m-2">
                      <input type='radio'
                          className="m-1"
                          value="Yes"
                          checked={loanData.refinance === "Yes"}
                          onChange={() => handleInput({ target: { name: "refinance", value: "Yes" } })}
                      />
                      <label>Yes</label>
                      </div>
                      <div className="m-2">
                          <input type="radio" 
                              className="m-1"
                              value="No"
                              checked={loanData.refinance === "No"}
                              onChange={() => handleInput({ target: { name: "refinance", value: "No" } })}
                          />
                      <label>No</label>
                  </div>
                  </div>
              </div>
              <div className="col-sm-12  col-md-12 col-lg-4 mt-4">
                  <span className="property-text">Is PaidOff</span>
                  <div className="d-flex">
                      <div className="m-2">
                      <input type='radio'
                          className="m-1"
                          value="Yes"
                          checked={loanData.paidoff === "Yes"}
                          onChange={() => handleInput({ target: { name: "paidoff", value: "Yes" } })}
                        />
                      <label>Yes</label>
                      </div>
                      <div className="m-2">
                          <input 
                              type="radio" 
                              className="m-1"
                              value="No"
                              checked={loanData.paidoff === "No"}
                              onChange={() => handleInput({ target: { name: "paidoff", value: "No" } })}
                          />
                      <label>No</label>
                  </div>
                  </div>
              </div>
              <div className="col-sm-12  col-md-12 col-lg-4 mt-4">
                  <span className="property-text">Is SoldOff</span>
                  <div className="d-flex">
                      <div className="m-2">
                      <input type='radio'
                          className="m-1"
                          value="Yes"
                          checked={loanData.sold === "Yes"}
                          onChange={() => handleInput({ target: { name: "sold", value: "Yes" } })}
                        />
                      <label>Yes</label>
                      </div>
                      <div className="m-2">
                          <input 
                              type="radio" 
                              className="m-1"
                              value="No"
                              checked={loanData.sold === "No"}
                              onChange={() => handleInput({ target: { name: "sold", value: "No" } })}
                          />
                      <label>No</label>
                  </div>
                  </div>
              </div>
              <div className="col-sm-12  col-md-12 col-lg-4 mt-4">
                  <span className="property-text">Is Track</span>
                  <div className="d-flex">
                      <div className="m-2">
                      <input type='radio'
                          className="m-1"
                          value="Yes"
                          checked={loanData.track === "Yes"}
                          onChange={() => handleInput({ target: { name: "track", value: "Yes" } })}
                        />
                      <label>Yes</label>
                      </div>
                      <div className="m-2">
                          <input 
                              type="radio" 
                              className="m-1"
                              value="No"
                              checked={loanData.track === "No"}
                              onChange={() => handleInput({ target: { name: "track", value: "No" } })}
                          />
                      <label>No</label>
                      </div>
                  </div>
              </div> */}
              <div className="d-flex justify-content-end">
              <button className="prebutton m-1 " onClick={handleCloseClick}>Close</button>
               <button className="lobutton m-2" onClick={handleLoanSave}>Submit</button>
  
              </div>
              </div>
              )}
              </>
          
        )}
          </>
        )}
        </Modal.Body>
      </Modal>
      </div>
        </>
    )
}

export default Lodashmain;