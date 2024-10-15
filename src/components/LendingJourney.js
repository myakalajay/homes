"use client"

import { useEffect, useState } from "react";

function LendingJourney() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
    return (
        <>
            <section className="lending-journey-sec">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                            <img src="./assets/images/home-page/Five-Step.png" className="img-fluid" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default LendingJourney;