
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Trycalculator() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
  return (
  <>
     <div className='container-fluid'>
        <div className='row background'>
          {/* <div className=''> */}
        <div className='col-sm-12 col-md-8 px-5' >
                  <p className='next-step' style={{marginLeft:"33px"}}>
                  Step Into Your Dream Home Journey
                  </p>
                  {/* <br/> */}
                  <p className='mortgage-calculator'style={{marginLeft:"33px"}}>
                  Quickly gauge your monthly payments, including HOA fees, property taxes, and PMI, with our intuitive calculator.
                  </p>
                  <Link href='/CalculatorSection' style={{textDecorationLine:"none"}}>
                  <button className='apply-now mb-2'>
                    <span className='try-calculator'>Start Your Calculation</span>
                  </button>
                  </Link>
               </div>
               
               <div className='col-sm-12 col-md-4 d-flex flex-row justify-content-center '>
             <div className='img-fluid mt-3 mb-2'>
                 <img src=".\assets\images\home-page\Calculator.png" alt="Calculator" className='img-fluid' />
            </div>
            {/* </div> */}
            </div>
            </div>
            </div>
    </>
  );
}