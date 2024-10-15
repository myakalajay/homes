import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'; 
import { setZip } from "@/redux/zipcodeSlice";

 const Affordability = () => {
    
    const [homeInsurance, setHomeInsurance] = useState(0);
    const [propertytax, setPropertytax] = useState(0);
    const [hoaFees, setHoaFees] = useState(0);
    const [income, setIncome] = useState(100000);
    const [debt,setDebt]=useState(10);
    const [downPayment, setDownPayment] = useState(20000);
    const [loanYears, setLoanYears] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [dti, setDti] = useState(30);
    const [affordableHomeValue, setAffordablehomevalue] = useState(null);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
    const [pmi,setPmi]=useState(0);
    const [monthlypayment,setMonthlypayment]=useState(null);
    const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0); 
    const[propertyTax,setPropertyTax]= useState(100);
    // const[propertytax,setPropertytax]= useState(100);
    const[home,setHome]=useState(100);
    const [loanamount, setLoanamount] = useState(null);
    const zipcode = useSelector(state => state.zipcode.zipcode|| '');
    
    useEffect(() => {
        fetchData();
      }, [zipcode]);

    useEffect(() => {
        fetchData();
    }, [income,debt, downPayment, loanYears, interestRate,dti, downPaymentPercentage,propertyTax, home, pmi]);

    const fetchData = async () => {
        const incomeValue = parseFloat(income);
        const debtValue = parseFloat(debt);
        const downPaymentValue = parseFloat(downPayment);
        const loanYearsValue = parseInt(loanYears);
        const interestRateValue = parseFloat(interestRate);
        const dtiValue = parseFloat(dti);
        const homeValue=parseFloat(home);
        const propertyTaxValue=parseFloat(propertyTax);
        const pmiValue=parseFloat(pmi);
        
                if (isNaN(incomeValue) || isNaN(debtValue) || isNaN(downPaymentValue) || isNaN(loanYearsValue) || isNaN(interestRateValue) || isNaN(dtiValue) || isNaN(homeValue) || isNaN(propertyTaxValue) || isNaN(pmiValue) ) {
            setAffordablehomevalue(null) ,setLoanamount(null), setMonthlypayment(null);
            return;
        }

        const requestData = {
            income: incomeValue,
            debt:debtValue,
            downpayment: downPaymentValue,
            term: loanYearsValue,
            rate: interestRateValue,
            dti:dtiValue,
            taxes:propertyTaxValue,
            insurance:homeValue,
            zipcode:zipcode,
        };

        
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getaffordableamount`, {
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

            const monthlypayment = parseFloat(responseData[0]?.monthlypayment.replace(/,/g, ''));
            setMonthlypayment(monthlypayment);
            if (typeof setMonthly === 'function') {
            }

            const loanamount = parseFloat(responseData[0]?.loanamount);
            setLoanamount(loanamount);
            if (typeof setLoan === 'function') {
            }
            const propertytax = parseFloat(responseData[0]?.taxes);
            setPropertytax(propertytax);
            if (typeof setLoan === 'function') {
            }
            const affordablehomeprice = parseFloat(responseData[0]?.affordablehomeprice.replace(/,/g, ''));
            setAffordablehomevalue(affordablehomeprice);
            if (typeof setAffordable === 'function') {
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const dtiSlider = document.getElementById('dtiSlider');
        
        if (dtiSlider) {
          if (dti <= 36) {
            dtiSlider.style.setProperty('--thumb-color', 'green');
          } else if (dti >= 37 && dti <= 49) {
            dtiSlider.style.setProperty('--thumb-color', 'orange');
          } else if (dti >= 50 && dti <= 60) {
            dtiSlider.style.setProperty('--thumb-color', 'red');
          }
        }
      }, [dti]);
  

    const handleDownPaymentChange = (value) => {
        setDownPayment(value);
        const percentage = (parseFloat(value) / parseFloat(income)) * 100;
        setDownPaymentPercentage(percentage.toFixed(2));
            
    };

    
    const loanPercentage = loanamount && affordableHomeValue ? (loanamount / affordableHomeValue) * 100 : 0;
    const downPaytPercentage = downPayment && affordableHomeValue ? (downPayment / affordableHomeValue) * 100 : 0;

    const handleHomeInsuranceChange = (e) => {
        setHomeInsurance(e.target.value);
    };
  
    const handlePropertyTaxChange = (e) => {
        setPropertytax(e.target.value);
    };
  
    const handleHoaFeesChange = (e) => {
        setHoaFees(e.target.value);
    };

      useEffect(() => {
        const calculateTotalMonthlyPayment = () => {
            const totalPayment = parseFloat(homeInsurance) + parseFloat(propertytax) + parseFloat(hoaFees) + parseFloat(monthlypayment);
            setTotalMonthlyPayment(totalPayment || 0); 
        };

        calculateTotalMonthlyPayment();
    }, [homeInsurance, propertytax, hoaFees, monthlypayment]);


    return (
        <>
        <div className="container">
            <div className="row pb-5">
                <div className="col-sm-12 col-md-6 col-lg-6 outer calculator_left mt-3">
                    <div className=''>
                    {/* <h4>Your ZIP Code: {zipcode || "Not provided"}</h4> */}
                        <div className="d-flex" >
                            <div className="col-sm-12 col-md-6 mt-3">
                                <Form.Label className="home">
                                    <span>Annual Income</span>
                                </Form.Label>
                                <div>
                                    <input
                                        className='calculator-text3'
                                        value={income}
                                        onChange={(e) => setIncome(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 mt-3 mx-3" >
                                <Form.Label className="home">
                                    Debt
                                </Form.Label>
                                <div>
                                    <input
                                        type="text"
                                        className="calculator-text3"
                                        value={debt}
                                        onChange={(e) => setDebt(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <Form.Range
                            min={0}
                            max={3000000}
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            className="custom-slider mt-3" 
                        />
                    </div>
            <div className=''>
            <div className='d-flex'>
                <div className="col-sm-12 col-md-6">
                    <Form.Label className="home">
                        Debit-to-Income(DTI)
                    </Form.Label>
                    <input
                       className={`calculator-text3`}
                        value={dti}
                        onChange={(e) => setDti(e.target.value)}
                    />
                </div>
                <div className="col-sm-12 col-md-6 mx-3">
                    <Form.Label className="home">
                        Down Payment
                    </Form.Label>
                    <input
                        className="calculator-text3"
                        value={downPayment}
                        onChange={(e) => handleDownPaymentChange(e.target.value)}
                    />
                </div>
            </div>
            <div className="d-flex">
            <div className="col-sm-12 col-md-6">
            <Form.Range
                    min={0}
                    max={60}
                    value={dti}
                    onChange={(e) => setDti(e.target.value)}
                    className={`custom-slid mt-3`}
                    id="dtiSlider"
                    />
                    </div>
                    <div className="col-sm-12 col-md-6">
            <Form.Range
                    min={0}
                    max={3000000}
                    value={downPayment}
                    onChange={(e) => handleDownPaymentChange(e.target.value)}
                    className="custom-slid mt-3 mx-3" />
            </div>
            </div>
            </div>
            <div className="d-flex">
                <div className='col-sm-12 col-md-6'>
                    <Form.Label className="home">
                        Loan years
                    </Form.Label>
                    <select
                    className="calculator-text3"
                        value={loanYears}
                        onChange={(e) => setLoanYears(e.target.value)}
                    >
                        <option><p>5</p></option>
                        <option>7</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                </div>
                <div className='col-sm-12 col-md-6 mx-3'>
                    <Form.Label className="home">
                        Interest Rate
                    </Form.Label>
                    <input
                    className="calculator-text3"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
            </div>
            </div>
            <div className="d-flex">
            <div className='col-sm-12 col-md-6'>
                <div className='mt-2'>
                    <Form.Label className="home">
                    property Taxes
                    </Form.Label>
                    <input
                    className="calculator-text3"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(e.target.value)}
                    />
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mt-2'>
                <div className='mx-2'>
                    <Form.Label className="home">
                     HomeOwners Insurance
                    </Form.Label>
                    <input
                    className="calculator-text3"
                        value={home}
                        onChange={(e) => setHome(e.target.value)}
                    />
                </div>
            </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
            <div className="AffordableHomeValuebutton ">
                <p className="AffordableHome pt-3">Affordable Home Value</p>
                </div>
                <div className="back">
             <div className='form-group'>
                {/* <div className="AffordableHomeValuebutton ">
                <p className="AffordableHome pt-3">Affordable Home Value</p>
                </div> */}
                <div style={{width: '220px'}}className="mt-3" >
                <CircularProgressbar
                            value={loanPercentage}
                            strokeWidth={15}
                            styles={buildStyles({
                                pathColor: '#AB1331',  // Red for loan amount
                                trailColor: '#FF7A00',  // Green for down payment
                                textColor: '#333',
                                textSize: '10px',
                                strokeLinecap: 'butt', 

                            })}
                            text={
                                affordableHomeValue !== null ? (
                                    <>
                                        <tspan x="50%" dy="-10">Home Value</tspan>
                                        <tspan x="50%" dy="20">${affordableHomeValue.toLocaleString()}</tspan>
                                    </>
                                ) : 'N/A'
                            }
                        />
            </div>
            </div>
                        <div className="mt-1">
                            <div className="d-flex justify-content-between">
                                <Form.Label className='principal-interest1 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AB1331" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                                </svg><span className="">Loan Amount</span></Form.Label>
                                <input type="text" className="calculator-text1" value={loanamount !== null ? loanamount : 0}/>
                            </div> 
                            <div className="d-flex justify-content-between">   
                            <Form.Label className=' principal-interest1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7A00" className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                          </svg><span className="">Down Payment</span></Form.Label>
                                <input type="text" className="calculator-text1" value={downPayment}/>
                            </div>
                            <div className="d-flex  justify-content-between">
                                <Form.Label className='principal-interest1 mx-1' style={{fontSize:'18px',fontWeight:'600'}}>Monthly Payment</Form.Label>
                                <input type="text" className="calculator-text1 " value={monthlypayment !== null ? monthlypayment : 0}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
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
                            <div className='col-sm-12 col-md-6 pt-5'>
                                <div className='home py-2'>
                                    <span><strong>Monthly payment BreakDown</strong></span>
                                </div>
                                <p className='monthly-price m-3'>${totalMonthlyPayment !== null ? `${totalMonthlyPayment.toFixed(2)}` : 'N/A'}</p>
                                <div className="progress" style={{height:'58px',width:'468px'}}>
                                    <div className="progress-bar" role="progressbar" style={{width:`${(monthlypayment / totalMonthlyPayment) * 100}%`,background:'rgba(142, 193, 99, 1)'}} aria-valuenow={(homeInsurance / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar" role="progressbar" style={{width:`${(homeInsurance / totalMonthlyPayment) * 100}%`,background:'rgba(52, 70, 94, 1)'}} aria-valuenow={(monthlypayment / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"> </div>
                                    <div className="progress-bar" role="progressbar" style={{width:`${(propertytax / totalMonthlyPayment) * 100}%`,background:'rgba(101, 173, 253, 1)'}} aria-valuenow={(propertytax / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar" role="progressbar" style={{width:`${(hoaFees / totalMonthlyPayment) * 100}%`,background:'rgba(190, 3, 0, 1)'}} aria-valuenow={(hoaFees / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
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
                                        className='calculator-text1'
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
                                            className='calculator-text1'
                                            aria-describedby="Property Tax"
                                            value={propertytax}
                                            // readOnly
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
                                            className='calculator-text1'
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
                                            <h3 className='text-amount text text-center'>{monthlypayment !== null ? `$${monthlypayment}` : 'N/A'}</h3>
                                        </div>
                                    </div>
                                    <div className='form-group p-2'>
                                        <div className='d-flex justify-content-between'>
                                            <Form.Label className='principal-interest'><strong>Total Payment</strong></Form.Label>
                                            <h4 className="text-danger text-amount text text-center">${totalMonthlyPayment !== null ? totalMonthlyPayment : 0}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        *Please note: this calculator is for illustration payments and actual payments may vary.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Affordability;
