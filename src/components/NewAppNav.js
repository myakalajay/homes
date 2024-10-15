'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setZip } from '@/redux/zipcodeSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import store from '@/redux/store';
import GetRates from '@/page/GetRates';
import ScrollText from './scrollText';
import RatesGraph from '@/page/RatesGraph';

function NewAppNav() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [rates, setRates] = useState(null);

  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const zipcode = useSelector(state => state.zipcode.zipcode);
  const [zipCodeInput, setZipCodeInput] = useState(""); 
  const [showGetRates, setShowGetRates] = useState(false);
  const [showGetGraphRates, setShowGetGraphRates] = useState(false);
  const router = useRouter(); 
  console.log("store.getState", store.getState(), zipcode)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setZipCodeInput(zipcode);
  }, [zipcode]);

  const handleZipCodeChange = (e) => {
    setZipCodeInput(e.target.value);
  };

  const handleSaveZipCode = async (e) => {
    e.preventDefault();
    let ratesData = null;
    let graphRatesData = null; 
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/api/v1/mortech-api/runCronJobProcessed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zipcode: zipCodeInput, cron: "zip" }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Zip code saved successfully:', data);

      dispatch(setZip(zipCodeInput)); 
      router.push('/');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);  
    }

    try {
      const payload = { zipcode: zipCodeInput };
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getrates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Invalid zipcode or server error');
      }

      ratesData = await response.json();
      if (ratesData.length === 0) {
        throw new Error('No rates available for the provided zipcode');
      }

      setShowGetGraphRates(true);
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  
    setRates(ratesData); 
    setModal(true);

    try {
      const payload = { zipcode: zipCodeInput };
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getgraphrates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Invalid zipcode or server error');
      }
  
      graphRatesData = await response.json();
      if (graphRatesData.length === 0) {
        throw new Error('No rates available for the provided zipcode');
      }
  
      setShowGetGraphRates(true);
    } catch (error) {
      console.error("Error fetching graph rates:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && zipCodeInput) {
      handleSaveZipCode(e);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='newnavbar-container'>
      {loading ? (
        <div className='loading-overlay'>
          <div className='spinner-border custom-spinner' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='newnavbar'>
          <div className='back w-100'>
            <span className='email mx-4 '>{email}</span>
            <div className='zip-container mt-1 mx-2'>
              <input
                type='text'
                placeholder='Enter Zipcode to see Rates'
                className='navzip'
                value={zipCodeInput}
                onChange={handleZipCodeChange}
                onKeyDown={handleKeyDown} 
              />
              <button
                className='zipgo'
                onClick={handleSaveZipCode}
                disabled={!zipCodeInput} 
              >
                Go
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewAppNav;
