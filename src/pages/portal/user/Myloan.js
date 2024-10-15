import { Table,Pagination  } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import {  useSelector } from 'react-redux';
function Myloan() {
    const [mortgageCompanies, setMortgageCompanies] = useState([]);
    const [showLoanData,setShowLoanData] = useState(true) ;
    const [loanData, setLoanData] = useState([]);
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLoan, setSelectedLoan] = useState([]);
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = properties.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(properties.length / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const handleCloseClick = () => {
        setShowLoanData(true); 
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        console.log("fj",value)
        const sanitizedValue = sanitizeInput(value);
        setLoanData((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      }

      const handleLoanSave = async (e) => {
        e.preventDefault();
        try {
          const response= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserpropertyloan`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({...loanData,
              propid:selectedLoan.propertyid
          }),
           }).then((response) => response.json())
           .then((data) => {
           console.log("Loan saved successfully")
           })
           .catch((error) => {
             console.error('Error:', error);
           });
      
           if (response.ok) {
      
             
             console.log("Data submitted successfully!");
            
           } else {
             console.error("Error submitting data");
           }
         } catch (error) {
           console.error("Error:", error);
         }
      };
      
      useEffect(() => {
        const fetchMortgageCompanies = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getlender`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
           
            const data = await response.json();
            setMortgageCompanies(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchMortgageCompanies();
          }, []);
      

      useEffect(() => {
        const fetchDashname = async () => {
            const requestData = { user: user, token: token };
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(requestData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
                    setProperties(data.result_sets[2]);
                } else {
                  setProperties([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDashname();
        
    // const intervalId = setInterval(fetchDashname, 5 *10* 1000);
    // return () => clearInterval(intervalId);
  
  }, [user, token,selectedLoan]);
  
  return (
    <div>
        <>
        <div>
          {showLoanData && (
    <button
      className="lobutton mt-2"
      style={{ marginLeft: "50rem", marginBottom: "10px" }}
      onClick={() => setShowLoanData(!showLoanData)}
    >
      Add Loan
    </button>
          )}
          </div>
           { showLoanData ? (
            <>
            <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
            <thead>
              <tr>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Purchase value <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Documents <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
          </>
       ): (
          <>
          {loanData && (
            <div>
              <label className='mt-3'><span className="property-text">Property Name</span>
              <div>
                       <select
                          className="dashboard-text"
                          name="propertyname"
                          value={loanData.propertyname}
                          onChange={handleInputChange}
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
  
                  <label className='mt-2 mx-3'><span className="property-text">Loan Type</span>
                  <div>
                      <select 
                          className="dashboard-text" 
                          name="loantype"
                          value={loanData.loantype}
                          onChange={handleInputChange}
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
              
              
              <label className='mt-2 mx-3'><span className="property-text">Mortgage company</span>
              <div>
                       <select
                          className="dashboard-text"
                          name="lender"
                          value={loanData.lender}
                          onChange={handleInputChange}
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
  
              
                  <label><span className="property-text">Loan Amount</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Loan Amount"
                          name="loanamount"
                          value={loanData.loanamount}
                          onChange={handleInputChange}
                        />
                  </div>
                  </label>
             
              
                  <label className='mx-3'><span className="property-text">Pmi Amount</span>
                  <div>
                      <input
                          // type='text'
                          className="dashboard-text"
                          placeholder="Enter Pmi Amount"
                          name="pmiamount"
                          value={loanData.pmiamount}
                          onChange={handleInputChange}
                      />
                  </div>
                  </label>
              
                  <label className="mt-4 mx-3"><span className="property-text">Loan Start Date</span>
                  <div>
                      <input
                          type='date'
                          className="dashboard-text p-2"
                          placeholder="Enter Loan Start Date"
                          name="startdate"
                          value={loanData.startdate}
                          onChange={handleInputChange}
                          inline 
                      />
                  </div>
                  </label>
              
                  <label className="mt-4"><span className="property-text">Loan End Date</span>
                  <div>
                      <input
                          type='date'
                          className="dashboard-text"
                          placeholder="Enter Loan End Date"
                          name="enddate"
                          value={loanData.enddate}
                          onChange={handleInputChange}
                          inline 
                      />
                  </div>
                  </label>
              
                  <label className="mt-4 mx-3"><span className="property-text">Loan Rate</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter Loan Rate"
                          name="rate"
                          value={loanData.rate}
                          onChange={handleInputChange}
                      />
                  </div>
                  </label>
  
              <label className='mt-4 mx-3'>
                  <span className="property-text">Loan Term</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter Loan Term"
                          name="term"
                          value={loanData.term}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>
              <label className='mt-4'>
                <span className="property-text">EMI Amount</span>
                  <div>
                      <input
                          className="dashboard-text"
                          placeholder="Enter EMI Amount"
                          name="emiamount"
                          value={loanData.emiamount}
                          onChange={handleInputChange}
                      />
                  </div>
              </label>

              <div className="d-flex justify-content-end">
              <button className="prebutton m-1 " onClick={handleCloseClick}>Close</button>
               <button className="lobutton m-2" onClick={handleLoanSave}>Submit</button>
  
              </div>
              </div>
              )}
              </>
          
        )}
          </>
    </div>
  )
}

export default Myloan