"use client";
import React,{useState,useEffect} from "react";
import Link from 'next/link';
import Newspage from "@/components/Newspage";
import Newfooter from "@/components/NewFooter";
import { Colors } from "chart.js";
import Step from "@/page/Step";
import { setZip } from "@/redux/zipcodeSlice";
import { useDispatch , useSelector} from "react-redux";
import RateModal from "@/page/RateModal";
import Signup from "@/pages/Signup";
import Head from 'next/head';


function Homebuyer () {
  const [modalShow, setModalShow] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [rates, setRates] = useState(null);
  const [zipcodetype,setZipcodeType] = useState("")
  const zipcode = useSelector(state => state.zipcode.zipcode); 
  const dispatch = useDispatch()

  useEffect(() => {
    // Set ZipPlace to global storage zipcode initially
    setZipcodeType(zipcode);
  }, [zipcode]);

const handleZipChange = (e)=>{
    setZipcodeType(e.target.value)
    // dispatch(setZip({zipCode:zipcode}))
  }
  
  const handleSaveZipCode = async() => {
    dispatch(setZip(zipcodetype));
    try {
      // First, save the ZIP code to the 'runCronJobProcessed' endpoint
      const saveZipResponse = await fetch(`${process.env.NEXT_API_URL}/api/v1/mortech-api/runCronJobProcessed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({zipcode:zipcodetype,cron: "zip" }), // Send the zipcode to the API
      });
  
      if (!saveZipResponse.ok) {
        throw new Error('Failed to save ZIP code');
      }  
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getrates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ zipcode:zipcodetype })
      });

      if (!response.ok) {
        throw new Error('Invalid zipcode or server error');
      }

      const data = await response.json();
      if (data.length === 0) {
        throw new Error('No rates available for the provided zipcode');
      }
       setRates(data); // Set the fetched rates data
      setModal(true); // Show the modal
    } catch (error) {
      console.error("Error fetching rates:", error);
      setRates(null); // Reset rates if there was an error
      setModal(true); // Show the modal to indicate an error
    }
  };
    return(
       <>
       <Head>
  <title>First-time Homebuyer</title>
  <meta name="description" content="Discover first-time homebuyer programs and resources. Learn about low down payment options, government-backed loans, and key tips for navigating the homebuying process, designed to help you buy your first home with confidence." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

       <div className=''>
        <div className="row">
          <div className="conven-page">
            <div className="col-sm-12 col-md-12 mx-5">
                <Link href="/" style={{textDecorationLine:"none"}}>
                  <span className="home">Home<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                  </span>
                </Link>
                <span className="home">Resources <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </span>
                <span className="home text-danger">First-Time Homebuyer</span>
            </div>
          </div>
          <div className='conventional-loans' >
            <img src="./assets/images/home-page/First-time.jpg" alt="" className="w-100" />
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="nav nav-pills Home-buyer">
              <div className="nav-item">
                <div>
                    <button className="loan-but1 active text-center" data-bs-toggle="pill"
                         href="#All">Overview</button>
                       
                    <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#Process">Process</button>
                 
                    <button className="loan-but2  text-center" data-bs-toggle="pill"
                         href="#ToolsResource">Tools & Resource</button>
                 
                    <button className="loan-but2   text-center" data-bs-toggle="pill"
                         href="#Loanoptions">Loan options</button>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12">                
              <div className="tab-content">
                {/* <div id="All" className="tab-pane active">
                <div className='loan-flip Home-buyer back'>
                    <div className='col-md-7 col-sm-12'>
                      <span className='government-backed loan8'>
                      Buying your first home is an exciting and life-changing milestone, and at Homeratesyard, 
                      we're here to make the journey as smooth as possible.With our wide range of tools and expert 
                      resources, we’ll guide you through every step of the process from saving for a down payment to 
                      closing on your dream home. Whether you're just starting or ready to move in, you can rely on 
                      us to provide personalized support and help you unlock the door to your first home with confidence. 
                      Let’s make your homeownership dreams a reality!
                      </span>
                    </div>
                    <div className="col-md-4 mt-4 mx-5">
                      <img src=".\assets\images\home-page\homebuyer-section.png" alt="" className="img-fluid w-100 p-2"/>
                    </div>
                  </div>
                </div> */}
                <div id="All" className="tab-pane active">
                <div className='loan-flip back'>
                <div className="col-md-8 col-sm-12 ">
                    <p className='loan1 mx-5'>Making Homeownership <span className='loan2 '>Dreams a Reality </span></p>
                      <span className='government-backed loan8'>
                      Buying your first home is an exciting and life-changing milestone, and at Homeratesyard, 
                      we're here to make the journey as smooth as possible.With our wide range of tools and expert 
                      resources, we’ll guide you through every step of the process from saving for a down payment to 
                      closing on your dream home. Whether you're just starting or ready to move in, you can rely on 
                      us to provide personalized support and help you unlock the door to your first home with confidence. 
                      Let’s make your homeownership dreams a reality!
                      </span>
                </div>
                <div className="col-md-4 mt-4 mx-5">
                    <img src="./assets/images/home-page/buyer1.png" alt="Home buyer" style={{width: '380px', height: '150px' }}   className="img-fluid"/>
                </div>
              </div>
              </div>
                <div id="ToolsResource" className="tab-pane fade">
                  <div className="col-sm-12 col-md-12">
                    <div className="text-center mb-3 mt-4">
                      <span className="loan1">Explore Our</span>
                      <span className="loan2"> Tools and Resources</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="col-sm-12 col-md-6 mb-4 mt-1">
                      <div className="homebuyer-card mx-3 d-flex">
                        <div className="homebuyer-imgback">
                          <img src="./assets/images/icons/homebuyer-card1.svg" alt="Home buyer" className="homebuyer-img" />
                        </div>
                        <div className="homebuyer-dir">
                          <h5 className="homebuyer-text">Resources and tools</h5>
                          <div>
                            <Link href="/CalculatorSection">Mortgage calculator</Link><br/>
                            <Link href="/Annual">APR vs Interest rate</Link><br/>
                            <Link href="/Homebuyer" ><p>Key Considerations for First-Time Home Buyers</p></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-4 mt-1">
                      <div className="homebuyer-card mx-3 d-flex">
                        <div className="homebuyer-imgback">
                          <img src="./assets/images/icons/homebuyer-card2.svg" alt="Home buyer" className="homebuyer-img " />
                        </div>
                        <div className="homebuyer-dir">
                          <h5 className="homebuyer-text">Explore current rates</h5>
                          <div>
                          <input
                            className="homebuyer-textbox"
                            value={zipcodetype}
                            // onKeyDown={handleKeyDown}
                            onChange={handleZipChange}
                            maxLength={5}
                        />
                          <button
                          className="homebuyer-gobut"
                          onClick={handleSaveZipCode}
                          disabled={!zipcodetype} 
                        >Go<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg></button>
                            {/* <input 
                              type="text"
                              className="homebuyer-textbox"
                              placeholder="Enter ZIP code"
                              value={zipcode}
                            />
                            <button className="homebuyer-gobut">Go <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg></button> */}
                          </div>
                        </div>
                      </div>
                    </div>   
                  </div>
                </div>
                <div id="Process" className="tab-pane fade">
                  <img src="./assets/images/home-page/Process.png" alt="Home buyer" className="w-100"/>
                </div>
                <div id="Loanoptions" className="tab-pane fade">
                  <div className="col-sm-12 col-md-12 mb-2" style={{backgroundColor:"#F9F9F9"}}>
                    <div className="text-center mb-3 mt-2">
                      <span className= "loan1">Discover Our Most Popular</span>
                      <span className="loan2"> Home Loan Options</span>
                    </div>
                    <div className="accordion px-5 " id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button dropp" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Fixed-rate mortgages
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          A fixed-rate mortgage offers borrowers a stable interest rate throughout the loan term, ensuring predictable monthly payments. 
                          This type of mortgage protects homeowners from fluctuating interest rates, providing long-term financial security. 
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Adjustable-rate mortgages (ARMs)
                              </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              An adjustable-rate mortgage (ARM) features an initial fixed interest rate for a specified period, 
                              after which the rate adjusts periodically based on market conditions. This type of mortgage can result 
                              in lower initial payments but carries the risk of increasing rates and payments over time. 
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed dropp" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Affordable Loan Solution® mortgage
                              </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse danger" aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              An affordable loan solution mortgage is designed to help borrowers access home financing with manageable 
                              monthly payments and favourable terms. These loans often include features like lower down payment requirements 
                              and flexible income eligibility criteria, making homeownership more attainable for a broader range of buyers. 
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>  
                </div>   
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 get1">
              <div className="m-4 mx-5">
                <p className="offers1">Prequalify now with the Homeratesyard <br/>Digital Mortgage Experience</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 text-center get3">
              <div className="mt-5">
              <Link href="/Signup"><button className="Home-buyer-button mt-1 mb-2 mx-2">Get Started</button></Link>
              <Link href="/MortgageLoan"><button className="Home-buyer-button mt-1 mb-2" onClick={() => setModalShow(true)}>Learn More</button></Link>
              </div>
              <Step
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <RateModal
          show={modal}
          onHide={() => setModal(false)}
          rates={rates}
        />
            </div>
          </div>
        </div>
       </>

    )
}
export default Homebuyer;