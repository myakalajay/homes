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
    id: 1,
    question: 'Select Property',
    inputType:'propertyNames'
  },
  {
    id: 2,
    question: 'Select Mortgage Company',
   inputType:'mortgageCompanies'
  },
  {
    id: 3,
    question: 'Select Loan Type',
    options: [{label:'Conv',image:'/assets/images/icons/loan_Conventional.png'},
      {label:'ARM',image:'/assets/images/icons/loan_ARM.png'},
      {label:'VA Loan',image:'/assets/images/icons/loan_VA.png'},
      {label:'FHA Loan',image:'/assets/images/icons/loan_FHA.png'},
      {label:'USDA Loan',image:'/assets/images/icons/loan_USDA.png',},
    {label:'NON-QM Loan',image:'/assets/images/icons/loan_NON-QM.png'}]
  },
  {
    id:4,
    question:'Select Loan Term',
    inputType:'dropdown',  
    options: [
      { label: '5 Years', value: '5' },
      { label: '10 Years', value: '10' },
      { label: '15 Years', value: '15' },
      { label: '20 Years', value: '20' },
      { label: '25 Years', value: '25' },
      { label: '30 Years', value: '30' },
      { label: '40 Years', value: '40' }
    ]
},
  {
    id:5,
    question:'Enter StartDate',
    inputType:'startdate'
  },
  {
    id:6,
    question:'Enter EndDate',
    inputType:'startdate'
  },
  {
    id: 7,
    question: 'Enter Loan Amount',
    inputType: 'number',
   
  },
  {
    id:8,
    question:'Enter Pmi Amount',
    inputType:'number',
  },
{
  id:9,
  question:'Enter Loan Rate?',
  inputType:'number',
},
// {
//     id:9,
//     question:'Select Loan Term',
//     inputType:'dropdown',  
//     options: [
//       { label: '5 Years', value: '5' },
//       { label: '10 Years', value: '10' },
//       { label: '15 Years', value: '15' },
//       { label: '20 Years', value: '20' },
//       { label: '25 Years', value: '25' },
//       { label: '30 Years', value: '30' },
//       { label: '40 Years', value: '40' }
//     ]
// },
{
    id:10,
    question:'Enter Monthly Payment Amount',
    inputType:'number',
},
{
  id:11,
  question:'Track for Refinance ?',
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
}
];

const StepperLoan = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [textinputvalue, setTextInputValue] = useState('');
  const [dateinputvalue,setDateInputValue] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null); 
  const [propertyNames, setPropertyNames] = useState([]); 
  const [mortgageCompanies, setMortgageCompanies] = useState([]);
  const totalSteps = questions.length;
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState([]);
  const userid = useSelector(state=> state.auth.userid);
  const token = useSelector(state=> state.auth.token);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchDashname = async () => {
        const requestData = { user: userid, token: token };
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/getuserproperty`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (Array.isArray(data.result_sets) && data.result_sets.length > 0) {
              setPropertyNames(data.result_sets[2]);
            } else {
              setPropertyNames([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchDashname();

}, [userid, token]);
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
  
      
      const handleDateChange = (id, value) => {
        setDateInputValue(value); // Update local text input value
        setAnswers(prevAnswers => ({ ...prevAnswers, [id]: value })); // Update answers state with the new value
      };

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

  // const handleZip = (e) => {
  //   setZip(e);
  // };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleOptions = (obj) => {
    setOptions(obj);
  };

  const handleNext = (id, value) => {
    const currentQuestion = filteredQuestions[step]; // Use filteredQuestions for current step
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: currentQuestion.inputType === 'number' ? sliderValue : answers[currentQuestion.id]
    }));
    if (id === 1) {
      const selected = propertyNames.find(property => property.propertyid === value);
      setSelectedProperty(selected); // Store the selected property
    }
    // Check if we're on the last step
    if (step === filteredQuestions.length - 1) {
      fetchQuotes();
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

  const handlePrev = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleAnswer = (questionId, answer) => {
  setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));

  if (questionId === "") {
    if (answer === "Submit") {
      fetchQuotes();
    }
  } else if (step < filteredQuestions.length - 1) {
    setStep(prevStep => prevStep + 1);
  }
};

const fetchQuotes = async () => {
  const getdata = {
    name: answers[1],
    propid: selectedProperty?.propid,
    lender: answers[2],
    loantype: answers[3],
    startdate:answers[5],
    enddate:answers[6],
    loanamount: answers[7],
    user: userid,
    loanid:0,
    pmiamount:answers[8],
    rate:answers[9],
    term:answers[4],
    emiamount:answers[10],
    paidoff: 0,
    sold: 0,
    track: answers[11] === 'Yes' ? 1 : 0,
    refinance:0,  
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setuserpropertyloan`, {
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
              handleDateChange={handleDateChange}
              handleTextChange={handleTextChange}
              textinputvalue={textinputvalue}
              userInput={userInput}
              handleUserInput={handleUserInput}
              options={options}
              handleOptions={handleOptions}
              propertyNames={propertyNames}
              mortgageCompanies={mortgageCompanies}
              answers={answers}
            />
          ))}
          activeStep={step}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      ) : (
        <SuccessMessage onClose={onClose} />
      )}
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

const SuccessMessage = ({onClose}) => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2 style={{ color: "#AB1331" }}>Loan Saved Successfully!</h2>
    <p className='text-center'>Your Loan information has been successfully submitted.</p>
    <button className='lobutton' onClick={onClose}>Close</button>
  </div>
);

const Question = ({ question, handleAnswer, handleSliderChange,handleDateChange, sliderValue, handleTextChange, textinputvalue, userInput, handleUserInput, selectedOption, handleOptionSelect, options, handleOptions, zip, handleZip,propertyNames, mortgageCompanies, answers }) => {
  if (question.inputType === 'propertyNames') {
    return (
      <div className='container'>
      <div className="form-group text-center">
        <Form.Label className='head'>{question.question}</Form.Label>
        <div className='justify-content-center'>
        <select className='dashboard-text' onChange={(e) => handleAnswer(question.id, e.target.value)} value={answers[question.id] || ''}>
          <option value="">Select Property Name</option>
          {propertyNames.map((properties) => (
            <option key={properties.propertyid} value={properties.propertyname}>
              {properties.propertyname}
            </option>
          ))}
        </select>
        </div>
        </div>
      </div>
    );
  }
  else if (question.inputType === 'startdate') {
    return (
      <div className='container'>
      <div className='form-group text-center'>
        <Form.Label className='head'>{question.question}</Form.Label>
        <div className='justify-content-center'>
          <div>
            <input
              type="date"
              autoFocus={true}
              id={`dateInput_${question.id}`}
              value={answers[question.id] || ""}
              onChange={(e) => handleDateChange(question.id, e.target.value)} // Use the correct handler
              className='dashboard-text'
              style={{ width: '370px', height: '35px', marginTop: '20px', color: 'black' }} // Changed color to 'black'
            />
          </div>
        </div>
      </div>
    </div>
    )
  }
  else if (question.inputType === 'mortgageCompanies') {
    return (
      <div className='container'>
      <div className="form-group text-center">
        <Form.Label className='head'>{question.question}</Form.Label>
        <div className='justify-content-center'>
        <select className='dashboard-text' onChange={(e) => handleAnswer(question.id, e.target.value)} value={answers[question.id] || ''}>
          <option value="">Select Mortgage Company</option>
          {mortgageCompanies.map((lender) => (
            <option key={lender.lenderid} value={lender.lendername}>
              {lender.lendername}
            </option>
          ))}
        </select>
      </div>
      </div>
      </div>
    );
  }
  else if (question.inputType === 'dropdown'){
    return (
      <div className='container'>
      <div className="form-group text-center">
      <Form.Label className='head'>{question.question}</Form.Label>
          <div className='justify-content-center'>
            <select
              onChange={(e) => handleAnswer(question.id, e.target.value)} 
              className={`dashboard-text text-center ${answers[question.id] ? 'selected' : ''}`} 
              value={answers[question.id] || ''} 
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            </div>
      </div>
      </div>
    );
  }
  else if (question.inputType === 'text') {
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
  }
  else {
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
        {question.id === 11 && (
          <div>
            <div className='d-flex flex-row justify-content-center'>
              <button onClick={() => handleAnswer("","Submit")} className='btn col-2 btn-danger mt-5'>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default StepperLoan;
