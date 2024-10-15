import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import { useSelector } from "react-redux";
import { Table,Pagination } from 'react-bootstrap';
import { Modal, Button, Spinner } from 'react-bootstrap';

function Lender() {
  const token = useSelector(state=> state.auth.token);
    const [lenderdata, setLenderData] = useState({
        lendertype: "",
        lendername: "",
        lenderid:"",
        email: "",
        phone: "",
        rate:"",
        website: "",
        descrip: "",
        nmls: "",
        fax: "",
        active: "",
        token:token,
        // lenderid: "",
    });
    const[lendersuccess,setLenderSuccess]=useState(false);
    const[loading,setLoading]=useState();
    const[error,setError]=useState();
    const [tableData, setTableData] = useState([]);
    const [showLenderData,setShowLenderData] = useState(false) 
    const [lender,setLender]=useState([])
    const userid = useSelector(state=> state.auth.userid);
    const [closeTheLenderData,setCloseTheLenderData] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = lender.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(lender.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    

      
        const fetchLender = async () => {
          const requestData = { userid: userid };
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getlender`, {
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
            setLender(data);
            console.log('lenderdata', data);
            dispatch(setLenderInformation({ lenderInformation: data }));
            console.log('setdata', data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        useEffect(() => {
        if (userid) { 
          fetchLender();
        }
      }, [userid]);

    const sanitizeInput = (value) => {
        return DOMPurify.sanitize(value);
    };

    const handleLenderChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setLenderData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
        }));
    };

    const handleActiveChange = (value) => {
        // const { value } = e.target;
        setLenderData((prevData) => ({
            ...prevData,
            active: value === 'Yes' ? 1 : 0,
        }));
    };

    const handleSubmitLender = async (e) => {
        e.preventDefault()
        setLoading(true);
        setError(null);
        setLenderSuccess(null);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlender`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...lenderdata}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); 
            // console.log(data);
            setLenderSuccess('Data saved successfully');
            fetchLender();
            setTableData((prevData) => [...prevData, lenderdata]);
            setLenderData({
                lendertype: "",
                lendername: "",
                email: "",
                descrip: "",
                phone: "",
                fax: "",
                website: "",
                active: "",
                // lenderid: "",
                nmls: "",
                rate:"",
            });
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };


    const handleshowLoanDataClose = (e) =>{
        setShowLenderData(false)
          }

          const handleCloseSuccess =(e) =>{
            setLenderSuccess(false)
          }
    return (
        <>
          {(!closeTheLenderData ||!showLenderData) && (<button className="prebutton1" style={{marginTop:"",marginLeft:"50rem"}}onClick ={()=>{setShowLenderData(!showLenderData);;setCloseTheLenderData(!closeTheLenderData)}}>Add Lender</button>)}
        {!showLenderData && lender.length > 0 ? (
                <div className="row mt-2">
                    <div className="col-sm-12">
                    <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
        <thead>
          <tr>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>LenderName <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Email <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Description <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Phone <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Fax <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
{/* <th className='dash-table-text' style={{height:"50px",width:"160px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>First Time Investor<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th> */}
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Web Site <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Active <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender id  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>NMLS <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
          </tr>
        </thead>
        <tbody>
        {currentData.map((item, index) => (
                                    <tr key={index}>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lendertype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lendername}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.email}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.description}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.phone}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.fax}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.website}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.active}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.lenderid}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{item.nmls}</td>
              </tr>
            ))}
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
            ):
          <div className="row p-4">
                <div className="col-sm-12 col-md-9">
                    
                </div> 
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Name</span>
                    <div>
                        <input
                            type='text'
                            className="dashboard-text"
                            placeholder="Zone 1"
                            // style={{ fontSize: '15px' }} 
                            // id="lendername" 
                            name="lendername" 
                            value={lenderdata.lendername} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Type</span>
                    <div>
                        <select className="dashboard-text" 
                            // style={{ fontSize: '15px' }}
                            // id="lendertype" 
                            name="lendertype" 
                            value={lenderdata.lendertype} 
                            onChange={handleLenderChange}>
                            <option value="Wholesale">Wholesale</option>
                            <option value="Retail">Retail</option>
                            <option value="Other">Other</option>
                            
                            {/* <option>Zone 3</option>
                            <option>Zone 4</option>
                            <option>Zone 5</option>
                            <option>Zone 6</option> */}
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Email</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }} 
                            // id="email" 
                            name="email" 
                            value={lenderdata.email} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Mobile</span>
                    <div>
                        <input 
                            type='text'
                            className="dashboard-text"  
                            placeholder="9120000000"
                            // style={{ fontSize: '15px' }} 
                            // id="phone" 
                            name="phone" 
                            value={lenderdata.phone} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Rate</span>
                    <div>
                        <input 
                            type='text'  
                            className="dashboard-text" 
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }}
                            // id="rate" 
                            name="rate" 
                            value={lenderdata.rate} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Website</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }} 
                            // id="website" 
                            name="website" 
                            value={lenderdata.website} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Fax</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }} 
                            // id="fax" 
                            name="fax" 
                            value={lenderdata.fax} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Lender Nmls</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }} 
                            // id="nmls" 
                            name="nmls" 
                            value={lenderdata.nmls} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <span className="profile-name">Description</span>
                    <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            // style={{ fontSize: '15px' }} 
                            // id="decrip" 
                            name="descrip" 
                            value={lenderdata.descrip} 
                            onChange={handleLenderChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                <span className="profile-name">Active</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="checkbox"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={lenderdata.active === 1}
                                            onChange={(e) => handleActiveChange(e.target.value)}
                                        />
                                        
                                     <label>Yes</label>
                                     </div>
                                        <div className="m-1">
                                        <input 
                                            type='checkbox'
                                            label='No'
                                            value='No'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={lenderdata.active === 0}
                                            onChange={(e) => handleActiveChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                </div>
        
                <div className="col-sm-12 col-md-8 d-flex justify-content-end mx-5">
                    <button className="lobutton m-2" onClick={handleSubmitLender}>Save</button>
                    <button className="lobutton m-2" onClick={handleshowLoanDataClose}>Close</button>
                </div>
                
            </div> 
            } 
            <Modal size='lg' show={lendersuccess} onHide={handleCloseSuccess}>
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5 className="text-center">{lendersuccess}</h5></Modal.Body>
                <Modal.Footer>
                  <button className="lobutton" onClick={handleCloseSuccess}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>

            
        </>
    );
}

export default Lender;
