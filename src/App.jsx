import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import QuestionOne from "./Components/QuestionOne";
import QuestionTwo from "./Components/QuestionTwo";
import QuestionThree from "./Components/QuestionThree";
import QuestionFour from "./Components/QuestionFour";
import QuestionFive from "./Components/QuestionFive";
import NavBar from "./Components/NavBar";

const API = import.meta.env.VITE_API_URL;
const App = () => {
  const [sightingsCount, setSightingsCount] = useState([]);
  const [answer, setAnswer] = useState({
    color: "",
    location: "",
    sound: "",
    activity: "",
    feeling: "",
  })
  

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => setSightingsCount(data));
  }, []);

  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question1" element={<QuestionOne answer={answer} setAnswer={setAnswer}/>} />
        <Route path="/question2" element={<QuestionTwo answer={answer} setAnswer={setAnswer} sightingsCount={sightingsCount}/>} />
        <Route path="/question3" element={<QuestionThree answer={answer} setAnswer={setAnswer}/>} />
        <Route path="/question4" element={<QuestionFour answer={answer} setAnswer={setAnswer}/>} />
        <Route path="/question5" element={<QuestionFive answer={answer} setAnswer={setAnswer}/>} />
      </Routes>
    </>
  );
};

export default App;
