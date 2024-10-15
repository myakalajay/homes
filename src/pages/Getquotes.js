import React, { useState } from "react";
import { useSelector } from "react-redux";

const Getquotes = () => {
    const quotations = useSelector(state => state.auth.quotations);
    console.log("quotations", quotations);
    
    const [selectedQuoteKey, setSelectedQuoteKey] = useState(null);
    
    const handleFees = (key) => {
        setSelectedQuoteKey(selectedQuoteKey === key ? null : key);
    };

    const renderFeesTable = (fees) => {
        const rows = fees.map((feeGroup, feeGroupIndex) => 
            feeGroup.map((fee, feeIndex) => (
                <tr key={`${feeGroupIndex}-${feeIndex}`}>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.hudline}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.description}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.feeamount}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.prepaid}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.section}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{fee.paymenttype}</td>
                </tr>
            ))
        );
        return (
            <table hover className="table table-bordered table-striped">
                <thead >
                    <tr>
                    <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Hudline <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Description<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Fee Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Prepaid <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Section <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Payment Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };

    const renderQuotations = () => {
        return Object.keys(quotations).map(key => {
            const quote = quotations[key];
            const fees = quote.fees || []; 
            return (
                <React.Fragment key={key}>
                    
                    <div className="col-md-2 col-sm-6">
                        <span>Term Type</span>
                        <div>{quote.termtype}</div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <span>Product Name</span>
                        <div>{quote.product_name}</div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <span>Product Term</span>
                        <div>{quote.productTerm}</div>
                    </div>
                    {/* <div className="col-md-2 col-sm-6">
                        <span>Status</span>
                        <div>{quote.pricingStatus}</div>
                    </div> */}
                    <hr />
                    <div className="col-md-2 col-sm-6">
                        <span>Rate of Interest</span>
                        <div>{quote.rate}</div>
                        
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <span>Price</span>
                        <div>{quote.price}</div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <span>Down Payment</span>
                        <div>{quote.downPayment}</div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <span>Loan Amount</span>
                        <div>{quote.loanAmount}</div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button onClick={() => handleFees(key)} style={{ border: "none", background: "white" }}>
                            <span>Total Fees</span>
                            <div><a href="#">{quote.totalFees}</a></div>
                        </button>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-3">
                        <a href="#">Additional Information</a>
                        <button className="btn btn-danger">Connect with Expert</button>
                    </div>
                    {selectedQuoteKey === key && fees.length > 0 && renderFeesTable(fees)}
                </React.Fragment>

            );
        });
    };

    return (
        <div className="container-fluid">
            <div className="row dashboard-out mt-5 conven-page">
                {quotations && Object.keys(quotations).length > 0 ? (
                    renderQuotations()
                ) : (
                    <p>No quotes available.</p>
                )}
            </div>
        </div>
    );
};

export default Getquotes;
