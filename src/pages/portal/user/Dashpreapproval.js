import { Table,Pagination } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Modal, Form } from 'react-bootstrap';
import DOMPurify from 'dompurify';


function Dashpreapproval(){
  const [approval, setApproval] = useState([]);
  const [showTextField, setShowTextField] = useState(false);
  const [preapproval, setPreApproval] = useState([]);
  const [EditmodalShow, setEditModalShow] = React.useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = approval.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(approval.length / itemsPerPage);

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserpreapproval`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setApproval(data);
        } else {
          setApproval([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userid]); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setpreapproval`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preapproval),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Updated Property:', data);
      onHide(); 
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    if (type === 'checkbox') {
      setPreApproval((prevData) => ({
        ...prevData,
        [name]: checked,
        borrower2: {
          ...prevData.borrower2,
          additionalFirstName: '',
          additionalLastName: '',
        },
      }));
    } else if (name === 'borrowers') {
      setPreApproval((prevData) => ({
        ...prevData,
        borrowers: sanitizedValue,
        borrower2: sanitizedValue === 'yes' ? {
          additionalFirstName: '',
          additionalLastName: '',
        } : prevData.borrower2,
      }));
    } else if (name === 'firstName' || name === 'lastName') {
      setPreApproval((prevData) => ({
        ...prevData,
        borrower1: {
          ...prevData.borrower1,
          [name]: sanitizedValue,
        },
      }));
    } else if (name === 'additionalFirstName' || name === 'additionalLastName') {
      setPreApproval((prevData) => ({
        ...prevData,
        borrower2: {
          ...prevData.borrower2,
          [name]: sanitizedValue,
        },
      }));
    } else if (name === 'address' || name === 'city' || name === 'zip') {
      setPreApproval((prevData) => ({
        ...prevData,
        propertyaddress: {
          ...prevData.propertyaddress,
          [name]: sanitizedValue,
        },
      }));
    } else {
      setPreApproval((prevData) => ({
        ...prevData,
        [name]: sanitizedValue,
      }));
    }
  };

  const handleYesClick = async () => {
    if (selectedRow) {
      const updatedRow = {borrower1:selectedRow.borrowerfullname1,
                          borrower2:selectedRow.borrowerfullname2,
                          downpercent:selectedRow.downpaypercent,
                          email:selectedRow.emailaddress,
                          proptypes:selectedRow.propertytype,
                          borrowers:selectedRow.noofborrowers,
                          salesprice:selectedRow.salespriceupto,
                          trantype:selectedRow.transactiontype,
                          requestdate:selectedRow.requestdate,
                          propertyaddress:selectedRow.propertyaddress,
                          zipcode:selectedRow.zipcode,
                          term:selectedRow.term,
                          state:selectedRow.state,
                          occupancytype:selectedRow.occupancytype,
                          mobile:selectedRow.mobile,
                          louserid:selectedRow.louserid,
                          loanprogram:selectedRow.loanprogram,
                          letterissuedon:selectedRow.letterissuedon,
                          homephone:selectedRow.homephone,
                          city:selectedRow.city,
                          doctype:selectedRow.doctype,
                          loanamountpercent:selectedRow.loanamountpercent,
                          active: 0 }; // Set active to 0

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setpreapproval`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRow),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Updated Property:', data);
        // You can update the table with the new data or refetch
        setApproval((prev) => prev.map((item) => (item.id === selectedRow.id ? updatedRow : item)));
      } catch (error) {
        console.error('Error updating property:', error);
      }
    }
    setShowCloseModal(false); // Close the modal after action
  };

  const handleCloseRequest = (log) => {
    setSelectedRow(log);
    setShowCloseModal(true);
  };


  const handleChangeYes = (event) => {
    if (event.target.value === 'yes') {
      setShowTextField(true);
    } else {
      setShowTextField(false);
    }
  };
  
  
  const handleEdit= async (log)=>{
    setPreApproval(log)
    setEditModalShow(true);
  }

  const handleNoClick = () => {
    setShowCloseModal(false); // Close the modal
  };

  return(
        <>
          <div className="dash-table mt-3 p-2">
             <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
        <thead>
          <tr>
          <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>  
          <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Type <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
        <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Purchase value <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Status <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lo Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lo Phone Number <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lo Email address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Action <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
          </tr>
        </thead>
        <tbody>
        {currentData && currentData.length > 0 ? (
            currentData.map((log) => (
              <tr key={log.logid}>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.requestdate}</td>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.loanprogram}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.propertyaddress}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.salespriceupto}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.occupancytype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.state}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.loantype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.loantype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{log.loantype}</td>
                
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>
                <a href="#" onClick={() => handleEdit(log)}>Edit Details</a><br/>
                <a href='#'>Quick Chat</a><br/>
                <a href='#'>View letter</a><br/>
                <a href='#' onClick={() => handleCloseRequest(log)}>Close Request</a>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No properties available</td>
            </tr>
          )}
        </tbody>
      </Table>
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

      <Modal 
      show={EditmodalShow}
      onHide={() => setEditModalShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        {/* <Modal.Title>Edit Property</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
      {preapproval && (
        <div>
        <Form onSubmit={handleSubmit}>

        <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="firstName">
                  <Form.Label className='form-label first-name'>First Name</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter your first name"
                    name="firstName"
                    value={preapproval.borrowerfullname1 || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="lastName">
                  <Form.Label className='form-label first-name'>Last Name</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter your last name"
                    name="lastName"
                    value={preapproval.borrower1 || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="email">
                  <Form.Label className='form-label first-name'>Email address</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter your email"
                    name="emailaddress"
                    value={preapproval.emailaddress || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>
              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className='form-group'>
                  <Form.Label as="legend" className='first-name'>
                     Multiple Borrowers
                  </Form.Label>
                  <div className='d-flex'>
                  <Form.Check
                    type="radio"
                    className='first-name'
                    label="Yes"
                    name="borrowers"
                    value="yes"
                    checked={preapproval.noofborrowers === 'yes' || ''}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleChangeYes(e);
                    }}
                  />
                  <Form.Check
                    type="radio"
                    className='first-name'
                    label="No"
                    name="borrowers"
                    value="no"
                    checked={preapproval.noofborrowers === 'no' || ''}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleChangeYes(e);
                    }}
                  />
                </div>
                </Form.Group>
              </label>
              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="mobile">
                  <Form.Label className='form-label first-name'>Mobile</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter your mobile number"
                    name="mobile"
                    value={preapproval.mobile || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>
              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="homephone">
                  <Form.Label className='form-label first-name'>Home Phone</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter your home phone"
                    name="homephone"
                    value={preapproval.homephone || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>
              {showTextField && (
                <>
                  <label className='col-md-4 col-sm-6 px-2'>
                    <Form.Group className='form-group' controlId="additionalFirstName">
                      <Form.Label className='form-label first-name'>Additional First Name</Form.Label>
                      <input
                        className='Support-text'
                        placeholder="Enter additional first name"
                        name="additionalFirstName"
                    value={preapproval.borrowerfullname2 || ''}
                    onChange={handleInputChange}
                      />
                    </Form.Group>
                  </label>

                  <label className='col-md-4 col-sm-6 px-2'>
                    <Form.Group className='form-group' controlId="additionalLastName">
                      <Form.Label className='form-label first-name'>Additional Last Name</Form.Label>
                      <input
                        className='Support-text'
                        placeholder="Enter additional last name"
                        name="additionalLastName"
                    value={preapproval.borrowerfullname2 || ''}
                    onChange={handleInputChange}
                      />
                    </Form.Group>
                  </label>
                </>
              )}
               <label className='col-md-4 col-sm-6 px-2' >
                <Form.Group className="form-group" controlId="trantype">
                  <Form.Label className='form-label first-name'>Tran Type</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="transactiontype"
                    value={preapproval.transactiontype || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tran Type</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Refinance Cash out">Refinance Cash out </option>
                     <option value="Heloc">Heloc</option>
                    <option value="Home Equity">Home Equity </option>
                  </select>
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="fromoccupancytype">
                  <Form.Label className='form-label first-name'>Occupancy Type</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="occupancytype"
                    value={preapproval.occupancytype || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Occupancy Type</option>
                    <option value="Primary">Primary </option>
                    <option value="Investment">Investment</option>
                    <option value="Fixed">Fixed</option>
                  </select>
                </Form.Group>
              </label>
              <label className='col-md-4 col-sm-6 px-2'>
          <Form.Group className="form-group" controlId="proptype">
                  <Form.Label className='form-label first-name'>Property Type</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="propertytype"
                    value={preapproval.propertytype || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Property Type</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Condo">Condo </option>
                    <option value="Town House">Town House </option>
                    <option value="Multi-Family">Multi-Family </option>
                    <option value="Carriage Home">Carriage Home</option>
                   
                  </select>
                </Form.Group>
          </label>
          <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="salesprice">
                  <Form.Label className='form-label first-name'>Sales Price</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter sales price"
                    name="salesprice"
                    value={preapproval.salespriceupto || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="downpercent">
                  <Form.Label className='form-label first-name'>Down Payment Percent</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter down payment percent"
                    name="downpercent"
                    value={preapproval.downpaypercent || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="address">
                  <Form.Label className='form-label first-name'>Address</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter property address"
                    name="propertyaddress"
                    value={preapproval.propertyaddress || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="city">
                  <Form.Label className='form-label first-name'>City</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter city"
                    name="city"
                    value={preapproval.city || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="zip">
                  <Form.Label className='form-label first-name'>Zip</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter zip"
                    name="zip"
                    value={preapproval.zipcode || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="state">
                  <Form.Label className='form-label first-name'>State</Form.Label>
                  <input
                    className='Support-text'
                    placeholder="Enter state"
                    name="state"
                    value={preapproval.state || ''}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="doctype">
                  <Form.Label className='form-label first-name'>Doc Type</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="doctype"
                    value={preapproval.doctype || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Doc Type</option>
                    <option value="Full Doc">Full Doc</option>
                    <option value="Non-QM">Non-QM</option>
                    <option value="DSCR">DSCR</option>
                  </select>
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="loanprogram">
                  <Form.Label className='form-label first-name'>Loan Program</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="loanprogram"
                    value={preapproval.loanprogram || ''}
                    onChange={handleInputChange}
                  >
                    <option value=""><p className='preselect'>Select Loan Program</p></option>
                    <option value="Fixed">Fixed</option>
                    <option value="ARM">ARM</option>
                   
                  </select>
                </Form.Group>
              </label>

              <label className='col-md-4 col-sm-6 px-2'>
                <Form.Group className="form-group" controlId="term">
                  <Form.Label className='form-label first-name'>Term</Form.Label>
                  <select
                    className='Support-text'
                    style={{border:"transparent" }}
                    name="term"
                    value={preapproval.term || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Term</option>
                    <option value="30">30 Fixed</option>
                    <option value="20">20 Fixed</option>
                    <option value="15">15 fixed</option>
                    <option value="5"> 5/6 ARM</option>
                    <option value="7">7/6 ARM </option>
                    <option value="1">10/6 ARM </option>
                  </select>
                </Form.Group>
              </label>
              <div className='col-sm-12 col-md-12 d-flex flex-row justify-content-end'>
              <button variant="primary" type="submit" className='prebutton1 mt-2'>
            Save Changes
          </button>
              </div>
        </Form>
      </div>
      )}
      </Modal.Body>
    </Modal>

    <Modal show={showCloseModal} size="lg" onHide={handleNoClick}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Close Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
          <p className='text-center'>
          Are you sure you want to close this Loan?
          </p>
        <button className='lobutton mx-2' onClick={handleNoClick}>
            No
          </button>
          <button className='lobutton' onClick={handleYesClick}>
            Yes
          </button>
          </div>
        </Modal.Body>
      </Modal>

        </>
    )
}

export default Dashpreapproval;