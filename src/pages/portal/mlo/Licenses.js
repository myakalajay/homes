import React,{useState,useEffect} from "react";
import Lender from "./Lender";
import { Table ,Pagination} from 'react-bootstrap';
import Addlender from "./Addlender";
import Dashproperty from '@/pages/portal/user/Dashproperty';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { Modal, Button, Spinner } from 'react-bootstrap';


function Licenses(){
  const [zip,setZip]= useState('');
  const [options,setOptions]=useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useSelector((state) => state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const [modalShow, setModalShow] = useState(false);
  const [showmodallendersuccess, setShowModalLenderSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [properties, setProperties] = useState([]);
  const [brokername, setBrokerName] = useState([]);
  const [brokerid, setBrokerid] = useState([]);
  const [state, setState] = useState([]);
  const [showlender,setShowLender]=useState(false);
  const [activeBut, setActiveBut] = useState('licenses'); 
  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showmodalsuccess,setShowModalSuccess]=useState(false);
  const [showTableAndButton, setShowTableAndButton] = useState(true);
  const [lenderPopUp,setLenderPopUp] = useState(false)
  const [showBrokerData,setShowBrokerData] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const[lenderupdate,setLenderUpdate]=useState('');
    const [selectedStates, setSelectedStates] = useState([]); // License States
    const [selectedState, setSelectedState] = useState(null);
    const [items, setItems] = useState([]);
    const [showCloseModal, setShowCloseModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  // const lendInfo=useSelector(state=>state.lender?.lenderInformation)
  // console.log("lenderInformation",lendInfo)
  const [brokerData, setBrokerData] = useState({
    brokername: "",
    contact: "",
    email: "",
    addr1:"",
    addr2:"",
    state:"",
    city:"",
    zipcode:"",
    mobile: "",
    fax:"",
    nmls:"",
    website:"",
    appllink:"",
    shortlink:"",
    smsconsent:"",
});

  const [lenderdata, setLenderData] = useState({
    // lendertype: "",
    // lendername: "",
    userid:userId,
    // borkerid:"",
    // lenderid:"",
    decrip: "",
    startdate:"",
    enddate:"",
    poc:"",
    email: "",
    mobile: "",
    rate:"",
    // nmls: "",
    // fax: "",
    // active: "",
    // lenderid: "",
});
    const [licensesData, setLicensesData] = useState({
        user: userId,
        broker: "",
        startdate:"",
        enddate:"",
        rate:"",
        ratepct:"",
        appllink:"",
        shortlink:"",
        active:"",
        state: "",
        states: selectedStates,
        // broker: "",
        // mobile: "",
        // nmls:"",
        // website:"",
        // email: "",
        // startdate:"",
        // enddate:"",
        // rate:"",
        // rateprc:"",
        // disc:"",
        // contact: "",
        // addr1:"",
        // addr2:"",
        // city:"",
        // zipcode:"",
        // fax:"",
        // appllink:"",
        // shortlink:"",
        // smsconsent:"",
        // ratepct:"",
    });
    const [lender,setLender] =useState(null)
    const userid = useSelector(state=> state.auth.userid);
    const dispatch=useDispatch();
    const [selectedBroker, setSelectedBroker] = useState({
      brokername: "",
      contact: "",
      email: "",
      addr1:"",
      addr2:"",
      state:"",
      city:"",
      zipcode:"",
      mobile: "",
      fax:"",
      nmls:"",
      website:"",
      appllink:"",
      shortlink:"",
      smsconsent:"",
    });
    const [mortgageCompanies,setMortgageCompanies] = useState(null)
    const [selectedLender, setSelectedLender] = useState(null);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [lenderButtonVisible, setLenderButtonVisible] = useState(true);

    const [currentlicensesPage, setCurrentLicensesPage] = useState(1);
  const itemsLicensesPerPage = 5;
  const indexOfLastItemLicenses = currentlicensesPage * itemsLicensesPerPage;
  const indexOfFirstItemLicenses = indexOfLastItemLicenses - itemsLicensesPerPage;
  const currentLicensesData = license ? license.slice(indexOfFirstItemLicenses, indexOfLastItemLicenses):[];
  
  const totalLicensesPages = license ? Math.ceil(license.length / itemsLicensesPerPage):0;

  const handlePageLicensesChange = (pagesNumber) => {
    setCurrentLicensesPage(pagesNumber);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = lender ? lender.slice(indexOfFirstItem, indexOfLastItem):[];
  
  const totalPages = lender ? Math.ceil(lender.length / itemsPerPage):0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    

    const sanitizeInput = (value) => {
      return DOMPurify.sanitize(value);
  };
  const handleEditBrokerClick = ()=> {
    // setBrokerData();
    if (selectedBroker) {
      // Use the selectedBroker data to prefill the details or perform other actions
      console.log('Editing Broker:', selectedBroker);
  } else {
      console.log('No broker selected');
  }
    setIsModalOpen(true);
  };

  const handleModalLenderSuccessClose = () =>{
    setShowModalLenderSuccess(false);
    // setShowLender(showlender)
  }

  const handleEditLenderClick = ()=> {
    // setBrokerData();
    setModalShow(true);
  };

  const closeLenderModal = () => {
    setModalShow(false);
    // setSelectedBroker(null);
  };

  const handlelenderDataClose = (e) =>{
    setLenderPopUp(false)
    setLenderButtonVisible(true)
}

const handlelicensesDataClose =(e)=>{
  setButtonVisible(true)
  setShowLender(false)
}

  const handleshowLoanDataClose = (e) =>{
    setLenderButtonVisible(true)
    setShowBrokerData(true)
   
}
  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage('');
    // setSelectedBroker(null);
  };
  
  const handleZipInputChange = async (event) =>{
    // debugger
    setZip(event.target.value); 
    console.log(zip)
    setBrokerData({
       ...brokerData,
       zipcode: event.target.value
   }
   )
}

  const handlesetBrokerChange = (value) => {
    console.log("bdg",value)
    setBrokerData((prevData) => ({
        ...prevData,
        smsconsent: value === 'Yes' ? 1 : 0,
    }));
};

console.log("brsdfd",brokerData)
const handleBrokerChange = (e) => {
  const { name, value } = e.target;
  setSelectedBroker((prevData) => ({
      ...prevData,
      [name]: value,
  }));
};

  const handleSubmitUser = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setbroker`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(brokerData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json(); // Assuming the response contains JSON data
      console.log("ddd",data); // Handle success response
      
      setSuccessMessage('Data saved successfully!'); // Show success message
    } catch (error) {
      console.error(error); // Handle error
      setSuccessMessage('Failed to save data.'); // Show failure message
    }
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
          dispatch(setLenderInformation({ lenderInformation: data }));
          console.log('setdata', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
       
        fetchLender();
    }, [lenderupdate]);

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
          setBrokerName(data);
          setBrokerid(data);
           console.log('setdata',data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchBrokername();
        }, []);

    
    const handleLicensesChange = (event) => {
        const { name, value } = event.target;
        // console.log("nsme,value",name,value)
        const brokerId = event.target.value;
        const broker = brokername.find(b => b.brokerid === parseInt(brokerId));
        setSelectedBroker(broker);
        const sanitizedValue = DOMPurify.sanitize(value);
        setLicensesData((prevData) => ({
            ...prevData,
            [name]: sanitizedValue,
        }));
    };
    console.log("broker",licensesData);

  
    const handleLenderChange = (e) => {
      const { name, value } = e.target;
      const sanitizedValue = sanitizeInput(value);
      setLenderData((prevData) => ({
          ...prevData,
          [name]: sanitizedValue,
      }));
  };

  const handleActiveChange = (value) => {
      setLenderData((prevData) => ({
          ...prevData,
          active: value === 'Yes' ? 1 : 0,
      }));
  };

  const handleSubmitLender = async (e) => {
    e.preventDefault()
        setLoading(true);
        setError(null);
    setShowModalLenderSuccess(null);
      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setbrokerlender`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(lenderdata),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          setShowModalLenderSuccess('Data saved successfully');
          setTableData((prevData) => [...prevData, lenderdata]);
          setLenderUpdate(response);
          setLenderData({
              userid:userId,
              // borkerid:"",q
              // lenderid:"",
              decrip: "",
              startdate:"",
              enddate:"",
              poc:"",
              email: "",
              mobile: "",
              rate:"",
                  });
          
                  console.log(showmodalsuccess)
                } catch (error) {
                  console.error('Error submitting form:', error);
                } finally {
                  setLoading(false);
                }
              };

          // useEffect(() => {
          //   const fetchState = async () => {
          //       const requestData = { broker: "" };
          //         // console.log('Request Data:', requestData);
          //     try {
          //       const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getcountrystates`, {
          //         method: 'POST',
          //         headers: {
          //           'Content-Type': 'application/json',
          //           // Add any other headers as needed
          //         },
          //         body: JSON.stringify(requestData),
          //       });
          //       if (!response.ok) {
          //           throw new Error('Network response was not ok');
          //         }
               
          //       const data = await response.json();
          //       setState(data);
          //       //  console.log('setdata',data)
          //     } catch (error) {
          //       console.error('Error fetching data:', error);
          //     }
          //   };
          //   fetchState();
          //     }, []);

              useEffect(() => {
                const fetchLicense = async () => {
                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getloLicense`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ userid:userId }),
                    });
            
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
            
                    const data = await response.json();
                    // setLicense(data);
                    if (Array.isArray(data) && data.length > 0) {
                      setLicense(data);
                    } else {
                      setLicense([]);
                    }
                  } catch (error) {
                    setError(error.message);
                  }
                };
            
                fetchLicense();
              },[licensesData]);
              console.log("license",license)

              
    const handleSubmitLicenses = async () => {
        try {
            // Parsing rate and rateprc to ensure they are numbers
            const parsedRate = parseFloat(licensesData.rate);
            const parsedRatePrc = parseFloat(licensesData.rateprc);

            if (isNaN(parsedRate) || isNaN(parsedRatePrc)) {
                throw new Error('Rate and Rate Percentage must be valid numbers');
            }

            // ${process.env.NEXT_API_URL}/api/v1/auth/setuserprofile
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlobrokerlicense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...licensesData,
                    rate: parsedRate,
                    rateprc: parsedRatePrc,
                    // user:userId,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Assuming the response contains JSON data
            console.log(data); // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const payload = {
        state: licensesData.state,
        broker: licensesData.broker,
        startdate:licensesData.startdate,
        enddate:licensesData.enddate,
        rate: parseInt(licensesData.rate),
        ratepct: parseInt(licensesData.ratepct),
        appllink: licensesData.appllink,
        shortlink: licensesData.shortlink,
        // active: licensesData.active,
        active:"1",
        user: userId
      };
    
      const handleSave = async (e) => {
        e.preventDefault()
        setLoading(true);
        setError(null);
        setShowModalSuccess(null);
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlobrokerlicense`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          setShowModalSuccess('Data saved successfully');
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const handleYesClick = async () => {
        if (selectedRow) {
          const updatedRow = {brokerid:selectedRow.brokerid,
                              brokername:selectedRow.brokername,
                              enddate:selectedRow.enddate,
                              isactive:0,
                              lolicenseid:selectedRow.lolicenseid,
                              louserid:selectedRow.louserid,
                              rate:selectedRow.rate,
                              ratepct:selectedRow.ratepct,
                              startdate:selectedRow.startdate,
                              state:selectedRow.state,
                             }; // Set active to 0
    
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setlobrokerlicense`, {
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
            setLicense((prev) => prev.map((item) => (item.id === selectedRow.id ? updatedRow : item)));
          } catch (error) {
            console.error('Error updating property:', error);
          }
        }
        setShowCloseModal(false); // Close the modal after action
      };

    const handleAmortizationButtonClick = () => {
        setActiveBut('lender');
        // setShowAmortizationData(true);
        setLenderButtonVisible(true)
        setShowLender(true);
        
    };
  
    const handleBreakupButtonClick = () => {
      setActiveBut('licenses'); 
      setShowLender(false);
      setButtonVisible(true)

    //   setShowAmortizationData(false);
  };

  const handlePropertyTypeClick= () =>{
    // setDisplayPopUP(!displayPopUp);
    setShowLender(!showlender)
    
      setButtonVisible(false);
  
  }

  const handleLenderTypeClick =()=>{
    setLenderPopUp(!lenderPopUp)
    setLenderButtonVisible(false)
    // setShowLender(true)
  }

  console.log("showlender",showlender)

  useEffect(() => {
    const fetchMortgageCompanies = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getlender`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
       
        const data = await response.json();
        setMortgageCompanies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMortgageCompanies();
      }, []);

    
      const handleLenderDataChange = (event) => {
        // const { name, value } = e.target;
        // console.log("nsme,value",name,value)
        const brokerId = event.target.value;
        
        const broker = mortgageCompanies.find(b => b.lendername === brokerId);
        setSelectedLender(broker);
        // const sanitizedValue = DOMPurify.sanitize(value);
        // setLicensesData((prevData) => ({
        //     ...prevData,
        //     [name]: sanitizedValue,
        // }));
    };
    console.log("broker",selectedLender);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getcountrystates`, {
            method: 'POST', // Use POST method
            headers: {
              'Content-Type': 'application/json', // Inform the server that you're sending JSON
            },
            body: JSON.stringify({ broker: "" }), // Send broker as part of the request body
          });
  
          const data = await response.json();
          setItems(data || []); // Assuming the API returns { states: [...] }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching the data', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    const getFilteredItems = () => {
      if (loading || !Array.isArray(items)) return [];
    
      let filteredItems = items.filter(item => 
        item.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      filteredItems.sort((a, b) => a.state.localeCompare(b.state));
      return filteredItems;
    };
    
    // Add selected state to license
    const addStateToLicense = () => {
      if (selectedState) {
        setSelectedStates(prevStates => {
          const newStates = [...prevStates, selectedState];
          const commaSeparatedStates = newStates.join(', ');
          console.log('Updated Selected States:', commaSeparatedStates);
          setLicensesData({
            ...licensesData,
            state:commaSeparatedStates
          })
          return newStates;
        });
        setItems(items.filter(item => item.state !== selectedState));
        // setSelectedState('');
      }
    };
    
    // Remove selected state from license
    const removeStateFromLicense = () => {
      if (selectedState) {
        setSelectedStates(prevStates => {
          const newStates = prevStates.filter(state => state !== selectedState);
          const commaSeparatedStates = newStates.join(', ');
          console.log('Updated Selected States:', commaSeparatedStates);
          return newStates;
        });
        setItems({...items,  state: selectedState }

        );
        // setSelectedState('');
      }
    };
    
    // Handle state selection and update comma-separated list
    const handleStateSelect = (item) => {
      const stateToSelect = item.state;
      setSelectedState(stateToSelect);
    
      // Display selected state as a comma-separated string
      const commaSeparatedStates = selectedStates.join(', ');
      console.log('Selected State:', selectedStates);
    };

    const handleModalSuccessClose = () => {
      setShowModalSuccess(false);
    };

    const handleDeleteRequest = (licenseData) => {
      setSelectedRow(licenseData);
      setShowCloseModal(true);
    };
  
    const handleNoClick = () => {
      setShowCloseModal(false); // Close the modal
    };

  
    return(
        <>
        
        
        <div className="row p-3">
            <div className="mb-3">
              <div className="col-md-12">
                <button className={activeBut === 'licenses' ? 'addlicenses active' : 'addlicenses'} onClick={handleBreakupButtonClick}>Add Licenses</button>
                <button className= {activeBut === 'lender' ? 'addlender active' : 'addlender'} onClick={handleAmortizationButtonClick}>Add Lender</button>
              </div>
            </div>
            {activeBut ==="licenses"?(
              <>
              <div className="d-flex justify-content-end">
             {(buttonVisible && !showlender) &&<button className="add-licenses"   onClick={() => handlePropertyTypeClick(null)}>Add Licence</button>}
              </div>
         
        {showlender ?
          (<>
            <div className="d-flex">
              <div className="col-md-4 col-sm-12 d-flex">
              <div className="listbox">
      <h2>Available States</h2>
      <input 
        type="text" 
        className="search" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="items">
        <ul>
          {getFilteredItems().map((item, index) => (
            <li
              key={index}
              onClick={() => handleStateSelect(item)}
              style={{ cursor: 'pointer', backgroundColor: selectedState === item.state ? '#d3d3d3' : '' }}
            >
              {item.state}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="actions">
      <button onClick={addStateToLicense} disabled={!selectedState}>&gt;</button>
      <button onClick={removeStateFromLicense} disabled={!selectedState}>&lt;</button>
    </div>
    <div className="listbox">
      <h2>License States</h2>
      <div className="selected">
        <ul>
          {selectedStates.map((state, index) => (
            <li
              key={index}
              onClick={() => handleStateSelect({ state })}
              style={{ cursor: 'pointer', backgroundColor: selectedState === state ? '#d3d3d3' : '' }}
            >
              {state}
            </li>
          ))}
        </ul>
      </div>
    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="d-flex">
                    <div className="col-md-5 col-sm-12 mt-2 mx-4"> 
                      <span className="profile-name">Broker Name</span>
                      <a className="mx-5" onClick={handleEditBrokerClick}>add Broker</a>
                      <div>
                        <select
                          className="dashboard-text"
                          name="broker"
                          value={licensesData.brokername}
                          onChange={handleLicensesChange}
                        >
                        <option value="">Select Broker name...</option>
                          {brokername.map((broker) => (
                            <option key={broker.brokerid} value={broker.brokerid}>
                            {broker.brokername}
                          </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2"> 
                      <span className="profile-name">Broker application URL</span>
                      <div>
                        <input
                          type="text"
                          className="dashboard-text" 
                          name="appllink"
                          // style={{fontSize: '15px'}} 
                          value={licensesData.appllink} 
                          onChange={handleLicensesChange}
                          // disabled={disableFields}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-5 col-sm-12 mt-2 mx-4"> 
                      <span className="profile-name">Broker short application URL</span>
                      <div>
                        <input
                          type="text"
                          className="dashboard-text"
                          name="shortlink"
                          // style={{fontSize: '15px'}} 
                          value={licensesData.shortlink} 
                          onChange={handleLicensesChange}                                        // disabled={disableFields}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2"> 
                      <span className="profile-name">Start Date</span>
                      <div>
                        <input
                          type="date"
                          className="dashboard-text" 
                          name="startdate"
                          value={licensesData.startdate} 
                          onChange={handleLicensesChange}
                          // disabled={disableFields}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-5 col-sm-12 mt-2 mx-4"> 
                      <span className="profile-name">End Date</span>
                      <div>
                        <input
                          type="date"
                          className="dashboard-text"
                          name="enddate"
                          value={licensesData.enddate} 
                          onChange={handleLicensesChange}
                          // disabled={disableFields}
                        />
                      </div>
                    </div>
                    <div></div>
                    <div className="col-md-6 col-sm-6 mt-2"> 
                      <span className="profile-name">Borker Rate</span>
                      <div>
                        <input
                          rows="3"
                          // type="description"
                          className="dashboard-text"
                          name="rate"
                          value={licensesData.rate} 
                          onChange={handleLicensesChange}
                          // disabled={disableFields}
                        />
                      </div>

                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12 mt-2 mx-4 d-flex justify-content-between"> 
                    <div>    
                        <span className="profile-name">Rate Precentage(%)</span>
                      <div>
                        <input
                            className="dashboard-text"
                            name="ratepct"
                            value={licensesData.ratepct} 
                            onChange={handleLicensesChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 d-flex flex-row justify-content-end">
                <button className="add-licenses" onClick={handlelicensesDataClose}>Close</button>
                <button className="add-licenses" onClick={handleSave}>Save</button>
              </div>
              <Modal size='lg' show={showmodalsuccess} onHide={handleModalSuccessClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5 className="text-center">{showmodalsuccess}</h5></Modal.Body>
                <Modal.Footer>
                  <button className="lobutton" onClick={handleModalSuccessClose}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
              
              <Modal size='xl' show={isModalOpen} onHide={closeModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Licence</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Broker Name</span>
                      <div>
                        <input 
                          type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="brokername"
                          value={selectedBroker?.brokername} 
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>    
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Broker Email</span>
                      <div>
                          <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="emailaddress"
                            id="emailaddress"
                            value={selectedBroker?.emailaddress} 
                            onChange={handleBrokerChange}/>
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Broker Mobile</span>
                      <div>
                        <input type='text'
                          className="dashboard-text"  
                          placeholder="9120000000"
                          name="mobile"
                          //id="mobile"
                          //style={{fontSize: '15px'}} 
                          value={selectedBroker?.mobile} 
                          onChange={handleBrokerChange}/>       
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Broker Contact</span>
                      <div>
                        <input type='text'  
                          className="dashboard-text" 
                          placeholder="Enter Value"
                          name="brokercontact"
                          id="brokercontact"
                          //style={{fontSize: '15px'}}
                          value={selectedBroker?.brokercontact} 
                          onChange={handleBrokerChange} />
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Address 1</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="addr1"
                          id="addr1"
                          style={{fontSize: '15px'}} 
                          value={selectedBroker?.addr1} 
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Address 2</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="addr2"
                          id="addr2"
                          style={{fontSize: '15px'}}
                          value={selectedBroker?.addr2} 
                          onChange={handleBrokerChange} />
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Zip Code</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="zipcode"
                          id="zipcode"
                          style={{fontSize: '15px'}}
                          value={selectedBroker?.zipcode} 
                          maxLength={5}
                          onChange={handleZipInputChange} />    
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">City</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="city"
                          id="city"
                          style={{fontSize: '15px'}} 
                          value={selectedBroker?.city} 
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>              
                      { options.length>0 && brokerData.zipcode!==null && zip.length!==0 && 
                      <div className="col-sm-12  col-md-5 col-lg-5 ">
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
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">State</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="states"
                          id="states"
                          style={{fontSize: '15px'}}
                          value={selectedBroker?.states}  
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>               
                    <div className="col-md-4 col-sm-12 mt-3">
                      <span className="profile-name">NMLS</span>
                      <div className="d-flex">
                        <div className="m-1">
                          <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="companynmls"
                            id="companynmls"
                            style={{fontSize: '15px'}}
                            value={selectedBroker?.companynmls} 
                            onChange={handleBrokerChange} 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Fax</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="fax"
                          id="fax"
                          style={{fontSize: '15px'}} 
                          value={selectedBroker?.fax} 
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">App Link</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="applicationurllink"
                          id="applicationurllink"
                          style={{fontSize: '15px'}}
                          value={selectedBroker?.applicationurllink}  
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Broker Website</span>
                      <div>
                        <input type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="website"
                          id="website"
                          style={{fontSize: '15px'}}
                          value={selectedBroker?.website} 
                          onChange={handleBrokerChange} />
                      </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                      <span className="profile-name">Short Link</span>
                      <div>
                        <input 
                          type='text' 
                          className="dashboard-text"  
                          placeholder="Enter Value"
                          name="shorturllink"
                          id="shorturllink"
                          style={{fontSize: '15px'}} 
                          value={selectedBroker?.shorturllink} 
                          onChange={handleBrokerChange}/>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-3">
                      <span className="profile-name">SMS Consent</span>
                      <div className="d-flex">
                        <div className="m-1">
                          <input 
                            type="checkbox"
                            label='Yes'
                            value='Yes'
                            className="m-2"
                            style={{height:'20px',width:'20px',}}
                            checked={selectedBroker?.smsconsent === 1}
                            onChange={(e) => handlesetBrokerChange(e.target.value)}
                          />                        
                          <label>Yes </label>
                        </div>
                        <div className="m-1">
                          <input 
                              type='checkbox'
                              label='No'
                              value='No'
                              className="m-2"
                              style={{height:'20px',width:'20px',}}
                              checked={selectedBroker?.smsconsent === 0}
                              onChange={(e) => handlesetBrokerChange(e.target.value)}
                          />
                          <label>No</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-10 d-flex justify-content-end mt-3">
                      <button className="add-licenses m-2" onClick={handleSubmitUser}>Save</button>
                      <button className="add-licenses m-2" onClick={closeModal}>Close</button>
                      {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div>
          )}
                    </div>
                  </div>
                </Modal.Body>
              </Modal> 
          </>): 
          <div className="p-2"> 
    <Table hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
    <thead>
      <tr>
        <th className='dash-table-text' style={{height:"55px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>State <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
        <th className='dash-table-text' style={{height:"50px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Broker Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
        <th className='dash-table-text' style={{height:"55px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Rate <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
        <th className='dash-table-text' style={{height:"55px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Active <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
        <th className='dash-table-text' style={{height:"55px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Rate Pct <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
<th className='dash-table-text' style={{height:"55px",width:"17%",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Action <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
</svg></th>
      </tr>
    </thead>
    <tbody> 
      {currentLicensesData && currentLicensesData.length > 0 ? (
            currentLicensesData.map((licenseData) => (
              <tr key={licenseData.brokerid}>
                {/* <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.propertytype}</td> */}
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.state}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.brokername}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.rate}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.isactive ===true ? "Yes" : "No"}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{licenseData.ratepct}</td>
                <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}} ><a href="#" onClick={() => handleDeleteRequest(licenseData)}>Delete</a></td>
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
        <Pagination.First onClick={() => handlePageLicensesChange(1)} disabled={currentLicensesData === 1} />
        <Pagination.Prev onClick={() => handlePageLicensesChange(currentLicensesData - 1)} disabled={currentLicensesData === 1} />
        {[...Array(totalLicensesPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentLicensesData}
            onClick={() => handlePageLicensesChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageLicensesChange(currentLicensesData + 1)} disabled={currentLicensesData === totalLicensesPages} />
        <Pagination.Last onClick={() => handlePageLicensesChange(totalLicensesPages)} disabled={currentLicensesData === totalLicensesPages} />
      </Pagination>
      </div>
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
      </div>}
      </>
      ):(
        <>
        <div className="d-flex justify-content-end">
          {(lenderButtonVisible && !lenderPopUp) &&  <button className="add-licenses"   onClick={() => handleLenderTypeClick(null)}>Add Lender</button>}
            </div>
            {lenderPopUp?(<div className="row p-4">
  
    
  <div className="row">
<div className="col-md-4 col-sm-12 mt-2"> 
                  <span className="profile-name">Broker Name</span>
              <div>
                   <select
              className="dashboard-text"
              name="brokerid"
              value={lenderdata.brokerid}
              onChange={handleLenderChange}
          >
              <option value="">Select Broker Name...</option>
              {brokerid.map((broker) => (
                   <option key={broker.brokerid} value={broker.brokerid}>
                   {broker.brokername}
               </option>
              ))}
          </select>
              </div>
          </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="profile-name">Lender Name</span>
      <a className="mx-5" onClick={handleEditLenderClick}>Add Lender</a>
      <div>
                               
          <select
              className="dashboard-text"
              // placeholder="Zone 1"
              style={{ fontSize: '15px' }} 
              id="lenderid" 
              name="lenderid" 
              value={lenderdata.lenderid} 
              onChange={handleLenderChange}
          >
               <option value="">Select a lender</option>
                {mortgageCompanies.map((lender) => (
                    <option key={lender.brokerid} value={lender.lenderid}>
                        {lender.lendername}
                    </option>
                ))}

            </select>
      </div>
  </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="profile-name">Lender POC </span>
      <div>
          <select className="dashboard-text" 
              style={{ fontSize: '15px' }}
              id="poc" 
              name="poc" 
              value={lenderdata.poc} 
              onChange={handleLenderChange}>
              <option value="Zone 1">Zone 1</option>
              <option value="Zone 2">Zone 2</option>
              {/* <option>Zone 3</option>
              <option>Zone 4</option>
              <option>Zone 5</option>
              <option>Zone 6</option> */}
          </select>
      </div>
  </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="property-text">Lender Email</span>
      <div>
          <input 
              type='text' 
              className="dashboard-text"  
              placeholder="Enter Value"
              style={{ fontSize: '15px' }} 
              id="email" 
              name="email" 
              value={lenderdata.email} 
              onChange={handleLenderChange}
          />
      </div>
  </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="property-text">Lender Mobile</span>
      <div>
          <input 
              type='text'
              className="dashboard-text"  
              placeholder="9120000000"
              style={{ fontSize: '15px' }} 
              id="mobile" 
              name="mobile" 
              value={lenderdata.mobile} 
              onChange={handleLenderChange}
          />
      </div>
  </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="property-text">Broker Rate</span>
      <div>
          <input 
              type='text'  
              className="dashboard-text" 
              placeholder="Enter Value"
              style={{ fontSize: '15px' }}
              id="rate" 
              name="rate" 
              value={lenderdata.rate} 
              onChange={handleLenderChange}
          />
      </div>
  </div>
  <div className="col-sm-12 col-md-4 mt-2">
      <span className="property-text">Description</span>
      <div>
          <input 
              type='text' 
              className="dashboard-text"  
              placeholder="Enter Value"
              style={{ fontSize: '15px' }} 
              id="decrip" 
              name="decrip" 
              value={lenderdata.decrip} 
              onChange={handleLenderChange}
          />
      </div>
  </div>
  <div className="col-sm-12 col-md-10 d-flex justify-content-end mt-1">
  <button className="lobutton m-2" onClick={handlelenderDataClose}>Close</button>
      <button className="lobutton m-2" onClick={handleSubmitLender}>Save</button>
  
      <Modal size='lg' show={showmodallendersuccess} onHide={handleModalLenderSuccessClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5 className="text-center">{showmodallendersuccess}</h5></Modal.Body>
                <Modal.Footer>
                  <button className="lobutton" onClick={handleModalLenderSuccessClose}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
  </div>
</div>    
          
          <Modal size='xl' show={modalShow} onHide={closeLenderModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Addlender lenddata={selectedLender}/>
              <button onClick={closeLenderModal}>Close</button>
             </Modal.Body>
          </Modal> 
    </div>  
     )     :
    <div className="p-2">
      <Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
          <thead>
            <tr>
              <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Email <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>
              <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Broker Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>
              <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>
              <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Phone Number <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>
              <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Lender Rate <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>
      <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>State <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
      </svg></th>  
            </tr>
          </thead>
          <tbody>
          {currentData && currentData.length > 0 ? (
              currentData.map((lendInfo) => (
                <tr key={lendInfo.brokerid}>
                  {/* <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.propertytype}</td> */}
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.lenderemail}</td>
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.brokername}</td>
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.lendername}</td>
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.lendermobile}</td>
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.status ===true ? "Yes" : "No"}</td>
                  <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{lendInfo.rate}</td>
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
      
      }
        </>       
    )}
    </div>

    </>
    )
}
export default Licenses;