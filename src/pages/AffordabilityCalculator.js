import React, { useState ,useEffect} from "react";
import Affordabilityprice from "../page/Affordabilityprice";
import Affordabilitynav from "../page/Affordabilitynav";
import Link from "next/link";
import Step from "@/page/Step";
import HomeBanner from "@/components/HomeBanner";
import Newfooter from "@/components/NewFooter";
import { Form } from "react-bootstrap";
import { setZip } from "@/redux/zipcodeSlice";
import { useDispatch , useSelector} from "react-redux";
import Head from 'next/head';

const AffordabilityCalculator = () => {
    const [homeInsurance, setHomeInsurance] = useState(0);
    const [propertytax, setPropertytax] = useState(0);
    const [hoaFees, setHoaFees] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [loanAmount, setLoanAmount] = useState(null);
    const [affordableHomeValue, setAffordableHomeValue] = useState(null);
    const [downPayment, setDownPayment] = useState(20000);  
    const[Places,setPlaces]=useState("");
    const [modalShow,setModalShow]=useState(false);
    const [zipcodetype,setZipcodeType] = useState("")
    const zipcode = useSelector(state => state.zipcode.zipcode); 
    const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0); 
    const dispatch = useDispatch()

    
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
            const totalPayment = parseFloat(homeInsurance) + parseFloat(propertytax) + parseFloat(hoaFees) + parseFloat(monthlyPayment);
            setTotalMonthlyPayment(totalPayment || 0); 
        };

        calculateTotalMonthlyPayment();
    }, [homeInsurance, propertytax, hoaFees, monthlyPayment]);

    return (
            <>
            <div className="">
            <Head>
              <title>Affordability Calculator</title>
              <meta name="description" content="Determine how much home you can afford with Homeratesyard's Affordability Calculator. Tailored mortgage solutions for U.S. citizens and Foreign Nationals." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                <div className=" conven-page monthly-back">
                    <div className="mx-5">
                        <div className="col-sm-12 col-md-12">
                            <Link href="/" style={{textDecorationLine:"none"}}><span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg></span>
                            </Link>
                                <span className="home">Calculators<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </span>
                            <span className="home text-danger">Affordability calculator</span>
                        </div>
                    </div>
                    <div>
                      <div className="row p-4 align-items-center " style={{ backgroundImage: "url(./assets/images/home-page/calculator-header.jpg)",height:"90%",width:'100%', backgroundSize:'cover'}}>
                        <div className="col-sm-12 col-md-4" style={{marginTop:'10px',marginBottom:'10px'}}>
                        <span className="calculator-headertext">Affordability Calculator</span>
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
                              <span className="ziptext mx-2">{Places ? Places : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-12"> */}
                        {/* <div className='Affordabilityimage' >
                                <div className="col-sm-12 col-md-12 d-flex flex-row justify-content-between">
                                <div className="col-sm-12 col-md-4" style={{marginTop:'40px'}}>
                            <span className="calculator-headertext">Affordability Calculator</span>
                            </div>
                            <div className="col-sm-12 col-md-8 d-flex" style={{marginTop:'40px'}}>
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
                                        <span className="ziptext mx-2">{Places ? Places : ''}</span>
                                    </div>
                                    </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <Affordabilityprice 
                                setPropertytax={setPropertytax}
                                    setMonthlyPayment={setMonthlyPayment} 
                                    setLoanAmount={setLoanAmount} 
                                    setAffordableHomeValue={setAffordableHomeValue} 
                                    downPayment={downPayment} 
                                    setDownPayment={setDownPayment} 
                                    setPlaces={setPlaces}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                                <Affordabilitynav 
                                    monthlyPayment={monthlyPayment} 
                                    loanAmount={loanAmount} 
                                    affordableHomeValue={affordableHomeValue} 
                                    downPayment={downPayment} 
                                />
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
                            <div className='col-sm-12 col-md-6'>
                <div className='home '>
                  <span><strong style={{fontSize:'28px'}}>Monthly Payment Breakdown</strong></span>
                </div>
                <p className='monthly-price m-3'>${totalMonthlyPayment !== null ? `${totalMonthlyPayment.toFixed(2)}` : 'N/A'}</p>
                <div className="progress" style={{height:'58px',width:'468px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:`${(monthlyPayment / totalMonthlyPayment) * 100}%`,background:'rgba(142, 193, 99, 1)'}} aria-valuenow={(homeInsurance / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(homeInsurance / totalMonthlyPayment) * 100}%`,background:'rgba(52, 70, 94, 1)'}} aria-valuenow={(monthlyPayment / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"> </div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(propertytax / totalMonthlyPayment) * 100}%`,background:'rgba(101, 173, 253, 1)'}} aria-valuenow={(propertytax / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar" role="progressbar" style={{width:`${(hoaFees / totalMonthlyPayment) * 100}%`,background:'rgba(190, 3, 0, 1)'}} aria-valuenow={(hoaFees / totalMonthlyPayment) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {/* <p className='mt-5 pt-5'>*Above values are illustration purpose only, Actual payment may vary on loan parameters </p>  */}
              </div>
              <div className='col-sm-12 col-md-5 pt-3'>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(52, 70, 94, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                      </svg>  Home Insurance
                    </Form.Label>
                    <input
                      type="text"
                      className='calculator-text4 '
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
                      <h3 className='text-amount text-left mx-1'>{monthlyPayment !== null ? `$${monthlyPayment}` : 'N/A'}</h3>
                  </div>
                </div>
                <div className='form-group p-2'>
                  <div className='d-flex justify-content-between'>
                    <Form.Label className='principal-interest mx-2 mt-1'><strong style={{fontSize:'26px',fontWeight:'700'}}>Total Payment</strong></Form.Label>
                    <h4 className="text-danger text-amount mx-2 text-left">${totalMonthlyPayment !== null ? totalMonthlyPayment : 0}</h4>
                  </div>
                </div>
              </div>
              </div>
              </div>
                                <div className="text-center mt-2 pb-2">
                                    *Please note: this calculator is for illustration payments and actual payments may vary.
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7 get1">
                            <div className="m-4 mx-5">
                                <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
                            <div className="mt-5">
                                <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
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
};

export default AffordabilityCalculator;
