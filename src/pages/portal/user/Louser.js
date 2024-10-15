import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from "axios";

 function Louser(){
const [louserData, setLoUserData] = useState([]);
        const userid = useSelector(state => state.auth.userid);
    const usertype = useSelector(state => state.user.usertype);
    const token = useSelector(state=> state.auth.token);
    const [selectedOption,setSelectedOption]=useState('');
    const [options,setOptions]=useState([]);
    const [resp,setResp]=useState('')
    const [zip,setZip]= useState('');
    const [dataSaved, setDataSaved]=useState("");
    console.log("in louserpage",userid,usertype)
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
                    })
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
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserprofile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ usertype: usertype, user: userid }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json(); 
                const user= data.result_sets[0][0];
                setLoUserData(user); 
                console.log("louserdata",  user);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [usertype, userid]);

         const handleUserChange = (e) => {
            const { name, value } = e.target;
            setLoUserData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
        const handleUseChange = (e) => {
            const { name, value } = e.target;
            setLoUserData((prevData) => ({
                ...prevData,
                [name]: parseFloat(value) || 0,
            }));
        };
        const handleZipInputChange = async (event) =>{
             setZip(event.target.value); 
            setLoUserData({
                ...louserData,
                zipcode: event.target.value
            }
            )
    
        }

        const handleOptionSelect = (event) => {
            console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
            console.log("options",options)
            const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
            setSelectedOption(selected);
            console.log("selected",selected);
            setLoUserData((prevData) => ({
                ...prevData,
                city: selected.city
            }));
            setLoUserData((prevData) => ({
                ...prevData,
                state: selected.state
            })); 
        }
        const handleSmsAllowedChange = (value) => {
            console.log("yes",value)
            setLoUserData((prevData) => ({
                ...prevData,
                smsconsent: value === 'Yes' ? 1 : 0,
            }));
        };
        
const getModifiedPayload = () =>{
    const {address1,applicationlink,city,companynmls,profiledescription,emailaddress,password,experience,firstname,individualnmls,isactive,isverified,languages,lastname,mobile,smsconsent,state,usertype,website,webuserid,zipcode }= louserData
    return {
        "addr1":address1,
        "appllink": applicationlink,
        "city": city,
        "companynmls": companynmls,
        "email":emailaddress,
        "exp":experience,
        "desc" : profiledescription,
        "firstname": firstname,
        "nmls": individualnmls,
        "isverified": isverified,
        "lang": languages,
        "lastname": lastname,
        "mobile":mobile,
        "password": password,
        "smsconsent": smsconsent,
        "state": state,
        "verified" : 0,
        "website": website,
        "userid":webuserid,
        "zip": zipcode,
        "token": token
    }
}
        const handleNmlsAllowedChange = (value) => {
            setLoUserData((prevData) => ({
                ...prevData,
                nmls: value === 'Yes' ? 1 : 0,
            }));
        };

        const handleVerifiedAllowedChange = (value) => {
            console.log("value",value)
            setLoUserData((prevData) => ({
                ...prevData,
                isverified: value === 'Yes' ? 1 : 0,
            }));
        };
      

        const handleSubmitUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setloprofile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(getModifiedPayload()),
                }).then((response) => response.json())
                .then((data) => {
                    setDataSaved("Profile updated successfully")
                  console.log("louserData",data)
                })
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                
                const data = await response.json();
                
                console.log(data); 
            } catch (error) {
                console.error(error);
            }
        };
    return(
        <>
        <div className="row p-3">
                                <div className="col-sm-12 col-md-4 mt-2">
                                    <span className="profile-name">First Name</span>
                                    <div>
                                    <input
                                        name="firstname"
                                        className="dashboard-text"  
                                        value={louserData.firstname} 
                                        onChange={handleUserChange}
                                    />
                                    </div>
                                </div>   
                                <div className="col-sm-12 col-md-4 mt-2">                       
                                    <span  className="profile-name">Last Name</span>
                                    <div>
                                    <input
                                        name="lastname" 
                                        className="dashboard-text"  
                                        value={louserData.lastname} 
                                        onChange={handleUserChange}
                                    />
                                    </div>
                                </div>
                            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Email</span>
                            <div>
                                <input
                                    className="dashboard-text"
                                    name="email"
                                     value={louserData.emailaddress} 
                                        onChange={handleUserChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">Address</span>
                                <div>
                                    <input
                                    type="text"
                                    name="address1"
                                    className="dashboard-text"
                                     value={louserData.address1} 
                                        onChange={handleUserChange}
                                     />
                                     </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">Zip Code</span>
                                <div>
                                    <input
                                    type="text"
                                    name="zipcode"
                                    className="dashboard-text"
                                     value={louserData.zipcode} 
                                     maxLength={5}
                            onChange={handleZipInputChange}
                                     />
                                      { options.length>0 && louserData.zipcode!==null && zip.length!==0 && 
              <div className="col-sm-12  col-md-6 col-lg-6">
                    <select id="options" onChange={handleOptionSelect} className="dashboard-selecttextbox" style={{width:"381px"}} >
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
                           
                              
                                <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">State</span>
                                <div>
                                    <input
                                    type="text"
                                    name="state"
                                    className="dashboard-text"
                                     value={louserData.state} 
                                        onChange={handleUserChange}
                                     />
                                     </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">City</span>
                                <div>
                                    <input
                                    type="text"
                                    name="city"
                                    className="dashboard-text"
                                     value={louserData.city} 
                                        onChange={handleUserChange}
                                     />
                                     </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">Phone Number</span>
                                <div>
                                    <input
                                    name="mobile" 
                                    type="text"
                                    className="dashboard-text"
                                     value={louserData.mobile} 
                                        onChange={handleUserChange}
                                     />
                                     </div>
                                </div>
                        <div className="col-md-4 col-sm-12 mt-2">
                                      <span className=" profile-name">Individual NMLS</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="text"
                                            name="individualnmls"
                                            value={louserData.individualnmls}
                                             className="dashboard-text"
                                            onChange={handleUserChange}
                                        />
                                     </div>
                                    </div>
                              </div>
                              <div className="col-md-4 col-sm-12 mt-2">
                                <span>Website</span>
                                <div>
                                <input
                                    type="text" 
                                    name="website"
                                    className="dashboard-text"
                                     value={louserData.website} 
                                        onChange={handleUserChange}
                                    />
                                    </div>
                              </div>
                            <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Application Link</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-text"
                                    name="applicationlink"
                                    style={{fontSize: '15px'}} 
                                     value={louserData.applicationlink} 
                                        onChange={handleUserChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-2"> 
                                <span className="profile-name">Languages</span>
                            <div>
                                <input
                                    type="text"
                                    className="dashboard-text"
                                    name="languages"
                                    style={{fontSize: '15px'}} 
                                     value={louserData.languages} 
                                        onChange={handleUserChange}
                                />
                            </div>
                        </div>
                            <div className="col-md-4 col-sm-12 mt-2">
                                <span className="profile-name">Experience</span>
                                <div>
                                    <input
                                    type="text" 
                                    name="experience"
                                    className="dashboard-text"
                                     value={louserData.experience} 
                                        onChange={handleUseChange}
                                     />
                                     </div>
                                     </div>
                                     <div className="col-md-4 col-sm-12 mt-2">
                                      <span className=" profile-name">SMS Consent</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="checkbox"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                            checked={louserData.smsconsent===1}
                                            onChange={(e) => handleSmsAllowedChange(e.target.value)}
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
                                            checked={louserData.smsconsent===0}
                                            onChange={(e) => handleSmsAllowedChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                                    </div>
                                     <div className="col-md-4 col-sm-12 mt-2">
                                      <span className="profile-name">Is Verified</span>
                                      <div className="d-flex">
                                      <div className="m-1">
                                        <input 
                                            type="radio"
                                            label='Yes'
                                            value='Yes'
                                            className="m-2"
                                            style={{height:'20px',width:'20px'}}
                                             checked={louserData.isverified===1}
                                            onChange={(e) => handleVerifiedAllowedChange(e.target.value)}
                                        />
                                        
                                     <label>Yes</label>
                                     </div>
                                        <div className="m-1">
                                        <input 
                                            type='radio'
                                            label='No'
                                            value='No'
                                            className="m-2"
                                            style={{height:'20px',width:'20px',}}
                                             checked={louserData.isverified===0}
                                            onChange={(e) => handleVerifiedAllowedChange(e.target.value)}
                                        />
                                    <label>No</label>
                                    </div>
                                    </div>
                              </div>
                              <div className="col-md-12 col-sm-12 d-flex flex-content justify-content-end" >
                            <button className="lobutton" onClick={handleSubmitUser}>
                                Save
                            </button>
                          
                        </div>
                        {dataSaved && <div style={{alignContent:"center",color:"green",marginLeft:"950px"}}>{dataSaved}</div>}
                    </div>
        </>
    )
}

export default Louser;