"use client";
import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import DOMPurify from 'dompurify';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Head from 'next/head';
const PreApprovalPage = () => {
   const userId = useSelector(state => state.auth.userid);
   const [selectedOption,setSelectedOption]=useState('');
   const [options,setOptions]=useState([]);
   const [zip,setZip]= useState('');
  const [formData, setFormData] = useState({
    trantype: '',
    occupancytype: '',
    proptype: '',
    borrowers: '',
    borrower1: [{
      firstName: '',
      lastName: '',
    }],
    borrower2: {
      additionalFirstName: '',
      additionalLastName: '',
    },
    salesprice: '',
    downpercent: '',
    propertyaddress: {
      address: '',
      city: '',
      state: '',
      // zipcode: '',
    },
    state: '',
    doctype: '',
    loanprogram: '',
    term: '',
    city: '',
    email: '',
    mobile: '',
    zipcode: zip,
    homephone: '',
  });
  const [submitted, setSubmitted] = useState(false);
 
  const [showTextField, setShowTextField] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('Personal-Information');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  const handleChangeYes = (event) => {
    if (event.target.value === 'yes') {
      setShowTextField(true);
    } else {
      setShowTextField(false);
    }
  };

  const tabSequence = [
    'Personal-Information',
    'Property-Details',
    'LoanPreferences',
    'AdditionalDetails',
  ];

  const handleNext = () => {
    let valid = true;
    const newErrors = {};
  
    // Validate the current tab's fields
    if (activeTab === 'Personal-Information') {
      if (!formData.borrower1.firstName) {
        newErrors.firstName = 'First name is required';
        valid = false;
      }
      if (!formData.borrower1.lastName) {
        newErrors.lastName = 'Last name is required';
        valid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      }
      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
        valid = false;
      }
      
    }
    if (activeTab === 'Property-Details') {
      if (!formData.proptype) {
        newErrors.proptype = 'Property Type is required';
        valid = false;
      }
      if (!formData.salesprice) {
        newErrors.salesprice = 'Sales price is required';
        valid = false;
      }
      // if (!formData.propertyaddress.zip) {
      //   newErrors.zip = 'zip  is required';
      //   valid = false;
      // }
    }
  
    if (activeTab === 'LoanPreferences'){
      if (!formData.loanprogram) {
        newErrors.loanprogram = 'Loan Program is required';
        valid = false;
      }
      if (!formData.term) {
        newErrors.term = 'Term is required';
        valid = false;
      }
      if (!formData.trantype) {
        newErrors.trantype = 'Transaction Type is required';
        valid = false;
      }
    }
    setErrors(newErrors);
  
    // If all validations pass, move to the next tab
    if (valid) {
      const nextTab = getNextTab(activeTab);
      setActiveTab(nextTab);
    }
  };
  const getNextTab = (currentTab) => {
    switch (currentTab) {
      case 'Personal-Information':
        return 'Property-Details';
      case 'Property-Details':
        return 'LoanPreferences';
      case 'LoanPreferences':
        return 'AdditionalDetails';
      case 'AdditionalDetails':
        return ''; 
      default:
        return 'Personal-Information';
    }
  };

  
  const handlePrevious = () => {
    const currentIndex = tabSequence.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabSequence[currentIndex - 1]);
    }
  };

  

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        borrower2: {
          ...prevData.borrower2,
          additionalFirstName: '',
          additionalLastName: '',
        },
      }));

    } else if (name === 'borrowers') {
      setFormData((prevData) => ({
        ...prevData,
        borrowers: sanitizedValue,
        borrower2: sanitizedValue === 'yes' ? {
          additionalFirstName: '',
          additionalLastName: '',
        } : prevData.borrower2,
      }));
    } else if (name === 'firstName' || name === 'lastName') {
      setFormData((prevData) => ({
        ...prevData,
        borrower1: {
          ...prevData.borrower1,
          [name]: sanitizedValue,
        },
      }));
    } else if (name === 'additionalFirstName' || name === 'additionalLastName') {
      setFormData((prevData) => ({
        ...prevData,
        borrower2: {
          ...prevData.borrower2,
          [name]: sanitizedValue,
        },
      }));
    } else if (name === 'address' || name === 'city') {
      setFormData((prevData) => ({
        ...prevData,
        propertyaddress: {
          ...prevData.propertyaddress,
          [name]: sanitizedValue,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: sanitizedValue,
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

  

    try {
      const requestData = {
        trantype: formData.trantype,
        occupancytype: formData.occupancytype,
        proptype: formData.proptype,
        borrowers: parseInt(formData.borrowers)=== "Yes" ? 1 : 0,
        borrower1: `${formData.borrower1.firstName}, ${formData.borrower1.lastName}`,
        borrower2: `${formData.borrower2.additionalFirstName}, ${formData.borrower2.additionalLastName}`,
        salesprice: parseInt(formData.salesprice),
        downpercent: parseInt(formData.downpercent),
        propertyaddress: `${formData.propertyaddress.address} ${formData.propertyaddress.city} ${formData.propertyaddress.zip}`,
        state: formData.state,
        doctype: formData.doctype,
        loanprogram: formData.loanprogram,
        term:parseInt(formData.term),
        email: formData.email,
        mobile: formData.mobile,
        homephone: formData.homephone,
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setpreapproval`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {...requestData,
                    userid:userId,}),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      const responseData = await response.json();
      console.log('Form data submitted successfully:', responseData);
      setSubmitted(true);
      setFormData({
        trantype: '',
        occupancytype: '',
        proptype: '',
        borrowers: '',
        borrower1: {
          firstName: '',
          lastName: '',
        },
        borrower2: {
          additionalFirstName: '',
          additionalLastName: '',
        },
        salesprice: '',
        downpercent: '',
        propertyaddress: {
          address: '',
          city: '',
          zip: '',
        },
        state: '',
        doctype: '',
        loanprogram: '',
        term: '',
        email: '',
        mobile: '',
        homephone: '',
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

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

const handleOptionSelect = (event) => {
  // debugger
  console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
  console.log("options",options)
  const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
  setSelectedOption(selected);
  console.log("selected",selected);
  setFormData((prevData) => ({
      ...prevData,
      city: selected?.city
  }));
  setFormData((prevData) => ({
      ...prevData,
      state: selected?.state
  }));
  // setLoUserData(selected.city);
  // setState(selected.state)  
}

  return (
    <>
    <Head>
  <title>Apply Now</title>
  <meta name="description" content="Get pre-approved for a mortgage to streamline your homebuying process. Learn about the pre-approval steps, required documents, and how to strengthen your offer in the competitive housing market." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

      <div className='container-fluid'>
        {submitted ? (
          <div className='col-md-12 col-sm-12 p-5 conven-page mt-5 pt-5'>
            <h3 className='mt-5 pt-5'>Thank You for Your Application!</h3>
            <Link href='/' legacyBehavior>
              <button className='btn btn-danger d-flex justify-content-center'>Home</button>
            </Link>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <div className='main-back'>
              <div className="col-sm-12 col-md-12 mx-3 conven-page">
                  <Link href="/" style={{textDecorationLine:"none"}}>
                  <span className="home" >
  Home
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
  </svg>
</span>

                  </Link>
                <span className="home text-danger">Apply Now</span>
              </div>
                <div className='mx-2 background-preApproval p-2'>
                  <div className='col-md-12 col-sm-12'>
                    <div className='main-heading'>
                      <h3>Get Approved</h3>
                      <p className='loan-property-info mx-1'>Begin your journey to homeownership with a quick pre-approval tailored just for you. 
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="nav nav-pills">
                      <div className="nav-item">
                        <div>
                          <button
                              className={`preapproval-but1 ${activeTab === 'Personal-Information' ? 'active' : ''} text-center`}
                              // data-bs-toggle="pill"
                              href="#Personal-Information"
                              // onClick={() => handleTabClick('Personal-Information')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 330 80" fill="none">
                              <path
                                d="M0 0H306.894L330 40L306.894 80H0L20.8333 40L0 0Z"
                                fill={activeTab === 'Personal-Information' ? '#AB1331' : '#F1F1F1'}
                              />
                              <text x="35%" y="25%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'Personal-Information' ? '#FFFFFF' : '#000'} fontSize="18" fontFamily="Nunito Sans" fontWeight="600">
                                1.Personal Information
                              </text>
                              <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'Personal-Information' ? '#FFFFFF' : '#5A5A5A'} fontSize="12" fontFamily="Nunito Sans">
                                <tspan x="52%" dy="0">Provide your contact details to help us get in touch </tspan>
                                <tspan x="23%" dy="1.2em">with you easily.</tspan>
                              </text>
                            </svg>
                          </button>
                          <button
                              className={`preapproval-but2 ${activeTab === 'Property-Details' ? 'active' : ''} text-center`}
                              // data-bs-toggle="pill"
                              href="#Property-Details"
                              // onClick={() => handleTabClick('Property-Details')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 330 80" fill="none">
                              <path d="M0 0H306.894L330 40L306.894 80H0L20.8333 40L0 0Z" fill={activeTab === 'Property-Details' ? '#AB1331' : '#F1F1F1'} />
                               <text x="35%" y="25%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'Property-Details' ? '#FFFFFF' : '#000'} fontSize="18" fontFamily="Nunito Sans" fontWeight="600">
                                  2.Property Details
                                </text>
                                <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'Property-Details' ? '#FFFFFF' : '#5A5A5A'} fontSize="12" fontFamily="Nunito Sans">
                                  <tspan x="46%" dy="0">Fill in the details about the property you are</tspan>
                                  <tspan x="21%" dy="1.2em">interested in.</tspan>
                                </text>
                            </svg>
                          </button>
                          <button
                              className={`preapproval-but2 ${activeTab === 'LoanPreferences' ? 'active' : ''} text-center`}
                              // data-bs-toggle="pill"
                              href="#LoanPreferences"
                              // onClick={() => handleTabClick('LoanPreferences')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 330 80" fill="none">
                              <path d="M0 0H306.894L330 40L306.894 80H0L20.8333 40L0 0Z" fill={activeTab === 'LoanPreferences' ? '#AB1331' : '#F1F1F1'} />
                                <text x="35%" y="25%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'LoanPreferences' ? '#FFFFFF' : '#000'} fontSize="18" fontFamily="Nunito Sans" fontWeight="600">
                                  3.Loan Preferences
                                </text>
                                <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'LoanPreferences' ? '#FFFFFF' : '#5A5A5A'} fontSize="12" fontFamily="Nunito Sans">
                                <tspan x="46%" dy="0">Select your preferred loan options and terms.</tspan>
                                  </text>
                            </svg>
                          </button>
                          <button
                              className={`preapproval-but2 ${activeTab === 'AdditionalDetails' ? 'active' : ''} text-center`}
                              // data-bs-toggle="pill"
                              href="#AdditionalDetails"
                              // onClick={() => handleTabClick('AdditionalDetails')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 330 80" fill="none">
                              <path d="M0 0H306.894L330 40L306.894 80H0L20.8333 40L0 0Z" fill={activeTab === 'AdditionalDetails' ? '#AB1331' : '#F1F1F1'} />
                              <text x="35%" y="25%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'AdditionalDetails' ? '#FFFFFF' : '#000'} fontSize="18" fontFamily="Nunito Sans" fontWeight="600">
                                4.Additional Details
                              </text>
                              <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={activeTab === 'AdditionalDetails' ? '#FFFFFF' : '#5A5A5A'} fontSize="12" fontFamily="Nunito Sans">
                                <tspan x="48%" dy="0">Please provide any additional information that</tspan>
                                <tspan x="40%" dy="1.2em">may be relevant to your application.</tspan>
                              </text>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
        <div className="col-sm-12 col-md-12"> 
          <div className="tab-content">
            <div id="Personal-Information" className={`tab-pane ${activeTab === 'Personal-Information' ? 'show active' : ''}`}>
              <div className='row'> 
                <div className='col-md-4 col-sm-6'>
                  <Form.Group className="form-group" controlId="firstName">
                    <Form.Label className='form-label first-name'>First Name</Form.Label>
                    <input
                      className='rectangle1'
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.borrower1.firstName}
                      onChange={handleChange}
                    />
                     {errors.firstName && <div className="error-message ">{errors.firstName}</div>}
                  </Form.Group>
                </div>
                <div className='col-md-4 col-sm-6'>
                  <Form.Group className="form-group" controlId="lastName">
                    <Form.Label className='form-label first-name'>Last Name</Form.Label>
                    <input
                      className='rectangle1'
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.borrower1.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                  </Form.Group>
                </div>
                <div className='col-md-4 col-sm-6'>
                  <Form.Group className="form-group" controlId="email">
                    <Form.Label className='form-label first-name'>Email address</Form.Label>
                    <input
                      className='rectangle1'
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </Form.Group>
                </div>
                <div className='col-md-4 col-sm-6'>
  <Form.Group className="form-group" controlId="mobile">
    <Form.Label className='form-label first-name'>Mobile</Form.Label>
    <input
      className='rectangle1'
      placeholder="Enter your mobile number"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      onKeyDown={(e) => {
        // Allow only numeric values, backspace, delete, arrow keys, and tab
        if (
          !(
            (e.key >= '0' && e.key <= '9') || 
            e.key === 'Backspace' || 
            e.key === 'Delete' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Tab'
          )
        ) {
          e.preventDefault();
        }
      }}
    />
    {errors.mobile && <div className="error-message">{errors.mobile}</div>}
  </Form.Group>
</div>

                <div className='col-md-4 col-sm-6'>
  <Form.Group className="form-group" controlId="homephone">
    <Form.Label className='form-label first-name'>Home Phone</Form.Label>
    <input
      className='rectangle1'
      placeholder="Enter your home phone"
      name="homephone"
      value={formData.homephone}
      onChange={handleChange}
      onKeyDown={(e) => {
        // Allow only numeric values, backspace, delete, arrow keys, and tab
        if (
          !(
            (e.key >= '0' && e.key <= '9') || 
            e.key === 'Backspace' || 
            e.key === 'Delete' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Tab'
          )
        ) {
          e.preventDefault();
        }
      }}
    />
  </Form.Group>
</div>

                <div className='col-md-12 col-sm-12 mt-4 d-flex justify-content-end'>
                  <Link href="/"><button className='prebutton1'>Close</button></Link>
                  <button className='prebutton1 mx-5' type="button" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            </div>
                <div id="Property-Details" className={`tab-pane fade ${activeTab === 'Property-Details' ? 'show active' : ''}`}>
                  <div className='row'>
                <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="proptype">
                  <Form.Label className='form-label first-name'>Property Type</Form.Label>
                  <select
                    className='rectangle1'
                    style={{border:"none"}}
                    name="proptype"
                    value={formData.proptype}
                    onChange={handleChange}
                  >
                    <option value="">Select Property Type</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Condo">Condo </option>
                    <option value="Town House">Town House </option>
                    <option value="Multi-Family">Multi-Family </option>
                    <option value="Carriage Home">Carriage Home</option>
                   
                  </select>
                  {errors.proptype && <div className="error-message">{errors.proptype}</div>}
                </Form.Group>
              </div>

              <div className='col-md-4 col-sm-6'>
  <Form.Group className="form-group" controlId="salesprice">
    <Form.Label className='form-label first-name'>Purchase Price</Form.Label>
    <input
      className='rectangle1'
      placeholder="Enter Purchase price"
      name="salesprice"
      value={formData.salesprice}
      onChange={handleChange}
      onKeyDown={(e) => {
        // Allow only numeric values, backspace, delete, arrow keys, and tab
        if (
          !(
            (e.key >= '0' && e.key <= '9') || 
            e.key === 'Backspace' || 
            e.key === 'Delete' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Tab'
          )
        ) {
          e.preventDefault();
        }
      }}
    />
    {errors.salesprice && <div className="error-message">{errors.salesprice}</div>}
  </Form.Group>
</div>


<div className='col-md-4 col-sm-6'>
  <Form.Group className="form-group" controlId="downpercent">
    <Form.Label className='form-label first-name'>Down Payment Percent</Form.Label>
    <input
      className='rectangle1'
      placeholder="Enter down payment percent"
      name="downpercent"
      value={formData.downpercent}
      onChange={handleChange}
      onKeyDown={(e) => {
        // Allow only numeric values, the percentage sign, backspace, delete, arrow keys, and tab
        if (
          !(
            (e.key >= '0' && e.key <= '9') || 
            e.key === 'Backspace' || 
            e.key === 'Delete' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Tab' ||
            e.key === '%' // Allow percentage symbol
          )
        ) {
          e.preventDefault();
        }
      }}
    />
  </Form.Group>
</div>


              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="address">
                  <Form.Label className='form-label first-name'>Address</Form.Label>
                  <input
                    className='rectangle1'
                    placeholder="Enter property address"
                    name="address"
                    value={formData.propertyaddress.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="city">
                  <Form.Label className='form-label first-name'>City</Form.Label>
                  <input
                    className='rectangle1'
                    placeholder="Enter city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

             <div className='col-md-4 col-sm-6'>
  <Form.Group className="form-group" controlId="zip">
    <Form.Label className='form-label first-name'>Zip</Form.Label>
    <input
      className='rectangle1'
      placeholder="Enter zip"
      name="zip"
      value={formData.zipcode}
      onChange={handleZipInputChange}
    />
    {errors.zipcode && <div className="error-message">{errors.zipcode}</div>}
  </Form.Group>
</div>
{ options.length>0 && formData.zipcode!==null && zip.length!==0 && 
                   <div className="col-sm-12  col-md-12 col-lg-12 mt-3">
                    <span className="profile-name">State and City</span>
                   <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-text"  >
                        <option value="">{`Select city and state...`}</option>
                        {options.map((option,index) => (
                            <option key={index} value={`${option.city},${option.state}`}>
                                {option.city} {option.state}
                            </option>
                        ))}
                    </select>
                    </div>
                }


              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="state">
                  <Form.Label className='form-label first-name'>State</Form.Label>
                  <input
                    className='rectangle1'
                    placeholder="Enter state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className='col-md-12 col-sm-12 mt-4 d-flex justify-content-end'>
              <button className='prebutton1 mx-2' onClick={handlePrevious}>
                      Back
                    </button>
                <button className='prebutton1' type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
              </div>
              </div>
                  <div id="LoanPreferences"  className={`tab-pane fade ${activeTab === 'LoanPreferences' ? 'show active' : ''}`}>
                  <div className='row'>
                  <div className='col-md-4 col-sm-6'>
                    <Form.Group className="form-group" controlId="loanprogram">
                      <Form.Label className='form-label first-name'>Loan Program</Form.Label>
                      <select
                        className='rectangle1'
                        style={{color:"#474a54",border:"none", borderBottom: "2px solid #767676 " }}
                        name="loanprogram"
                        value={formData.loanprogram}
                        onChange={handleChange}
                      >
                        <option value=""><p className='preselect'>Select Loan Program</p></option>
                        <option value="Fixed">Fixed</option>
                        <option value="ARM">ARM</option>
                      
                      </select>
                      {errors.loanprogram && <div className="error-message">{errors.loanprogram}</div>}
                    </Form.Group>
                   </div>
                   
              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="term">
                  <Form.Label className='form-label first-name'>Term</Form.Label>
                  <select
                    className='rectangle1'
                    style={{color:"#474a54",border:"none", borderBottom: "2px solid #767676 " }}
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                  >
                    <option value="">Select Term</option>
                    <option value="30conv">30 Fixed</option>
                    <option value="20conv">20 Fixed</option>
                    <option value="15conv">15 fixed</option>
                    <option value="5ARM"> 5/6 ARM</option>
                    <option value="7ARM">7/6 ARM </option>
                    <option value="10ARM">10/6 ARM </option>
                  </select>
                  {errors.term && <div className="error-message">{errors.term}</div>}
                </Form.Group>
              </div>
                   <div className='col-md-4 col-sm-6 ' >
                <Form.Group className="form-group" controlId="trantype">
                  <Form.Label className='form-label first-name'>Tran Type</Form.Label>
                  <select
                    className='rectangle1'
                    style={{color:"#474a54",border:"none"}}
                    name="trantype"
                    value={formData.trantype}
                    onChange={handleChange}
                  >
                    <option value="">Select Tran Type</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Refinance Cash out">Refinance Cash out </option>
                     <option value="Heloc">Heloc</option>
                    <option value="Home Equity">Home Equity </option>
                  </select>
                  {errors.trantype && <div className="error-message">{errors.trantype}</div>}
                </Form.Group>
              </div>

              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group" controlId="occupancytype">
                  <Form.Label className='form-label first-name'>Occupancy Type</Form.Label>
                  <select
                    className='rectangle1'
                    style={{border:"none"}}
                    name="occupancytype"
                    value={formData.occupancytype}
                    onChange={handleChange}
                  >
                    <option value="">Select Occupancy Type</option>
                    <option value="Primary">Primary </option>
                    <option value="Investment">Investment</option>
                    <option value="Fixed">Fixed</option>
                  </select>
                </Form.Group>
              </div>
              <div className='col-md-12 col-sm-12 mt-4 d-flex justify-content-end'>
                <button className='prebutton1 mx-2' onClick={handlePrevious}>
                  Back
                </button>
                <button className='prebutton1' type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
                  </div>
                </div>
              </div>
            </div>
              <div id="AdditionalDetails" className={`tab-pane fade ${activeTab === 'AdditionalDetails' ? 'show active' : ''}`}>
              <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <Form.Group className="form-group" controlId="doctype">
                  <Form.Label className='form-label first-name'>Doc Type</Form.Label>
                  <select
                    className='rectangle1'
                    style={{color:"#474a54",border:"none", borderBottom: "2px solid #767676 " }}
                    name="doctype"
                    value={formData.doctype}
                    onChange={handleChange}
                  >
                    <option value="">Select Doc Type</option>
                    <option value="Full Doc">Full Doc</option>
                    <option value="Non-QM">Non-QM</option>
                    <option value="DSCR">DSCR</option>
                  </select>
                </Form.Group>
              </div>
              <div className='col-sm-12 col-md-4'>
              <Form.Group className="form-group" controlId="comment">
                  <Form.Label className='form-label first-name'>comment</Form.Label>
                  <input
                    className='rectangle1'
                    placeholder="Enter comment"
                    name="comment"
                  />
                </Form.Group>
              </div>
              <div className='col-md-4 col-sm-6'>
                <Form.Group className="form-group">
                  <Form.Label as="legend" className="first-name">
                    Multiple Borrowers
                  </Form.Label>
                  <div className="d-flex align-items-center px-4">
                    <Form.Check 
                      type="switch"
                      id="borrowers-toggle"
                      className="first-name"
                      label=""
                      name="borrowers"
                      checked={formData.borrowers === 'yes'}
                      onChange={(e) => {
                        const value = e.target.checked ? 'yes' : 'no';
                        handleChange({ target: { name: 'borrowers', value } });
                        handleChangeYes({ target: { name: 'borrowers', value } });
                      }}
                    />
                    <span className="ml-2">{formData.borrowers === 'yes' ? 'Yes' : 'No'}</span>
                  </div>
                </Form.Group>
              </div>
              {showTextField && (
                <>
                  <div className='col-md-4 col-sm-6'>
                    <Form.Group className='form-group' controlId="additionalFirstName">
                      <Form.Label className='form-label first-name'>Additional First Name</Form.Label>
                      <input
                        className='rectangle1'
                        placeholder="Enter additional first name"
                        name="additionalFirstName"
                        value={formData.borrower2.additionalFirstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>

                  <div className='col-md-4 col-sm-6'>
                    <Form.Group className='form-group' controlId="additionalLastName">
                      <Form.Label className='form-label first-name'>Additional Last Name</Form.Label>
                      <input
                        className='rectangle1'
                        placeholder="Enter additional last name"
                        name="additionalLastName"
                        value={formData.borrower2.additionalLastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </>
              )}
              <div className='col-md-12 col-sm-12 mt-4 d-flex justify-content-end'>
                    <button className='prebutton1 mx-2' onClick={handlePrevious}>
                      Back
                    </button>
                    <button className='prebutton1' type="submit">
                      Submit
                    </button>
                  </div>
              </div>
              </div>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};

export default PreApprovalPage;
