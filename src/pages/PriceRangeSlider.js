import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux'; 


const PriceRangeSlider = ({ setMonthPay, handleChartData, handleAmortizationData,setPropertyTax,setPlace }) => {
    const [homePrice, setHomePrice] = useState(100000);
    const [downPayment, setDownPayment] = useState(20000);
    const [loanYears, setLoanYears] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanamount, setLoanamount] = useState('');
    const [totalmonthPayment, setTotalMonthPayment] = useState(null);
    const [totaltaxes,SetTotalTaxes] = useState(null);
    const [places,setPlaces] = useState(null);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
    const [monthlypmi, setMonthlyPmi] = useState(null);
    const [pmi, setPmi] = useState(0);
    const zipcode = useSelector(state => state.zipcode.zipcode);

    useEffect(() => {
      fetchData();
    }, [zipcode]);
  

    const data = {
        homePrice,
        interestRate,
        loanYears,
        downPayment,
        pmi,
    };

    useEffect(() => {
        fetchData();
    }, [homePrice, downPayment, loanYears, interestRate, pmi]);

    const fetchData = async () => {
        const homePriceValue = parseFloat(homePrice);
        const downPaymentValue = parseFloat(downPayment);
        const loanYearsValue = parseInt(loanYears);
        const interestRateValue = parseFloat(interestRate);
        const pmiValue = parseFloat(pmi);

        handleAmortizationData(data);
        if (isNaN(homePriceValue) || isNaN(pmi) || isNaN(downPaymentValue) || isNaN(loanYearsValue) || isNaN(interestRateValue)) {
            setTotalMonthPayment(null), setMonthlyPmi(null);
            return;
        }

        const requestData = {
            Loan: homePriceValue,
            Down: downPaymentValue,
            Term: loanYearsValue,
            Rate: interestRateValue,
            Pmi: pmiValue,
            zipcode:zipcode,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getmonthlypayment`, {
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
            handleChartData(responseData); 

            const monthlypmi = parseFloat(responseData[0]?.monthlypmi.replace(/,/g, ''));
            setMonthlyPmi(monthlypmi);

            const loanamount = parseFloat(responseData[0]?.loanamount.replace(/,/g, ''));
            setLoanamount(loanamount);
            
            // const taxes = parseFloat(responseData[0]?.taxes.replace(/,/g, ''));
            // setPropertyTax(taxes);

            const monthPayment = parseFloat(responseData[0]?.monthpayment);
            setTotalMonthPayment(monthPayment);
            if (typeof setMonthPay === 'function') {
                setMonthPay(monthPayment);
            }

            const taxes = parseFloat(responseData[0]?.taxes);
            SetTotalTaxes(taxes);
            if (typeof setPropertyTax === 'function') {
                setPropertyTax(taxes);
            }

            const placeName = responseData[0]?.placename;
            setPlaces(placeName);
            if (typeof setPlace === 'function') setPlace(placeName);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleHomePriceChange = (value) => {
        setHomePrice(value);
        const percentage = parseFloat(downPaymentPercentage) / 100;
        const calculatedDownPayment = parseFloat(value) * percentage;
        setDownPayment(calculatedDownPayment.toFixed(2));
    };

    const handleDownPaymentChange = (value) => {
        setDownPayment(value);
        const percentage = (parseFloat(value) / parseFloat(homePrice)) * 100;
        setDownPaymentPercentage(percentage.toFixed(2));
    };

    const handleDownPaymentPercentageChange = (percentage) => {
        const downPaymentAmount = (parseFloat(homePrice) * parseFloat(percentage)) / 100;
        setDownPayment(downPaymentAmount);
        setDownPaymentPercentage(percentage);
    };

    const handleKeyDown = (e) => {
        // Allow only numeric keys, decimal points, Backspace, Delete, and Tab
        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Delete' && e.key !== '.') {
            e.preventDefault();
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <div>
                        <Form.Label className="home">
                            <span>Home Price</span>
                        </Form.Label>
                        <div>
                            <input
                                type="text"
                                className='calculator-text3'
                                value={homePrice}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => handleHomePriceChange(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <div className='mt-2 m-3'>
                        <h1 className='home-pri'>Monthly Payment</h1>
                        <h6 className='monthly'>{totalmonthPayment !== null ? `$${totalmonthPayment.toFixed(2)}` : 'N/A'}</h6>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <Form.Range
                        min={0}
                        max={3000000}
                        value={homePrice}
                        onChange={(e) => handleHomePriceChange(e.target.value)}
                        style={{ width: "100%" }}
                        className="custom-slider"
                    />
                </div>
                <div className="col-sm-6 col-md-6">
                    <div>
                        <Form.Label className="home">
                            <span>Down Payment</span>
                        </Form.Label>
                        <div className="d-flex align-items-center">
                            <div
                                className="combined-input"
                                style={{
                                    display: 'flex',
                                    width: "100%",
                                    height: "40px",
                                    margin: "0 0px 10px 0px",
                                    border: "none",
                                    borderRadius: "4px",
                                    background: "#F1F1F1",
                                    color: "#666",
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <input
                                    type="text"
                                    value={downPayment}
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => handleDownPaymentChange(e.target.value)}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: "#F1F1F1",
                                        color: "#666",
                                        width: '80%',
                                        textAlign: 'left',
                                    }}
                                />
                                <span style={{
                                    height: '24px',
                                    width: '1px',
                                    backgroundColor: '#ccc',
                                    margin: '0 10px',
                                }}></span>
                                <input
                                    type="text"
                                    value={downPaymentPercentage}
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => handleDownPaymentPercentageChange(e.target.value)}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: "#F1F1F1",
                                        color: "#666",
                                        width: '30%',
                                        textAlign: 'right',
                                    }}
                                />%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <div>
                        <Form.Label className="home">
                            <span>Loan Amount</span>
                        </Form.Label>
                        <div>
                            <input
                                type="text"
                                className='calculator-text3'
                                value={loanamount !== null ? loanamount : 0}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 mt-2">
                    <div>
                        <Form.Label className="home">
                            Interest Rate
                        </Form.Label>
                        <div>
                            <input
                                className='calculator-text3'
                                value={interestRate}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 mt-2">
                    <div>
                        <Form.Label className="home">
                            Length of Loan
                        </Form.Label>
                        <select
                            className="calculator-text3"
                            value={loanYears}
                            onChange={(e) => setLoanYears(e.target.value)}
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
                <div className="col-sm-6 col-md-6 mt-2">
                    <div>
                        <Form.Label className="home">
                            Private Mortgage Insurance (PMI)
                        </Form.Label>
                        <input
                            className="calculator-text3"
                            value={pmi}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setPmi(e.target.value)}
                        />
                    </div>
                </div>
                {/* <div className="col-sm-6 col-md-6 mt-2">
                    <div>
                        <Form.Label className="home1">
                            Zipcode
                        </Form.Label>
                        <input
                            className="calculator-text3"
                            value={zipcode}
                            onKeyDown={handleKeyDown}
                            // onChange={(e) => setPmi(e.target.value)}
                        />
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default PriceRangeSlider;
