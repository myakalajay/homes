"use client"
import { useEffect, useMemo, useRef } from 'react';
import React, { useState} from 'react';
import Stepper from '@/page/Stepper';
import Form from 'react-bootstrap/Form';
import ResponsePage from '@/page/ResponsePage';
import Getquotes from '@/pages/Getquotes';
import ProgressBar from '@/page/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotations } from '@/redux/authSlice';
import axios from 'axios';

const questions = [
  { 
    id: 1,
    question: 'Property Name',
    inputType:'text'
  },
  {
    id: 2,
    question: 'Property type',
    inputType:'text',
  },
  {
    id: 3,
    question: 'occupancy type',
    inputType:'text'
  },
  {
    id: 4,
    question: 'Address',
    inputType: 'text',
   
  },
  {
    id:5,
    question:'Address2',
    inputType:'text',
  },
  {
  id:6,
  question: 'Zip code',
  inputType:'zipcode',
},
{
  id:7,
  question:'Purchase Price?',
  inputType:'number',
},
];



const StepperProperty = ({ props }) => {
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
      if (s === "" || s === undefined) {
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
      sendDataToAPI();
    }
  } else if (step < filteredQuestions.length - 1) {
    setStep(prevStep => prevStep + 1);
  }
};

  const sendDataToAPI = async () => {
      const setExploreLoanData = {
      
        name: parseInt(answers[1]),
        type: answers[2],
        addr1: answers[3],
        addr2: answers[4],
        zip: zip || selectedOption.zipcode.trim(),
        state: selectedOption.state,
        user: userid, // Assuming userid is already set in state
      };
      try {
      // Call the second API
      const setExploreLoanResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserproperty`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...setExploreLoanData,token:token}),
      });
      const setExploreLoanDataResponse = await setExploreLoanResponse.json();
      console.log('SetExploreLoan Response:', setExploreLoanDataResponse);
      
      setStep(step + 1); // Proceed to the next step after both APIs are called
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  console.log("answers",answers)

 
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
                className='dashboard-text'
                style={{ width: '370px', height: '35px', marginTop: '20px', color: 'danger' }}
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
                  <select id="options" onChange={(e) => handleOptionSelect(e)} className="dashboard-text" style={{ width: "370px", marginLeft: "369px" }} required={true}>
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
        {question.id === 17 && (
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

export default StepperProperty;
