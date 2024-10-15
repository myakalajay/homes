import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux'; 

export default function Affordabilityprice({ setMonthlyPayment, setLoanAmount, setAffordableHomeValue, downPayment, setDownPayment ,setPlaces,setPropertytax}) {
    const [income, setIncome] = useState(100000);
    const [debt, setDebt] = useState(10);
    const [loanYears, setLoanYears] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [dti, setDti] = useState(30);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
    const [pmi, setPmi] = useState(0);
    const [propertyTax, setPropertyTax] = useState(100);
    const [home, setHome] = useState(100);
    // const [PlacesName,setPlaceName] = useState();
    const zipcode = useSelector(state => state.zipcode.zipcode);

    useEffect(() => {
      fetchData();
    }, [zipcode]);

    useEffect(() => {
        fetchData();
    }, [income, debt, downPayment, loanYears, interestRate, dti, downPaymentPercentage, propertyTax, home, pmi]);

    const fetchData = async () => {
        const incomeValue = parseFloat(income);
        const debtValue = parseFloat(debt);
        const downPaymentValue = parseFloat(downPayment);
        const loanYearsValue = parseInt(loanYears);
        const interestRateValue = parseFloat(interestRate);
        const dtiValue = parseFloat(dti);
        const homeValue = parseFloat(home);
        const propertyTaxValue = parseFloat(propertyTax);
        const pmiValue = parseFloat(pmi);

        if (isNaN(incomeValue) || isNaN(debtValue) || isNaN(downPaymentValue) || isNaN(loanYearsValue) || isNaN(interestRateValue) || isNaN(dtiValue) || isNaN(homeValue) || isNaN(propertyTaxValue) || isNaN(pmiValue)) {
            return;
        }

        const requestData = {
            zipcode:zipcode,
            income: incomeValue,
            debt: debtValue,
            downpayment: downPaymentValue,
            term: loanYearsValue,
            rate: interestRateValue,
            dti: dtiValue,
            taxes: propertyTaxValue,
            insurance: homeValue,
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
            const monthlyPayment = parseFloat(responseData[0]?.monthlypayment.replace(/,/g, ''));
            const loanAmount = parseFloat(responseData[0]?.loanamount);
            const propertytax = parseFloat(responseData[0]?.taxes);
            const affordableHomeValue = parseFloat(responseData[0]?.affordablehomeprice.replace(/,/g, ''));
            const PlaceName = responseData[0]?.placename;
            setPlaces(PlaceName);
            setPropertytax(propertytax)
            setMonthlyPayment(monthlyPayment);
            setLoanAmount(loanAmount);
            setAffordableHomeValue(affordableHomeValue);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        const dtiSlider = document.getElementById('dtiSlider');
        
        if (dtiSlider) {
          if (dti <= 36) {
            dtiSlider.style.setProperty('--thumb-color', 'green');
        //   } else if (dti >=  && dti <= 25) {
        //     dtiSlider.style.setProperty('--thumb-color', 'yellow');
          } else if (dti >= 36 && dti <= 49) {
            dtiSlider.style.setProperty('--thumb-color', 'orange');
          } else if (dti >= 49 && dti <= 60) {
            dtiSlider.style.setProperty('--thumb-color', 'red');
          }
        }
      }, [dti]);
      
    const handleDownPaymentChange = (value) => {
        setDownPayment(value);
        const percentage = (parseFloat(value) / parseFloat(income)) * 100;
        setDownPaymentPercentage(percentage.toFixed(2));
    };

    return (
        <>
            <div className='row'>
                <div className="col-sm-12 col-md-6 mt-3">
                    <div className=" mx-2">
                        <Form.Label className="home">
                            <span>Annual House Hold Income</span>
                        </Form.Label>
                        <div>
                            <input
                                className='calculator-text3'
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mt-3">
                    <div className=" mx-2" >
                        <Form.Label className="home">
                            Monthly EMI Amount
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
                <div className="col-sm-12 col-md-12">
                    <Form.Range
                        min={0}
                        max={3000000}
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        style={{width:"96%"}}
                        className="custom-slider mt-2 mx-3"
                        // id='dtiSlider'
                        />
                </div>    
                <div className="col-sm-12 col-md-6 mt-1">
                    <div className=" mx-2">
                        <Form.Label className="home">
                            Debt-to-Income(DTI)
                        </Form.Label>
                        <input
                            className={`calculator-text3`}
                            value={dti}
                            onChange={(e) => setDti(e.target.value)}
                        />                           
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 mt-1'>
                    <div className=" mx-2">
                        <Form.Label className="home">
                            Down Payment
                        </Form.Label>
                        <input
                            // style={{marginBottom:"px"}}
                            className="calculator-text3"
                            value={downPayment}
                            onChange={(e) => handleDownPaymentChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <Form.Range
                        min={0}
                        max={60}
                        value={dti}
                        onChange={(e) => setDti(e.target.value)}
                        style={{width:"93%"}}
                        className={`custom-slid mt-1 mx-2`}
                     id="dtiSlider"
                    />
                </div>
                <div className='col-sm-12 col-md-6'>
                        <Form.Range
                        min={0}
                        max={3000000}
                        value={downPayment}
                        onChange={(e) => handleDownPaymentChange(e.target.value)}
                        style={{width:"93%"}}
                        className="custom-slid mt-1 mx-2" />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className=''>
                        <div className='mx-2'>
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
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className=''>
                        <div className='mx-2'>
                            <Form.Label className="home">
                                Interest Rate (%)
                            </Form.Label>
                            <input
                            className="calculator-text3"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                <div className=''>
                    <div className='mx-2'>
                        <Form.Label className="home">
                        Property Taxes
                        </Form.Label>
                        <input
                        className="calculator-text3"
                            value={propertyTax}
                            onChange={(e) => setPropertyTax(e.target.value)}
                        />
                    </div>
                </div>
                </div>
                <div className='col-sm-12 col-md-6 mt-2'>
                    <div className=''>
                        <div className='mx-2'>
                            <Form.Label className="home">
                                    Home Insurance
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
        </>
    );
}
