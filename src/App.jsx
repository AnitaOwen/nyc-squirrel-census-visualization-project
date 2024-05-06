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
import BonusQuestion from "./Components/BonusQuestion";

const API = import.meta.env.VITE_API_URL;
const App = () => {
  // const [, ] = useState([]);
  const [answer, setAnswer] = useState({
    color: "",
    location: "",
    sound: "",
    activity: "",
    social: "",
    feeling: "",
  })
  const [adults, setAdults] = useState([]);

  // useEffect(() => {
  //   fetch(`${API}?age=Adult`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question1" element={<QuestionOne />} />
        <Route path="/question2" element={<QuestionTwo answer={answer} setAnswer={setAnswer} />} />
        <Route path="/question3" element={<QuestionThree />} />
        <Route path="/question4" element={<QuestionFour />} />
        <Route path="/question5" element={<QuestionFive />} />
        <Route path="/bonus" element={<BonusQuestion/>} />
      </Routes>
    </>
  );
};

export default App;
