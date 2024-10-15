"use client"
import { useEffect, useMemo, useRef } from 'react';
import React, { useState} from 'react';
import Stepper from '@/page/Stepper';
import Form from 'react-bootstrap/Form';
import ProgressBar from '@/page/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const questions = [
  {
    id:1,
    question: 'Select Property type',
    options:[
      {
      label:'Single Family',
      image:'/assets/images/home-banner/single.jpg',
    },
    {
      label:'Multi Family',
      image:'/assets/images/home-banner/Multi-Family.jpg'
    },
    {
      label:'Condo',
      image:'/assets/images/home-banner/Condo.jpg',
    },
    {
      label:'Townhouse',
      image:'/assets/images/home-banner/Townhouse.jpg',
    },
    {
      label:'Carriage Home',
      image:'/assets/images/home-banner/Carriage-Home.jpg',
    },
    {
      label:'Other',
      image:'/assets/images/home-banner/Others.png',
    }]
  },
  {
    id: 2,
    question: 'Select occupancy type',
    options:[
      {label:'Primary',image:'/assets/images/home-page/primary.jpg'},{label:'Second',image:'/assets/images/home-banner/second.jpg'},{label:'Investment',image:'/assets/images/home-banner/Flat.jpg'}]
  },
  {
    id: 3,
    question: 'Enter Street Address',
    inputType: 'text',
   
  },
  {
    id:4,
    question:'Enter Address Line 2',
    inputType:'text',
  },
  {
  id:5,
  question: 'Enter Zip code',
  inputType:'zipcode',
},
{
  id:6,
  question:'Enter Purchase Price ?',
  inputType:'number',
},
{
  id:7,
  question:'Is Property PaidOff ?',
  options:[
    {
    label:'Yes',
    value: 'Yes',
    image:'/assets/images/home-banner/right.png',
  },{
    label:'No',
    value: 'No',
    image:'/assets/images/home-banner/wrong.png',
  },],
},
{ 
  id:8,
  question: 'Give Name to Save Property',
  inputType:'text'
}
];

const StepperProperty = ({onHide}) => {
  console.log("onhide",onHide)
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [textinputvalue, setTextInputValue] = useState('');
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
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const [showModal,setShowModal]=useState(false)
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
    // Check input validation based on inputType
    if (currentQuestion.inputType === "zipcode") {
      let s = document.getElementById("zip").value;
      if (s === "" || s === undefined) {
        alert('Please enter at least 5 characters.');
        return;
      }
    }
    // if (currentQuestion.inputType === 'text' && answers[currentQuestion.id]?.length < 5) {
    //   alert('Please enter at least 5 characters.');
    //   return;
    // }
  
    // Update answers with the current input
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: currentQuestion.inputType === 'number' ? sliderValue : answers[currentQuestion.id]
    }));
  
    // Check if we're on the last step
    if (step === filteredQuestions.length - 1) {
      fetchQuotes();
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

  
  
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  let s;

  s = answers[8];
  let cleanedString = s?.replace(/[^\w\s]/gi, '');
  console.log("last step",s)
  
  
//   let s;

//  s = answers[10];
// let cleanedString = s?.replace(/[^\w\s]/gi, '');
// console.log("last step",s)

const handleAnswer = (questionId, answer) => {
  setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));

  if (questionId === "") {
    if (answer === "Submit") {
      // Handle both API calls
      fetchQuotes();
    }
  } 
};

const fetchQuotes = async () => {
  const getdata = {
    propertyname: parseInt(answers[8]),
    propertytype: answers[1],
    addr1: answers[2],
    addr2: answers[3],
    zip: zip || selectedOption.zipcode.trim(),
    state: selectedOption.state,
    user: userid,
    purchasevalue:answers[6],
    paidoff: answers[7] === 'Yes' ? 1 : 0,
    sold: 0,
    track:1 ,    
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserproperty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getdata),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    setIsSuccess(true);
  setStep(totalSteps + 1);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    setError("Failed to fetch quotes. Please try again.");
  }
};
const handleClose = ()=>{
  setShowModal(false)
}


  return (
    <>
      <div>
        <ProgressBar currentStep={step} totalSteps={totalSteps} />
        {!isSuccess ? (
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
      ) : (
        <SuccessMessage onClose={onHide} />
      )}
        {error && <div>{error}</div>}
      </div>
    </>
  );
};



const SuccessMessage = ({onClose}) => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2 style={{ color: "#AB1331" }}>Property Saved Successfully</h2>
    <p className='text-center'>Your property information has been successfully submitted.</p>
    <button className='lobutton' onClick={onClose}>Close</button>
  </div>
);

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
                className='dashboard-text'
                style={{ width: '370px', height: '35px', marginTop: '20px', color: 'danger' }}
              />
            </div>
          </div>
        </div>
        {question.id === 8 && (
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
  } else if (question.inputType === 'dropdown') {
    return (
      <div className='container'>
        <div className='form-group text-center'>
          <Form.Label className='head'>{question.question}</Form.Label>
          <div className='justify-content-center'>
            <select
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className='dashboard-text'
              style={{ width: '370px', height: '35px', marginTop: '20px', color: 'danger' }}
            >
              <option value="">Select Property Type</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
   else if (question.inputType === 'number') {
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
                className="dashboard-text"
                placeholder="Enter Your Zip Code"
                id="zip"
                name="zip"
                value={userInput}
                onChange={handleUserInput}
                required={true}
                style={{ width: '370px', height: '35px', marginTop: '20px', color: 'danger' }}
              />
              {options.length > 0 ? (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                  <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-text" style={{ width: "370px", marginLeft: "368px" }} required={true}>
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
      </div>
    );
  }
};

export default StepperProperty;
