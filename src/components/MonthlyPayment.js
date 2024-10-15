"use client"
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import EMITable from '@/page/EMITable';
import React ,{ useState, useEffect } from 'react';
import {Modal, Form } from 'react-bootstrap';

function MonthlyPayment() {
  const [isTableShown, setIsTableShown] = useState(false);
  const [value, setValue] = useState(''); // get data from text box entry
  const [tableData, setTableData] = useState('');  //used to store api response data
  const [loading, setLoading] = useState(false);  
  const [Modalshow,setModalShow]=useState();
const[error,setError]=useState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const handleSubmit = event => {
    event.preventDefault();
    setIsTableShown(current => !current);
    setValue('')
  };

  const onCancel = (event) => {
    event.preventDefault();
    setIsTableShown(false);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsTableShown(false);
  };

  console.log('isTableShown', isTableShown)
  console.log('value', value)


  function fetchApiData() {
    console.log('button clicked', value);
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "loan": value
      })
    };
    const response = fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getmonthpayment`, requestOptions);
    response.then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((data) => {
        console.log(data);
        setTableData(data);
        setModalShow(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }


  return (<>
    <section className="know-your-monthly-payment-sec">
      <div className="container-fluid">
        <div className="know-your-monthly-payment-form text-center">
          <form onSubmit={handleSubmit} className='w-100'>
          <h2 className=" text-white heading-title mb-3">
  Mortgage Payment Unveiled
</h2>
{/* <p className="text-white heading-subtitle">
  Input your loan amount to uncover a swift estimate of your monthly payments.
</p> */}


            <div className='d-flex item-center align-items-stretch'>
              <Form.Control
                type="text"
                size="xl"
                id="loan-amount"
                aria-describedby="Enter Loan Amount and Submit"
                placeholder='Enter Your Desired Loan Amount '
                autoComplete='off'
                value={value}
                onChange={handleChange}
              />
              <button type="submit" disabled={!value} onClick={fetchApiData} className='submit3 mx-2'>Get Your Estimate</button>
            </div>
            </form>
            <p className='text-center text-white mt-2'>*Estimates are illustrative on available rates and subject to change based on loan parameters. </p>
        </div>
        <Modal 
      show={Modalshow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton closeVariant="white" style={{background:"#AB1331",color:"#ffffff",height:"55px"}}>  
        <Modal.Title>Monthly Payment</Modal.Title>
      </Modal.Header >
      <Modal.Body>
        {isTableShown && (
            <div className='monthly-payment-table' style={{margin:'0 auto'}}>
              {/* <Button onClick={onCancel} type="button" className='btn btn-default'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </Button> */}
              <h5 className="mb-3">Below Rates are on Assumed loan Parameters and Available rates</h5>
              <EMITable jsonData={tableData} />
            </div>
          )}
          </Modal.Body>
          </Modal>
      </div>
    </section>
  </>);
}

export default MonthlyPayment;