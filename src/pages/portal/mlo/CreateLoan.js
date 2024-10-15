// import { Yeseva_One } from "next/font/google";
import React ,{useState,useEffect} from "react";
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPropertyId } from "@/redux/authSlice";

export default function CreateLoan(){
    const userid = useSelector(state=> state.auth.userid);
    const propertyid=useSelector(state=> state.auth.propertyid);
    console.log("proer",propertyid)
    const [mortgageCompanies, setMortgageCompanies] = useState([]);
    const [showPropertyInfo, setShowPropertyInfo] = useState(true);
    const [zip,setZip]= useState('');
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [options,setOptions]=useState([]);
    const [startDate,setStartDate]=useState('');
    const [endDate,setEndDate]=useState('')
    const [selectedOption,setSelectedOption]=useState('');
    const [showLoanData,setShowLoanData]=useState(false)
   // const [propertyid,setPropertyId]=useState('')
    const initialPropertyState ={
        user: userid,
        name: "",
        type: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "",
        zip: "",
        paidoff: "",
        sold: "",
        track: "",
        // propid : propertyid,        
      };
      
      const initialLoanState = {
        user:userid,
        occupancytype:"",
        // propid:propertyid,
        loantype:"",
        lender:"the",
        loanamount:parseFloat(100),
        rate:'1.5',
        startdate:startDate,
        enddate:endDate,
        term:"",
        emiamount:parseFloat(100),
        pmiamount:parseFloat(10),
        refinance:"",
        paidoff:"",
        sold:"",
        track:"",
        // purchase:""
      };
      
      const [loanData, setLoanData] = useState(initialLoanState);
      
      const [propertyData, setPropertyData] = useState(initialPropertyState);
      const [errors,setErrors]=useState({})
    const [activeButton, setActiveButton] = useState('property');
const dispatch=useDispatch()
console.log("propertyid",propertyid)
    
    useEffect(() => {
        const fetchPlaceInfo = async () => {
            if (zip.length === 3 || zip.length === 4 || zip.length === 5) {
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
    }, [zip]);
    
    const handleOptionSelect = (event) => {
        console.log("event",event.target.value.split(',')[0],event.target.value.split(',')[1])
        console.log("options",options)
        const selected = options.find(option => option.city === event.target.value.split(',')[0] && option.state === event.target.value.split(',')[1])
        setSelectedOption(selected);
        console.log("selected",selected);
        setCity(selected.city);
        setState(selected.state)  
    }

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

          const sanitizeInput = (value) => {
            return DOMPurify.sanitize(value);
        };

    const handleInputProperty = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setLoanData((prevState) => ({
          ...prevState,
          [name]: parseFloat(sanitizedValue) || 0,
        }));
      };

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log("name",name,value)
        const sanitizedValue = sanitizeInput(value);
        if (name === "startdate" || name === "enddate") {
            setStartDate(sanitizedValue); 
            setEndDate(sanitizedValue);
        }
        setLoanData((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        setPropertyData((prevState) => ({
          ...prevState,
          [name]: sanitizedValue,
        }));
      };

      const validate = () =>{
        const newErrors ={};
        if(!propertyData.name){
            newErrors.name = "Property name is required"
        }
        if(!propertyData.addr1){
            newErrors.addr1 = "Address1 is required"
        }
        // if(!propertyData.city){
        //     newErrors.city = "City is required"
        // }
        // if(!propertyData.state){
        //     newErrors.state = "State is required"
        // }
        if(!propertyData.purchase){
            newErrors.purchase = "Purchase is required"
        }
        // if(!propertyData.zip){
        //     newErrors.zip = "Zip Code is required"
        // }
        return newErrors;
      }

      const handlePropertySave = async () => {
        const formattedData = {
          ...propertyData,
          paidoff: propertyData.paidoff === "Yes" ? true : false,
          sold: propertyData.sold === "Yes" ? true: false,
          track: propertyData.track === "Yes" ? true : false,
          user:userid,
        };
    
    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);

        setShowPropertyInfo(true);
        setActiveButton('property');
        return;
    }
    else{
        setShowPropertyInfo(false);
        setActiveButton('loan');
        setErrors({});
    }
        try {
         const response= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserproperty`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData),
          }).then((response) => response.json())
          .then((data) => {
            // res.send(data);
            // setPropertyData({...propertyData,propid:data[0]?.propertyid})
            // setPropertyId("jhgj");
            dispatch(setPropertyId({propertyid:data[0].propertyid}))
            console.log("data",propertyid)
           
           
    
           
          })
          .catch((error) => {
            // setMessage("Password is unsuccessful")
            console.error('Error:', error);
          });

          console.log("propertyData",propertyData)
    
          if (response.ok) {
            // Handle success
           
            
            console.log("Data submitted successfully!");
           
          } else {
            // Handle errors
            console.error("Error submitting data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
      const handleLoanSave = async () => {
        const formattedData = {
          ...loanData,
        refinance : loanData.refinance === "Yes" ? 1 : 0,
        paidoff: loanData.paidoff === "Yes" ? 1 : 0,
        sold: loanData.sold === "Yes" ? 1 : 0,
        track: loanData.track === "Yes" ? 1 : 0,
        user:userid,
        propid:propertyid
        };
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserpropertyloan`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData),
          });
          if (response.ok) {
            // Handle success
            console.log("Data submitted successfully!");
          } else {
            // Handle errors
            console.error("Error submitting data.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    

    const handleRefinancedOffChange = (value) => {
        setIsRefinancedOff(value);
    };

    const handlePaymentOffChange = (value) => {
        setIsPaymentOff(value);
    };

    const handleSelectChange = (event) => {
        setSelectedLender(event.target.value);
      };

    const handleReset = () => {
        setPropertyData(initialPropertyState);
        setLoanData(initialLoanState);
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

    return(
        <>
         <button className="lobutton" style={{marginTop:"2rem",marginLeft:"50rem"}}onClick ={()=>{setShowLoanData(!showLenderData)}}>Create Loan</button>
        {setShowLoanData && (<div className="container">
            <div className="row">
        
                {/* <div> */}
                <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">MLO User ID</span><span style={{ color: 'red' }}>*</span>
                    <div>
                        <select 
                            className="dashboard-textbox" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Choose MLO User ID</option>
                            <option>ID 1</option>
                            <option>ID 2</option>
                            <option>ID 3</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-12  col-md-4 mt-3">
                <span className="property-text mt-2">Loan User ID(Optional)</span>
                    <div>
                        <input
                            // type='text'
                            className="dashboard-text"
                            // style={{borderColor:"#CACED8"}}
                            placeholder="Eg: Loan User ID"
                            name="name"
                             value={propertyData.name} 
                            onChange={handleInputChange}
                        />
                        {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                    </div>
                </div>
                
                <div className="col-sm-12  col-md-4 mt-3">
                <span className="property-text mt-2">Broker ID</span><span style={{ color: 'red' }}>*</span>
                    <div>
                        <input
                            // type='text'
                            className="dashboard-text"
                            // style={{borderColor:"#CACED8"}}
                            placeholder="Eg: Homeloc"
                            name="name"
                             value={propertyData.name} 
                            onChange={handleInputChange}
                        />
                        {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">Lender ID</span><span style={{ color: 'red' }}>*</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: Lender ID</option>
                            <option>ID 1</option>
                            <option>ID 2</option>
                            <option>ID 3</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">Loan Type</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: HomeLoc</option>
                            <option>ID 1</option>
                            <option>ID 2</option>
                            <option>ID 3</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Loan Number </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg:Loan Number "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>
            
             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Rate % </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: 0% "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">Loan State</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: Choose State </option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                        </select>
                    </div>
                </div>
               
                <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">Property Type</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: HomeLoc</option>
                            <option>Type1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Property Address 1 </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: Address "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>

             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Property Address 2 </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: Address "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>
             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Property Address 2 </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: Address "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
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
                            value={propertyData.zip} 
                            maxLength={5}
                            onChange={handleZipInputChange} />
                                 { options.length>0 && propertyData.zip!==null && zip.length!==0 && 
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
                <span className="property-text mt-2">Property State</span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: Choose State </option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                        </select>
                    </div>
                </div>

             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Property City</span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: City  "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>
                
             

                <div className="col-sm-12  col-md-6 col-lg-4 mt-3">
                    <span className="property-text">Zip Code</span>
                    <div>
                       
                        <input 
                            type='text' 
                            className="dashboard-text"  
                            placeholder="Eg: 232135"
                            name="zip"
                            value={zip}
                            maxLength={5}
                            onChange={handleZipInputChange}
                        />
                         { options.length>0 && 
              <div className="col-sm-12  col-md-6 col-lg-4 mt-3">
                    <select id="options" onChange={handleOptionSelect} className="dashboard-selecttextbox" >
                        <option value="">Select city and state...</option>
                        {options.map((option,index) => (
                            <option key={index} value={`${option.city},${option.state}`}>
                                {option.city} {option.state}
                            </option>
                        ))}
                    </select>
                </div>
                }
                         {errors.zip && (<div style={{color:'red'}}>{errors.zip}</div>)}
                    </div>
                </div>

                <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Purchase Price </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: 1000 "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>

             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Loan Amount </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: 1000 "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>

             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Application Date  </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: dd/mm/yyyy "
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>

             <div className="col-sm-12  col-md-4 mt-3">
             <span className="property-text mt-2">Expecting Closing Date </span>
                 <div>
                     <input
                         // type='text'
                         className="dashboard-text"
                         // style={{borderColor:"#CACED8"}}
                         placeholder="Eg: dd/mm/yyyy"
                         name="name"
                          value={propertyData.name} 
                         onChange={handleInputChange}
                     />
                     {errors.name && (<div style={{color:'red'}}>{errors.name}</div>)}
                 </div>
             </div>

             <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                <span className="property-text mt-2">Loan Status </span>
                    <div>
                        <select 
                            className="dashboard-text" 
                            name="MLO User ID"
                            value={loanData.occupancytype}
                            onChange={handleInput}
                        >
                            <option value="">Eg: Success</option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                        </select>
                    </div>
                </div>
            
                <div className="d-flex flex-row justify-content-end">
                <button className="prebutton m-2" onClick={handleReset}>Reset </button>
                <button className="lobutton m-2" onClick={handlePropertySave}>Save</button>
                </div>
                
  

</div>
</div>)}
        </>
    )
}