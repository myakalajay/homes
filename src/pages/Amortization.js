import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
// import './Amortization.css';

const Amortization = ({homePrice, interestRate,loanYears,downPayment,pmi}) => {

  const [apiData, setApiData] = useState([]);
console.log(" passed values ",homePrice, interestRate,loanYears,downPayment,pmi)

useEffect(() => {
    const fetchData = async () => {
        const requestData = {
            Loan: homePrice,
            Rate: interestRate,
            Term:loanYears,
            Down:downPayment,
            Pmi:pmi? pmi : 0,
          };
          console.log("requestData",requestData)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getamortizetable`, {
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
       
        const data = await response.json();
        setApiData(data);
         console.log('setdata',data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [homePrice,interestRate,loanYears,downPayment,pmi]);

  return (
    <div className=" table-container tab">

      {Array.isArray(apiData) && apiData.length > 0 ? (
        <Table  striped bordered hover className="table table-bordered " >
          <thead>
            <tr>
              <th className='table-text'>Month</th>
              <th className='table-text'>Payment</th>
              <th className='table-text'>Interest</th>
              <th className='table-text'>Principal</th>
              <th className='table-text'>Pmi</th>
              <th className='table-text'>Remaining Loan</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map(item => (
              <tr key={item.id}>
                <td>{item.month}</td>
                <td>{item.payment}</td>
                <td>{item.interest}</td>
                <td>{item.principal}</td>
                <td>{item.pmi}</td>
                <td>{item.remainingloan}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Amortization;
