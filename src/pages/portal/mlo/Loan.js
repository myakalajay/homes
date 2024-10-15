import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Modal, Button, Spinner } from 'react-bootstrap';

export default function Loan() {
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const userid = useSelector(state=> state.auth.userid);
  const [brokerNames,setBrokerNames]=useState([])
  const [lender,setLender]=useState([])
  const [onlystate, setOnlyState] = useState([]);
  const [zip,setZip]= useState('');
  const [showLoansuccess,setShowLoanSuccess]=useState(false);
  const [loading,setLoading]=useState();
  const [error,setError]=useState();
  const [selectedOption,setSelectedOption]=useState('');
  const [options,setOptions]=useState([]);
  const token = useSelector(state=> state.auth.token);
  const [formData, setFormData] = useState({
    louserid: userid,
    broker: '',
    lender: '',
    borrowerId: '',
    userid: '',
    loantype: '',
    loannumber: '',
    rate: '',
    loanstate: '',
    addr1: '',
    addr2: '',
    city: '',
    state: '',
    zipcode: '',
    purchaseprice: '',
    startdate: '',
    closedate: '',
    loanstatus: '',
    active : 1,
    email: '', // Added email field
    token:token,
    loanid:0
  });

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
        setBrokerNames(data);
        //  console.log('setdata',data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBrokername();
      }, []);

      useEffect(() => {
        const fetchPlaceInfo = async () => {
            if (zip.length === 3 || zip.length===4||zip.length===5) {
                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/getplaceinfo`, {
                        zipcode: zip
                    }).then(response => {
                        const places =response.data.map(place =>({
                            city:place["placename"],
                            state:place["statename"]
                            
                        }))
                        
                        setOptions(places)
                        console.log("options",options)
                    })
                    // setResp(response)
                    console.log(response);
                } catch (error) {
                    setOptions([])
                    console.log(error);
                }
            }
        };
    
        fetchPlaceInfo();
    },[zip]);

      useEffect(() => {
      
        const fetchLender = async () => {
          const requestData = { userid: userid };
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getbrokerlender`, {
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
            setLender(data);
            console.log('lenderdata', data);
            // dispatch(setLenderInformation({ lenderInformation: data }));
            console.log('setdata', data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        if (userid) {
         
          fetchLender();
        }
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
            setOnlyState(data);
            //  console.log('setdata',data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchState();
          }, []);
          const handleOptionSelect = (event) => {
            // debugger
            console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
            console.log("options",options)
            const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
            setSelectedOption(selected);
            console.log("selected",selected);
            setFormData((prevData) => ({
                ...prevData,
                city: selected.city
            }));
            setFormData((prevData) => ({
                ...prevData,
                state: selected.state
            }));
            // setLoUserData(selected.city);
            // setState(selected.state)  
        }

        const handleSubmit = async (e) => {
          if (e) {
            e.preventDefault();
          }
          setLoading(true);
          setError(null); // Clear any previous errors
          setShowLoanSuccess(null); // Clear success message before submitting
        
          if (validateCurrentSection()) {
            try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setcreateloan`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              // Show success message
              setShowLoanSuccess('Form Submitted Successfully');
            } catch (error) {
              // Set error message
              setError('Error submitting form: ' + error.message);
              console.error('Error submitting form:', error);
            } finally {
              setLoading(false);
            }
          } else {
            setLoading(false); // Stop loading if validation fails
          }
        };
        
      const  handleLoanSuccessClose=(e)=>{
        setShowLoanSuccess(false);
      }

  const sanitizeInput = (value) => {
    return DOMPurify.sanitize(value);
  };

  const handleLoanInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleZipInputChange = async (event) =>{
    // debugger
    setZip(event.target.value); 
    console.log(zip)
    setFormData({
      ...formData,
       zipcode: event.target.value
   }
   )

}

const handleNext = () => {
  console.log('Selected Section:', selectedSection);
  console.log('Validation:', validateCurrentSection());
  if (validateCurrentSection()) {
    switch (selectedSection) {
      case 'getting-started':
        setSelectedSection('loan-information');
        break;
      case 'loan-information':
        setSelectedSection('address-information');
        break;
      case 'address-information':
        setSelectedSection('loan-status');
        break;
      case 'loan-status':
        console.log('Calling handleSubmit');
        handleSubmit(); // Add log here to confirm it's called
        break;
      case 'create-account':
        setSelectedSection('loan-information');
        break;
      default:
        break;
    }
  }
};


  const handleReset = () => {
    setFormData((prev) => {
      const resetData = { ...prev };
      switch (selectedSection) {
        case 'getting-started':
          resetData.mloUserId = '';
          resetData.brokerId = '';
          resetData.lenderId = '';
          resetData.borrowerId = '';
          break;
        case 'loan-information':
          resetData.loanType = '';
          resetData.loanNumber = '';
          resetData.interestRate = '';
          resetData.loanState = '';
          break;
        case 'address-information':
          resetData.address1 = '';
          resetData.address2 = '';
          resetData.city = '';
          resetData.state = '';
          resetData.zipcode = '';
          break;
        case 'loan-status':
          resetData.purchaseAmount = '';
          resetData.applicationDate = '';
          resetData.closingDate = '';
          resetData.loanStatus = '';
          break;
        case 'create-account':
          resetData.email = ''; // Reset email field
          break;
        default:
          break;
      }
      return resetData;
    });
  };

  const validateCurrentSection = () => {
    switch (selectedSection) {
      case 'getting-started':
        //  return formData.mloUserId && formData.brokerId && formData.lenderId;
        return true
      case 'loan-information':
        //  return formData.loanType && formData.loanNumber && formData.interestRate && formData.loanState;
        return true;
      case 'address-information':
        // return formData.address1 && formData.city && formData.state && formData.zipCode;
        return true;
        case 'loan-status':
          // handleSubmit();
        //  return formData.purchaseAmount && formData.applicationDate && formData.closingDate && formData.loanStatus;
        return true;
      case 'create-account':
        return formData.email; // Validate email field
      default:
        return false;
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'getting-started':
  return (
    <div className="main-content">
      <p className='Mortgage1 p-3'>Getting Started</p>
      <form>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <span className="property-text mt-3">MLO User ID</span><span style={{ color: 'red' }}>*</span>
          <div>
          <input
              className="dashboard-text"
              // placeholder="123456789"
              // placeholder="123456789"
              type='text'
              name="louserid"
              value={formData.louserid}
              onChange={handleLoanInputChange}
              required
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-3">
          <span className="property-text mt-2">Broker ID</span><span style={{ color: 'red' }}>*</span>
          <div>
          
          <select
                    className="dashboard-text"
                    id="broker"
                    name="broker"
                    value={formData.broker}
                    onChange={handleLoanInputChange}
                  >
                    <option value="">Select Broker</option>
                    {brokerNames.map(broker => (
                      <option key={broker.brokerid} value={broker.brokerid}>
                        {broker.brokername}
                      </option>
                    ))}
                  </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <span className="property-text mt-2">Lender ID</span><span style={{ color: 'red' }}>*</span>
          <div>
          <select
                    className="dashboard-text"
                    id="lender"
                    name="lender"
                    value={formData.lender}
                    onChange={handleLoanInputChange}
                  >
                    <option value="">Select Lender</option>
                    {lender.map(lender => (
                      <option key={lender.lenderid} value={lender.lenderid}>
                        {lender.lenderid}
                      </option>
                    ))}
                  </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-3">
          <span className="property-text mt-2">Borrower ID (Optional)</span>
          <div>
          <input
              className="dashboard-text"
              type='email'
              placeholder="Enter Borrower ID"
              name="borrowerId"
              value={formData.borrowerId}
              onChange={handleLoanInputChange}
              required
                  />
          </div>
        </div>
        <div className="note">
          <a href="#" onClick={() => setSelectedSection('create-account')}>Note: Send email to create an account</a>
        </div>
      </form>
    </div>
  );
      case 'loan-information':
        return (
          <div className="main-content">
            <p className='Mortgage1 p-3'>Loan Information</p>
            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-3">Loan Type</span>
              <div>
              <select
                    className="dashboard-text"
                    id="loantype"
                    name="loantype"
                    value={formData.loantype}
                    onChange={handleLoanInputChange}
                  >
                    <option value="">Choose Loan type</option>
                    <option value="type1">type 1</option>
                    <option value="type2">type 2</option>
                    <option value="type3">type 3</option>
                  </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Loan Number</span>
              <div>
              <input
                    className="dashboard-text"
                    placeholder="Enter Loan Number"
                    name="loannumber"
                    value={formData.loannumber}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Rate of Interest %</span>
              <div>
              <input
                    className="dashboard-text"
                    placeholder="Enter Interest Rate"
                    name="rate"
                    value={formData.rate}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-3">Loan State</span>
              <div>
              <select
                    className="dashboard-text"
                    id="loanstate"
                    name="loanstate"
                    value={formData.loanstate}
                    onChange={handleLoanInputChange}
                  >
                    <option value="">Select State</option>
                      {onlystate.map((state) => (
                          <option key={state.countrystateid} value={state.state}>
                              {state.state}
                          </option>
                      ))}
                  </select>
              </div>
            </div>
          </div>
        );
      case 'address-information':
        return (
          <div className="main-content">
            <p className='Mortgage1 p-3'>Address Information</p>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Address 1</span>
              <div>
              <input
                    className="dashboard-text"
                    placeholder="Enter Address 1"
                    name="addr1"
                    value={formData.addr1}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Address 2</span>
              <div>
              <input
                    className="dashboard-text"
                    placeholder="Enter Address 2 (Optional)"
                    name="addr2"
                    value={formData.addr2}
                    onChange={handleLoanInputChange}
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Zip Code</span>
              <div>
                <input
                  className="dashboard-text"
                  placeholder="Enter Zip Code"
                  name="zipcode"
                  maxLength={5}
                  value={formData.zipcode}
                  onChange={handleZipInputChange}
                />
                { options.length>0 && formData.zipcode!==null && zip.length!==0 && 
            <div className="col-sm-12  col-md-6 col-lg-6">
                  <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-selecttextbox" style={{width:"381px"}} >
                      <option value="">{`:Select city and state...`}</option>
                      {options.map((option,index) => (
                          <option key={index} value={`${option.city},${option.state}`}>
                              {option.city} {option.state}
                          </option>
                      ))}
                  </select>
              </div>
              }
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">City</span>
              <div>
                <input
                  className="dashboard-text"
                  placeholder="Enter City"
                  name="city"
                  value={formData.city}
                  onChange={handleLoanInputChange}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">State</span>
              <div>
                <input
                  className="dashboard-text"
                  placeholder="Enter State"
                  name="state"
                  value={formData.state}
                  onChange={handleLoanInputChange}
                />
              </div>
            </div>
         
            {/* <div className="d-flex flex-row justify-content-end">
              <button type="button" className="prebutton m-1" onClick={handleReset}>Reset</button>
              <button type="button" className="lobutton m-1 mx-4 mb-3" onClick={handleNext}>Next</button>
            </div> */}
          </div>
        );
      case 'loan-status':
        return (
          <div className="main-content">
            <p className='Mortgage1 p-3'>Loan Status</p>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Purchase Amount</span>
              <div>
              <input
                    className="dashboard-text"
                    placeholder="Enter Purchase Amount"
                    name="purchaseprice"
                    value={formData.purchaseprice}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Application Date</span>
              <div>
              <input
                    className="dashboard-text"
                    type="date"
                    name="startdate"
                    value={formData.startdate}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Closing Date</span>
              <div>
              <input
                    className="dashboard-text"
                    type="date"
                    name="closedate"
                    value={formData.closedate}
                    onChange={handleLoanInputChange}
                    required
                  />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Loan Status</span>
              <div>
                <select className="dashboard-text" name="loanstatus" value={formData.loanstatus} onChange={handleLoanInputChange}>
                        
                          <option value="">Eg: Success</option>
                          <option value="Applied">Applied</option>
                          <option value="Submitted">Submitted</option>
                          <option value="CTC">CTC</option>
                          <option value="Docs">Docs</option>
                          <option value="Funding">Funding</option>
                          <option value="Closed">Closed</option>
                          <option value="Cancelled">Cancelled</option>
                          <option value="Withdrawn">Withdrawn</option>
                          <option value="Rejected">Rejected</option>

                      </select>
              </div>
            </div>
          </div>
        );
      case 'create-account':
        return (
          <div className="main-content">
            <p className='Mortgage1 p-3'>Create Account</p>
            <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Email Address</span>
              <div>
                <input
                  className="dashboard-text"
                  placeholder="Enter email"
                  name="email" // Changed name to "email"
                  value={formData.email} // Use email field from formData
                  onChange={handleLoanInputChange}
                />
              </div>
            </div>
            {/* <div className="d-flex flex-row justify-content-end">
              <button type="button" className="prebutton m-1" onClick={handleReset}>Reset</button>
              <button type="button" className="lobutton m-1 mx-4 mb-3" onClick={handleNext}>Next</button>
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mx-2">
        <div className="col-md-4 sidebar">
          <ul className='p-3'>
            <li>
              <input 
                type="radio" 
                id="getting-started" 
                name="sidebar-option" 
                checked={selectedSection === 'getting-started'}
                onChange={() => setSelectedSection('getting-started')} 
              />
              <label 
                htmlFor="getting-started" 
                className={selectedSection === 'getting-started' ? 'active' : ''}
              >
                Getting Started
              </label>
            </li>
            <li>
              <input 
                type="radio" 
                id="loan-information" 
                name="sidebar-option" 
                checked={selectedSection === 'loan-information'}
                onChange={() => setSelectedSection('loan-information')} 
              />
              <label 
                htmlFor="loan-information" 
                className={selectedSection === 'loan-information' ? 'active' : ''}
              >
                Loan Information
              </label>
            </li>
            <li>
              <input 
                type="radio" 
                id="address-information" 
                name="sidebar-option" 
                checked={selectedSection === 'address-information'}
                onChange={() => setSelectedSection('address-information')} 
              />
              <label 
                htmlFor="address-information" 
                className={selectedSection === 'address-information' ? 'active' : ''}
              >
                Address Information
              </label>
            </li>
            <li>
              <input 
                type="radio" 
                id="loan-status" 
                name="sidebar-option" 
                checked={selectedSection === 'loan-status'}
                onChange={() => setSelectedSection('loan-status')} 
              />
              <label 
                htmlFor="loan-status" 
                className={selectedSection === 'loan-status' ? 'active' : ''}
              >
                Loan Status
              </label>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
        {renderContent()}
      <div className="navigation-buttons mt-3 mx-3">
        <button className='lobutton ' onClick={() => setSelectedSection(prev => (prev === 'getting-started' ? 'getting-started' : prev === 'loan-information' ? 'getting-started' : prev === 'address-information' ? 'loan-information' : prev === 'loan-status' ? 'address-information' : 'loan-status'))}>Previous</button>
        <button className='lobutton mx-2' onClick={handleNext}>{selectedSection === 'loan-status' ? 'Submit' : 'Next'}</button>
        <button className='lobutton ' onClick={handleReset}>Reset</button>
      </div>
    
        </div>
      </div>
      <Modal size='lg' show={showLoansuccess} onHide={handleLoanSuccessClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5 className="text-center">{showLoansuccess}</h5></Modal.Body>
                <Modal.Footer>
                  <button className="lobutton" onClick={handleLoanSuccessClose}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
    </div>
    
  );
}
