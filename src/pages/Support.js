import React, { useState } from "react";
import DOMPurify from 'dompurify';
import Step from "@/page/Step";
import SuccessModal from "@/components/SuccessModal"; // Import the SuccessModal component
import Link from 'next/link'; 
import Signup from "@/pages/Signup";
import Head from 'next/head';
function Support() {
    const [modalShow, setModalShow] = useState(false);
    const [successModalShow, setSuccessModalShow] = useState(false); // State for showing the success modal
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState('');

    const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: sanitizeInput(value)
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleFocus = (e) => {
        setFocusedField(e.target.name);
    };

    const handleBlur = (e) => {
        setFocusedField('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Please enter your name";
        }

        if (!formData.email) {
            newErrors.email = "Please enter your email";
        }

        if (!formData.type) {
            newErrors.type = "Please select the type of query";
        }

        if (!formData.message) {
            newErrors.message = "Please enter your message";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; 
        }

        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/SetWebfeedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setSuccessModalShow(true); // Show the success modal upon successful form submission
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <>
           <Head>
  <title>Support</title>
  <meta name="description" content="Access our Support page for assistance with your mortgage inquiries. Find FAQs, contact information, and resources to help you navigate your home financing journey." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>
        <div className="conven-page">
             <div className="col-sm-12 col-md-12 mx-5">
                <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span></Link>
                <span className="home">Contact<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg></span>
        
       <span className="home text-danger">Support</span>
       </div>
       </div>
     <div className='conventional-loans' >
            <img src="./assets/images/home-page/Support2.jpg" alt="support"  className="img-fluid w-100"/>
       </div>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="support-container" style={{ display: 'flex', alignItems: 'stretch', padding: '100px' }}>
                    <div className="support-form" style={{ flex: 1, marginRight: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="px-3">
                            <div className="support1 px-3">How Can We Help?</div>
                            <span className="profile-name px-3">Name</span>
                            <div>
                                <input 
                                    type="text" 
                                    className={`Support-text ${focusedField === 'name' || formData.name ? 'filled' : ''}`}  
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="   Enter the Name" 
                                />
                            </div>
                            {errors.name && <div className="error-message" style={{ color: 'red', marginTop: '5px' }}>{errors.name}</div>}
                        </div>

                        <div className="mt-3 px-3">
                            <span className="profile-name px-3">Email</span>
                            <div>
                                <input 
                                    type="email" 
                                    className={`Support-text ${focusedField === 'email' || formData.email ? 'filled' : ''}`} 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="  Enter the Email" 
                                />
                            </div>
                            {errors.email && <div className="error-message" style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>}
                        </div>

                        <div className="mt-3 px-3">
                            <span className="profile-name px-3">Type of Query</span>
                            <div>
                                <select
                                    className={`Support-text ${focusedField === 'type' || formData.type ? 'filled' : ''}`}
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                >
                                    <option value="">  Select the query </option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Concern">Concern</option>
                                    <option value="Issue">Issue</option>
                                    <option value="Comments">Comments</option>
                                </select>
                            </div>
                            {errors.type && <div className="error-message" style={{ color: 'red', marginTop: '5px' }}>{errors.type}</div>}
                        </div>

                        <div className="mt-3 px-3">
                            <span className="profile-name px-3">Message</span>
                            <div>
                                <textarea 
                                    className="Support-text1" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4" 
                                    placeholder="  Enter the Message" 
                                ></textarea>
                            </div>
                            {errors.message && <div className="error-message" style={{ color: 'red', marginTop: '5px' }}>{errors.message}</div>}
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="lobutton mt-3" type="submit">Submit</button>
                        </div>
                    </div>

                    <div className="support-image" style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
                        <img 
                            src="./assets/images/home-page/support.jpg" 
                            alt="support" 
                            className='sign-image' 
                            style={{ 
                                width: '120%', 
                                height: '100%',
                                objectFit: 'cover' 
                            }}
                        />
                    </div>
                </div>
            </form>
        </div>

        {/* Success Modal */}
        <SuccessModal show={successModalShow} onHide={() => setSuccessModalShow(false)} />

        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 get1">
            <div className="m-4 mx-5">
        <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>

        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
          <div className="mt-5">
          <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
          <Link href="/MortgageLoan"><button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
        </div>
        <Step
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </div>
            </div>
        </div>
        </>
    );
}

export default Support;
