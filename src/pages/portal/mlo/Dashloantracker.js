import { Table,Pagination } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Loan from './Loan';

function Dashloantracker(){
  const [loantracker, setLoanTracker] = useState([]);
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const [selectedOption,setSelectedOption]=useState('');
  const [options,setOptions]=useState([]);
  const [state,setState]=useState('')
  const [zip,setZip]= useState('');
  const dispatch = useDispatch();
  const [city,setCity]=useState('')
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 
  const [selectedLoan, setSelectedLoan] = useState([]);
  const [closeTheLoanData,setCloseTheLoanData] = useState(false)
  const [lender,setLender]=useState([])
  const [onlystate, setOnlyState] = useState([]);
  

  const [createLoanData,setCreateLoanData]=useState({
    louserid:userid,
    broker:'',
    lender:'',
    loannumber:'',
    loantype:'',
    rate:'',
    loanstate:'',
    proptype:'',
    addr1:'',
    addr2:'',
    zipcode:'',
    city:'',
    state:'',
    purchaseprice:'',
    loanamount:'',
    startdate:'',
    closedate:'',
    loanstatus:'',
    active:"",
    loanid:'',
    token:token
  })

  const [showLoanComponent, setShowLoanComponent] = useState(false);
  const [showLoanData,setShowLoanData]=useState(false)
  const [brokerNames,setBrokerNames]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = loantracker.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(loantracker.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '80vh', // Adjust as needed
      overflowY: 'auto',
    },
  };
  
  console.log("loantracker",loantracker)
//   Modal.setAppElement('#root');
  const userType = useSelector((state)=> state.user.usertype)
  useEffect(() => {
    const fetchPlaceInfo = async () => {
        if (zip.length === 3 || zip.length===4||zip.length===5) {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/getplaceinfo`, {
                    zipcode: zip
                }).then(response => {
                    const places =response.data.map(place =>({
                        city:place["placename"],
                        state:place["statename"]
                        
                    }))
                    
                    setOptions(places)
                    console.log("options",options)
                })
                // setResp(response)
                console.log(response);
            } catch (error) {
                setOptions([])
                console.log(error);
            }
        }
    };

    fetchPlaceInfo();
},[zip]);
  useEffect(() => {
    const fetchData = async () => {
        const requestData = {
          token:token,
          louser:userid
          };
          // console.log("requestData",requestData)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getnewloantracker`, {
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
        // setProperties(data);
        //  console.log('setdata',data)
        // const data = await response.json();
        // // console.log('Fetched data:', data);
  
        // if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
        //   setApproval(data.result_sets[1]);
        //   console.log('Properties Set:', data.result_sets[1]);
        const data = await response.json();
        console.log("stawtwetklj",data)
       
            setLoanTracker(data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userid,token,createLoanData]);  

  useEffect(() => {
    const fetchBrokername = async () => {
        const requestData = { broker: "" };
          // console.log('Request Data:', requestData);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getbroker`, {
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
        setBrokerNames(data);
        //  console.log('setdata',data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBrokername();
      }, []);

      const handleShowModal = () => {
        setShowSuccessMessage(false); // Reset success message
        setIsModalOpen(true);
      };

      useEffect(() => {
      
        const fetchLender = async () => {
          const requestData = { userid: userid };
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getbrokerlender`, {
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
            // dispatch(setLenderInformation({ lenderInformation: data }));
            console.log('setdata', data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        if (userid) {
         
          fetchLender();
        }
      }, []);
    
      console.log("brokerNames",brokerNames)

      useEffect(() => {
        const fetchState = async () => {
            const requestData = { broker: "" };
              // console.log('Request Data:', requestData);
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getcountrystates`, {
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
            setOnlyState(data);
            //  console.log('setdata',data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchState();
          }, []);

  const handlePropertySave =async () =>{
          // console.log("requestData",requestData)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setcreateloan`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify(createLoanData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
       
        // const data = await response.json();
        // setProperties(data);
        //  console.log('setdata',data)
        // const data = await response.json();
        // // console.log('Fetched data:', data);
  
        // if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
        //   setApproval(data.result_sets[1]);
        //   console.log('Properties Set:', data.result_sets[1]);
        const data = await response.json();
        setCreateLoanData(data)
        console.log("stawtwetklj",data)
       
            // setLoanTracker(data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const sanitizeInput = (value) => {
      return DOMPurify.sanitize(value);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   console.log("fhgj",value)
  //   const sanitizedValue = sanitizeInput(value);
  //   setCreateLoanData((prevState) => ({
  //     ...prevState,
  //     [name]: sanitizedValue,
  //   }));
  // };

  const generateInvoice =async  () => {
     const requestData = {
        invoiceNumber: "INV-1001",
        date: "2024-09-09",
        subtotal: 900,
        paid: 0,
        balanceDue: 900,
        company: {
          name: "HomeRatesYard",
          address: "Market Street",
          city: "Somewhere",
          state: "TX",
          zip: "54321"
        },
        customer: {
          name: "Jane Smith",
          address: "5678 Market Street",
          city: "Somewhere",
          state: "TX",
          zip: "54321"
        },
        items: [
          {
            item: "Loan Number - 123456",
            description: "Full  development with CMS integration",
            quantity: 1,
            amount: 900
          }
        ]
      };
   
     try {
       const response = await fetch('https://lendpdfapi.azurewebsites.net/invoice', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(requestData),
         Accept: "application/invoice",
       });
   
       if (!response.ok) {
         throw new Error('Failed to save the PDF data');
       }

       const blob = await response.blob(); // Get the PDF as a blob
    const url = window.URL.createObjectURL(blob); // Create a URL for the blob
    window.open(url);
       
     } catch (error) {
       console.error('Error saving PDF data:', error);
       alert('Failed to save PDF data.');
     }
   };


  const handleEditInputChange = (e) => {
    const { name, value } = e.target;

    console.log("fhgj",value)
    const sanitizedValue = sanitizeInput(value);
    setSelectedLoan((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));
  };

  const handleOptionSelect = (event) => {
    // debugger
    console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
    console.log("options",options)
    const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
    setSelectedOption(selected);
    console.log("selected",selected);
    setCreateLoanData((prevData) => ({
        ...prevData,
        city: selected?.city
    }));
    setCreateLoanData((prevData) => ({
        ...prevData,
        state: selected?.state
    }));
    // setLoUserData(selected.city);
    // setState(selected.state)  


}

const handleEditDataClick = (loanId) => {
  // Find the selected loan from the `loantracker` array
  const selectedLoan = loantracker.find(loan => loan.loanid === loanId);
  
  if (selectedLoan) {
    // Update state with selected loan details
    setCreateLoanData({
      louserid: userid || selectedLoan.mlouserid, // Assuming `userid` might be an override
      broker: parseInt(selectedLoan.brokerid) || '',
      lender: parseInt(selectedLoan.lenderid) || '',
      loannumber: selectedLoan.loannumber || '',
      loantype: selectedLoan.loantype || '',
      rate: selectedLoan.rate || '',
      loanstate: selectedLoan.loanstate || '',
      proptype: selectedLoan.propertytype || '',
      addr1: selectedLoan.propertyaddress1 || '',
      addr2: selectedLoan.propertyaddress2 || '',
      zipcode: selectedLoan.zipcode || '',
      city: selectedLoan.city || '',
      state: selectedLoan.state || '',
      purchaseprice: selectedLoan.purchaseprice || '',
      loanamount: selectedLoan.loanamount || '',
      startdate: selectedLoan.loanstartdate || '',
      closedate: selectedLoan.closingdate || '',
      loanstatus: selectedLoan.loanstatus || '',
      active: 1, // Default or calculated value for active
      loanid: selectedLoan.loanid || '',
      borrowerId: "",
      token: token || '' // Assuming `token` is needed or can be an empty string
    });
    // setLoanTracker(prevLoans => prevLoans.map(loan =>
    //   loan.loanid === createLoanData.loanid ? createLoanData : loan
    // ));
    setIsModalOpen(false);
    setIsModalOpen(true);
    // Open the modal or any UI component where the loan data will be edited
    // setShowSuccessMessage(true);
  } else {
    console.error('Loan not found');
  }
};


const handleSave = async () => {
  try{
  setIsSuccess(false);

  const updatedLoanData = {
      ...createLoanData,
      loanid: createLoanData.loanid,
  };

  console.log("updatedLoanData",updatedLoanData)

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setcreateloan`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLoanData),
  });
  
  const data  = await response.json();
  console.log('Success:', data);

  if (data) { // Assuming `data.success` indicates a successful save
      setIsSuccess(true); // Set success state to true
  } else {
      // Handle save failure (optional)
      setIsSuccess(false);
  }
} catch (error) {
  console.error('Error:', error);
  setIsSuccess(false); // Ensure success state is false on error
}
};


const handleEditButtonClick = (loanId,loan) => {
  handleEditDataClick(loanId);
  setIsModalOpen(true);
  setIsSuccess(false); // Reset success state when opening the modal
};


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setcreateloan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedLoan),
      });

      if (response.ok) {
        // Handle success (e.g., close modal, show a success message, etc.)
        closeModal();
        alert('Loan data saved successfully!');
      } else {
        // Handle error (e.g., show an error message)
        alert('Failed to save loan data.');
      }
    } catch (error) {
      // Handle network error
      alert('An error occurred while saving loan data.');
    }
  };

const handleZipInputChange = async (event) =>{
    setZip(event.target.value); 
    console.log("slkfdjksdljfj",zip)
   setCreateLoanData({
       ...createLoanData,
       zipcode: event.target.value
   }
   )
}
const handleEditClick = (loan) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLoan(null);
  };

const handleInput = (e) => {
    const { name, value } = e.target;
    console.log("name",name,value)
    const sanitizedValue = sanitizeInput(value);
    if (name === "startdate" || name === "enddate") {
        setStartDate(sanitizedValue); 
        setEndDate(sanitizedValue);
    }
    setCreateLoanData((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));
  };

  const handleshowLoanDataClose = (e) =>{
    setIsModalOpen(false)
  }
  const handleCreateLoanClick = () => {
    setShowLoanComponent(true);
};

const handleBrokerChange = (event) => {
  setCreateLoanData((prevState) => ({
   ...prevState,
   broker:event.target.value
  }));
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setCreateLoanData((prevData) => ({
      ...prevData,
      [name]: value
  }));
};


console.log("lender",lender)
  return(
        <>
          <div className="second-box mt-3">
            {/* <div className="d-flex flex-row justify-content-between p-2">
            <p className="advance-payments mx-4 mt-4">Advance Payments</p>
            <button className="btn btn-danger"  onClick={()=>setShowproperty(true)}>Add property</button>
            </div> */}
           {/* {(!closeTheLoanData || !showLoanData) && (<button className="scenarios-btn" style={{marginTop:"2rem",marginLeft:"50rem",marginBottom:"10px"}} onClick ={()=>{setShowLoanData(!showLoanData);setCloseTheLoanData(!closeTheLoanData)}}>Create Loan</button>)} */}

           <button className="scenarios-btn" style={{marginTop:"",marginLeft:"50rem",marginBottom:"10px"}} onClick ={()=>{setShowLoanData(!showLoanData);setCloseTheLoanData(!closeTheLoanData)}}>Create Loan</button>
          
          {!showLoanData ?( <>
          <div className='p-2'>
          <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
        <thead>
          <tr>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Property Address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Start Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Amount <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Loan Status <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
            <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Mortgage Brokers <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"50px",width:"160px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Mortgage Contact <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Company Url <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Estimated Closing Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Closed Date <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Actions <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
          </tr>
        </thead>
        <tbody>
        {currentData && currentData.length > 0 ? (
            currentData.map((loan,index) => (
              <tr key={index}>
                <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.propertyaddress1}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loanstartdate}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loanamount}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loname}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loanstatus}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.loantype}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan.brokername}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan?.contact}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan?.estClosedDate}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{loan?.ClosedDate}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>
                <a onClick={() => handleEditButtonClick(loan.loanid)} className=''>Edit</a>{loan?.actions}
                <a onClick={generateInvoice}>Generate Invoice</a>
                </td>
                
                {/* <button onClick={() => handleEditClick(loan.loanid)}>Edit Loan ID 1</button> */}
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
      <Modal size='xl' show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
      <div className="container">
      <div className="row mx-1">
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-2">MLO User ID</span><span style={{ color: 'red' }}>*</span>
              <div>
                  <input 
                      type='text'
                      className="dashboard-text" 
                      name="louserid" 
                      value={userid}
                      readOnly
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Loan User ID (Optional)</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      style={{ borderColor: "#CACED8" }}
                      placeholder="Eg: Loan User ID"
                      name="broker" // Update name attribute
                      value={createLoanData.broker}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
          <label>  <span className="property-text mt-2">Broker ID</span><span style={{ color: 'red' }}>*</span>
                <div>
                    <select 
                    className="dashboard-text"
                     id="brokerName"
                     name="broker" // Update name attribute
                     onChange={handleInputChange}
                     value={createLoanData.broker}
                    >
                         <option value="">Select Broker Id</option>
                      {brokerNames.map(broker => (
                          <option key={broker.brokerid} value={broker.brokerid}>
                              {broker.brokerid}
                          </option>
                      ))}
                    </select>
                </div>
                </label>
                </div>


                <div className="col-sm-12 col-md-4 mt-3">
          <label>  <span className="property-text mt-2">Lender ID</span><span style={{ color: 'red' }}>*</span>
                <div>
                    <select 
                    className="dashboard-text"
                    id="lender" 
                    name="lender" // Update name attribute
                    onChange={handleInputChange}
                    value={createLoanData.lender}
                    >
                     <option value="">Select Lender</option>
                      {lender.map(lenderItem => (
                          <option key={lenderItem.brokerid} value={lenderItem.brokerid}>
                              {lenderItem.brokerid}
                          </option>
                      ))}
                    </select>
                </div>
                </label>
                </div>

          <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-2">Loan Type</span>
              <div>
                  <select 
                      className="dashboard-text" 
                      name="loantype" // Update name attribute
                      value={createLoanData.loantype}
                      onChange={handleInputChange}
                  >
                      <option value="">Select Loan Program</option>
                      <option value="Fixed">Fixed</option>
                      <option value="ARM">ARM</option>
                  </select>
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Loan Number</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: Loan Number"
                      name="loannumber" // Update name attribute
                      value={createLoanData.loannumber}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Rate %</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: 0%"
                      name="rate" // Update name attribute
                      value={createLoanData.rate}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
          <label>  <span className="property-text mt-2">Loan State</span>
                <div>
                    <select 
                    className="dashboard-text"
                    name="loanstate" // Update name attribute
                      value={createLoanData.loanstate}
                      onChange={handleInputChange}
                    >
                     <option value="">Select State</option>
                      {onlystate.map((state) => (
                          <option key={state.countrystateid} value={state.state}>
                              {state.state}
                          </option>
                      ))}
                    </select>
                </div>
                </label>
                </div>

          <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-2">Property Type</span>
              <div>
                  <select 
                      className="dashboard-text" 
                      name="proptype" // Update name attribute
                      value={createLoanData.proptype}
                      onChange={handleInputChange}
                  >
                      <option value="">Select Property Type</option>
                      <option value="Type1">Type1</option>
                      <option value="Type2">Type2</option>
                      <option value="Type3">Type3</option>
                  </select>
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Property Address 1</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: Address 1"
                      name="addr1" // Update name attribute
                      value={createLoanData.addr1}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Property Address 2</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: Address 2"
                      name="addr2" // Update name attribute
                      value={createLoanData.addr2}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="profile-name">Zip Code</span>
              <div>
                  <input type='text' 
                  className="dashboard-text"  
                  placeholder="Enter Value"
                  name="zipcode"
                  id="zipcode"
                  style={{fontSize: '15px'}}
                  value={createLoanData.zipcode} 
                  maxLength={5}
                  onChange={handleZipInputChange} />
                       { options.length>0 && createLoanData.zip!==null && zip.length!==0 && 
    <div className="col-sm-12  col-md-6 col-lg-6">
          <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-selecttextbox" style={{width:"381px"}} >
              <option value="">{`:Select city and state...`}</option>
              {options.map((option,index) => (
                  <option key={index} value={`${option.city},${option.state}`}>
                      {option.city} {option.state}
                  </option>
              ))}
          </select>
      </div>
      }
  
              </div>
              </div>
  
              <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="profile-name">City</span>
              <div>
                  <input type='text' 
                  className="dashboard-text"  
                  placeholder="Enter Value"
                  name="city"
                  id="city"
                  style={{fontSize: '15px'}} 
                  value={createLoanData.city} 
                  onChange={handleInputChange}/>
              </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="profile-name">State</span>
              <div>
                  <input type='text' 
                  className="dashboard-text"  
                  placeholder="Enter Value"
                  name="state"
                  id="state"
                  style={{fontSize: '15px'}}
                  value={createLoanData.state}  
                  onChange={handleInputChange}/>
              </div>
              </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Purchase Price</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: 1000"
                      name="purchaseprice" // Update name attribute
                      value={createLoanData.purchaseprice}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Loan Amount</span>
              <div>
                  <input
                      type='text'
                      className="dashboard-text"
                      placeholder="Eg: 1000"
                      name="loanamount" // Update name attribute
                      value={createLoanData.loanamount}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Application Date</span>
              <div>
                  <input
                      type='date'
                      className="dashboard-text p-2"
                      placeholder="Enter Loan Start Date"
                      name="startdate" // Update name attribute
                      value={createLoanData.startdate}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <span className="property-text mt-2">Expecting Closing Date</span>
              <div>
                  <input
                      type='date'
                      className="dashboard-text"
                      placeholder="Enter Loan End Date"
                      name="closedate" // Update name attribute
                      value={createLoanData.closedate}
                      onChange={handleInputChange}
                  />
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <span className="property-text mt-2">Loan Status</span>
              <div>
                  <select 
                      className="dashboard-text" 
                      name="loanstatus" // Update name attribute
                      value={createLoanData.loanstatus}
                      onChange={handleInputChange}
                  >
                      <option value="">Select Status</option>
                      <option value="Applied">Applied</option>
                      <option value="Submitted">Submitted</option>
                      <option value="CTC">CTC</option>
                      <option value="Docs">Docs</option>
                      <option value="Funding">Funding</option>
                      <option value="Closed">Closed</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Withdrawn">Withdrawn</option>
                      <option value="Rejected">Rejected</option>
                  </select>
              </div>
          </div>
          
          <div className="d-flex flex-row justify-content-end">
              <button className="lobutton m-2" >Reset </button>
              <button className="lobutton m-2" onClick={handleshowLoanDataClose}>Close </button>
              <button className="lobutton m-2" onClick={handleSave}>Save</button>
          </div>
      </div>
      {isSuccess && (
              <div className="alert alert-success" role="alert">
                  Data saved successfully!
              </div>
          )}
  </div>
         </Modal.Body>
      </Modal></>)
      : <Loan/>}
</div>
        </>
    )
}

export default Dashloantracker;