import React,{useState,useEffect} from "react";

function Broker(){
    const [brokername, setBrokerName] = useState([]);
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
    
     const handleBrokerChange = (e) => {
        const { name, value } = e.target;
        setBrokerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlesetBrokerChange = (value) => {
        setBrokerData((prevData) => ({
            ...prevData,
            smsconsent: value === 'Yes' ? 1 : 0,
        }));
    };

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
            console.log(data); // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    return(
        <>
        <div className="row">
        <div className="col-sm-12 col-md-9">
         <div className="d-flex flex-row justify-content-between">
                <span className="property-text">Broker Information</span>
                    <button className="btn btn-danger" >Add</button>
                    </div>
                    </div> 
                    <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Broker Name</span>
                        <div>
                        <input 
                            type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="brokername"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={brokerData.brokername} 
                            onChange={handleBrokerChange}/>
                               {/* <select
                            className="dashboard-box"
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
                    </div>    
                     <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Broker Email</span>
                        <div>
                            <input 
                            type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="email"
                            // id="email"
                            // style={{fontSize: '15px'}} 
                            value={brokerData.email} 
                            onChange={handleBrokerChange}/>
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Broker Mobile</span>
                        <div>
                            <input type='text'
                            className="dashboard-box"  
                            placeholder="9120000000"
                            name="mobile"
                            //id="mobile"
                            //style={{fontSize: '15px'}} 
                            value={brokerData.mobile} 
                            onChange={handleBrokerChange}/>
                            
                        </div>
                    </div>
                     <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Broker Contact</span>
                        <div>
                            <input type='text'  
                            className="dashboard-box" 
                            placeholder="Enter Value"
                            name="contact"
                            //id="contact"
                            //style={{fontSize: '15px'}}
                            value={brokerData.contact} 
                            onChange={handleBrokerChange} />
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Address 1</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="addr1"
                            id="addr1"
                            style={{fontSize: '15px'}} 
                            value={brokerData.addr1} 
                            onChange={handleBrokerChange}/>
                        </div>
                        </div>
                        <div className="col-sm-12  col-md-4 mt-3">
                        <span className="profile-name">Address 2</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="addr2"
                            id="addr2"
                            style={{fontSize: '15px'}}
                            value={brokerData.addr2} 
                            onChange={handleBrokerChange} />
                        </div>
                        </div>
                        <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">City</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
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
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="state"
                            id="state"
                            style={{fontSize: '15px'}}
                            value={brokerData.state}  
                            onChange={handleBrokerChange}/>
                        </div>
                        </div>
                        <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Zip Code</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="zipcode"
                            id="zipcode"
                            style={{fontSize: '15px'}}
                            value={brokerData.zipcode} 
                            onChange={handleBrokerChange} />

                        </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-3">
                                      <span className="profile-name">NMLS</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                          <input type='text' 
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="nmls"
                            id="nmls"
                            style={{fontSize: '15px'}}
                            value={brokerData.nmls} 
                            onChange={handleBrokerChange} />
                                    </div>
                                    </div>
                              </div>
                    <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Fax</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
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
                            className="dashboard-box"  
                            placeholder="Enter Value"
                            name="appllink"
                            id="appllink"
                            style={{fontSize: '15px'}}
                            value={brokerData.appllink}  
                            onChange={handleBrokerChange}/>
                        </div>
                        </div>
                        <div className="col-sm-12  col-md-5 mt-3">
                        <span className="profile-name">Broker Website</span>
                        <div>
                            <input type='text' 
                            className="dashboard-box"  
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
                            className="dashboard-box"  
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
                    <button className="btn btn-danger m-2" onClick={handleSubmitUser}>Save</button>
                    </div>
                    </div>  
        </>
    );
}

export default Broker;