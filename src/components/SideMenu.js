'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Quickstep from "@/page/Quickstep";

function SideMenu() {
    const [isMounted, setIsMounted] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    // Function to simulate a loading operation
    const handleClick = async () => {
        setLoading(true); // Start loading
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
        setLoading(false); // Stop loading after operation
        setModalShow(true); // Show modal after loading
    };

    return (
        <>
            <div className="side-menu">
                <div className="sidenav">
                    <div className="loan-step loanDi">
                        <ul className="row">
                            <Link href='/PreApprovalPage' style={{ textDecoration: "none" }}>
                                <li className="slide-box" style={{ textAlign: 'center', margin: '3px 0' }}>
                                    <a className='' style={{ textDecoration: "none", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src="./assets/images/icons/home-page/slide1.png" alt="Home" className='imageStyles' style={{ width: '28px', height: '28px' }} />
                                        <p className='slide-text' style={{ margin: '5px 0', textAlign: 'center' }}>Get Approved</p>
                                    </a>
                                </li>
                            </Link>
                            <div className="slide-line">
                                <hr style={{ background: "#FFFFFF66" }}></hr>
                            </div>
                            <li className="slide-box" onClick={handleClick} style={{ textAlign: 'center', margin: '3px 0', width: '100%' }}>
                                <a className='' style={{ textDecoration: "none", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src="./assets/images/icons/home-page/slide2.png" alt="finance" className='imageStyles' style={{ width: '28px', height: '28px' }} />
                                    <p className='slide-text' style={{ margin: '5px 0', textAlign: 'center' }}>Quick Quote</p>
                                </a>
                            </li>
                            <Quickstep
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <div className="slide-line mb-2">
                                <hr style={{ background: "#FFFFFF66" }}></hr>
                            </div>
                            <Link href='/PreApprovalPage' style={{ textDecoration: "none" }}>
                                <li className="slide-box" style={{ textAlign: 'center', margin: '3px 0' }}>
                                    <a className='' style={{ textDecoration: "none", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src="./assets/images/icons/home-page/slide3.png" alt="Apply" className='imageStyles' style={{ width: '28px', height: '28px' }} />
                                        <p className='slide-text' style={{ margin: '0px 0', textAlign: 'center', marginBottom: '30px' }}>Apply Now</p>
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* Show loading spinner if loading is true */}
                {loading && (
                    <div className="loading-container">
                        <div className="loading-indicator"></div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SideMenu;
