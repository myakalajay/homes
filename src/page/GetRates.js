import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const GetRates = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const zipcode = useSelector(state => state.zipcode.zipcode || '');

  useEffect(() => {
    fetchData();
  }, [zipcode]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getrates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ zipcode })
      });

      if (!response.ok) {
        throw new Error('Invalid zipcode or server error');
      }

      const data = await response.json();
      if (data.length === 0) {
        throw new Error('No rates available for the provided zipcode');
      }

      const formattedData = data.map(item => ({ product: item.product, rate: item.rate }));
      setData(formattedData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData([]);
    }
  };

  return (
    <>
      {error && <p>Error: {error}</p>}
      <div className='d-flex'>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} style={{ marginLeft: '25px' }}>
              <p>{item.product}</p>
              <p>{item.rate}</p>
            </div>
          ))
        ) : (
          !error && <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default GetRates;
