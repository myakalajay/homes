"use client"
import { useEffect, useMemo, useRef } from 'react';
import React, { useState} from 'react';
import Stepper from './Stepper';
import Form from 'react-bootstrap/Form';
import ResponsePage from './ResponsePage';
import Getquotes from '@/pages/Getquotes';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotations } from '@/redux/authSlice';
import axios from 'axios';

const questions = [
  {
    id: 1,
    question: 'Enter Property Zip Code (or) Place Name',
    inputType: 'zipcode',
   
  },
  { 
    id: 2,
    question: 'Loan Purpose',
    options:[
      {
        label:'Purchase',
        value:'0',
        image:'./assets/images/home-page/loanpurchase.png',
      },
      {
        label:'Rate refinance',
        value:'1',
        image: './assets/images/home-page/loanrate.png',
      },
      {
        label:'Cash-out refinance',
        value:'2',
        image: './assets/images/home-page/loancash.png',
      },
      {
        label:'Home equity',
      value:'3',
      image: './assets/images/home-page/loanhome.png',
      }
    ]
  },
  {
    id: 3,
    question: 'Type of Loan',
    options: [
      {
        label: 'Primary',
        value: '0',
        image:'./assets/images/home-page/primary.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
      },
      {
       label:'Second',
       value: '2',
       image:'./assets/images/home-banner/second.jpg',
      },
      {
        label:'Investment',
        value: '1',
        image:'./assets/images/home-banner/Flat.jpg',
       },
      ],
  },
  {
    id: 4,
    question: 'Type of Property',
    options: [
      {
      label: 'Single Family',
      value: '0',
      image: './assets/images/home-banner/single.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
    },
    {
      label: 'Condo',
      value: '20',
      image: './assets/images/home-banner/Condo.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
    },
    {
      label: 'Townhouse',
      value: '15',
      image: './assets/images/home-banner/Townhouse.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
    },
    {
      label: 'Multi-Family',
      value: '12',
      image: './assets/images/home-banner/Multi-Family.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
    },
    {
      label: 'Carriage Home',
      value: '1',
      image: './assets/images/home-banner/Carriage-Home.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
    },
  ],
  },
  {
    id:5,
    question:'What is the Purchase Value of the Property?',
    inputType:'number',
  },
  {
  id:6,
  question: 'Expected Down Payment?',
  inputType:'number',
},
{
id:7,
question:'Number of Borrowers',
options:[ 
  {
  label: 'Single',
  value: 'Single',
  image: './assets/images/home-banner/Icons.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
},
{
  label: 'Multiple',
  value: 'Multiple',
  image: './assets/images/home-banner/people.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
},
{
  label: 'Company',
  value: 'Company',
  image: './assets/images/home-banner/Company.jpg', // Replace 'path_to_your_image.png' with the actual path to your image
},
],
},
{
  id:8,
  question:'Your Residency Status ?',
  options:[
  {
    label:'US Citizen',
    value: 'US Citizen',
    image:'./assets/images/home-banner/USCitizen.png',
  },
  {
    label:'Permanent Residence',
    value: 'Permanent Residence',
    image:'./assets/images/home-banner/permanent.jpg',
  },
  {
    label:'VISA',
    value: 'VISA',
    image:'./assets/images/home-banner/visa.jpg',
  },
  {
    label:'EAD',
    value: 'EAD',
    image:'./assets/images/home-banner/Eda.jpg',
  },
  {
    label:'ITIN',
    value: 'ITIN',
    image:'./assets/images/home-banner/Itin.jpg',
  },
  {
    label:'Foreigner',
    value: 'Foreigner',
    image:'./assets/images/home-banner/foreigner.jpg',
  },
  {
    label:'Other',
    value: 'Other',
    image:'./assets/images/home-banner/Others.png',
  },
]
},
{
  id:9,
  question:' What is your Annual Household Income ?',
  inputType:'number',
},
{
  id:10,
  question:'Give Name to Save Scenario',
  inputType:'text'
},
 {
   id:11,
   question:'First-time Home Buyer ',
   para:'(Not owned any real estate property in last 3yrs) ?',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'./assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'./assets/images/home-banner/wrong.png',
  },],
 },
 {
  id:12,
  question:'Are you or your Spouse an Active Army, Navy, Air Force, Marines, Reservists or National Guardsmen  ?',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'./assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'./assets/images/home-banner/wrong.png',
  },],
 },
 {
  id:13,
  question:' Are you a Doctor, Dentist, Resident or Fellow who is less than 10yrs out of Residency ?',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'./assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'./assets/images/home-banner/wrong.png',
  }
],
},
{
  id:14,
  question:'Bankruptcy, Short Sale, or Foreclourse in the last 3yrs ?',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'./assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'./assets/images/home-banner/wrong.png',
  },],
},
{
  id:15,
  question:'Are you first time investor ? ',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'./assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'./assets/images/home-banner/wrong.png',
  },],
},
{
  
  id:16,
  question: 'What is your employment status ?',
  options:[{
    label:'Employed',
    value: 'Employed',
    image:'./assets/images/home-banner/Employed.jpg',
  },
  {
    label:'Not Employed',
    value: 'Not Employed',
    image:'./assets/images/home-banner/NotEmployed.jpg',
  },
  {
    label:'Self Employed',
    value: 'Self Employed',
    image:'./assets/images/home-banner/SelfEmployed.jpg',
  },
  {
    label:'Retired',
    value: 'Retired',
    image:'./assets/images/home-banner/Retired.jpg',
  },
  ]
},
{
  id:17,
  question:' What are you Total Monthly Payments like Students loans, Credit card, Auto, peronsal, Alimony, Child Support, and any other debt ?',
  inputType:'number',
},
// {
//   id:17,
//   question:'Give Name to Save Scenario',
//   inputType:'text'
// },
{
  id:18,
  question:'What is your estimated credit score ?',
  options:[ {
    label:'580 - 619',
    value: '580-619',
    image:'./assets/images/home-banner/580.jpg',
  },
  {
    label:'620 - 639',
    value: '620-639',
    image:'./assets/images/home-banner/620.jpg',
  },
  {
    label:'640 - 659',
    value: '640-659',
    image:'./assets/images/home-banner/640.jpg',
  },
  {
    label:'660 - 679',
    value: '660-679',
    image:'./assets/images/home-banner/660.jpg',
  }, {
    label:'680 - 699',
    value: '680-699',
    image:'./assets/images/home-banner/680.jpg',
  },
  {
    label:'700 - 719',
    value: '700-719',
    image:'./assets/images/home-banner/700.jpg',
  },
  {
    label:'720 - 739',
    value: '720-739',
    image:'./assets/images/home-banner/720.jpg',
  },
  {
    label:'740 - 759',
    value: '740-759',
    image:'./assets/images/home-banner/740.jpg',
  },
   {
    label:'760 - 779',
    value: '760-779',
    image:'./assets/images/home-banner/760.jpg',
  },
  {
    label:'780+',
    value: '780+',
    image:'./assets/images/home-banner/780.jpg',
  }]
}
];



const StepperScreen = ({ props }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [showStepper, setShowStepper] = useState(true);
  const [textinputvalue, setTextInputValue] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [quotesResponse, setQuotesResponse] = useState(null);
  const totalSteps = questions.length;
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [selectedOption, setSelectedOption] = useState({});
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [options, setOptions] = useState([]);
  // const [lastSubmit,setLastSubmit]=useState
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    const value = e.target.value;
    setTextInputValue(value);
    setAnswers({ ...answers, [questions[step].id]: value });
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    setAnswers({ ...answers, [questions[step].id]: value });
  };

  const handleZip = (e) => {
    setZip(e);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleOptions = (obj) => {
    setOptions(obj);
  };

  const handleOptionSelect = (event) => {
    const selected = {
      city: event.target.value.split(',')[0],
      state: event.target.value.split(',')[1],
      statecode: event.target.value.split(',')[2],
      zipcode: event.target.value.split(',')[3],
    };
    setSelectedOption(selected);
    setCity(selected.city);
    setState(selected.state);
  };

  const handleNext = () => {
    const currentQuestion = filteredQuestions[step]; // Use filteredQuestions for current step
    console.log("Current Question ID:", currentQuestion.id);
    console.log("Current Answers State:", answers);
    // Check input validation based on inputType
    if (currentQuestion.inputType === "zipcode") {
      let s = document.getElementById("zip").value;
      if (s === "" || s === undefined || s.length < 5) {
        alert('Please enter at least 5 characters.');
        return;
      }
    }
    if (currentQuestion.inputType === 'text' && answers[currentQuestion.id]?.length < 5) {
      alert('Please enter at least 5 characters.');
      return;
    }
  
    // Update answers with the current input
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: currentQuestion.inputType === 'number' ? sliderValue : answers[currentQuestion.id]
    }));
  
    // Check if we're on the last step
    if (step === filteredQuestions.length - 1) {
      sendDataToAPI();
    } else {
      setStep(prevStep => prevStep + 1);
    }
  };
  
  const filteredQuestions = useMemo(() => {
    const newQuestions = questions.filter(question => {
      if (question.id === 16 && answers[3] !== '1') {
        setAnswers(prev => ({ ...prev, 16: 0}));
        return false;
      }
      return true;
    });
    return newQuestions;
  }, [answers[3]]);

  console.log("answers",answers)
  

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  let s;

 s = answers[18];
let cleanedString = s?.replace(/[^\w\s]/gi, '');
console.log("last step",s)

const handleAnswer = (questionId, answer) => {
  setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));

  if (questionId === "") {
    if (answer === "Submit") {
      // Handle both API calls
      sendDataToAPI();
    }
  } else if (step < filteredQuestions.length - 1) {
    setStep(prevStep => prevStep + 1);
  }
};

  const sendDataToAPI = async () => {
    const data = {
      user:userid,
      loantype: answers[3],
      propertytype: answers[4],
      zip: zip || selectedOption.zipcode.trim(),
      // zip: answers[3],
      purchaseprice: parseInt(answers[5]),
      down: parseInt(answers[6]),
      borrowercnt: answers[7],
      residencystatus: answers[8],
      annualincome: parseInt(answers[9]),
      name:answers[10],
      firsttimebuyer: answers[11] === 'Yes' ? 1 : 0,
      vetern: answers[12] === 'Yes' ? 1 : 0,
      profession: answers[13] === 'Yes' ? 1 : 0,
      bankrupcy: answers[14] === 'Yes' ? 1 : 0,
      firstinvestorhome: answers[15] === 'Yes' ? 1 : 0,
      workstatus: answers[16],
      debt: parseInt(answers[17]),
      creditscore: parseInt(answers[18]),
      // name: parseInt(answers[17])
    };
  
    try {
      // Call the first API
      const exploreLoanResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getexploreloanoptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const exploreLoanData = await exploreLoanResponse.json();
      setApiResponse(exploreLoanData);
  
      // Prepare data for SetExploreLoan API
      const setExploreLoanData = {
      requestid:parseInt(answers[2]),
      productList: " 3,4,8,2,15,1369,26,23",
      loanProduct1: "30%20Yr%20%20Fixed",
      lockindays: 30,
      waiveescrow: "no",
      propertyState: selectedOption.statecode.trim() || "",
      targetPrice: 0,
      loanpurpose: parseInt(answers[2]),
      loan_amount: answers[5] - answers[6],
      occupancy: parseInt(answers[3]),
      proptype: answers[4],
      propertyZip: zip || selectedOption.zipcode.trim(),
      appraisedvalue: parseInt(answers[5]),
      down: parseInt(answers[6]),
      borrowercnt: answers[7],
      annualincome: parseInt(answers[9]),
      name:answers[10],
      firstTimeHomeBuyer: answers[11],
      vaType: answers[12] === "Yes" ? 1 : 0,
      profession: answers[13] === "Yes" ? 1 : 0,
      bankrupcy: answers[14] === "Yes" ? 1 : 0,
      firstinvestorhome: answers[15] === "Yes" ? 1 : 0,
      workstatus: answers[16],
      debt: parseInt(answers[17]),
      fico: parseInt(cleanedString) || "",
      // name: parseInt(answers[17]),
        user: userid, // Assuming userid is already set in state
      };
  
      // Call the second API
      const setExploreLoanResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/SetExploreLoan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...setExploreLoanData,token:token}),
      });
      const setExploreLoanDataResponse = await setExploreLoanResponse.json();
      
      // Handle successful responses
      console.log('SetExploreLoan Response:', setExploreLoanDataResponse);
      
      setStep(step + 1); // Proceed to the next step after both APIs are called
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  console.log("answers",answers)

  const fetchQuotes = async () => {
    const getdata = {
      requestid: "1",
      productList: "4,2,1369",
      loanProduct1: "30%20Yr%20%20Fixed",
      lockindays: 30,
      waiveescrow: "no",
      propertyState: selectedOption.statecode.trim() || "",
      targetPrice: 0,
      loanpurpose: answers[2],
      loan_amount: answers[5] - answers[6],
      occupancy: parseInt(answers[3]),
      proptype: answers[4],
      propertyZip: zip || selectedOption.zipcode.trim(),
      appraisedvalue: parseInt(answers[5]),
      down: parseInt(answers[7]),
      borrowercnt: answers[8],
      annualincome: parseInt(answers[9]),
      name:answers[10],
      firstTimeHomeBuyer: answers[11],
      vaType: answers[12] === "Yes" ? 1 : 0,
      profession: answers[13] === "Yes" ? 1 : 0,
      bankrupcy: answers[14] === "Yes" ? 1 : 0,
      firstinvestorhome: answers[15] === "Yes" ? 1 : 0,
      workstatus: answers[16],
      debt: parseInt(answers[17]),
      // name:answers[17],
      fico: parseInt(cleanedString) || "",
    };
    // s=getdata.fico
    console.log("last step",s)
      
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/api/v1/mortech-api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getdata),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setQuotesResponse(responseData);
      dispatch(setQuotations({ quotations: responseData }));
      setStep(totalSteps + 1);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      setError("Failed to fetch quotes. Please try again.");
    }
  };

  const handleClose = () => {
    setStep(0);
    setAnswers({});
    props.onClose();
  };

 
console.log("dte[s",step,totalSteps)
  return (
    <>
      <div>
        <ProgressBar currentStep={step} totalSteps={totalSteps} />
        <Stepper
          steps={filteredQuestions.map((question, index) => (
            <Question
              key={index}
              question={question}
              handleAnswer={handleAnswer}
              apiResponse={apiResponse}
              step={step}
              handleSliderChange={handleSliderChange}
              sliderValue={sliderValue}
              handleTextChange={handleTextChange}
              textinputvalue={textinputvalue}
              quotesResponse={quotesResponse}
              userInput={userInput}
              handleUserInput={handleUserInput}
              selectedOption={selectedOption}
              handleOptionSelect={handleOptionSelect}
              options={options}
              handleOptions={handleOptions}
              handleZip={handleZip}
              zip={zip}
              answers={answers} // Pass the answers to the Question component
            />
          ))}
          activeStep={step}
          onNext={handleNext}
          onPrev={handlePrev}
        />
        {error && <div>{error}</div>}
        {answers[2] === "1" ? (
          apiResponse && step === totalSteps && (<ResponsePage response={apiResponse} onGetQuotes={fetchQuotes} />)
        ) : (
          apiResponse && step + 1 === totalSteps && (<ResponsePage response={apiResponse} onGetQuotes={fetchQuotes} />)
        )}
        
        {quotesResponse && step === totalSteps + 1 && (
          <Getquotes quotes={quotesResponse} />
        )}
      </div>
    </>
  );
};

const Question = ({ question, handleAnswer, handleSliderChange, sliderValue, handleTextChange, textinputvalue, userInput, handleUserInput, selectedOption, handleOptionSelect, options, handleOptions, zip, handleZip, answers }) => {
  const cancelTokenSource = useRef(null);
  const [lastFetchedInput, setLastFetchedInput] = useState('');

  useEffect(() => {
    const fetchPlaceInfo = async () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel('Operation canceled due to new request.');
      }

      cancelTokenSource.current = axios.CancelToken.source();

      if (userInput && userInput !== lastFetchedInput) {
        try {
          if (/^\d+$/.test(userInput) && (userInput.length === 3 || userInput.length === 5)) {
            handleZip(userInput);
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_SITE_URL}/getplace?zipcode=${userInput}`,
              { cancelToken: cancelTokenSource.current.token }
            );
            const places = response.data.map(place => ({
              city: place["placename"],
              state: place["statename"],
              statecode: place["statecode"],
            }));
            handleOptions(places);
            setLastFetchedInput(userInput);
          } else if (/^[a-zA-Z\s]+$/.test(userInput)) {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_SITE_URL}/getplace?place=${userInput}`,
              { cancelToken: cancelTokenSource.current.token }
            );
            const places = response.data.map(place => ({
              city: place["placename"],
              state: place["statename"],
              statecode: place["statecode"],
              zipcode: place["zipcode"]
            }));
            handleOptions(places);
            setLastFetchedInput(userInput);
          } else {
            handleOptions([]);
          }
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
          } else {
            handleOptions([]);
            console.log(error);
          }
        }
      }
    };

    const debounceTimeout = setTimeout(fetchPlaceInfo, 300);

    return () => {
      clearTimeout(debounceTimeout);
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel('Operation canceled due to component unmount.');
      }
    };
  }, [userInput, lastFetchedInput, handleZip, handleOptions]);

  if (question.inputType === 'text') {
    return (
      <div className='container'>
        <div className='form-group text-center'>
          <Form.Label className='head'>{question.question}</Form.Label>
          <div className='justify-content-center'>
            <div>
              <input
                type="text"
                autoFocus={true}
                id={`textInput_${question.id}`}
                value={answers[question.id] || textinputvalue}
                onChange={handleTextChange}
                style={{ width: '400px', height: '35px', marginTop: '20px', color: 'danger' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (question.inputType === 'number') {
    return (
      <div className='container'>
        <div className='form-group text-center'>
          <Form.Label className='head'>{question.question}</Form.Label>
          <div className='d-flex flex-row justify-content-center'>
            <div>
              <input
                min={0}
                max={3000000}
                type="range"
                autoFocus={true}
                id={`textInput_${question.id}`}
                value={answers[question.id] || sliderValue}
                onChange={handleSliderChange}
                style={{ width: '300px', marginTop: '20px', color: 'danger' }}
              />
              <br />
              <input
              type="text"
              value={answers[question.id] || sliderValue}
              onChange={handleSliderChange}
              autoFocus={true}
              style={{ marginTop: '20px', padding: '5px' }}
              onKeyDown={(e) => {
                // Allow only numeric values, backspace, delete, arrow keys, and tab
                if (
                  !(
                    (e.key >= '0' && e.key <= '9') || 
                    e.key === 'Backspace' || 
                    e.key === 'Delete' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Tab'
                  )
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
  } else if (question.inputType === 'zipcode') {
    return (
      <div className='container'>
        <div className='form-group text-center'>
          <Form.Label className='head'>{question.question}</Form.Label>
          <div className='justify-content-center'>
            <div>
              <input
                type='text'
                className="dashboard-textbox"
                placeholder="Enter Your Zip Code"
                id="zip"
                name="zip"
                value={userInput}
                onChange={handleUserInput}
                required={true}
                style={{ width: '400px', height: '35px', marginTop: '20px', color: 'danger' }}
            //     onKeyDown={(e) => {
            //     // Allow only numeric values, backspace, delete, arrow keys, and tab
            //    if (
            //     !(
            //       (e.key >= '0' && e.key <= '9') || 
            //       e.key === 'Backspace' || 
            //       e.key === 'Delete' ||
            //       e.key === 'ArrowLeft' ||
            //       e.key === 'ArrowRight' ||
            //       e.key === 'Tab'
            //     )
            //   ) {
            //     e.preventDefault();
            //   }
            // }}
          />
              {options.length > 0 ? (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                  <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-selecttextbox" style={{ width: "398px", marginLeft: "355px" }} required={true}>
                    <option value="">Select city and state...</option>
                    {options.map((option, index) => (
                      <option key={index} value={`${option.city},${option.state}, ${option.statecode}, ${option.zipcode}`}>
                        {option.city} {option.statecode} {option.zipcode}
                      </option>
                    ))}
                  </select>
                </div>
              ) : ""}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='text-center'>
          <Form.Label className='head'>{question.question}</Form.Label>
          <p className='para text-center'>{question.para}</p>
        </div>
        <div className='d-flex flex-row justify-content-center flex-wrap'>
          {question.options.map((option, index) => (
            <div key={index} className='option-container'>
              <div>
                <button
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`stepbox text-center ${answers[question.id] === option.label ? 'selected' : ''}`}
                >
                  <div className='d-flex justify-content-center p-2'>
                    <img className='img' src={option.image} alt={option.label} />
                    <span><p className='option-text'>{option.label}</p></span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
        {question.id === 18 && (
          <div>
            <div className='d-flex flex-row justify-content-center'>
              <button onClick={() => handleAnswer("","Submit")} className='btn col-2 btn-danger m-1 mt-5 p-2'>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default StepperScreen;
