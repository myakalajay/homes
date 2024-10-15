"use client"
import GetRates from '../page/GetRates';

    const ScrollText = ()=>{
    return (<>
        <section className="marquee-sec">
        <div className="container-fluid">
            <marquee className="news-content">
                <GetRates/>
            </marquee>
        </div>
    </section>
    </>);
}

export default ScrollText;