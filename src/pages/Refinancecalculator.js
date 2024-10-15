import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Table } from 'react-bootstrap';
import HomeBanner from "@/components/HomeBanner";
import Newfooter from "@/components/NewFooter";
import Link from "next/link";
import Step from "@/page/Step";
import { useSelector } from 'react-redux'; 
import { setZip } from "@/redux/zipcodeSlice";
import { useDispatch } from "react-redux";
import Signup from "@/pages/Signup";
import Head from "next/head";

const Refinancecalculator = () => {
    const [homeInsurance, setHomeInsurance] = useState(0);
    const [propertyTax, setPropertyTax] = useState(0);
    const [hoaFees, setHoaFees] = useState(0);
    const [monthly, setMonthly] = useState(0);
    const [existingloanterm, setExistingLoanTerm] = useState(30);
    const [refinanceloanterm, setRefinanceLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [refinanceloan, setRefinanceLoan] = useState(150000);
    const [refinanceinterest, setRefinanceInterest] = useState(5.5);
    const [loanamount, setLoanamount] = useState(200000);
    const[homevalue,setHomeValue]=useState();
    const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0); 
    const [totalmonth, setTotalMonth] = useState(null);
    const [monthlysaving, setMonthlySaving] = useState(null);
    const [monthlytotal, setMonthlyTotal] = useState(null);
    const [chartData, setChartData] = useState({});
    const [places,setPlaces] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [zipcodetype,setZipcodeType] = useState("")
    const zipcode = useSelector(state => state.zipcode.zipcode); 
    const dispatch = useDispatch()
    
    const handleHomeInsuranceChange = (e) => {
        setHomeInsurance(e.target.value);
    };
  
    const handleMonthly = (e) => {
        setMonthly(e.target.value);
    }
  
    const handlePropertyTaxChange = (e) => {
        setPropertyTax(e.target.value);
    };
  
    const handleHoaFeesChange = (e) => {
        setHoaFees(e.target.value);
    };


    useEffect(() => {
        const calculateTotalMonthlyPayment = () => {
            const totalPayment = parseFloat(homeInsurance) + parseFloat(propertyTax) + parseFloat(hoaFees) + parseFloat(totalmonth);
            setTotalMonthlyPayment(totalPayment || 0); 
        };

        calculateTotalMonthlyPayment();
    }, [homeInsurance, propertyTax, hoaFees, totalmonth]);

    useEffect(() => {
        // Set ZipPlace to global storage zipcode initially
        setZipcodeType(zipcode);
      }, [zipcode]);

    const handleZipChange = (e)=>{
        setZipcodeType(e.target.value)
        // dispatch(setZip({zipCode:zipcode}))
      }
      
      const handleSaveZipCode = () =>{
        dispatch(setZip(zipcodetype))
      }
  
    useEffect(() => {
        fetchData();
    }, [existingloanterm, refinanceloanterm, interestRate, refinanceloan, refinanceinterest, loanamount,zipcode]);

    const fetchData = async () => {
        const existingloantermValue = parseFloat(existingloanterm);
        const refinanceloantermValue = parseFloat(refinanceloanterm);
        const interestRateValue = parseFloat(interestRate);
        const refinanceloanValue = parseInt(refinanceloan);
        const refinanceinterestValue = parseFloat(refinanceinterest);
        const loanamountValue = parseFloat(loanamount);

        if (
            isNaN(existingloantermValue) ||
            isNaN(refinanceloantermValue) ||
            isNaN(interestRateValue) ||
            isNaN(refinanceloanValue) ||
            isNaN(interestRateValue) ||
            isNaN(refinanceinterestValue) ||
            isNaN(loanamountValue)
        ) {
            setMonthlyTotal(null);
            setTotalMonth(null);
            return;
        }

        const requestData = {
            zipcode:zipcode,
            currloan: loanamountValue,
            currrate: interestRateValue,
            currterm: existingloantermValue,
            newloan: refinanceloanValue,
            newrate: refinanceinterestValue,
            newterm: refinanceloantermValue,
            homevalue:homevalue
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getrefinance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setChartData(responseData);
            const currentmonthlypayment = parseFloat(responseData[0]?.currentmonthlypayment);
            setMonthlyTotal(currentmonthlypayment);
            const refinancemonthlypayment = parseFloat(responseData[0]?.refinancemonthlypayment);
            setTotalMonth(refinancemonthlypayment);
            const potentialsavings = parseFloat(responseData[0]?.potentialsavings);
            setMonthlySaving(potentialsavings);
            const taxes = parseFloat(responseData[0]?.taxes);
            setPropertyTax(taxes);
            const placename = responseData[0]?.placename;
            setPlaces(placename);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleKeyDown = (e) => {
       
        if (
            !/[\d.]/.test(e.key) &&
            e.key !== "Delete" &&
            e.key !== "Backspace" &&
            e.key !== "Tab"
        ) {
            e.preventDefault();
        }
    };

    return (
        <>
        <Head>
  <title>Refinance Calculator</title>
  <meta name="description" content="Estimate your potential savings and explore refinancing options with Homeratesyard's Refinance Calculator. Tailored mortgage solutions for U.S. citizens and Foreign Nationals." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>
            <div className="">
                <div className="conven-page">
                    <div className="mx-5">
                        <div className="col-sm-12 col-md-12">
                            <Link href="/" style={{ textDecorationLine: "none" }}>
                                <span className="home">
                                    Home
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0
                                                .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8
                                                4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </Link>
                            <span className="home">
                                Calculators
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0
                                            .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8
                                            4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </span>
                            <span className="home text-danger">Refinance calculator</span>
                        </div>
                    </div>
                    <div>
                      <div className="row p-4 align-items-center " style={{ backgroundImage: "url(./assets/images/home-page/calculator-header.jpg)",height:"90%",width:'100%', backgroundSize:'cover'}}>
                        <div className="col-sm-12 col-md-4" style={{marginTop:'10px',marginBottom:'10px'}}>
                        <span className="calculator-headertext">Refinance Calculator</span>
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
                                onChange={handleZipChange}  // Handle zip code changes locally
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
                              <span className="ziptext mx-2">{places ? places : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-sm-12 col-md-9 ">
                                <div className="">
                                    <span className="loan2">Refinance Calculator</span>
                                </div>
                                <p className="Refinance-text mt-3">
                                    Get accurate estimates for your monthly mortgage payments and how much in taxes you will pay each year.
                                </p>
                            </div> */}
                            {/* <div className="col-sm-6 col-md-12 mt-5">
                    <div style={{display:"flex"}}>
                        <Form.Label className="home1 mx-2">
                            Enter Zipcode
                        </Form.Label>
                        <input
                            className="calculator-text1"
                            value={zipcodetype}
                            // onKeyDown={handleKeyDown}
                            onChange={handleZipChange}
                            maxLength={5}
                        />
                          <button
                          className='zipgo'
                          onClick={handleSaveZipCode}
                          disabled={!zipcodetype} 
                        >
                          Go
                        </button>
                    </div>
                    <div className="d-flex mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#AB1331" class="bi bi-geo-alt" viewBox="0 0 16 16" className="mt-1">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <p className="mx-2">{places ? places : ''}</p>
                    </div>
                </div> */}
                            <div className="col-sm-12 col-md-6 outer calculator_left mt-3">
                            <div className="col-sm-12 col-md-12 mt-3 mx-2 d-flex justify-content-center">
                                           <div>
                                            <Form.Label className="home">
                                                <span>Home Value</span>
                                            </Form.Label>
                                            
                                                <input
                                                    className="calculator-text3"
                                                    value={homevalue}
                                                    placeholder="Enter Home Value"
                                                    style={{textAlign:'center',fontWeight:'700',fontSize:'18px',color:'black'}}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setHomeValue(e.target.value)}
                                                />
                                                 <Form.Range
                                        min={0}
                                        max={3000000}
                                        value={homevalue}
                                        onChange={(e) => setHomeValue(e.target.value)}
                                        className="custom-slider mt-3"
                                    />
                                            </div>
                                        </div>
                                <div className=''>
                                    <div className="d-flex">
                                        <div className="col-sm-12 col-md-6 mt-3 mx-2">
                                            <Form.Label className="home">
                                                <span>Outstanding Loan Amount</span>
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text3"
                                                    value={loanamount}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setLoanamount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-6 mt-3 mx-5'>
                                            <h1 className='home-pri'>Monthly payment</h1>
                                            <h6 className='monthly'>
                                                {monthlytotal !== null ? `$${monthlytotal.toFixed(2)}` : 'N/A'}
                                            </h6>
                                        </div>
                                    </div>
                                    <Form.Range
                                        min={0}
                                        max={3000000}
                                        value={loanamount}
                                        onChange={(e) => setLoanamount(e.target.value)}
                                        className="custom-slider mt-3"
                                    />
                                </div>
                                <div className='d-flex'>
                                    <div className='col-sm-12 col-md-6 '>
                                        <div className="mx-2">
                                            <Form.Label className="home">
                                                Original Interest Rate %
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text3"
                                                    value={interestRate}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setInterestRate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <div className=' mx-2'>
                                            <Form.Label className="home">
                                                Existing Loan Term
                                            </Form.Label>
                                            <select
                                                className="calculator-text3"
                                                value={existingloanterm}
                                                onChange={(e) => setExistingLoanTerm(e.target.value)}
                                            >
                                                <option>5</option>
                                                <option>7</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                                <option>25</option>
                                                <option>30</option>
                                                <option>40</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <Form.Range
                                        min={0}
                                        max={60}
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="custom-slid1 mx-2 "
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className='col-sm-12 col-md-6'>
                                        <div className='mt-2'>
                                            <Form.Label className="home">
                                                Refinance Loan Amount
                                            </Form.Label>
                                            <input
                                                className="calculator-text3"
                                                value={refinanceloan}
                                                onKeyDown={handleKeyDown}
                                                onChange={(e) => setRefinanceLoan(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-6 mx-5 mt-2'>
                                        <div className=''>
                                            <h1 className='home-pri'>Monthly payment</h1>
                                            <h6 className='monthly'>
                                                {totalmonth !== null ? `$${totalmonth.toFixed(2)}` : 'N/A'}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <Form.Range
                                        min={0}
                                        max={3000000}
                                        value={refinanceloan}
                                        onChange={(e) => setRefinanceLoan(e.target.value)}
                                        className="custom-slid mt-3 mx-1"
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className='col-sm-12 col-md-6'>
                                        <div className='mx-2'>
                                            <Form.Label className="home">
                                                Refinance Interest Rate %
                                            </Form.Label>
                                            <input
                                                className="calculator-text3"
                                                value={refinanceinterest}
                                                onKeyDown={handleKeyDown}
                                                onChange={(e) => setRefinanceInterest(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <div className=' mx-2'>
                                            <Form.Label className="home text-left">
                                                Refinance Loan Term
                                            </Form.Label>
                                            <select
                                                className="calculator-text3"
                                                value={refinanceloanterm}
                                                onChange={(e) => setRefinanceLoanTerm(e.target.value)}
                                            >
                                                <option>5</option>
                                                <option>7</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                                <option>25</option>
                                                <option>30</option>
                                                <option>40</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 mt-3">
                                <div className="back">
                                    <div className='form-group'>
                                        <div className="Refinancebutton">
                                            <p className="AffordableHome mt-3"> Existing Monthly Breakup</p>
                                        </div>
                                        <div style={{ width: '200px', margin: '0 auto' }} className="mt-2 d-flex flex-row justify-content-center">
                                            <CircularProgressbar
                                                value={loanamount}
                                                strokeWidth={15}
                                                styles={{
                                                    path: { stroke: '#AB1331' },
                                                    trail: { stroke: '#eee' },
                                                    text: { fontSize: '8px', fill: '#333' },
                                                }}
                                                text={
                                                    monthlytotal !== null ? (
                                                        <>
                                                            <tspan x="50%" dy="-10">Monthly Payment</tspan>
                                                            <tspan x="50%" dy="20">${monthlytotal.toLocaleString()}</tspan>
                                                        </>
                                                    ) : 'N/A'
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className="Refinancebutton ">
                                            <p className="AffordableHome mt-3">New Monthly Breakup</p>
                                        </div>
                                        <div style={{ width: '200px', margin: '0 auto' }} className="mt-2 d-flex flex-row justify-content-center">
                                            <CircularProgressbar
                                                value={loanamount}
                                                strokeWidth={15}
                                                styles={{
                                                    path: { stroke: '#AB1331' },
                                                    trail: { stroke: '#eee' },
                                                    text: { fontSize: '8px', fill: '#333' },
                                                }}
                                                text={
                                                    totalmonth !== null ? (
                                                        <>
                                                            <tspan x="50%" dy="-10">Monthly Payment</tspan>
                                                            <tspan x="50%" dy="20">${totalmonth.toLocaleString()}</tspan>
                                                        </>
                                                    ) : 'N/A'
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div  className="">
                                    <div className="col-sm-12 col-md-10 pt-5 mx-3">
                                        <div className="d-flex justify-content-between">
                                        <p className='text-start text-amount1 mx-5 mt-2'>Refinance Amount</p>
                                        {/* <input type="text" className='calculator-text1 px-2' value={refinanceloan} readOnly /> */}
                                        <p className='calculator-box1 mx-5 px-2'>{refinanceloan}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        <p className='text-amount1 mx-5'>Monthly Payment</p>
                                        {/* <input type="text" className='calculator-text1 px-2' value={totalmonth !== null ? totalmonth : 0} readOnly /> */}
                                        <p className='calculator-box1 mx-5 px-2'>{totalmonth !== null ? totalmonth : 0}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        <p className='text-amount1 mx-5' style={{fontSize:'18px',fontWeight:'600'}}>Monthly Savings</p>
                                        <p className='calculator-box1 mx-5 px-2'>{monthlysaving !== null ? monthlysaving : 0}</p>
                                        </div>
                                    </div>
                                    {/* <div className="mx-5 pt-5">
                                         <input type="text" className='calculator-text1 px-2' value={refinanceloan} readOnly /> 
                                        <input type="text" className='calculator-text1 px-2' value={totalmonth !== null ? totalmonth : 0} readOnly />
                                        <input type="text" className='calculator-text1 px-2' value={monthlysaving !== null ? monthlysaving : 0} readOnly />
                                    
                                    </div> */}
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center">
                            <a className="refinance-dropdowm-button mt-2" style={{height:'100%',width:'300px',textDecoration:"none"}} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span style={{fontSize:'20px',textDecoration:"none"}}>Advanced View</span><br/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffffff" className="bi bi-chevron-down mt-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </a>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className=" card-body back">
                            <div className='col-sm-12 col-md-6'>
                <div className='home'>
                <span><strong style={{fontSize:'28px'}}>Monthly Payment Breakdown</strong></span>
                </div>
                <p className='monthly-price m-3'>${totalMonthlyPayment !== null ? `${totalMonthlyPayment.toFixed(2)}` : 'N/A'}</p>
                <div className="progress" style={{height:'58px',width:'468px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:`${(totalmonth / totalMonthlyPayment) * 100}%`,background:'rgba(142, 193, 99, 1)'}} aria-valuenow={(homeInsurance / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(homeInsurance / totalMonthlyPayment) * 100}%`,background:'rgba(52, 70, 94, 1)'}} aria-valuenow={(totalmonth / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"> </div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(propertyTax / totalMonthlyPayment) * 100}%`,background:'rgba(101, 173, 253, 1)'}} aria-valuenow={(propertyTax / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(hoaFees / totalMonthlyPayment) * 100}%`,background:'rgba(190, 3, 0, 1)'}} aria-valuenow={(hoaFees / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {/* <p className='mt-5 pt-5'>*Above values are illustration purpose only, Actual payment may vary on loan parameters </p>  */}
              </div>
              <div className='col-sm-12 col-md-6 pt-5'>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(52, 70, 94, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg>  Home owners insurance
                    </Form.Label>
                    <input
                      type="text"
                      className='calculator-text4'
                      id="home-owners-insurance"
                      aria-describedby="Home owners insurance"
                      value={homeInsurance}
                      onChange={handleHomeInsuranceChange}
                    />
                  </div>
                </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(101, 173, 253, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg> Property Tax
                    </Form.Label>
                      <input
                        type="text"
                        id="Property-Tax"
                        className='calculator-text4'
                        aria-describedby="Property Tax"
                        value={propertyTax}
                        readOnly
                        // value={`${propertyTax.toFixed(2)}`}
                        onChange={handlePropertyTaxChange}
                      />
                  </div>
                </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(190, 3, 0, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg>  HOA Fees
                    </Form.Label>
                    <input
                      type="text"
                      id="HOA-Fees"
                      className='calculator-text4'
                      aria-describedby="HOA Fees"
                      value={hoaFees}
                      onChange={handleHoaFeesChange}
                    />
                  </div>
                </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest mt-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(142, 193, 99, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg> Monthly Payment
                    </Form.Label>
                    <h3 className='text-amount text-left mx-1'>{totalmonth !== null ? `$${totalmonth}` : 'N/A'}</h3>
                 
                      {/* <h3 className='text-amount text text-right'>{totalmonth !== null ? `$${totalmonth}` : 'N/A'}</h3> */}
                  </div>
                </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest mt-1'><strong>Total Payment</strong></Form.Label>
                    <h4 className="text-danger text-amount text-left mx-1">${totalMonthlyPayment !== null ? totalMonthlyPayment : 0}</h4>
                  </div>
                </div>
              </div>
              </div>
              </div>
                            
                            <div className="text-center mt-5 pb-2">
                                *Please note: this calculator is for illustration payments and actual payments may vary.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7 get1">
                            <div className="m-4 mx-5">
                                <p className="offers1">Prequalify now with the Homeratesyard<br />Digital Mortgage Experience</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
                            <div style={{ marginTop: "30px" }}>
                                <button className="Home-buyer-button mx-2" onClick={() => setModalShow(true)}>Get Started</button>
                                <button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button>
                            </div>
                            <Step
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Refinancecalculator;
