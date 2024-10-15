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
    id: 2,
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
    id: 3,
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
    id: 4,
    question: 'Enter Property Zip Code/Place',
    inputType: 'zipcode',
   
  },
  {
    id:5,
    question:'Enter Loan Amount',
    inputType:'number',
  },
  {
  id:6,
  question: 'Enter Property Value',
  inputType:'number',
},

{
  id:7,
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
  id:8,
  question:' What is your Monthly income ?',
  inputType:'number',
},
 

{
  id:9,
  question:' Enter  Last debt ?',
  inputType:'number',
},
{
  id:10,
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

},
// {
//   id:17,
//   type:'button',
//   options:['Submit']
// }
];



const Quickquote = ({ props }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [textinputvalue, setTextInputValue] = useState('');
  const totalSteps = questions.length;
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [selectedOption, setSelectedOption] = useState({});
  const [quotesResponse, setQuotesResponse] = useState(null);
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [options, setOptions] = useState([]);
  // const [lastSubmit,setLastSubmit]=useState
  const userid = useSelector(state=> state.auth.userid);
  const [showGetquotes, setShowGetquotes] = useState(false); 
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
      if (question.id === 14 && answers[2] !== '1') {
        setAnswers(prev => ({ ...prev, 14: 0}));
        return false;
      }
      return true;
    });
    return newQuestions;
  }, [answers[2]]);

  console.log("answers",answers)
  

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  let s;

 s = answers[17];
let cleanedString = s?.replace(/[^\w\s]/gi, '');
console.log("last step",s)


const handleAnswer = (questionId, answer) => {
  setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));

  if (questionId === "") {
    if (answer === "Submit") {
      // Handle both API calls
      fetchQuotes();
      setShowGetquotes(true);
    }
  } else if (step < filteredQuestions.length - 1) {
    setStep(prevStep => prevStep + 1);
  }
};

  // const sendDataToAPI = async () => {
  //   const data = {
  //     user:userid,
  //     loanpurpose:answers[1],
  //     loantype: answers[2],
  //     propertytype: answers[3],
  //     zip: zip || selectedOption.zipcode.trim(),
  //     // zip: answers[3],
  //     loan_amount: parseInt(answers[5]),
  //     propertyvalue: parseInt(answers[6]),
  //     borrowercnt: 1,
  //     residencystatus: answers[7],
  //     annualincome: parseInt(answers[8]),
  //     workstatus: "Employe",
  //     debt: parseInt(answers[9]),
  //     creditscore: parseInt(answers[10]),
  //   };
  
  //   try {
  //     // Call the first API
  //     const exploreLoanResponse = await fetch(`${process.env.NEXT_API_URL}/api/v1/mortech-api/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const exploreLoanData = await exploreLoanResponse.json();
  //     setApiResponse(exploreLoanData);
      
  //     setStep(step + 1); // Proceed to the next step after both APIs are called
  
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const fetchQuotes = async () => {
    const getdata = {
      // targetPrice: 0,
      // occupancy: parseInt(answers[2]),
      // appraisedvalue: parseInt(answers[5]),
      // down: parseInt(answers[6]),
      // annualincome: parseInt(answers[9]),
      // firstTimeHomeBuyer: answers[10],
    
      requestid: "1",
      productList: "4,2,1369",
      loanProduct1: "30%20Yr%20%20Fixed",
      lockindays: 30,
      waiveescrow: "no",
      targetPrice: 0,
      user:userid,
      loanpurpose:answers[1],
      occupancy: parseInt(answers[2]),
      // loantype: answers[2],
      proptype: answers[3],
      propertyZip: zip || selectedOption?.zipcode?.trim(),
      propertyState: selectedOption?.statecode?.trim() || "",
      // zip: answers[3],
      loan_amount: parseInt(answers[5]),
      appraisedvalue: parseInt(answers[6]),
      borrowercnt: 1,
      residencystatus: answers[7],
      annualincome: parseInt(answers[8]),
      firstTimeHomeBuyer: 0,
      vaType: 0,
      profession: 0,
      bankrupcy: 0,
      firstinvestorhome: 0,
      workstatus: "Employe",
      debt: parseInt(answers[9]),
      fico: parseInt(answers[10]),
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
 
console.log("dte[s",step,totalSteps)
  return (
    <>
      <div>
        <ProgressBar currentStep={step} totalSteps={totalSteps} />
        {showGetquotes ? (
          <>
          {quotesResponse && step === totalSteps + 1 && (
            <Getquotes quotes={quotesResponse} />
          )} // Render Getquotes page if showGetquotes is true
        </>
        ) : (
        <Stepper
          steps={filteredQuestions.map((question, index) => (
            <Question
              key={index}
              question={question}
              handleAnswer={handleAnswer}
              step={step}
              handleSliderChange={handleSliderChange}
              sliderValue={sliderValue}
              handleTextChange={handleTextChange}
              textinputvalue={textinputvalue}
              userInput={userInput}
              handleUserInput={handleUserInput}
              quotesResponse={quotesResponse}
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
        )}
        {error && <div>{error}</div>}
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
        {question.id === 10 && (
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

export default Quickquote;
