import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import { CircularProgressbar } from 'react-circular-progressbar';
import Link from "next/link";
import Step from "@/page/Step";
import { setZip } from "@/redux/zipcodeSlice";
import { useDispatch , useSelector} from "react-redux"; 
import Head from "next/head";

const Consolidate= () => {
    const [loanamount, setLoanamount] = useState(300);
    const [interestRate, setInterestRate] = useState(6.5);
    const [termyears, setTermYears]=useState(10);
    const [loanamounttwo, setLoanAmounttwo] = useState(30);
    const [interestRatetwo, setInterestRatetwo] = useState(6.5);
    const [termyearstwo, setTermYearstwo]=useState(10);
    const [newloan , setNewLoan ] = useState(300);
    const [newinterest,setNewInterest]= useState(6.5);
    const [newterm, setNewTerm]=useState(10);
    const [PropertyTax, setPropertyTax] = useState(0);
    const [NewPropertyTax, setNewPropertyTax] = useState(0);
    const [consolidatedMonthlyPayment, setConsolidatedMonthlyPayment] = useState(null);
    const [consolidatedloanamount,setConsolidatedLoanamount]=useState(null);
    const [newconsolidatedamount,setNewConsolidatedamount]=useState(null);
    const [newMonthlyPayment, setNewMonthlyPayment] = useState(null);
    const [activeButton, setActiveButton] = useState('NewLoan'); 
    const [showNewloandata,setShowNewLoanData]=useState(false);
    const [showDetailsloan,setShowDetailsLoan]=useState(true);
    const [activedetailbutton,setActiveDetailButton]=useState('break');
    const [modalShow, setModalShow] = React.useState(false);
    const [showDetail1,setShowDetail1]=useState(true);
    const [showDetail2,setShowDetail2]=useState(false);
    const[Places,setPlaces]=useState("");
    const [chartData, setChartData] = useState({});
    const [zipcodetype,setZipcodeType] = useState("")
    const zipcode = useSelector(state => state.zipcode.zipcode); 
    const dispatch = useDispatch();

    
    useEffect(() => {
        setZipcodeType(zipcode);
      }, [zipcode]);

    const handleZipChange = (e)=>{
        setZipcodeType(e.target.value)
      }
      
      const handleSaveZipCode = () =>{
        dispatch(setZip(zipcodetype))
      }

    useEffect(() => {
        fetchData();
    }, [loanamount,interestRate,termyears,loanamounttwo,interestRatetwo,termyearstwo ,newloan,newinterest,newterm]);

    const fetchData = async () => {
        const loanamountValue = parseFloat(loanamount);
        const interestRateValue = parseFloat(interestRate);
        const termyearsValue = parseFloat(termyears);
        const loanamounttwoValue = parseFloat(loanamounttwo);
        const interestRatetwoValue = parseFloat(interestRatetwo);
        const termyearstwoValue = parseFloat(termyearstwo);
        const newloanValue = parseInt(newloan);
        const newinterestValue = parseFloat(newinterest);
        const newtermValue = parseFloat(newterm);
       
        
                if (isNaN(termyearsValue)|| isNaN(loanamountValue) || isNaN(interestRateValue)  || isNaN(loanamounttwoValue) || isNaN(interestRatetwoValue) || isNaN(termyearstwoValue) || isNaN(newloanValue) || isNaN(newinterestValue)|| isNaN(newtermValue)  ) {
                    setConsolidatedMonthlyPayment(null);
                    setNewMonthlyPayment(null);
                    setNewConsolidatedamount(null);
                    setConsolidatedLoanamount(null);
        }

        const requestData = {
            loan1amt: loanamountValue,
            loan1rate: interestRateValue,
            loan1term: termyearsValue,
            loan2amt: loanamounttwoValue,
            loan2rate:interestRatetwoValue,
            loan2term:termyearstwoValue,
            newloan:  newloanValue,
            newrate:  newinterestValue,
            newterm:  newtermValue,
            zip:zipcode
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getconsolidateloan`, {
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

            const consolidatedPayment = parseFloat(responseData.find(item => item.type === "Consolidated Loan Details")?.monthlypayment);
            const consolidatedPropertyTax = parseFloat(responseData.find(item => item.type === "Consolidated Loan Details")?.taxes);
            const newPayment = parseFloat(responseData.find(item => item.type === "New Loan Option Details")?.monthlypayment);
            const loanamounts =  parseFloat(responseData.find(item => item.type === "Consolidated Loan Details")?.consolidatedloanamount);
            const totalamount = parseFloat(responseData.find(item => item.type === "New Loan Option Details")?.consolidatedloanamount);
            const Propertytax = parseFloat(responseData.find(item => item.type === "New Loan Option Details")?.taxes);
            const PlaceName = responseData[0]?.placename;
            setPlaces(PlaceName);
            setNewPropertyTax(Propertytax);
            setPropertyTax(consolidatedPropertyTax);
            setConsolidatedMonthlyPayment(consolidatedPayment);
            setNewMonthlyPayment(newPayment);
            setConsolidatedLoanamount(loanamounts);
            setNewConsolidatedamount(totalamount);

            console.log(totalamount);
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
    const handleDetailsofLoanButtonClick = () => {
        setActiveButton('NewLoan');
        setShowNewLoanData(false);
        setShowDetailsLoan(true);
      };
    
      const handleNewLoanDetailsButtonClick = () => {
        setActiveButton('Details'); 
        setShowDetailsLoan(false);
        setShowNewLoanData(true);
    };
    
    const handleDetail1button =() =>{
        setActiveDetailButton('break');
        setShowDetail1(true);
        setShowDetail2(false);
    }

    const handleDetail2button =() =>{
        setActiveDetailButton('details');
        setShowDetail1(false);
        setShowDetail2(true);
    }
    return(
        <>
        <Head>
            <title>Consolidation Calculator</title>
            <meta name="description" content="Explore how consolidating your debts can help you save with Homeratesyard's Consolidation Calculator. Tailored mortgage and financial solutions for U.S. citizens and Foreign Nationals." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            <div className="Home-buyer">
                <div className="col-sm-12 col-md-12 mx-5 conven-page">
                    <Link href="/" style={{textDecorationLine:"none"}}>
                        <span className="home">Home
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </span>
                    </Link>
                    <span className="home">Calculators 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </span>
                    <span className="home text-danger">Consolidation calculator</span>
                </div>
                <div>
                      <div className="row p-4 align-items-center " style={{ backgroundImage: "url(./assets/images/home-page/calculator-header.jpg)",height:"90%",width:'100%', backgroundSize:'cover'}}>
                        <div className="col-sm-12 col-md-4" style={{marginTop:'10px',marginBottom:'10px'}}>
                        <span className="calculator-headertext">Consolidation Calculator</span>
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
                <div className="container">
                    <div className="row mt-3">
                        <div className="DetailsButton text-center"><h4 className="mt-3">Details of Loan</h4></div>
                            <div className="col-sm-12 col-md-4 mt-4 Consolidate-box ">
                                <div className='item-center mt-4 back'>                
                                    <button className={activedetailbutton === 'break' ? 'breakup active' : 'breakup'}  onClick={handleDetail1button}>Loan 1</button>
                                    <button className= {activedetailbutton === 'details' ? 'amortization active' : 'amortization'} onClick={handleDetail2button}>Loan 2</button>
                                </div>
                                <div className="d-flex ">
                                    <div style={{width:'185px'}}>
                                        <div className="mt-3 mx-3">
                                            <Form.Label className="home mx-1">
                                                <span>Loan Amount</span>
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text1 mx-1"
                                                    value={loanamount}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setLoanamount(e.target.value)}
                                                />
                                            </div>
                                        </div>  
                                        <div className="mt-2 mx-3">
                                            <Form.Label className="home mx-1">
                                                <span>Interest Rate % </span>
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text1 mx-1"
                                                    value={interestRate}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setInterestRate(e.target.value)}
                                                />
                                            </div>
                                        </div> 
                                        <div className="mt-2 mx-3">
                                            <Form.Label className="home mx-1">
                                                <span>Term In Years</span>
                                            </Form.Label>
                                            <div>
                                                <select
                                                    className="calculator-text1 mx-1"
                                                    value={termyears}
                                                    onChange={(e) => setTermYears(e.target.value)}
                                                >
                                                    <option><p>5 Years</p></option>
                                                    <option>7 Years</option>
                                                    <option>10 Years</option>
                                                    <option>15 Years</option>
                                                    <option>20 Years</option>
                                                    <option>25 Years</option>
                                                    <option>30 Years</option>
                                                    <option>40 Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mt-3 mx-2">
                                            <Form.Label className="home mx-1">
                                                <span>Loan Amount</span>
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text1 mx-1"
                                                    value={loanamounttwo}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setLoanAmounttwo(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2 mx-2">
                                            <Form.Label className="home mx-1">
                                                <span>Interest Rate %</span>
                                            </Form.Label>
                                            <div>
                                                <input
                                                    className="calculator-text1 mx-1"
                                                    value={interestRatetwo}
                                                    onKeyDown={handleKeyDown}
                                                    onChange={(e) => setInterestRatetwo(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2 mx-2">
                                            <Form.Label className="home mx-1">
                                            <span>Term In Years</span>
                                            </Form.Label>
                                            <div>
                                                <select
                                                    className="calculator-text1 mx-1"
                                                    value={termyearstwo}
                                                    onChange={(e) => setTermYearstwo(e.target.value)}
                                                >
                                                <option><p>5 Years</p></option>
                                                <option>7 Years</option>
                                                <option>10 Years</option>
                                                <option>15 Years</option>
                                                <option>20 Years</option>
                                                <option>25 Years</option>
                                                <option>30 Years</option>
                                                <option>40 Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                            </div>
                            <div className="col-sm-12 col-md-8 Consolidate-box1" style={{marginTop:"23px"}}>
                                <div className="mt-2 text-center">
                                    <span className='loan2 mt-2 mx-3'>Consolidate Monthly Payment </span>
                                </div>
                                <div className="back">
                                    <div style={{ width: '250px', marginLeft: '10px', position: 'relative' }} className="mt-4">
                                        <CircularProgressbar    
                                            strokeWidth={15}
                                            styles={{
                                                path: { stroke: '#AB1331' },
                                                trail: { stroke: '#eee' },
                                                text: { fontSize: '8px', fill: '#333' },
                                            }}
                                        />
                                        <h6 className='monthly' style={{position: 'absolute', top: '50%',left: '50%', transform: 'translate(-50%, -50%)',
                                            margin: '0',
                                            fontSize: '29px',
                                            color: 'rgba(0, 0, 0, 1)',
                                            fontFamily: "Nunito Sans",
                                            fontStyle:"normal",
                                            fontWeight:"700"
                                        }}>
                                            {consolidatedMonthlyPayment !== null ? `$${consolidatedMonthlyPayment.toFixed(2)}` : 'N/A'}
                                        </h6>
                                    </div>
                                    <div className="mx-1">
                                        <div className="mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(142, 193, 99, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                            </svg>Principal & interest
                                            <input type="text" style={{marginLeft:"140px"}}  className="consolidate-smalltext-box" value={consolidatedMonthlyPayment}/>
                                        </div>
                                        <div className="mt-4 mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8"/>
                                            </svg>Property taxes
                                            <input type="text" style={{marginLeft:"175px"}} className="consolidate-smalltext-box" value={PropertyTax}/>
                                        </div>
                                        <div className="mt-4 mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(101, 173, 253, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                            </svg>Homeowners insurance
                                            <input type="text" style={{marginLeft:"110px"}} className="consolidate-smalltext-box"/>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <p className="text-center mt-4 mb-4">Disclaimer: Values are for illustration purposes only. Actual payments may vary based on loan parameters.</p>
                                </div>
                            </div>
                        <div className="DetailsButton text-center mt-5">
                            <h4 className="mt-3">Details of  New Loan</h4>
                        </div>
                        <div className="col-sm-12 col-md-4 Consolidate-box">
                            <div className="mt-5 mx-2">
                                <Form.Label className="home mx-2">
                                    <span>Loan Amount</span>
                                </Form.Label>
                                <div>
                                    <input
                                        className="calculator-text"
                                        value={newloan}
                                        onKeyDown={handleKeyDown}
                                        onChange={(e) => setNewLoan(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-3 mx-2">
                                <Form.Label className="home mx-2">
                                    <span>Interest Rate %</span>
                                </Form.Label>
                                <div>
                                    <input
                                        className="calculator-text"
                                        value={newinterest}
                                        onKeyDown={handleKeyDown}
                                        onChange={(e) => setNewInterest(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-3 mx-2">
                                <Form.Label className="home mx-2">
                                    <span>Term In Years</span>
                                </Form.Label>
                                <div>
                                    <select
                                        className="calculator-text"
                                        value={newterm}
                                        onChange={(e) => setNewTerm(e.target.value)}
                                    >
                                        <option><p>5 Years</p></option>
                                        <option>7 Years</option>
                                        <option>10 Years</option>
                                        <option>15 Years</option>
                                        <option>20 Years</option>
                                        <option>25 Years</option>
                                        <option>30 Years</option>
                                        <option>40 Years</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 Consolidate-box1">
                            <div className='form-group'>
                                <div className="mt-3 text-center">
                                    <span className='loan2 mt-2 mx-3'>New Monthly Payment</span>
                                </div>
                                <div className="back">
                                    <div style={{ width: '250px', marginLeft: '10px', position: 'relative' }} className="mt-4">
                                        <CircularProgressbar
                                            // value={percentage} // Add the percentage value
                                            strokeWidth={15}
                                            styles={{
                                                path: { stroke: '#AB1331' },
                                                trail: { stroke: '#eee' },
                                                text: { fontSize: '8px', fill: '#333' },
                                            }}
                                        />
                                        <h6 className='monthly' style={{position: 'absolute', top: '50%',left: '50%', transform: 'translate(-50%, -50%)',
                                            margin: '0',
                                            fontSize: '29px',
                                            color: 'rgba(0, 0, 0, 1)',
                                            fontFamily: "Nunito Sans",
                                            fontStyle:"normal",
                                            fontWeight:"700"
                                            }}>
                                            {newconsolidatedamount !== null ? `$${newconsolidatedamount.toFixed(2)}` : 'N/A'}
                                        </h6>
                                    </div>
                                    <div className="mx-5">
                                        <div className="mx-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(142, 193, 99, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                            </svg>Principal & interest
                                            <input type="text" style={{marginLeft:"90px"}}  className="consolidate-smalltext-box" value={newMonthlyPayment}/>
                                        </div>
                                        <div className="mt-4 mx-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                            </svg>Property taxes
                                            <input type="text" style={{marginLeft:"125px"}} className="consolidate-smalltext-box" value={NewPropertyTax}/>
                                        </div>
                                        <div className="mt-4 mx-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(101, 173, 253, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                            </svg>Homeowners insurance
                                            <input type="text" style={{marginLeft:"60px"}} className="consolidate-smalltext-box"/>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <p className="text-center mt-4">Disclaimer: Values are for illustration purposes only. Actual payments may vary based on loan parameters.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-3">
                            <button className="submit1">Calculate New Monthly Payment</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-7 get1">
                        <div className="m-4 mx-5">
                            <p className="offers1">Get Customized Home Mortgage Loan Offers Today</p>
                            <p className="offers2">Discover the best mortgage loan offers tailored to your financial needs and goals. <br/>
                            Explore your options & get personalized quotes to find the perfect home financing solution for you.</p>
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
        </>
    )
}

export default Consolidate;