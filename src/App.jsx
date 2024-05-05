import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import QuestionOne from "./Components/QuestionOne";
import QuestionTwo from "./Components/QuestionTwo";
import QuestionThree from "./Components/QuestionThree";
import QuestionFour from "./Components/QuestionFour";
import QuestionFive from "./Components/QuestionFive";

const API = import.meta.env.VITE_API_URL;
const App = () => {
  // const [, ] = useState([]);
  const [adults, setAdults] = useState([]);

  useEffect(() => {
    fetch(`${API}?age=Adult`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question1" element={<QuestionOne />} />
        <Route path="/question2" element={<QuestionTwo />} />
        <Route path="/question3" element={<QuestionThree />} />
        <Route path="/question4" element={<QuestionFour />} />
        <Route path="/question5" element={<QuestionFive />} />
      </Routes>
    </>
  );
};

export default App;
