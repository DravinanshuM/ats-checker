import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { submitPDF } from '../../redux/reducers/atsReducer';
import { useNavigate } from 'react-router-dom';
const ATSChecker = () => {
  const [jobDescription, setJobDescription] = useState('');
  const dispatch = useDispatch();
  const [darkMode,setDark] = useState(true)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    let res = e.target.files[0]
    dispatch(submitPDF({ jobDescription, res }));
  };


  useEffect(()=>{
    const token = Boolean(localStorage.getItem("token"))
    if(!token){
      navigate('/login')
    }
  },[navigate])


  const handleATSCheck = () => {
    // dispatch(checkATS({ jobDescription, resume }));
  };

  const handleScoreCheck = () => {
    // dispatch(checkScore({ jobDescription, resume }));
  };

  const toggleDark = (e) => {
    if(e.target.checked){
      setDark(false)
    }else{
      setDark(true)
    }
  }

  return (
    <div className={darkMode ? "min-h-screen bg-white-900 text-black flex items-center justify-center" : "min-h-screen bg-gray-900 text-gray-900 flex items-center justify-center"}>
      <div className={darkMode ? "bg-white-800 text-black p-2 rounded-lg shadow-lg w-full max-w-[60rem]" : "bg-gray-800 text-white p-2 rounded-lg shadow-lg w-full max-w-[60rem]"}>
        <h1 className="text-2xl mb-4 text-center">Track Resume 😎</h1>
        <div className="mb-4 text-center">
          <span>Dark Theme <input type="checkbox" name="back" onChange={toggleDark}/></span>
        </div>
        <textarea
          className={darkMode?"w-full p-2 mb-4 text-black bg-white-800":"w-full p-2 mb-4 text-white bg-gray-800"}
          placeholder="Enter the Job Description"
          rows={6}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleATSCheck}
          >
            Check ATS Result
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleScoreCheck}
          >
            Check Score
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            How it works
          </button>
        </div>
      </div>
    </div>
  );
};

export default ATSChecker;
