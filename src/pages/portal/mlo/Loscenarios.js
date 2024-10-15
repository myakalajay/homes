import { Table,Pagination } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Dashrates from '@/pages/portal/user/Dashrates';
function Loscenarios(){
  const [modalShow, setModalShow] = React.useState(false);
  const [scenarios, setScenarios] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [rates, setRates] = useState(null);
  const [showRatesModal, setShowRatesModal] = useState(false);
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = scenarios.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(scenarios.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


useEffect(() => {
  const fetchData = async () => {
      const requestData = {
        user:userid
        };
        console.log("requestData",requestData)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserexplore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data = await response.json();
      console.log('Fetched data:', data);

      if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
        setScenarios(data.result_sets[1]);
        console.log('Properties Set:', data.result_sets[1]);
      } else {
        setScenarios([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [userid]);

const handlePropertyTypeClick = (property) => {
  // setSelectedPropertyId(property.propertyid);
  setModalShow(true);
};

const handleGetRatesClick = async (property) => {
  const requestData = { ...property };
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/api/v1/mortech-api/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(requestData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // const data = await response.json();
    // setRates(data);
    // setShowRatesModal(true);
    const data = await response.json();
    // navigate('/rates', { state: { rates: data } });
    // history.push('/rates', { rates: data });
  } catch (error) {
    console.error('Error fetching rates:', error);
  }
};

return(
        <>
        {/* <Dashsub/> */}
          <div className="dash-table mt-3 p-2">
            <div className="d-flex flex-row justify-content-between">
            <h3 className="advance-payments mt-2">Scenarios </h3>
            {/* <button className="dashboard-button"  onClick={() => handlePropertyTypeClick(null)}>Add property</button> */}
            </div>
            <div className='table-responsive'>
            <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
        <thead>
          <tr>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>userId <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Search Timestamp <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Property Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Zip Code <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Number of Borrowers <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Residency Status <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
 <th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>First Time Investor <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Employment Status <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Credit Score <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Actions <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
          </tr>
        </thead>
        <tbody>
        {currentData && currentData.length > 0 ? (
            currentData.map((property) => (
              <tr key={property.propertytype}>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.propertytype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.borrowercnt}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.propertytype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.zipcode}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.bankrupcy}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.loantype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.typeofloan}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.workstatus}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{property.creditscore}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}><button className='scenarios-btn' onClick={() => handleGetRatesClick(property)}>Get Rates</button></td>
 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No properties available</td>
            </tr>
          )}
        </tbody>
      </Table>
      </div>
      <div className='d-flex flex-row justify-content-center'>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
      </div>
      
        </div>
        </>
    )
}
export default Loscenarios;