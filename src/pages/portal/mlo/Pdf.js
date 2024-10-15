import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router';

export default function Pdf() {

    const router = useRouter();
    const { data } = router.query;
    const [formData, setFormData] = useState(null);
    const [showTextField, setShowTextField] = useState(false);
    const [brokerNames, setBrokerNames] = useState([]);
    const [selectedBroker, setSelectedBroker] = useState(null);
    const [showMultipleBorrowers, setShowMultipleBorrowers] = useState(false);

console.log("pdf data",data)
    useEffect(() => {
        if (data) {
          const parsedData = JSON.parse(data);
          setFormData(parsedData);
        }
      }, [data]);
      console.log("formData",formData)
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

    const handleChangeYes = (event) => {
      if (event.target.value === 'yes') {
        setShowTextField(true);
      } else {
        setShowTextField(false);
      }
    };

    // const handleBrokerChange = (event) => {
    //     const brokerName = event.target.value;
    //     const selected = brokerNames.find(broker => broker.brokername === brokerName);
    //     setSelectedBroker(selected || null);
    // };

    const handleBrokerChange = (event) => {
        const brokerName = event.target.value;
        const selected = brokerNames.find(broker => broker.brokername === brokerName);
        setSelectedBroker(selected || null);
        setFormData((prevData) => ({
          ...prevData,
          brokerName: brokerName,
          address: selected?.address || '',  // Assuming broker data contains an address
          nmlsId: selected?.companynmls || '',
          websiteLink: selected?.website || ''
        }));
      };

    // const handleBorrowerTypeChange = (event) => {
    //     setShowMultipleBorrowers(event.target.value === 'multiple');
    //   };
    
    const handleBorrowerTypeChange = (event) => {
        const value = event.target.value;
        setShowMultipleBorrowers(event.target.value === 'yes');
        // setShowMultipleBorrowers(value === 'multiple');
        // setFormData((prevData) => ({
        //   ...prevData,
        //   borrowers: value,
        // }));
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const previewPDF =async  () => {
        const previewMessage = document.getElementById('previewMessage');
        previewMessage.contentEditable = false;  // Make the entire div non-editable initially
    
        previewMessage.innerHTML = `
          <p style="text-align: center">BORROWER Name: <span>${formData.brokerName || ''}</span></p>
          <p style="text-align: center">Address: <span contenteditable="true" style="border: none; outline: none;">${formData.address || ''}</span></p>
          <p style="text-align: center">NMLS ID: <span>${formData.nmlsId || ''}</span></p>
          <p style="text-align: center">Website: <span contenteditable="true" style="border: none; outline: none;">${formData.websiteLink || ''}</span></p>
          <p>Borrower 1: <span contenteditable="true" style="border: none; outline: none;">${formData.borrowerfullname1 || ''}</span></p>
          ${showMultipleBorrowers ? `<p>Borrower 2: <span contenteditable="true" style="border: none; outline: none;">${formData.borrowerfullname2 || ''}</span></p>` : ''}
          <p>Property Address: <span contenteditable="true" style="border: none; outline: none;">${formData.propertyaddress || ''}</span></p>
          <p>State: <span contenteditable="true" style="border: none; outline: none;">${formData.state || ''}</span></p>
          <p>Transaction Type: <span contenteditable="true" style="border: none; outline: none;">${formData.transactiontype || ''}</span></p>
          <p>Property Type: <span contenteditable="true" style="border: none; outline: none;">${formData.propertytype || ''}</span></p>
          <p>Occupancy: <span contenteditable="true" style="border: none; outline: none;">${formData.occupancytype || ''}</span></p>
          <p>Purchase Price: <span contenteditable="true" style="border: none; outline: none;">${formData.salespriceupto || ''}</span></p>
          <p>Loan Program: <span contenteditable="true" style="border: none; outline: none;">${formData.term || ''}</span></p>
          <p>Down Payment: <span contenteditable="true" style="border: none; outline: none;">${formData.downpaypercent || ''}</span></p>
          <p>Loan Amount: <span contenteditable="true" style="border: none; outline: none;">${formData.loanamountpercent || ''}</span></p>
          <p>LTV: <span contenteditable="true" style="border: none; outline: none;">${100 -formData.downpaypercent || ''}</span></p>
          <p>Doc Type: <span contenteditable="true" style="border: none; outline: none;">${formData.doctype || ''}</span></p>
          <p>Message: <span contenteditable="true" style="border: none; outline: none;">${formData.message || ''}</span></p>
          <p>Congratulations! You’ve taken the first step towards home ownership. Your request for the above specified loan has been prequalified based on gainful income (DTI< 43%) and great assets. Please NOTE that loan commitment will depend on ratified pending contract and compliance with following underwriting guidelines. A written commitment to make the loan has not yet been issued.</p>
         <h5>PRIOR TO CLOSING</h5>
         <ul>
            <li>SATISFIED FLOOD CERTIFICATION ORDER BY LENDER</li>
            <li>SATISFIED TITLE WORK</li>
            <li>LIABILITY INSURANCE FOR PUD REQUIRED</li>
            <li>APPRAISAL REPORT</li>
         </ul>
         <h5>AT THE CLOSING</h5>
         <ul>
            <li>HOMEOWNER’S INSURANCE BINDER</li>
            <li>TITLE BINDER SURVEY AND TAXES</li>
            <li>CERTIFICATION OF OCCUPANCY IF REQUIRED</li>
            <li>PUD CERTIFICATION IF REQUIRED </li>
         </ul>
         <p>your signature</p>
         <h5>Mortgage Loan Originator</h5>
         <p>NMLS Number:</p>
         <h5>${formData.brokerName || ''}</h5>
         <h5>Pre-approval is subject to review and final approval by underwriting. Additional conditions may be required. If the borrower's information or the requested terms change, this pre-qualification may be void. NMLS ID :${formData.nmlsId || ''}</h5>
         <h5>Before we issue preapproval and Final approval the following are needed.</h5> 
         <p>1. Fully executed Purchase Agreement.</p>
        <p>2. Satisfactory appraisal supporting property purchase amount.</p>
        <p>3. Home Owners Insurance to cover loan amount with 100% replacement coverage.</p>
        <p>4. Title Insurance including 12-month chain of title.</p>
        <p>5. Most recent income documentation to be verified.</p>
        <p>6. Documentation of acceptable funds to close.</p>
         `;
         const cleanMessage = previewMessage.innerHTML.replace(/<[^>]+>/g, ''); // Clean the HTML content to remove tags

        
       };
    
    const generatePDF = async () =>{
      const requestData = {
        brokerName: formData.brokerName || '',
        address: formData.address || '',
        nmlsId: formData.nmlsId || '',
        websiteLink: formData.websiteLink || '',
        borrowerfullname1: formData.borrowerfullname1 || '',
        borrowerfullname2: formData.borrowerfullname2 || '',
        propertyaddress: formData.propertyaddress || '',
        state: formData.state || '',
        transactiontype: formData.transactiontype || '',
        propertytype: formData.propertytype || '',
        occupancytype: formData.occupancytype || '',
        purchasePrice: formData.purchasePrice || '',
        loanProgram: formData.loanProgram || '',
        downPayment: formData.downPayment || '',
        loanAmount: formData.loanAmount || '',
        LTV: formData.LTV || '',
        doctype: formData.doctype || '',
       //  message: cleanMessage || ''
      };
    
      try {
        const response = await fetch('https://lendpdfapi.azurewebsites.net/getPreApprovalLetter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
          Accept: "application/pdf",
        });
    
        if (!response.ok) {
          throw new Error('Failed to save the PDF data');
        }
        const blob = await response.blob(); // Get the PDF as a blob
        const url = window.URL.createObjectURL(blob); // Create a URL for the blob
        window.open(url);
           
        
      } catch (error) {
        console.error('Error saving PDF data:', error);
        alert('Failed to save PDF data.');
      }
    }
    


      const sendTestMail = async () => {
        const previewMessage = document.getElementById('previewMessage').innerHTML;
    
        const cleanMessage = previewMessage.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<h5>/g, '').replace(/<\/h5>/g, '').replace(/<ul>/g, '').replace(/<\/ul>/g, '').replace(/<li>/g, '').replace(/<\/li>/g, '');


        const requestData = {
          previewMessage:cleanMessage,
        };
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/sendTestMail`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
    
          if (!response.ok) {
            throw new Error('Failed to send test mail');
          }
    
          alert('Test mail sent successfully!');
        } catch (error) {
          console.error('Error sending test mail:', error);
          alert('Failed to send test mail.');
        }
      };
    

      if (!formData) {
        return <div>Loading...</div>;
      }

    
    return (
    <div className="container conven-page mt-1">
      <div className='row'>
        <div className="col-sm-12 col-md-6 form-section p-3">
            <span className='head-background'>Broker Information</span>
            <div className="form-group">
                <label htmlFor="brokerName">Broker Name</label>
                <select id="brokerName" name="brokerName" className='pdf-textbox' onChange={handleBrokerChange}>
                    <option value="">Select Broker</option>
                    {brokerNames.map(broker => (
                        <option key={broker.brokerid} value={broker.brokername}>
                            {broker.brokername}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={selectedBroker ? selectedBroker.address : ''}
                    className='pdf-textbox'
                    readOnly // Assuming address is not present in broker data, adjust as needed
                />
            </div>
            <div className="form-group">
                <label htmlFor="nmlsId">NMLS ID</label>
                <input
                    type="text"
                    id="nmlsId"
                    name="nmlsId"
                    placeholder="NMLS ID"
                    value={selectedBroker ? selectedBroker.companynmls : ''}
                    className='pdf-textbox'
                    readOnly
                />
            </div>
            <div className="form-group">
                <label htmlFor="websiteLink">Website Link</label>
                <input
                    type="text"
                    id="websiteLink"
                    name="websiteLink"
                    placeholder="Website Link"
                    value={selectedBroker ? selectedBroker.website : ''}
                    className='pdf-textbox'
                    // readOnly
                />
            </div>
            <span className='head-background'>Borrower Information Section</span>
            {/* <div className="radio-group">
                <label><input type="radio" name="borrowerType" value="single" onclick="toggleBorrowerFields()" checked/> Single Borrower</label>
                <label><input type="radio" name="borrowerType" value="multiple" onclick="toggleBorrowerFields()"/> Multiple Borrowers</label>
            </div> */}
                 <div className='form-group'>
        <div className='d-flex'>
          <input
            type="radio"
            className='first-name'
            name="borrowers"
            value="no"
            checked={!showMultipleBorrowers} // Check if Single Borrower is selected
            onChange={handleBorrowerTypeChange}
          />
          <label>Single Borrower</label>
        </div>
      </div>
      <div className='form-group'>
        <div className='d-flex'>
          <input
            type="radio"
            className='first-name'
            name="borrowers"
            value="yes"
            checked={showMultipleBorrowers} // Check if Multiple Borrowers is selected
            onChange={handleBorrowerTypeChange}
          />
          <label>Multiple Borrowers</label>
        </div>
      </div>
        
            <div className="form-group">
                <label for="borrowerfullname1">Borrower First Name</label>
                <input 
                type="text" 
                id="borrowerfullname1" 
                name="borrowerfullname1"
                placeholder="First Name"
                value={formData?.borrowerfullname1 || ""}
                onChange={handleInputChange}
                className='pdf-textbox'
            />
            </div>
            <div className="form-group">
                <label for="borrowerfullname2">Borrower Last Name</label>
                <input 
                type="text" 
                id="borrowerfullname2" 
                name="borrowerfullname2" 
                placeholder="Last Name"
                value={formData?.borrowerfullname2 || ""}
                onChange={handleInputChange}
                className='pdf-textbox'
                />
            </div>
            
            {showMultipleBorrowers  && (
                <>
            {/* <div className="borrower-info"> */}
                {/* <h3>Additional Borrower Information</h3> */}
                <div className="form-group">
                    <label for="borrowerfullname1">Additional Borrower First Name</label>
                    <input 
                    type="text" 
                    id="borrowerfullname1" 
                    name="borrowerfullname1" 
                    placeholder="First Name"
                    value={formData?.borrowerfullname1 || ""}
                    onChange={handleInputChange}
                    className='pdf-textbox'
                    />
                </div>
                <div className="form-group">
                    <label for="borrowerfullname2">Additional Borrower Last Name</label>
                    <input 
                    type="text" 
                    id="borrowerfullname2" 
                    name="borrowerfullname2" 
                    placeholder="Last Name"
                    value={formData?.borrowerfullname2 || ''}
                    onChange={handleInputChange}
                    className='pdf-textbox'
                    />
                </div>
            {/* </div> */}
            </>
                )}
            <div className="form-group">
                <label for="propertyaddress">Property Address</label>
                <input 
                type="text" 
                id="propertyaddress" 
                name="propertyaddress" 
                placeholder="Property Address"
                value={formData?.propertyaddress || ''}
                onChange={handleInputChange}
                className='pdf-textbox'
                />
            </div>
            <div className="form-group">
                <label for="state">State</label>
                <select 
                id="state" 
                name="state"
                value={formData?.state || ''}
                onChange={handleInputChange}
                className='pdf-textbox'>
                  
                    <option value={formData?.state}>{formData?.state}</option>
                   {/*  <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>*/}
                </select> 
            </div>
            
            <span className='head-background'>Transaction Details Section</span>
            <div className="form-group">
                <label for="transactiontype">Transaction Type</label>
                <select 
                id="transactiontype" 
                name="transactiontype"
                value={formData?.transactiontype || ''}
                onChange={handleInputChange}
                className='pdf-textbox'>
                     <option value={formData?.transactiontype}>{formData?.transactiontype}</option>
                   {/* <option value="Purchase">Purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Equity">Equity</option>
                    <option value="Heloc">Heloc</option> */}
                </select>
            </div>
            
            <div className="form-group">
                <label for="propertytype">Property Type</label>
                <select 
                id="propertytype" 
                name="propertytype"
                value={formData?.propertytype || ''}
                onChange={handleInputChange}
                className='pdf-textbox'>
                    <option value={formData?.propertytype}>{formData?.propertytype}</option>
                    {/* <option value="Single">Single</option>
                    <option value="Family">Family</option>
                    <option value="Town Home">Town Home</option>
                    <option value="Cando">Cando</option> */}
                </select>
            </div>
            <div className="form-group">
                <label for="occupancytype">Occupancy</label>
                <select id="occupancytype" name="occupancytype"
                value={formData?.occupancytype || ''}
                onChange={handleInputChange}
                className='pdf-textbox'>
                    <option value={formData?.occupancytype}>{formData?.occupancytype}</option>
                    {/* <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Investment">Investment</option> */}
                </select>
            </div>
            <span className='head-background'>Loan Information Section</span>
            <div className="form-group">
                <label for="purchasePrice">Purchase Price Up to</label>
                <input 
                type="text" 
                id="purchasePrice" 
                name="purchasePrice" 
                placeholder="Purchase Price"
                value={formData?.salespriceupto || ''}
                className='pdf-textbox'
                />
            </div>
            <div className="form-group">
                <label for="term">Loan Program(Years)</label>
                <select id="term" name="term" 
                value={formData?.term || ''}
                onChange={handleInputChange}
                className='pdf-textbox'>
                    <option value={formData?.term}>{formData?.term}</option>
                    {/* <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option> */}
                </select>
            </div>
            <div className="form-group">
                <label for="downPayment">Down Payment(%)</label>
                <input 
                type="text" 
                id="downPayment" 
                name="downPayment" 
                placeholder="Down Amount"
                value={formData?.downpaypercent || ''}
                onChange={handleInputChange}
                className='pdf-textbox'
                />
            </div>
            <div className="form-group">
                <label for="loanAmount">Loan Amount</label>
                <input 
                type="text" 
                id="loanAmount" 
                name="loanAmount" 
                placeholder="Loan Amount"
                value={formData.loanamountpercent || ''}
                onChange={handleInputChange}
                className='pdf-textbox'
                />
            </div>
            <div className="form-group">
                <label for="LTV">LTV</label>
                <input 
                type="text" 
                id="LTV" 
                name="LTV" 
                placeholder="LTV"
                value={100 - formData?.downpaypercent}
                className='pdf-textbox'
                />
            </div>
            <div className="form-group">
                <label for="doctype">Doc Type</label>
                <select 
                id="doctype" 
                name="doctype"
                value={formData?.doctype || ''}
                onChange={handleInputChange} 
                className='pdf-textbox'
                >
                    <option value={formData?.doctype}>{formData?.doctype}</option>
                    {/* <option value="Full">Full</option> */}
                </select>
            </div>
            <span className='head-background'>Pre Qualification Notice Section</span>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea 
                id="message" 
                name="message" 
                placeholder="Message" 
                oninput="updatePreview()"
                value={formData.message || ''}
                onChange={handleInputChange}
                rows={3}></textarea>
            </div>
            <div className="pdf-button-container">
                <a href="#" className="send-button" onClick={previewPDF}>Preview PDF</a>
            </div>

        </div>
        <div className="col-sm-12 col-md-6 preview-section">
            <h2>Preview</h2>
            <div className="preview-box">
                <p style={{marginTop:"110px"}} id="previewMessage">MESSAGE </p>
            </div>
            <a href="#" className="send-button" onClick={generatePDF}>Generate PDF</a>
            <a href="#" className="send-button mx-3" onClick={sendTestMail}>Send Mail</a>
            <a href="#" className="send-button" onClick={generatePDF}>Send to Borrower</a>
        </div>
        </div>
    </div>
      )
}
