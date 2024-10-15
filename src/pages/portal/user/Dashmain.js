import { Table,Pagination  } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import {  useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import Dashsub from './Dashsub';
import Modal from 'react-bootstrap/Modal';

function Dashmain(){
  const [mortgageCompanies, setMortgageCompanies] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const user = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPropertyInfo, setShowPropertyInfo] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [showLoanData,setShowLoanData] = useState(true) 
  const [activeButton, setActiveButton] = useState('property');
  const [zipcode,setZip]= useState('');
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [options,setOptions]=useState([]);
  const [popUp,setPopUp]=useState(true)
  const [errors,setErrors]=useState({})
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = properties.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '100vh',
      width:'80vw',
      overflowY: 'auto',
    },
  };
  
  useEffect(() => {
      const fetchDashname = async () => {
          const requestData = { user: user, token: token };
          try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify(requestData),
              });
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                  setProperties(data.result_sets[2]);
              } else {
                setProperties([]);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchDashname();
      
  // const intervalId = setInterval(fetchDashname, 5 *10* 1000);
  // return () => clearInterval(intervalId);

}, [user, token,selectedLoan]);

    
const handleEditClick = (loan) => {
  setPopUp(true)
  setSelectedLoan(loan);
  setIsModalOpen(true);
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

const handleCloseClick = () => {
  setShowLoanData(true); 
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedLoan(null);
};

const sanitizeInput = (value) => {
  return DOMPurify.sanitize(value);
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

const handleInputChange = (e) => {
  const { name, value } = e.target;

  console.log("fj",value)
  const sanitizedValue = sanitizeInput(value);
  setLoanData((prevState) => ({
    ...prevState,
    [name]: sanitizedValue,
  }));
}
const handlePropertyTypeClick = (property) => {
  setModalShow(true);
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

useEffect(() => {
  const fetchMortgageCompanies = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getlender`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
     
      const data = await response.json();
      setMortgageCompanies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchMortgageCompanies();
    }, []);



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
          <div className="mx-1 p-2">
            <div className="d-flex flex-row justify-content-between">
            </div>
            <div className='table-responsive'>
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
        {currentData && currentData.length > 0 ? (
            currentData.map((property) => (
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
      <div className='d-flex flex-row justify-content-center'>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
      </div>
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
                    <label><span className="property-text">Property Name</span>
                    <div>
                        <input
                            className="dashboard-text"
                            placeholder="Enter Property Name"
                            name="propertyname"
                             value={selectedLoan.propertyname} 
                             onChange={handleEditInputChange}
                        />
                        {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}      
                        </div>
                        </label>

                    <label className='mx-4'><span className="property-text">Property type</span>
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
        
                    <label><span className="property-text">occupancy type</span>
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

                 
                    <label className='mt-4'><span className="property-text">Address1</span>
                    <div>
                        <input 
                            className="dashboard-text"  
                            placeholder="Enter Your Address1"
                            name="addr1"
                            value={selectedLoan.addr1}
                            onChange={handleEditInputChange}
                        />
                         {errors.addr1 && (<div style={{color:'red'}}>{errors.addr1}</div>)}
                    </div>
                    </label>

                
                    <label className='mt-4 mx-4'><span className="property-text">Address2</span>
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
           
                
                    <label className='mt-4'><span className="property-text">Zip Code</span>
                    <div>
                       
                        <input 
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
                         {errors.zip && (<div style={{color:'red'}}>{errors.zip}</div>)}
                    </div>
                    </label>
            
                 
                    <label className='mt-4'><span className="property-text">City</span>
                    <div>
                        <input   
                            readOnly
                            className="dashboard-text"  
                            placeholder="Enter Your City" 
                            name="city"
                            value={selectedLoan.city}
                            onChange={handleEditInputChange}
                        />
                         {errors.city && (<div style={{color:'red'}}>{errors.city}</div>)}
                    </div>
                    </label>

                
                    <label className='mt-4 mx-4'><span className="property-text">State</span>
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
                         {errors.state && (<div style={{color:'red'}}>{errors.state}</div>)}
                    </div>
                    </label>
               
               
                    <label className='mt-4'><span className="property-text">Purchase Price</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Your Purchase Price"
                            name="purchasevalue"
                            value={selectedLoan.purchasevalue}
                            onChange={handleEditInputChange}
                        />
                        {errors.purchase && (<div style={{color:'red'}}>{errors.purchase}</div>)}
                    </div>
                    </label>
                <div className="d-flex flex-row justify-content-end">
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
            </tbody>
          </Table>
          </>
       ): (
          <>
          {loanData && (
            <div>
              <label className='mt-3'><span className="property-text">Property Name</span>
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
  
                  <label className='mt-2 mx-3'><span className="property-text">Loan Type</span>
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
              
              
              <label className='mt-2 mx-3'><span className="property-text">Mortgage company</span>
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
                </label>
  
              
                  <label><span className="property-text">Loan Amount</span>
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
             
              
                  <label className='mx-3'><span className="property-text">Pmi Amount</span>
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
              
                  <label className="mt-4 mx-3"><span className="property-text">Loan Start Date</span>
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
              
                  <label className="mt-4"><span className="property-text">Loan End Date</span>
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
              
                  <label className="mt-4 mx-3"><span className="property-text">Loan Rate</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter Loan Rate"
                          name="rate"
                          value={loanData.rate}
                          onChange={handleInputChange}
                      />
                  </div>
                  </label>
  
              <label className='mt-4 mx-3'>
                  <span className="property-text">Loan Term</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter Loan Term"
                          name="term"
                          value={loanData.term}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>
              <label className='mt-4'>
                <span className="property-text">EMI Amount</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter EMI Amount"
                          name="emiamount"
                          value={loanData.emiamount}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>

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
        </div>
        </>
    )
}
export default Dashmain;