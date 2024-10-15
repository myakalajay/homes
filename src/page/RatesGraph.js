import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const RatesGraph = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const zipcode = useSelector(state => state.zipcode.zipcode || '');

  useEffect(() => {
   fetchData();
 }, [zipcode]);

  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getgraphrates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ zipcode })
      });
      const jsonData = await response.json();
      console.log("jsonData",jsonData)
      setData(jsonData);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // End loading once the data is fetched
    }
  };
  return (
    <div>
      {loading && <div className='loading-overlay'>
          <div className='spinner-border custom-spinner' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>}
      {error && <p>Error: {error}</p>}
      {/* <div className='d-flex'> */}
      {data.length > 0 && (
        <Line data={{
          labels: data.map((item) => item.product), 
          datasets: [
            {
              label: 'CONV Rate',
            data: data.map((item) => item.sqlcreatedatetime),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              
            },
            {
              label: 'FHA Rate',
              data: data.map((item) => item.sqlcreatedatetime),
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }
          ],
        }} 
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        />
      )}
      </div>
    // </div>
  );
};

export default RatesGraph;
