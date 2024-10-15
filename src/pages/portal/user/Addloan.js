import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';

export default function Addloan ({ show, onHide }) {
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const propertyid=useSelector(state=> state.auth.propertyid);
    const [mortgageCompanies, setMortgageCompanies] = useState([]);
    const [startDate,setStartDate]=useState('');
    const [endDate,setEndDate]=useState('')
    const [properties, setProperties] = useState([]);
    const initialLoanState = {
        user:user,
        occupancytype:"",
        // propid:propertyid,
        loantype:"",
        lender:"the",
        loanamount:parseFloat(100),
        rate:'1.5',
        startdate:startDate,
        enddate:endDate,
        term:"",
        emiamount:parseFloat(100),
        pmiamount:parseFloat(10),
        refinance:"",
        paidoff:"",
        sold:"",
        track:"",
        // purchase:""
      };
      const [loanData, setLoanData] = useState(initialLoanState);
      const [errors,setErrors]=useState({})

      const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };
    
    const handleLoanInput = (e) => {
        const { name, value } = e.target;
        console.log("name",name,value)
        const sanitizedValue = sanitizeInput(value);
        if (name === "startdate" || name === "enddate") {
            setStartDate(sanitizedValue); 
            setEndDate(sanitizedValue);
        }
        setLoanData((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      };

    const handleLoanSave = async () => {
        const formattedData = {
          ...loanData,
        refinance : loanData.refinance === "Yes" ? 1 : 0,
        paidoff: loanData.paidoff === "Yes" ? 1 : 0,
        sold: loanData.sold === "Yes" ? 1 : 0,
        track: loanData.track === "Yes" ? 1 : 0,
        user:user,
        propid:propertyid
        };
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserpropertyloan`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData),
          });
          if (response.ok) {
            // Handle success
            console.log("Data submitted successfully!");
          } else {
            // Handle errors
            console.error("Error submitting data.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      useEffect(() => {
        const fetchDashname = async () => {
            const requestData = { user: user, token: token };
            // console.log('Request Data:', requestData);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                        // Add any other headers as needed
                    },
                    body: JSON.stringify(requestData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                    setProperties(data.result_sets[1]);
                } else {
                  setProperties([]);
                }
                // console.log('setdata', data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDashname();
  }, [user, token]);

    return (

   <div>
   <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
      <h6 className = "text-center">Add Loan</h6>
      </Modal.Header>
      <Modal.Body>
      <div>
            <label><span className="property-text">Property Name</span>
            <div>
                     <select
                        className="dashboard-text"
                        name="propertyname"
                        value={loanData.propertyname}
                        onChange={handleLoanInput}
                    >
                        <option value="">Select Mortgage Company...</option>
                        {properties.map((properties) => (
                             <option key={properties.propertyid} value={properties.propertyname}>
                             {properties.propertyname}
                         </option>
                        ))}
                    </select>
              </div>
              </label>

                <label className='mx-4'><span className="property-text">Loan Type</span>
                <div>
                    <select 
                        className="dashboard-text" 
                        name="loantype"
                        value={loanData.loantype}
                        onChange={handleLoanInput}
                    >
                        <option value="">Select Property type...</option>
                        <option>Conv</option>
                        <option>Good</option>
                        <option>Some Problems</option>
                        <option>Major Problems</option>
                        <option>i'm not sure</option>
                    </select>
                </div>
                </label>
            
            
            <label ><span className="property-text">Mortgage company</span>
            <div>
                     <select
                        className="dashboard-text"
                        name="lender"
                        value={loanData.lender}
                        onChange={handleLoanInput}
                    >
                        <option value="">Select Mortgage Company...</option>
                        {mortgageCompanies.map((lender) => (
                             <option key={lender.lenderid} value={lender.lendername}>
                             {lender.lendername}
                         </option>
                        ))}
                    </select>
              </div>
              </label>

            
                <label className='mt-4'><span className="property-text">Loan Amount</span>
                <div>
                    <input
                        // type='text'
                        className="dashboard-text"
                        placeholder="Enter Loan Amount"
                        name="loanamount"
                        value={loanData.loanamount}
                        onChange={handleLoanInput}
                      />
                </div>
                </label>
           
            
                <label className='mt-4 mx-4'><span className="property-text">Pmi Amount</span>
                <div>
                    <input
                        // type='text'
                        className="dashboard-text"
                        placeholder="Enter Pmi Amount"
                        name="pmiamount"
                        value={loanData.pmiamount}
                        onChange={handleLoanInput}
                    />
                </div>
                </label>
            
                <label className='mt-4'><span className="property-text">Loan Start Date</span>
                <div>
                    <input
                        type='date'
                        className="dashboard-text p-2"
                        placeholder="Enter Loan Start Date"
                        name="startdate"
                        value={loanData.startdate}
                        onChange={handleLoanInput}
                        inline 
                    />
                </div>
                </label>
            
                <label className='mt-4'><span className="property-text">Loan End Date</span>
                <div>
                    <input
                        type='date'
                        className="dashboard-text"
                        placeholder="Enter Loan End Date"
                        name="enddate"
                        value={loanData.enddate}
                        onChange={handleLoanInput}
                        inline 
                    />
                </div>
                </label>
            
                <label  className='mt-4 mx-4'><span className="property-text">Loan Rate</span>
                <div>
                    <input
                        // type='text'
                        className="dashboard-text"
                        placeholder="Enter Loan Rate"
                        name="rate"
                        value={loanData.rate}
                        onChange={handleLoanInput}
                    />
                </div>
                </label>

            <label className='mt-4'><span className="property-text">
            Loan Term </span>
                <div>
                    <input
                        // type='text'
                        className="dashboard-text"
                        placeholder="Enter Loan Term"
                        name="term"
                        value={loanData.term}
                        onChange={handleLoanInput}
                    />
                </div>
            </label>
            <label className='mt-4'><span className="property-text">
            EMI Amount </span>
                <div>
                    <input
                        // type='text'
                        className="dashboard-text"
                        placeholder="Enter EMI Amount"
                        name="emiamount"
                        value={loanData.emiamount}
                        onChange={handleLoanInput}
                    />
                </div>
            </label>
            
            
            <label className="property-text mx-5">Is Refinanced
                <div className="d-flex">
                    <div className="m-2">
                    <input type='radio'
                        className="m-1"
                        value="Yes"
                        checked={loanData.refinance === "Yes"}
                        onChange={() => handleLoanInput({ target: { name: "refinance", value: "Yes" } })}
                    />
                    <label>Yes</label>
                    </div>
                    <div className="m-2">
                        <input type="radio" 
                            className="m-1"
                            value="No"
                            checked={loanData.refinance === "No"}
                            onChange={() => handleLoanInput({ target: { name: "refinance", value: "No" } })}
                        />
                    <label>No</label>
                </div>
            </div>
            </label>
            
            <label className="property-text mx-5">Is PaidOff
                <div className="d-flex">
                    <div className="m-2">
                    <input type='radio'
                        className="m-1"
                        value="Yes"
                        checked={loanData.paidoff === "Yes"}
                        onChange={() => handleLoanInput({ target: { name: "paidoff", value: "Yes" } })}
                      />
                    <label>Yes</label>
                    </div>
                    <div className="m-2">
                        <input 
                            type="radio" 
                            className="m-1"
                            value="No"
                            checked={loanData.paidoff === "No"}
                            onChange={() => handleLoanInput({ target: { name: "paidoff", value: "No" } })}
                        />
                    <label>No</label>
                </div>
                </div>
            </label>
           
            <label className="property-text mx-5">Is SoldOff
                <div className="d-flex">
                    <div className="m-2">
                    <input type='radio'
                        className="m-1"
                        value="Yes"
                        checked={loanData.sold === "Yes"}
                        onChange={() => handleLoanInput({ target: { name: "sold", value: "Yes" } })}
                      />
                    <label>Yes</label>
                    </div>
                    <div className="m-2">
                        <input 
                            type="radio" 
                            className="m-1"
                            value="No"
                            checked={loanData.sold === "No"}
                            onChange={() => handleLoanInput({ target: { name: "sold", value: "No" } })}
                        />
                    <label>No</label>
                </div>
                </div>
            </label>
           
            <label className="property-text mx-5">Is Track
                <div className="d-flex">
                    <div className="m-2">
                    <input type='radio'
                        className="m-1"
                        value="Yes"
                        checked={loanData.track === "Yes"}
                        onChange={() => handleLoanInput({ target: { name: "track", value: "Yes" } })}
                      />
                    <label>Yes</label>
                    </div>
                    <div className="m-2">
                        <input 
                            type="radio" 
                            className="m-1"
                            value="No"
                            checked={loanData.track === "No"}
                            onChange={() => handleLoanInput({ target: { name: "track", value: "No" } })}
                        />
                    <label>No</label>
                    </div>
                </div>
            </label>
            <div className="d-flex justify-content-end">
            {/* <button className="prebutton m-1 " onClick={closeModal}>Close</button> */}
             <button className="lobutton m-2" onClick={handleLoanSave}>Submit</button>

            </div>
            </div>
      </Modal.Body>
    </Modal>
   </div>
  )
}
