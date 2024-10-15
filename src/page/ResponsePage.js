import React,{useState} from 'react';
import { Table, Button } from 'react-bootstrap';
import Link from 'next/link';

const ResponsePage = ({ response , onGetQuotes  }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (loanid) => {
    setActiveAccordion(activeAccordion === loanid ? null : loanid);
  };

  return (
    <div className="response-container">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Loan Type</th>
            <th>Loan Description</th>
            <th>Loan Interest Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((loan) => (
            <>
            <tr key={loan.loanid}>
              <td>{loan.loantype}</td>
              <td>{loan.loandescription}
              <div >
                            <div className="accordion col-sm-12 col-md-12" style={{width:'0% !important',margin:"auto"}}>
                                <h2 className="accordion-header" id="headingOne" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           
                                    <button
                          className="accordion-button"
                          style={{ height: '40px', width: '60px' }}
                          type="button"

                          data-bs-toggle="collapse"
                          data-bs-target={`collapse-${loan.loanid}`}
                          onClick={() => handleAccordionToggle(loan.loanid)}
                          aria-expanded={activeAccordion === loan.loanid}
                          aria-controls={`collapse-${loan.loanid}`}
                        >
                                               {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg> */}
                        </button>
                                </h2> 
                                <div
                                      id={`collapse-${loan.loanid}`}
                                      className={`accordion-collapse collapse ${activeAccordion === loan.loanid ? 'show' : ''}`}
                                      aria-labelledby={`heading-${loan.loanid}`}
                                    >
                                    <div className="accordion-body d-flex">
                                    <p><img src="./assets/images/home-banner/right.png" alt="" style={{height:"30px",width:"30px"}}/>{loan.loanpros}</p>
                                    <p style={{marginLeft:"25px"}}><img src="./assets/images/home-banner/wrong.png" alt="" style={{height:"30px",width:"30px"}}/>{loan.loancons}</p>
                                    </div>
                                </div>
                            </div>
                            </div>

              </td>
              <td>{loan.loanintrate}</td>
              <td className='text-center'>
              <Link href='/Getquotes' className="nav-link">
                                    <li style={{listStyleType:"none"}}> 
                                    <Button variant="primary" onClick={onGetQuotes}>Get Quotes</Button>
                                    </li>
                                </Link>
                    </td>
              </tr>
              </>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResponsePage;
