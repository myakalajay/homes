import axios from "axios";
import React,{useState,useEffect} from "react";
import { Table,Pagination } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

function Broker(){
    const [brokername, setBrokerName] = useState([]);
    const [selectedBroker, setSelectedBroker] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStates, setSelectedStates] = useState([]); // License States
    const [selectedState, setSelectedState] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [brokersuccess,setBrokerSuccess]=useState(false);
    const user = useSelector(state=> state.auth.userid);
    const token = useSelector(state=> state.auth.token);
  const [brokerData, setBrokerData] = useState({
    isactive:1,
    token:token,
    brokerid:"",
        userid:"",
        brokername: "",
        contact: "",
        email: "",
        addr1:"",
        addr2:"",
        // state:"",
        // city:"",
        // zipcode:"",
        mobile: "",
        fax:"",
        nmls:"",
        website:"",
        appllink:"",
        shortlink:"",
        smsconsent:"",
        state: selectedStates
    });

    const [showBrokerData,setShowBrokerData]= useState(false)
    const [zip,setZip]= useState('');
    const [options,setOptions]=useState([]);
    const [selectedOption,setSelectedOption]=useState('');
    const [closeTheBrokerData,setCloseTheBrokerData] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = brokername.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(brokername.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    
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
    
    const handleBrokerChange = (e) => {
        const { name, value } = e.target;
        setBrokerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedBroker((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
    
        console.log("fhgj",value)
        const sanitizedValue = sanitizeInput(value);
        setSelectedBroker((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBroker(null);
      };

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

    const handleOptionSelect = (event) => {
        // debugger
        console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
        console.log("options",options)
        const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
        setSelectedOption(selected);
        console.log("selected",selected);
        // setBrokerData((prevData) => ({
        //     ...prevData,
        //     city: selected.city
        // }));
        // setBrokerData((prevData) => ({
        //     ...prevData,
        //     state: selected.state
        // }));
        // setLoUserData(selected.city);
        // setState(selected.state)  
    }
    const handlesetChange = (value) => {
        setSelectedBroker((prevData) => ({
            ...prevData,
            smsconsent: value === 'Yes' ? 1 : 0,
        }));
    };
    const handlesetBrokerChange = (value) => {
        setBrokerData((prevData) => ({
            ...prevData,
            smsconsent: value === 'Yes' ? 1 : 0,
        }));
    };

    const handleZipChange = async (event) =>{
        // debugger
        setZip(event.target.value); 
        console.log(zip)
        setSelectedBroker({
           ...brokerData,
           zipcode: event.target.value
       }
       )
   }

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
    // const handlesetNmlsChange = (value) => {
    //     setBrokerData((prevData) => ({
    //         ...prevData,
    //         nmls: value === 'Yes' ? 1 : 0,
    //     }));
    // };
 
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
            //  console.log('setdata',data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchBrokername();
          }, []);

    const handleshowLoanDataClose = (e) =>{
            setShowBrokerData(false)
    }
    

    const handleEditBrokerClick = (broker) => {
        setSelectedBroker(broker);
        setIsModalOpen(true);
      };

    const handleSubmitUser = async (e) => {
      
        e.preventDefault()
        setLoading(true);
        setError(null);
        setBrokerSuccess(null);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setbroker`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...brokerData,userid:''}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // setBrokerData(response)
            setBrokerSuccess('Data saved successfully'); // Assuming the response contains JSON data
            console.log("Data saved, now refreshing broker list...");
            await fetchBrokername();
          } catch (error) {
            console.error('Error submitting form:', error);
          } finally {
            setLoading(false);
          }
        };

      const  handleCloseBrokerSuccess =(e)=>{
        setBrokerSuccess(false);
      }

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
            setBrokerData({
              ...brokerData,
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
          setItems([...items, { state: selectedState }]);
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
    return(
        <>
          {(!closeTheBrokerData || !showBrokerData ) && (<button className="lobutton"  style={{marginTop:"2rem",marginLeft:"47rem"}} onClick={()=>{setShowBrokerData(!showBrokerData);setCloseTheBrokerData(!closeTheBrokerData)}}>Add Broker</button>)}
          
        {!showBrokerData ?   <><Table   hover className="table table-bordered table-striped" style={{borderRadius:"10px"}}>
            <thead>
              <tr>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Broker Id <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"50px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Borker Name <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>NMLS <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Email Address <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Phone Number <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
                <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>SMS Consent <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
    <th className='dash-table-text' style={{height:"55px",width:"100px",color:"#ffffff",backgroundColor:"#AB1331",paddingBottom:"10px"}}>Action <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70819 11.9789L0.643186 9.46387C0.397642 9.16516 0.346311 8.75159 0.511411 8.40186C0.676512 8.05225 1.02844 7.8291 1.41516 7.82886H5.54614C5.93286 7.8291 6.28479 8.05225 6.44989 8.40186C6.61499 8.75159 6.56366 9.16516 6.31811 9.46387L4.25311 11.9789C4.06317 12.2103 3.77954 12.3445 3.4801 12.3445C3.18066 12.3445 2.89703 12.2103 2.70709 11.9789H2.70819ZM1.36419 5.16992C0.975523 5.17004 0.622068 4.94482 0.457823 4.59265C0.293577 4.24036 0.348326 3.82483 0.598203 3.5271L2.70617 1.01404C2.89612 0.787231 3.17682 0.65625 3.47265 0.65625C3.76849 0.65625 4.04919 0.787231 4.23919 1.01404L6.34717 3.52698C6.59704 3.82483 6.65179 4.24036 6.48755 4.59265C6.3233 4.94482 5.96985 5.17004 5.58118 5.17004L1.36419 5.16992Z" fill="#ffffff"/>
    </svg></th>
              </tr>
            </thead>
            <tbody>
            {currentData && currentData.length > 0 ? (
            currentData.map((broker) => (
              <tr key={broker.brokerid}>
                    <td className='dash-table-text1' onClick={() => handlePropertyTypeClick(property)} style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.brokerid}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.brokername}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.companynmls}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.emailaddress}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.mobile}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}>{broker.smsconsent===false?"false" : "true"}</td>
                    <td className='dash-table-text1' style={{height:"45px",color:"#06152B",paddingTop:"13px"}}><button className="scenarios-btn1" onClick={() => handleEditBrokerClick(broker)}>Edit</button></td>
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
      
          </>:
            
        (<div className="row">
          <div className="d-flex">
            <div className="col-sm-12 col-md-5">
              <div className="d-flex flex-row justify-content-between">
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
            </div>
            
                <div> 
                    <div className="col-sm-12  col-md-4 mt-4 d-flex">
                    <div>
                        <span className="profile-name">Broker Name</span>
                        
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="brokername"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={brokerData.brokername} 
                            onChange={handleBrokerChange}/>
                               {/* <select
                            className="dashboard-text"
                            name="brokername"
                            value={brokerData.brokername}
                            onChange={handleBrokerChange}
                        >
                            <option value="">Select Broker name...</option>
                            {brokername.map((broker) => (
                                 <option key={broker.brokerid} value={broker.brokername}>
                                 {broker.brokername}
                             </option>
                            ))}
                        </select> */}
                        </div>
                        <div>
                        <span className="profile-name">Broker Email</span>
                        
                            <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="email"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={brokerData.email} 
                            onChange={handleBrokerChange}/>
                        </div>
                    </div>
                    <div className="d-flex col-sm-12  col-md-4 mt-4">
                    <div>
                        <span className="profile-name">Broker Mobile</span>
                        
                            <input type='text'
                            className="dashboard-text"  
                            placeholder="9120000000"
                            name="mobile"
                            //id="mobile"
                            //style={{fontSize: '15px'}} 
                            value={brokerData.mobile} 
                            onChange={handleBrokerChange}/>
                            
                        </div>

                        <div>
                        <span className="profile-name">Broker Contact</span>
                            <input type='text'  
                            className="dashboard-text" 
                            placeholder="Enter Value"
                            name="contact"
                            //id="contact"
                            //style={{fontSize: '15px'}}
                            value={brokerData.contact} 
                            onChange={handleBrokerChange} />
                        </div>
                    </div>
                    <div className="d-flex col-sm-12  col-md-4 mt-4">
                    <div>
                        <span className="profile-name">Address 1</span>
                        
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="addr1"
                            id="addr1"
                            style={{fontSize: '15px'}} 
                            value={brokerData.addr1} 
                            onChange={handleBrokerChange}/>
                        </div>
                        <div>
                        <span className="profile-name">Address 2</span>
                        
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="addr2"
                            id="addr2"
                            style={{fontSize: '15px'}}
                            value={brokerData.addr2} 
                            onChange={handleBrokerChange} />
                        </div>
                        </div>
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
                            value={brokerData.zipcode} 
                            maxLength={5}
                            onChange={handleZipInputChange} />

                        </div>
                        </div>

                        {options.length>0 && brokerData.zipcode!==null && zip.length!==0 && 
                   <div className="col-sm-12  col-md-4 col-lg-4 mt-3">
                    <span className="profile-name">State and City</span>
                   <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-text"  >
                        <option value="">{`Select city and state...`}</option>
                        {options.map((option,index) => (
                            <option key={index} value={`${option.city},${option.state}`}>
                                {option.city} {option.state}
                            </option>
                        ))}
                    </select>
                    </div>
                }
                        <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">City</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="city"
                            id="city"
                            style={{fontSize: '15px'}} 
                            value={brokerData.city} 
                            onChange={handleBrokerChange}/>
                        </div>
                        </div>
                        
                        <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">State</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="state"
                            id="state"
                            style={{fontSize: '15px'}}
                            value={brokerData.state}  
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
                            name="nmls"
                            id="nmls"
                            style={{fontSize: '15px'}}
                            value={brokerData.nmls} 
                            onChange={handleBrokerChange} />
                            
                                        {/* <input 
                                            type="checkbox"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={brokerData.nmls === 1}
                                            onChange={(e) => handlesetNmlsChange(e.target.value)}
                                        />
                                        
                                     <label>Individual </label>
                                     </div>
                                        <div className="m-1">
                                        <input 
                                            type='checkbox'
                                            label='No'
                                            value='No'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                         checked={brokerData.nmls === 0}
                                        onChange={(e) => handlesetNmlsChange(e.target.value)}
                                        />
                                    <label>Multiple</label> */}
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
                            value={brokerData.fax} 
                            onChange={handleBrokerChange}/>
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">App Link</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="appllink"
                            id="appllink"
                            style={{fontSize: '15px'}}
                            value={brokerData.appllink}  
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
                            value={brokerData.website} 
                            onChange={handleBrokerChange} />
                        </div>
                        </div>
                        <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Short Link</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="shortlink"
                            id="shortlink"
                            style={{fontSize: '15px'}} 
                            value={brokerData.shortlink} 
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
                                            checked={brokerData.smsconsent === 1}
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
                                            checked={brokerData.smsconsent === 0}
                                            onChange={(e) => handlesetBrokerChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                              </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-end mx-5">
                    <button className="add-licenses m-2" onClick={handleSubmitUser}>Save</button>
                    <button className="add-licenses m-2" onClick={handleshowLoanDataClose}>Close</button>
                    </div>
                    </div>)
                     }
                     <Modal size='lg' show={brokersuccess} onHide={handleCloseBrokerSuccess}>
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5 className="text-center">{"saved succesfully"}</h5></Modal.Body>
                <Modal.Footer>
                  <button className="lobutton" onClick={handleCloseBrokerSuccess}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
                     <Modal size='xl' show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedBroker && (
          <div>
            <form>
            <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Name</span>
                     
                        <div>
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="brokername"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={selectedBroker.brokername} 
                            onChange={handleChange}/>
                              
                        </div>
                    </label>    
                     <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Email</span>
                        <div>
                            <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="email"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={selectedBroker.emailaddress} 
                            onChange={handleChange}/>
                        </div>
                    </label>
                    <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Mobile</span>
                        <div>
                            <input type='text'
                            className="dashboard-text"  
                            placeholder="9120000000"
                            name="mobile"
                            //id="mobile"
                            //style={{fontSize: '15px'}} 
                            value={selectedBroker.mobile} 
                            onChange={handleChange}/>
                            
                        </div>
                    </label>
                     <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Contact</span>
                        <div>
                            <input type='text'  
                            className="dashboard-text" 
                            placeholder="Enter Value"
                            name="contact"
                            //id="contact"
                            //style={{fontSize: '15px'}}
                            value={selectedBroker.brokercontact} 
                            onChange={handleChange} />
                        </div>
                    </label>
                    <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Address 1</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="addr1"
                            id="addr1"
                            style={{fontSize: '15px'}} 
                            value={selectedBroker.addr1} 
                            onChange={handleChange}/>
                        </div>
                        </label>
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Address 2</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="addr2"
                            id="addr2"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.addr2} 
                            onChange={handleChange} />
                        </div>
                        </label>
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Zip Code</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="zipcode"
                            id="zipcode"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.zipcode} 
                            maxLength={5}
                            onChange={handleZipChange} />

                        </div>
                        </label>

                        { options.length>0 && selectedBroker.zipcode!==null && zip.length!==0 && 
                   <label className="col-sm-12  col-md-4 col-lg-4 ">
                   <span className="profile-name">State and city</span>
                   <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-text">
                        <option value="">{`Select city and state...`}</option>
                        {options.map((option,index) => (
                            <option key={index} value={`${option.city},${option.state}`}>
                                {option.city} {option.state}
                            </option>
                        ))}
                    </select>
                    </label>
                }
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">City</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="city"
                            id="city"
                            style={{fontSize: '15px'}} 
                            value={selectedBroker.city} 
                            onChange={handleChange}/>
                        </div>
                        </label>
                        
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">State</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="state"
                            id="state"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.states}  
                            onChange={handleChange}/>
                        </div>
                        </label>
                       
                        <label className="col-md-4 col-sm-12 mt-3">
                                      <span className="profile-name">NMLS</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                          <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="nmls"
                            id="nmls"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.companynmls} 
                            onChange={handleChange} />
                                    </div>
                                    </div>
                              </label>
                    <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Fax</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="fax"
                            id="fax"
                            style={{fontSize: '15px'}} 
                            value={selectedBroker.fax} 
                            onChange={handleChange}/>
                        </div>
                    </label>
                    <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">App Link</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="appllink"
                            id="appllink"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.appllink}  
                            onChange={handleChange}/>
                        </div>
                        </label>
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Website</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="website"
                            id="website"
                            style={{fontSize: '15px'}}
                            value={selectedBroker.website} 
                            onChange={handleChange} />
                        </div>
                        </label>
                        <label className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Short Link</span>
                        <div>
                            <input type='text' 
                            className="dashboard-text"  
                            placeholder="Enter Value"
                            name="shortlink"
                            id="shortlink"
                            style={{fontSize: '15px'}} 
                            value={selectedBroker.shorturllink} 
                            onChange={handleChange}/>
                        </div>
                        </label>
                              <label className="col-md-4 col-sm-12 mt-3">
                                      <span className="profile-name">SMS Consent</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="checkbox"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={selectedBroker.smsconsent === 1}
                                            onChange={(e) => handlesetChange(e.target.value)}
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
                                            checked={selectedBroker.smsconsent === 0}
                                            onChange={(e) => handlesetChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                              </label>
             <div className='d-flex flex-row justify-content-between mt-3'>
              <div className='mt-4'>
                <button className='prebutton mx-2' type="button" onClick={closeModal}>Close</button>
                <button className='lobutton mx-2' type="submit" onClick={handleSubmitUser}>Save</button>
              </div>
            </div>
            </form>
          </div>
        )}
         </Modal.Body>
      </Modal> 
                    
                    
        </>
    );
}

export default Broker;