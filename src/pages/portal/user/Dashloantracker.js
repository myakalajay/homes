import { Table } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Dashloantracker(){
  const [loantracker, setLoanTracker] = useState([]);
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
        const requestData = {
          user:userid,
          token:token
          };
          // console.log("requestData",requestData)
      try {
        const response = await fetch('https://lendapi.azurewebsites.net/api/getuserloantracker', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify(requestData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
       
        // const data = await response.json();
        // setProperties(data);
        //  console.log('setdata',data)
        // const data = await response.json();
        // // console.log('Fetched data:', data);
  
        // if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
        //   setApproval(data.result_sets[1]);
        //   console.log('Properties Set:', data.result_sets[1]);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            setLoanTracker(data);
        } else {
            setLoanTracker([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userid,token]);  
  return(
        <>
          <div className="second-box dashboard-advancement mt-3">
            {/* <div className="d-flex flex-row justify-content-between p-2">
            <p className="advance-payments mx-4 mt-4">Advance Payments</p>
            <button className="btn btn-danger"  onClick={()=>setShowproperty(true)}>Add property</button>
            </div> */}
           <Table   hover className="table">
        <thead>
          <tr style={{height:'66px'}}>
            <th >Loan Type</th>
            <th>Purchase value</th>
            <th>Loan Amount</th>
            <th>Documents</th>
            <th >Address</th>
            <th >Date</th>
            <th >Status</th>
            {/* <th style={{width:'10px'}}>Employment Status</th>
            <th>Credit Score</th>
            <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
        {loantracker && loantracker.length > 0 ? (
            loantracker.map((loan) => (
              <tr key={prop.userpropid}>
                <td onClick={() => handlePropertyTypeClick(log)} style={{height:'66px'}}>{loan.lendername}</td>
                <td>{loan.loantype}</td>
                <td>{loan.loanamount}</td>
                <td>{loan.emiamount}</td>
                <td>{loan.term}</td>
                <td>{loan.pmiamount}</td>
                <td>{loan.istrackrefi}</td>
                {/* <td style={{width:"10px"}}>{log.workstatus}</td>
                <td>{log.creditscore}</td> */}
                {/* <td>{property.workstatus}</td> */}
                {/* <td><button className='btn btn-danger' onClick={() => handleGetRatesClick(log)}>Get Rates</button></td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No properties available</td>
            </tr>
          )}
        </tbody>
      </Table>
        </div>
        </>
    )
}

export default Dashloantracker;