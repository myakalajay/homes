// components/RateModal.js
import React from "react";
import { Modal, Button,Table  } from "react-bootstrap"; // Assuming you're using react-bootstrap

const RateModal = ({ show, onHide, rates }) => {
    const nonDisclaimerRates = rates?.filter(rate => rate.product !== "Disclaimer");

  // Find the disclaimer rate (if it exists)
  const disclaimerRate = rates?.find(rate => rate.product === "Disclaimer");
  return (
    <Modal size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Rate Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      {rates && rates.length > 0 ? (
          <div>
            {/* Table for displaying non-disclaimer rates */}
            <h5>Rates for your ZIP Code:</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                <th className='dash-table-text text-center' style={{height:"50px",width:"140px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Product<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text text-center' style={{height:"50px",width:"140px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Rate<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
                </tr>
              </thead>
              <tbody>
                {nonDisclaimerRates.map((rate, index) => (
                  <tr key={index}>
                    <td>{rate.product}</td>
                    <td>{rate.rate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Display disclaimer rate outside the table */}
            {disclaimerRate && (
              <div className="mt-3">
                <h6>{disclaimerRate.product}</h6>
                <p>{disclaimerRate.rate}</p>
              </div>
            )}
          </div>
        ) : (
          <p>No rates found for this ZIP code.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RateModal;
