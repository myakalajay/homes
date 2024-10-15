"use client"

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import PriceRangeSlider from './PriceRangeSlider'; 
import PieChartGraph from '@/page/pieChartGraph';
import Amortization from './Amortization';
import Affordability from './Affordability';
import HomeBanner from '@/components/HomeBanner';
import Newfooter from "@/components/NewFooter";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'; 
import { setZip } from "@/redux/zipcodeSlice";
import Head from 'next/head';


const CalculatorSection = () => {
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [propertyTax, setPropertyTax] = useState(0);
  const [ZipPlace , setZipPlace]=useState();
  const [hoaFees, setHoaFees] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0); 
  const [chartData, setChartData] = useState([]);
  const [showAmortizationData, setShowAmortizationData] = useState(false);
  const [showPieChart, setShowPieChart] = useState(true);
  const [activeButton, setActiveButton] = useState('loan');
  const [activeBut, setActiveBut] = useState('break'); 
  const [showAffordability, setShowAffordability] = useState(false); 
  const [showData,setShowData]=useState([]);
  const [zipcodetype,setZipcodeType] = useState("")
  const zipcode = useSelector(state => state.zipcode.zipcode); 
  const dispatch = useDispatch()

  
  useEffect(() => {
      // Set ZipPlace to global storage zipcode initially
      setZipcodeType(zipcode);
    }, [zipcode]);


  useEffect(()=>{
    window.scroll(0,0)
  },[])

  useEffect(() => {
      const calculateTotalMonthlyPayment = () => {
          const totalPayment = parseFloat(homeInsurance) + parseFloat(propertyTax) + parseFloat(hoaFees) + parseFloat(monthly);
          setTotalMonthlyPayment(totalPayment || 0); 
      };

      calculateTotalMonthlyPayment();
  }, [homeInsurance, propertyTax, hoaFees, monthly]);

  const handleChartData = (data) => {
      setChartData(data);
  };

  const handleAmortizationData = (data) => {
    setShowData(data)
      setShowAmortizationData(true);
  };

  const handleHomeInsuranceChange = (e) => {
      setHomeInsurance(e.target.value);
  };

  const handlePropertyTaxChange = (e) => {
      setPropertyTax(e.target.value);
  };

  const handleHoaFeesChange = (e) => {
      setHoaFees(e.target.value);
  };
  
  const handleAmortizationButtonClick = () => {
    setActiveBut('amortiz');
    setShowAmortizationData(true);
    setShowPieChart(false);
};

const handleBreakupButtonClick = () => {
  setActiveBut('break'); 
  setShowPieChart(true);
  setShowAmortizationData(false);
};

const handleKeyDown = (e) => {
if (!/[\d.]/.test(e.key) && e.key !== "Delete" && e.key !== "Backspace") {
    e.preventDefault();
}
};

const handleZip = (e)=>{
  setZipcodeType(e.target.value)
  // dispatch(setZip({zipCode:zipcode}))
}

const handleSaveZipCode = () =>{
  dispatch(setZip(zipcodetype))
}

  return (
      <>
      <Head>
            <title>Mortgage Calculator</title>
            <meta name="description" content="Calculate your monthly mortgage payments with Homeratesyard's easy-to-use tool. Tailored for U.S. citizens and Foreign Nationals, explore personalized residential mortgage solutions." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      {/* <HomeBanner/> */}
      <div className="container-fluid monthly-back">
          <div className="conven-page">
            <div className="col-sm-12 col-md-12 mx-5">
              <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                  </svg></span>
              </Link>
              {/* <span className="home">Calculators<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </span> */}
              <span className="home text-danger">Mortgage calculator</span>
            </div>
          </div>
          <div>
                      <div className="row p-4 align-items-center " style={{ backgroundImage: "url(./assets/images/home-page/calculator-header.jpg)",height:"90%",width:'100%', backgroundSize:'cover'}}>
                        <div className="col-sm-12 col-md-4" style={{marginTop:'10px',marginBottom:'10px'}}>
                        <span className="calculator-headertext">Mortgage Calculator</span>
                        </div>
                        <div className="col-sm-12 col-md-8 d-flex" style={{marginTop:'10px'}}>
                          <div style={{display:""}}>
                            <Form.Label className="ziptext mx-2">
                              Enter Zipcode
                            </Form.Label>
                              <input
                                style={{height:'29px'}}
                                className="calculator-text1 mx-2"
                                value={zipcodetype}
                                //   onKeyDown={handleKeyDown}
                                onChange={handleZip}  // Handle zip code changes locally
                                maxLength={5}
                              />
                                <button className='zipgo' onClick={handleSaveZipCode} disabled={!zipcodetype}>
                                    Go
                                </button>
                          </div>
                          <div className="mx-2 ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-geo-alt" viewBox="0 0 16 16" className="">
                                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                              </svg>
                              <span className="ziptext mx-2">{ZipPlace ? ZipPlace : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
    <div className='container'>
    <div className='row'>
          <div className='col-sm-12 col-md-12 text-center mt-2'>
              <div className='d-flex'>
              <button
                className={activeButton === 'loan' ? 'button1 active' : 'button1'}
                onClick={() => {
                  setActiveButton('loan');
                  setShowAffordability(false);
                }}
                >
               Mortgage Calculator
                </button>

                <button
                className={activeButton === 'affordability' ? 'button2 active' : 'button2'}
                onClick={() => {
                  setActiveButton('affordability');
                  setShowAffordability(true);
                }}
                >
                Affordability Calculator
                </button>

              </div>
          </div>
          <div className='mt-4 col-sm-12 col-md-12'>
            <div className='use-our-mortage'>
          Use our mortgage calculator with taxes built directly into it! <br/>Get accurate estimates for your monthly mortgage payments and how much in taxes you will pay each year.
          </div>
          </div>
          {showAffordability ? (
          <div id="affordability-calc" >
                 <Affordability />
            </div>
            ) : (
            <>      
              <div className='col-md-6 col-sm-12'>
                  <div className='mt-4'>
                  <PriceRangeSlider setMonthPay={setMonthly} setPlace={setZipPlace} setPropertyTax={setPropertyTax} handleChartData={handleChartData}  handleAmortizationData={handleAmortizationData}/>
                  </div>
              </div>

                  <div className='col-md-6 col-sm-12' style={{margin:"0 auto"}}>
                          <div className='item-center mt-4'>
                            <div className='d-flex'>                             
                             <button className={activeBut === 'break' ? 'breakup active' : 'breakup'} onClick={handleBreakupButtonClick}>Breakup of Total Payment</button>
                            <button className= {activeBut === 'amortiz' ? 'amortization active' : 'amortization'} onClick={handleAmortizationButtonClick}>Amortization Schedule</button>
                          </div>
                          </div>
                      {showPieChart ? (
                        <>
                         <div className="d-flex">
                         <div className="col-sm-12 col-md-3 mt-5" style={{width:'200px'}}>
                           <PieChartGraph chartData={chartData} />
                         </div>
                       <div className='col-sm-12 col-md-9 mt-5 mx-1'>
                       <div className='form-group p-2'>
                       <div className='d-flex justify-content-between'>
                       <Form.Label className='principal-interest1'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(52, 70, 94, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8"/>
                        </svg>  Home owners insurance
                       </Form.Label>
                           <input
                            type="text"
                            id="home-owners-insurance"
                            className='calculator-text1'
                            aria-describedby="Home owners insurance"
                            value={homeInsurance}
                            onKeyDown={handleKeyDown}
                            onChange={handleHomeInsuranceChange}
                              />
                        </div>
                   </div>
                   <div className='form-group p-2'>
                        <div className='d-flex justify-content-between'>
                          <Form.Label className='principal-interest1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(101, 173, 253, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                          </svg> Property Tax
                          </Form.Label>
                          <input
                            type="text"
                            id="Property-Tax"
                            className='calculator-text1'
                            aria-describedby="Property Tax"
                            value={propertyTax}
                            onKeyDown={handleKeyDown}
                           onChange={handlePropertyTaxChange}
                        />
                    </div>
                  </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                  <Form.Label className='principal-interest1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(190, 3, 0, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                          </svg> HOA Fees
                  </Form.Label>
                  <input
                   type="text"
                   id="HOA-Fees"
                   className='calculator-text1'
                   aria-describedby="HOA Fees"
                   value={hoaFees}
                   onKeyDown={handleKeyDown}
                   onChange={handleHoaFeesChange}
                    />
                   </div>
                   </div>
                   <div className='form-group p-2'>
                    <div className='d-flex justify-content-between'>
                      <Form.Label className='principal-interest1 mt-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(142, 193, 99, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                          </svg> Monthly Payment
                      </Form.Label>
                         <h3 className='text-amount text  text-center'>{monthly !== null ? `$${monthly}` : 'N/A'}</h3>
                       </div>
                   </div>
                       </div>
                       </div>
                        <div className='col-sm-12 col-md-12 d-flex flex-content justify-content-center'>
                        <div>
                      {/* <div className='form-group'>
                          <div className='d-flex justify-content-between'>
                            <Form.Label className='principal-interest'><strong>Total Payment</strong></Form.Label>
                            <h4 className="text-danger text-amount text text-center">${totalMonthlyPayment.toFixed(2)}</h4>
                          </div>
                        </div> */}
                        <div className='home py-2'>
                          <span><strong>Monthly Payment BreakDown</strong></span>
                        </div>
                        <p className='monthly-price m-3'>${totalMonthlyPayment.toFixed(2)}</p>
                        <div className="progress" style={{height:'40px',width:'468px'}}>
                            <div className="progress-bar" role="progressbar" style={{width:`${(monthly / totalMonthlyPayment) * 100}%`,background:'rgba(142, 193, 99, 1)'}} aria-valuenow={(homeInsurance / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar" role="progressbar" style={{width:`${(homeInsurance / totalMonthlyPayment) * 100}%`,background:'rgba(52, 70, 94, 1)'}} aria-valuenow={(monthly / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"> </div>
                            <div className="progress-bar" role="progressbar" style={{width:`${(propertyTax / totalMonthlyPayment) * 100}%`,background:'rgba(101, 173, 253, 1)'}} aria-valuenow={(propertyTax / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar" role="progressbar" style={{width:`${(hoaFees / totalMonthlyPayment) * 100}%`,background:'rgba(190, 3, 0, 1)'}} aria-valuenow={(hoaFees / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <p className='mt-5 pt-5'>*Above values are illustration purpose only, Actual payment may vary on loan parameters </p>  */}
                      </div>
                      </div>
                      </>
                      ) : (
                        showAmortizationData && (
                          <div className="text-center mt-5 mb-5 ">
                           <Amortization
                            homePrice={showData.homePrice}
                            interestRate={showData.interestRate} 
                            loanYears={showData.loanYears}
                            downPayment={showData.downPayment}
                            pmi={showData.pmi}
                          />
                          </div>
                        )
                      )}
                    
        
           </div>
          <div className='col-md-12 col-sm-12 d-flex flex-row justify-content-center'>
          
           <p className=''>*Above values are illustration purpose only, Actual payment may vary on loan parameters </p>
           </div>
          </>
          )}
           </div>
           </div>
        </div>           
    </>
  )
};
export default CalculatorSection;
