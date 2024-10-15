import Step from '@/page/Step';
import Link from 'next/link'
import React from 'react'

function HomeProcessCards() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <div className='row mt-2 mb-3'>
        <div className='col-sm-6 col-md-4 mt-3'>
        {/* <Link href="/Homeloan" style={{ textDecorationLine: "none" }}> */}
            <button className='homeprocess-button' onClick={() => setModalShow(true)}>
              <img src='./assets/images/icons/ideal1.png' alt='Home' className='homeprocess-img' />
              <p className="loan-steps-text">Explore Your Loan<br/>Options</p>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg> */}
            </button>
            <Step
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          {/* </Link> */}
        </div>
        <div className='col-sm-6 col-md-4 mt-3'>
            <Link href="/Registerborrower" style={{textDecorationLine:"none"}}>
            <button className='homeprocess-button'>
                <img src="./assets/images/icons/ideal2.png" alt="finance" className='homeprocess-img'/>
                <p className="loan-steps-text"> Register as a <br/>Borrower</p>
            </button>
            </Link>
        </div>
        <div className='col-sm-12 col-md-4 mt-3 text-decoration-none'>
            <Link href="/Professionals" style={{textDecorationLine:"none"}}>
            <button className='homeprocess-button'>
                <img src="./assets/images/icons/ideal3.png" alt="apply" className='homeprocess-img'/>
                <p className="loan-steps-text">Register as a<br/> Mortgage Expert</p>
            </button>
            </Link>
        </div>
    </div>
    {/* <div>
    <div className="nav nav-pills Home-buyer">
                 <div className="nav-item">
                  <div>
                 <button className="HomeProcessCards-button1 active text-center" data-bs-toggle="pill"
                         href="#All">Explore Loan options</button>
                       
                        <button className="HomeProcessCards-button2  text-center" data-bs-toggle="pill"
                         href="#Process">Why Sign Up as a Borrower</button>
                 
                        <button className="HomeProcessCards-button2  text-center" data-bs-toggle="pill"
                         href="#ToolsResource">Why Register as a <br/> Mortgage Professional?</button>
                 </div>
                 </div>
            </div>
            <div className="tab-content">
                    <div id="All" className="tab-pane active">

                    </div>
            </div>
    </div> */}
    </>
  )
}

export default HomeProcessCards