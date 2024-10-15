import React from "react";
import  { CircularProgressbar, buildStyles }  from 'react-circular-progressbar';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Affordabilitynav = ({ monthlyPayment, loanAmount, affordableHomeValue, downPayment }) => {
    const loanPercentage = loanAmount && affordableHomeValue ? (loanAmount / affordableHomeValue) * 100 : 0;
    const downPaymentPercentage = downPayment && affordableHomeValue ? (downPayment / affordableHomeValue) * 100 : 0;
    return (
        <>
            <div className="row">
            <div className="AffordableHomeValuebutton ">
                <p className="AffordableHome pt-3">Affordable Home Value</p>
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className=" mt-2">
                    <div style={{ width: '220px' }} className="mt-3">
                        <CircularProgressbar
                            value={loanPercentage}
                            strokeWidth={16}
                            styles={buildStyles({
                                pathColor: '#AB1331',  // Red for loan amount
                                trailColor: '#FF7A00',  // Green for down payment
                                textColor: '#333',
                                textSize: '10px',
                                strokeLinecap: 'butt',  // Changed to 'round' to make borders smoother
            // pathTransitionDuration: 0.5, 
                            })}
                            text={`$${affordableHomeValue !== null ? affordableHomeValue.toLocaleString() : 0}`}
                        />
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                <div className="mt-5">
                        <div className="d-flex justify-content-between">
                            <Form.Label className='principal-interest '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AB1331" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg><span style={{fontSize:'18px',fontWeight:'600'}}>Loan Amount</span></Form.Label>
                      <p className="text-amount1 calculator-box1" >{loanAmount !== null ? loanAmount : 0}</p>
                                {/* <input type="text" className="calculator-text1" value={loanAmount !== null ? loanAmount : 0}/> */}
                        </div> 
                        <div className="d-flex justify-content-between">   
                            <Form.Label className=' principal-interest'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7A00" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg><span className="" style={{fontSize:'18px',fontWeight:'600'}}>Down Payment</span></Form.Label>
                            <p className="text-amount1 calculator-box1" >{downPayment}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <Form.Label className='principal-interest mx-1' style={{fontSize:'22px',fontWeight:'600'}}>Monthly Payment</Form.Label>
                            <p className="text-amount2  text-danger text-left">{monthlyPayment !== null ? monthlyPayment : 0}</p>
                        </div>
                    </div>
                    </div>
            </div>
            
        </>
    );
}

export default Affordabilitynav;
