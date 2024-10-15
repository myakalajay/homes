'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Newfooter() {
    const [isMounted, setIsMounted] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      setIsMounted(true);

      // Scroll event listener to toggle the button visibility
      const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up event listener
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (!isMounted) {
      return null;
    }
  
  return (
    <>
        <div className="container-fluid">
            <div className="row footer">
                <div className="col-sm-12">
                    <div className='text-center mt-3'>
                        <Link className='text-center text-white mt-3' style={{textDecorationLine:"none"}} href="/">Home </Link>
                        <Link className='text-center text-white mt-3' style={{textDecorationLine:"none"}} href="/Privacy">| Privacy Policy </Link>
                        <Link className='text-center text-white mt-3' style={{textDecorationLine:"none"}} href="/Terms">| Terms of Use </Link>
                        {/* <Link className='text-center text-white mt-3' style={{textDecorationLine:"none"}} href="/Sitemap">| Sitemap  </Link> */}
                    </div>
                </div>
                <div className='col-sm-3 col-md-1'>
                    <img src='../assets/images/home-banner/footer.png' className='mx-4' alt='equal housing' />
                </div>
                <div className='col-sm-5 col-md-10 mt-2'>                    
                    <div className='text-center footer-para mb-3 mt-3 m-4'>
                        <span>
                            HomeRatesYard is a cutting-edge technology platform designed to connect Consumers, Mortgage Professionals, and Lenders, addressing the needs of the borrowers. 
                            Our mission is to blend advanced technology with a personal touch to help individuals achieve homeownership and see happy families.
                        </span> 
                        <br/>
                        <div className="footer1">
                            HomeRatesYard is not a Lender, Broker, nor Licensed for any mortgage-related business.<br/> We advise all parties to comply with relevant mortgage regulations and conduct their own due diligence.
                        </div>
                    </div>
                </div>
                <div className='col-sm-2 col-md-1'>
                    {/* <img src="./assets/images/home-page/footer-item.svg" alt="" /> */}
                </div>
                <hr className='text-white mt-2'/>
                <div className='col-sm-12 col-md-12'>
                    <div className='text-center footer-para mb-2'>
                        <span>© 2024 HomeRatesYard.com All Rights Reserved.</span>
                    </div>
                </div>                   

                {showButton && (
                  <button className="scroll-to-top" onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                  </button>
                )}
            </div> 
        </div>

        <style jsx>{`
            .scroll-to-top {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #AB1331;
                color: white;
                border: none;
                width: 50px; /* Larger size for the button */
                height: 50px; /* Larger size for the button */
                border-radius: 50%; /* Make it circular */
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: opacity 0.3s;
                opacity: 0.8; /* Slightly lower opacity */
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
            }

            .scroll-to-top:hover {
                background-color: #8C1028;
                opacity: 1; /* Full opacity on hover */
            }

            .scroll-to-top svg {
                fill: white; /* Icon color */
                width: 25px; /* Increase the SVG size */
                height: 25px; /* Increase the SVG size */
            }
        `}</style>
    </>
  )
}
